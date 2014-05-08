<?php
// FIXME: On Special:Contributions add ability to filter a la desktop
class SpecialMobileContributions extends SpecialMobileHistory {
	// Note we do not redirect to Special:History/$par to allow the parameter to be used for usernames
	protected $specialPageName = 'Contributions';
	/**  @var User */
	protected $user;
	/**  @var MWTimestamp */
	protected $lastDate;
	/**  @var bool Whether to show the username in results or not */
	protected $showUsername = false;
	/** @var array Lengths of previous revisions */
	protected $prevLengths = array();

	/**
	 * Gets HTML to place in the header bar
	 * @param Title $title The page to link to
	 * @return string HTML representing the link in the header bar
	 */
	protected function getHeaderBarLink( $title ) {
		return Html::element( 'a',
			array(
				'class' => 'mw-mf-user icon icon-16px icon-text',
				'href' => SpecialPage::getTitleFor( 'UserProfile', $title->getText() )->getLocalUrl(),
			),
			$title->getText() );
	}

	public function executeWhenAvailable( $par = '' ) {
		wfProfileIn( __METHOD__ );
		if ( $par ) {
			// enter article history view
			$this->user = User::newFromName( $par );
			if ( $this->user && $this->user->idForName() ) {
				$this->renderHeaderBar( $this->user->getUserPage() );
				$res = $this->doQuery();
				$this->showContributions( $res );
				wfProfileOut( __METHOD__ );
				return;
			}
		}
		$this->showPageNotFound();
		wfProfileOut( __METHOD__ );
	}

	protected function showContributions( ResultWrapper $res ) {
		$numRows = $res->numRows();
		$rev = null;
		$out = $this->getOutput();
		$revs = array();
		$prevRevs = array();
		foreach ( $res as $row ) {
			$rev = new Revision( $row );
			$revs[] = $rev;
			if ( $res->key() <= self::LIMIT + 1 && $rev->getParentId() ) {
				$prevRevs[] = $rev->getParentId();
			}
		}
		$this->prevLengths = Revision::getParentLengths( wfGetDB( DB_SLAVE ), $prevRevs );
		if ( $numRows > 0 ) {
			$count = 0;
			foreach (  $revs as $rev ) {
				if ( $count++ < self::LIMIT ) {
					$this->showContributionsRow( $rev );
				}
			}
			$out->addHtml( '</ul>' );
			// Captured 1 more than we should have done so if the number of
			// results is greater than the limit there are more to show.
			if ( $numRows > self::LIMIT ) {
				$out->addHtml( $this->getMoreButton( $rev->getTimestamp() ) );
			}
		} else {
			$out->addHtml( Html::element( 'div', array( 'class' => 'error alert' ),
				$this->msg( 'mobile-frontend-history-no-results' ) ) );
		}
	}

	/**
	 * @param Revision $rev
	 */
	protected function showContributionsRow( Revision $rev ) {
		wfProfileIn( __METHOD__ );
		$user = $this->getUser();
		$userId = $rev->getUser( Revision::FOR_THIS_USER, $user );
		if ( $userId === 0 ) {
			$username = IP::prettifyIP( $rev->getRawUserText() );
			$isAnon = true;
		} else {
			$username = $rev->getUserText( Revision::FOR_THIS_USER, $user );
			$isAnon = false;
		}

		// FIXME: Style differently user comment when this is the case
		if ( $rev->userCan( Revision::DELETED_COMMENT, $user ) ) {
			$comment = $rev->getComment( Revision::FOR_THIS_USER, $user );
			$comment = $this->formatComment( $comment, $this->title );
		} else {
			$comment = $this->msg( 'rev-deleted-comment' )->plain();
		}

		$ts = $rev->getTimestamp();
		$this->renderListHeaderWhereNeeded( $this->getLanguage()->userDate( $ts, $this->getUser() ) );
		$ts = new MWTimestamp( $ts );

		if ( $rev->userCan( Revision::DELETED_TEXT, $user ) ) {
			$diffLink = SpecialPage::getTitleFor( 'MobileDiff', $rev->getId() )->getLocalUrl();
		} else {
			$diffLink = false;
		}

		// FIXME: Style differently user comment when this is the case
		if ( !$rev->userCan( Revision::DELETED_USER, $user ) ) {
			$username = $this->msg( 'rev-deleted-user' )->plain();
		}

		$bytes = null;
		if ( isset( $this->prevLengths[$rev->getParentId()] ) ) {
			$bytes = $rev->getSize() - $this->prevLengths[$rev->getParentId()];
		}
		$isMinor = $rev->isMinor();
		$this->renderFeedItemHtml( $ts, $diffLink, $username, $comment,
			$rev->getTitle(), $isAnon, $bytes, $isMinor
		);

		wfProfileOut( __METHOD__ );
	}

	protected function getQueryConditions() {
		if ( $this->user ) {
			$conds = array(
				'rev_user' => $this->user->getID(),
			);
		} else {
			$conds = array();
		}
		return $conds;
	}

	public function getDesktopUrl( $subPage ) {
		return null;
	}
}

<?php
/**
 * MinervaTemplateAlpha.php
 */

/**
 * Alternative Minerva template sent to users who have opted into the
 * experimental (alpha) mode via Special:MobileOptions
 */
class MinervaTemplateAlpha extends MinervaTemplateBeta {
	/** {@inheritdoc} */
	protected $renderHistoryLinkBeforeContent = false;
	/**
	 * @var string $searchPlaceHolderMsg Message used as placeholder in search input
	 */
	protected $searchPlaceHolderMsg = 'mobile-frontend-placeholder-alpha';

	/**
	 * @inheritdoc
	 * Renders a search link and branding.
	 */
	protected function makeChromeHeaderContent( $data ) {
		echo Html::element( 'a',
				array(
					'id' => 'searchInput',
					'class' => MobileUI::iconClass( 'search' ),
					'href' => Title::newFromText( 'Special:Search' )->getLocalUrl(),
				),
				'Search'
			) .
			Html::openElement( 'div',
				array(
					'class' => 'header-title',
				)
			) .
			SkinMinerva::getSitename() .
			Html::closeElement( 'div' );
	}

	/**
	 * Get button information to link to Special:Nearby to find articles
	 * (geographically) related to this
	 */
	public function getNearbyButton() {
		global $wgMFNearby;
		$title = $this->getSkin()->getTitle();
		$result = array();

		if ( $wgMFNearby && class_exists( 'GeoData' ) && GeoData::getPageCoordinates( $title ) ) {
			$result['nearby'] = array(
				'url' => SpecialPage::getTitleFor( 'Nearby' )->getLocalUrl() . '#/page/' . $title->getText(),
				'class' => 'nearby-button',
				'label' => wfMessage( 'mobile-frontend-nearby-sectiontext' )->text()
			);
		}

		return $result;
	}

	/**
	 * Get page secondary actions
	 */
	protected function getSecondaryActions() {
		$result = parent::getSecondaryActions();

		$result += $this->getNearbyButton();

		// add categories button
		$skin = $this->getSkin();
		$categories = $skin->getCategoryLinks( false /* don't render the heading */ );
		if ( $categories ) {
			$result['categories'] = array(
				'url' => '#/categories',
				// add hidden class (the overlay works only, when JS is enabled (class will
				// be removed in categories/init.js)
				'class' => 'category-button hidden',
				'label' => wfMessage( 'categories' )->text()
			);
		}

		return $result;
	}
}

<?php

if ( !defined( 'MEDIAWIKI' ) ) {
	die( -1 );
}

class SearchTemplate extends MobileFrontendTemplate {

	public function getHTML() {

		$searchField = Sanitizer::encodeAttribute( $this->data['searchField'] );
		$mainPageUrl = Sanitizer::encodeAttribute( $this->data['mainPageUrl'] );
		$randomPageUrl = Sanitizer::encodeAttribute( $this->data['randomPageUrl'] );
		$homeButton = wfMessage( 'mobile-frontend-home-button' )->escaped();
		$randomButton = wfMessage( 'mobile-frontend-random-button' )->escaped();
		$clearText = Sanitizer::encodeAttribute( wfMsg( 'mobile-frontend-clear-search' ) );
		$placeholder = Sanitizer::encodeAttribute( wfMsg( 'mobile-frontend-placeholder' ) );

		$scriptUrl = wfScript();
		$searchBoxDisplayNone = ( $this->data['hideSearchBox'] ) ? ' style="display: none;" ' : '';

		$logoDisplayNone = ( $this->data['hideLogo'] ) ? ' style="display: none;" ' : '';

		$openSearchResults = '<div id="results"></div>';

		$languageSelection = $this->data['buildLanguageSelection'] . '<br/>';
		$languageSelectionText = '<b>' . wfMessage( 'mobile-frontend-language' )->escaped() . ':</b><br/>';
		$languageSelectionDiv = $languageSelectionText . $languageSelection;

		$regularSite = wfMessage( 'mobile-frontend-regular-site' )->escaped();
		$viewNormalSiteURL = Sanitizer::encodeAttribute( $this->data['viewNormalSiteURL'] );

		$searchWebkitHtml = <<<HTML
		<div id='header'>
			<div id='searchbox' {$logoDisplayNone}>
			<img width="35" height="22" alt='Logo' id='logo' src='{$this->data['wgMobileFrontendLogo']}' {$logoDisplayNone} />
			<form id='searchForm' action='{$scriptUrl}' class='search_bar' method='get' {$searchBoxDisplayNone}>
			  <input type="hidden" value="Special:Search" name="title" />
				<div id="sq" class="divclearable">
					<input type="search" name="search" id="search" size="22" value="{$searchField}" autocomplete="off" maxlength="1024" class="search" placeholder="{$placeholder}" />
					<div class="clearlink" id="clearsearch" title="{$clearText}"></div>
				</div>
			  <button id='goButton' class='goButton' type='submit'></button>
			</form>
			</div>
			<div class='nav' id='nav' {$logoDisplayNone}>
			{$languageSelectionDiv}
			<a href="{$mainPageUrl}" id="homeButton" class="button">{$homeButton}</a>
			<a href="{$randomPageUrl}" id="randomButton" class="button">{$randomButton}</a>
			<a href="{$viewNormalSiteURL}" class="button">{$regularSite}</a>
		  </div>
		</div>
		{$openSearchResults}
HTML;
		return $searchWebkitHtml;
	}
}

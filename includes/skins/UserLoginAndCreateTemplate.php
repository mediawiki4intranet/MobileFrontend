<?php

/**
 * Template overloader for user login and account cration templates
 *
 * Facilitates hijacking existing account creation/login template objects
 * by copying their properties to this new template, and exposing some
 * special mobile-specific magic.
 */
abstract class UserLoginAndCreateTemplate extends QuickTemplate {

	/**
	 * Overload the parent constructor
	 *
	 * Does not call the parent's constructor to prevent overwriting
	 * $this->data and $this->translatorobject since we're essentially
	 * just hijacking the existing template and its data here.
	 * @param QuickTemplate $template: The original template object to overwrite
	 */
	public function __construct( $template ) {
		$this->copyObjectProperties( $template );
	}

	/**
	 * Copy public properties of one object to this one
	 * @param object $obj: The object whose properties should be copied
	 */
	protected function copyObjectProperties( $obj ) {
		foreach( get_object_vars( $obj ) as $prop => $value ) {
			$this->$prop = $value;
		}
	}

	/**
	 * Get the current RequestContext
	 * @return RequestContext
	 */
	public function getRequestContext() {
		return RequestContext::getMain();
	}

	/**
	 * Prepare template data if an anon is attempting to log in after watching an article
	 */
	protected function getArticleTitleToWatch() {
		$ret = '';
		$request = $this->getRequestContext()->getRequest();
		if ( $request->getVal( 'returntoquery' ) == 'article_action=watch' &&
			!is_null( $request->getVal( 'returnto' ) ) ) {
			$ret = $request->getVal( 'returnto' );
		}
		return $ret;
	}
}

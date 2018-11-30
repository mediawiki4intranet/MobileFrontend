( function ( M ) {
	var View = M.require( 'mobile.startup/View' ),
		util = M.require( 'mobile.startup/util' ),
		Icon = M.require( 'mobile.startup/Icon' );

	/**
	 * View for table of contents
	 * @class TableOfContents
	 * @extends View
	 * @uses Icon
	 * @param {Object} props
	 * @param {Section[]} props.sections
	 */
	function TableOfContents( props ) {
		View.call( this, util.extend( {
			className: 'toc-mobile',
			tocIcon: new Icon( {
				name: 'toc',
				additionalClassNames: 'toc-button'
			} ).toHtmlString(),
			contentsMsg: mw.msg( 'toc' )
		}, props ) );
	}

	OO.mfExtend( TableOfContents, View, {
		/**
		 * @memberof TableOfContents
		 * @instance
		 */
		templatePartials: {
			tocHeading: mw.template.get( 'mobile.toc', 'heading.hogan' )
		},
		/**
		 * @memberof TableOfContents
		 * @instance
		 */
		template: mw.template.get( 'mobile.toc', 'toc.hogan' )
	} );

	M.define( 'mobile.toc/TableOfContents', TableOfContents ); // resource-modules-disable-line
}( mw.mobileFrontend ) );

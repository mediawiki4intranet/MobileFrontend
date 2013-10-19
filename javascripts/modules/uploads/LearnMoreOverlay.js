( function( M ) {
	var Overlay = M.require( 'Overlay' ), LearnMoreOverlay;
	LearnMoreOverlay = Overlay.extend( {
		defaults: {
			confirmMessage: mw.msg( 'mobile-frontend-photo-ownership-confirm' )
		},
		templatePartials: {
			content: M.template.get( 'uploads/LearnMoreOverlay' )
		}
	} );

	M.define( 'modules/uploads/LearnMoreOverlay', LearnMoreOverlay );

}( mw.mobileFrontend ) );


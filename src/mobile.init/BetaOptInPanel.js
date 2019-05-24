var Button = require( '../mobile.startup/Button' ),
	util = require( '../mobile.startup/util' ),
	View = require( '../mobile.startup/View' ),
	user = mw.user;

/**
 * @class BetaOptInPanel
 * @extends View
 */
class BetaOptInPanel extends View {
	/**
	 * @param {Object} props
	 * @param {string} props.postUrl url for form to post to
	 * @param {Function} [props.onCancel]
	 */
	constructor( props ) {
		super(
			util.extend(
				{
					isTemplateMode: true,
					events: {
						'click .optin': '_onOptin',
						'click .cancel': props.onCancel
					}
				},
				props
			)
		);
	}

	/** @inheritdoc */
	postRender() {
		this.$el.find( '.message' ).append(
			this.options.buttons.map( function ( button ) {
				return button.$el;
			} )
		);
	}

	/**
	 * Cancel event handler
	 * @memberof BetaOptInPanel
	 * @instance
	 * @param {jQuery.Event} ev
	 */
	_onOptin( ev ) {
		this.$el.find( ev.currentTarget ).closest( 'form' ).trigger( 'submit' );
	}
}

/**
 * @memberof BetaOptInPanel
 * @instance
 * @type {Object}
 */
BetaOptInPanel.prototype.template = util.template( `
	<div class="beta-opt-in-panel panel panel-inline visible">
		<form class="message content" action="{{postUrl}}" method="POST">
			<p>{{text}}</p>
			<input type="hidden" name="enableBeta" value="true">
			<input type="hidden" name="token" value="{{editToken}}">
		</form>
	</div>
` );

/**
 * @memberof BetaOptInPanel
 * @instance
 * @mixes View#defaults
 * @type {Object}
 */
BetaOptInPanel.prototype.defaults = util.extend(
	{},
	View.prototype.defaults,
	{
		postUrl: undefined,
		editToken: user.tokens.get( 'editToken' ),
		text: mw.msg( 'mobile-frontend-panel-betaoptin-msg' ),
		buttons: [
			new Button( {
				progressive: true,
				additionalClassNames: 'optin',
				label: mw.msg( 'mobile-frontend-panel-ok' )
			} ),
			new Button( {
				additionalClassNames: 'cancel',
				label: mw.msg( 'mobile-frontend-panel-cancel' )
			} )
		]
	}
);

module.exports = BetaOptInPanel;

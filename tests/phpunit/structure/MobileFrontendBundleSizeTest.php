<?php

namespace Tests\MobileFrontend\Structure;

/**
 * @group MobileFrontend
 */
class MobileFrontendBundleSizeTest extends \MediaWiki\Tests\Structure\BundleSizeTestBase {

	/** @inheritDoc */
	public function getBundleSizeConfig(): string {
		return dirname( __DIR__, 3 ) . '/bundlesize.config.json';
	}
}

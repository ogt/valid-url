var assert = require('assert'),
	vows = require('vows'),
	validUrl = require('../');

vows.describe('valid-url').addBatch({
	'URI full checking': {
		topic: validUrl.is_uri('ftp://test:testPasswd@testdomain.com:8081/'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'ftp://test:testPasswd@testdomain.com:8081/');
		}
	},
	'URI default port checking': {
		topic: validUrl.is_uri('ftp://test:testPasswd@testdomain.com/'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'ftp://test:testPasswd@testdomain.com/');
		}
	},
	'URI anonymous checking': {
		topic: validUrl.is_uri('ftp://testdomain.com/'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'ftp://testdomain.com/');
		}
	}
}).export(module);
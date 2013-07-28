var assert = require('assert'),
	vows = require('vows'),
	validUrl = require('../');

vows.describe('valid-url').addBatch({
	'HTTPS full url checking': {
		topic: validUrl.is_https_uri('https://test:testPasswd@testdomain.com:8081/test?test=test#123'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'https://test:testPasswd@testdomain.com:8081/test?test=test#123');
		}
	},
	'HTTPS url-params checking': {
		topic: validUrl.is_https_uri('https://test:testPasswd@testdomain.com:8081/test?test=test'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'https://test:testPasswd@testdomain.com:8081/test?test=test');
		}
	},
	'HTTPS url checking': {
		topic: validUrl.is_https_uri('https://test:testPasswd@testdomain.com:8081/test'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'https://test:testPasswd@testdomain.com:8081/test');
		}
	},
	'HTTPS default port checking': {
		topic: validUrl.is_https_uri('https://test:testPasswd@testdomain.com/test?test=test#123'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'https://test:testPasswd@testdomain.com/test?test=test#123');
		}
	},
	'HTTPS anonymous checking': {
		topic: validUrl.is_https_uri('https://testdomain.com:8081/test?test=test#123'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'https://testdomain.com:8081/test?test=test#123');
		}
	}
}).export(module);
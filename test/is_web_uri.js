(function() {
	'use strict';
	var assert = require('assert'),
		vows = require('vows'),
		validUrl = require('../');

	vows.describe('valid-url').addBatch({
		'Web full url checking': {
			topic: validUrl.is_web_uri('http://test:testPasswd@testdomain.com:8081/test?test=test#123'),
			'result should be valid': function (result) {
				assert.isString(result);
				assert.equal(result, 'http://test:testPasswd@testdomain.com:8081/test?test=test#123');
			}
		},
		'Web url-params checking': {
			topic: validUrl.is_web_uri('http://test:testPasswd@testdomain.com:8081/test?test=test'),
			'result should be valid': function (result) {
				assert.isString(result);
				assert.equal(result, 'http://test:testPasswd@testdomain.com:8081/test?test=test');
			}
		},
		'Web url checking': {
			topic: validUrl.is_web_uri('http://test:testPasswd@testdomain.com:8081/test'),
			'result should be valid': function (result) {
				assert.isString(result);
				assert.equal(result, 'http://test:testPasswd@testdomain.com:8081/test');
			}
		},
		'Web default port checking': {
			topic: validUrl.is_web_uri('http://test:testPasswd@testdomain.com/test?test=test#123'),
			'result should be valid': function (result) {
				assert.isString(result);
				assert.equal(result, 'http://test:testPasswd@testdomain.com/test?test=test#123');
			}
		},
		'Web anonymous checking': {
			topic: validUrl.is_web_uri('http://testdomain.com:8081/test?test=test#123'),
			'result should be valid': function (result) {
				assert.isString(result);
				assert.equal(result, 'http://testdomain.com:8081/test?test=test#123');
			}
		},
		'Web https allow checking': {
			topic: validUrl.is_web_uri('https://test:testPasswd@testdomain.com:8081/test?test=test#123', true),
			'result should be valid': function (result) {
				assert.isString(result);
				assert.equal(result, 'https://test:testPasswd@testdomain.com:8081/test?test=test#123');
			}
		}
	}).export(module);
})(module);
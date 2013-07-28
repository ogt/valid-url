var assert = require('assert'),
	vows = require('vows'),
	validUrl = require('../');

vows.describe('valid-url').addBatch({
	'HTTP full url checking': {
		topic: validUrl.is_http_uri('http://test:testPasswd@testdomain.com:8081/test?test=test#123'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'http://test:testPasswd@testdomain.com:8081/test?test=test#123');
		}
	},
	'HTTP url-params checking': {
		topic: validUrl.is_http_uri('http://test:testPasswd@testdomain.com:8081/test?test=test'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'http://test:testPasswd@testdomain.com:8081/test?test=test');
		}
	},
	'HTTP url checking': {
		topic: validUrl.is_http_uri('http://test:testPasswd@testdomain.com:8081/test'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'http://test:testPasswd@testdomain.com:8081/test');
		}
	},
	'HTTP default port checking': {
		topic: validUrl.is_http_uri('http://test:testPasswd@testdomain.com/test?test=test#123'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'http://test:testPasswd@testdomain.com/test?test=test#123');
		}
	},
	'HTTP anonymous checking': {
		topic: validUrl.is_http_uri('http://testdomain.com:8081/test?test=test#123'),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'http://testdomain.com:8081/test?test=test#123');
		}
	},
	'HTTPS allow checking': {
		topic: validUrl.is_http_uri('https://test:testPasswd@testdomain.com:8081/test?test=test#123', true),
		'result should be valid': function (result) {
			assert.isString(result);
			assert.equal(result, 'https://test:testPasswd@testdomain.com:8081/test?test=test#123');
		}
	}
}).export(module);
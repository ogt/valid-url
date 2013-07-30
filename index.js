(function(module) {
	'use strict';

	var
		url = require("url"),
		util = require("util")
	;

	var validURI = {
		isURI: function (uri) {
			if (typeof(uri) !== 'string') {
				return false;
			}
			try {
				var decode_uri = decodeURI(uri);
				return uri;
			} catch (e) {
				/*
				if (e instanceof URIError) {
					//Eror decode uri
					return false;
				}
				*/
				// Other error
				return false;
			}
		},
		isHttpURI: function (uri, allowHttps) {
				if (!this.isURI(uri)) {
					return false;
				}
				var
					url_parts = url.parse(uri),
					allowedProto = ['http:']
				;
				if (!!allowHttps) {
					allowedProto.push('https:');
				}
				if ((allowedProto.indexOf(url_parts.protocol) !== -1) && !!url_parts.host) {
					return uri;
				}
				return false;
		},
		isHttpsURI: function (uri) {
			return this.isHttpURI(uri, true);
		},
		isWebURI: function (uri) {
			return this.isHttpURI(uri, true);
		}
	}

	// Create aliases
	validURI.is_uri = validURI.isURI;
	validURI.is_http_uri = validURI.isHttpURI;
	validURI.is_https_uri = validURI.isHttpsURI;
	validURI.is_web_uri = validURI.isWebURI;

	module.exports = validURI;
})(module);

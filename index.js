url = require("url");
util = require("util");

var validURI = {
    isURI: function (uri) {
  	if (typeof(uri) !== 'string') {
			return false;
		}
		try {
			uri = decodeURI(uri);
			return true;
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
	isHttpURI: function (uri) {
			if (!this.isURI(uri)) {
				return false;
			}
			var url_parts = url.parse(uri);
			//console.log(util.inspect(url_parts, {colors: true}));
			if (url_parts.protocol === 'http:' && !!url_parts.host) {
				return true;
			}
			return false;
	},
	isHttpsURI: function (uri) {
		if (!this.isURI(uri)) {
			return false;
		}
		var url_parts = url.parse(uri);
		//console.log(util.inspect(url_parts, {colors: true}));
		if (url_parts.protocol === 'https:' && !!url_parts.host) {
			return true;
		}
		return false;
	},
	isWebURI: function (uri) {
		return (this.isHttpURI(uri) || this.isHttpsURI(uri));
	}
}

// Create aliases
validURI.is_uri = validURI.isURI;
validURI.is_http_uri = validURI.isHttpURI;
validURI.is_https_uri = validURI.isHttpsURI;
validURI.is_web_uri = validURI.isWebURI;

module.exports = validURI;

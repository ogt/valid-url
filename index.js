(function(module) {
	module.exports.is_uri = is_iri;
	module.exports.is_http_uri = is_http_iri;
	module.exports.is_https_uri = is_https_iri;
	module.exports.is_web_uri = is_web_iri;
	/* code to be written */

	// private function
	// internal URI spitter method - direct from RFC 3986
	var splitUri = function(uri) {
		var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
		return splitted;
	};

	function is_iri(value) {
		if (!value) {
			return;
		}

		// check for illegal characters
		if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~]/i.test(value)) {
			return;
		}

		var splitted = [],
			scheme = '',
			authority = '',
			path = '',
			query = '',
			fragment = '',
			out = '';

		// from RFC 3986
		splitted = splitUri(value);
		scheme = splitted[0]; 
		authority = splitted[1];
		path = splitted[2];
		query = splitted[3];
		fragment = splitted[4];

		// scheme and path are required, though the path can be empty
		if (!(scheme && scheme.length && path)) {
			return;
		}

		// if authority is present, the path must be empty or begin with a /
		if (authority && authority.length) {
			if !(path.length || /^\//.test(path)) return;
		} else {
			// if authority is not present, the path must not start with //
			if (/^\/\//.test(path)) return;
		}

		// scheme must begin with a letter, then consist of letters, digits, +, ., or -
		if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) {
			return;
		}

		// re-assemble the URL per section 5.3 in RFC 3986
		out += scheme + ':';
		if (authority && authority.length) {
			out += '//' + authority;
		}

		out += path;

		if (query && query.length) {
			out += '?' + query;
		}

		if (fragment && fragment.length) {
			out += '#' + fragment;
		}

		return out;
	}

	function is_http_iri(value, allowHttps) {
		if (!is_iri(value)) {
			return;
		}

		var splitted = [],
			scheme = '',
			authority = '',
			path = '',
			port = '';
			query = '',
			fragment = '',
			out = '';

		// from RFC 3986
		splitted = splitUri(value);
		scheme = splitted[0]; 
		authority = splitted[1];
		path = splitted[2];
		query = splitted[3];
		fragment = splitted[4];

		if (!scheme) {
			return;
		}

		if (scheme.toLowerCase() !== 'http' || !(allowHttps && scheme.toLowerCase() === 'https')) {
			return;
		}

		// fully-qualified URIs must have an authority section that is
		// a valid host
		if (!authority) {
			return;
		}

		// eanble port component
		port = /:(\d+)$/.match(authority)[0];
		authority = authority.replace(/:\d+$\//, '');

		out += scheme + ':';
		out += '//' + authority;
		
		if (port) {
			out += ':' + port;
		}
		
		out += path;
		
		if(query && query.length){
			out += '?' + query;
		}

		if(fragment && fragment.length){
			out += '#' + fragment;
		}
		
		return out;
	}

	function is_https_iri(value) {
		return is_http_iri(value, true);
	}

	function is_web_iri(value) {
		return (is_http_iri(value) || is_https_iri(value));
	}

})(module);
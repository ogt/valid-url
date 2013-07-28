URI validation functions
==
[![Build Status](https://travis-ci.org/ogt/valid-url.png)](https://travis-ci.org/ogt/valid-url)

## Synopsis

Replicates the functionality of  http://search.cpan.org/~sonnen/Data-Validate-URI-0.01/lib/Data/Validate/URI.pm
 (http://anonscm.debian.org/gitweb/?p=users/dom/libdata-validate-uri-perl.git )
into a nodejs module.

#Description

## Installation 

 *fork it to install  
 *TODO: need add to npm

## Usage
 
 `
 var validUrl = require('validUrl');
 `  

## Methods

 `
 is_uri(value)
 `  
 **accepts** value as string to be checked as any protocol url  
 **returns** undefined if is not url, returns RFC 3986 url if valid

 `
 is_http_uri(value, allowHttps)
 `  
 **accepts** *value* as string to be checked as HTTP url, *allowHttps* as boolean to include https urls *(optional)*  
 **returns** undefined if is not url, returns RFC 3986 url if valid  

 `
 is_https_uri(value)
 `  
 **accepts** value as string to be checked as HTTPS url  
 **returns** undefined if is not url, returns RFC 3986 url if valid  
 
 `
 is_web_uri(value)
 `  
 **accepts** value as string to be checked as HTTP or HTTPS url  
 **returns** undefined if is not url, returns RFC 3986 url if valid  

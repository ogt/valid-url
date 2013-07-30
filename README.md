URI validation functions
==
[![Build Status](https://travis-ci.org/ogt/valid-url.png)](https://travis-ci.org/ogt/valid-url)

## Synopsis

Common url validation methods 
```
    var validUrl = require('valid-url');
  
    if (validUrl.isUri(suspect)){
        console.log('Looks like an URI');
    } else {
        console.log('Not a URI');
    }
```

Replicates the functionality of Richard Sonnen <sonnen@richardsonnen.com> perl module :
http://search.cpan.org/~sonnen/Data-Validate-URI-0.01/lib/Data/Validate/URI.pm [full code here](http://anonscm.debian.org/gitweb/?p=users/dom/libdata-validate-uri-perl.git)
into a nodejs module. Initially translated practically line by line from perl. Subsequently rewritten to leverage [url](http://nodejs.org/api/url.html).
It passes all the original tests.

## Description

(copied from original perl module)

> This module collects common URI validation routines to make input validation, and untainting easier and more readable.
> All functions return an untainted value if the test passes, and undef if it fails. This means that you should always check for a defined status explicitly. Don't assume the return will be true.
> The value to test is always the first (and often only) argument.
> There are a number of other URI validation modules out there as well (see below.) This one focuses on being fast, lightweight, and relatively 'real-world'. i.e. it's good if you want to check user input, and don't need to parse out the URI/URL into chunks.
> Right now the module focuses on HTTP URIs, since they're arguably the most common. If you have a specialized scheme you'd like to have supported, let me know.

## Installation 

```
npm install valid-url
```

## Methods

 `
 isUri(value)
 `  
 **accepts** value as string to be checked as any protocol url  
 **returns** undefined if is not url, returns RFC 3986 url if valid

 `
 isHttpUri(value, allowHttps)
 `  
 **accepts** *value* as string to be checked as HTTP url, *allowHttps* as boolean to include https urls *(optional)*  
 **returns** undefined if is not url, returns RFC 3986 url if valid  

 `
 isHttpsUri(value)
 `  
 **accepts** value as string to be checked as HTTPS url  
 **returns** undefined if is not url, returns RFC 3986 url if valid  
 
 `
 isWebUri(value)
 `  
 **accepts** value as string to be checked as HTTP or HTTPS url  
 **returns** undefined if is not url, returns RFC 3986 url if valid  

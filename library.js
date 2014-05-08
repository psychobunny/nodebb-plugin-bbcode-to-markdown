"use strict";

var converter = {};

converter.parse = function(postContent, callback) {
	postContent = postContent
		.replace('&#58;', ':')
		.replace(/\[\S?color[\s\S]*?\]/gi, '')
		.replace(/\[\S?b:[s\S]*?\]/gi, '**')
		.replace(/\[url=(https?:[\s\S]*?):[\s\S]*?\]([\s\S]*?)\[\/url:[\s\S]*?\]/gi, '[$2]($1)')
		.replace(/\[\S?url:[s\S]*?\]/gi, '')
		.replace(/\[\S?i:[s\S]*?\]/gi, '*')
		.replace(/\[quote:[\s\S]*?\]([\s\S]*?)\[\/quote:[\s\S]*?\]/gi, '> $1')
		.replace(/<!--[\s\S]*?href="([\s\S]*?)">([\s\S]*?)<[\s\S]*?-->/gi, '[$2]($1)');

	callback(null, postContent);
};

module.exports = converter;

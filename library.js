"use strict";

var converter = {};

converter.parse = function(postContent, callback) {
	postContent = postContent
		.replace('&#58;', ':')
		.replace(/\[\S?color[\s\S]*?\]/g, '')
		.replace(/\[\S?b:[s\S]*?\]/g, '**')
		.replace(/\[\S?b:[s\S]*?\]/g, '**')
		.replace(/\[url=(https?:[\s\S]*?):[\s\S]*?\]([\s\S]*?)\[\/url:[\s\S]*?\]/g, '[$2]($1)')
		.replace(/\[\S?url:[s\S]*?\]/g, '')
		.replace(/\[\S?i:[s\S]*?\]/g, '*')
		.replace(/\[quote:[\s\S]*?\]([\s\S]*?)\[\/quote:[\s\S]*?\]/g, '> $1')
		.replace(/<!--[\s\S]*?href="([\s\S]*?)">([\s\S]*?)<[\s\S]*?-->/g, '[$2]($1)');

	callback(null, postContent);
};

module.exports = converter;
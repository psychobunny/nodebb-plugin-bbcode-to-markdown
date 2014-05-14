"use strict";

var converter = {};



function parseQuotes(content) {
	var quote, quoteBlock,
		re = /\[quote=["]?([\s\S]*?)["]?\]([\s\S]*?)\[\/quote\]/gi;

	while(quote = content.match(re)) {
		quote = quote[0];
		quoteBlock = quote.replace(re, '@$1 said:\n $2').replace(/[\r\n]/g, '\n>');
		content = content.replace(quote, quoteBlock);
	}

	return content;
}

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

	postContent = parseQuotes(postContent);
	callback(null, postContent);
};

module.exports = converter;

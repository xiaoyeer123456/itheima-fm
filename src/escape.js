function htmlEscape(htmlStr) {
	return htmlStr.replace(/<|>|"|&/g,(math) => {
		switch (math){
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '"':
				return '&quot;';
			case '&':
				return '&amp;';
		}
	})
}
function htmlUnEscape(htmlStr) {
	return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g,(math) => {
		switch (math){
			case '&lt;':
				return '<';
			case '&gt;':
				return '>';
			case '&quot;':
				return '"';
			case '&amp;':
				return '&';
		}
	})
}

module.exports = {
	htmlEscape,
	htmlUnEscape
}
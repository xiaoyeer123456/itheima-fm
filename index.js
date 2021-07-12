
const date = require('./src/dataFormat.js');
const escape = require('./src/escape.js');

// 向外暴露成员
module.exports = {
	...date,
	...escape
}
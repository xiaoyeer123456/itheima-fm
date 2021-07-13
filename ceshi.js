const itheima = require('./index.js');
console.log(itheima.dateFormat(new Date()));
console.log(itheima.htmlEscape('<h1>我是在master分支上测试分支上测试文字内容改变了<span style="font-size:36px">张三峰</span></h1>'))
console.log(itheima.htmlUnEscape('&lt;h1&gt;我是测试文字&lt;span style=&quot;font-size:36px&quot;&gt;张三峰&lt;/span&gt;&lt;/h1&gt;'))
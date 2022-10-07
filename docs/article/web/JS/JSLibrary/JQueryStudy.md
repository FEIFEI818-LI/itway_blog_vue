---
title: JQuery学习和使用总结
---

# 学习总结

# 用法总结

1.通过方法返回 Jquery 对象实例

用 var someDiv = $(‘#someDiv").hide(); 代替 var someDiv = $(‘#someDiv"); someDiv.hide();

2.使用 find 来查找

用 $(‘#someDiv").find(‘p.someClass").hide(); 代替 $(‘#someDiv p.someClass").hide();因为可以不必触发 Jquery 的 Sizzle 引擎，同时在写选择符的时候尽量让您的选择符简单同时优化最右边的选择符

3.不要滥用$(this)

用 $(‘#someAnchor").click(function() {  alert( this.id );  }); 代替 $(‘#someAnchor").click(function() {alert($(this).attr(‘id"));});

4.ready 的简写形式

用 $(function() { }); 代替 $(document).ready(function() {});

5.让你的代码安全

方法 1（使用 noConflict）

代码如下:

var j = jQuery.noConflict();

j(‘#someDiv").hide();

// The line below will reference some other library"s $ function.

$(‘someDiv").style.display = ‘none";

方法 2（传入参数 Jquery）

代码如下:

(function($) {

// Within this function, $ will always refer to jQuery

})(jQuery);

方法 3（通过 ready 方法）

代码如下:

jQuery(document).ready(function($) {

// $ refers to jQuery

});

6.简化代码

用 each 代替 for，使用数组保存临时变量，使用 document fragment，这其实和写原生的 Javascript 需要注意的一样。

7.使用 Ajax 的方法

Jquery 提供了 get getJSON post ajax 这些有用的 ajax 方法

8.访问原生的属性和方法

比如获取元素 id 的方法有

代码如下:

// OPTION 1 – Use jQuery

var id = $(‘#someAnchor").attr(‘id");

// OPTION 2 – Access the DOM element

var id = $(‘#someAnchor")[0].id;

// OPTION 3 – Use jQuery"s get method

var id = $(‘#someAnchor").get(0).id;

// OPTION 3b – Don"t pass an index to get

anchorsArray = $(‘.someAnchors").get();

var thirdId = anchorsArray[2].id;

9.使用 PHP 来检查 Ajax 请求

通过使用 xhr.setRequestHeader(“X-Requested-With”, “XMLHttpRequest”); 服务器端如 PHP 就可以通过

代码如下:

function isXhr() {

return $\_SERVER["HTTP_X_REQUESTED_WITH"] === ‘XMLHttpRequest";

}

来检查是不是 Ajax 请求，在一些禁用 Javascript 的情况下可能会用到

10.Jquery 和$的关系

在 Jquery 代码的最下面，可以看到下面的代码

window.jQuery = window.$ = jQuery; $其实就是 Jquery 的一个 shortcut

11.条件加载 Jquery

代码如下:

<!– Grab Google CDN jQuery. fall back to local if necessary –>

<script src=”http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js”></script>

<script>!window.jQuery && document.write(‘<script src=”js/jquery-1.4.2.min.js”><\/script>")</script>

如果 CDN 没有下载到 Jquery，则从本地读取

12.Jquery Filters

代码如下:

<script>

$(‘p:first").data(‘info", ‘value"); // populates $"s data object to have something to work with

$.extend(

jQuery.expr[":"], {

block: function(elem) {

return $(elem).css(“display”) === “block”;

},

hasData : function(elem) {

return !$.isEmptyObject( $(elem).data() );

}

}

);

$(“p:hasData”).text(“has data”); // grabs paras that have data attached

$(“p:block”).text(“are block level”); // grabs only paragraphs that have a display of “block”

</script>

注：$.expr[":"]等价于$.expr.filters

13.hover 方法

代码如下:

$(‘#someElement").hover(function() {

//在这里可以使用 toggle 方法来实现滑过和滑出的效果

});

14.传入属性对象

当创建一个元素的时候，Jquery1.4 可以传入一个属性对象

代码如下:

$(‘</a>", {

id : ‘someId",

className : ‘someClass",

href : ‘somePath.html"

});

甚至是 Jquery 指定的属性或事件如 text, click

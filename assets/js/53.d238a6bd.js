(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{327:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hammer-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hammer-js"}},[t._v("#")]),t._v(" hammer.js")]),t._v(" "),a("blockquote",[a("p",[t._v("是一个解决移动端触摸手势的库，可以完美的实现在移动端开发的大多数事件，如：点击、滑动、拖动、多点触控等事件。")])]),t._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1.简介")]),t._v(" "),a("ul",[a("li",[t._v("用于检测触摸手势的 JavaScript 库")]),t._v(" "),a("li",[t._v("添加对触摸手势的支持并移除了点击的 300ms")]),t._v(" "),a("li",[t._v("支持最常见的单点和多点触摸手势，并且可以完全扩展以添加自定义手势")])]),t._v(" "),a("p",[t._v("官方文档：http://hammerjs.github.io/")]),t._v(" "),a("h3",{attrs:{id:"六大动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六大动作"}},[t._v("#")]),t._v(" 六大动作")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/2135887-7c57381027e40fe1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/994/format/webp",alt:"手势图"}})]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("tap（点击）：")]),t._v("\n在指定的 DOM 区域内，一个手指轻拍或点击时触发该事件（类似 PC 端的 click），该事件最大点击时间为 250ms，如果超过 250ms 则按 press 事件处理。")]),t._v(" "),a("blockquote",[a("p",[t._v("在安卓触屏上，Tap 事件和 click 事件可以同时触发，但 click 事件会有几百毫秒的延迟，即先触发 Tap 事件，过一段时间再触发 click 事件。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("press（长按）：")]),t._v("\n在指定的 DOM 区域内，这个事件相当于 PC 端的 Click 事件，不能包含任何的移动，最小按压时间为 500ms，常用于我们在手机上用的复制粘贴等功能。")]),t._v(" "),a("p",[t._v("该事件事分别对以下事件进行监听并处理:")]),t._v(" "),a("ul",[a("li",[t._v("pressup: 点击事件离开时触发")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("pan（拖动）：")]),t._v("\n在指定的 DOM 区域内，一个手指放下并移动事件，即触屏中的拖动事件。")]),t._v(" "),a("p",[t._v("该事件事分别对以下事件进行监听并处理：")]),t._v(" "),a("ul",[a("li",[t._v("panstart: 拖动开始")]),t._v(" "),a("li",[t._v("panmove: 拖动过程")]),t._v(" "),a("li",[t._v("panend: 拖动结束")]),t._v(" "),a("li",[t._v("pancancel: 拖动取消")]),t._v(" "),a("li",[t._v("panleft: 向左拖动")]),t._v(" "),a("li",[t._v("panright: 向右拖动")]),t._v(" "),a("li",[t._v("panup: 向上拖动")]),t._v(" "),a("li",[t._v("pandown: 向下拖动")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("swipe（滑动）：")]),t._v("\n在指定的 DOM 区域内，一个手指快速的在触屏上滑动，即平时用到最多的滑动事件")]),t._v(" "),a("p",[t._v("该事件事分别对以下事件进行监听并处理：")]),t._v(" "),a("ul",[a("li",[t._v("swipeleft: 向左滑动")]),t._v(" "),a("li",[t._v("swiperight: 向右滑动")]),t._v(" "),a("li",[t._v("swipeup: 向上滑动")]),t._v(" "),a("li",[t._v("swipedown: 向下滑动")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("pinch（多点触控）：")]),t._v("\n在指定的 DOM 区域内，两个手指（默认为两个手指，多指触控需要单独设置）或多个手指相对（越来越近）移动或相向（越来越远）移动时事件")]),t._v(" "),a("p",[t._v("该事件事分别对以下事件进行监听并处理:")]),t._v(" "),a("ul",[a("li",[t._v("pinchstart: 多点触控开始")]),t._v(" "),a("li",[t._v("pinchmove: 多点触控过程")]),t._v(" "),a("li",[t._v("pinchend: 多点触控结束")]),t._v(" "),a("li",[t._v("pinchcancel: 多点触控取消")]),t._v(" "),a("li",[t._v("pinchin: 多点触控时两手指越来越近")]),t._v(" "),a("li",[t._v("pinchout: 多点触控时两手指越来越远")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("rotate（多点旋转）：")]),t._v("\n在指定的 DOM 区域内，当两个手指或更多手指呈圆型旋转时触发")]),t._v(" "),a("p",[t._v("该事件事分别对以下事件进行监听并处理:")]),t._v(" "),a("ul",[a("li",[t._v("rotatestart: 旋转开始")]),t._v(" "),a("li",[t._v("rotatemove: 旋转过程")]),t._v(" "),a("li",[t._v("rotateend: 旋转结束")]),t._v(" "),a("li",[t._v("rotatecancel: 旋转取消")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用"}},[t._v("#")]),t._v(" 2.使用")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hammertime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hammer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhammertime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("hammer.js 提供了 tap（点击）, doubletap, press（长按）, pan（拖动）, swipe（滑动） 和多点触控的 pinch, rotate（旋转），默认情况下 pinch 与 rotate 是禁用的，因为它们会阻塞元素，可以通过以下命令来启用：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("hammertime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pinch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhammertime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rotate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("默认的 pan（拖动） 仅支持水平方向，可以选择启用全部方向，swipe 也可以启用垂直方向：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("hammertime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("direction")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Hammer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIRECTION_ALL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhammertime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swipe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("direction")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Hammer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIRECTION_VERTICAL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("建议使用 viewport meta 禁用双击/缩放功能，更多的控制网页；支持触摸操作的浏览器就不需要这样做：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("可以为实例设置自己的识别器集合。这需要更多的代码，但是它使您能够更好地控制正在被识别的手势：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hammer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Manager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hammer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("direction")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Hammer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIRECTION_ALL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("threshold")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hammer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quadrupletap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("taps")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handlePan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quadrupletap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleTaps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面的例子创建了一个包含一个 pan 和四拍手势的实例。您创建的识别程序实例按其添加顺序执行，同时只能识别一个。")]),t._v(" "),a("h3",{attrs:{id:"使用技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用技巧"}},[t._v("#")]),t._v(" 使用技巧")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("事件委托和 DOM 事件：")]),t._v("\nhammer.js 能够通过配置选项 domEvents: true 触发 DOM 事件，它会使你的方法 stopPropagation()，所以可以使用事件委托，hammer.js 不会解除绑定的事件。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("尽量避免垂直 pan/swipe：")]),t._v("\n垂直 pan 用于滚动页面，一些（旧）浏览器不会触发这个事件，所以 hammer.js 无法识别。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("删除 Windows Phone 上的突出显示：")]),t._v("\nWindows Phone 上的 IE10 和 IE11 在点击某个元素时会突出显示一个小点，添加这个 meta 来删除。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("不能选择文本了：")]),t._v("\nhammer.js 会设置 user-select 来提高 PC 的平移体验，如果需要文本选择，需要在创建实例前执行此操作。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("tap 后，click 也被触发了：")]),t._v("\n该点击事件也被称为 “幽灵点击”（ghost click）。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("使用心得：")]),t._v("\n在 Pinch 事件和 Rotate 事件中，我们用了 hammertime.add(new Hammer.Pinch());和 hammertime.add(new Hammer.Rotate ());而其他四个事件没有用，而是直接添加了事件的监听程序。原因在于，我们在 new Hammer(htmlElement)的时候，Hammer.js 默认对 Pan、Press、Swipe 和 Tab 事件进行了监听。但没有对 Pinch 和 Rotate 事件进行监听。")])])]),t._v(" "),a("h2",{attrs:{id:"_3-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-api"}},[t._v("#")]),t._v(" 3.API")]),t._v(" "),a("h3",{attrs:{id:"_1-构造函数-hanmmer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-构造函数-hanmmer"}},[t._v("#")]),t._v(" 1.构造函数 Hanmmer")]),t._v(" "),a("p",[t._v("构造函数为 Hammer(HTMLElement, [options])，options 将与默认选项 Hammer.defaults 合并。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hammer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nHammer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaults")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Hammer.defaults")])]),t._v(" "),a("ol",[a("li",[t._v("touchAction: 'compute'：\n其值可为 compute, auto, pan-y, pan-x, none，默认选项会基于识别器为你选择一个正确值。")]),t._v(" "),a("li",[t._v("domEvents：false：\n默认禁用 DOM 事件，如果需要使用事件委托，需将其设为 true")]),t._v(" "),a("li",[t._v("enable: true：\n接受一个布尔值，或返回布尔值的函数")]),t._v(" "),a("li",[t._v("cssProps: {...}：\n改善交互事件操作的系列 css 属性")]),t._v(" "),a("li",[t._v("preset: [….]：\n调用 Hammer() 的时候就安装了默认的识别器，如果建立一个新的 Manager，这些将被跳过。")])]),t._v(" "),a("h3",{attrs:{id:"_2-事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-事件对象"}},[t._v("#")]),t._v(" 2.事件对象")]),t._v(" "),a("p",[t._v("Name Value\ntype 事件的名称，例如 panstart\ndeltaX X 轴移动\ndeltaY Y 轴移动\ndeltaTime 自从第一次 input 的总时间，单位 ms\ndistance 移动距离\nangle 角度\nvelocityX X 轴上的速度，单位为 px/ms\nvelocityY Y 轴上的速度，单位为 px/ms\nvelocity velocityX/velocityY 的最高值\ndirection 移动方向，匹配 DIRECTION 常量\noffsetDirection 相对于起点的方向，匹配 DIRECTION 常量\nscale 在多点触摸缩放时，只是触摸时值为 1\nrotation 在多点触摸旋转时，只是触摸时值为 0\ncenter 多点触摸的中心位置，或者只是单独的点\nsrcEvent 源事件对象，类型为 TouchEvent，MouseEvent 或 PointerEvent\ntarget 收到该事件的目标\npointerType 主要点类型，可能是 touch，mouse，pen 或 kinect\neventType 事件类型，匹配 INPUT 常量\nisFirst 第一个 input 时为 true\nisFinal 最后一个 input 时为 true\npointers 所有点的数组，包括结束点（touchend，mouseup）\nchangedPointers 包含所有 new/moved/lost 的点\npreventDefault 参考 srcEvent.preventDefault() 方法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("hammertime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X偏移量：【'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deltaX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'】，Y偏移量：【'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deltaY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'】<br />'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//控制台输出")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常量"}},[t._v("#")]),t._v(" 3.常量")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("DIRECTION（方向）")]),t._v("\n开启方向")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("DIRECTION_NONE")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("DIRECTION_LEFT")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("DIRECTION_RIGHT")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("DIRECTION_UP")]),t._v(" "),a("td",[t._v("8")])]),t._v(" "),a("tr",[a("td",[t._v("DIRECTION_DOWN")]),t._v(" "),a("td",[t._v("16")])]),t._v(" "),a("tr",[a("td",[t._v("DIRECTION_HORIZONTAL")]),t._v(" "),a("td",[t._v("6")])]),t._v(" "),a("tr",[a("td",[t._v("DIRECTION_VERTICAL")]),t._v(" "),a("td",[t._v("24")])]),t._v(" "),a("tr",[a("td",[t._v("DIRECTION_ALL")]),t._v(" "),a("td",[t._v("30")])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("INPUT")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("INPUT_START")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("INPUT_MOVE")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("INPUT_END")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("INPUT_CANCEL")]),t._v(" "),a("td",[t._v("8")])])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("STATE")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("STATE_POSSIBLE")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("STATE_BEGAN")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("STATE_CHANGED")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("STATE_ENDED")]),t._v(" "),a("td",[t._v("8")])]),t._v(" "),a("tr",[a("td",[t._v("STATE_RECOGNIZED")]),t._v(" "),a("td",[t._v("STATE_ENDED")])]),t._v(" "),a("tr",[a("td",[t._v("STATE_CANCELLED")]),t._v(" "),a("td",[t._v("16")])]),t._v(" "),a("tr",[a("td",[t._v("STATE_FAILED")]),t._v(" "),a("td",[t._v("32")])])])]),t._v(" "),a("h2",{attrs:{id:"_4-浏览器兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器兼容性"}},[t._v("#")]),t._v(" 4.浏览器兼容性")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/2135887-3482a830b1799626.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/686/format/webp",alt:"浏览器兼容性"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);
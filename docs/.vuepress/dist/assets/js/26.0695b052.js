(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{293:function(o,e,t){"use strict";t.r(e);var n=t(10),l=Object(n.a)({},(function(){var o=this,e=o._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("p",[o._v("Node 属性\n通过暴露的 Node 节点属性，可以获取相关 Node 节点的属性信息。")]),o._v(" "),e("body",[e("div",{attrs:{id:"app"}},[o._v("\n    Hello World！\n    "),e("ul",{attrs:{id:"list"}},[e("li",{attrs:{id:"item"}})])])]),o._v("\n节点类型\n每一个节点都有一个 nodeType 属性，用于表明节点的类型。节点类型由在 Node 类型中定义的下列 12 个数值常量来表示，任何节点类型必居其一。\n"),e("p",[o._v("常用节点类型\n节点名称\t字符常量\t数值常量\n元素节点\tNode.ELEMENT_NODE\t1\n文本节点\tNode.TEXT_NODE\t3\n处理指令节点\tNode.PROCESSING_INSTRUCTION_NODE\t7\n注释节点\tNode.COMMENT_NODE\t8\n文档节点\tNode.DOCUMENT_NODE\t9\n文档类型节点\tNode.DOCUMENT_TYPE_NODE\t10\n文档片段节点\tNode.DOCUMENT_FRAGMENT_NODE\t11\n废弃节点类型\n节点名称\t字符常量\t数值常量\n属性节点\tNode. ATTRIBUTE_NODE\t2\nCDATA 节点\tNode. CDATA_SECTION_NODE\t4\n实体引用名称节点\tNode. ENTITY_REFERENCE_NODE\t5\n实体名称节点\tNode.ENTITY_NODE\t6\nDTD 声明节点\tNode.NOTATION_NODE\t12\n节点类型判断\nconst app = document.querySelector('.app');")]),o._v(" "),e("p",[o._v("if (app.nodeType == Node.ELEMENT_NODE) {\n// 在IE中无效\nconsole.log('Node is an element.');\n}\n如果两者相等，则意味着 app 确实是一个元素。然而，由于 IE 没有公开 Node 类型的构造函数，因此上面的代码在 IE 中会导致错误。为了确保跨浏览器兼容性，最好还是将 nodeType 属性与数值常量进行比较。")]),o._v(" "),e("p",[o._v("const app = document.querySelector('.app');")]),o._v(" "),e("p",[o._v("if (app.nodeType == 1) {\nconsole.log('Node is an element.');\n}\n节点信息\nNode.baseURI\n获取当前网页的绝对路径")]),o._v(" "),e("p",[o._v("const app = document.getElmentById('app');")]),o._v(" "),e("p",[o._v("console.log(app.baseURI);\n// ‘https://www.baidu.com/’\nNode.nodeName\n获取当前节点的名称（就是标签名，返回的是大写英文）。")]),o._v(" "),e("p",[o._v("const list = document.getElementById('list');\nconst item = list.firstElementChild;")]),o._v(" "),e("p",[o._v("console.log(list.nodeName);\n// ‘UL’\nconsole.log(item.nodeName);\n// ‘LI’\nNode.nodeValue\nDOM Level 2 Core: Node.nodeValue")]),o._v(" "),e("p",[o._v("获取或设置当前节点的值")]),o._v(" "),e("p",[o._v("对于 注释 和 文本 节点来说，会返回文本内容，其他均返回 null。")]),o._v(" "),e("div",{attrs:{id:"app"}},[o._v("Hello world!")]),o._v(" "),e("script",{attrs:{type:"text/javascript"}},[o._v("\n  const app = document.getElementById('app');\n<p>console.log(app.nodeValue);\n// null\nconsole.log(app.firstChild.nodeValue);\n// 'Hello world!'\n")]),o._v("\nNode.textContent\n获取或设置当前节点及其所有后代节点的文本内容。"),e("p"),o._v(" "),e("p",[o._v("如果节点是 CDATA 片段、Comment 注释节点、ProcessingInstruction 节点或文本节点，则返回节点内部的文本节点（即 nodeValue）\n如果是 Document、DocumentType 或者 Notation 类型节点，则 textContent 返回 null\n如果要获取整个文档的文本以及 CDATA 数据，可以使用 document.documentElement.textContent\n对于其他节点类型，textContent 将所有子节点的 textContent 合并后返回（除注释节点）。如果该子节点没有子节点，则返回空字符串\n在节点上设置 textContent 属性的话，会删除它的所有子节点，并替换为一个具有给定值的文本节点。")]),o._v(" "),e("div",{staticClass:"app"},[o._v("Hello world!")]),o._v(" "),e("script",[o._v("\n  const app = document.getElementById('app');\n  const text = app.textContent;\n  console.log(text);\n  // 'Hello world!'\n<p>app.textContent = 12345;\nconsole.log(text);\n// 12345\n")]),o._v("\n节点关系\n文档中所有节点之间都存在着这样或那样的关系。节点间的各种关系可以用传统的家族关系来描述，相当于把文档树比喻成家谱。"),e("p"),o._v(" "),e("p",[o._v("在 HTML 中，可以将 ")]),e("body",[o._v(" 元素看成是 "),e("html",[o._v(" 元素的子元素；相应地，也就可以将 "),e("html",[o._v(" 元素看成是 "),e("body",[o._v(" 元素的父元素。而 "),e("head",[o._v(" 元素，则可以看成是 "),e("body",[o._v(" 元素的同胞元素，因为它们都是同一个父元素 "),e("html",[o._v(" 的直接子元素。"),e("p"),o._v(" "),e("p",[o._v("每个节点都有一个 childNodes 属性，其中保存着一个 NodeList 对象。NodeList 是一种类数组对象。NodeList 是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点。请注意，虽然可以通过方括号语法来访问 NodeList 的值，而且这个对象也有 length 属性，但它并不是 Array 的实例。NodeList 对象的独特之处在于，它实际上是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映在 NodeList 对象中。")]),o._v(" "),e("p",[o._v("下面以下面的 DOM 树为例阐述节点间的关系。")]),o._v(" "),e("body",[e("div",{staticClass:"bar"}),o._v(" "),e("div",{staticClass:"foo"},[e("div",{staticClass:"foo-1"},[e("div")]),o._v(" "),e("div",{staticClass:"foo-2"}),o._v(" "),e("div",{staticClass:"foo-3"})]),o._v(" "),e("ul",{staticClass:"list"},[e("li"),o._v(" "),e("li"),o._v(" "),e("li")])]),o._v("\nNode.ownerDocument\n获取当前节点所在的顶层文档对象。\n"),e("p",[o._v("如果在文档节点自身上使用此属性，则结果是 null。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.ownerDocument);\n// document\nNode.paretnNode\n获取节点的父节点（Node）。")]),o._v(" "),e("p",[o._v("父节点只有 Element、Document、DocumentFragment。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.parentElement);\n// ")]),e("body",[o._v("...")]),o._v("\nNode.parentElement\n获取节点的父元素节点（Element）。"),e("p"),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.parentElement);\n// ")]),e("body",[o._v("...")]),o._v("\nNode.previousSibling\n获取当前节点前面的第一个兄弟节点（Node）。"),e("p"),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.previousSibling);\n// #text\nNode.previousElementSibiling\n获取当前节点前面的第一个兄弟元素节点（Element）。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.previousSibling);\n// ")]),e("div",{staticClass:"bar"}),o._v("\nNode.nextSibiling\n获取当前节点后面的第一个兄弟节点（Node）。"),e("p"),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.previousSibling);\n// #text\nNode.nextElementSibiling\n获取当前节点后面的第一个兄弟元素节点（Element）。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.previousSibling);\n// "),e("ul",{staticClass:"list"},[o._v("...")]),o._v("\nNode.firstChild\n获取节点的第一个子节点（Node）。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.firstChild);\n// #text\nNode.firstElementChild\n获取节点的第一个子元素节点（Element）。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.firstElementChild);\n// ")]),e("div",{staticClass:"foo-1"}),o._v("\nNode.lastChild\n获取节点的最后一个子节点（Node）。"),e("p"),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.lastChild);\n// #text\nNode.lastElementChild\n获取节点的最后一个元素节点（Element）。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.lastElementChild);\n// ")]),e("div",{staticClass:"foo-3"}),o._v("\nNode.childNodes\n获取节点的子节点列表（NodeList）。"),e("p"),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.childNodes);\n// NodeList(7) [text, div.foo-1, text, div.foo-2, text, div.foo-3, text]\nNode.children\n获取节点的子元素节点列表（HTMLCollection）。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.children);\n// HTMLCollection(3) [div.foo-1, div.foo-2, div.foo-3]\nNode.childElementCount\n获取当前节点的所有子元素节点的数目。")]),o._v(" "),e("p",[o._v("const foo = document.querySelector('.foo');")]),o._v(" "),e("p",[o._v("console.log(foo.childElementCount);\n// 3")])])])])])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);
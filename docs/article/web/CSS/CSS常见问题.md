---
 tilte: CSS常见问题及解决办法
---

# CSS常见问题及解决办法

## margin塌陷和重叠的问题！

### margin塌陷问题？
父子元素都设置margin-top，父子元素的margin-top会重叠。
解决办法：
1. 触发BFC来解决
 - float属性为left/right
 - overflow为hidden/scroll/auto
 - position为absolute/fixed
 - display为inline-block/table-cell/table-caption
2. 设置透明边框 border-top:1px solid transparent;
3. 设置内边框 padding-top：1px;

 ### margin合并问题？
 两个元素之间，外边距合并，并显示最大值或相加值。
 解决办法：
 1. 可以通过为其中一个元素添加一个包裹其触发BFC的父元素。

tip：
1. 外边距重叠只发生在块级元素上，例如 <div> <p> 等，并不会发生在脱离文档流的元素上，例如：设置 float 属性，或者 position 的值为 absolute 时。
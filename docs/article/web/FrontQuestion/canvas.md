---
title: 玩转canvas
---

# 玩转canvas

## canvas生成图片
-html2canvas生成图片
    - 问题： canvas生成图片，图片会模糊。
    - 解决方案：为复用页面元素不改变html标签，选择把rem单位换成px，并放到一个不可见父盒子（1X1）中，然后生成图片；
    - 伪代码：
```html
<div style="width: 1px;height: 1px;overflow: hidden;opacity: 0.1">
    <div class="canvas_bg" id="canvas">
        <div class="inside_box">
            
        </div>
    </div>
</div>
```
```javascript
html2canvas(
    node, {
    useCORS: true,
    allowTaint: true,//允许跨域图片
    backgroundColor: null,
}
).then(canvas => {
    if (canvas) {
        let url = canvas.toDataURL('image/jpeg');
        let img = new Image();
        img.onload = function () {
            $('#imgId').attr({ src: url })
            $(".popup_page5").removeClass("show");
        }
        img.src = url;
    }
})
```
```css
.canvas_bg {
    height: 1624px;
    width: 750px;
    position: relative;

    .inside_box {
        width: 750px;
        height: 1100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
```
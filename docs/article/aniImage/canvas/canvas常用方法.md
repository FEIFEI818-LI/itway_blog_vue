---
title: canvas常用方法
---

# canvas 常用方法

## 生成图片

```javascript
let canvas_1 = $(".mycanvas")[0];

canvas_1.width = 707;
canvas_1.height = 1290;
let scene = canvas_1.getContext("2d");
let bg = new Image();
bg.setAttribute("crossOrigin", "Anonymous");
bg.onload = function () {
  scene.drawImage(bg, 0, 0);
  scene.fillStyle = "#ffffff";
  scene.font = "30px Microsoft YaHei";
  let name = userInfo.nickname || "xxx";
  scene.fillText(name, 67, 175);
  scene.font = "32px Microsoft YaHei";
  let text = "香所指引的心境是：";
  scene.fillText(text, 67, 217);
  let qc = new Image();
  if ($(".qrcode_box img").attr("src")) {
    qc.src = $(".qrcode_box img").attr("src");
  } else {
    qc.src = $(".qrcode_box canvas")[0].toDataURL("image/jpeg");
  }
  qc.setAttribute("crossOrigin", "Anonymous");

  qc.onload = function () {
    scene.drawImage(qc, 528, 1022, 106, 106);
    $(".share_img").attr("src", canvas_1.toDataURL("image/jpeg"));
    setTimeout(function (param) {
      hidePop();
    }, 800);
  };
};
bg.src = arr[number].share_img;
```

## 绘制视频

```html
<div>
  <canvas id="canvas"></canvas>
  <video
    src="https://nie.v.netease.com/nie/2022/1212/3ff0b7fffcb05b7f1f49423613377125.mp4"
    id="video"
    preload="auto"
    playsinline="true"
    x-webkit-airplay="true"
    webkit-playsinline="true"
    x5-video-player-type="h5"
    x-video-orientation="h5"
    x5-video-player-fullscreen="true"
    muted="false"
  ></video>
  <button id="button">播放</button>
</div>

<script>
  var video = document.getElementById("video");
  var canvas = document.getElementById("canvas");
  var button = document.getElementById("button");
  var i;
  button.addEventListener("click", function () {
    video.play();
  });
  context = canvas.getContext("2d");

  video.addEventListener("play", function (v) {
      i = window.setInterval(function () {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }, 20);
    }, false);

  video.addEventListener("pause",function () {
      window.clearInterval(i);
    },false);
  
  video.addEventListener("ended",function () {
      clearInterval(i);
    },false);
</script>
```

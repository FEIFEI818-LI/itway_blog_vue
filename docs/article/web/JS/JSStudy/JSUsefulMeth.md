---
title: JS常用方法
---

# JS 方法
> 项目积累的方法，方便后续使用，防止重复造轮子

## 常用工具函数

```javascript
// 1.防抖函数
function debounce(fn, delay) {
  var delay = delay || 100;
  let timer;
  return function () {
    let that = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}
// 2.随机获取范围内数字
function random(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
}
```

## 常用方法

### 页面缩放

```javascript
function resize() {
  var width = document.documentElement.clientWidth;
  var scale = width / 1920;

  if (window.innerWidth > 1440 && window.innerWidth <= 1920) {
    $(`.pop-egg`).css({
      transform: `scale(${scale})`,
    });
  } else if (window.innerWidth <= 1440) {
    var scale1 = 1440 / 1920;
    $(`.pop-egg`).css({
      transform: `scale(${scale1})`,
    });
  }
}
$(window).resize(function () {
  resize();
});
resize();
```

### url 方法

1. url 参数获取

```javascript
function _params(param) {
	var pStr = window.location.hash.toString() || window.location.search.toString(),
		r = new RegExp("[\?&]*" + param + "=([^&]+)"),
		m = pStr.match(r);
	if (m) return m[1].replace('"', '');
	else return '';
},
```

2. 添加 url 参数不刷新页面

```javascript
function changeURLArg(url, arg, arg_val) {
  var pattern = arg + "=([^&]*)";
  var replaceText = arg + "=" + arg_val;
  if (url.match(pattern)) {
    var tmp = "/(" + arg + "=)([^&]*)/gi";
    tmp = url.replace(eval(tmp), replaceText);
    return tmp;
  } else {
    if (url.match("[?]")) {
      return url + "&" + replaceText;
    } else {
      return url + "?" + replaceText;
    }
  }
}
var urlSearch = location.href;
var unformatStr = changeURLArg(urlSearch, "openPop", "true");
if (!!(window.history && history.pushState)) {
  history.replaceState(null, "", unformatStr); // 修改url不刷新
}
```

## 移动端方法

```javascript
// 1.触摸代替默认滚动（解决页面默认滚动会推出页面）
document.querySelectorAll(".scroll").forEach((item) => {
  var startX = 0; //获取手指初始坐标
  var startY = 0; //获取手指初始坐标

  item.addEventListener("touchstart", function (e) {
    //得到手指初始坐标
    startX = e.targetTouches[0].pageX;
    startY = e.targetTouches[0].pageY;
  });
  item.addEventListener("touchmove", function (e) {
    //计算手指移动的距离   手指移动之后的坐标-手指初始坐标
    var moveX = e.targetTouches[0].pageX - startX;
    var moveY = e.targetTouches[0].pageY - startY;

    var $win = $(window);
    if ($win[0].orientation == 90 || $win[0].orientation == -90) {
      //横屏
      $(item).scrollTop($(item).scrollTop() - moveY / 5);
    } else {
      //竖屏
      $(item).scrollTop($(item).scrollTop() + moveX / 5);
    }

    e.preventDefault(); //阻止屏幕滚动的默认行为
  });
});

// 2.生成分享图
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



## JQ 方法

### jq 操作表单

```javascript
// 获取表单值
let value = $("#recordFrom").serializeArray();
$.each(value, function (index, item) {
  data[item.name] = item.value;
});

// 获取复选框的值
let isRead = $('input[name="read"]:checked').val();

$('input[name="read"]').prop("checked", true); //设置复选框的值
```

### jq-ajax

1. ajax 请求终止：

```javascript
uploadAjax && uploadAjax.abort(); // 如果有上传请求，则挂起
```

2. ajax 请求带上凭据（token）,设置 withCredentials:true：

```javascript
$.ajax({
    xhrFields:{
        withCredentials:true
    },
});
```

## 常用功能实现

### 导航栏实现

```html
<!--主体-->
<div class="main">
  <!--顶部导航-->
  <div class="top-bar">
    <div id="NIE-topBar"></div>
  </div>

  <div class="wrap">
    <ul class="nav-box">
      <li class="nav-item1">导航一</li>
      <li class="nav-item2">导航二</li>
      <li class="nav-item3">导航三</li>
      <li class="nav-item4">导航四</li>
      <li class="nav-item5">导航五</li>
      <li class="nav-item6">导航六</li>
    </ul>

    <div class="kv">kv</div>
    <!-- <div class="part-box"> -->
    <div class="part part1">模块1</div>
    <div class="part part2">模块2</div>
    <div class="part part3">模块3</div>
    <div class="part part4">模块4</div>
    <div class="part part5">模块5</div>
    <div class="part part6">模块6</div>
  </div>
  <!-- </div> -->
</div>
```

```javascript
/**
     * @func
     * @desc 导航栏事件
     * @param {Object} param 对象参数
     * @param {string} param.topClass 显示/隐藏导航栏的css类名
     * @param {string} param.showClass 自定义显示/隐藏的css类名
     * @param {string} param.navClass 导航栏盒子css类名
     * @param {string} param.partClass 主体模块css类名
     * @param {Array} param.part 对应模块顺序类名
     * @example
     * {
            topClass: "part1",
            showClass: "show",
            navClass: "nav-box",
            partClass: "part",
            part : ["part1","part2","part3","part4","part5","part6"]
        }
     */
function navEvent(param) {
  // 添加节流阀 互斥锁
  let flag = true;

  let toggleNav;

  if (param.topClass) {
    // 如果到了主体，侧边的导航栏就显示出来
    let tops = $(`.${param.topClass}`).offset().top;

    // 页面滚动事件
    // 如果用直接用页面滚动事件的话会出问题，因为如果当刷新页面的时候侧边按又会消失，因为只有当页面滚动的时候才会显示
    // 所以最好的方式是封装成一个函数
    toggleNav = function () {
      if ($(document).scrollTop() >= tops) {
        // 显示侧边栏
        $(`.${param.navClass}`).fadeIn();
      } else {
        // 隐藏侧边栏
        $(`.${param.navClass}`).fadeOut();
      }
    };

    toggleNav();
  }
  function showNav() {
    $(`.${param.partClass}`).each(function (index, ele) {
      if ($(document).scrollTop() >= $(ele).offset().top) {
        $(`.${param.navClass} li`)
          .eq(index)
          .addClass(param.showClass)
          .siblings()
          .removeClass(param.showClass);
      }
    });
  }
  $(window).scroll(function () {
    console.log(flag);
    toggleNav && toggleNav();
    // 页面滚动到某个区域，左侧侧边栏li相应添加和删除show类名
    // 加个节流阀
    if (flag) {
      showNav();
    }
  });
  // 刷新页面侧边栏添加show类名
  showNav();
  // 点击侧边栏的li滚动到相应的内容区域
  $(`.${param.navClass} li`).click(function () {
    // 点击之后就关掉节流阀
    flag = false;
    var topp = $(`.${param.part[$(this).index()]}`).offset().top;
    // 点击滚动完之后就开启节流阀
    $("body,html")
      .stop()
      .animate(
        {
          scrollTop: topp,
        },
        function () {
          flag = true;
        }
      );

    // 点击侧边栏进行干掉其他人留下我自己
    $(this).addClass(param.showClass).siblings().removeClass(param.showClass);
  });
}
```

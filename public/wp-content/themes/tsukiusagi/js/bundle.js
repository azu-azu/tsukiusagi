/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../_assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../_assets/js/common/bubble.js":
/*!**************************************!*\
  !*** ../_assets/js/common/bubble.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery('.button--bubble').each(function () {
  var $circlesTopLeft = $(this).parent().find('.circle.top-left');
  var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
  var tl = new TimelineLite();
  var tl2 = new TimelineLite();
  var btTl = new TimelineLite({
    paused: true
  });
  tl.to($circlesTopLeft, 1.2, {
    x: -25,
    y: -25,
    scaleY: 2,
    ease: SlowMo.ease.config(0.1, 0.7, false)
  });
  tl.to($circlesTopLeft.eq(0), 0.1, {
    scale: 0.2,
    x: '+=6',
    y: '-=2'
  });
  tl.to($circlesTopLeft.eq(1), 0.1, {
    scaleX: 1,
    scaleY: 0.8,
    x: '-=10',
    y: '-=7'
  }, '-=0.1');
  tl.to($circlesTopLeft.eq(2), 0.1, {
    scale: 0.2,
    x: '-=15',
    y: '+=6'
  }, '-=0.1');
  tl.to($circlesTopLeft.eq(0), 1, {
    scale: 0,
    x: '-=5',
    y: '-=15',
    opacity: 0
  });
  tl.to($circlesTopLeft.eq(1), 1, {
    scaleX: 0.4,
    scaleY: 0.4,
    x: '-=10',
    y: '-=10',
    opacity: 0
  }, '-=1');
  tl.to($circlesTopLeft.eq(2), 1, {
    scale: 0,
    x: '-=15',
    y: '+=5',
    opacity: 0
  }, '-=1');
  var tlBt1 = new TimelineLite();
  var tlBt2 = new TimelineLite();
  tlBt1.set($circlesTopLeft, {
    x: 0,
    y: 0,
    rotation: -45
  });
  tlBt1.add(tl);
  tl2.set($circlesBottomRight, {
    x: 0,
    y: 0
  });
  tl2.to($circlesBottomRight, 1.1, {
    x: 30,
    y: 30,
    ease: SlowMo.ease.config(0.1, 0.7, false)
  });
  tl2.to($circlesBottomRight.eq(0), 0.1, {
    scale: 0.2,
    x: '-=6',
    y: '+=3'
  });
  tl2.to($circlesBottomRight.eq(1), 0.1, {
    scale: 0.8,
    x: '+=7',
    y: '+=3'
  }, '-=0.1');
  tl2.to($circlesBottomRight.eq(2), 0.1, {
    scale: 0.2,
    x: '+=15',
    y: '-=6'
  }, '-=0.2');
  tl2.to($circlesBottomRight.eq(0), 1, {
    scale: 0,
    x: '+=5',
    y: '+=15',
    opacity: 0
  });
  tl2.to($circlesBottomRight.eq(1), 1, {
    scale: 0.4,
    x: '+=7',
    y: '+=7',
    opacity: 0
  }, '-=1');
  tl2.to($circlesBottomRight.eq(2), 1, {
    scale: 0,
    x: '+=15',
    y: '-=5',
    opacity: 0
  }, '-=1');
  tlBt2.set($circlesBottomRight, {
    x: 0,
    y: 0,
    rotation: 45
  });
  tlBt2.add(tl2);
  btTl.add(tlBt1);
  btTl.to($(this).parent().find('.button.effect-button'), 0.8, {
    scaleY: 1.1
  }, 0.1);
  btTl.add(tlBt2, 0.2);
  btTl.to($(this).parent().find('.button.effect-button'), 1.8, {
    scale: 1,
    ease: Elastic.easeOut.config(1.2, 0.4)
  }, 1.2);
  btTl.timeScale(2.6);
  $(this).on('mouseover', function () {
    btTl.restart();
  });
});

/***/ }),

/***/ "../_assets/js/common/myBubblyButton.js":
/*!**********************************************!*\
  !*** ../_assets/js/common/myBubblyButton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var animateButton = function animateButton(e) {
  e.preventDefault; //reset animation

  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("js-bubbly");

for (var i = 0; i < bubblyButtons.length; i++) {
  // bubblyButtons[i].addEventListener('hover', animateButton, false);
  bubblyButtons[i].addEventListener('mouseover', animateButton, false);
}

/***/ }),

/***/ "../_assets/js/common/myHeader.js":
/*!****************************************!*\
  !*** ../_assets/js/common/myHeader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const bodyWidth = document.body.clientWidth;
// スクロールしたら関数呼び出し
window.addEventListener('scroll', function () {
  headerFade();
  headerBackDown();
}); // ロードしたら関数呼び出し

window.addEventListener('load', function () {
  headerFade();
}); // **
// p-header:スクロールしたら消える
// **

var headerClass = document.getElementById("js-header");
var headerFadePosition = 50; //スクロールしてページトップから〇〇に達したとき

var headerFade = function headerFade() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= headerFadePosition) {
    headerClass.classList.add('is-fade');
  } else {
    headerClass.classList.remove('is-fade');
  }

  ;
}; // **
// p-header-back:スクロール途中で出現
// **


var headerBackDown = function headerBackDown() {
  var myTarget = document.getElementById("works");
  var rect = myTarget.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var targetTop = rect.top + scrollTop;

  if (scrollTop >= targetTop) {
    headerClass.classList.remove("UpMove", "p-header", "is-fade"); // クラス名除去

    headerClass.classList.add('DownMove', 'p-header--back'); // クラス名追加
  } else {
    if (headerClass.classList.contains("DownMove")) {
      //すでにクラス名がついていたら
      headerClass.classList.remove('DownMove', 'p-header--back'); // クラス名除去

      headerClass.classList.add('UpMove', 'p-header'); // クラス名追加
    }
  }
}; // **
// ハンバーガーボタン：クリックイベント
// **


var hamburger = document.getElementById('js-hamburger');
hamburger.addEventListener('click', function () {
  var myPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (hamburger.classList.contains("is-close")) {
    hamburger.classList.remove('is-close');
    hamburger.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
    document.body.style.position = "fixed";
    document.body.style.top = "-".concat(myPosition, "px");
  } else {
    if (hamburger.classList.contains("is-open")) {
      hamburger.classList.remove('is-open');
      document.body.classList.remove('is-open');
      hamburger.classList.add('is-close'); // スクロール位置の保持

      var scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
}); // const hamburger = document.getElementById('js-hamburger');
// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('is-open');
// 	document.body.classList.toggle('is-open');
// });
// **
// is-openを消す
// **
// ハンバーガーメニューをクリックしたとき

var navList = document.querySelectorAll(".js-marker");
navList.forEach(function (elm) {
  elm.addEventListener('click', function () {
    hamburger.classList.remove('is-open');
    document.body.classList.remove('is-open');
  });
}); // ウィンドウ幅が切り替わったとき

var moonMiniSize = 570;
jQuery(function ($) {
  $(window).resize(function () {
    var x = $(window).width();
    var y = moonMiniSize;

    if (x >= y) {
      $("#js-hamburger").removeClass("is-open");
      $("body").removeClass("is-open");
      $("#js-hamburger").addClass("is-close");
      $("body").addClass("is-close");
    } else {}
  });
}); // ハンバーガーメニューの切り替え設定
// window.addEventListener('resize', function () {
// 	const spWindowSize = 570; //切り替え時の画面幅
// 	const target1 = document.getElementById('js-gmenu');
// 	const target2 = document.getElementById('js-nav');
// 	const btnHome = document.getElementById('js-btn-home');
// 	const btnWorks = document.getElementById('js-btn-works');
// 	const btnProfile = document.getElementById('js-btn-profile');
// 	const btnContact = document.getElementById('js-btn-contact');
// 	if (window.innerWidth <= spWindowSize) {//画面幅が以下の場合
// 		target1.classList.remove("p-gmenu");
// 		target2.classList.remove("c-nav");
// 		target1.classList.add("p-gmenu--hamburger");
// 		target2.classList.add("c-nav--hamburger");
// 		btnHome.classList.add("c-nav-btn--home");
// 		btnWorks.classList.add("c-nav-btn--works");
// 		btnProfile.classList.add("c-nav-btn--profile");
// 		btnContact.classList.add("c-nav-btn--contact");
// 		target1.addEventListener('click', e => {
// 			target1.classList.toggle('is-open')
// 			btnHome.children[0].classList.toggle('is-off')
// 			btnWorks.children[0].classList.toggle('is-off')
// 			btnProfile.children[0].classList.toggle('is-off')
// 			btnContact.children[0].classList.toggle('is-off')
// 		});
// 	} else {//幅が大きい時
// 		target1.classList.remove("p-gmenu--hamburger");
// 		target2.classList.remove("c-nav--hamburger");
// 		btnHome.classList.remove("c-nav-btn--home");
// 		btnWorks.classList.remove("c-nav-btn--works");
// 		btnProfile.classList.remove("c-nav-btn--profile");
// 		btnContact.classList.remove("c-nav-btn--contact");
// 		target1.classList.add("p-gmenu");
// 		target2.classList.add("c-nav");
// 	}
// });
// **
// jQueryで書く場合
// **
// **ヘッダーのフェード**
// jQuery(function ($) {
// 	let ttl = $('.js-header');
// 	$(window).on('load scroll', function () {
// 		if ($(this).scrollTop() > 50) { //スクロールしてページトップから〇〇に達したら
// 			ttl.addClass('is-fade');
// 		} else {
// 			ttl.removeClass('is-fade');
// 		}
// 	});
// });
// **スクロール途中でヘッダー出現**
// function headerBack() {
// 	let elemTop = jQuery('#works').offset().top;//#の位置
// 	let scroll = jQuery(window).scrollTop();
// 	if (scroll >= elemTop) {
// 		// クラス名除去
// 		jQuery('.js-header-back').removeClass('UpMove');
// 		jQuery('.js-header-back').removeClass('p-header');
// 		jQuery('.js-header-back').removeClass('is-fade');
// 		// クラス名追加
// 		jQuery('.js-header-back').addClass('DownMove');
// 		jQuery('.js-header-back').addClass('p-header--back');
// 	} else {
// 		if (jQuery('.js-header-back').hasClass('DownMove')) {//すでにクラス名がついていたら
// 			// クラス名除去
// 			jQuery('.js-header-back').removeClass('DownMove');
// 			jQuery('.js-header-back').removeClass('p-header--back');
// 			// クラス名追加
// 			jQuery('.js-header-back').addClass('UpMove');
// 			jQuery('.js-header-back').addClass('p-header');
// 		}
// 	}
// }

/***/ }),

/***/ "../_assets/js/common/myHover.js":
/*!***************************************!*\
  !*** ../_assets/js/common/myHover.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var marker = document.querySelector('#marker');

function moveIndicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

var list = document.querySelectorAll('.js-marker');
list.forEach(function (link) {
  link.addEventListener('mousemove', function (e) {
    marker.style.opacity = 1;
    moveIndicator(e.target);
  });
});

function activeLink() {
  list.forEach(function (item) {
    return item.classList.remove('marker-active');
  });
  this.classList.add('marker-active');
}

function removeActive() {
  list.forEach(function (item) {
    return item.classList.remove('marker-active');
  });
}

list.forEach(function (item) {
  return item.addEventListener('mouseover', activeLink);
});
list.forEach(function (item) {
  return item.addEventListener('mouseleave', removeActive);
}); // クリックしたら透明にする

list.forEach(function (item) {
  return item.addEventListener("click", function () {
    marker.style.opacity = 0;
  });
});

/***/ }),

/***/ "../_assets/js/common/myLoading.js":
/*!*****************************************!*\
  !*** ../_assets/js/common/myLoading.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener("DOMContentLoaded", function () {
  // タブに対してクリックイベントを適用
  var myElm = document.getElementsByClassName("js-loading");

  var _loop = function _loop(i) {
    setTimeout(function () {
      myElm[i].classList.add('is-show');
    }, 100);
  };

  for (var i = 0; i < myElm.length; i++) {
    _loop(i);
  }
});

/***/ }),

/***/ "../_assets/js/common/myMilkyway.js":
/*!******************************************!*\
  !*** ../_assets/js/common/myMilkyway.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  for (var i = 0; i < 200; i++) {
    // 「i++」は「i=i+1」と同じ意味
    $('.js-milky-way').append('<div class="p-milky-way"><div class="milky-move"><div class="milky-star"></div></div></div>');
  }
});

/***/ }),

/***/ "../_assets/js/common/myShow.js":
/*!**************************************!*\
  !*** ../_assets/js/common/myShow.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// data属性
// data-sa_margin：表示タイミングを位置でずらす
// data-sa_trigger：表示タイミングの基準要素を指定
// data-sa_delay：表示タイミングを時間でずらす
var AnimClass = 'js-show';
var scrollAnimationShowClass = 'show';
var triggerMarginDefault = 200;
var scrollAnimElm = document.querySelectorAll('.' + AnimClass);

var scrollAnimationFunc = function scrollAnimationFunc() {
  for (var i = 0; i < scrollAnimElm.length; i++) {
    var triggerMargin = triggerMarginDefault;
    var elm = scrollAnimElm[i];
    var showPos = 0; // marginでずらす場合

    if (elm.dataset.js_datamargin != null) {
      triggerMargin = parseInt(elm.dataset.js_margin);
    } // tirggerがある場合


    if (elm.dataset.js_trigger) {
      showPos = document.querySelector(elm.dataset.js_trigger).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    } // 時間でずらす場合


    if (window.innerHeight > showPos) {
      var delay = elm.dataset.js_delay ? elm.dataset.js_delay : 0;
      setTimeout(function (index) {
        scrollAnimElm[index].classList.add('show');
      }.bind(null, i), delay);
    }
  }
};

window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

/***/ }),

/***/ "../_assets/js/common/mySwiper.js":
/*!****************************************!*\
  !*** ../_assets/js/common/mySwiper.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var swiper = new Swiper('.js-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "../_assets/js/common/myTextRotate.js":
/*!********************************************!*\
  !*** ../_assets/js/common/myTextRotate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Text Animation
var paragraph = document.getElementById('js-rotate');

function textEffect(animationName) {
  var text = paragraph.innerHTML,
      chars = text.length,
      newText = '',
      animation = animationName,
      char,
      i;

  for (i = 0; i < chars; i += 1) {
    newText += '<i>' + text.charAt(i) + '</i>';
  }

  paragraph.innerHTML = newText;
  var wrappedChars = document.getElementsByTagName('i'),
      wrappedCharsLen = wrappedChars.length,
      j = 0;

  function addEffect() {
    setTimeout(function () {
      wrappedChars[j].className = animation;
      j += 1;

      if (j < wrappedCharsLen) {
        addEffect();
      }
    }, 100);
  }

  addEffect();
}

;
textEffect('fly-in-out');

/***/ }),

/***/ "../_assets/js/common/myTrain.js":
/*!***************************************!*\
  !*** ../_assets/js/common/myTrain.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 銀河鉄道を固定する
var train_pos = jQuery(".js-train").offset().top;
var train_height = jQuery(".js-train").outerHeight();
jQuery(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > train_pos - 40) {
      $("body").css("padding-top", train_height);
      $(".js-train").addClass("fixed");
    } else {
      $("body").css("padding-top", 0);
      $(".js-train").removeClass("fixed");
    }
  });
});

/***/ }),

/***/ "../_assets/js/common/myWave.js":
/*!**************************************!*\
  !*** ../_assets/js/common/myWave.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// HTMLの<canvas>タグにJavaScriptを使い波（塗り）を描画する
var unit = 100,
    canvasList,
    // キャンバスの配列
info = {},
    // 全キャンバス共通の描画情報
colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */

function init() {
  info.seconds = 0;
  info.t = 0;
  canvasList = [];
  colorList = []; // canvas1個めの色指定

  canvasList.push(document.getElementById("waveCanvas"));
  colorList.push(['#ffbef6', '#fff5be', '#b6f7ff']); //左が一番下→上の波順
  // 各キャンバスの初期化

  for (var canvasIndex in canvasList) {
    var canvas = canvasList[canvasIndex];
    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる

    canvas.height = 450; //波の高さ

    canvas.contextCache = canvas.getContext("2d");
  } // 共通の更新処理呼び出し


  update();
}

function update() {
  for (var canvasIndex in canvasList) {
    var canvas = canvasList[canvasIndex]; // 各キャンバスの描画

    draw(canvas, colorList[canvasIndex]);
  } // 共通の描画情報の更新


  info.seconds = info.seconds + .014;
  info.t = info.seconds * Math.PI; // 自身の再起呼び出し

  setTimeout(update, 35);
}
/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */


function draw(canvas, color) {
  // 対象のcanvasのコンテキストを取得
  var context = canvas.contextCache; // キャンバスの描画をクリア

  context.clearRect(0, 0, canvas.width, canvas.height); //波の重なりを描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )

  drawWave(canvas, color[0], 1, 3, 0); //0.5⇒透過具合50%、3⇒数字が大きいほど波がなだらか

  drawWave(canvas, color[1], 1, 2, 250);
  drawWave(canvas, color[2], 1, 2.5, 100);
}
/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/


function drawWave(canvas, color, alpha, zoom, delay) {
  var context = canvas.contextCache;
  context.fillStyle = color; //塗りの色

  context.globalAlpha = alpha;
  context.beginPath(); //パスの開始

  drawSine(canvas, info.t / 0.5, zoom, delay);
  context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ

  context.lineTo(0, canvas.height); //パスをCanvasの左下へ

  context.closePath(); //パスを閉じる

  context.fill(); //波を塗りつぶす
}
/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */


function drawSine(canvas, t, zoom, delay) {
  var xAxis = Math.floor(canvas.height / 2);
  var yAxis = 0;
  var context = canvas.contextCache; // Set the initial x and y, starting at 0,0 and translating to the origin on
  // the canvas.

  var x = t; //時間を横の位置とする

  var y = Math.sin(x) / zoom;
  context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く
  // Loop to draw segments (横幅の分、波を描画)

  for (i = yAxis; i <= canvas.width + 10; i += 10) {
    x = t + (-yAxis + i) / unit / zoom;
    y = Math.sin(x - delay) / 3;
    context.lineTo(i, unit * y + xAxis);
  }
}

init();

/***/ }),

/***/ "../_assets/js/common/smooth-scroll.js":
/*!*********************************************!*\
  !*** ../_assets/js/common/smooth-scroll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var duration = 1000;
var startTime; // アニメーションの開始時間を格納する変数

var startScrollY; // アニメーションの開始時のスクロール位置を格納する変数

var targetScrollY; // ターゲットのスクロール位置を格納する変数

/**
 * イージング関数
 * @param x
 * @returns {number}
 */

var easeOutCubic = function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
};
/**
 * アニメーションの各フレームでの処理
 */


var scrollAnimation = function scrollAnimation() {
  var progress = Math.min(1, (Date.now() - startTime) / duration); // 現在時間の継続時間に対する進捗度を算出

  var scrollY = startScrollY + (targetScrollY - startScrollY) * easeOutCubic(progress);
  window.scrollTo(0, scrollY);

  if (progress < 1) {
    // 進捗度が1未満（=100%ではない）場合、自分自身を呼び出し、繰り返す
    requestAnimationFrame(scrollAnimation);
  }
}; // トップへ戻る要素をクリックしたらスクロールアニメーション実行


document.querySelectorAll("a[href^='#']").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    var targetId = event.target.getAttribute("href"); // ターゲットの要素を取得

    if (targetId === "#") {
      targetScrollY = 0; // href="#"の場合はページトップなので0
    } else {
      var targetElement = document.querySelector(targetId); // ターゲットの要素

      var documentHeight = document.body.clientHeight; // ページ全体の高さ

      if (targetElement.offsetTop + window.innerHeight > documentHeight) {
        // ターゲットのY座標取得
        targetScrollY = documentHeight - window.innerHeight; // ターゲットのY座標+ウィンドウ高さがページ全体の高さを超えたとき（＝そこまでスクロールできない）は、ページ一番したまでの位置を取得
      } else {
        targetScrollY = targetElement.offsetTop; // ターゲットのY座標
      }
    }

    startTime = Date.now(); // Date.now()で開始時間をセット

    startScrollY = window.scrollY; // 現在のスクロール位置をセット

    scrollAnimation();
  });
});

/***/ }),

/***/ "../_assets/js/lib/b_browser_switcher.js":
/*!***********************************************!*\
  !*** ../_assets/js/lib/b_browser_switcher.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window._uac = {}; // define _uac as a global object

var ua = window.navigator.userAgent.toLowerCase();
var ver = window.navigator.appVersion.toLowerCase(); // check browser version

_uac.browser = function () {
  if (ua.indexOf('edge') !== -1) return 'edge'; // Edge
  else if (ua.indexOf("iemobile") !== -1) return 'iemobile'; // ieMobile
  else if (ua.indexOf('trident/7') !== -1) return 'ie11'; // ie11
  else if (ua.indexOf("msie") !== -1 && ua.indexOf('opera') === -1) {
    if (ver.indexOf("msie 6.") !== -1) return 'ie6'; // ie6
    else if (ver.indexOf("msie 7.") !== -1) return 'ie7'; // ie7
    else if (ver.indexOf("msie 8.") !== -1) return 'ie8'; // ie8
    else if (ver.indexOf("msie 9.") !== -1) return 'ie9'; // ie9
    else if (ver.indexOf("msie 10.") !== -1) return 'ie10'; // ie10
  } else if (ua.indexOf('chrome') !== -1 && ua.indexOf('edge') === -1) return 'chrome'; // Chrome
  else if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) return 'safari'; // Safari
  else if (ua.indexOf('opera') !== -1) return 'opera'; // Opera
  else if (ua.indexOf('firefox') !== -1) return 'firefox'; // FIrefox
  else return 'unknown_browser';
}(); // check device


_uac.device = function () {
  if (ua.indexOf('iphone') !== -1 || ua.indexOf('ipod') !== -1) return 'iphone';else if (ua.indexOf('ipad') !== -1) return 'ipad';else if (ua.indexOf('android') !== -1) return 'android';else if (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1) return 'windows_phone';else return '';
}(); // check ios version


_uac.iosVer = function () {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var versions = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    return versions[0];
  } else return 0;
}();

_uac.isIE = _uac.browser.substr(0, 2) === 'ie' && _uac.browser !== 'iemobile';
_uac.isiOS = _uac.device === 'iphone' || _uac.device === 'ipad';
_uac.isMobile = ua.indexOf('mobi') !== -1 || _uac.device === 'iphone' || _uac.device === 'windows_phone' && ua.indexOf('wpdesktop') === -1 || _uac.device === 'iemobile';
_uac.isTablet = _uac.device === 'ipad' || _uac.device === 'android' && !_uac.isMobile;
_uac.isTouch = 'ontouchstart' in window;
_uac.isModern = !(_uac.browser === 'ie6' || _uac.browser === 'ie7' || _uac.browser === 'ie8' || _uac.browser === 'ie9' || 0 < _uac.iosVer && _uac.iosVer < 8); // Set the results as class names of the html

var homeClass = function homeClass() {
  var classStr = ' ';
  classStr += _uac.browser !== '' ? _uac.browser + " " : 'browser-unknown ', classStr += _uac.device !== '' ? _uac.device + " " : 'device-unknown ', classStr += _uac.isMobile ? 'mobile ' : 'desktop ', classStr += _uac.isTouch ? 'touch ' : 'mouse ', classStr += _uac.isiOS ? 'ios ' : '', classStr += _uac.isIE ? 'ie ' : '', classStr += _uac.isModern ? 'modern ' : 'old ';
  return classStr;
};

document.addEventListener('DOMContentLoaded', function () {
  document.documentElement.className += homeClass();
});

/***/ }),

/***/ "../_assets/js/main.js":
/*!*****************************!*\
  !*** ../_assets/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_b_browser_switcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/b_browser_switcher.js */ "../_assets/js/lib/b_browser_switcher.js");
/* harmony import */ var _lib_b_browser_switcher_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_b_browser_switcher_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/myBubblyButton.js */ "../_assets/js/common/myBubblyButton.js");
/* harmony import */ var _common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/myHeader.js */ "../_assets/js/common/myHeader.js");
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_myHeader_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_myHover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/myHover */ "../_assets/js/common/myHover.js");
/* harmony import */ var _common_myHover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_myHover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_myLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/myLoading.js */ "../_assets/js/common/myLoading.js");
/* harmony import */ var _common_myLoading_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_myLoading_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_myMilkyway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/myMilkyway */ "../_assets/js/common/myMilkyway.js");
/* harmony import */ var _common_myMilkyway__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_myMilkyway__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_myShow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/myShow.js */ "../_assets/js/common/myShow.js");
/* harmony import */ var _common_myShow_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_myShow_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_myTextRotate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/myTextRotate.js */ "../_assets/js/common/myTextRotate.js");
/* harmony import */ var _common_myTextRotate_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_myTextRotate_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/myTrain.js */ "../_assets/js/common/myTrain.js");
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_myTrain_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/myWave.js */ "../_assets/js/common/myWave.js");
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_myWave_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_bubble_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/bubble.js */ "../_assets/js/common/bubble.js");
/* harmony import */ var _common_bubble_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_bubble_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_smooth_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/smooth-scroll */ "../_assets/js/common/smooth-scroll.js");
/* harmony import */ var _common_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_smooth_scroll__WEBPACK_IMPORTED_MODULE_12__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
//SVGスプライトをIEで使用するためのライブラリ
// import '@modules/svgxuse';
//ブラウザ判定のためライブラリ












 // import './common'

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlCdWJibHlCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215SGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUhvdmVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215TWlsa3l3YXkuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215U2hvdy5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlTd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215VGV4dFJvdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlUcmFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlXYXZlLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9zbW9vdGgtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2xpYi9iX2Jyb3dzZXJfc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJlYWNoIiwiJGNpcmNsZXNUb3BMZWZ0IiwiJCIsInBhcmVudCIsImZpbmQiLCIkY2lyY2xlc0JvdHRvbVJpZ2h0IiwidGwiLCJUaW1lbGluZUxpdGUiLCJ0bDIiLCJidFRsIiwicGF1c2VkIiwidG8iLCJ4IiwieSIsInNjYWxlWSIsImVhc2UiLCJTbG93TW8iLCJjb25maWciLCJlcSIsInNjYWxlIiwic2NhbGVYIiwib3BhY2l0eSIsInRsQnQxIiwidGxCdDIiLCJzZXQiLCJyb3RhdGlvbiIsImFkZCIsIkVsYXN0aWMiLCJlYXNlT3V0IiwidGltZVNjYWxlIiwib24iLCJyZXN0YXJ0IiwiYW5pbWF0ZUJ1dHRvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJidWJibHlCdXR0b25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJoZWFkZXJGYWRlIiwiaGVhZGVyQmFja0Rvd24iLCJoZWFkZXJDbGFzcyIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyRmFkZVBvc2l0aW9uIiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJteVRhcmdldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YXJnZXRUb3AiLCJ0b3AiLCJjb250YWlucyIsImhhbWJ1cmdlciIsIm15UG9zaXRpb24iLCJ0b2dnbGUiLCJib2R5Iiwic3R5bGUiLCJwb3NpdGlvbiIsInNjcm9sbFkiLCJzY3JvbGxUbyIsInBhcnNlSW50IiwibmF2TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxtIiwibW9vbk1pbmlTaXplIiwicmVzaXplIiwid2lkdGgiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibWFya2VyIiwicXVlcnlTZWxlY3RvciIsIm1vdmVJbmRpY2F0b3IiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwibGlzdCIsImxpbmsiLCJhY3RpdmVMaW5rIiwiaXRlbSIsInJlbW92ZUFjdGl2ZSIsIm15RWxtIiwiYXBwZW5kIiwiQW5pbUNsYXNzIiwic2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzIiwidHJpZ2dlck1hcmdpbkRlZmF1bHQiLCJzY3JvbGxBbmltRWxtIiwic2Nyb2xsQW5pbWF0aW9uRnVuYyIsInRyaWdnZXJNYXJnaW4iLCJzaG93UG9zIiwiZGF0YXNldCIsImpzX2RhdGFtYXJnaW4iLCJqc19tYXJnaW4iLCJqc190cmlnZ2VyIiwiaW5uZXJIZWlnaHQiLCJkZWxheSIsImpzX2RlbGF5IiwiaW5kZXgiLCJiaW5kIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImVmZmVjdCIsImxvb3AiLCJzcGVlZCIsIm1vdXNld2hlZWwiLCJpbnZlcnQiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJkeW5hbWljQnVsbGV0cyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwYXJhZ3JhcGgiLCJ0ZXh0RWZmZWN0IiwiYW5pbWF0aW9uTmFtZSIsInRleHQiLCJpbm5lckhUTUwiLCJjaGFycyIsIm5ld1RleHQiLCJhbmltYXRpb24iLCJjaGFyIiwiY2hhckF0Iiwid3JhcHBlZENoYXJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3cmFwcGVkQ2hhcnNMZW4iLCJqIiwiYWRkRWZmZWN0IiwiY2xhc3NOYW1lIiwidHJhaW5fcG9zIiwib2Zmc2V0IiwidHJhaW5faGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzY3JvbGwiLCJjc3MiLCJ1bml0IiwiY2FudmFzTGlzdCIsImluZm8iLCJjb2xvckxpc3QiLCJpbml0Iiwic2Vjb25kcyIsInQiLCJwdXNoIiwiY2FudmFzSW5kZXgiLCJjYW52YXMiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNvbnRleHRDYWNoZSIsImdldENvbnRleHQiLCJ1cGRhdGUiLCJkcmF3IiwiTWF0aCIsIlBJIiwiY29sb3IiLCJjb250ZXh0IiwiY2xlYXJSZWN0IiwiZHJhd1dhdmUiLCJhbHBoYSIsInpvb20iLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImRyYXdTaW5lIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCIsInhBeGlzIiwiZmxvb3IiLCJ5QXhpcyIsInNpbiIsIm1vdmVUbyIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwic3RhcnRTY3JvbGxZIiwidGFyZ2V0U2Nyb2xsWSIsImVhc2VPdXRDdWJpYyIsInBvdyIsInNjcm9sbEFuaW1hdGlvbiIsInByb2dyZXNzIiwibWluIiwiRGF0ZSIsIm5vdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsZW1lbnQiLCJldmVudCIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsImRvY3VtZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib2Zmc2V0VG9wIiwiX3VhYyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJ2ZXIiLCJhcHBWZXJzaW9uIiwiYnJvd3NlciIsImluZGV4T2YiLCJkZXZpY2UiLCJpb3NWZXIiLCJ0ZXN0IiwicGxhdGZvcm0iLCJ2IiwibWF0Y2giLCJ2ZXJzaW9ucyIsImlzSUUiLCJzdWJzdHIiLCJpc2lPUyIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc1RvdWNoIiwiaXNNb2Rlcm4iLCJob21lQ2xhc3MiLCJjbGFzc1N0ciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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USxDQUFDSSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUN2REosVUFBUSxDQUFDYSxlQUFULENBQXlCcUYsU0FBekIsSUFBc0NzRixTQUFTLEVBQS9DO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQSxvQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9fYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCJqUXVlcnkoJy5idXR0b24tLWJ1YmJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICB2YXIgJGNpcmNsZXNUb3BMZWZ0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuY2lyY2xlLnRvcC1sZWZ0Jyk7XG4gIHZhciAkY2lyY2xlc0JvdHRvbVJpZ2h0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuY2lyY2xlLmJvdHRvbS1yaWdodCcpO1xuXG4gIHZhciB0bCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgdmFyIHRsMiA9IG5ldyBUaW1lbGluZUxpdGUoKTtcblxuICB2YXIgYnRUbCA9IG5ldyBUaW1lbGluZUxpdGUoeyBwYXVzZWQ6IHRydWUgfSk7XG5cbiAgdGwudG8oJGNpcmNsZXNUb3BMZWZ0LCAxLjIsIHsgeDogLTI1LCB5OiAtMjUsIHNjYWxlWTogMiwgZWFzZTogU2xvd01vLmVhc2UuY29uZmlnKDAuMSwgMC43LCBmYWxzZSkgfSk7XG4gIHRsLnRvKCRjaXJjbGVzVG9wTGVmdC5lcSgwKSwgMC4xLCB7IHNjYWxlOiAwLjIsIHg6ICcrPTYnLCB5OiAnLT0yJyB9KTtcbiAgdGwudG8oJGNpcmNsZXNUb3BMZWZ0LmVxKDEpLCAwLjEsIHsgc2NhbGVYOiAxLCBzY2FsZVk6IDAuOCwgeDogJy09MTAnLCB5OiAnLT03JyB9LCAnLT0wLjEnKTtcbiAgdGwudG8oJGNpcmNsZXNUb3BMZWZ0LmVxKDIpLCAwLjEsIHsgc2NhbGU6IDAuMiwgeDogJy09MTUnLCB5OiAnKz02JyB9LCAnLT0wLjEnKTtcbiAgdGwudG8oJGNpcmNsZXNUb3BMZWZ0LmVxKDApLCAxLCB7IHNjYWxlOiAwLCB4OiAnLT01JywgeTogJy09MTUnLCBvcGFjaXR5OiAwIH0pO1xuICB0bC50bygkY2lyY2xlc1RvcExlZnQuZXEoMSksIDEsIHsgc2NhbGVYOiAwLjQsIHNjYWxlWTogMC40LCB4OiAnLT0xMCcsIHk6ICctPTEwJywgb3BhY2l0eTogMCB9LCAnLT0xJyk7XG4gIHRsLnRvKCRjaXJjbGVzVG9wTGVmdC5lcSgyKSwgMSwgeyBzY2FsZTogMCwgeDogJy09MTUnLCB5OiAnKz01Jywgb3BhY2l0eTogMCB9LCAnLT0xJyk7XG5cbiAgdmFyIHRsQnQxID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICB2YXIgdGxCdDIgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgdGxCdDEuc2V0KCRjaXJjbGVzVG9wTGVmdCwgeyB4OiAwLCB5OiAwLCByb3RhdGlvbjogLTQ1IH0pO1xuICB0bEJ0MS5hZGQodGwpO1xuXG4gIHRsMi5zZXQoJGNpcmNsZXNCb3R0b21SaWdodCwgeyB4OiAwLCB5OiAwIH0pO1xuICB0bDIudG8oJGNpcmNsZXNCb3R0b21SaWdodCwgMS4xLCB7IHg6IDMwLCB5OiAzMCwgZWFzZTogU2xvd01vLmVhc2UuY29uZmlnKDAuMSwgMC43LCBmYWxzZSkgfSk7XG4gIHRsMi50bygkY2lyY2xlc0JvdHRvbVJpZ2h0LmVxKDApLCAwLjEsIHsgc2NhbGU6IDAuMiwgeDogJy09NicsIHk6ICcrPTMnIH0pO1xuICB0bDIudG8oJGNpcmNsZXNCb3R0b21SaWdodC5lcSgxKSwgMC4xLCB7IHNjYWxlOiAwLjgsIHg6ICcrPTcnLCB5OiAnKz0zJyB9LCAnLT0wLjEnKTtcbiAgdGwyLnRvKCRjaXJjbGVzQm90dG9tUmlnaHQuZXEoMiksIDAuMSwgeyBzY2FsZTogMC4yLCB4OiAnKz0xNScsIHk6ICctPTYnIH0sICctPTAuMicpO1xuICB0bDIudG8oJGNpcmNsZXNCb3R0b21SaWdodC5lcSgwKSwgMSwgeyBzY2FsZTogMCwgeDogJys9NScsIHk6ICcrPTE1Jywgb3BhY2l0eTogMCB9KTtcbiAgdGwyLnRvKCRjaXJjbGVzQm90dG9tUmlnaHQuZXEoMSksIDEsIHsgc2NhbGU6IDAuNCwgeDogJys9NycsIHk6ICcrPTcnLCBvcGFjaXR5OiAwIH0sICctPTEnKTtcbiAgdGwyLnRvKCRjaXJjbGVzQm90dG9tUmlnaHQuZXEoMiksIDEsIHsgc2NhbGU6IDAsIHg6ICcrPTE1JywgeTogJy09NScsIG9wYWNpdHk6IDAgfSwgJy09MScpO1xuXG4gIHRsQnQyLnNldCgkY2lyY2xlc0JvdHRvbVJpZ2h0LCB7IHg6IDAsIHk6IDAsIHJvdGF0aW9uOiA0NSB9KTtcbiAgdGxCdDIuYWRkKHRsMik7XG5cbiAgYnRUbC5hZGQodGxCdDEpO1xuICBidFRsLnRvKCQodGhpcykucGFyZW50KCkuZmluZCgnLmJ1dHRvbi5lZmZlY3QtYnV0dG9uJyksIDAuOCwgeyBzY2FsZVk6IDEuMSB9LCAwLjEpO1xuICBidFRsLmFkZCh0bEJ0MiwgMC4yKTtcbiAgYnRUbC50bygkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5idXR0b24uZWZmZWN0LWJ1dHRvbicpLCAxLjgsIHsgc2NhbGU6IDEsIGVhc2U6IEVsYXN0aWMuZWFzZU91dC5jb25maWcoMS4yLCAwLjQpIH0sIDEuMik7XG5cbiAgYnRUbC50aW1lU2NhbGUoMi42KTtcblxuICAkKHRoaXMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgYnRUbC5yZXN0YXJ0KCk7XG4gIH0pO1xufSk7IiwibGV0IGFuaW1hdGVCdXR0b24gPSBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgIC8vcmVzZXQgYW5pbWF0aW9uXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgIFxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgIH0sNzAwKTtcbn07XG5cblxuY29uc3QgYnViYmx5QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1idWJibHlcIik7XG5mb3IgKGxldCBpID0gMDsgaSA8IGJ1YmJseUJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbi8vIGJ1YmJseUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignaG92ZXInLCBhbmltYXRlQnV0dG9uLCBmYWxzZSk7XG5idWJibHlCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGFuaW1hdGVCdXR0b24sIGZhbHNlKTtcbn1cbiIsIi8vIGNvbnN0IGJvZHlXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbi8vIOOCueOCr+ODreODvOODq+OBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cbi8vIOODreODvOODieOBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcbn0pO1xuXG5cbi8vICoqXG4vLyBwLWhlYWRlcjrjgrnjgq/jg63jg7zjg6vjgZfjgZ/jgonmtojjgYjjgotcbi8vICoqXG5jb25zdCBoZWFkZXJDbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaGVhZGVyXCIpO1xuY29uc3QgaGVhZGVyRmFkZVBvc2l0aW9uID0gNTA7Ly/jgrnjgq/jg63jg7zjg6vjgZfjgabjg5rjg7zjgrjjg4jjg4Pjg5fjgYvjgonjgIfjgIfjgavpgZTjgZfjgZ/jgajjgY1cbmNvbnN0IGhlYWRlckZhZGUgPSAoKSA9PiB7XG5cdGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0aWYgKHNjcm9sbFRvcCA+PSBoZWFkZXJGYWRlUG9zaXRpb24pIHtcblx0XHRoZWFkZXJDbGFzcy5jbGFzc0xpc3QuYWRkKCdpcy1mYWRlJyk7XG5cdH0gZWxzZSB7XG5cdFx0aGVhZGVyQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmFkZScpO1xuXHR9O1xufVxuXG5cblxuXG4vLyAqKlxuLy8gcC1oZWFkZXItYmFjazrjgrnjgq/jg63jg7zjg6vpgJTkuK3jgaflh7rnj75cbi8vICoqXG5jb25zdCBoZWFkZXJCYWNrRG93biA9ICgpID0+IHtcblx0bGV0IG15VGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrc1wiKTtcblx0bGV0IHJlY3QgPSBteVRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0bGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRsZXQgdGFyZ2V0VG9wID0gcmVjdC50b3AgKyBzY3JvbGxUb3A7XG5cblx0aWYgKHNjcm9sbFRvcCA+PSB0YXJnZXRUb3ApIHtcblx0XHRoZWFkZXJDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwiVXBNb3ZlXCIsIFwicC1oZWFkZXJcIiwgXCJpcy1mYWRlXCIpOy8vIOOCr+ODqeOCueWQjemZpOWOu1xuXHRcdGhlYWRlckNsYXNzLmNsYXNzTGlzdC5hZGQoJ0Rvd25Nb3ZlJywgJ3AtaGVhZGVyLS1iYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cblx0fSBlbHNlIHtcblx0XHRpZiAoaGVhZGVyQ2xhc3MuY2xhc3NMaXN0LmNvbnRhaW5zKFwiRG93bk1vdmVcIikpIHsvL+OBmeOBp+OBq+OCr+ODqeOCueWQjeOBjOOBpOOBhOOBpuOBhOOBn+OCiVxuXHRcdFx0aGVhZGVyQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLmNsYXNzTGlzdC5hZGQoJ1VwTW92ZScsICdwLWhlYWRlcicpOy8vIOOCr+ODqeOCueWQjei/veWKoFxuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gKipcbi8vIOODj+ODs+ODkOODvOOCrOODvOODnOOCv+ODs++8muOCr+ODquODg+OCr+OCpOODmeODs+ODiFxuLy8gKipcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1oYW1idXJnZXInKTtcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0bGV0IG15UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuXHRpZiAoaGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWNsb3NlXCIpKSB7XG5cdFx0aGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNsb3NlJyk7XG5cblx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBgLSR7bXlQb3NpdGlvbn1weGA7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGhhbWJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7XG5cdFx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LmFkZCgnaXMtY2xvc2UnKTtcblxuXHRcdFx0Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu5L+d5oyBXG5cdFx0XHRjb25zdCBzY3JvbGxZID0gZG9jdW1lbnQuYm9keS5zdHlsZS50b3A7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcblx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIjtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChzY3JvbGxZIHx8ICcwJykgKiAtMSk7XG5cdFx0fVxuXHR9XG59KTtcblxuXG4vLyBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtaGFtYnVyZ2VyJyk7XG4vLyBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyBcdGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XG4vLyBcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuLy8gfSk7XG5cblxuLy8gKipcbi8vIGlzLW9wZW7jgpLmtojjgZlcbi8vICoqXG4vLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgajjgY1cbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1hcmtlclwiKTtcbm5hdkxpc3QuZm9yRWFjaCgoZWxtKSA9PiB7XG5cdGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXHR9KTtcbn0pO1xuXG4vLyDjgqbjgqPjg7Pjg4njgqbluYXjgYzliIfjgormm7/jgo/jgaPjgZ/jgajjgY1cbmNvbnN0IG1vb25NaW5pU2l6ZSA9IDU3MDtcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgeCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdGxldCB5ID0gbW9vbk1pbmlTaXplO1xuXHRcdGlmICh4ID49IHkpIHtcblx0XHRcdCQoXCIjanMtaGFtYnVyZ2VyXCIpLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0XHRcdCQoXCIjanMtaGFtYnVyZ2VyXCIpLmFkZENsYXNzKFwiaXMtY2xvc2VcIik7XG5cdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcImlzLWNsb3NlXCIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHR9XG5cdH0pO1xufSlcblxuXG5cblxuXG5cblxuXG5cblxuLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu5YiH44KK5pu/44GI6Kit5a6aXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuLy8gXHRjb25zdCBzcFdpbmRvd1NpemUgPSA1NzA7IC8v5YiH44KK5pu/44GI5pmC44Gu55S76Z2i5bmFXG4vLyBcdGNvbnN0IHRhcmdldDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtZ21lbnUnKTtcbi8vIFx0Y29uc3QgdGFyZ2V0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1uYXYnKTtcbi8vIFx0Y29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1idG4taG9tZScpO1xuLy8gXHRjb25zdCBidG5Xb3JrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1idG4td29ya3MnKTtcbi8vIFx0Y29uc3QgYnRuUHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1idG4tcHJvZmlsZScpO1xuLy8gXHRjb25zdCBidG5Db250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJ0bi1jb250YWN0Jyk7XG5cblxuLy8gXHRpZiAod2luZG93LmlubmVyV2lkdGggPD0gc3BXaW5kb3dTaXplKSB7Ly/nlLvpnaLluYXjgYzku6XkuIvjga7loLTlkIhcbi8vIFx0XHR0YXJnZXQxLmNsYXNzTGlzdC5yZW1vdmUoXCJwLWdtZW51XCIpO1xuLy8gXHRcdHRhcmdldDIuY2xhc3NMaXN0LnJlbW92ZShcImMtbmF2XCIpO1xuXG4vLyBcdFx0dGFyZ2V0MS5jbGFzc0xpc3QuYWRkKFwicC1nbWVudS0taGFtYnVyZ2VyXCIpO1xuLy8gXHRcdHRhcmdldDIuY2xhc3NMaXN0LmFkZChcImMtbmF2LS1oYW1idXJnZXJcIik7XG4vLyBcdFx0YnRuSG9tZS5jbGFzc0xpc3QuYWRkKFwiYy1uYXYtYnRuLS1ob21lXCIpO1xuLy8gXHRcdGJ0bldvcmtzLmNsYXNzTGlzdC5hZGQoXCJjLW5hdi1idG4tLXdvcmtzXCIpO1xuLy8gXHRcdGJ0blByb2ZpbGUuY2xhc3NMaXN0LmFkZChcImMtbmF2LWJ0bi0tcHJvZmlsZVwiKTtcbi8vIFx0XHRidG5Db250YWN0LmNsYXNzTGlzdC5hZGQoXCJjLW5hdi1idG4tLWNvbnRhY3RcIik7XG5cbi8vIFx0XHR0YXJnZXQxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4vLyBcdFx0XHR0YXJnZXQxLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKVxuLy8gXHRcdFx0YnRuSG9tZS5jaGlsZHJlblswXS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vZmYnKVxuLy8gXHRcdFx0YnRuV29ya3MuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb2ZmJylcbi8vIFx0XHRcdGJ0blByb2ZpbGUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb2ZmJylcbi8vIFx0XHRcdGJ0bkNvbnRhY3QuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb2ZmJylcbi8vIFx0XHR9KTtcblxuLy8gXHR9IGVsc2Ugey8v5bmF44GM5aSn44GN44GE5pmCXG4vLyBcdFx0dGFyZ2V0MS5jbGFzc0xpc3QucmVtb3ZlKFwicC1nbWVudS0taGFtYnVyZ2VyXCIpO1xuLy8gXHRcdHRhcmdldDIuY2xhc3NMaXN0LnJlbW92ZShcImMtbmF2LS1oYW1idXJnZXJcIik7XG4vLyBcdFx0YnRuSG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwiYy1uYXYtYnRuLS1ob21lXCIpO1xuLy8gXHRcdGJ0bldvcmtzLmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdi1idG4tLXdvcmtzXCIpO1xuLy8gXHRcdGJ0blByb2ZpbGUuY2xhc3NMaXN0LnJlbW92ZShcImMtbmF2LWJ0bi0tcHJvZmlsZVwiKTtcbi8vIFx0XHRidG5Db250YWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdi1idG4tLWNvbnRhY3RcIik7XG4vLyBcdFx0dGFyZ2V0MS5jbGFzc0xpc3QuYWRkKFwicC1nbWVudVwiKTtcbi8vIFx0XHR0YXJnZXQyLmNsYXNzTGlzdC5hZGQoXCJjLW5hdlwiKTtcbi8vIFx0fVxuLy8gfSk7XG5cblxuXG5cblxuXG4vLyAqKlxuLy8galF1ZXJ544Gn5pu444GP5aC05ZCIXG4vLyAqKlxuXG4vLyAqKuODmOODg+ODgOODvOOBruODleOCp+ODvOODiSoqXG4vLyBqUXVlcnkoZnVuY3Rpb24gKCQpIHtcbi8vIFx0bGV0IHR0bCA9ICQoJy5qcy1oZWFkZXInKTtcbi8vIFx0JCh3aW5kb3cpLm9uKCdsb2FkIHNjcm9sbCcsIGZ1bmN0aW9uICgpIHtcbi8vIFx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDUwKSB7IC8v44K544Kv44Ot44O844Or44GX44Gm44Oa44O844K444OI44OD44OX44GL44KJ44CH44CH44Gr6YGU44GX44Gf44KJXG4vLyBcdFx0XHR0dGwuYWRkQ2xhc3MoJ2lzLWZhZGUnKTtcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0dHRsLnJlbW92ZUNsYXNzKCdpcy1mYWRlJyk7XG4vLyBcdFx0fVxuLy8gXHR9KTtcbi8vIH0pO1xuXG5cbi8vICoq44K544Kv44Ot44O844Or6YCU5Lit44Gn44OY44OD44OA44O85Ye654++Kipcbi8vIGZ1bmN0aW9uIGhlYWRlckJhY2soKSB7XG4vLyBcdGxldCBlbGVtVG9wID0galF1ZXJ5KCcjd29ya3MnKS5vZmZzZXQoKS50b3A7Ly8j44Gu5L2N572uXG4vLyBcdGxldCBzY3JvbGwgPSBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKTtcbi8vIFx0aWYgKHNjcm9sbCA+PSBlbGVtVG9wKSB7XG4vLyBcdFx0Ly8g44Kv44Op44K55ZCN6Zmk5Y67XG4vLyBcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5yZW1vdmVDbGFzcygnVXBNb3ZlJyk7XG4vLyBcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5yZW1vdmVDbGFzcygncC1oZWFkZXInKTtcbi8vIFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLnJlbW92ZUNsYXNzKCdpcy1mYWRlJyk7XG5cbi8vIFx0XHQvLyDjgq/jg6njgrnlkI3ov73liqBcbi8vIFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLmFkZENsYXNzKCdEb3duTW92ZScpO1xuLy8gXHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykuYWRkQ2xhc3MoJ3AtaGVhZGVyLS1iYWNrJyk7XG5cbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRpZiAoalF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5oYXNDbGFzcygnRG93bk1vdmUnKSkgey8v44GZ44Gn44Gr44Kv44Op44K55ZCN44GM44Gk44GE44Gm44GE44Gf44KJXG4vLyBcdFx0XHQvLyDjgq/jg6njgrnlkI3pmaTljrtcbi8vIFx0XHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykucmVtb3ZlQ2xhc3MoJ0Rvd25Nb3ZlJyk7XG4vLyBcdFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLnJlbW92ZUNsYXNzKCdwLWhlYWRlci0tYmFjaycpO1xuXG4vLyBcdFx0XHQvLyDjgq/jg6njgrnlkI3ov73liqBcbi8vIFx0XHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykuYWRkQ2xhc3MoJ1VwTW92ZScpO1xuLy8gXHRcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5hZGRDbGFzcygncC1oZWFkZXInKTtcbi8vIFx0XHR9XG4vLyBcdH1cbi8vIH0iLCJjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFya2VyJyk7XG5mdW5jdGlvbiBtb3ZlSW5kaWNhdG9yKGUpIHtcbiAgbWFya2VyLnN0eWxlLmxlZnQgPSBlLm9mZnNldExlZnQgKyAncHgnO1xuICBtYXJrZXIuc3R5bGUud2lkdGggPSBlLm9mZnNldFdpZHRoICsgJ3B4Jztcbn1cblxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1tYXJrZXInKTtcbmxpc3QuZm9yRWFjaChsaW5rID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIG1hcmtlci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBtb3ZlSW5kaWNhdG9yKGUudGFyZ2V0KTtcbiAgfSlcbn0pXG5cblxuZnVuY3Rpb24gYWN0aXZlTGluaygpIHtcbiAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmtlci1hY3RpdmUnKSk7XG4gIHRoaXMuY2xhc3NMaXN0LmFkZCgnbWFya2VyLWFjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmUoKSB7XG4gIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXJrZXItYWN0aXZlJykpO1xufVxuXG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWN0aXZlTGluaykpO1xubGlzdC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVBY3RpdmUpKTtcblxuLy8g44Kv44Oq44OD44Kv44GX44Gf44KJ6YCP5piO44Gr44GZ44KLXG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAwO1xufSkpO1xuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDjgr/jg5bjgavlr77jgZfjgabjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjgpLpgannlKhcbiAgICBjb25zdCBteUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1sb2FkaW5nXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlFbG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBteUVsbVtpXS5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxufSk7IiwialF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwOyBpKyspIHsvLyDjgIxpKyvjgI3jga/jgIxpPWkrMeOAjeOBqOWQjOOBmOaEj+WRs1xuICAgICQoJy5qcy1taWxreS13YXknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwLW1pbGt5LXdheVwiPjxkaXYgY2xhc3M9XCJtaWxreS1tb3ZlXCI+PGRpdiBjbGFzcz1cIm1pbGt5LXN0YXJcIj48L2Rpdj48L2Rpdj48L2Rpdj4nKTtcbiAgfVxufSk7IiwiLy8gZGF0YeWxnuaAp1xuLy8gZGF0YS1zYV9tYXJnaW7vvJrooajnpLrjgr/jgqTjg5/jg7PjgrDjgpLkvY3nva7jgafjgZrjgonjgZlcbi8vIGRhdGEtc2FfdHJpZ2dlcu+8muihqOekuuOCv+OCpOODn+ODs+OCsOOBruWfuua6luimgee0oOOCkuaMh+WumlxuLy8gZGF0YS1zYV9kZWxhee+8muihqOekuuOCv+OCpOODn+ODs+OCsOOCkuaZgumWk+OBp+OBmuOCieOBmVxuXG5cbmxldCBBbmltQ2xhc3MgPSAnanMtc2hvdyc7XG5sZXQgc2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzID0gJ3Nob3cnO1xubGV0IHRyaWdnZXJNYXJnaW5EZWZhdWx0ID0gMjAwO1xuXG5sZXQgc2Nyb2xsQW5pbUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQW5pbUNsYXNzKTtcbmxldCBzY3JvbGxBbmltYXRpb25GdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNjcm9sbEFuaW1FbG0ubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdHJpZ2dlck1hcmdpbiA9IHRyaWdnZXJNYXJnaW5EZWZhdWx0O1xuICAgIGxldCBlbG0gPSBzY3JvbGxBbmltRWxtW2ldO1xuICAgIGxldCBzaG93UG9zID0gMDtcblxuICAgIC8vIG1hcmdpbuOBp+OBmuOCieOBmeWgtOWQiFxuICAgIGlmKGVsbS5kYXRhc2V0LmpzX2RhdGFtYXJnaW4gIT0gbnVsbCkge1xuICAgICAgICB0cmlnZ2VyTWFyZ2luID0gcGFyc2VJbnQoZWxtLmRhdGFzZXQuanNfbWFyZ2luKTtcbiAgICB9XG5cbiAgICAvLyB0aXJnZ2Vy44GM44GC44KL5aC05ZCIXG4gICAgaWYoZWxtLmRhdGFzZXQuanNfdHJpZ2dlcikge1xuICAgICAgICBzaG93UG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbG0uZGF0YXNldC5qc190cmlnZ2VyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0cmlnZ2VyTWFyZ2luO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dQb3MgPSBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdHJpZ2dlck1hcmdpbjtcbiAgICB9XG5cbiAgICAvLyDmmYLplpPjgafjgZrjgonjgZnloLTlkIhcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gc2hvd1Bvcykge1xuICAgICAgICBsZXQgZGVsYXkgPSAoZWxtLmRhdGFzZXQuanNfZGVsYXkpPyBlbG0uZGF0YXNldC5qc19kZWxheSA6IDA7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgc2Nyb2xsQW5pbUVsbVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICB9LmJpbmQobnVsbCwgaSksIGRlbGF5KTtcbiAgICB9XG4gICAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbiIsImxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuanMtc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNwZWVkOiAzMDAsXG5cbiAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgIGludmVydDogZmFsc2UsXG4gICAgfSxcblxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlXG4gICAgfSxcblxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfVxufSk7IiwiLy9UZXh0IEFuaW1hdGlvblxuY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXJvdGF0ZScpO1xuXG5mdW5jdGlvbiB0ZXh0RWZmZWN0KGFuaW1hdGlvbk5hbWUpIHtcblx0bGV0IHRleHQgPSBwYXJhZ3JhcGguaW5uZXJIVE1MLFxuXHRcdGNoYXJzID0gdGV4dC5sZW5ndGgsXG5cdFx0bmV3VGV4dCA9ICcnLFxuXHRcdGFuaW1hdGlvbiA9IGFuaW1hdGlvbk5hbWUsXG5cdFx0Y2hhcixcblx0XHRpO1xuXG5cdGZvciAoaSA9IDA7IGkgPCBjaGFyczsgaSArPSAxKSB7XG5cdFx0bmV3VGV4dCArPSAnPGk+JyArIHRleHQuY2hhckF0KGkpICsgJzwvaT4nO1xuXHR9XG5cblx0cGFyYWdyYXBoLmlubmVySFRNTCA9IG5ld1RleHQ7XG5cblx0bGV0IHdyYXBwZWRDaGFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJyksXG5cdFx0d3JhcHBlZENoYXJzTGVuID0gd3JhcHBlZENoYXJzLmxlbmd0aCxcblx0XHRqID0gMDtcblxuXHRmdW5jdGlvbiBhZGRFZmZlY3QoKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHR3cmFwcGVkQ2hhcnNbal0uY2xhc3NOYW1lID0gYW5pbWF0aW9uO1xuXHRcdFx0aiArPSAxO1xuXHRcdFx0aWYgKGogPCB3cmFwcGVkQ2hhcnNMZW4pIHtcblx0XHRcdFx0YWRkRWZmZWN0KCk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwKVxuXHR9XG5cblx0YWRkRWZmZWN0KCk7XG59O1xuXG50ZXh0RWZmZWN0KCdmbHktaW4tb3V0Jyk7IiwiLy8g6YqA5rKz6YmE6YGT44KS5Zu65a6a44GZ44KLXG5sZXQgdHJhaW5fcG9zID0galF1ZXJ5KFwiLmpzLXRyYWluXCIpLm9mZnNldCgpLnRvcDtcbmxldCB0cmFpbl9oZWlnaHQgPSBqUXVlcnkoXCIuanMtdHJhaW5cIikub3V0ZXJIZWlnaHQoKTtcblxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gdHJhaW5fcG9zIC0gNDApIHtcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmNzcyhcInBhZGRpbmctdG9wXCIsIHRyYWluX2hlaWdodCk7XG4gICAgICAgICAgICAkKFwiLmpzLXRyYWluXCIpLmFkZENsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiYm9keVwiKS5jc3MoXCJwYWRkaW5nLXRvcFwiLCAwKTtcbiAgICAgICAgICAgICQoXCIuanMtdHJhaW5cIikucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiLy8gSFRNTOOBrjxjYW52YXM+44K/44Kw44GrSmF2YVNjcmlwdOOCkuS9v+OBhOazou+8iOWhl+OCiu+8ieOCkuaPj+eUu+OBmeOCi1xuXG5sZXQgdW5pdCA9IDEwMCxcbiAgICBjYW52YXNMaXN0LCAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7phY3liJdcbiAgICBpbmZvID0ge30sIC8vIOWFqOOCreODo+ODs+ODkOOCueWFsemAmuOBruaPj+eUu+aDheWgsVxuICAgIGNvbG9yTGlzdDsgLy8g5ZCE44Kt44Oj44Oz44OQ44K544Gu6Imy5oOF5aCxXG5cbi8qKlxuICogSW5pdCBmdW5jdGlvbi5cbiAqIFxuICogSW5pdGlhbGl6ZSB2YXJpYWJsZXMgYW5kIGJlZ2luIHRoZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5mby5zZWNvbmRzID0gMDtcbiAgICBpbmZvLnQgPSAwO1xuICAgIGNhbnZhc0xpc3QgPSBbXTtcbiAgICBjb2xvckxpc3QgPSBbXTtcbiAgICAvLyBjYW52YXMx5YCL44KB44Gu6Imy5oyH5a6aXG4gICAgY2FudmFzTGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F2ZUNhbnZhc1wiKSk7XG4gICAgY29sb3JMaXN0LnB1c2goWycjZmZiZWY2JywgJyNmZmY1YmUnLCAnI2I2ZjdmZiddKTsvL+W3puOBjOS4gOeVquS4i+KGkuS4iuOBruazoumghlxuICAgIC8vIOWQhOOCreODo+ODs+ODkOOCueOBruWIneacn+WMllxuICAgIGZvcih2YXIgY2FudmFzSW5kZXggaW4gY2FudmFzTGlzdCkge1xuICAgICAgICB2YXIgY2FudmFzID0gY2FudmFzTGlzdFtjYW52YXNJbmRleF07XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDsgLy9DYW52YXPjga53aWR0aOOCkuOCpuOCo+ODs+ODieOCpuOBruW5heOBq+WQiOOCj+OBm+OCi1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNDUwOy8v5rOi44Gu6auY44GVXG4gICAgICAgIGNhbnZhcy5jb250ZXh0Q2FjaGUgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbiAgICAvLyDlhbHpgJrjga7mm7TmlrDlh6bnkIblkbzjgbPlh7rjgZdcbiAgICB1cGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZvcihsZXQgY2FudmFzSW5kZXggaW4gY2FudmFzTGlzdCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2FudmFzTGlzdFtjYW52YXNJbmRleF07XG4gICAgICAgIC8vIOWQhOOCreODo+ODs+ODkOOCueOBruaPj+eUu1xuICAgICAgICBkcmF3KGNhbnZhcywgY29sb3JMaXN0W2NhbnZhc0luZGV4XSk7XG4gICAgfVxuICAgIC8vIOWFsemAmuOBruaPj+eUu+aDheWgseOBruabtOaWsFxuICAgIGluZm8uc2Vjb25kcyA9IGluZm8uc2Vjb25kcyArIC4wMTQ7XG4gICAgaW5mby50ID0gaW5mby5zZWNvbmRzKk1hdGguUEk7XG4gICAgLy8g6Ieq6Lqr44Gu5YaN6LW35ZG844Gz5Ye644GXXG4gICAgc2V0VGltZW91dCh1cGRhdGUsIDM1KTtcbn1cblxuLyoqXG4gKiBEcmF3IGFuaW1hdGlvbiBmdW5jdGlvbi5cbiAqIFxuICogVGhpcyBmdW5jdGlvbiBkcmF3cyBvbmUgZnJhbWUgb2YgdGhlIGFuaW1hdGlvbiwgd2FpdHMgMjBtcywgYW5kIHRoZW4gY2FsbHNcbiAqIGl0c2VsZiBhZ2Fpbi5cbiAqL1xuZnVuY3Rpb24gZHJhdyhjYW52YXMsIGNvbG9yKSB7XG4gICAgLy8g5a++6LGh44GuY2FudmFz44Gu44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6XXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuY29udGV4dENhY2hlO1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruaPj+eUu+OCkuOCr+ODquOColxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvL+azouOBrumHjeOBquOCiuOCkuaPj+eUuyBkcmF3V2F2ZShjYW52YXMsIGNvbG9yW+aVsOWtl++8iOazouOBruaVsOOCkjDjgYvjgonmlbDjgYjjgabmjIflrprvvIldLCDpgI/pgY4sIOazouOBruW5heOBrnpvb20s5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMIClcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzBdLCAxLCAzLCAwKTsvLzAuNeKHkumAj+mBjuWFt+WQiDUwJeOAgTPih5LmlbDlrZfjgYzlpKfjgY3jgYTjgbvjganms6LjgYzjgarjgaDjgonjgYtcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzFdLCAxLCAyLCAyNTApO1xuICAgIGRyYXdXYXZlKGNhbnZhcywgY29sb3JbMl0sIDEsIDIuNSwgMTAwKTtcbn1cblxuLyoqXG4qIOazouOCkuaPj+eUu1xuKiBkcmF3V2F2ZSjoibIsIOS4jemAj+aYjuW6piwg5rOi44Gu5bmF44Guem9vbSwg5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMKVxuKi9cbmZ1bmN0aW9uIGRyYXdXYXZlKGNhbnZhcywgY29sb3IsIGFscGhhLCB6b29tLCBkZWxheSkge1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmNvbnRleHRDYWNoZTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yOy8v5aGX44KK44Gu6ImyXG4gICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7IC8v44OR44K544Gu6ZaL5aeLXG4gICAgZHJhd1NpbmUoY2FudmFzLCBpbmZvLnQgLyAwLjUsIHpvb20sIGRlbGF5KTtcbiAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKyAxMCwgY2FudmFzLmhlaWdodCk7IC8v44OR44K544KSQ2FudmFz44Gu5Y+z5LiL44G4XG4gICAgY29udGV4dC5saW5lVG8oMCwgY2FudmFzLmhlaWdodCk7IC8v44OR44K544KSQ2FudmFz44Gu5bem5LiL44G4XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKSAvL+ODkeOCueOCkumWieOBmOOCi1xuICAgIGNvbnRleHQuZmlsbCgpOyAvL+azouOCkuWhl+OCiuOBpOOBtuOBmVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGRyYXcgc2luZVxuICogXG4gKiBUaGUgc2luZSBjdXJ2ZSBpcyBkcmF3biBpbiAxMHB4IHNlZ21lbnRzIHN0YXJ0aW5nIGF0IHRoZSBvcmlnaW4uIFxuICogZHJhd1NpbmUo5pmC6ZaTLCDms6Ljga7luYXjga56b29tLCDms6Ljga7plovlp4vkvY3nva7jga7pgYXjgowpXG4gKi9cbmZ1bmN0aW9uIGRyYXdTaW5lKGNhbnZhcywgdCwgem9vbSwgZGVsYXkpIHtcbiAgICBsZXQgeEF4aXMgPSBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQvMik7XG4gICAgbGV0IHlBeGlzID0gMDtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0Q2FjaGU7XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHggYW5kIHksIHN0YXJ0aW5nIGF0IDAsMCBhbmQgdHJhbnNsYXRpbmcgdG8gdGhlIG9yaWdpbiBvblxuICAgIC8vIHRoZSBjYW52YXMuXG4gICAgbGV0IHggPSB0OyAvL+aZgumWk+OCkuaoquOBruS9jee9ruOBqOOBmeOCi1xuICAgIGxldCB5ID0gTWF0aC5zaW4oeCkvem9vbTtcbiAgICBjb250ZXh0Lm1vdmVUbyh5QXhpcywgdW5pdCp5K3hBeGlzKTsgLy/jgrnjgr/jg7zjg4jkvY3nva7jgavjg5HjgrnjgpLnva7jgY9cblxuICAgIC8vIExvb3AgdG8gZHJhdyBzZWdtZW50cyAo5qiq5bmF44Gu5YiG44CB5rOi44KS5o+P55S7KVxuICAgIGZvciAoaSA9IHlBeGlzOyBpIDw9IGNhbnZhcy53aWR0aCArIDEwOyBpICs9IDEwKSB7XG4gICAgICAgIHggPSB0KygteUF4aXMraSkvdW5pdC96b29tO1xuICAgICAgICB5ID0gTWF0aC5zaW4oeCAtIGRlbGF5KS8zO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhpLCB1bml0KnkreEF4aXMpO1xuICAgIH1cbn1cblxuaW5pdCgpO1xuIiwiY29uc3QgZHVyYXRpb24gPSAxMDAwO1xubGV0IHN0YXJ0VGltZTsvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7plovlp4vmmYLplpPjgpLmoLzntI3jgZnjgovlpInmlbBcbmxldCBzdGFydFNjcm9sbFk7Ly8g44Ki44OL44Oh44O844K344On44Oz44Gu6ZaL5aeL5pmC44Gu44K544Kv44Ot44O844Or5L2N572u44KS5qC857SN44GZ44KL5aSJ5pWwXG5sZXQgdGFyZ2V0U2Nyb2xsWTsvLyDjgr/jg7zjgrLjg4Pjg4jjga7jgrnjgq/jg63jg7zjg6vkvY3nva7jgpLmoLzntI3jgZnjgovlpInmlbBcblxuLyoqXG4gKiDjgqTjg7zjgrjjg7PjgrDplqLmlbBcbiAqIEBwYXJhbSB4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5jb25zdCBlYXNlT3V0Q3ViaWMgPSAoeCkgPT4ge1xuICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB4LCAzKTtcbn07XG5cbi8qKlxuICog44Ki44OL44Oh44O844K344On44Oz44Gu5ZCE44OV44Os44O844Og44Gn44Gu5Yem55CGXG4gKi9cbmNvbnN0IHNjcm9sbEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbik7Ly8g54++5Zyo5pmC6ZaT44Gu57aZ57aa5pmC6ZaT44Gr5a++44GZ44KL6YCy5o2X5bqm44KS566X5Ye6XG4gIGNvbnN0IHNjcm9sbFkgPVxuICAgIHN0YXJ0U2Nyb2xsWSArXG4gICAgKHRhcmdldFNjcm9sbFkgLSBzdGFydFNjcm9sbFkpICogZWFzZU91dEN1YmljKHByb2dyZXNzKTtcbiAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkpO1xuXG4gIGlmIChwcm9ncmVzcyA8IDEpIHsvLyDpgLLmjZfluqbjgYwx5pyq5rqA77yIPTEwMCXjgafjga/jgarjgYTvvInloLTlkIjjgIHoh6rliIboh6rouqvjgpLlkbzjgbPlh7rjgZfjgIHnubDjgorov5TjgZlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsQW5pbWF0aW9uKTtcbiAgfVxufTtcblxuLy8g44OI44OD44OX44G45oi744KL6KaB57Sg44KS44Kv44Oq44OD44Kv44GX44Gf44KJ44K544Kv44Ot44O844Or44Ki44OL44Oh44O844K344On44Oz5a6f6KGMXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXj0nIyddXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhcmdldElkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIik7Ly8g44K/44O844Ky44OD44OI44Gu6KaB57Sg44KS5Y+W5b6XXG4gICAgaWYgKHRhcmdldElkID09PSBcIiNcIikge1xuICAgICAgdGFyZ2V0U2Nyb2xsWSA9IDA7Ly8gaHJlZj1cIiNcIuOBruWgtOWQiOOBr+ODmuODvOOCuOODiOODg+ODl+OBquOBruOBpzBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0SWQpOy8vIOOCv+ODvOOCsuODg+ODiOOBruimgee0oFxuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDsvLyDjg5rjg7zjgrjlhajkvZPjga7pq5jjgZVcblxuICAgICAgaWYgKHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wICsgd2luZG93LmlubmVySGVpZ2h0ID4gZG9jdW1lbnRIZWlnaHQpIHsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZ5Y+W5b6XXG4gICAgICAgIHRhcmdldFNjcm9sbFkgPSBkb2N1bWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZK+OCpuOCo+ODs+ODieOCpumrmOOBleOBjOODmuODvOOCuOWFqOS9k+OBrumrmOOBleOCkui2heOBiOOBn+OBqOOBje+8iO+8neOBneOBk+OBvuOBp+OCueOCr+ODreODvOODq+OBp+OBjeOBquOBhO+8ieOBr+OAgeODmuODvOOCuOS4gOeVquOBl+OBn+OBvuOBp+OBruS9jee9ruOCkuWPluW+l1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0U2Nyb2xsWSA9IHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wOy8vIOOCv+ODvOOCsuODg+ODiOOBrlnluqfmqJlcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTsvLyBEYXRlLm5vdygp44Gn6ZaL5aeL5pmC6ZaT44KS44K744OD44OIXG4gICAgc3RhcnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7Ly8g54++5Zyo44Gu44K544Kv44Ot44O844Or5L2N572u44KS44K744OD44OIXG4gICAgc2Nyb2xsQW5pbWF0aW9uKCk7XG4gIH0pO1xufSk7IiwiXG53aW5kb3cuX3VhYyA9IHt9OyAvLyBkZWZpbmUgX3VhYyBhcyBhIGdsb2JhbCBvYmplY3RcbnZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgdmVyID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG5cbi8vIGNoZWNrIGJyb3dzZXIgdmVyc2lvblxuX3VhYy5icm93c2VyID0gKGZ1bmN0aW9uKCl7XG4gIGlmICh1YS5pbmRleE9mKCdlZGdlJykgIT09IC0xKSByZXR1cm4gJ2VkZ2UnOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVkZ2VcbiAgZWxzZSBpZiAodWEuaW5kZXhPZihcImllbW9iaWxlXCIpICE9PSAtMSkgICAgICByZXR1cm4gJ2llbW9iaWxlJzsgICAgICAgICAvLyBpZU1vYmlsZVxuICBlbHNlIGlmICh1YS5pbmRleE9mKCd0cmlkZW50LzcnKSAhPT0gLTEpICAgICByZXR1cm4gJ2llMTEnOyAgICAgICAgICAgICAvLyBpZTExXG4gIGVsc2UgaWYgKHVhLmluZGV4T2YoXCJtc2llXCIpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdvcGVyYScpID09PSAtMSl7XG4gICAgaWYgICAgICAodmVyLmluZGV4T2YoXCJtc2llIDYuXCIpICAhPT0gLTEpIHJldHVybiAnaWU2JzsgICAgICAgICAgICAgIC8vIGllNlxuICAgIGVsc2UgaWYgKHZlci5pbmRleE9mKFwibXNpZSA3LlwiKSAgIT09IC0xKSByZXR1cm4gJ2llNyc7ICAgICAgICAgICAgICAvLyBpZTdcbiAgICBlbHNlIGlmICh2ZXIuaW5kZXhPZihcIm1zaWUgOC5cIikgICE9PSAtMSkgcmV0dXJuICdpZTgnOyAgICAgICAgICAgICAgLy8gaWU4XG4gICAgZWxzZSBpZiAodmVyLmluZGV4T2YoXCJtc2llIDkuXCIpICAhPT0gLTEpIHJldHVybiAnaWU5JzsgICAgICAgICAgICAgIC8vIGllOVxuICAgIGVsc2UgaWYgKHZlci5pbmRleE9mKFwibXNpZSAxMC5cIikgIT09IC0xKSByZXR1cm4gJ2llMTAnOyAgICAgICAgICAgICAvLyBpZTEwXG4gIH1cbiAgZWxzZSBpZiAodWEuaW5kZXhPZignY2hyb21lJykgICE9PSAtMSAmJiB1YS5pbmRleE9mKCdlZGdlJykgPT09IC0xKSAgIHJldHVybiAnY2hyb21lJzsgICAgLy8gQ2hyb21lXG4gIGVsc2UgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpICAhPT0gLTEgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPT09IC0xKSByZXR1cm4gJ3NhZmFyaSc7ICAgIC8vIFNhZmFyaVxuICBlbHNlIGlmICh1YS5pbmRleE9mKCdvcGVyYScpICAgIT09IC0xKSByZXR1cm4gJ29wZXJhJzsgICAgICAgICAgICAgICAgICAvLyBPcGVyYVxuICBlbHNlIGlmICh1YS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xKSByZXR1cm4gJ2ZpcmVmb3gnOyAgICAgICAgICAgICAgICAvLyBGSXJlZm94XG4gIGVsc2UgcmV0dXJuICd1bmtub3duX2Jyb3dzZXInO1xufSkoKTtcblxuLy8gY2hlY2sgZGV2aWNlXG5fdWFjLmRldmljZSA9IChmdW5jdGlvbigpe1xuICBpZih1YS5pbmRleE9mKCdpcGhvbmUnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignaXBvZCcpICE9PSAtMSApIHJldHVybiAnaXBob25lJztcbiAgZWxzZSBpZiAodWEuaW5kZXhPZignaXBhZCcpICAgICE9PSAtMSkgcmV0dXJuICdpcGFkJztcbiAgZWxzZSBpZiAodWEuaW5kZXhPZignYW5kcm9pZCcpICE9PSAtMSkgcmV0dXJuICdhbmRyb2lkJztcbiAgZWxzZSBpZiAodWEuaW5kZXhPZignd2luZG93cycpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdwaG9uZScpICE9PSAtMSkgcmV0dXJuICd3aW5kb3dzX3Bob25lJztcbiAgZWxzZSByZXR1cm4gJyc7XG59KSgpO1xuXG4vLyBjaGVjayBpb3MgdmVyc2lvblxuX3VhYy5pb3NWZXIgPSAoZnVuY3Rpb24oKXtcbiAgaWYgKCAvaVAoaG9uZXxvZHxhZCkvLnRlc3QoIG5hdmlnYXRvci5wbGF0Zm9ybSApICkge1xuICAgIHZhciB2ID0gKG5hdmlnYXRvci5hcHBWZXJzaW9uKS5tYXRjaCgvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8pO1xuICAgIHZhciB2ZXJzaW9ucyA9IFtwYXJzZUludCh2WzFdLCAxMCksIHBhcnNlSW50KHZbMl0sIDEwKSwgcGFyc2VJbnQodlszXSB8fCAwLCAxMCldO1xuICAgIHJldHVybiB2ZXJzaW9uc1swXTtcbiAgfVxuICBlbHNlIHJldHVybiAwO1xufSkoKTtcbl91YWMuaXNJRSA9IChfdWFjLmJyb3dzZXIuc3Vic3RyKDAsIDIpID09PSAnaWUnICYmIF91YWMuYnJvd3NlciAhPT0gJ2llbW9iaWxlJyk7XG5fdWFjLmlzaU9TID0gKF91YWMuZGV2aWNlID09PSAnaXBob25lJyB8fCBfdWFjLmRldmljZSA9PT0gJ2lwYWQnKTtcbl91YWMuaXNNb2JpbGUgPSAodWEuaW5kZXhPZignbW9iaScpICE9PSAtMSB8fCBfdWFjLmRldmljZSA9PT0gJ2lwaG9uZScgfHwgKF91YWMuZGV2aWNlID09PSAnd2luZG93c19waG9uZScgJiYgdWEuaW5kZXhPZignd3BkZXNrdG9wJykgPT09IC0xKSB8fCBfdWFjLmRldmljZSA9PT0gJ2llbW9iaWxlJyk7XG5fdWFjLmlzVGFibGV0ID0gKF91YWMuZGV2aWNlID09PSAnaXBhZCcgfHwgKF91YWMuZGV2aWNlID09PSAnYW5kcm9pZCcgJiYgIV91YWMuaXNNb2JpbGUpKTtcbl91YWMuaXNUb3VjaCAgPSAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KTtcbl91YWMuaXNNb2Rlcm4gPSAhKF91YWMuYnJvd3NlciA9PT0gJ2llNicgfHwgX3VhYy5icm93c2VyID09PSAnaWU3JyB8fCBfdWFjLmJyb3dzZXIgPT09ICdpZTgnIHx8IF91YWMuYnJvd3NlciA9PT0gJ2llOScgfHwgKDAgPCBfdWFjLmlvc1ZlciAmJiBfdWFjLmlvc1ZlciA8IDgpKTtcblxuLy8gU2V0IHRoZSByZXN1bHRzIGFzIGNsYXNzIG5hbWVzIG9mIHRoZSBodG1sXG52YXIgaG9tZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjbGFzc1N0ciA9ICcgJztcbiAgY2xhc3NTdHIgKz0gKF91YWMuYnJvd3NlciAhPT0gJycpID8gX3VhYy5icm93c2VyICsgXCIgXCIgOiAnYnJvd3Nlci11bmtub3duICcsXG4gICAgY2xhc3NTdHIgKz0gKF91YWMuZGV2aWNlICAhPT0gJycpID8gX3VhYy5kZXZpY2UgKyBcIiBcIiAgOiAnZGV2aWNlLXVua25vd24gJyxcbiAgICBjbGFzc1N0ciArPSAoX3VhYy5pc01vYmlsZSkgPyAnbW9iaWxlICcgOiAnZGVza3RvcCAnLFxuICAgIGNsYXNzU3RyICs9IChfdWFjLmlzVG91Y2gpID8gJ3RvdWNoICcgIDogJ21vdXNlICcsXG4gICAgY2xhc3NTdHIgKz0gKF91YWMuaXNpT1MpID8gJ2lvcyAnIDogJycsXG4gICAgY2xhc3NTdHIgKz0gKF91YWMuaXNJRSkgPyAnaWUgJyA6ICcnLFxuICAgIGNsYXNzU3RyICs9IChfdWFjLmlzTW9kZXJuKSA/ICdtb2Rlcm4gJyA6ICdvbGQgJztcbiAgcmV0dXJuIGNsYXNzU3RyO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9IGhvbWVDbGFzcygpO1xufSk7XG4iLCIvKipcbiAqIEBtb2R1bGVzIDogbm9kZV9tb2R1bGVz44OV44Kp44Or44OA44G+44Gn44Gu57W25a++44OR44K544Gu44Ko44Kk44Oq44Ki44K5XG4gKiB3ZWJwYWNrLmNvbmZpZy5qc+OBq+OBpuWumue+qeOBl+OBpuOBhOOCi1xuICovXG5cbi8vU1ZH44K544OX44Op44Kk44OI44KSSUXjgafkvb/nlKjjgZnjgovjgZ/jgoHjga7jg6njgqTjg5bjg6njg6pcbi8vIGltcG9ydCAnQG1vZHVsZXMvc3ZneHVzZSc7XG5cbi8v44OW44Op44Km44K25Yik5a6a44Gu44Gf44KB44Op44Kk44OW44Op44OqXG5pbXBvcnQgJy4vbGliL2JfYnJvd3Nlcl9zd2l0Y2hlci5qcyc7XG5cbmltcG9ydCAnLi9jb21tb24vbXlCdWJibHlCdXR0b24uanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUhlYWRlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215SG92ZXInO1xuaW1wb3J0ICcuL2NvbW1vbi9teUxvYWRpbmcuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teU1pbGt5d2F5JztcbmltcG9ydCAnLi9jb21tb24vbXlTaG93LmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlTd2lwZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVRleHRSb3RhdGUuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVRyYWluLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlXYXZlLmpzJztcbmltcG9ydCAnLi9jb21tb24vYnViYmxlLmpzJztcbmltcG9ydCAnLi9jb21tb24vc21vb3RoLXNjcm9sbCc7XG5cblxuLy8gaW1wb3J0ICcuL2NvbW1vbiciXSwic291cmNlUm9vdCI6IiJ9
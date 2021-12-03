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

/***/ "../_assets/js/common/data-splitting.js":
/*!**********************************************!*\
  !*** ../_assets/js/common/data-splitting.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Splitting({
  whitespace: true
});

/***/ }),

/***/ "../_assets/js/common/myBubblyButton.js":
/*!**********************************************!*\
  !*** ../_assets/js/common/myBubblyButton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var animateButton = function animateButton(e) {
  var myClasslist = e.target.classList;
  e.preventDefault;
  myClasslist.remove('animate');
  myClasslist.add('animate');
};

var animateRemove = function animateRemove(e) {
  var myClasslist = e.target.classList;
  e.preventDefault;
  myClasslist.remove('animate');
};

var bubblyButtons = document.getElementsByClassName("js-bubbly");
var myLength = bubblyButtons.length;

for (var i = 0; i < myLength; i++) {
  bubblyButtons[i].addEventListener('mouseover', animateButton, false);
  bubblyButtons[i].addEventListener('mouseout', animateRemove, false);
} // const animateButton = function (e) {
//     const myClasslist = e.target.classList;
//     e.preventDefault;
//     myClasslist.remove('animate');
//     myClasslist.add('animate');
//     setTimeout(function () {
//         myClasslist.remove('animate');
//     }, 700);
// };

/***/ }),

/***/ "../_assets/js/common/myFallingBox.js":
/*!********************************************!*\
  !*** ../_assets/js/common/myFallingBox.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var count = 7;
var parent = document.getElementById('js-sector');
var fragment = document.createDocumentFragment(); //fragment作成

for (i = 0; i < count; i++) {
  var sector = document.createElement('div');
  sector.className = "sector";
  fragment.appendChild(sector);
  var rotateBack = document.createElement('div');
  rotateBack.className = "rotate";
  sector.appendChild(rotateBack);
  var fallingLayer = document.createElement('div');
  fallingLayer.className = "falling";
  rotateBack.appendChild(fallingLayer);
  var lineHitbox = document.createElement('div');
  lineHitbox.className = "line-box";
  fallingLayer.appendChild(lineHitbox);
  var line = document.createElement('div');
  line.className = "line-box__line c-ball";
  lineHitbox.appendChild(line);
}

parent.appendChild(fragment);

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

var myHeader = document.getElementById("js-header");
var headerClass = myHeader.classList;
var headerFadePosition = 50; //スクロールしてページトップから〇〇に達したとき

var headerFade = function headerFade() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= headerFadePosition) {
    headerClass.add('is-fade');
  } else {
    headerClass.remove('is-fade');
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
    headerClass.remove("UpMove", 'p-header--top', "is-fade"); // クラス名除去

    headerClass.add('DownMove', 'p-header--back'); // クラス名追加
  } else {
    if (headerClass.contains("DownMove")) {
      //すでにクラス名がついていたら
      headerClass.remove('DownMove', 'p-header--back'); // クラス名除去

      headerClass.add('UpMove', 'p-header--top'); // クラス名追加
    }
  }
}; // **
// ハンバーガーボタン：クリックイベント
// **


var hamburger = document.getElementById('js-hamburger');
var hamburgerClass = hamburger.classList;
var myBody = document.body;
var myBodyClass = myBody.classList;
hamburger.addEventListener('click', function () {
  var myPosition = window.pageYOffset || document.documentElement.scrollTop; //is-closeがあったら

  if (hamburgerClass.contains("is-close")) {
    //is-closeを外す
    hamburgerClass.remove('is-close');
    myBodyClass.remove('is-close'); //is-openをつける

    hamburgerClass.add('is-open');
    myBodyClass.add('is-open');
    myBody.style.position = "fixed";
    myBody.style.top = "-".concat(myPosition, "px");
  } else {
    //is-openがあったら
    if (hamburgerClass.contains("is-open")) {
      // スクロール位置の記憶
      var scrollY = myBody.style.top; // is-openを外す

      hamburgerClass.remove('is-open');
      myBodyClass.remove('is-open'); // is-closeをつける

      hamburgerClass.add('is-close');
      myBodyClass.add('is-close'); // bodyのfixedを外す

      bodyFixedNone(); // スクロール位置の保持

      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
}); // **
// is-openを消す
// **
// ハンバーガーメニューのリストをクリックしたとき

var navList = document.querySelectorAll(".js-marker");
navList.forEach(function (elm) {
  elm.addEventListener('click', function () {
    hamburgerClass.remove('is-open');
    myBodyClass.remove('is-open');
    hamburgerClass.add('is-close');
    myBodyClass.add('is-close'); //bodyのfixedを外す

    bodyFixedNone();
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
      $("body").addClass("is-close"); //bodyのfixedを外す

      bodyFixedNone();
    } else {}
  });
}); // **
// 関数：bodyのfixedを外す
// **

var bodyFixedNone = function bodyFixedNone() {
  myBody.style.position = "";
  myBody.style.top = "";
  myBody.style.paddingTop = "";
}; // ハンバーガーメニューの切り替え設定
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
} // mouseoverしたらmoveIndecator呼び出し


var list = document.querySelectorAll('.js-marker');
list.forEach(function (link) {
  link.addEventListener('mousemove', function (e) {
    marker.style.opacity = 1;
    moveIndicator(e.target);
  });
});
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

/***/ "../_assets/js/common/myInvalidHover.js":
/*!**********************************************!*\
  !*** ../_assets/js/common/myInvalidHover.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// スクロール時にホバーを無効にする
var myBody = document.body,
    timer;
window.addEventListener('scroll', function () {
  clearTimeout(timer);

  if (!myBody.classList.contains('disable-hover')) {
    myBody.classList.add('disable-hover');
  }

  timer = setTimeout(function () {
    myBody.classList.remove('disable-hover');
  }, 500);
}, false); // CSSに次のコードを追加する
// .disable-hover {
//   pointer-events: none;
// }

/***/ }),

/***/ "../_assets/js/common/myScrollShow.js":
/*!********************************************!*\
  !*** ../_assets/js/common/myScrollShow.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// data属性
// data-sa_margin：表示タイミングを位置でずらす
// data-sa_trigger：表示タイミングの基準要素を指定
// data-sa_delay：表示タイミングを時間でずらす
var AnimClass = 'js-scroll-show';
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
    } // triggerがある場合


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
  //スライドの間の距離
  effect: 'fade',
  loop: true,
  //最後に達したら先頭に戻る
  speed: 300,
  draggable: false,
  mousewheel: {
    forceToAxis: false
  },
  pagination: {
    el: '.swiper-pagination',
    //ページネーションの要素
    clickable: true,
    //クリックに反応させる
    dynamicBullets: false //ページネーションに強弱がつく

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "../_assets/js/common/myTrain.js":
/*!***************************************!*\
  !*** ../_assets/js/common/myTrain.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 銀河鉄道を固定する
var myTrain = jQuery(".js-train");
var train_pos = myTrain.offset().top;
var train_height = myTrain.outerHeight();
jQuery(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > train_pos + 22) {
      myTrain.addClass("fixed");
    } else {
      myTrain.removeClass("fixed");
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
  element.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = e.target.getAttribute("href"); // ターゲットの要素を取得

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

/***/ "../_assets/js/main.js":
/*!*****************************!*\
  !*** ../_assets/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/myTrain.js */ "../_assets/js/common/myTrain.js");
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_myTrain_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/myBubblyButton.js */ "../_assets/js/common/myBubblyButton.js");
/* harmony import */ var _common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/myHeader.js */ "../_assets/js/common/myHeader.js");
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_myHeader_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_myHover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/myHover */ "../_assets/js/common/myHover.js");
/* harmony import */ var _common_myHover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_myHover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_myInvalidHover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/myInvalidHover */ "../_assets/js/common/myInvalidHover.js");
/* harmony import */ var _common_myInvalidHover__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_myInvalidHover__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/smooth-scroll */ "../_assets/js/common/smooth-scroll.js");
/* harmony import */ var _common_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/myScrollShow.js */ "../_assets/js/common/myScrollShow.js");
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_data_splitting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/data-splitting */ "../_assets/js/common/data-splitting.js");
/* harmony import */ var _common_data_splitting__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_data_splitting__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_myFallingBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/myFallingBox */ "../_assets/js/common/myFallingBox.js");
/* harmony import */ var _common_myFallingBox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_myFallingBox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/myWave.js */ "../_assets/js/common/myWave.js");
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_myWave_js__WEBPACK_IMPORTED_MODULE_10__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
// import '@modules/svgxuse'; //SVGスプライトをIEで使用するためのライブラリ
// import './lib/b_browser_switcher.js'; //ブラウザ判定のためライブラリ





 // import './common/myMilkyWay';





 // import './common/myOrbit';
// import './common/test.js';
// import './common/myTextRotate.js';
// import './common'
// import './common/myStarWay';
// import './common/myLoading.js';
// import './common/myParticleRound';
// import './common/myParticleBang';

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUJ1YmJseUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlGYWxsaW5nQm94LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlIb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlJbnZhbGlkSG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215U2Nyb2xsU2hvdy5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlTd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215VHJhaW4uanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215V2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vc21vb3RoLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGluZyIsIndoaXRlc3BhY2UiLCJhbmltYXRlQnV0dG9uIiwiZSIsIm15Q2xhc3NsaXN0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmUiLCJhZGQiLCJhbmltYXRlUmVtb3ZlIiwiYnViYmx5QnV0dG9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm15TGVuZ3RoIiwibGVuZ3RoIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb3VudCIsInBhcmVudCIsImdldEVsZW1lbnRCeUlkIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2VjdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwicm90YXRlQmFjayIsImZhbGxpbmdMYXllciIsImxpbmVIaXRib3giLCJsaW5lIiwid2luZG93IiwiaGVhZGVyRmFkZSIsImhlYWRlckJhY2tEb3duIiwibXlIZWFkZXIiLCJoZWFkZXJDbGFzcyIsImhlYWRlckZhZGVQb3NpdGlvbiIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwibXlUYXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0VG9wIiwidG9wIiwiY29udGFpbnMiLCJoYW1idXJnZXIiLCJoYW1idXJnZXJDbGFzcyIsIm15Qm9keSIsImJvZHkiLCJteUJvZHlDbGFzcyIsIm15UG9zaXRpb24iLCJzdHlsZSIsInBvc2l0aW9uIiwic2Nyb2xsWSIsImJvZHlGaXhlZE5vbmUiLCJzY3JvbGxUbyIsInBhcnNlSW50IiwibmF2TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxtIiwibW9vbk1pbmlTaXplIiwialF1ZXJ5IiwiJCIsInJlc2l6ZSIsIngiLCJ3aWR0aCIsInkiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicGFkZGluZ1RvcCIsIm1hcmtlciIsInF1ZXJ5U2VsZWN0b3IiLCJtb3ZlSW5kaWNhdG9yIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsImFjdGl2ZUxpbmsiLCJsaXN0IiwiaXRlbSIsInJlbW92ZUFjdGl2ZSIsImxpbmsiLCJvcGFjaXR5IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiQW5pbUNsYXNzIiwic2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzIiwidHJpZ2dlck1hcmdpbkRlZmF1bHQiLCJzY3JvbGxBbmltRWxtIiwic2Nyb2xsQW5pbWF0aW9uRnVuYyIsInRyaWdnZXJNYXJnaW4iLCJzaG93UG9zIiwiZGF0YXNldCIsImpzX2RhdGFtYXJnaW4iLCJqc19tYXJnaW4iLCJqc190cmlnZ2VyIiwiaW5uZXJIZWlnaHQiLCJkZWxheSIsImpzX2RlbGF5IiwiaW5kZXgiLCJiaW5kIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImVmZmVjdCIsImxvb3AiLCJzcGVlZCIsImRyYWdnYWJsZSIsIm1vdXNld2hlZWwiLCJmb3JjZVRvQXhpcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImR5bmFtaWNCdWxsZXRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm15VHJhaW4iLCJ0cmFpbl9wb3MiLCJvZmZzZXQiLCJ0cmFpbl9oZWlnaHQiLCJvdXRlckhlaWdodCIsInNjcm9sbCIsInVuaXQiLCJjYW52YXNMaXN0IiwiaW5mbyIsImNvbG9yTGlzdCIsImluaXQiLCJzZWNvbmRzIiwidCIsInB1c2giLCJjYW52YXNJbmRleCIsImNhbnZhcyIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY29udGV4dENhY2hlIiwiZ2V0Q29udGV4dCIsInVwZGF0ZSIsImRyYXciLCJNYXRoIiwiUEkiLCJjb2xvciIsImNvbnRleHQiLCJjbGVhclJlY3QiLCJkcmF3V2F2ZSIsImFscGhhIiwiem9vbSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYmVnaW5QYXRoIiwiZHJhd1NpbmUiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwieEF4aXMiLCJmbG9vciIsInlBeGlzIiwic2luIiwibW92ZVRvIiwiZHVyYXRpb24iLCJzdGFydFRpbWUiLCJzdGFydFNjcm9sbFkiLCJ0YXJnZXRTY3JvbGxZIiwiZWFzZU91dEN1YmljIiwicG93Iiwic2Nyb2xsQW5pbWF0aW9uIiwicHJvZ3Jlc3MiLCJtaW4iLCJEYXRlIiwibm93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxlbWVudCIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsImRvY3Vt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TUFBTSxDQUFDdUIsT0FBdEIsQ0FqQnVDLENBaUJUOztBQUM5QmtILG1CQUFlO0FBQ2hCLEdBbkJEO0FBb0JELENBckJELEU7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9fYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCJTcGxpdHRpbmcoe1xuICAgIHdoaXRlc3BhY2U6IHRydWVcbn0pIiwiY29uc3QgYW5pbWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgbXlDbGFzc2xpc3QgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICBteUNsYXNzbGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICBteUNsYXNzbGlzdC5hZGQoJ2FuaW1hdGUnKTtcbn07XG5cbmNvbnN0IGFuaW1hdGVSZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IG15Q2xhc3NsaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgbXlDbGFzc2xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XG59O1xuXG5cbmNvbnN0IGJ1YmJseUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtYnViYmx5XCIpO1xuY29uc3QgbXlMZW5ndGggPSBidWJibHlCdXR0b25zLmxlbmd0aDtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBteUxlbmd0aDsgaSsrKSB7XG4gICAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBhbmltYXRlQnV0dG9uLCBmYWxzZSk7XG4gICAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGFuaW1hdGVSZW1vdmUsIGZhbHNlKTtcbn1cblxuXG5cbi8vIGNvbnN0IGFuaW1hdGVCdXR0b24gPSBmdW5jdGlvbiAoZSkge1xuLy8gICAgIGNvbnN0IG15Q2xhc3NsaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdDtcblxuLy8gICAgIG15Q2xhc3NsaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuLy8gICAgIG15Q2xhc3NsaXN0LmFkZCgnYW5pbWF0ZScpO1xuXG4vLyAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIG15Q2xhc3NsaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuLy8gICAgIH0sIDcwMCk7XG4vLyB9O1xuXG5cblxuXG4iLCJjb25zdCBjb3VudCA9IDc7XG5sZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlY3RvcicpO1xubGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbmZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdG9yLmNsYXNzTmFtZSA9IFwic2VjdG9yXCI7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlY3Rvcik7XG5cbiAgbGV0IHJvdGF0ZUJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQmFjay5jbGFzc05hbWUgPSBcInJvdGF0ZVwiO1xuICBzZWN0b3IuYXBwZW5kQ2hpbGQocm90YXRlQmFjayk7XG5cbiAgbGV0IGZhbGxpbmdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWxsaW5nTGF5ZXIuY2xhc3NOYW1lID0gXCJmYWxsaW5nXCI7XG4gIHJvdGF0ZUJhY2suYXBwZW5kQ2hpbGQoZmFsbGluZ0xheWVyKTtcblxuICBsZXQgbGluZUhpdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lSGl0Ym94LmNsYXNzTmFtZSA9IFwibGluZS1ib3hcIjtcbiAgZmFsbGluZ0xheWVyLmFwcGVuZENoaWxkKGxpbmVIaXRib3gpO1xuXG4gIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gXCJsaW5lLWJveF9fbGluZSBjLWJhbGxcIjtcbiAgbGluZUhpdGJveC5hcHBlbmRDaGlsZChsaW5lKTtcbn1cblxucGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiIsIi8vIGNvbnN0IGJvZHlXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbi8vIOOCueOCr+ODreODvOODq+OBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cbi8vIOODreODvOODieOBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcbn0pO1xuXG5cbi8vICoqXG4vLyBwLWhlYWRlcjrjgrnjgq/jg63jg7zjg6vjgZfjgZ/jgonmtojjgYjjgotcbi8vICoqXG5jb25zdCBteUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaGVhZGVyXCIpO1xuY29uc3QgaGVhZGVyQ2xhc3MgPSBteUhlYWRlci5jbGFzc0xpc3Q7XG5jb25zdCBoZWFkZXJGYWRlUG9zaXRpb24gPSA1MDsvL+OCueOCr+ODreODvOODq+OBl+OBpuODmuODvOOCuOODiOODg+ODl+OBi+OCieOAh+OAh+OBq+mBlOOBl+OBn+OBqOOBjVxuXG5jb25zdCBoZWFkZXJGYWRlID0gKCkgPT4ge1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGlmIChzY3JvbGxUb3AgPj0gaGVhZGVyRmFkZVBvc2l0aW9uKSB7XG5cdFx0aGVhZGVyQ2xhc3MuYWRkKCdpcy1mYWRlJyk7XG5cdH0gZWxzZSB7XG5cdFx0aGVhZGVyQ2xhc3MucmVtb3ZlKCdpcy1mYWRlJyk7XG5cdH07XG59XG5cblxuLy8gKipcbi8vIHAtaGVhZGVyLWJhY2s644K544Kv44Ot44O844Or6YCU5Lit44Gn5Ye654++XG4vLyAqKlxuY29uc3QgaGVhZGVyQmFja0Rvd24gPSAoKSA9PiB7XG5cdGxldCBteVRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya3NcIik7XG5cdGxldCByZWN0ID0gbXlUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0bGV0IHRhcmdldFRvcCA9IHJlY3QudG9wICsgc2Nyb2xsVG9wO1xuXG5cdGlmIChzY3JvbGxUb3AgPj0gdGFyZ2V0VG9wKSB7XG5cdFx0aGVhZGVyQ2xhc3MucmVtb3ZlKFwiVXBNb3ZlXCIsICdwLWhlYWRlci0tdG9wJywgXCJpcy1mYWRlXCIpOy8vIOOCr+ODqeOCueWQjemZpOWOu1xuXHRcdGhlYWRlckNsYXNzLmFkZCgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblxuXHR9IGVsc2Uge1xuXHRcdGlmIChoZWFkZXJDbGFzcy5jb250YWlucyhcIkRvd25Nb3ZlXCIpKSB7Ly/jgZnjgafjgavjgq/jg6njgrnlkI3jgYzjgaTjgYTjgabjgYTjgZ/jgolcblx0XHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLmFkZCgnVXBNb3ZlJywgJ3AtaGVhZGVyLS10b3AnKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblx0XHR9XG5cdH1cbn1cblxuXG4vLyAqKlxuLy8g44OP44Oz44OQ44O844Ks44O844Oc44K/44Oz77ya44Kv44Oq44OD44Kv44Kk44OZ44Oz44OIXG4vLyAqKlxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWhhbWJ1cmdlcicpO1xuY29uc3QgaGFtYnVyZ2VyQ2xhc3MgPSBoYW1idXJnZXIuY2xhc3NMaXN0O1xuY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG15Qm9keUNsYXNzID0gbXlCb2R5LmNsYXNzTGlzdDtcblxuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGxldCBteVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cblx0Ly9pcy1jbG9zZeOBjOOBguOBo+OBn+OCiVxuXHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1jbG9zZVwiKSkge1xuXHRcdC8vaXMtY2xvc2XjgpLlpJbjgZlcblx0XHRoYW1idXJnZXJDbGFzcy5yZW1vdmUoJ2lzLWNsb3NlJyk7XG5cdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuXG5cdFx0Ly9pcy1vcGVu44KS44Gk44GR44KLXG5cdFx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1vcGVuJyk7XG5cdFx0bXlCb2R5Q2xhc3MuYWRkKCdpcy1vcGVuJyk7XG5cdFx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuXHRcdG15Qm9keS5zdHlsZS50b3AgPSBgLSR7bXlQb3NpdGlvbn1weGA7XG5cdH0gZWxzZSB7XG5cdFx0Ly9pcy1vcGVu44GM44GC44Gj44Gf44KJXG5cdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkge1xuXHRcdFx0Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu6KiY5oa2XG5cdFx0XHRjb25zdCBzY3JvbGxZID0gbXlCb2R5LnN0eWxlLnRvcDtcblxuXHRcdFx0Ly8gaXMtb3BlbuOCkuWkluOBmVxuXHRcdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0XHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLW9wZW4nKTtcblxuXHRcdFx0Ly8gaXMtY2xvc2XjgpLjgaTjgZHjgotcblx0XHRcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcblx0XHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcblxuXHRcdFx0Ly8gYm9keeOBrmZpeGVk44KS5aSW44GZXG5cdFx0XHRib2R5Rml4ZWROb25lKCk7XG5cblx0XHRcdC8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruS/neaMgVxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHNjcm9sbFkgfHwgJzAnKSAqIC0xKTtcblx0XHR9XG5cdH1cbn0pO1xuXG5cbi8vICoqXG4vLyBpcy1vcGVu44KS5raI44GZXG4vLyAqKlxuLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44Oq44K544OI44KS44Kv44Oq44OD44Kv44GX44Gf44Go44GNXG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1tYXJrZXJcIik7XG5uYXZMaXN0LmZvckVhY2goKGVsbSkgPT4ge1xuXHRlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1jbG9zZScpO1xuXHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcblxuXHRcdC8vYm9keeOBrmZpeGVk44KS5aSW44GZXG5cdFx0Ym9keUZpeGVkTm9uZSgpO1xuXHR9KTtcbn0pO1xuXG5cbi8vIOOCpuOCo+ODs+ODieOCpuW5heOBjOWIh+OCiuabv+OCj+OBo+OBn+OBqOOBjVxuY29uc3QgbW9vbk1pbmlTaXplID0gNTcwO1xualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuXHRcdGxldCB4ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdFx0bGV0IHkgPSBtb29uTWluaVNpemU7XG5cdFx0aWYgKHggPj0geSkge1xuXHRcdFx0JChcIiNqcy1oYW1idXJnZXJcIikucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuXHRcdFx0JChcIiNqcy1oYW1idXJnZXJcIikuYWRkQ2xhc3MoXCJpcy1jbG9zZVwiKTtcblx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiaXMtY2xvc2VcIik7XG5cblx0XHRcdC8vYm9keeOBrmZpeGVk44KS5aSW44GZXG5cdFx0XHRib2R5Rml4ZWROb25lKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdH1cblx0fSk7XG59KVxuXG5cbi8vICoqXG4vLyDplqLmlbDvvJpib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vICoqXG5jb25zdCBib2R5Rml4ZWROb25lID0gKCkgPT4ge1xuXHRteUJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuXHRteUJvZHkuc3R5bGUudG9wID0gXCJcIjtcblx0bXlCb2R5LnN0eWxlLnBhZGRpbmdUb3AgPSBcIlwiO1xufTtcblxuXG5cblxuXG5cblxuXG5cbi8vIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruWIh+OCiuabv+OBiOioreWumlxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbi8vIFx0Y29uc3Qgc3BXaW5kb3dTaXplID0gNTcwOyAvL+WIh+OCiuabv+OBiOaZguOBrueUu+mdouW5hVxuLy8gXHRjb25zdCB0YXJnZXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWdtZW51Jyk7XG4vLyBcdGNvbnN0IHRhcmdldDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbmF2Jyk7XG4vLyBcdGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYnRuLWhvbWUnKTtcbi8vIFx0Y29uc3QgYnRuV29ya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYnRuLXdvcmtzJyk7XG4vLyBcdGNvbnN0IGJ0blByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYnRuLXByb2ZpbGUnKTtcbi8vIFx0Y29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1idG4tY29udGFjdCcpO1xuXG5cbi8vIFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IHNwV2luZG93U2l6ZSkgey8v55S76Z2i5bmF44GM5Lul5LiL44Gu5aC05ZCIXG4vLyBcdFx0dGFyZ2V0MS5jbGFzc0xpc3QucmVtb3ZlKFwicC1nbWVudVwiKTtcbi8vIFx0XHR0YXJnZXQyLmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdlwiKTtcblxuLy8gXHRcdHRhcmdldDEuY2xhc3NMaXN0LmFkZChcInAtZ21lbnUtLWhhbWJ1cmdlclwiKTtcbi8vIFx0XHR0YXJnZXQyLmNsYXNzTGlzdC5hZGQoXCJjLW5hdi0taGFtYnVyZ2VyXCIpO1xuLy8gXHRcdGJ0bkhvbWUuY2xhc3NMaXN0LmFkZChcImMtbmF2LWJ0bi0taG9tZVwiKTtcbi8vIFx0XHRidG5Xb3Jrcy5jbGFzc0xpc3QuYWRkKFwiYy1uYXYtYnRuLS13b3Jrc1wiKTtcbi8vIFx0XHRidG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJjLW5hdi1idG4tLXByb2ZpbGVcIik7XG4vLyBcdFx0YnRuQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwiYy1uYXYtYnRuLS1jb250YWN0XCIpO1xuXG4vLyBcdFx0dGFyZ2V0MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuLy8gXHRcdFx0dGFyZ2V0MS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJylcbi8vIFx0XHRcdGJ0bkhvbWUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb2ZmJylcbi8vIFx0XHRcdGJ0bldvcmtzLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9mZicpXG4vLyBcdFx0XHRidG5Qcm9maWxlLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9mZicpXG4vLyBcdFx0XHRidG5Db250YWN0LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9mZicpXG4vLyBcdFx0fSk7XG5cbi8vIFx0fSBlbHNlIHsvL+W5heOBjOWkp+OBjeOBhOaZglxuLy8gXHRcdHRhcmdldDEuY2xhc3NMaXN0LnJlbW92ZShcInAtZ21lbnUtLWhhbWJ1cmdlclwiKTtcbi8vIFx0XHR0YXJnZXQyLmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdi0taGFtYnVyZ2VyXCIpO1xuLy8gXHRcdGJ0bkhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImMtbmF2LWJ0bi0taG9tZVwiKTtcbi8vIFx0XHRidG5Xb3Jrcy5jbGFzc0xpc3QucmVtb3ZlKFwiYy1uYXYtYnRuLS13b3Jrc1wiKTtcbi8vIFx0XHRidG5Qcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdi1idG4tLXByb2ZpbGVcIik7XG4vLyBcdFx0YnRuQ29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYy1uYXYtYnRuLS1jb250YWN0XCIpO1xuLy8gXHRcdHRhcmdldDEuY2xhc3NMaXN0LmFkZChcInAtZ21lbnVcIik7XG4vLyBcdFx0dGFyZ2V0Mi5jbGFzc0xpc3QuYWRkKFwiYy1uYXZcIik7XG4vLyBcdH1cbi8vIH0pO1xuXG5cblxuXG5cblxuLy8gKipcbi8vIGpRdWVyeeOBp+abuOOBj+WgtOWQiFxuLy8gKipcblxuLy8gKirjg5jjg4Pjg4Djg7zjga7jg5Xjgqfjg7zjg4kqKlxuLy8galF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4vLyBcdGxldCB0dGwgPSAkKCcuanMtaGVhZGVyJyk7XG4vLyBcdCQod2luZG93KS5vbignbG9hZCBzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4vLyBcdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA1MCkgeyAvL+OCueOCr+ODreODvOODq+OBl+OBpuODmuODvOOCuOODiOODg+ODl+OBi+OCieOAh+OAh+OBq+mBlOOBl+OBn+OCiVxuLy8gXHRcdFx0dHRsLmFkZENsYXNzKCdpcy1mYWRlJyk7XG4vLyBcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdHR0bC5yZW1vdmVDbGFzcygnaXMtZmFkZScpO1xuLy8gXHRcdH1cbi8vIFx0fSk7XG4vLyB9KTtcblxuXG4vLyAqKuOCueOCr+ODreODvOODq+mAlOS4reOBp+ODmOODg+ODgOODvOWHuuePvioqXG4vLyBmdW5jdGlvbiBoZWFkZXJCYWNrKCkge1xuLy8gXHRsZXQgZWxlbVRvcCA9IGpRdWVyeSgnI3dvcmtzJykub2Zmc2V0KCkudG9wOy8vI+OBruS9jee9rlxuLy8gXHRsZXQgc2Nyb2xsID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4vLyBcdGlmIChzY3JvbGwgPj0gZWxlbVRvcCkge1xuLy8gXHRcdC8vIOOCr+ODqeOCueWQjemZpOWOu1xuLy8gXHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykucmVtb3ZlQ2xhc3MoJ1VwTW92ZScpO1xuLy8gXHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykucmVtb3ZlQ2xhc3MoJ3AtaGVhZGVyJyk7XG4vLyBcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5yZW1vdmVDbGFzcygnaXMtZmFkZScpO1xuXG4vLyBcdFx0Ly8g44Kv44Op44K55ZCN6L+95YqgXG4vLyBcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5hZGRDbGFzcygnRG93bk1vdmUnKTtcbi8vIFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLmFkZENsYXNzKCdwLWhlYWRlci0tYmFjaycpO1xuXG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0aWYgKGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykuaGFzQ2xhc3MoJ0Rvd25Nb3ZlJykpIHsvL+OBmeOBp+OBq+OCr+ODqeOCueWQjeOBjOOBpOOBhOOBpuOBhOOBn+OCiVxuLy8gXHRcdFx0Ly8g44Kv44Op44K55ZCN6Zmk5Y67XG4vLyBcdFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLnJlbW92ZUNsYXNzKCdEb3duTW92ZScpO1xuLy8gXHRcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5yZW1vdmVDbGFzcygncC1oZWFkZXItLWJhY2snKTtcblxuLy8gXHRcdFx0Ly8g44Kv44Op44K55ZCN6L+95YqgXG4vLyBcdFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLmFkZENsYXNzKCdVcE1vdmUnKTtcbi8vIFx0XHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykuYWRkQ2xhc3MoJ3AtaGVhZGVyJyk7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9IiwiY29uc3QgbWFya2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcmtlcicpO1xuZnVuY3Rpb24gbW92ZUluZGljYXRvcihlKSB7XG4gIG1hcmtlci5zdHlsZS5sZWZ0ID0gZS5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgbWFya2VyLnN0eWxlLndpZHRoID0gZS5vZmZzZXRXaWR0aCArICdweCc7XG59XG5cbmZ1bmN0aW9uIGFjdGl2ZUxpbmsoKSB7XG4gIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXJrZXItYWN0aXZlJykpO1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoJ21hcmtlci1hY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKCkge1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWFya2VyLWFjdGl2ZScpKTtcbn1cblxuXG4vLyBtb3VzZW92ZXLjgZfjgZ/jgoltb3ZlSW5kZWNhdG9y5ZG844Gz5Ye644GXXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1hcmtlcicpO1xubGlzdC5mb3JFYWNoKGxpbmsgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIG1vdmVJbmRpY2F0b3IoZS50YXJnZXQpO1xuICB9KVxufSlcblxuXG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWN0aXZlTGluaykpO1xubGlzdC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVBY3RpdmUpKTtcblxuLy8g44Kv44Oq44OD44Kv44GX44Gf44KJ6YCP5piO44Gr44GZ44KLXG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAwO1xufSkpOyIsIi8vIOOCueOCr+ODreODvOODq+aZguOBq+ODm+ODkOODvOOCkueEoeWKueOBq+OBmeOCi1xubGV0IG15Qm9keSA9IGRvY3VtZW50LmJvZHksXG4gIHRpbWVyO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICBjbGVhclRpbWVvdXQodGltZXIpO1xuICBpZiAoIW15Qm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUtaG92ZXInKSkge1xuICAgIG15Qm9keS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlLWhvdmVyJylcbiAgfVxuXG4gIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbXlCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtaG92ZXInKVxuICB9LCA1MDApO1xufSwgZmFsc2UpO1xuXG5cbi8vIENTU+OBq+asoeOBruOCs+ODvOODieOCkui/veWKoOOBmeOCi1xuLy8gLmRpc2FibGUtaG92ZXIge1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH0iLCIvLyBkYXRh5bGe5oCnXG4vLyBkYXRhLXNhX21hcmdpbu+8muihqOekuuOCv+OCpOODn+ODs+OCsOOCkuS9jee9ruOBp+OBmuOCieOBmVxuLy8gZGF0YS1zYV90cmlnZ2Vy77ya6KGo56S644K/44Kk44Of44Oz44Kw44Gu5Z+65rqW6KaB57Sg44KS5oyH5a6aXG4vLyBkYXRhLXNhX2RlbGF577ya6KGo56S644K/44Kk44Of44Oz44Kw44KS5pmC6ZaT44Gn44Ga44KJ44GZXG5cblxubGV0IEFuaW1DbGFzcyA9ICdqcy1zY3JvbGwtc2hvdyc7XG5sZXQgc2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzID0gJ3Nob3cnO1xubGV0IHRyaWdnZXJNYXJnaW5EZWZhdWx0ID0gMjAwO1xuXG5sZXQgc2Nyb2xsQW5pbUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQW5pbUNsYXNzKTtcbmxldCBzY3JvbGxBbmltYXRpb25GdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsQW5pbUVsbS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdHJpZ2dlck1hcmdpbiA9IHRyaWdnZXJNYXJnaW5EZWZhdWx0O1xuICAgICAgICBsZXQgZWxtID0gc2Nyb2xsQW5pbUVsbVtpXTtcbiAgICAgICAgbGV0IHNob3dQb3MgPSAwO1xuXG4gICAgICAgIC8vIG1hcmdpbuOBp+OBmuOCieOBmeWgtOWQiFxuICAgICAgICBpZiAoZWxtLmRhdGFzZXQuanNfZGF0YW1hcmdpbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0cmlnZ2VyTWFyZ2luID0gcGFyc2VJbnQoZWxtLmRhdGFzZXQuanNfbWFyZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyaWdnZXLjgYzjgYLjgovloLTlkIhcbiAgICAgICAgaWYgKGVsbS5kYXRhc2V0LmpzX3RyaWdnZXIpIHtcbiAgICAgICAgICAgIHNob3dQb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsbS5kYXRhc2V0LmpzX3RyaWdnZXIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRyaWdnZXJNYXJnaW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93UG9zID0gZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRyaWdnZXJNYXJnaW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmmYLplpPjgafjgZrjgonjgZnloLTlkIhcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHNob3dQb3MpIHtcbiAgICAgICAgICAgIGxldCBkZWxheSA9IChlbG0uZGF0YXNldC5qc19kZWxheSkgPyBlbG0uZGF0YXNldC5qc19kZWxheSA6IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbEFuaW1FbG1baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0uYmluZChudWxsLCBpKSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbiIsImxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuanMtc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCwvL+OCueODqeOCpOODieOBrumWk+OBrui3nembolxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGxvb3A6IHRydWUsLy/mnIDlvozjgavpgZTjgZfjgZ/jgonlhYjpoK3jgavmiLvjgotcbiAgICBzcGVlZDogMzAwLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG5cbiAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgIGZvcmNlVG9BeGlzOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsLy/jg5rjg7zjgrjjg43jg7zjgrfjg6fjg7Pjga7opoHntKBcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLC8v44Kv44Oq44OD44Kv44Gr5Y+N5b+c44GV44Gb44KLXG4gICAgICAgIGR5bmFtaWNCdWxsZXRzOiBmYWxzZSwvL+ODmuODvOOCuOODjeODvOOCt+ODp+ODs+OBq+W8t+W8seOBjOOBpOOBj1xuICAgIH0sXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH1cbn0pOyIsIi8vIOmKgOays+mJhOmBk+OCkuWbuuWumuOBmeOCi1xuY29uc3QgbXlUcmFpbiA9IGpRdWVyeShcIi5qcy10cmFpblwiKTtcbmNvbnN0IHRyYWluX3BvcyA9IG15VHJhaW4ub2Zmc2V0KCkudG9wO1xuY29uc3QgdHJhaW5faGVpZ2h0ID0gbXlUcmFpbi5vdXRlckhlaWdodCgpO1xuXG5cbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IHRyYWluX3BvcyArIDIyKSB7XG4gICAgICAgICAgICBteVRyYWluLmFkZENsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBteVRyYWluLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIi8vIEhUTUzjga48Y2FudmFzPuOCv+OCsOOBq0phdmFTY3JpcHTjgpLkvb/jgYTms6LvvIjloZfjgorvvInjgpLmj4/nlLvjgZnjgotcblxubGV0IHVuaXQgPSAxMDAsXG4gICAgY2FudmFzTGlzdCwgLy8g44Kt44Oj44Oz44OQ44K544Gu6YWN5YiXXG4gICAgaW5mbyA9IHt9LCAvLyDlhajjgq3jg6Pjg7Pjg5DjgrnlhbHpgJrjga7mj4/nlLvmg4XloLFcbiAgICBjb2xvckxpc3Q7IC8vIOWQhOOCreODo+ODs+ODkOOCueOBruiJsuaDheWgsVxuXG4vKipcbiAqIEluaXQgZnVuY3Rpb24uXG4gKiBcbiAqIEluaXRpYWxpemUgdmFyaWFibGVzIGFuZCBiZWdpbiB0aGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGluZm8uc2Vjb25kcyA9IDA7XG4gICAgaW5mby50ID0gMDtcbiAgICBjYW52YXNMaXN0ID0gW107XG4gICAgY29sb3JMaXN0ID0gW107XG4gICAgLy8gY2FudmFzMeWAi+OCgeOBruiJsuaMh+WumlxuICAgIGNhbnZhc0xpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhdmVDYW52YXNcIikpO1xuICAgIGNvbG9yTGlzdC5wdXNoKFsnI2ZmYmVmNicsICcjZmZmNWJlJywgJyNiNmY3ZmYnXSk7Ly/lt6bjgYzkuIDnlarkuIvihpLkuIrjga7ms6LpoIZcbiAgICAvLyDlkITjgq3jg6Pjg7Pjg5Djgrnjga7liJ3mnJ/ljJZcbiAgICBmb3IodmFyIGNhbnZhc0luZGV4IGluIGNhbnZhc0xpc3QpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNhbnZhc0xpc3RbY2FudmFzSW5kZXhdO1xuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7IC8vQ2FudmFz44Gud2lkdGjjgpLjgqbjgqPjg7Pjg4njgqbjga7luYXjgavlkIjjgo/jgZvjgotcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDQ1MDsvL+azouOBrumrmOOBlVxuICAgICAgICBjYW52YXMuY29udGV4dENhY2hlID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gICAgLy8g5YWx6YCa44Gu5pu05paw5Yem55CG5ZG844Gz5Ye644GXXG4gICAgdXBkYXRlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBmb3IobGV0IGNhbnZhc0luZGV4IGluIGNhbnZhc0xpc3QpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNhbnZhc0xpc3RbY2FudmFzSW5kZXhdO1xuICAgICAgICAvLyDlkITjgq3jg6Pjg7Pjg5Djgrnjga7mj4/nlLtcbiAgICAgICAgZHJhdyhjYW52YXMsIGNvbG9yTGlzdFtjYW52YXNJbmRleF0pO1xuICAgIH1cbiAgICAvLyDlhbHpgJrjga7mj4/nlLvmg4XloLHjga7mm7TmlrBcbiAgICBpbmZvLnNlY29uZHMgPSBpbmZvLnNlY29uZHMgKyAuMDE0O1xuICAgIGluZm8udCA9IGluZm8uc2Vjb25kcypNYXRoLlBJO1xuICAgIC8vIOiHqui6q+OBruWGjei1t+WRvOOBs+WHuuOBl1xuICAgIHNldFRpbWVvdXQodXBkYXRlLCAzNSk7XG59XG5cbi8qKlxuICogRHJhdyBhbmltYXRpb24gZnVuY3Rpb24uXG4gKiBcbiAqIFRoaXMgZnVuY3Rpb24gZHJhd3Mgb25lIGZyYW1lIG9mIHRoZSBhbmltYXRpb24sIHdhaXRzIDIwbXMsIGFuZCB0aGVuIGNhbGxzXG4gKiBpdHNlbGYgYWdhaW4uXG4gKi9cbmZ1bmN0aW9uIGRyYXcoY2FudmFzLCBjb2xvcikge1xuICAgIC8vIOWvvuixoeOBrmNhbnZhc+OBruOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmNvbnRleHRDYWNoZTtcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7mj4/nlLvjgpLjgq/jg6rjgqJcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy/ms6Ljga7ph43jgarjgorjgpLmj4/nlLsgZHJhd1dhdmUoY2FudmFzLCBjb2xvclvmlbDlrZfvvIjms6Ljga7mlbDjgpIw44GL44KJ5pWw44GI44Gm5oyH5a6a77yJXSwg6YCP6YGOLCDms6Ljga7luYXjga56b29tLOazouOBrumWi+Wni+S9jee9ruOBrumBheOCjCApXG4gICAgZHJhd1dhdmUoY2FudmFzLCBjb2xvclswXSwgMSwgMywgMCk7Ly8wLjXih5LpgI/pgY7lhbflkIg1MCXjgIEz4oeS5pWw5a2X44GM5aSn44GN44GE44G744Gp5rOi44GM44Gq44Gg44KJ44GLXG4gICAgZHJhd1dhdmUoY2FudmFzLCBjb2xvclsxXSwgMSwgMiwgMjUwKTtcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzJdLCAxLCAyLjUsIDEwMCk7XG59XG5cbi8qKlxuKiDms6LjgpLmj4/nlLtcbiogZHJhd1dhdmUo6ImyLCDkuI3pgI/mmI7luqYsIOazouOBruW5heOBrnpvb20sIOazouOBrumWi+Wni+S9jee9ruOBrumBheOCjClcbiovXG5mdW5jdGlvbiBkcmF3V2F2ZShjYW52YXMsIGNvbG9yLCBhbHBoYSwgem9vbSwgZGVsYXkpIHtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0Q2FjaGU7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjsvL+Whl+OCiuOBruiJslxuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyAvL+ODkeOCueOBrumWi+Wni1xuICAgIGRyYXdTaW5lKGNhbnZhcywgaW5mby50IC8gMC41LCB6b29tLCBkZWxheSk7XG4gICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICsgMTAsIGNhbnZhcy5oZWlnaHQpOyAvL+ODkeOCueOCkkNhbnZhc+OBruWPs+S4i+OBuFxuICAgIGNvbnRleHQubGluZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyAvL+ODkeOCueOCkkNhbnZhc+OBruW3puS4i+OBuFxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCkgLy/jg5HjgrnjgpLplonjgZjjgotcbiAgICBjb250ZXh0LmZpbGwoKTsgLy/ms6LjgpLloZfjgorjgaTjgbbjgZlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBkcmF3IHNpbmVcbiAqIFxuICogVGhlIHNpbmUgY3VydmUgaXMgZHJhd24gaW4gMTBweCBzZWdtZW50cyBzdGFydGluZyBhdCB0aGUgb3JpZ2luLiBcbiAqIGRyYXdTaW5lKOaZgumWkywg5rOi44Gu5bmF44Guem9vbSwg5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMKVxuICovXG5mdW5jdGlvbiBkcmF3U2luZShjYW52YXMsIHQsIHpvb20sIGRlbGF5KSB7XG4gICAgbGV0IHhBeGlzID0gTWF0aC5mbG9vcihjYW52YXMuaGVpZ2h0LzIpO1xuICAgIGxldCB5QXhpcyA9IDA7XG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuY29udGV4dENhY2hlO1xuICAgIC8vIFNldCB0aGUgaW5pdGlhbCB4IGFuZCB5LCBzdGFydGluZyBhdCAwLDAgYW5kIHRyYW5zbGF0aW5nIHRvIHRoZSBvcmlnaW4gb25cbiAgICAvLyB0aGUgY2FudmFzLlxuICAgIGxldCB4ID0gdDsgLy/mmYLplpPjgpLmqKrjga7kvY3nva7jgajjgZnjgotcbiAgICBsZXQgeSA9IE1hdGguc2luKHgpL3pvb207XG4gICAgY29udGV4dC5tb3ZlVG8oeUF4aXMsIHVuaXQqeSt4QXhpcyk7IC8v44K544K/44O844OI5L2N572u44Gr44OR44K544KS572u44GPXG5cbiAgICAvLyBMb29wIHRvIGRyYXcgc2VnbWVudHMgKOaoquW5heOBruWIhuOAgeazouOCkuaPj+eUuylcbiAgICBmb3IgKGkgPSB5QXhpczsgaSA8PSBjYW52YXMud2lkdGggKyAxMDsgaSArPSAxMCkge1xuICAgICAgICB4ID0gdCsoLXlBeGlzK2kpL3VuaXQvem9vbTtcbiAgICAgICAgeSA9IE1hdGguc2luKHggLSBkZWxheSkvMztcbiAgICAgICAgY29udGV4dC5saW5lVG8oaSwgdW5pdCp5K3hBeGlzKTtcbiAgICB9XG59XG5cbmluaXQoKTtcbiIsImNvbnN0IGR1cmF0aW9uID0gMTAwMDtcbmxldCBzdGFydFRpbWU7Ly8g44Ki44OL44Oh44O844K344On44Oz44Gu6ZaL5aeL5pmC6ZaT44KS5qC857SN44GZ44KL5aSJ5pWwXG5sZXQgc3RhcnRTY3JvbGxZOy8vIOOCouODi+ODoeODvOOCt+ODp+ODs+OBrumWi+Wni+aZguOBruOCueOCr+ODreODvOODq+S9jee9ruOCkuagvOe0jeOBmeOCi+WkieaVsFxubGV0IHRhcmdldFNjcm9sbFk7Ly8g44K/44O844Ky44OD44OI44Gu44K544Kv44Ot44O844Or5L2N572u44KS5qC857SN44GZ44KL5aSJ5pWwXG5cbi8qKlxuICog44Kk44O844K444Oz44Kw6Zai5pWwXG4gKiBAcGFyYW0geFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgZWFzZU91dEN1YmljID0gKHgpID0+IHtcbiAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0geCwgMyk7XG59O1xuXG4vKipcbiAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OBruWQhOODleODrOODvOODoOOBp+OBruWHpueQhlxuICovXG5jb25zdCBzY3JvbGxBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oMSwgKERhdGUubm93KCkgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pOy8vIOePvuWcqOaZgumWk+OBrue2mee2muaZgumWk+OBq+WvvuOBmeOCi+mAsuaNl+W6puOCkueul+WHulxuICBjb25zdCBzY3JvbGxZID1cbiAgICBzdGFydFNjcm9sbFkgK1xuICAgICh0YXJnZXRTY3JvbGxZIC0gc3RhcnRTY3JvbGxZKSAqIGVhc2VPdXRDdWJpYyhwcm9ncmVzcyk7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZKTtcblxuICBpZiAocHJvZ3Jlc3MgPCAxKSB7Ly8g6YCy5o2X5bqm44GMMeacqua6gO+8iD0xMDAl44Gn44Gv44Gq44GE77yJ5aC05ZCI44CB6Ieq5YiG6Ieq6Lqr44KS5ZG844Gz5Ye644GX44CB57mw44KK6L+U44GZXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbEFuaW1hdGlvbik7XG4gIH1cbn07XG5cbi8vIOODiOODg+ODl+OBuOaIu+OCi+imgee0oOOCkuOCr+ODquODg+OCr+OBl+OBn+OCieOCueOCr+ODreODvOODq+OCouODi+ODoeODvOOCt+ODp+ODs+Wun+ihjFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFbaHJlZl49JyMnXVwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpOy8vIOOCv+ODvOOCsuODg+ODiOOBruimgee0oOOCkuWPluW+l1xuICAgIGlmICh0YXJnZXRJZCA9PT0gXCIjXCIpIHtcbiAgICAgIHRhcmdldFNjcm9sbFkgPSAwOy8vIGhyZWY9XCIjXCLjga7loLTlkIjjga/jg5rjg7zjgrjjg4jjg4Pjg5fjgarjga7jgacwXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldElkKTsvLyDjgr/jg7zjgrLjg4Pjg4jjga7opoHntKBcbiAgICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7Ly8g44Oa44O844K45YWo5L2T44Gu6auY44GVXG5cbiAgICAgIGlmICh0YXJnZXRFbGVtZW50Lm9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCA+IGRvY3VtZW50SGVpZ2h0KSB7Ly8g44K/44O844Ky44OD44OI44GuWeW6p+aomeWPluW+l1xuICAgICAgICB0YXJnZXRTY3JvbGxZID0gZG9jdW1lbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7Ly8g44K/44O844Ky44OD44OI44GuWeW6p+aomSvjgqbjgqPjg7Pjg4njgqbpq5jjgZXjgYzjg5rjg7zjgrjlhajkvZPjga7pq5jjgZXjgpLotoXjgYjjgZ/jgajjgY3vvIjvvJ3jgZ3jgZPjgb7jgafjgrnjgq/jg63jg7zjg6vjgafjgY3jgarjgYTvvInjga/jgIHjg5rjg7zjgrjkuIDnlarjgZfjgZ/jgb7jgafjga7kvY3nva7jgpLlj5blvpdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFNjcm9sbFkgPSB0YXJnZXRFbGVtZW50Lm9mZnNldFRvcDsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZXG4gICAgICB9XG4gICAgfVxuICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7Ly8gRGF0ZS5ub3coKeOBp+mWi+Wni+aZgumWk+OCkuOCu+ODg+ODiFxuICAgIHN0YXJ0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZOy8vIOePvuWcqOOBruOCueOCr+ODreODvOODq+S9jee9ruOCkuOCu+ODg+ODiFxuICAgIHNjcm9sbEFuaW1hdGlvbigpO1xuICB9KTtcbn0pOyIsIi8qKlxuICogQG1vZHVsZXMgOiBub2RlX21vZHVsZXPjg5Xjgqnjg6vjg4Djgb7jgafjga7ntbblr77jg5Hjgrnjga7jgqjjgqTjg6rjgqLjgrlcbiAqIHdlYnBhY2suY29uZmlnLmpz44Gr44Gm5a6a576p44GX44Gm44GE44KLXG4gKi9cblxuLy8gaW1wb3J0ICdAbW9kdWxlcy9zdmd4dXNlJzsgLy9TVkfjgrnjg5fjg6njgqTjg4jjgpJJReOBp+S9v+eUqOOBmeOCi+OBn+OCgeOBruODqeOCpOODluODqeODqlxuLy8gaW1wb3J0ICcuL2xpYi9iX2Jyb3dzZXJfc3dpdGNoZXIuanMnOyAvL+ODluODqeOCpuOCtuWIpOWumuOBruOBn+OCgeODqeOCpOODluODqeODqlxuXG5pbXBvcnQgJy4vY29tbW9uL215VHJhaW4uanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUJ1YmJseUJ1dHRvbi5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215SGVhZGVyLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlIb3Zlcic7XG5pbXBvcnQgJy4vY29tbW9uL215SW52YWxpZEhvdmVyJztcbmltcG9ydCAnLi9jb21tb24vc21vb3RoLXNjcm9sbCc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215TWlsa3lXYXknO1xuaW1wb3J0ICcuL2NvbW1vbi9teVN3aXBlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215U2Nyb2xsU2hvdy5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL2RhdGEtc3BsaXR0aW5nJztcbmltcG9ydCAnLi9jb21tb24vbXlGYWxsaW5nQm94JztcbmltcG9ydCAnLi9jb21tb24vbXlXYXZlLmpzJztcblxuXG4vLyBpbXBvcnQgJy4vY29tbW9uL215T3JiaXQnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi90ZXN0LmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlUZXh0Um90YXRlLmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24nXG4vLyBpbXBvcnQgJy4vY29tbW9uL215U3RhcldheSc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215TG9hZGluZy5qcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215UGFydGljbGVSb3VuZCc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215UGFydGljbGVCYW5nJzsiXSwic291cmNlUm9vdCI6IiJ9
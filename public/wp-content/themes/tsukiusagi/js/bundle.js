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

/***/ "../_assets/js/common/myFallingBox.js":
/*!********************************************!*\
  !*** ../_assets/js/common/myFallingBox.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var count = 7;
var fragment = document.createDocumentFragment(); //fragment作成
// falling-box

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

var parent = document.getElementById('js-sector');
parent.appendChild(fragment); // playing-box

for (i = 0; i < count; i++) {
  var _sector = document.createElement('div');

  _sector.className = "sector2";
  fragment.appendChild(_sector);

  var _rotateBack = document.createElement('div');

  _rotateBack.className = "rotate2";

  _sector.appendChild(_rotateBack);

  var _fallingLayer = document.createElement('div');

  _fallingLayer.className = "falling2";

  _rotateBack.appendChild(_fallingLayer);

  var _lineHitbox = document.createElement('div');

  _lineHitbox.className = "line-box2";

  _fallingLayer.appendChild(_lineHitbox);

  var _line = document.createElement('div');

  _line.className = "line-box__line2 c-ball";

  _lineHitbox.appendChild(_line);
}

var parent2 = document.getElementById('js-sector-play');
parent2.appendChild(fragment);

/***/ }),

/***/ "../_assets/js/common/myHamburger.js":
/*!*******************************************!*\
  !*** ../_assets/js/common/myHamburger.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ハンバーガーがクリックされたら
var hamTrigger = document.getElementById('ham-trigger');
hamTrigger.addEventListener('change', function () {
  bodyFix();
}); // Listをクリックしたら

var navList = document.querySelectorAll(".js-ham-close");
navList.forEach(function (item) {
  item.addEventListener('click', function () {
    removeChecked();
    removeFix();
  });
}); // ウィンドウ幅が切り替わったら

window.addEventListener('resize', function () {
  removeChecked();
  removeFix();
}); // --------function------------
// チェックボックス

var removeChecked = function removeChecked() {
  hamTrigger.checked = false;
}; // ボディ固定


var myBody = document.body;
var myBodyClass = myBody.classList;

var bodyFix = function bodyFix() {
  var myPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (!myBodyClass.contains("is-fix")) {
    //is-fixがなければ
    addFix();
    myBody.style.top = "-".concat(myPosition, "px");
  } else {
    var scrollY = myBody.style.top; // スクロール位置の記憶

    removeFix();
    window.scrollTo(0, parseInt(scrollY || '0') * -1); // スクロール位置の保持
  }

  ;
};

var removeFix = function removeFix() {
  myBodyClass.remove('is-fix');
  myBody.style.top = "";
};

var addFix = function addFix() {
  myBodyClass.add('is-fix');
};

/***/ }),

/***/ "../_assets/js/common/myHeader.js":
/*!****************************************!*\
  !*** ../_assets/js/common/myHeader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// スクロールしたら関数呼び出し
window.addEventListener('scroll', function () {
  headerFade();
  headerBackDown();
}); // ロードしたら関数呼び出し

window.addEventListener('load', function () {
  headerFade();
  headerBackDown();
}); // ----------------------------------------------------
// 関数
// ----------------------------------------------------
// **
// p-header:スクロールしたら消える
// **

var myHeader = document.getElementById("js-p-header");
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


var layoutHeader = document.getElementById('js-l-header');
var layoutHeaderClass = layoutHeader.classList;

var headerBackDown = function headerBackDown() {
  var myTarget = document.getElementById("works");
  var rect = myTarget.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var targetTop = rect.top + scrollTop;

  if (scrollTop >= targetTop) {
    headerClass.remove('p-header--top', "is-fade"); // クラス名除去  "UpMove"

    headerClass.add('p-header--back'); // クラス名追加  'DownMove'

    layoutHeaderClass.add('back'); // クラス名追加
  } else {
    if (layoutHeaderClass.contains('back')) {
      //すでにクラス名がついていたら "DownMove"
      layoutHeaderClass.remove('back'); // クラス名除去

      headerClass.remove('p-header--back'); // クラス名除去 'DownMove'

      headerClass.add('p-header--top'); // クラス名追加  'UpMove'
    }
  }
}; // // ウィンドウ幅が切り替わったら関数呼び出し
// window.addEventListener('resize', () => {
// 	resizeRemoveClass();//is-open, is-closeを外す
// 	bodyFixedNone();//bodyのfixedを外す
// });
// **
// ハンバーガーボタン：タッチ/クリック
// **
// const hamburger = document.getElementById('js-hamburger');
// const hamburgerClass = hamburger.classList;
// const myBody = document.body;
// const myBodyClass = myBody.classList;
// hamburger.addEventListener('touchstart', function (e) {
// 	e.stopPropagation();
// 	hamburgerClick();
// });
// hamburger.addEventListener('click', function () {
// 	hamburgerClick();
// });
// **
// ナビゲーションのリストをクリックしたらis-openを消す：タッチ/クリック
// **
// const navList = document.querySelectorAll(".js-ham-close");
// navList.forEach((elm) => {
// 	elm.addEventListener('touchstart', function (e) {
// 		e.stopPropagation();
// 		navClick();// is-openを外す,is-closeを付ける,bodyのfixedを外す
// 	});
// });
// navList.forEach((elm) => {
// 	elm.addEventListener('click', function () {
// 		navClick();
// 	});
// });
// const hamburgerClick = () => {
// 	let myPosition = window.pageYOffset || document.documentElement.scrollTop;
// 	if (hamburgerClass.contains("is-close")) {//is-closeがあったら
// 		removeClose();//is-closeを外す
// 	} else {
// 		if (hamburgerClass.contains("is-open")) {//is-openがあったら
// 			const scrollY = myBody.style.top;// スクロール位置の記憶
// 			removeOpen();// is-openを外す
// 			addClose();// is-closeを付ける
// 			bodyFixedNone();// bodyのfixedを外す
// 			window.scrollTo(0, parseInt(scrollY || '0') * -1);// スクロール位置の保持
// 		}
// 	};
// 	// is-closeもis-openもなかったら
// 	if (!hamburgerClass.contains("is-close") && !hamburgerClass.contains("is-open")) {
// 		addOpen();//is-openをつける
// 		myBody.style.position = "fixed";
// 		myBody.style.top = `-${myPosition}px`;
// 	};
// };
// // **
// //ウィンドウ幅が切り替わったら、is-open||is-closeを外す
// // **
// const moonMiniSize = 570;
// const resizeRemoveClass = () => {
// 	let x = document.body.clientWidth;
// 	if (x >= moonMiniSize) {
// 		if (hamburgerClass.contains("is-open")) {//is-openがあったら
// 			removeOpen();// is-openを外す
// 		} else {
// 			if (hamburgerClass.contains("is-close")) {//is-closeがあったら
// 				removeClose();//is-closeを外す
// 			}
// 		}
// 	}
// };
// // **
// // is-closeを外す
// // **
// const removeClose = () => {
// 	hamburgerClass.remove('is-close');
// 	myBodyClass.remove('is-close');
// };
// // **
// // is-closeを付ける
// // **
// const addClose = () => {
// 	hamburgerClass.add('is-close');
// 	myBodyClass.add('is-close');
// };
// // **
// // is-openを外す
// // **
// const removeOpen = () => {
// 	hamburgerClass.remove('is-open');
// 	myBodyClass.remove('is-open');
// };
// // **
// // is-openを付ける
// // **
// const addOpen = () => {
// 	hamburgerClass.add('is-open');
// 	myBodyClass.add('is-open');
// };
// // **
// // bodyのfixedを外す
// // **
// const bodyFixedNone = () => {
// 	myBody.style.position = "";
// 	myBody.style.top = "";
// 	myBody.style.paddingTop = "";
// };
// // **
// // ナビゲーションクリックまとめ
// // **
// const navClick = () => {
// 	removeOpen();// is-openを外す
// 	addClose();// is-closeを付ける
// 	bodyFixedNone();//bodyのfixedを外す
// };

/***/ }),

/***/ "../_assets/js/common/myMilkyWay.js":
/*!******************************************!*\
  !*** ../_assets/js/common/myMilkyWay.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ** particles.jsを使う **
var myParticleID = "js-milky-way-particle";
var particle_shape = "star"; //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）

var numOfStars = 400; //星の数

var colorOfStars = '#ffff55'; //星の色

var opacityOfStars = 0.4; //星の透明度

var sizeOfStars = 3; //星の大きさ

var move_direction = "right"; //流れの向き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)

var move_speed = 1; //シェイプの動くスピード

particlesJS(myParticleID, {
  "particles": {
    "number": {
      "value": numOfStars,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": colorOfStars
    },
    "shape": {
      "type": particle_shape,
      "stroke": {
        //外線
        "width": 0,
        "color": "#fff"
      } // "polygon": { //typeをpolygonにしたときの設定
      //   "nb_sides": 5
      // },
      // "image": { //typeをimageにしたときの設定
      //   "src": "",
      //   "width": 100,
      //   "height": 100
      // }

    },
    "opacity": {
      "value": opacityOfStars,
      "random": true,
      "anim": {
        "enable": true,
        //シェイプの透明度をアニメーションさせる
        "speed": 1,
        "opacity_min": 0.2,
        //透明度の最小値
        "sync": false //全てのシェイプを同時にアニメーションさせる

      }
    },
    "size": {
      "value": sizeOfStars,
      "random": true,
      //シェイプの大きさをランダムにする
      "anim": {
        //シェイプの大きさをアニメーションさせる
        "enable": true,
        "speed": 1,
        "size_min": 0.2,
        //大きさの最小値
        "sync": false //全てのシェイプを同時にアニメーションさせる

      }
    },
    "line_linked": {
      "enable": false // 星と星を線で結ぶ
      // "distance": 500,
      // "color": "#ffffff",
      // "opacity": 0.4,
      // "width": 2

    },
    "move": {
      "enable": true,
      "speed": move_speed,
      "direction": move_direction,
      "random": false,
      "straight": true,
      "out_mode": "out",
      //エリア外に出たシェイプの動き(out、bounceより選択)
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1000,
        "rotateY": 1000
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)

      },
      // "onclick": {
      //   "enable": true,
      //   "mode": "bubble" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
      // },
      "resize": true //canvasのサイズ変更にわせて拡大縮小する

    },
    "modes": {
      // "grab": { //カーソルとシェイプの間に線が表示される
      //   "distance": 400, //カーソルからの反応距離
      //   "line_linked": {
      //     "opacity": 0.5
      //   }
      // },
      "bubble": {
        //シェイプが膨らむ
        "distance": 400,
        "size": 5,
        "duration": 0.3,
        //膨らむシェイプの持続時間(onclick時のみ)
        "opacity": 1,
        "speed": 3 //膨らむシェイプの速度(onclick時のみ)

      } // "repulse": { //シェイプがカーソルから逃げる
      //   "distance": 200, //カーソルからの反応距離
      //   "duration": 0.4
      // },
      // "push": { //シェイプが増える
      //   "particles_nb": 4 //増えるシェイプの数
      // },
      // "remove": {
      //   "particles_nb": 2 //減るシェイプの数
      // }

    }
  },
  "retina_detect": true //Retina Displayに対応する

}); // requestAnimationFrame(update);
// ** canvas使う場合 **
// function random(low, high) {
//   return Math.random() * (high - low) + low;
// }
// class Visual {
//   constructor() {
//     this.canvas = document.querySelector('#canvas-milky-way');
//     this.context = this.canvas.getContext('2d');
//     this.canvasWidth = 0;
//     this.canvasHeight = 0;
//     this.particleLength = 500;
//     this.particles = [];
//     this.particleMaxRadius = 2;
//     this.initialize();
//     this.render();
//   }
//   initialize() {
//     this.resizeCanvas();
//     for (let i = 0; i < this.particleLength; i++) {
//       this.particles.push(this.createParticle(i));
//     }
//   }
//   resizeCanvas() {
//     this.canvasWidth = document.body.offsetWidth;
//     this.canvasHeight = 200;
//     this.canvas.width = this.canvasWidth * window.devicePixelRatio;
//     this.canvas.height = this.canvasHeight * window.devicePixelRatio;
//     this.context = this.canvas.getContext('2d');
//     this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
//   }
//   createParticle(id, isRecreate) {
//     const radius = random(0.5, this.particleMaxRadius);
//     const x = isRecreate ? -radius - random(0, this.canvasWidth) : random(0, this.canvasWidth);
//     let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
//     y += random(-100, 100);
//     const alpha = random(0.05, 1);
//     return {
//       id: id,
//       x: x,
//       y: y,
//       startY: y,
//       radius: radius,
//       defaultRadius: radius,
//       startAngle: 0,
//       endAngle: Math.PI * 2,
//       alpha: alpha,
//       // color: { r: random(255, 0), g: random(255, 0), b: 0 },
//       speed: alpha + 1, //マイナスにすると右から左
//       amplitude: random(50, 200),
//       isBurst: false
//     };
//   }
//   drawParticles() {
//     this.particles.forEach(particle => {
//       // 位置情報更新
//       this.moveParticle(particle);
//       // particle描画
//       this.context.beginPath();
//       this.context.fillStyle = `rgba(255,255,0, .5)`;
//       this.context.shadowColor = 'rgba(255,255,255)';
//       this.context.shadowOffsetX = 0;
//       this.context.shadowOffsetY = 0;
//       this.context.shadowBlur = 30;
//       // this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
//       this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
//       this.context.fill();
//     });
//   }
//   moveParticle(particle) {
//     particle.x += particle.speed;
//     particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
//   }
//   render() {
//     // canvas初期化
//     this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);
//     // particleを描画
//     this.drawParticles();
//     // 画面から消えたら新しいparticleに差し替え
//     this.particles.forEach(particle => {
//       if (particle.x - particle.radius >= this.canvasWidth) {
//         this.particles[particle.id] = this.createParticle(particle.id, true);
//       }
//     });
//     requestAnimationFrame(this.render.bind(this));
//   }
// }
// new Visual();
// div200生成
// const count = 200;
// let parent = document.getElementById('js-milky-way');
// let fragment = document.createDocumentFragment(); //fragment作成
// for (i = 0; i < count; i++) {
//   let milkeyWay = document.createElement('div');
//   milkeyWay.className = "p-milky-way";
//   let milkeyMove = document.createElement('div');
//   milkeyMove.className = "milky-move";
//   let milkeyStar = document.createElement('div');
//   milkeyStar.className = "milky-star";
//   milkeyMove.appendChild(milkeyStar);
//   milkeyWay.appendChild(milkeyMove);
//   fragment.appendChild(milkeyWay);
// }
// parent.appendChild(fragment);

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

/***/ "../_assets/js/lib/particles.min.js":
/*!******************************************!*\
  !*** ../_assets/js/lib/particles.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  } : null;
}

function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}

function isInArray(e, a) {
  return a.indexOf(e) > -1;
}

var pJS = function pJS(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: t,
      w: t.offsetWidth,
      h: t.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a), i.tmp.obj = {
    size_value: i.particles.size.value,
    size_anim_speed: i.particles.size.anim.speed,
    move_speed: i.particles.move.speed,
    line_linked_distance: i.particles.line_linked.distance,
    line_linked_width: i.particles.line_linked.width,
    mode_grab_distance: i.interactivity.modes.grab.distance,
    mode_bubble_distance: i.interactivity.modes.bubble.distance,
    mode_bubble_size: i.interactivity.modes.bubble.size,
    mode_repulse_distance: i.interactivity.modes.repulse.distance
  }, i.fn.retinaInit = function () {
    i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
  }, i.fn.canvasInit = function () {
    i.canvas.ctx = i.canvas.el.getContext("2d");
  }, i.fn.canvasSize = function () {
    i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
      i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
    });
  }, i.fn.canvasPaint = function () {
    i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.canvasClear = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.particle = function (e, a, t) {
    if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == _typeof(e.value)) {
      if (e.value instanceof Array) {
        var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
        this.color.rgb = hexToRgb(s);
      } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
        r: e.value.r,
        g: e.value.g,
        b: e.value.b
      }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
        h: e.value.h,
        s: e.value.s,
        l: e.value.l
      });
    } else "random" == e.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var n = {};

    switch (i.particles.move.direction) {
      case "top":
        n = {
          x: 0,
          y: -1
        };
        break;

      case "top-right":
        n = {
          x: .5,
          y: -.5
        };
        break;

      case "right":
        n = {
          x: 1,
          y: -0
        };
        break;

      case "bottom-right":
        n = {
          x: .5,
          y: .5
        };
        break;

      case "bottom":
        n = {
          x: 0,
          y: 1
        };
        break;

      case "bottom-left":
        n = {
          x: -.5,
          y: 1
        };
        break;

      case "left":
        n = {
          x: -1,
          y: 0
        };
        break;

      case "top-left":
        n = {
          x: -.5,
          y: -.5
        };
        break;

      default:
        n = {
          x: 0,
          y: 0
        };
    }

    i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var r = i.particles.shape.type;

    if ("object" == _typeof(r)) {
      if (r instanceof Array) {
        var c = r[Math.floor(Math.random() * r.length)];
        this.shape = c;
      }
    } else this.shape = r;

    if ("image" == this.shape) {
      var o = i.particles.shape;
      this.img = {
        src: o.image.src,
        ratio: o.image.width / o.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
    }
  }, i.fn.particle.prototype.draw = function () {
    function e() {
      i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
    }

    var a = this;
    if (void 0 != a.radius_bubble) var t = a.radius_bubble;else var t = a.radius;
    if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;else var s = a.opacity;
    if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";

    switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
      case "circle":
        i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
        break;

      case "edge":
        i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
        break;

      case "triangle":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
        break;

      case "polygon":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
        break;

      case "star":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
        break;

      case "image":
        if ("svg" == i.tmp.img_type) var r = a.img.obj;else var r = i.tmp.img_obj;
        r && e();
    }

    i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
  }, i.fn.particlesCreate = function () {
    for (var e = 0; e < i.particles.number.value; e++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }
  }, i.fn.particlesUpdate = function () {
    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];

      if (i.particles.move.enable) {
        var t = i.particles.move.speed / 2;
        a.x += a.vx * t, a.y += a.vy * t;
      }

      if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
        x_left: a.radius,
        x_right: i.canvas.w,
        y_top: a.radius,
        y_bottom: i.canvas.h
      };else var s = {
        x_left: -a.radius,
        x_right: i.canvas.w + a.radius,
        y_top: -a.radius,
        y_bottom: i.canvas.h + a.radius
      };

      switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
        case "bounce":
          a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
      }

      if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) {
        var r = i.particles.array[n];
        i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
      }
    }
  }, i.fn.particlesDraw = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();

    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];
      a.draw();
    }
  }, i.fn.particlesEmpty = function () {
    i.particles.array = [];
  }, i.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
  }, i.fn.interact.linkParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;

      if (r > 0) {
        var c = i.particles.line_linked.color_rgb_line;
        i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
      }
    }
  }, i.fn.interact.attractParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
      e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
    }
  }, i.fn.interact.bounceParticles = function (e, a) {
    var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
    n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, i.fn.modes.pushParticles = function (e, a) {
    i.tmp.pushing = !0;

    for (var t = 0; e > t; t++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
        x: a ? a.pos_x : Math.random() * i.canvas.w,
        y: a ? a.pos_y : Math.random() * i.canvas.h
      })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
    }
  }, i.fn.modes.removeParticles = function (e) {
    i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
  }, i.fn.modes.bubbleParticle = function (e) {
    function a() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
    }

    function t(a, t, s, n, c) {
      if (a != t) if (i.tmp.bubble_duration_end) {
        if (void 0 != s) {
          var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
              l = a - o;
          d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else if (r <= i.interactivity.modes.bubble.distance) {
        if (void 0 != s) var v = s;else var v = n;

        if (v != a) {
          var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
          "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
    }

    if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
      var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;

      if (r <= i.interactivity.modes.bubble.distance) {
        if (c >= 0 && "mousemove" == i.interactivity.status) {
          if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) {
            var o = e.radius + i.interactivity.modes.bubble.size * c;
            o >= 0 && (e.radius_bubble = o);
          } else {
            var l = e.radius - i.interactivity.modes.bubble.size,
                o = e.radius - l * c;
            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
          }
          if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
            var v = i.interactivity.modes.bubble.opacity * c;
            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          } else {
            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          }
        }
      } else a();

      "mouseleave" == i.interactivity.status && a();
    } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
      if (i.tmp.bubble_clicking) {
        var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
        p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
      }

      i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
    }
  }, i.fn.modes.repulseParticle = function (e) {
    function a() {
      var a = Math.atan2(d, p);

      if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
        var t = {
          x: e.x + e.vx,
          y: e.y + e.vy
        };
        t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
      }
    }

    if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
      var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = {
        x: t / n,
        y: s / n
      },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = {
        x: e.x + r.x * l,
        y: e.y + r.y * l
      };
      "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
    } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
      var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
          p = i.interactivity.mouse.click_pos_x - e.x,
          d = i.interactivity.mouse.click_pos_y - e.y,
          m = p * p + d * d,
          u = -c / m * 1;
      c >= m && a();
    } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
  }, i.fn.modes.grabParticle = function (e) {
    if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
      var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);

      if (s <= i.interactivity.modes.grab.distance) {
        var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;

        if (n > 0) {
          var r = i.particles.line_linked.color_rgb_line;
          i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
        }
      }
    }
  }, i.fn.vendors.eventsListeners = function () {
    "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
      if (i.interactivity.el == window) var a = e.clientX,
          t = e.clientY;else var a = e.offsetX || e.clientX,
          t = e.offsetY || e.clientY;
      i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
    }), i.interactivity.el.addEventListener("mouseleave", function (e) {
      i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
    })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
      if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
        case "push":
          i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
          break;

        case "remove":
          i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
          break;

        case "bubble":
          i.tmp.bubble_clicking = !0;
          break;

        case "repulse":
          i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
            i.tmp.repulse_clicking = !1;
          }, 1e3 * i.interactivity.modes.repulse.duration);
      }
    });
  }, i.fn.vendors.densityAutoParticles = function () {
    if (i.particles.number.density.enable) {
      var e = i.canvas.el.width * i.canvas.el.height / 1e3;
      i.tmp.retina && (e /= 2 * i.canvas.pxratio);
      var a = e * i.particles.number.value / i.particles.number.density.value_area,
          t = i.particles.array.length - a;
      0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
    }
  }, i.fn.vendors.checkOverlap = function (e, a) {
    for (var t = 0; t < i.particles.array.length; t++) {
      var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
      c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
    }
  }, i.fn.vendors.createSvgImg = function (e) {
    var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
      return n;
    }),
        n = new Blob([s], {
      type: "image/svg+xml;charset=utf-8"
    }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
    o.addEventListener("load", function () {
      e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
    }), o.src = c;
  }, i.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
  }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
    var r = s * n,
        c = s / n,
        o = 180 * (c - 2) / c,
        l = Math.PI - Math.PI * o / 180;
    e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);

    for (var v = 0; r > v; v++) {
      e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
    }

    e.fill(), e.restore();
  }, i.fn.vendors.exportImg = function () {
    window.open(i.canvas.el.toDataURL("image/png"), "_blank");
  }, i.fn.vendors.loadImg = function (e) {
    if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) {
      if ("svg" == e) {
        var a = new XMLHttpRequest();
        a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
          4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
        }, a.send();
      } else {
        var t = new Image();
        t.addEventListener("load", function () {
          i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
        }), t.src = i.particles.shape.image.src;
      }
    } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
  }, i.fn.vendors.draw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
  }, i.fn.vendors.checkBeforeDraw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
  }, i.fn.vendors.init = function () {
    i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
  }, i.fn.vendors.start = function () {
    isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
  }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};

Object.deepExtend = function (e, a) {
  for (var t in a) {
    a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
  }

  return e;
}, window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
  "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
  var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
  if (s.length) for (; s.length > 0;) {
    t.removeChild(s[0]);
  }
  var n = document.createElement("canvas");
  n.className = i, n.style.width = "100%", n.style.height = "100%";
  var r = document.getElementById(e).appendChild(n);
  null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
  var i = new XMLHttpRequest();
  i.open("GET", a), i.onreadystatechange = function (a) {
    if (4 == i.readyState) if (200 == i.status) {
      var s = JSON.parse(a.currentTarget.response);
      window.particlesJS(e, s), t && t();
    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
  }, i.send();
};

/***/ }),

/***/ "../_assets/js/main.js":
/*!*****************************!*\
  !*** ../_assets/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_myHamburger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/myHamburger.js */ "../_assets/js/common/myHamburger.js");
/* harmony import */ var _common_myHamburger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_myHamburger_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/myHeader.js */ "../_assets/js/common/myHeader.js");
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_myHeader_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/myTrain.js */ "../_assets/js/common/myTrain.js");
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_myTrain_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_particles_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/particles.min.js */ "../_assets/js/lib/particles.min.js");
/* harmony import */ var _lib_particles_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_particles_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/myMilkyWay.js */ "../_assets/js/common/myMilkyWay.js");
/* harmony import */ var _common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/myScrollShow.js */ "../_assets/js/common/myScrollShow.js");
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/myFallingBox.js */ "../_assets/js/common/myFallingBox.js");
/* harmony import */ var _common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_7__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
// import '@modules/svgxuse'; //SVGスプライトをIEで使用するためのライブラリ
// import './lib/b_browser_switcher.js'; //ブラウザ判定のためライブラリ
// import './lib/fastclick.js';
// import './common/myFastClick.js';









/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215RmFsbGluZ0JveC5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlIYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215SGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teU1pbGt5V2F5LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVNjcm9sbFNob3cuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215U3dpcGVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVRyYWluLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2xpYi9wYXJ0aWNsZXMubWluLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOlsiY291bnQiLCJmcmFnbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImkiLCJzZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJyb3RhdGVCYWNrIiwiZmFsbGluZ0xheWVyIiwibGluZUhpdGJveCIsImxpbmUiLCJwYXJlbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudDIiLCJoYW1UcmlnZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHlGaXgiLCJuYXZMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwicmVtb3ZlQ2hlY2tlZCIsInJlbW92ZUZpeCIsIndpbmRvdyIsImNoZWNrZWQiLCJteUJvZHkiLCJib2R5IiwibXlCb2R5Q2xhc3MiLCJjbGFzc0xpc3QiLCJteVBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJjb250YWlucyIsImFkZEZpeCIsInN0eWxlIiwidG9wIiwic2Nyb2xsWSIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJyZW1vdmUiLCJhZGQiLCJoZWFkZXJGYWRlIiwiaGVhZGVyQmFja0Rvd24iLCJteUhlYWRlciIsImhlYWRlckNsYXNzIiwiaGVhZGVyRmFkZVBvc2l0aW9uIiwibGF5b3V0SGVhZGVyIiwibGF5b3V0SGVhZGVyQ2xhc3MiLCJteVRhcmdldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YXJnZXRUb3AiLCJteVBhcnRpY2xlSUQiLCJwYXJ0aWNsZV9zaGFwZSIsIm51bU9mU3RhcnMiLCJjb2xvck9mU3RhcnMiLCJvcGFjaXR5T2ZTdGFycyIsInNpemVPZlN0YXJzIiwibW92ZV9kaXJlY3Rpb24iLCJtb3ZlX3NwZWVkIiwicGFydGljbGVzSlMiLCJBbmltQ2xhc3MiLCJzY3JvbGxBbmltYXRpb25TaG93Q2xhc3MiLCJ0cmlnZ2VyTWFyZ2luRGVmYXVsdCIsInNjcm9sbEFuaW1FbG0iLCJzY3JvbGxBbmltYXRpb25GdW5jIiwibGVuZ3RoIiwidHJpZ2dlck1hcmdpbiIsImVsbSIsInNob3dQb3MiLCJkYXRhc2V0IiwianNfZGF0YW1hcmdpbiIsImpzX21hcmdpbiIsImpzX3RyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIZWlnaHQiLCJkZWxheSIsImpzX2RlbGF5Iiwic2V0VGltZW91dCIsImluZGV4IiwiYmluZCIsInN3aXBlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJlZmZlY3QiLCJsb29wIiwic3BlZWQiLCJkcmFnZ2FibGUiLCJtb3VzZXdoZWVsIiwiZm9yY2VUb0F4aXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJkeW5hbWljQnVsbGV0cyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJteVRyYWluIiwialF1ZXJ5IiwidHJhaW5fcG9zIiwib2Zmc2V0IiwidHJhaW5faGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCIkIiwic2Nyb2xsIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhleFRvUmdiIiwiZSIsImEiLCJyZXBsYWNlIiwidCIsImV4ZWMiLCJyIiwiZyIsImIiLCJjbGFtcCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJpc0luQXJyYXkiLCJpbmRleE9mIiwicEpTIiwiY2FudmFzIiwidyIsIm9mZnNldFdpZHRoIiwiaCIsIm9mZnNldEhlaWdodCIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsIndpZHRoIiwicG9seWdvbiIsIm5iX3NpZGVzIiwiaW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsIm9wYWNpdHlfbWluIiwic3luYyIsInNpemUiLCJzaXplX21pbiIsImxpbmVfbGlua2VkIiwiZGlzdGFuY2UiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImFycmF5IiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInB1c2giLCJwYXJ0aWNsZXNfbmIiLCJtb3VzZSIsInJldGluYV9kZXRlY3QiLCJmbiIsImludGVyYWN0IiwidmVuZG9ycyIsInRtcCIsIk9iamVjdCIsImRlZXBFeHRlbmQiLCJvYmoiLCJzaXplX3ZhbHVlIiwic2l6ZV9hbmltX3NwZWVkIiwibGluZV9saW5rZWRfZGlzdGFuY2UiLCJsaW5lX2xpbmtlZF93aWR0aCIsIm1vZGVfZ3JhYl9kaXN0YW5jZSIsIm1vZGVfYnViYmxlX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfc2l6ZSIsIm1vZGVfcmVwdWxzZV9kaXN0YW5jZSIsInJldGluYUluaXQiLCJkZXZpY2VQaXhlbFJhdGlvIiwicHhyYXRpbyIsInJldGluYSIsImNhbnZhc0luaXQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzU2l6ZSIsInBhcnRpY2xlc0VtcHR5IiwicGFydGljbGVzQ3JlYXRlIiwicGFydGljbGVzRHJhdyIsImRlbnNpdHlBdXRvUGFydGljbGVzIiwiY2FudmFzUGFpbnQiLCJmaWxsUmVjdCIsImNhbnZhc0NsZWFyIiwiY2xlYXJSZWN0IiwicGFydGljbGUiLCJyYWRpdXMiLCJzaXplX3N0YXR1cyIsInZzIiwieCIsInkiLCJjaGVja092ZXJsYXAiLCJBcnJheSIsInMiLCJmbG9vciIsInJnYiIsImwiLCJoc2wiLCJvcGFjaXR5X3N0YXR1cyIsInZvIiwibiIsInZ4IiwidnkiLCJ2eF9pIiwidnlfaSIsImMiLCJvIiwiaW1nIiwicmF0aW8iLCJpbWdfdHlwZSIsInNvdXJjZV9zdmciLCJjcmVhdGVTdmdJbWciLCJwdXNoaW5nIiwibG9hZGVkIiwicHJvdG90eXBlIiwiZHJhdyIsImRyYXdJbWFnZSIsInJhZGl1c19idWJibGUiLCJvcGFjaXR5X2J1YmJsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZHJhd1NoYXBlIiwiaW1nX29iaiIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiZmlsbCIsInBhcnRpY2xlc1VwZGF0ZSIsInhfbGVmdCIsInhfcmlnaHQiLCJ5X3RvcCIsInlfYm90dG9tIiwiZ3JhYlBhcnRpY2xlIiwiYnViYmxlUGFydGljbGUiLCJyZXB1bHNlUGFydGljbGUiLCJsaW5rUGFydGljbGVzIiwiYXR0cmFjdFBhcnRpY2xlcyIsImJvdW5jZVBhcnRpY2xlcyIsInBhcnRpY2xlc1JlZnJlc2giLCJjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lIiwiY2hlY2tBbmltRnJhbWUiLCJkcmF3QW5pbUZyYW1lIiwiY291bnRfc3ZnIiwic3RhcnQiLCJzcXJ0IiwiY29sb3JfcmdiX2xpbmUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJwdXNoUGFydGljbGVzIiwicG9zX3giLCJwb3NfeSIsInJlbW92ZVBhcnRpY2xlcyIsInNwbGljZSIsImJ1YmJsZV9kdXJhdGlvbl9lbmQiLCJwIiwiZCIsInYiLCJzdGF0dXMiLCJidWJibGVfY2xpY2tpbmciLCJjbGlja19wb3NfeCIsImNsaWNrX3Bvc195IiwiRGF0ZSIsImdldFRpbWUiLCJjbGlja190aW1lIiwiYXRhbjIiLCJ1IiwiY29zIiwic2luIiwicG93IiwicmVwdWxzZV9maW5pc2giLCJyZXB1bHNlX2NvdW50IiwicmVwdWxzZV9jbGlja2luZyIsIm0iLCJldmVudHNMaXN0ZW5lcnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWJzIiwiQmxvYiIsIlVSTCIsIndlYmtpdFVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkltYWdlIiwicmV2b2tlT2JqZWN0VVJMIiwiZGVzdHJveXBKUyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicEpTRG9tIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJleHBvcnRJbWciLCJvcGVuIiwidG9EYXRhVVJMIiwibG9hZEltZyIsImltZ19lcnJvciIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJyZXNwb25zZSIsImNoZWNrQmVmb3JlRHJhdyIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwicmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrIiwiaW5pdCIsInN1YnN0ciIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiY2FsbGVlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZUNoaWxkIiwibG9hZCIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLEtBQUssR0FBRyxDQUFkO0FBQ0EsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULEVBQWpCLEMsQ0FBb0Q7QUFFcEQ7O0FBQ0EsS0FBS0MsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSixLQUFoQixFQUF1QkksQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixNQUFJQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksYUFB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Q0FBQ3FVLFVBQVIsRUFBbUIsSUFBRyxPQUFLclUsQ0FBQyxDQUFDMlIsTUFBVixFQUFpQjtBQUFDLFVBQUlsRSxDQUFDLEdBQUN1SSxJQUFJLENBQUNDLEtBQUwsQ0FBV3BQLENBQUMsQ0FBQ3lOLGFBQUYsQ0FBZ0JDLFFBQTNCLENBQU47QUFBMkNsVCxZQUFNLENBQUNzQyxXQUFQLENBQW1CaUQsQ0FBbkIsRUFBcUI2RyxDQUFyQixHQUF3QjFHLENBQUMsSUFBRUEsQ0FBQyxFQUE1QjtBQUErQixLQUE1RixNQUFpRzBOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFzQzFVLENBQUMsQ0FBQzJSLE1BQXBELEdBQTREOEMsT0FBTyxDQUFDQyxHQUFSLENBQVksbUNBQVosQ0FBNUQ7QUFBNkcsR0FBbFIsRUFBbVIxVSxDQUFDLENBQUMyVSxJQUFGLEVBQW5SO0FBQTRSLENBQWo2QyxDOzs7Ozs7Ozs7Ozs7QUNSeGpxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL19hc3NldHMvanMvbWFpbi5qc1wiKTtcbiIsImNvbnN0IGNvdW50ID0gNztcbmNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbi8vIGZhbGxpbmctYm94XG5mb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICBsZXQgc2VjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rvci5jbGFzc05hbWUgPSBcInNlY3RvclwiO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWN0b3IpO1xuXG4gIGxldCByb3RhdGVCYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvdGF0ZUJhY2suY2xhc3NOYW1lID0gXCJyb3RhdGVcIjtcbiAgc2VjdG9yLmFwcGVuZENoaWxkKHJvdGF0ZUJhY2spO1xuXG4gIGxldCBmYWxsaW5nTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmFsbGluZ0xheWVyLmNsYXNzTmFtZSA9IFwiZmFsbGluZ1wiO1xuICByb3RhdGVCYWNrLmFwcGVuZENoaWxkKGZhbGxpbmdMYXllcik7XG5cbiAgbGV0IGxpbmVIaXRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGluZUhpdGJveC5jbGFzc05hbWUgPSBcImxpbmUtYm94XCI7XG4gIGZhbGxpbmdMYXllci5hcHBlbmRDaGlsZChsaW5lSGl0Ym94KTtcblxuICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lLmNsYXNzTmFtZSA9IFwibGluZS1ib3hfX2xpbmUgYy1iYWxsXCI7XG4gIGxpbmVIaXRib3guYXBwZW5kQ2hpbGQobGluZSk7XG59XG5jb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2VjdG9yJyk7XG5wYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG5cblxuLy8gcGxheWluZy1ib3hcbmZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdG9yLmNsYXNzTmFtZSA9IFwic2VjdG9yMlwiO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWN0b3IpO1xuXG4gIGxldCByb3RhdGVCYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvdGF0ZUJhY2suY2xhc3NOYW1lID0gXCJyb3RhdGUyXCI7XG4gIHNlY3Rvci5hcHBlbmRDaGlsZChyb3RhdGVCYWNrKTtcblxuICBsZXQgZmFsbGluZ0xheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZhbGxpbmdMYXllci5jbGFzc05hbWUgPSBcImZhbGxpbmcyXCI7XG4gIHJvdGF0ZUJhY2suYXBwZW5kQ2hpbGQoZmFsbGluZ0xheWVyKTtcblxuICBsZXQgbGluZUhpdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lSGl0Ym94LmNsYXNzTmFtZSA9IFwibGluZS1ib3gyXCI7XG4gIGZhbGxpbmdMYXllci5hcHBlbmRDaGlsZChsaW5lSGl0Ym94KTtcblxuICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lLmNsYXNzTmFtZSA9IFwibGluZS1ib3hfX2xpbmUyIGMtYmFsbFwiO1xuICBsaW5lSGl0Ym94LmFwcGVuZENoaWxkKGxpbmUpO1xufVxuY29uc3QgcGFyZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zZWN0b3ItcGxheScpO1xucGFyZW50Mi5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4iLCIvLyDjg4/jg7Pjg5Djg7zjgqzjg7zjgYzjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jgolcbmNvbnN0IGhhbVRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtLXRyaWdnZXInKTtcbmhhbVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBib2R5Rml4KCk7XG59KTtcblxuLy8gTGlzdOOCkuOCr+ODquODg+OCr+OBl+OBn+OCiVxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtaGFtLWNsb3NlXCIpO1xubmF2TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQ2hlY2tlZCgpO1xuICAgIHJlbW92ZUZpeCgpO1xuICB9KTtcbn0pO1xuXG4vLyDjgqbjgqPjg7Pjg4njgqbluYXjgYzliIfjgormm7/jgo/jgaPjgZ/jgolcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIHJlbW92ZUNoZWNrZWQoKTtcbiAgcmVtb3ZlRml4KCk7XG59KTtcblxuXG5cblxuLy8gLS0tLS0tLS1mdW5jdGlvbi0tLS0tLS0tLS0tLVxuLy8g44OB44Kn44OD44Kv44Oc44OD44Kv44K5XG5jb25zdCByZW1vdmVDaGVja2VkID0gKCkgPT4ge1xuICBoYW1UcmlnZ2VyLmNoZWNrZWQgPSBmYWxzZTtcbn07XG5cbi8vIOODnOODh+OCo+WbuuWumlxuY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG15Qm9keUNsYXNzID0gbXlCb2R5LmNsYXNzTGlzdDtcbmNvbnN0IGJvZHlGaXggPSAoKSA9PiB7XG4gIGxldCBteVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgaWYgKCFteUJvZHlDbGFzcy5jb250YWlucyhcImlzLWZpeFwiKSkgeyAvL2lzLWZpeOOBjOOBquOBkeOCjOOBsFxuICAgIGFkZEZpeCgpO1xuICAgIG15Qm9keS5zdHlsZS50b3AgPSBgLSR7bXlQb3NpdGlvbn1weGA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IG15Qm9keS5zdHlsZS50b3A7Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu6KiY5oa2XG4gICAgcmVtb3ZlRml4KCk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHNjcm9sbFkgfHwgJzAnKSAqIC0xKTsvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7kv53mjIFcbiAgfTtcbn1cblxuY29uc3QgcmVtb3ZlRml4ID0gKCkgPT4ge1xuICBteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLWZpeCcpO1xuICBteUJvZHkuc3R5bGUudG9wID0gXCJcIjtcbn1cbmNvbnN0IGFkZEZpeCA9ICgpID0+IHtcbiAgbXlCb2R5Q2xhc3MuYWRkKCdpcy1maXgnKTtcbn1cblxuXG5cblxuIiwiLy8g44K544Kv44Ot44O844Or44GX44Gf44KJ6Zai5pWw5ZG844Gz5Ye644GXXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRoZWFkZXJGYWRlKCk7XG5cdGhlYWRlckJhY2tEb3duKCk7XG59KTtcblxuLy8g44Ot44O844OJ44GX44Gf44KJ6Zai5pWw5ZG844Gz5Ye644GXXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyDplqLmlbBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICoqXG4vLyBwLWhlYWRlcjrjgrnjgq/jg63jg7zjg6vjgZfjgZ/jgonmtojjgYjjgotcbi8vICoqXG5jb25zdCBteUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtcC1oZWFkZXJcIik7XG5jb25zdCBoZWFkZXJDbGFzcyA9IG15SGVhZGVyLmNsYXNzTGlzdDtcbmNvbnN0IGhlYWRlckZhZGVQb3NpdGlvbiA9IDUwOy8v44K544Kv44Ot44O844Or44GX44Gm44Oa44O844K444OI44OD44OX44GL44KJ44CH44CH44Gr6YGU44GX44Gf44Go44GNXG5cbmNvbnN0IGhlYWRlckZhZGUgPSAoKSA9PiB7XG5cdGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0aWYgKHNjcm9sbFRvcCA+PSBoZWFkZXJGYWRlUG9zaXRpb24pIHtcblx0XHRoZWFkZXJDbGFzcy5hZGQoJ2lzLWZhZGUnKTtcblx0fSBlbHNlIHtcblx0XHRoZWFkZXJDbGFzcy5yZW1vdmUoJ2lzLWZhZGUnKTtcblx0fTtcbn07XG5cbi8vICoqXG4vLyBwLWhlYWRlci1iYWNrOuOCueOCr+ODreODvOODq+mAlOS4reOBp+WHuuePvlxuLy8gKipcbmNvbnN0IGxheW91dEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1sLWhlYWRlcicpO1xuY29uc3QgbGF5b3V0SGVhZGVyQ2xhc3MgPSBsYXlvdXRIZWFkZXIuY2xhc3NMaXN0O1xuXG5jb25zdCBoZWFkZXJCYWNrRG93biA9ICgpID0+IHtcblx0bGV0IG15VGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrc1wiKTtcblx0bGV0IHJlY3QgPSBteVRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0bGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRsZXQgdGFyZ2V0VG9wID0gcmVjdC50b3AgKyBzY3JvbGxUb3A7XG5cblx0aWYgKHNjcm9sbFRvcCA+PSB0YXJnZXRUb3ApIHtcblx0XHRoZWFkZXJDbGFzcy5yZW1vdmUoJ3AtaGVhZGVyLS10b3AnLCBcImlzLWZhZGVcIik7Ly8g44Kv44Op44K55ZCN6Zmk5Y67ICBcIlVwTW92ZVwiXG5cdFx0aGVhZGVyQ2xhc3MuYWRkKCdwLWhlYWRlci0tYmFjaycpOy8vIOOCr+ODqeOCueWQjei/veWKoCAgJ0Rvd25Nb3ZlJ1xuXHRcdGxheW91dEhlYWRlckNsYXNzLmFkZCgnYmFjaycpOy8vIOOCr+ODqeOCueWQjei/veWKoFxuXG5cdH0gZWxzZSB7XG5cdFx0aWYgKGxheW91dEhlYWRlckNsYXNzLmNvbnRhaW5zKCdiYWNrJykpIHsvL+OBmeOBp+OBq+OCr+ODqeOCueWQjeOBjOOBpOOBhOOBpuOBhOOBn+OCiSBcIkRvd25Nb3ZlXCJcblx0XHRcdGxheW91dEhlYWRlckNsYXNzLnJlbW92ZSgnYmFjaycpOy8vIOOCr+ODqeOCueWQjemZpOWOu1xuXHRcdFx0aGVhZGVyQ2xhc3MucmVtb3ZlKCdwLWhlYWRlci0tYmFjaycpOy8vIOOCr+ODqeOCueWQjemZpOWOuyAnRG93bk1vdmUnXG5cdFx0XHRoZWFkZXJDbGFzcy5hZGQoJ3AtaGVhZGVyLS10b3AnKTsvLyDjgq/jg6njgrnlkI3ov73liqAgICdVcE1vdmUnXG5cdFx0fVxuXHR9XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC8vIOOCpuOCo+ODs+ODieOCpuW5heOBjOWIh+OCiuabv+OCj+OBo+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbi8vIFx0cmVzaXplUmVtb3ZlQ2xhc3MoKTsvL2lzLW9wZW4sIGlzLWNsb3Nl44KS5aSW44GZXG4vLyBcdGJvZHlGaXhlZE5vbmUoKTsvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gfSk7XG5cblxuLy8gKipcbi8vIOODj+ODs+ODkOODvOOCrOODvOODnOOCv+ODs++8muOCv+ODg+ODgS/jgq/jg6rjg4Pjgq9cbi8vICoqXG4vLyBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtaGFtYnVyZ2VyJyk7XG4vLyBjb25zdCBoYW1idXJnZXJDbGFzcyA9IGhhbWJ1cmdlci5jbGFzc0xpc3Q7XG4vLyBjb25zdCBteUJvZHkgPSBkb2N1bWVudC5ib2R5O1xuLy8gY29uc3QgbXlCb2R5Q2xhc3MgPSBteUJvZHkuY2xhc3NMaXN0O1xuXG4vLyBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChlKSB7XG4vLyBcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4vLyBcdGhhbWJ1cmdlckNsaWNrKCk7XG4vLyB9KTtcblxuLy8gaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuLy8gXHRoYW1idXJnZXJDbGljaygpO1xuLy8gfSk7XG5cblxuLy8gKipcbi8vIOODiuODk+OCsuODvOOCt+ODp+ODs+OBruODquOCueODiOOCkuOCr+ODquODg+OCr+OBl+OBn+OCiWlzLW9wZW7jgpLmtojjgZnvvJrjgr/jg4Pjg4Ev44Kv44Oq44OD44KvXG4vLyAqKlxuLy8gY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtaGFtLWNsb3NlXCIpO1xuXG4vLyBuYXZMaXN0LmZvckVhY2goKGVsbSkgPT4ge1xuLy8gXHRlbG0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChlKSB7XG4vLyBcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcbi8vIFx0XHRuYXZDbGljaygpOy8vIGlzLW9wZW7jgpLlpJbjgZksaXMtY2xvc2XjgpLku5jjgZHjgossYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyBcdH0pO1xuLy8gfSk7XG5cbi8vIG5hdkxpc3QuZm9yRWFjaCgoZWxtKSA9PiB7XG4vLyBcdGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vIFx0XHRuYXZDbGljaygpO1xuLy8gXHR9KTtcbi8vIH0pO1xuXG5cblxuLy8gY29uc3QgaGFtYnVyZ2VyQ2xpY2sgPSAoKSA9PiB7XG4vLyBcdGxldCBteVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbi8vIFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHsvL2lzLWNsb3Nl44GM44GC44Gj44Gf44KJXG4vLyBcdFx0cmVtb3ZlQ2xvc2UoKTsvL2lzLWNsb3Nl44KS5aSW44GZXG4vLyBcdH0gZWxzZSB7XG5cbi8vIFx0XHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7Ly9pcy1vcGVu44GM44GC44Gj44Gf44KJXG4vLyBcdFx0XHRjb25zdCBzY3JvbGxZID0gbXlCb2R5LnN0eWxlLnRvcDsvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7oqJjmhrZcbi8vIFx0XHRcdHJlbW92ZU9wZW4oKTsvLyBpcy1vcGVu44KS5aSW44GZXG4vLyBcdFx0XHRhZGRDbG9zZSgpOy8vIGlzLWNsb3Nl44KS5LuY44GR44KLXG4vLyBcdFx0XHRib2R5Rml4ZWROb25lKCk7Ly8gYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyBcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoc2Nyb2xsWSB8fCAnMCcpICogLTEpOy8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruS/neaMgVxuLy8gXHRcdH1cbi8vIFx0fTtcblxuLy8gXHQvLyBpcy1jbG9zZeOCgmlzLW9wZW7jgoLjgarjgYvjgaPjgZ/jgolcbi8vIFx0aWYgKCFoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLWNsb3NlXCIpICYmICFoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHtcbi8vIFx0XHRhZGRPcGVuKCk7Ly9pcy1vcGVu44KS44Gk44GR44KLXG4vLyBcdFx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuLy8gXHRcdG15Qm9keS5zdHlsZS50b3AgPSBgLSR7bXlQb3NpdGlvbn1weGA7XG4vLyBcdH07XG4vLyB9O1xuXG5cbi8vIC8vICoqXG4vLyAvL+OCpuOCo+ODs+ODieOCpuW5heOBjOWIh+OCiuabv+OCj+OBo+OBn+OCieOAgWlzLW9wZW58fGlzLWNsb3Nl44KS5aSW44GZXG4vLyAvLyAqKlxuLy8gY29uc3QgbW9vbk1pbmlTaXplID0gNTcwO1xuLy8gY29uc3QgcmVzaXplUmVtb3ZlQ2xhc3MgPSAoKSA9PiB7XG4vLyBcdGxldCB4ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbi8vIFx0aWYgKHggPj0gbW9vbk1pbmlTaXplKSB7XG4vLyBcdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkgey8vaXMtb3BlbuOBjOOBguOBo+OBn+OCiVxuLy8gXHRcdFx0cmVtb3ZlT3BlbigpOy8vIGlzLW9wZW7jgpLlpJbjgZlcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHsvL2lzLWNsb3Nl44GM44GC44Gj44Gf44KJXG4vLyBcdFx0XHRcdHJlbW92ZUNsb3NlKCk7Ly9pcy1jbG9zZeOCkuWkluOBmVxuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fVxuLy8gfTtcblxuXG4vLyAvLyAqKlxuLy8gLy8gaXMtY2xvc2XjgpLlpJbjgZlcbi8vIC8vICoqXG4vLyBjb25zdCByZW1vdmVDbG9zZSA9ICgpID0+IHtcbi8vIFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuLy8gXHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLWNsb3NlJyk7XG4vLyB9O1xuXG4vLyAvLyAqKlxuLy8gLy8gaXMtY2xvc2XjgpLku5jjgZHjgotcbi8vIC8vICoqXG4vLyBjb25zdCBhZGRDbG9zZSA9ICgpID0+IHtcbi8vIFx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1jbG9zZScpO1xuLy8gXHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG4vLyB9O1xuXG4vLyAvLyAqKlxuLy8gLy8gaXMtb3BlbuOCkuWkluOBmVxuLy8gLy8gKipcbi8vIGNvbnN0IHJlbW92ZU9wZW4gPSAoKSA9PiB7XG4vLyBcdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gXHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLW9wZW4nKTtcbi8vIH07XG5cbi8vIC8vICoqXG4vLyAvLyBpcy1vcGVu44KS5LuY44GR44KLXG4vLyAvLyAqKlxuLy8gY29uc3QgYWRkT3BlbiA9ICgpID0+IHtcbi8vIFx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1vcGVuJyk7XG4vLyBcdG15Qm9keUNsYXNzLmFkZCgnaXMtb3BlbicpO1xuLy8gfTtcblxuXG4vLyAvLyAqKlxuLy8gLy8gYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyAvLyAqKlxuLy8gY29uc3QgYm9keUZpeGVkTm9uZSA9ICgpID0+IHtcbi8vIFx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbi8vIFx0bXlCb2R5LnN0eWxlLnRvcCA9IFwiXCI7XG4vLyBcdG15Qm9keS5zdHlsZS5wYWRkaW5nVG9wID0gXCJcIjtcbi8vIH07XG5cbi8vIC8vICoqXG4vLyAvLyDjg4rjg5PjgrLjg7zjgrfjg6fjg7Pjgq/jg6rjg4Pjgq/jgb7jgajjgoFcbi8vIC8vICoqXG4vLyBjb25zdCBuYXZDbGljayA9ICgpID0+IHtcbi8vIFx0cmVtb3ZlT3BlbigpOy8vIGlzLW9wZW7jgpLlpJbjgZlcbi8vIFx0YWRkQ2xvc2UoKTsvLyBpcy1jbG9zZeOCkuS7mOOBkeOCi1xuLy8gXHRib2R5Rml4ZWROb25lKCk7Ly9ib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vIH07XG5cblxuXG5cbiIsIi8vICoqIHBhcnRpY2xlcy5qc+OCkuS9v+OBhiAqKlxuY29uc3QgbXlQYXJ0aWNsZUlEID0gXCJqcy1taWxreS13YXktcGFydGljbGVcIjtcbmNvbnN0IHBhcnRpY2xlX3NoYXBlID0gXCJzdGFyXCI7IC8v44K344Kn44Kk44OX44Gu5b2i77yIY2lyY2xlOuS4uOOAgWVkZ2U65Zub6KeS44CBdHJpYW5nbGU65LiJ6KeS44CBcG9seWdvbjrlpJrop5LlvaLjgIFzdGFyOuaYn+Wei+OAgWltYWdlOueUu+WDj++8iVxuY29uc3QgbnVtT2ZTdGFycyA9IDQwMDsgLy/mmJ/jga7mlbBcbmNvbnN0IGNvbG9yT2ZTdGFycyA9ICcjZmZmZjU1JzsgLy/mmJ/jga7oibJcbmNvbnN0IG9wYWNpdHlPZlN0YXJzID0gMC40OyAvL+aYn+OBrumAj+aYjuW6plxuY29uc3Qgc2l6ZU9mU3RhcnMgPSAzOyAvL+aYn+OBruWkp+OBjeOBlVxuY29uc3QgbW92ZV9kaXJlY3Rpb24gPSBcInJpZ2h0XCI7IC8v5rWB44KM44Gu5ZCR44GNKG5vbmXjgIF0b3DjgIF0b3AtcmlnaHTjgIFyaWdodOOAgWJvdHRvbS1yaWdodOOAgWJvdHRvbeOAgWJvdHRvbS1sZWZ044CBbGVmdOOAgXRvcC1sZWZ044KI44KK6YG45oqeKVxuY29uc3QgbW92ZV9zcGVlZCA9IDE7ICAvL+OCt+OCp+OCpOODl+OBruWLleOBj+OCueODlOODvOODiVxuXG5wYXJ0aWNsZXNKUyhteVBhcnRpY2xlSUQsIHtcbiAgXCJwYXJ0aWNsZXNcIjoge1xuICAgIFwibnVtYmVyXCI6IHtcbiAgICAgIFwidmFsdWVcIjogbnVtT2ZTdGFycyxcbiAgICAgIFwiZGVuc2l0eVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwidmFsdWVfYXJlYVwiOiA4MDBcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY29sb3JcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBjb2xvck9mU3RhcnMsXG4gICAgfSxcbiAgICBcInNoYXBlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBwYXJ0aWNsZV9zaGFwZSxcbiAgICAgIFwic3Ryb2tlXCI6IHsgLy/lpJbnt5pcbiAgICAgICAgXCJ3aWR0aFwiOiAwLFxuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZlwiXG4gICAgICB9LFxuICAgICAgLy8gXCJwb2x5Z29uXCI6IHsgLy90eXBl44KScG9seWdvbuOBq+OBl+OBn+OBqOOBjeOBruioreWumlxuICAgICAgLy8gICBcIm5iX3NpZGVzXCI6IDVcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcImltYWdlXCI6IHsgLy90eXBl44KSaW1hZ2XjgavjgZfjgZ/jgajjgY3jga7oqK3lrppcbiAgICAgIC8vICAgXCJzcmNcIjogXCJcIixcbiAgICAgIC8vICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgICAvLyAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgLy8gfVxuICAgIH0sXG4gICAgXCJvcGFjaXR5XCI6IHtcbiAgICAgIFwidmFsdWVcIjogb3BhY2l0eU9mU3RhcnMsXG4gICAgICBcInJhbmRvbVwiOiB0cnVlLFxuICAgICAgXCJhbmltXCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSwgLy/jgrfjgqfjgqTjg5fjga7pgI/mmI7luqbjgpLjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgICAgXCJzcGVlZFwiOiAxLFxuICAgICAgICBcIm9wYWNpdHlfbWluXCI6IDAuMiwgLy/pgI/mmI7luqbjga7mnIDlsI/lgKRcbiAgICAgICAgXCJzeW5jXCI6IGZhbHNlIC8v5YWo44Gm44Gu44K344Kn44Kk44OX44KS5ZCM5pmC44Gr44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpemVcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBzaXplT2ZTdGFycyxcbiAgICAgIFwicmFuZG9tXCI6IHRydWUsIC8v44K344Kn44Kk44OX44Gu5aSn44GN44GV44KS44Op44Oz44OA44Og44Gr44GZ44KLXG4gICAgICBcImFuaW1cIjogeyAvL+OCt+OCp+OCpOODl+OBruWkp+OBjeOBleOCkuOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcInNwZWVkXCI6IDEsXG4gICAgICAgIFwic2l6ZV9taW5cIjogMC4yLCAvL+Wkp+OBjeOBleOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibGluZV9saW5rZWRcIjoge1xuICAgICAgXCJlbmFibGVcIjogZmFsc2UsLy8g5pif44Go5pif44KS57ea44Gn57WQ44G2XG4gICAgICAvLyBcImRpc3RhbmNlXCI6IDUwMCxcbiAgICAgIC8vIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICAvLyBcIm9wYWNpdHlcIjogMC40LFxuICAgICAgLy8gXCJ3aWR0aFwiOiAyXG4gICAgfSxcbiAgICBcIm1vdmVcIjoge1xuICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgIFwic3BlZWRcIjogbW92ZV9zcGVlZCxcbiAgICAgIFwiZGlyZWN0aW9uXCI6IG1vdmVfZGlyZWN0aW9uLFxuICAgICAgXCJyYW5kb21cIjogZmFsc2UsXG4gICAgICBcInN0cmFpZ2h0XCI6IHRydWUsXG4gICAgICBcIm91dF9tb2RlXCI6IFwib3V0XCIsIC8v44Ko44Oq44Ki5aSW44Gr5Ye644Gf44K344Kn44Kk44OX44Gu5YuV44GNKG91dOOAgWJvdW5jZeOCiOOCiumBuOaKnilcbiAgICAgIFwiYm91bmNlXCI6IGZhbHNlLFxuICAgICAgXCJhdHRyYWN0XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwicm90YXRlWFwiOiAxMDAwLFxuICAgICAgICBcInJvdGF0ZVlcIjogMTAwMFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcbiAgICBcImRldGVjdF9vblwiOiBcImNhbnZhc1wiLFxuICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgIFwib25ob3ZlclwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwibW9kZVwiOiBcImJ1YmJsZVwiIC8v44Oe44Km44K544Kq44O844OQ44O85pmC44Gr55m65YuV44GZ44KL5YuV44GNKOS4i+iomG1vZGVz5YaF44GuZ3JhYuOAgXJlcHVsc2XjgIFidWJibGXjgojjgorpgbjmip4pXG4gICAgICB9LFxuICAgICAgLy8gXCJvbmNsaWNrXCI6IHtcbiAgICAgIC8vICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgIC8vICAgXCJtb2RlXCI6IFwiYnViYmxlXCIgLy/jgq/jg6rjg4Pjgq/mmYLjgavnmbrli5XjgZnjgovli5XjgY0o5LiL6KiYbW9kZXPlhoXjga5ncmFi44CBcmVwdWxzZeOAgWJ1YmJsZeOAgXB1c2jjgIFyZW1vdmXjgojjgorpgbjmip4pXG4gICAgICAvLyB9LFxuICAgICAgXCJyZXNpemVcIjogdHJ1ZSAvL2NhbnZhc+OBruOCteOCpOOCuuWkieabtOOBq+OCj+OBm+OBpuaLoeWkp+e4ruWwj+OBmeOCi1xuICAgIH0sXG4gICAgXCJtb2Rlc1wiOiB7XG4gICAgICAvLyBcImdyYWJcIjogeyAvL+OCq+ODvOOCveODq+OBqOOCt+OCp+OCpOODl+OBrumWk+OBq+e3muOBjOihqOekuuOBleOCjOOCi1xuICAgICAgLy8gICBcImRpc3RhbmNlXCI6IDQwMCwgLy/jgqvjg7zjgr3jg6vjgYvjgonjga7lj43lv5zot53pm6JcbiAgICAgIC8vICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICAvLyAgICAgXCJvcGFjaXR5XCI6IDAuNVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9LFxuICAgICAgXCJidWJibGVcIjogeyAvL+OCt+OCp+OCpOODl+OBjOiGqOOCieOCgFxuICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcbiAgICAgICAgXCJzaXplXCI6IDUsXG4gICAgICAgIFwiZHVyYXRpb25cIjogMC4zLCAvL+iGqOOCieOCgOOCt+OCp+OCpOODl+OBruaMgee2muaZgumWkyhvbmNsaWNr5pmC44Gu44G/KVxuICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgXCJzcGVlZFwiOiAzIC8v6Iao44KJ44KA44K344Kn44Kk44OX44Gu6YCf5bqmKG9uY2xpY2vmmYLjga7jgb8pXG4gICAgICB9LFxuICAgICAgLy8gXCJyZXB1bHNlXCI6IHsgLy/jgrfjgqfjgqTjg5fjgYzjgqvjg7zjgr3jg6vjgYvjgonpgIPjgZLjgotcbiAgICAgIC8vICAgXCJkaXN0YW5jZVwiOiAyMDAsIC8v44Kr44O844K944Or44GL44KJ44Gu5Y+N5b+c6Led6ZuiXG4gICAgICAvLyAgIFwiZHVyYXRpb25cIjogMC40XG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJwdXNoXCI6IHsgLy/jgrfjgqfjgqTjg5fjgYzlopfjgYjjgotcbiAgICAgIC8vICAgXCJwYXJ0aWNsZXNfbmJcIjogNCAvL+Wil+OBiOOCi+OCt+OCp+OCpOODl+OBruaVsFxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwicmVtb3ZlXCI6IHtcbiAgICAgIC8vICAgXCJwYXJ0aWNsZXNfbmJcIjogMiAvL+a4m+OCi+OCt+OCp+OCpOODl+OBruaVsFxuICAgICAgLy8gfVxuICAgIH1cbiAgfSxcbiAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWUgLy9SZXRpbmEgRGlzcGxheeOBq+WvvuW/nOOBmeOCi1xufSk7XG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcblxuXG5cblxuXG5cbi8vICoqIGNhbnZhc+S9v+OBhuWgtOWQiCAqKlxuLy8gZnVuY3Rpb24gcmFuZG9tKGxvdywgaGlnaCkge1xuLy8gICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSArIGxvdztcbi8vIH1cblxuLy8gY2xhc3MgVmlzdWFsIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzLW1pbGt5LXdheScpO1xuLy8gICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyAgICAgdGhpcy5jYW52YXNXaWR0aCA9IDA7XG4vLyAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAwO1xuLy8gICAgIHRoaXMucGFydGljbGVMZW5ndGggPSA1MDA7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbi8vICAgICB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzID0gMjtcblxuLy8gICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuLy8gICAgIHRoaXMucmVuZGVyKCk7XG4vLyAgIH1cblxuLy8gICBpbml0aWFsaXplKCkge1xuLy8gICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlTGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIHRoaXMucGFydGljbGVzLnB1c2godGhpcy5jcmVhdGVQYXJ0aWNsZShpKSk7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgcmVzaXplQ2FudmFzKCkge1xuLy8gICAgIHRoaXMuY2FudmFzV2lkdGggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuLy8gICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gMjAwO1xuLy8gICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXNXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuLy8gICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4vLyAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgICB0aGlzLmNvbnRleHQuc2NhbGUod2luZG93LmRldmljZVBpeGVsUmF0aW8sIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbi8vICAgfVxuXG4vLyAgIGNyZWF0ZVBhcnRpY2xlKGlkLCBpc1JlY3JlYXRlKSB7XG4vLyAgICAgY29uc3QgcmFkaXVzID0gcmFuZG9tKDAuNSwgdGhpcy5wYXJ0aWNsZU1heFJhZGl1cyk7XG4vLyAgICAgY29uc3QgeCA9IGlzUmVjcmVhdGUgPyAtcmFkaXVzIC0gcmFuZG9tKDAsIHRoaXMuY2FudmFzV2lkdGgpIDogcmFuZG9tKDAsIHRoaXMuY2FudmFzV2lkdGgpO1xuLy8gICAgIGxldCB5ID0gcmFuZG9tKHRoaXMuY2FudmFzSGVpZ2h0IC8gMiAtIDE1MCwgdGhpcy5jYW52YXNIZWlnaHQgLyAyICsgMTUwKTtcbi8vICAgICB5ICs9IHJhbmRvbSgtMTAwLCAxMDApO1xuLy8gICAgIGNvbnN0IGFscGhhID0gcmFuZG9tKDAuMDUsIDEpO1xuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIGlkOiBpZCxcbi8vICAgICAgIHg6IHgsXG4vLyAgICAgICB5OiB5LFxuLy8gICAgICAgc3RhcnRZOiB5LFxuLy8gICAgICAgcmFkaXVzOiByYWRpdXMsXG4vLyAgICAgICBkZWZhdWx0UmFkaXVzOiByYWRpdXMsXG4vLyAgICAgICBzdGFydEFuZ2xlOiAwLFxuLy8gICAgICAgZW5kQW5nbGU6IE1hdGguUEkgKiAyLFxuLy8gICAgICAgYWxwaGE6IGFscGhhLFxuLy8gICAgICAgLy8gY29sb3I6IHsgcjogcmFuZG9tKDI1NSwgMCksIGc6IHJhbmRvbSgyNTUsIDApLCBiOiAwIH0sXG4vLyAgICAgICBzcGVlZDogYWxwaGEgKyAxLCAvL+ODnuOCpOODiuOCueOBq+OBmeOCi+OBqOWPs+OBi+OCieW3plxuLy8gICAgICAgYW1wbGl0dWRlOiByYW5kb20oNTAsIDIwMCksXG4vLyAgICAgICBpc0J1cnN0OiBmYWxzZVxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICBkcmF3UGFydGljbGVzKCkge1xuLy8gICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xuLy8gICAgICAgLy8g5L2N572u5oOF5aCx5pu05pawXG4vLyAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZShwYXJ0aWNsZSk7XG5cbi8vICAgICAgIC8vIHBhcnRpY2xl5o+P55S7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoMjU1LDI1NSwwLCAuNSlgO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUpJztcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZID0gMDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dCbHVyID0gMzA7XG5cbi8vICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgke3BhcnRpY2xlLmNvbG9yLnJ9LCAke3BhcnRpY2xlLmNvbG9yLmd9LCAke3BhcnRpY2xlLmNvbG9yLmJ9LCAke3BhcnRpY2xlLmFscGhhfSlgO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmFyYyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55LCBwYXJ0aWNsZS5yYWRpdXMsIHBhcnRpY2xlLnN0YXJ0QW5nbGUsIHBhcnRpY2xlLmVuZEFuZ2xlKTtcbi8vICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4vLyAgICAgfSk7XG4vLyAgIH1cblxuLy8gICBtb3ZlUGFydGljbGUocGFydGljbGUpIHtcbi8vICAgICBwYXJ0aWNsZS54ICs9IHBhcnRpY2xlLnNwZWVkO1xuLy8gICAgIHBhcnRpY2xlLnkgPSBwYXJ0aWNsZS5zdGFydFkgKyBwYXJ0aWNsZS5hbXBsaXR1ZGUgKiBNYXRoLnNpbigoKHBhcnRpY2xlLnggLyA1KSAqIE1hdGguUEkpIC8gMTgwKTtcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICAvLyBjYW52YXPliJ3mnJ/ljJZcbi8vICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzV2lkdGggKyB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzICogMiwgdGhpcy5jYW52YXNIZWlnaHQpO1xuXG4vLyAgICAgLy8gcGFydGljbGXjgpLmj4/nlLtcbi8vICAgICB0aGlzLmRyYXdQYXJ0aWNsZXMoKTtcblxuLy8gICAgIC8vIOeUu+mdouOBi+OCiea2iOOBiOOBn+OCieaWsOOBl+OBhHBhcnRpY2xl44Gr5beu44GX5pu/44GIXG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4vLyAgICAgICBpZiAocGFydGljbGUueCAtIHBhcnRpY2xlLnJhZGl1cyA+PSB0aGlzLmNhbnZhc1dpZHRoKSB7XG4vLyAgICAgICAgIHRoaXMucGFydGljbGVzW3BhcnRpY2xlLmlkXSA9IHRoaXMuY3JlYXRlUGFydGljbGUocGFydGljbGUuaWQsIHRydWUpO1xuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuXG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuLy8gICB9XG4vLyB9XG4vLyBuZXcgVmlzdWFsKCk7XG5cblxuXG5cbi8vIGRpdjIwMOeUn+aIkFxuLy8gY29uc3QgY291bnQgPSAyMDA7XG4vLyBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW1pbGt5LXdheScpO1xuLy8gbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbi8vIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbi8vICAgbGV0IG1pbGtleVdheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlXYXkuY2xhc3NOYW1lID0gXCJwLW1pbGt5LXdheVwiO1xuXG4vLyAgIGxldCBtaWxrZXlNb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleU1vdmUuY2xhc3NOYW1lID0gXCJtaWxreS1tb3ZlXCI7XG5cbi8vICAgbGV0IG1pbGtleVN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5U3Rhci5jbGFzc05hbWUgPSBcIm1pbGt5LXN0YXJcIjtcblxuLy8gICBtaWxrZXlNb3ZlLmFwcGVuZENoaWxkKG1pbGtleVN0YXIpO1xuLy8gICBtaWxrZXlXYXkuYXBwZW5kQ2hpbGQobWlsa2V5TW92ZSk7XG4vLyAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1pbGtleVdheSk7XG4vLyB9XG5cbi8vIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7IiwiLy8gZGF0YeWxnuaAp1xuLy8gZGF0YS1zYV9tYXJnaW7vvJrooajnpLrjgr/jgqTjg5/jg7PjgrDjgpLkvY3nva7jgafjgZrjgonjgZlcbi8vIGRhdGEtc2FfdHJpZ2dlcu+8muihqOekuuOCv+OCpOODn+ODs+OCsOOBruWfuua6luimgee0oOOCkuaMh+WumlxuLy8gZGF0YS1zYV9kZWxhee+8muihqOekuuOCv+OCpOODn+ODs+OCsOOCkuaZgumWk+OBp+OBmuOCieOBmVxuXG5cbmxldCBBbmltQ2xhc3MgPSAnanMtc2Nyb2xsLXNob3cnO1xubGV0IHNjcm9sbEFuaW1hdGlvblNob3dDbGFzcyA9ICdzaG93JztcbmxldCB0cmlnZ2VyTWFyZ2luRGVmYXVsdCA9IDIwMDtcblxubGV0IHNjcm9sbEFuaW1FbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEFuaW1DbGFzcyk7XG5sZXQgc2Nyb2xsQW5pbWF0aW9uRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEFuaW1FbG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRyaWdnZXJNYXJnaW4gPSB0cmlnZ2VyTWFyZ2luRGVmYXVsdDtcbiAgICAgICAgbGV0IGVsbSA9IHNjcm9sbEFuaW1FbG1baV07XG4gICAgICAgIGxldCBzaG93UG9zID0gMDtcblxuICAgICAgICAvLyBtYXJnaW7jgafjgZrjgonjgZnloLTlkIhcbiAgICAgICAgaWYgKGVsbS5kYXRhc2V0LmpzX2RhdGFtYXJnaW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdHJpZ2dlck1hcmdpbiA9IHBhcnNlSW50KGVsbS5kYXRhc2V0LmpzX21hcmdpbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2Vy44GM44GC44KL5aC05ZCIXG4gICAgICAgIGlmIChlbG0uZGF0YXNldC5qc190cmlnZ2VyKSB7XG4gICAgICAgICAgICBzaG93UG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbG0uZGF0YXNldC5qc190cmlnZ2VyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0cmlnZ2VyTWFyZ2luO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd1BvcyA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0cmlnZ2VyTWFyZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pmC6ZaT44Gn44Ga44KJ44GZ5aC05ZCIXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiBzaG93UG9zKSB7XG4gICAgICAgICAgICBsZXQgZGVsYXkgPSAoZWxtLmRhdGFzZXQuanNfZGVsYXkpID8gZWxtLmRhdGFzZXQuanNfZGVsYXkgOiAwO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxBbmltRWxtW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICB9LmJpbmQobnVsbCwgaSksIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2Nyb2xsQW5pbWF0aW9uRnVuYyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQW5pbWF0aW9uRnVuYyk7XG4iLCJsZXQgc3dpcGVyID0gbmV3IFN3aXBlcignLmpzLXN3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsLy/jgrnjg6njgqTjg4njga7plpPjga7ot53pm6JcbiAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICBsb29wOiB0cnVlLC8v5pyA5b6M44Gr6YGU44GX44Gf44KJ5YWI6aCt44Gr5oi744KLXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuXG4gICAgbW91c2V3aGVlbDoge1xuICAgICAgICBmb3JjZVRvQXhpczogZmFsc2UsXG4gICAgfSxcblxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLC8v44Oa44O844K444ON44O844K344On44Oz44Gu6KaB57SgXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwvL+OCr+ODquODg+OCr+OBq+WPjeW/nOOBleOBm+OCi1xuICAgICAgICBkeW5hbWljQnVsbGV0czogZmFsc2UsLy/jg5rjg7zjgrjjg43jg7zjgrfjg6fjg7PjgavlvLflvLHjgYzjgaTjgY9cbiAgICB9LFxuXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9XG59KTsiLCIvLyDpioDmsrPpiYTpgZPjgpLlm7rlrprjgZnjgotcbmNvbnN0IG15VHJhaW4gPSBqUXVlcnkoXCIuanMtdHJhaW5cIik7XG5jb25zdCB0cmFpbl9wb3MgPSBteVRyYWluLm9mZnNldCgpLnRvcDtcbmNvbnN0IHRyYWluX2hlaWdodCA9IG15VHJhaW4ub3V0ZXJIZWlnaHQoKTtcblxuXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiB0cmFpbl9wb3MgKyAyMikge1xuICAgICAgICAgICAgbXlUcmFpbi5hZGRDbGFzcyhcImZpeGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXlUcmFpbi5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyogQXV0aG9yIDogVmluY2VudCBHYXJyZWF1ICAtIHZpbmNlbnRnYXJyZWF1LmNvbVxuLyogTUlUIGxpY2Vuc2U6IGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8qIERlbW8gLyBHZW5lcmF0b3IgOiB2aW5jZW50Z2FycmVhdS5jb20vcGFydGljbGVzLmpzXG4vKiBHaXRIdWIgOiBnaXRodWIuY29tL1ZpbmNlbnRHYXJyZWF1L3BhcnRpY2xlcy5qc1xuLyogSG93IHRvIHVzZT8gOiBDaGVjayB0aGUgR2l0SHViIFJFQURNRVxuLyogdjIuMC4wXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZnVuY3Rpb24gaGV4VG9SZ2IoZSl7dmFyIGE9L14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtlPWUucmVwbGFjZShhLGZ1bmN0aW9uKGUsYSx0LGkpe3JldHVybiBhK2ErdCt0K2kraX0pO3ZhciB0PS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhlKTtyZXR1cm4gdD97cjpwYXJzZUludCh0WzFdLDE2KSxnOnBhcnNlSW50KHRbMl0sMTYpLGI6cGFyc2VJbnQodFszXSwxNil9Om51bGx9ZnVuY3Rpb24gY2xhbXAoZSxhLHQpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChlLGEpLHQpfWZ1bmN0aW9uIGlzSW5BcnJheShlLGEpe3JldHVybiBhLmluZGV4T2YoZSk+LTF9dmFyIHBKUz1mdW5jdGlvbihlLGEpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZStcIiA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsXCIpO3RoaXMucEpTPXtjYW52YXM6e2VsOnQsdzp0Lm9mZnNldFdpZHRoLGg6dC5vZmZzZXRIZWlnaHR9LHBhcnRpY2xlczp7bnVtYmVyOnt2YWx1ZTo0MDAsZGVuc2l0eTp7ZW5hYmxlOiEwLHZhbHVlX2FyZWE6ODAwfX0sY29sb3I6e3ZhbHVlOlwiI2ZmZlwifSxzaGFwZTp7dHlwZTpcImNpcmNsZVwiLHN0cm9rZTp7d2lkdGg6MCxjb2xvcjpcIiNmZjAwMDBcIn0scG9seWdvbjp7bmJfc2lkZXM6NX0saW1hZ2U6e3NyYzpcIlwiLHdpZHRoOjEwMCxoZWlnaHQ6MTAwfX0sb3BhY2l0eTp7dmFsdWU6MSxyYW5kb206ITEsYW5pbTp7ZW5hYmxlOiExLHNwZWVkOjIsb3BhY2l0eV9taW46MCxzeW5jOiExfX0sc2l6ZTp7dmFsdWU6MjAscmFuZG9tOiExLGFuaW06e2VuYWJsZTohMSxzcGVlZDoyMCxzaXplX21pbjowLHN5bmM6ITF9fSxsaW5lX2xpbmtlZDp7ZW5hYmxlOiEwLGRpc3RhbmNlOjEwMCxjb2xvcjpcIiNmZmZcIixvcGFjaXR5OjEsd2lkdGg6MX0sbW92ZTp7ZW5hYmxlOiEwLHNwZWVkOjIsZGlyZWN0aW9uOlwibm9uZVwiLHJhbmRvbTohMSxzdHJhaWdodDohMSxvdXRfbW9kZTpcIm91dFwiLGJvdW5jZTohMSxhdHRyYWN0OntlbmFibGU6ITEscm90YXRlWDozZTMscm90YXRlWTozZTN9fSxhcnJheTpbXX0saW50ZXJhY3Rpdml0eTp7ZGV0ZWN0X29uOlwiY2FudmFzXCIsZXZlbnRzOntvbmhvdmVyOntlbmFibGU6ITAsbW9kZTpcImdyYWJcIn0sb25jbGljazp7ZW5hYmxlOiEwLG1vZGU6XCJwdXNoXCJ9LHJlc2l6ZTohMH0sbW9kZXM6e2dyYWI6e2Rpc3RhbmNlOjEwMCxsaW5lX2xpbmtlZDp7b3BhY2l0eToxfX0sYnViYmxlOntkaXN0YW5jZToyMDAsc2l6ZTo4MCxkdXJhdGlvbjouNH0scmVwdWxzZTp7ZGlzdGFuY2U6MjAwLGR1cmF0aW9uOi40fSxwdXNoOntwYXJ0aWNsZXNfbmI6NH0scmVtb3ZlOntwYXJ0aWNsZXNfbmI6Mn19LG1vdXNlOnt9fSxyZXRpbmFfZGV0ZWN0OiExLGZuOntpbnRlcmFjdDp7fSxtb2Rlczp7fSx2ZW5kb3JzOnt9fSx0bXA6e319O3ZhciBpPXRoaXMucEpTO2EmJk9iamVjdC5kZWVwRXh0ZW5kKGksYSksaS50bXAub2JqPXtzaXplX3ZhbHVlOmkucGFydGljbGVzLnNpemUudmFsdWUsc2l6ZV9hbmltX3NwZWVkOmkucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCxtb3ZlX3NwZWVkOmkucGFydGljbGVzLm1vdmUuc3BlZWQsbGluZV9saW5rZWRfZGlzdGFuY2U6aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsbGluZV9saW5rZWRfd2lkdGg6aS5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsbW9kZV9ncmFiX2Rpc3RhbmNlOmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlLG1vZGVfYnViYmxlX2Rpc3RhbmNlOmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsbW9kZV9idWJibGVfc2l6ZTppLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlfSxpLmZuLnJldGluYUluaXQ9ZnVuY3Rpb24oKXtpLnJldGluYV9kZXRlY3QmJndpbmRvdy5kZXZpY2VQaXhlbFJhdGlvPjE/KGkuY2FudmFzLnB4cmF0aW89d2luZG93LmRldmljZVBpeGVsUmF0aW8saS50bXAucmV0aW5hPSEwKTooaS5jYW52YXMucHhyYXRpbz0xLGkudG1wLnJldGluYT0hMSksaS5jYW52YXMudz1pLmNhbnZhcy5lbC5vZmZzZXRXaWR0aCppLmNhbnZhcy5weHJhdGlvLGkuY2FudmFzLmg9aS5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0KmkuY2FudmFzLnB4cmF0aW8saS5wYXJ0aWNsZXMuc2l6ZS52YWx1ZT1pLnRtcC5vYmouc2l6ZV92YWx1ZSppLmNhbnZhcy5weHJhdGlvLGkucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZD1pLnRtcC5vYmouc2l6ZV9hbmltX3NwZWVkKmkuY2FudmFzLnB4cmF0aW8saS5wYXJ0aWNsZXMubW92ZS5zcGVlZD1pLnRtcC5vYmoubW92ZV9zcGVlZCppLmNhbnZhcy5weHJhdGlvLGkucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlPWkudG1wLm9iai5saW5lX2xpbmtlZF9kaXN0YW5jZSppLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlPWkudG1wLm9iai5tb2RlX2dyYWJfZGlzdGFuY2UqaS5jYW52YXMucHhyYXRpbyxpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlPWkudG1wLm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSppLmNhbnZhcy5weHJhdGlvLGkucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoPWkudG1wLm9iai5saW5lX2xpbmtlZF93aWR0aCppLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZT1pLnRtcC5vYmoubW9kZV9idWJibGVfc2l6ZSppLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlPWkudG1wLm9iai5tb2RlX3JlcHVsc2VfZGlzdGFuY2UqaS5jYW52YXMucHhyYXRpb30saS5mbi5jYW52YXNJbml0PWZ1bmN0aW9uKCl7aS5jYW52YXMuY3R4PWkuY2FudmFzLmVsLmdldENvbnRleHQoXCIyZFwiKX0saS5mbi5jYW52YXNTaXplPWZ1bmN0aW9uKCl7aS5jYW52YXMuZWwud2lkdGg9aS5jYW52YXMudyxpLmNhbnZhcy5lbC5oZWlnaHQ9aS5jYW52YXMuaCxpJiZpLmludGVyYWN0aXZpdHkuZXZlbnRzLnJlc2l6ZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixmdW5jdGlvbigpe2kuY2FudmFzLnc9aS5jYW52YXMuZWwub2Zmc2V0V2lkdGgsaS5jYW52YXMuaD1pLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQsaS50bXAucmV0aW5hJiYoaS5jYW52YXMudyo9aS5jYW52YXMucHhyYXRpbyxpLmNhbnZhcy5oKj1pLmNhbnZhcy5weHJhdGlvKSxpLmNhbnZhcy5lbC53aWR0aD1pLmNhbnZhcy53LGkuY2FudmFzLmVsLmhlaWdodD1pLmNhbnZhcy5oLGkucGFydGljbGVzLm1vdmUuZW5hYmxlfHwoaS5mbi5wYXJ0aWNsZXNFbXB0eSgpLGkuZm4ucGFydGljbGVzQ3JlYXRlKCksaS5mbi5wYXJ0aWNsZXNEcmF3KCksaS5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCkpLGkuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpfSl9LGkuZm4uY2FudmFzUGFpbnQ9ZnVuY3Rpb24oKXtpLmNhbnZhcy5jdHguZmlsbFJlY3QoMCwwLGkuY2FudmFzLncsaS5jYW52YXMuaCl9LGkuZm4uY2FudmFzQ2xlYXI9ZnVuY3Rpb24oKXtpLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsMCxpLmNhbnZhcy53LGkuY2FudmFzLmgpfSxpLmZuLnBhcnRpY2xlPWZ1bmN0aW9uKGUsYSx0KXtpZih0aGlzLnJhZGl1cz0oaS5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20/TWF0aC5yYW5kb20oKToxKSppLnBhcnRpY2xlcy5zaXplLnZhbHVlLGkucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUmJih0aGlzLnNpemVfc3RhdHVzPSExLHRoaXMudnM9aS5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLzEwMCxpLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luY3x8KHRoaXMudnM9dGhpcy52cypNYXRoLnJhbmRvbSgpKSksdGhpcy54PXQ/dC54Ok1hdGgucmFuZG9tKCkqaS5jYW52YXMudyx0aGlzLnk9dD90Lnk6TWF0aC5yYW5kb20oKSppLmNhbnZhcy5oLHRoaXMueD5pLmNhbnZhcy53LTIqdGhpcy5yYWRpdXM/dGhpcy54PXRoaXMueC10aGlzLnJhZGl1czp0aGlzLng8Mip0aGlzLnJhZGl1cyYmKHRoaXMueD10aGlzLngrdGhpcy5yYWRpdXMpLHRoaXMueT5pLmNhbnZhcy5oLTIqdGhpcy5yYWRpdXM/dGhpcy55PXRoaXMueS10aGlzLnJhZGl1czp0aGlzLnk8Mip0aGlzLnJhZGl1cyYmKHRoaXMueT10aGlzLnkrdGhpcy5yYWRpdXMpLGkucGFydGljbGVzLm1vdmUuYm91bmNlJiZpLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHRoaXMsdCksdGhpcy5jb2xvcj17fSxcIm9iamVjdFwiPT10eXBlb2YgZS52YWx1ZSlpZihlLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpe3ZhciBzPWUudmFsdWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkucGFydGljbGVzLmNvbG9yLnZhbHVlLmxlbmd0aCldO3RoaXMuY29sb3IucmdiPWhleFRvUmdiKHMpfWVsc2Ugdm9pZCAwIT1lLnZhbHVlLnImJnZvaWQgMCE9ZS52YWx1ZS5nJiZ2b2lkIDAhPWUudmFsdWUuYiYmKHRoaXMuY29sb3IucmdiPXtyOmUudmFsdWUucixnOmUudmFsdWUuZyxiOmUudmFsdWUuYn0pLHZvaWQgMCE9ZS52YWx1ZS5oJiZ2b2lkIDAhPWUudmFsdWUucyYmdm9pZCAwIT1lLnZhbHVlLmwmJih0aGlzLmNvbG9yLmhzbD17aDplLnZhbHVlLmgsczplLnZhbHVlLnMsbDplLnZhbHVlLmx9KTtlbHNlXCJyYW5kb21cIj09ZS52YWx1ZT90aGlzLmNvbG9yLnJnYj17cjpNYXRoLmZsb29yKDI1NipNYXRoLnJhbmRvbSgpKSswLGc6TWF0aC5mbG9vcigyNTYqTWF0aC5yYW5kb20oKSkrMCxiOk1hdGguZmxvb3IoMjU2Kk1hdGgucmFuZG9tKCkpKzB9Olwic3RyaW5nXCI9PXR5cGVvZiBlLnZhbHVlJiYodGhpcy5jb2xvcj1lLHRoaXMuY29sb3IucmdiPWhleFRvUmdiKHRoaXMuY29sb3IudmFsdWUpKTt0aGlzLm9wYWNpdHk9KGkucGFydGljbGVzLm9wYWNpdHkucmFuZG9tP01hdGgucmFuZG9tKCk6MSkqaS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSxpLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlJiYodGhpcy5vcGFjaXR5X3N0YXR1cz0hMSx0aGlzLnZvPWkucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zcGVlZC8xMDAsaS5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmN8fCh0aGlzLnZvPXRoaXMudm8qTWF0aC5yYW5kb20oKSkpO3ZhciBuPXt9O3N3aXRjaChpLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbil7Y2FzZVwidG9wXCI6bj17eDowLHk6LTF9O2JyZWFrO2Nhc2VcInRvcC1yaWdodFwiOm49e3g6LjUseTotLjV9O2JyZWFrO2Nhc2VcInJpZ2h0XCI6bj17eDoxLHk6LTB9O2JyZWFrO2Nhc2VcImJvdHRvbS1yaWdodFwiOm49e3g6LjUseTouNX07YnJlYWs7Y2FzZVwiYm90dG9tXCI6bj17eDowLHk6MX07YnJlYWs7Y2FzZVwiYm90dG9tLWxlZnRcIjpuPXt4Oi0uNSx5OjF9O2JyZWFrO2Nhc2VcImxlZnRcIjpuPXt4Oi0xLHk6MH07YnJlYWs7Y2FzZVwidG9wLWxlZnRcIjpuPXt4Oi0uNSx5Oi0uNX07YnJlYWs7ZGVmYXVsdDpuPXt4OjAseTowfX1pLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0Pyh0aGlzLnZ4PW4ueCx0aGlzLnZ5PW4ueSxpLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSYmKHRoaXMudng9dGhpcy52eCpNYXRoLnJhbmRvbSgpLHRoaXMudnk9dGhpcy52eSpNYXRoLnJhbmRvbSgpKSk6KHRoaXMudng9bi54K01hdGgucmFuZG9tKCktLjUsdGhpcy52eT1uLnkrTWF0aC5yYW5kb20oKS0uNSksdGhpcy52eF9pPXRoaXMudngsdGhpcy52eV9pPXRoaXMudnk7dmFyIHI9aS5wYXJ0aWNsZXMuc2hhcGUudHlwZTtpZihcIm9iamVjdFwiPT10eXBlb2Ygcil7aWYociBpbnN0YW5jZW9mIEFycmF5KXt2YXIgYz1yW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpyLmxlbmd0aCldO3RoaXMuc2hhcGU9Y319ZWxzZSB0aGlzLnNoYXBlPXI7aWYoXCJpbWFnZVwiPT10aGlzLnNoYXBlKXt2YXIgbz1pLnBhcnRpY2xlcy5zaGFwZTt0aGlzLmltZz17c3JjOm8uaW1hZ2Uuc3JjLHJhdGlvOm8uaW1hZ2Uud2lkdGgvby5pbWFnZS5oZWlnaHR9LHRoaXMuaW1nLnJhdGlvfHwodGhpcy5pbWcucmF0aW89MSksXCJzdmdcIj09aS50bXAuaW1nX3R5cGUmJnZvaWQgMCE9aS50bXAuc291cmNlX3N2ZyYmKGkuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcodGhpcyksaS50bXAucHVzaGluZyYmKHRoaXMuaW1nLmxvYWRlZD0hMSkpfX0saS5mbi5wYXJ0aWNsZS5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpLmNhbnZhcy5jdHguZHJhd0ltYWdlKHIsYS54LXQsYS55LXQsMip0LDIqdC9hLmltZy5yYXRpbyl9dmFyIGE9dGhpcztpZih2b2lkIDAhPWEucmFkaXVzX2J1YmJsZSl2YXIgdD1hLnJhZGl1c19idWJibGU7ZWxzZSB2YXIgdD1hLnJhZGl1cztpZih2b2lkIDAhPWEub3BhY2l0eV9idWJibGUpdmFyIHM9YS5vcGFjaXR5X2J1YmJsZTtlbHNlIHZhciBzPWEub3BhY2l0eTtpZihhLmNvbG9yLnJnYil2YXIgbj1cInJnYmEoXCIrYS5jb2xvci5yZ2IucitcIixcIithLmNvbG9yLnJnYi5nK1wiLFwiK2EuY29sb3IucmdiLmIrXCIsXCIrcytcIilcIjtlbHNlIHZhciBuPVwiaHNsYShcIithLmNvbG9yLmhzbC5oK1wiLFwiK2EuY29sb3IuaHNsLnMrXCIlLFwiK2EuY29sb3IuaHNsLmwrXCIlLFwiK3MrXCIpXCI7c3dpdGNoKGkuY2FudmFzLmN0eC5maWxsU3R5bGU9bixpLmNhbnZhcy5jdHguYmVnaW5QYXRoKCksYS5zaGFwZSl7Y2FzZVwiY2lyY2xlXCI6aS5jYW52YXMuY3R4LmFyYyhhLngsYS55LHQsMCwyKk1hdGguUEksITEpO2JyZWFrO2Nhc2VcImVkZ2VcIjppLmNhbnZhcy5jdHgucmVjdChhLngtdCxhLnktdCwyKnQsMip0KTticmVhaztjYXNlXCJ0cmlhbmdsZVwiOmkuZm4udmVuZG9ycy5kcmF3U2hhcGUoaS5jYW52YXMuY3R4LGEueC10LGEueSt0LzEuNjYsMip0LDMsMik7YnJlYWs7Y2FzZVwicG9seWdvblwiOmkuZm4udmVuZG9ycy5kcmF3U2hhcGUoaS5jYW52YXMuY3R4LGEueC10LyhpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMuNSksYS55LXQvLjc2LDIuNjYqdC8oaS5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zKSxpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLDEpO2JyZWFrO2Nhc2VcInN0YXJcIjppLmZuLnZlbmRvcnMuZHJhd1NoYXBlKGkuY2FudmFzLmN0eCxhLngtMip0LyhpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzQpLGEueS10LzEuNTIsMip0KjIuNjYvKGkucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksaS5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywyKTticmVhaztjYXNlXCJpbWFnZVwiOmlmKFwic3ZnXCI9PWkudG1wLmltZ190eXBlKXZhciByPWEuaW1nLm9iajtlbHNlIHZhciByPWkudG1wLmltZ19vYmo7ciYmZSgpfWkuY2FudmFzLmN0eC5jbG9zZVBhdGgoKSxpLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGg+MCYmKGkuY2FudmFzLmN0eC5zdHJva2VTdHlsZT1pLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3IsaS5jYW52YXMuY3R4LmxpbmVXaWR0aD1pLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGgsaS5jYW52YXMuY3R4LnN0cm9rZSgpKSxpLmNhbnZhcy5jdHguZmlsbCgpfSxpLmZuLnBhcnRpY2xlc0NyZWF0ZT1mdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8aS5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlO2UrKylpLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBpLmZuLnBhcnRpY2xlKGkucGFydGljbGVzLmNvbG9yLGkucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKX0saS5mbi5wYXJ0aWNsZXNVcGRhdGU9ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPGkucGFydGljbGVzLmFycmF5Lmxlbmd0aDtlKyspe3ZhciBhPWkucGFydGljbGVzLmFycmF5W2VdO2lmKGkucGFydGljbGVzLm1vdmUuZW5hYmxlKXt2YXIgdD1pLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLzI7YS54Kz1hLnZ4KnQsYS55Kz1hLnZ5KnR9aWYoaS5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSYmKDE9PWEub3BhY2l0eV9zdGF0dXM/KGEub3BhY2l0eT49aS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSYmKGEub3BhY2l0eV9zdGF0dXM9ITEpLGEub3BhY2l0eSs9YS52byk6KGEub3BhY2l0eTw9aS5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLm9wYWNpdHlfbWluJiYoYS5vcGFjaXR5X3N0YXR1cz0hMCksYS5vcGFjaXR5LT1hLnZvKSxhLm9wYWNpdHk8MCYmKGEub3BhY2l0eT0wKSksaS5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSYmKDE9PWEuc2l6ZV9zdGF0dXM/KGEucmFkaXVzPj1pLnBhcnRpY2xlcy5zaXplLnZhbHVlJiYoYS5zaXplX3N0YXR1cz0hMSksYS5yYWRpdXMrPWEudnMpOihhLnJhZGl1czw9aS5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluJiYoYS5zaXplX3N0YXR1cz0hMCksYS5yYWRpdXMtPWEudnMpLGEucmFkaXVzPDAmJihhLnJhZGl1cz0wKSksXCJib3VuY2VcIj09aS5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSl2YXIgcz17eF9sZWZ0OmEucmFkaXVzLHhfcmlnaHQ6aS5jYW52YXMudyx5X3RvcDphLnJhZGl1cyx5X2JvdHRvbTppLmNhbnZhcy5ofTtlbHNlIHZhciBzPXt4X2xlZnQ6LWEucmFkaXVzLHhfcmlnaHQ6aS5jYW52YXMudythLnJhZGl1cyx5X3RvcDotYS5yYWRpdXMseV9ib3R0b206aS5jYW52YXMuaCthLnJhZGl1c307c3dpdGNoKGEueC1hLnJhZGl1cz5pLmNhbnZhcy53PyhhLng9cy54X2xlZnQsYS55PU1hdGgucmFuZG9tKCkqaS5jYW52YXMuaCk6YS54K2EucmFkaXVzPDAmJihhLng9cy54X3JpZ2h0LGEueT1NYXRoLnJhbmRvbSgpKmkuY2FudmFzLmgpLGEueS1hLnJhZGl1cz5pLmNhbnZhcy5oPyhhLnk9cy55X3RvcCxhLng9TWF0aC5yYW5kb20oKSppLmNhbnZhcy53KTphLnkrYS5yYWRpdXM8MCYmKGEueT1zLnlfYm90dG9tLGEueD1NYXRoLnJhbmRvbSgpKmkuY2FudmFzLncpLGkucGFydGljbGVzLm1vdmUub3V0X21vZGUpe2Nhc2VcImJvdW5jZVwiOmEueCthLnJhZGl1cz5pLmNhbnZhcy53P2Eudng9LWEudng6YS54LWEucmFkaXVzPDAmJihhLnZ4PS1hLnZ4KSxhLnkrYS5yYWRpdXM+aS5jYW52YXMuaD9hLnZ5PS1hLnZ5OmEueS1hLnJhZGl1czwwJiYoYS52eT0tYS52eSl9aWYoaXNJbkFycmF5KFwiZ3JhYlwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSYmaS5mbi5tb2Rlcy5ncmFiUGFydGljbGUoYSksKGlzSW5BcnJheShcImJ1YmJsZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKXx8aXNJbkFycmF5KFwiYnViYmxlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSYmaS5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZShhKSwoaXNJbkFycmF5KFwicmVwdWxzZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKXx8aXNJbkFycmF5KFwicmVwdWxzZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkmJmkuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlKGEpLGkucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZXx8aS5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSlmb3IodmFyIG49ZSsxO248aS5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoO24rKyl7dmFyIHI9aS5wYXJ0aWNsZXMuYXJyYXlbbl07aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlJiZpLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMoYSxyKSxpLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlJiZpLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMoYSxyKSxpLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSYmaS5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMoYSxyKX19fSxpLmZuLnBhcnRpY2xlc0RyYXc9ZnVuY3Rpb24oKXtpLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsMCxpLmNhbnZhcy53LGkuY2FudmFzLmgpLGkuZm4ucGFydGljbGVzVXBkYXRlKCk7Zm9yKHZhciBlPTA7ZTxpLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7ZSsrKXt2YXIgYT1pLnBhcnRpY2xlcy5hcnJheVtlXTthLmRyYXcoKX19LGkuZm4ucGFydGljbGVzRW1wdHk9ZnVuY3Rpb24oKXtpLnBhcnRpY2xlcy5hcnJheT1bXX0saS5mbi5wYXJ0aWNsZXNSZWZyZXNoPWZ1bmN0aW9uKCl7Y2FuY2VsUmVxdWVzdEFuaW1GcmFtZShpLmZuLmNoZWNrQW5pbUZyYW1lKSxjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSksaS50bXAuc291cmNlX3N2Zz12b2lkIDAsaS50bXAuaW1nX29iaj12b2lkIDAsaS50bXAuY291bnRfc3ZnPTAsaS5mbi5wYXJ0aWNsZXNFbXB0eSgpLGkuZm4uY2FudmFzQ2xlYXIoKSxpLmZuLnZlbmRvcnMuc3RhcnQoKX0saS5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzPWZ1bmN0aW9uKGUsYSl7dmFyIHQ9ZS54LWEueCxzPWUueS1hLnksbj1NYXRoLnNxcnQodCp0K3Mqcyk7aWYobjw9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe3ZhciByPWkucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHktbi8oMS9pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5KS9pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtpZihyPjApe3ZhciBjPWkucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO2kuY2FudmFzLmN0eC5zdHJva2VTdHlsZT1cInJnYmEoXCIrYy5yK1wiLFwiK2MuZytcIixcIitjLmIrXCIsXCIrcitcIilcIixpLmNhbnZhcy5jdHgubGluZVdpZHRoPWkucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLGkuY2FudmFzLmN0eC5iZWdpblBhdGgoKSxpLmNhbnZhcy5jdHgubW92ZVRvKGUueCxlLnkpLGkuY2FudmFzLmN0eC5saW5lVG8oYS54LGEueSksaS5jYW52YXMuY3R4LnN0cm9rZSgpLGkuY2FudmFzLmN0eC5jbG9zZVBhdGgoKX19fSxpLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXM9ZnVuY3Rpb24oZSxhKXt2YXIgdD1lLngtYS54LHM9ZS55LWEueSxuPU1hdGguc3FydCh0KnQrcypzKTtpZihuPD1pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7dmFyIHI9dC8oMWUzKmkucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYKSxjPXMvKDFlMyppLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSk7ZS52eC09cixlLnZ5LT1jLGEudngrPXIsYS52eSs9Y319LGkuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzPWZ1bmN0aW9uKGUsYSl7dmFyIHQ9ZS54LWEueCxpPWUueS1hLnkscz1NYXRoLnNxcnQodCp0K2kqaSksbj1lLnJhZGl1cythLnJhZGl1cztuPj1zJiYoZS52eD0tZS52eCxlLnZ5PS1lLnZ5LGEudng9LWEudngsYS52eT0tYS52eSl9LGkuZm4ubW9kZXMucHVzaFBhcnRpY2xlcz1mdW5jdGlvbihlLGEpe2kudG1wLnB1c2hpbmc9ITA7Zm9yKHZhciB0PTA7ZT50O3QrKylpLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBpLmZuLnBhcnRpY2xlKGkucGFydGljbGVzLmNvbG9yLGkucGFydGljbGVzLm9wYWNpdHkudmFsdWUse3g6YT9hLnBvc194Ok1hdGgucmFuZG9tKCkqaS5jYW52YXMudyx5OmE/YS5wb3NfeTpNYXRoLnJhbmRvbSgpKmkuY2FudmFzLmh9KSksdD09ZS0xJiYoaS5wYXJ0aWNsZXMubW92ZS5lbmFibGV8fGkuZm4ucGFydGljbGVzRHJhdygpLGkudG1wLnB1c2hpbmc9ITEpfSxpLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcz1mdW5jdGlvbihlKXtpLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoMCxlKSxpLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZXx8aS5mbi5wYXJ0aWNsZXNEcmF3KCl9LGkuZm4ubW9kZXMuYnViYmxlUGFydGljbGU9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gYSgpe2Uub3BhY2l0eV9idWJibGU9ZS5vcGFjaXR5LGUucmFkaXVzX2J1YmJsZT1lLnJhZGl1c31mdW5jdGlvbiB0KGEsdCxzLG4sYyl7aWYoYSE9dClpZihpLnRtcC5idWJibGVfZHVyYXRpb25fZW5kKXtpZih2b2lkIDAhPXMpe3ZhciBvPW4tcCoobi1hKS9pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uLGw9YS1vO2Q9YStsLFwic2l6ZVwiPT1jJiYoZS5yYWRpdXNfYnViYmxlPWQpLFwib3BhY2l0eVwiPT1jJiYoZS5vcGFjaXR5X2J1YmJsZT1kKX19ZWxzZSBpZihyPD1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtpZih2b2lkIDAhPXMpdmFyIHY9cztlbHNlIHZhciB2PW47aWYodiE9YSl7dmFyIGQ9bi1wKihuLWEpL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb247XCJzaXplXCI9PWMmJihlLnJhZGl1c19idWJibGU9ZCksXCJvcGFjaXR5XCI9PWMmJihlLm9wYWNpdHlfYnViYmxlPWQpfX1lbHNlXCJzaXplXCI9PWMmJihlLnJhZGl1c19idWJibGU9dm9pZCAwKSxcIm9wYWNpdHlcIj09YyYmKGUub3BhY2l0eV9idWJibGU9dm9pZCAwKX1pZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlJiZpc0luQXJyYXkoXCJidWJibGVcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpe3ZhciBzPWUueC1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsbj1lLnktaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LHI9TWF0aC5zcXJ0KHMqcytuKm4pLGM9MS1yL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2U7aWYocjw9aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7aWYoYz49MCYmXCJtb3VzZW1vdmVcIj09aS5pbnRlcmFjdGl2aXR5LnN0YXR1cyl7aWYoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplIT1pLnBhcnRpY2xlcy5zaXplLnZhbHVlKWlmKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZT5pLnBhcnRpY2xlcy5zaXplLnZhbHVlKXt2YXIgbz1lLnJhZGl1cytpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUqYztvPj0wJiYoZS5yYWRpdXNfYnViYmxlPW8pfWVsc2V7dmFyIGw9ZS5yYWRpdXMtaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLG89ZS5yYWRpdXMtbCpjO28+MD9lLnJhZGl1c19idWJibGU9bzplLnJhZGl1c19idWJibGU9MH1pZihpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkhPWkucGFydGljbGVzLm9wYWNpdHkudmFsdWUpaWYoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5PmkucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe3ZhciB2PWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSpjO3Y+ZS5vcGFjaXR5JiZ2PD1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkmJihlLm9wYWNpdHlfYnViYmxlPXYpfWVsc2V7dmFyIHY9ZS5vcGFjaXR5LShpLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkqYzt2PGUub3BhY2l0eSYmdj49aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5JiYoZS5vcGFjaXR5X2J1YmJsZT12KX19fWVsc2UgYSgpO1wibW91c2VsZWF2ZVwiPT1pLmludGVyYWN0aXZpdHkuc3RhdHVzJiZhKCl9ZWxzZSBpZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlJiZpc0luQXJyYXkoXCJidWJibGVcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe2lmKGkudG1wLmJ1YmJsZV9jbGlja2luZyl7dmFyIHM9ZS54LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCxuPWUueS1pLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kscj1NYXRoLnNxcnQocypzK24qbikscD0oKG5ldyBEYXRlKS5nZXRUaW1lKCktaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUpLzFlMztwPmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24mJihpLnRtcC5idWJibGVfZHVyYXRpb25fZW5kPSEwKSxwPjIqaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiYmKGkudG1wLmJ1YmJsZV9jbGlja2luZz0hMSxpLnRtcC5idWJibGVfZHVyYXRpb25fZW5kPSExKX1pLnRtcC5idWJibGVfY2xpY2tpbmcmJih0KGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxpLnBhcnRpY2xlcy5zaXplLnZhbHVlLGUucmFkaXVzX2J1YmJsZSxlLnJhZGl1cyxcInNpemVcIiksdChpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksaS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSxlLm9wYWNpdHlfYnViYmxlLGUub3BhY2l0eSxcIm9wYWNpdHlcIikpfX0saS5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGU9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gYSgpe3ZhciBhPU1hdGguYXRhbjIoZCxwKTtpZihlLnZ4PXUqTWF0aC5jb3MoYSksZS52eT11Kk1hdGguc2luKGEpLFwiYm91bmNlXCI9PWkucGFydGljbGVzLm1vdmUub3V0X21vZGUpe3ZhciB0PXt4OmUueCtlLnZ4LHk6ZS55K2Uudnl9O3QueCtlLnJhZGl1cz5pLmNhbnZhcy53P2Uudng9LWUudng6dC54LWUucmFkaXVzPDAmJihlLnZ4PS1lLnZ4KSx0LnkrZS5yYWRpdXM+aS5jYW52YXMuaD9lLnZ5PS1lLnZ5OnQueS1lLnJhZGl1czwwJiYoZS52eT0tZS52eSl9fWlmKGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUmJmlzSW5BcnJheShcInJlcHVsc2VcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkmJlwibW91c2Vtb3ZlXCI9PWkuaW50ZXJhY3Rpdml0eS5zdGF0dXMpe3ZhciB0PWUueC1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gscz1lLnktaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LG49TWF0aC5zcXJ0KHQqdCtzKnMpLHI9e3g6dC9uLHk6cy9ufSxjPWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLG89MTAwLGw9Y2xhbXAoMS9jKigtMSpNYXRoLnBvdyhuL2MsMikrMSkqYypvLDAsNTApLHY9e3g6ZS54K3IueCpsLHk6ZS55K3IueSpsfTtcImJvdW5jZVwiPT1pLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlPyh2LngtZS5yYWRpdXM+MCYmdi54K2UucmFkaXVzPGkuY2FudmFzLncmJihlLng9di54KSx2LnktZS5yYWRpdXM+MCYmdi55K2UucmFkaXVzPGkuY2FudmFzLmgmJihlLnk9di55KSk6KGUueD12LngsZS55PXYueSl9ZWxzZSBpZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlJiZpc0luQXJyYXkoXCJyZXB1bHNlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKWlmKGkudG1wLnJlcHVsc2VfZmluaXNofHwoaS50bXAucmVwdWxzZV9jb3VudCsrLGkudG1wLnJlcHVsc2VfY291bnQ9PWkucGFydGljbGVzLmFycmF5Lmxlbmd0aCYmKGkudG1wLnJlcHVsc2VfZmluaXNoPSEwKSksaS50bXAucmVwdWxzZV9jbGlja2luZyl7dmFyIGM9TWF0aC5wb3coaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UvNiwzKSxwPWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeC1lLngsZD1pLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ktZS55LG09cCpwK2QqZCx1PS1jL20qMTtjPj1tJiZhKCl9ZWxzZSAwPT1pLnRtcC5yZXB1bHNlX2NsaWNraW5nJiYoZS52eD1lLnZ4X2ksZS52eT1lLnZ5X2kpfSxpLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZT1mdW5jdGlvbihlKXtpZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlJiZcIm1vdXNlbW92ZVwiPT1pLmludGVyYWN0aXZpdHkuc3RhdHVzKXt2YXIgYT1lLngtaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LHQ9ZS55LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxzPU1hdGguc3FydChhKmErdCp0KTtpZihzPD1pLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSl7dmFyIG49aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eS1zLygxL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkpL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlO2lmKG4+MCl7dmFyIHI9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7aS5jYW52YXMuY3R4LnN0cm9rZVN0eWxlPVwicmdiYShcIityLnIrXCIsXCIrci5nK1wiLFwiK3IuYitcIixcIituK1wiKVwiLGkuY2FudmFzLmN0eC5saW5lV2lkdGg9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsaS5jYW52YXMuY3R4LmJlZ2luUGF0aCgpLGkuY2FudmFzLmN0eC5tb3ZlVG8oZS54LGUueSksaS5jYW52YXMuY3R4LmxpbmVUbyhpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195KSxpLmNhbnZhcy5jdHguc3Ryb2tlKCksaS5jYW52YXMuY3R4LmNsb3NlUGF0aCgpfX19fSxpLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzPWZ1bmN0aW9uKCl7XCJ3aW5kb3dcIj09aS5pbnRlcmFjdGl2aXR5LmRldGVjdF9vbj9pLmludGVyYWN0aXZpdHkuZWw9d2luZG93OmkuaW50ZXJhY3Rpdml0eS5lbD1pLmNhbnZhcy5lbCwoaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZXx8aS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSkmJihpLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGZ1bmN0aW9uKGUpe2lmKGkuaW50ZXJhY3Rpdml0eS5lbD09d2luZG93KXZhciBhPWUuY2xpZW50WCx0PWUuY2xpZW50WTtlbHNlIHZhciBhPWUub2Zmc2V0WHx8ZS5jbGllbnRYLHQ9ZS5vZmZzZXRZfHxlLmNsaWVudFk7aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194PWEsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195PXQsaS50bXAucmV0aW5hJiYoaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194Kj1pLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSo9aS5jYW52YXMucHhyYXRpbyksaS5pbnRlcmFjdGl2aXR5LnN0YXR1cz1cIm1vdXNlbW92ZVwifSksaS5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsZnVuY3Rpb24oZSl7aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194PW51bGwsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195PW51bGwsaS5pbnRlcmFjdGl2aXR5LnN0YXR1cz1cIm1vdXNlbGVhdmVcIn0pKSxpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlJiZpLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtpZihpLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3g9aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeT1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWU9KG5ldyBEYXRlKS5nZXRUaW1lKCksaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSlzd2l0Y2goaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpe2Nhc2VcInB1c2hcIjppLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZT9pLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLGkuaW50ZXJhY3Rpdml0eS5tb3VzZSk6MT09aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iP2kuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhpLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlKTppLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmI+MSYmaS5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7YnJlYWs7Y2FzZVwicmVtb3ZlXCI6aS5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmIpO2JyZWFrO2Nhc2VcImJ1YmJsZVwiOmkudG1wLmJ1YmJsZV9jbGlja2luZz0hMDticmVhaztjYXNlXCJyZXB1bHNlXCI6aS50bXAucmVwdWxzZV9jbGlja2luZz0hMCxpLnRtcC5yZXB1bHNlX2NvdW50PTAsaS50bXAucmVwdWxzZV9maW5pc2g9ITEsc2V0VGltZW91dChmdW5jdGlvbigpe2kudG1wLnJlcHVsc2VfY2xpY2tpbmc9ITF9LDFlMyppLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kdXJhdGlvbil9fSl9LGkuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcz1mdW5jdGlvbigpe2lmKGkucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSl7dmFyIGU9aS5jYW52YXMuZWwud2lkdGgqaS5jYW52YXMuZWwuaGVpZ2h0LzFlMztpLnRtcC5yZXRpbmEmJihlLz0yKmkuY2FudmFzLnB4cmF0aW8pO3ZhciBhPWUqaS5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlL2kucGFydGljbGVzLm51bWJlci5kZW5zaXR5LnZhbHVlX2FyZWEsdD1pLnBhcnRpY2xlcy5hcnJheS5sZW5ndGgtYTswPnQ/aS5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKE1hdGguYWJzKHQpKTppLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyh0KX19LGkuZm4udmVuZG9ycy5jaGVja092ZXJsYXA9ZnVuY3Rpb24oZSxhKXtmb3IodmFyIHQ9MDt0PGkucGFydGljbGVzLmFycmF5Lmxlbmd0aDt0Kyspe3ZhciBzPWkucGFydGljbGVzLmFycmF5W3RdLG49ZS54LXMueCxyPWUueS1zLnksYz1NYXRoLnNxcnQobipuK3Iqcik7Yzw9ZS5yYWRpdXMrcy5yYWRpdXMmJihlLng9YT9hLng6TWF0aC5yYW5kb20oKSppLmNhbnZhcy53LGUueT1hP2EueTpNYXRoLnJhbmRvbSgpKmkuY2FudmFzLmgsaS5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcChlKSl9fSxpLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nPWZ1bmN0aW9uKGUpe3ZhciBhPWkudG1wLnNvdXJjZV9zdmcsdD0vIyhbMC05QS1GXXszLDZ9KS9naSxzPWEucmVwbGFjZSh0LGZ1bmN0aW9uKGEsdCxpLHMpe2lmKGUuY29sb3IucmdiKXZhciBuPVwicmdiYShcIitlLmNvbG9yLnJnYi5yK1wiLFwiK2UuY29sb3IucmdiLmcrXCIsXCIrZS5jb2xvci5yZ2IuYitcIixcIitlLm9wYWNpdHkrXCIpXCI7ZWxzZSB2YXIgbj1cImhzbGEoXCIrZS5jb2xvci5oc2wuaCtcIixcIitlLmNvbG9yLmhzbC5zK1wiJSxcIitlLmNvbG9yLmhzbC5sK1wiJSxcIitlLm9wYWNpdHkrXCIpXCI7cmV0dXJuIG59KSxuPW5ldyBCbG9iKFtzXSx7dHlwZTpcImltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOFwifSkscj13aW5kb3cuVVJMfHx3aW5kb3cud2Via2l0VVJMfHx3aW5kb3csYz1yLmNyZWF0ZU9iamVjdFVSTChuKSxvPW5ldyBJbWFnZTtvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtlLmltZy5vYmo9byxlLmltZy5sb2FkZWQ9ITAsci5yZXZva2VPYmplY3RVUkwoYyksaS50bXAuY291bnRfc3ZnKyt9KSxvLnNyYz1jfSxpLmZuLnZlbmRvcnMuZGVzdHJveXBKUz1mdW5jdGlvbigpe2NhbmNlbEFuaW1hdGlvbkZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSksdC5yZW1vdmUoKSxwSlNEb209bnVsbH0saS5mbi52ZW5kb3JzLmRyYXdTaGFwZT1mdW5jdGlvbihlLGEsdCxpLHMsbil7dmFyIHI9cypuLGM9cy9uLG89MTgwKihjLTIpL2MsbD1NYXRoLlBJLU1hdGguUEkqby8xODA7ZS5zYXZlKCksZS5iZWdpblBhdGgoKSxlLnRyYW5zbGF0ZShhLHQpLGUubW92ZVRvKDAsMCk7Zm9yKHZhciB2PTA7cj52O3YrKyllLmxpbmVUbyhpLDApLGUudHJhbnNsYXRlKGksMCksZS5yb3RhdGUobCk7ZS5maWxsKCksZS5yZXN0b3JlKCl9LGkuZm4udmVuZG9ycy5leHBvcnRJbWc9ZnVuY3Rpb24oKXt3aW5kb3cub3BlbihpLmNhbnZhcy5lbC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIiksXCJfYmxhbmtcIil9LGkuZm4udmVuZG9ycy5sb2FkSW1nPWZ1bmN0aW9uKGUpe2lmKGkudG1wLmltZ19lcnJvcj12b2lkIDAsXCJcIiE9aS5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjKWlmKFwic3ZnXCI9PWUpe3ZhciBhPW5ldyBYTUxIdHRwUmVxdWVzdDthLm9wZW4oXCJHRVRcIixpLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMpLGEub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKGUpezQ9PWEucmVhZHlTdGF0ZSYmKDIwMD09YS5zdGF0dXM/KGkudG1wLnNvdXJjZV9zdmc9ZS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlLGkuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKSk6KGNvbnNvbGUubG9nKFwiRXJyb3IgcEpTIC0gSW1hZ2Ugbm90IGZvdW5kXCIpLGkudG1wLmltZ19lcnJvcj0hMCkpfSxhLnNlbmQoKX1lbHNle3ZhciB0PW5ldyBJbWFnZTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtpLnRtcC5pbWdfb2JqPXQsaS5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpfSksdC5zcmM9aS5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjfWVsc2UgY29uc29sZS5sb2coXCJFcnJvciBwSlMgLSBObyBpbWFnZS5zcmNcIiksaS50bXAuaW1nX2Vycm9yPSEwfSxpLmZuLnZlbmRvcnMuZHJhdz1mdW5jdGlvbigpe1wiaW1hZ2VcIj09aS5wYXJ0aWNsZXMuc2hhcGUudHlwZT9cInN2Z1wiPT1pLnRtcC5pbWdfdHlwZT9pLnRtcC5jb3VudF9zdmc+PWkucGFydGljbGVzLm51bWJlci52YWx1ZT8oaS5mbi5wYXJ0aWNsZXNEcmF3KCksaS5wYXJ0aWNsZXMubW92ZS5lbmFibGU/aS5mbi5kcmF3QW5pbUZyYW1lPXJlcXVlc3RBbmltRnJhbWUoaS5mbi52ZW5kb3JzLmRyYXcpOmNhbmNlbFJlcXVlc3RBbmltRnJhbWUoaS5mbi5kcmF3QW5pbUZyYW1lKSk6aS50bXAuaW1nX2Vycm9yfHwoaS5mbi5kcmF3QW5pbUZyYW1lPXJlcXVlc3RBbmltRnJhbWUoaS5mbi52ZW5kb3JzLmRyYXcpKTp2b2lkIDAhPWkudG1wLmltZ19vYmo/KGkuZm4ucGFydGljbGVzRHJhdygpLGkucGFydGljbGVzLm1vdmUuZW5hYmxlP2kuZm4uZHJhd0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGkuZm4udmVuZG9ycy5kcmF3KTpjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSkpOmkudG1wLmltZ19lcnJvcnx8KGkuZm4uZHJhd0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGkuZm4udmVuZG9ycy5kcmF3KSk6KGkuZm4ucGFydGljbGVzRHJhdygpLGkucGFydGljbGVzLm1vdmUuZW5hYmxlP2kuZm4uZHJhd0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGkuZm4udmVuZG9ycy5kcmF3KTpjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSkpfSxpLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3PWZ1bmN0aW9uKCl7XCJpbWFnZVwiPT1pLnBhcnRpY2xlcy5zaGFwZS50eXBlP1wic3ZnXCI9PWkudG1wLmltZ190eXBlJiZ2b2lkIDA9PWkudG1wLnNvdXJjZV9zdmc/aS50bXAuY2hlY2tBbmltRnJhbWU9cmVxdWVzdEFuaW1GcmFtZShjaGVjayk6KGNhbmNlbFJlcXVlc3RBbmltRnJhbWUoaS50bXAuY2hlY2tBbmltRnJhbWUpLGkudG1wLmltZ19lcnJvcnx8KGkuZm4udmVuZG9ycy5pbml0KCksaS5mbi52ZW5kb3JzLmRyYXcoKSkpOihpLmZuLnZlbmRvcnMuaW5pdCgpLGkuZm4udmVuZG9ycy5kcmF3KCkpfSxpLmZuLnZlbmRvcnMuaW5pdD1mdW5jdGlvbigpe2kuZm4ucmV0aW5hSW5pdCgpLGkuZm4uY2FudmFzSW5pdCgpLGkuZm4uY2FudmFzU2l6ZSgpLGkuZm4uY2FudmFzUGFpbnQoKSxpLmZuLnBhcnRpY2xlc0NyZWF0ZSgpLGkuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpLGkucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lPWhleFRvUmdiKGkucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yKX0saS5mbi52ZW5kb3JzLnN0YXJ0PWZ1bmN0aW9uKCl7aXNJbkFycmF5KFwiaW1hZ2VcIixpLnBhcnRpY2xlcy5zaGFwZS50eXBlKT8oaS50bXAuaW1nX3R5cGU9aS5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihpLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoLTMpLGkuZm4udmVuZG9ycy5sb2FkSW1nKGkudG1wLmltZ190eXBlKSk6aS5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpfSxpLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzKCksaS5mbi52ZW5kb3JzLnN0YXJ0KCl9O09iamVjdC5kZWVwRXh0ZW5kPWZ1bmN0aW9uKGUsYSl7Zm9yKHZhciB0IGluIGEpYVt0XSYmYVt0XS5jb25zdHJ1Y3RvciYmYVt0XS5jb25zdHJ1Y3Rvcj09PU9iamVjdD8oZVt0XT1lW3RdfHx7fSxhcmd1bWVudHMuY2FsbGVlKGVbdF0sYVt0XSkpOmVbdF09YVt0XTtyZXR1cm4gZX0sd2luZG93LnJlcXVlc3RBbmltRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7d2luZG93LnNldFRpbWVvdXQoZSwxZTMvNjApfX0oKSx3aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGNsZWFyVGltZW91dH0oKSx3aW5kb3cucEpTRG9tPVtdLHdpbmRvdy5wYXJ0aWNsZXNKUz1mdW5jdGlvbihlLGEpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYoYT1lLGU9XCJwYXJ0aWNsZXMtanNcIiksZXx8KGU9XCJwYXJ0aWNsZXMtanNcIik7dmFyIHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSksaT1cInBhcnRpY2xlcy1qcy1jYW52YXMtZWxcIixzPXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpKTtpZihzLmxlbmd0aClmb3IoO3MubGVuZ3RoPjA7KXQucmVtb3ZlQ2hpbGQoc1swXSk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtuLmNsYXNzTmFtZT1pLG4uc3R5bGUud2lkdGg9XCIxMDAlXCIsbi5zdHlsZS5oZWlnaHQ9XCIxMDAlXCI7dmFyIHI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkuYXBwZW5kQ2hpbGQobik7bnVsbCE9ciYmcEpTRG9tLnB1c2gobmV3IHBKUyhlLGEpKX0sd2luZG93LnBhcnRpY2xlc0pTLmxvYWQ9ZnVuY3Rpb24oZSxhLHQpe3ZhciBpPW5ldyBYTUxIdHRwUmVxdWVzdDtpLm9wZW4oXCJHRVRcIixhKSxpLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbihhKXtpZig0PT1pLnJlYWR5U3RhdGUpaWYoMjAwPT1pLnN0YXR1cyl7dmFyIHM9SlNPTi5wYXJzZShhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO3dpbmRvdy5wYXJ0aWNsZXNKUyhlLHMpLHQmJnQoKX1lbHNlIGNvbnNvbGUubG9nKFwiRXJyb3IgcEpTIC0gWE1MSHR0cFJlcXVlc3Qgc3RhdHVzOiBcIitpLnN0YXR1cyksY29uc29sZS5sb2coXCJFcnJvciBwSlMgLSBGaWxlIGNvbmZpZyBub3QgZm91bmRcIil9LGkuc2VuZCgpfTsiLCIvKipcbiAqIEBtb2R1bGVzIDogbm9kZV9tb2R1bGVz44OV44Kp44Or44OA44G+44Gn44Gu57W25a++44OR44K544Gu44Ko44Kk44Oq44Ki44K5XG4gKiB3ZWJwYWNrLmNvbmZpZy5qc+OBq+OBpuWumue+qeOBl+OBpuOBhOOCi1xuICovXG5cbi8vIGltcG9ydCAnQG1vZHVsZXMvc3ZneHVzZSc7IC8vU1ZH44K544OX44Op44Kk44OI44KSSUXjgafkvb/nlKjjgZnjgovjgZ/jgoHjga7jg6njgqTjg5bjg6njg6pcbi8vIGltcG9ydCAnLi9saWIvYl9icm93c2VyX3N3aXRjaGVyLmpzJzsgLy/jg5bjg6njgqbjgrbliKTlrprjga7jgZ/jgoHjg6njgqTjg5bjg6njg6pcblxuXG4vLyBpbXBvcnQgJy4vbGliL2Zhc3RjbGljay5qcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215RmFzdENsaWNrLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlIYW1idXJnZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUhlYWRlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215VHJhaW4uanMnO1xuaW1wb3J0ICcuL2xpYi9wYXJ0aWNsZXMubWluLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlNaWxreVdheS5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215U3dpcGVyLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlTY3JvbGxTaG93LmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlGYWxsaW5nQm94LmpzJztcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=
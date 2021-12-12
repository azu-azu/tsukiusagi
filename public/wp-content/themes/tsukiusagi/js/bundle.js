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
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/myTrain.js */ "../_assets/js/common/myTrain.js");
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_myTrain_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/myHeader.js */ "../_assets/js/common/myHeader.js");
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_myHeader_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_myHamburger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/myHamburger.js */ "../_assets/js/common/myHamburger.js");
/* harmony import */ var _common_myHamburger_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_myHamburger_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_particles_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/particles.min.js */ "../_assets/js/lib/particles.min.js");
/* harmony import */ var _lib_particles_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_particles_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/myMilkyWay.js */ "../_assets/js/common/myMilkyWay.js");
/* harmony import */ var _common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/myScrollShow.js */ "../_assets/js/common/myScrollShow.js");
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_data_splitting_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/data-splitting.js */ "../_assets/js/common/data-splitting.js");
/* harmony import */ var _common_data_splitting_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_data_splitting_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/myFallingBox.js */ "../_assets/js/common/myFallingBox.js");
/* harmony import */ var _common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/myWave.js */ "../_assets/js/common/myWave.js");
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_myWave_js__WEBPACK_IMPORTED_MODULE_9__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
// import '@modules/svgxuse'; //SVGスプライトをIEで使用するためのライブラリ
// import './lib/b_browser_switcher.js'; //ブラウザ判定のためライブラリ
// import './lib/fastclick.js';
// import './common/myFastClick.js';


 // import './common/myHover.js';









/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUZhbGxpbmdCb3guanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215SGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlNaWxreVdheS5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlTY3JvbGxTaG93LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVN3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlUcmFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlXYXZlLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2xpYi9wYXJ0aWNsZXMubWluLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOlsiU3BsaXR0aW5nIiwid2hpdGVzcGFjZSIsImNvdW50IiwiZnJhZ21lbnQiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpIiwic2VjdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwicm90YXRlQmFjayIsImZhbGxpbmdMYXllciIsImxpbmVIaXRib3giLCJsaW5lIiwicGFyZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnQyIiwiaGFtVHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5Rml4IiwibmF2TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInJlbW92ZUNoZWNrZWQiLCJyZW1vdmVGaXgiLCJ3aW5kb3ciLCJjaGVja2VkIiwibXlCb2R5IiwiYm9keSIsIm15Qm9keUNsYXNzIiwiY2xhc3NMaXN0IiwibXlQb3NpdGlvbiIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiY29udGFpbnMiLCJhZGRGaXgiLCJzdHlsZSIsInRvcCIsInNjcm9sbFkiLCJzY3JvbGxUbyIsInBhcnNlSW50IiwicmVtb3ZlIiwiYWRkIiwiaGVhZGVyRmFkZSIsImhlYWRlckJhY2tEb3duIiwibXlIZWFkZXIiLCJoZWFkZXJDbGFzcyIsImhlYWRlckZhZGVQb3NpdGlvbiIsImxheW91dEhlYWRlciIsImxheW91dEhlYWRlckNsYXNzIiwibXlUYXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0VG9wIiwibXlQYXJ0aWNsZUlEIiwicGFydGljbGVfc2hhcGUiLCJudW1PZlN0YXJzIiwiY29sb3JPZlN0YXJzIiwib3BhY2l0eU9mU3RhcnMiLCJzaXplT2ZTdGFycyIsIm1vdmVfZGlyZWN0aW9uIiwibW92ZV9zcGVlZCIsInBhcnRpY2xlc0pTIiwiQW5pbUNsYXNzIiwic2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzIiwidHJpZ2dlck1hcmdpbkRlZmF1bHQiLCJzY3JvbGxBbmltRWxtIiwic2Nyb2xsQW5pbWF0aW9uRnVuYyIsImxlbmd0aCIsInRyaWdnZXJNYXJnaW4iLCJlbG0iLCJzaG93UG9zIiwiZGF0YXNldCIsImpzX2RhdGFtYXJnaW4iLCJqc19tYXJnaW4iLCJqc190cmlnZ2VyIiwicXVlcnlTZWxlY3RvciIsImlubmVySGVpZ2h0IiwiZGVsYXkiLCJqc19kZWxheSIsInNldFRpbWVvdXQiLCJpbmRleCIsImJpbmQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZWZmZWN0IiwibG9vcCIsInNwZWVkIiwiZHJhZ2dhYmxlIiwibW91c2V3aGVlbCIsImZvcmNlVG9BeGlzIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiZHluYW1pY0J1bGxldHMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwibXlUcmFpbiIsImpRdWVyeSIsInRyYWluX3BvcyIsIm9mZnNldCIsInRyYWluX2hlaWdodCIsIm91dGVySGVpZ2h0IiwiJCIsInNjcm9sbCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ1bml0IiwiY2FudmFzTGlzdCIsImluZm8iLCJjb2xvckxpc3QiLCJpbml0Iiwic2Vjb25kcyIsInQiLCJwdXNoIiwiY2FudmFzSW5kZXgiLCJjYW52YXMiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY29udGV4dENhY2hlIiwiZ2V0Q29udGV4dCIsInVwZGF0ZSIsImRyYXciLCJNYXRoIiwiUEkiLCJjb2xvciIsImNvbnRleHQiLCJjbGVhclJlY3QiLCJkcmF3V2F2ZSIsImFscGhhIiwiem9vbSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYmVnaW5QYXRoIiwiZHJhd1NpbmUiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwieEF4aXMiLCJmbG9vciIsInlBeGlzIiwieCIsInkiLCJzaW4iLCJtb3ZlVG8iLCJoZXhUb1JnYiIsImUiLCJhIiwicmVwbGFjZSIsImV4ZWMiLCJyIiwiZyIsImIiLCJjbGFtcCIsIm1pbiIsIm1heCIsImlzSW5BcnJheSIsImluZGV4T2YiLCJwSlMiLCJ3Iiwib2Zmc2V0V2lkdGgiLCJoIiwib2Zmc2V0SGVpZ2h0IiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsInBvbHlnb24iLCJuYl9zaWRlcyIsImltYWdlIiwic3JjIiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJhcnJheSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwYXJ0aWNsZXNfbmIiLCJtb3VzZSIsInJldGluYV9kZXRlY3QiLCJmbiIsImludGVyYWN0IiwidmVuZG9ycyIsInRtcCIsIk9iamVjdCIsImRlZXBFeHRlbmQiLCJvYmoiLCJzaXplX3ZhbHVlIiwic2l6ZV9hbmltX3NwZWVkIiwibGluZV9saW5rZWRfZGlzdGFuY2UiLCJsaW5lX2xpbmtlZF93aWR0aCIsIm1vZGVfZ3JhYl9kaXN0YW5jZSIsIm1vZGVfYnViYmxlX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfc2l6ZSIsIm1vZGVfcmVwdWxzZV9kaXN0YW5jZSIsInJldGluYUluaXQiLCJkZXZpY2VQaXhlbFJhdGlvIiwicHhyYXRpbyIsInJldGluYSIsImNhbnZhc0luaXQiLCJjdHgiLCJjYW52YXNTaXplIiwicGFydGljbGVzRW1wdHkiLCJwYXJ0aWNsZXNDcmVhdGUiLCJwYXJ0aWNsZXNEcmF3IiwiZGVuc2l0eUF1dG9QYXJ0aWNsZXMiLCJjYW52YXNQYWludCIsImZpbGxSZWN0IiwiY2FudmFzQ2xlYXIiLCJwYXJ0aWNsZSIsInJhZGl1cyIsInNpemVfc3RhdHVzIiwidnMiLCJjaGVja092ZXJsYXAiLCJBcnJheSIsInMiLCJyZ2IiLCJsIiwiaHNsIiwib3BhY2l0eV9zdGF0dXMiLCJ2byIsIm4iLCJ2eCIsInZ5IiwidnhfaSIsInZ5X2kiLCJjIiwibyIsImltZyIsInJhdGlvIiwiaW1nX3R5cGUiLCJzb3VyY2Vfc3ZnIiwiY3JlYXRlU3ZnSW1nIiwicHVzaGluZyIsImxvYWRlZCIsInByb3RvdHlwZSIsImRyYXdJbWFnZSIsInJhZGl1c19idWJibGUiLCJvcGFjaXR5X2J1YmJsZSIsImFyYyIsImRyYXdTaGFwZSIsImltZ19vYmoiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInBhcnRpY2xlc1VwZGF0ZSIsInhfbGVmdCIsInhfcmlnaHQiLCJ5X3RvcCIsInlfYm90dG9tIiwiZ3JhYlBhcnRpY2xlIiwiYnViYmxlUGFydGljbGUiLCJyZXB1bHNlUGFydGljbGUiLCJsaW5rUGFydGljbGVzIiwiYXR0cmFjdFBhcnRpY2xlcyIsImJvdW5jZVBhcnRpY2xlcyIsInBhcnRpY2xlc1JlZnJlc2giLCJjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lIiwiY2hlY2tBbmltRnJhbWUiLCJkcmF3QW5pbUZyYW1lIiwiY291bnRfc3ZnIiwic3RhcnQiLCJzcXJ0IiwiY29sb3JfcmdiX2xpbmUiLCJwdXNoUGFydGljbGVzIiwicG9zX3giLCJwb3NfeSIsInJlbW92ZVBhcnRpY2xlcyIsInNwbGljZSIsImJ1YmJsZV9kdXJhdGlvbl9lbmQiLCJwIiwiZCIsInYiLCJzdGF0dXMiLCJidWJibGVfY2xpY2tpbmciLCJjbGlja19wb3NfeCIsImNsaWNrX3Bvc195IiwiRGF0ZSIsImdldFRpbWUiLCJjbGlja190aW1lIiwiYXRhbjIiLCJ1IiwiY29zIiwicG93IiwicmVwdWxzZV9maW5pc2giLCJyZXB1bHNlX2NvdW50IiwicmVwdWxzZV9jbGlja2luZyIsIm0iLCJldmVudHNMaXN0ZW5lcnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWJzIiwiQmxvYiIsIlVSTCIsIndlYmtpdFVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkltYWdlIiwicmV2b2tlT2JqZWN0VVJMIiwiZGVzdHJveXBKUyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicEpTRG9tIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJleHBvcnRJbWciLCJvcGVuIiwidG9EYXRhVVJMIiwibG9hZEltZyIsImltZ19lcnJvciIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJyZXNwb25zZSIsImNoZWNrQmVmb3JlRHJhdyIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwicmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrIiwic3Vic3RyIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJjYWxsZWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJsb2FkIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFB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Q0FBTjtBQUEyQ3BVLFlBQU0sQ0FBQ3NDLFdBQVAsQ0FBbUJ3RixDQUFuQixFQUFxQmtHLENBQXJCLEdBQXdCcEksQ0FBQyxJQUFFQSxDQUFDLEVBQTVCO0FBQStCLEtBQTVGLE1BQWlHME8sT0FBTyxDQUFDQyxHQUFSLENBQVksd0NBQXNDNVYsQ0FBQyxDQUFDOFMsTUFBcEQsR0FBNEQ2QyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWixDQUE1RDtBQUE2RyxHQUFsUixFQUFtUjVWLENBQUMsQ0FBQzZWLElBQUYsRUFBblI7QUFBNFIsQ0FBajZDLEM7Ozs7Ozs7Ozs7OztBQ1J4anFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL19hc3NldHMvanMvbWFpbi5qc1wiKTtcbiIsIlNwbGl0dGluZyh7XG4gICAgd2hpdGVzcGFjZTogdHJ1ZVxufSkiLCJjb25zdCBjb3VudCA9IDc7XG5jb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgLy9mcmFnbWVudOS9nOaIkFxuXG4vLyBmYWxsaW5nLWJveFxuZm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgbGV0IHNlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0b3IuY2xhc3NOYW1lID0gXCJzZWN0b3JcIjtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VjdG9yKTtcblxuICBsZXQgcm90YXRlQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb3RhdGVCYWNrLmNsYXNzTmFtZSA9IFwicm90YXRlXCI7XG4gIHNlY3Rvci5hcHBlbmRDaGlsZChyb3RhdGVCYWNrKTtcblxuICBsZXQgZmFsbGluZ0xheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZhbGxpbmdMYXllci5jbGFzc05hbWUgPSBcImZhbGxpbmdcIjtcbiAgcm90YXRlQmFjay5hcHBlbmRDaGlsZChmYWxsaW5nTGF5ZXIpO1xuXG4gIGxldCBsaW5lSGl0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmVIaXRib3guY2xhc3NOYW1lID0gXCJsaW5lLWJveFwiO1xuICBmYWxsaW5nTGF5ZXIuYXBwZW5kQ2hpbGQobGluZUhpdGJveCk7XG5cbiAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGluZS5jbGFzc05hbWUgPSBcImxpbmUtYm94X19saW5lIGMtYmFsbFwiO1xuICBsaW5lSGl0Ym94LmFwcGVuZENoaWxkKGxpbmUpO1xufVxuY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlY3RvcicpO1xucGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxuXG5cbi8vIHBsYXlpbmctYm94XG5mb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICBsZXQgc2VjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rvci5jbGFzc05hbWUgPSBcInNlY3RvcjJcIjtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VjdG9yKTtcblxuICBsZXQgcm90YXRlQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb3RhdGVCYWNrLmNsYXNzTmFtZSA9IFwicm90YXRlMlwiO1xuICBzZWN0b3IuYXBwZW5kQ2hpbGQocm90YXRlQmFjayk7XG5cbiAgbGV0IGZhbGxpbmdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWxsaW5nTGF5ZXIuY2xhc3NOYW1lID0gXCJmYWxsaW5nMlwiO1xuICByb3RhdGVCYWNrLmFwcGVuZENoaWxkKGZhbGxpbmdMYXllcik7XG5cbiAgbGV0IGxpbmVIaXRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGluZUhpdGJveC5jbGFzc05hbWUgPSBcImxpbmUtYm94MlwiO1xuICBmYWxsaW5nTGF5ZXIuYXBwZW5kQ2hpbGQobGluZUhpdGJveCk7XG5cbiAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGluZS5jbGFzc05hbWUgPSBcImxpbmUtYm94X19saW5lMiBjLWJhbGxcIjtcbiAgbGluZUhpdGJveC5hcHBlbmRDaGlsZChsaW5lKTtcbn1cbmNvbnN0IHBhcmVudDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2VjdG9yLXBsYXknKTtcbnBhcmVudDIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuIiwiLy8g44OP44Oz44OQ44O844Ks44O844GM44Kv44Oq44OD44Kv44GV44KM44Gf44KJXG5jb25zdCBoYW1UcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbS10cmlnZ2VyJyk7XG5oYW1UcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgYm9keUZpeCgpO1xufSk7XG5cbi8vIExpc3TjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgolcbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWhhbS1jbG9zZVwiKTtcbm5hdkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUNoZWNrZWQoKTtcbiAgICByZW1vdmVGaXgoKTtcbiAgfSk7XG59KTtcblxuLy8g44Km44Kj44Oz44OJ44Km5bmF44GM5YiH44KK5pu/44KP44Gj44Gf44KJXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICByZW1vdmVDaGVja2VkKCk7XG4gIHJlbW92ZUZpeCgpO1xufSk7XG5cblxuXG5cbi8vIC0tLS0tLS0tZnVuY3Rpb24tLS0tLS0tLS0tLS1cbi8vIOODgeOCp+ODg+OCr+ODnOODg+OCr+OCuVxuY29uc3QgcmVtb3ZlQ2hlY2tlZCA9ICgpID0+IHtcbiAgaGFtVHJpZ2dlci5jaGVja2VkID0gZmFsc2U7XG59O1xuXG4vLyDjg5zjg4fjgqPlm7rlrppcbmNvbnN0IG15Qm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBteUJvZHlDbGFzcyA9IG15Qm9keS5jbGFzc0xpc3Q7XG5jb25zdCBib2R5Rml4ID0gKCkgPT4ge1xuICBsZXQgbXlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gIGlmICghbXlCb2R5Q2xhc3MuY29udGFpbnMoXCJpcy1maXhcIikpIHsgLy9pcy1maXjjgYzjgarjgZHjgozjgbBcbiAgICBhZGRGaXgoKTtcbiAgICBteUJvZHkuc3R5bGUudG9wID0gYC0ke215UG9zaXRpb259cHhgO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNjcm9sbFkgPSBteUJvZHkuc3R5bGUudG9wOy8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruiomOaGtlxuICAgIHJlbW92ZUZpeCgpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChzY3JvbGxZIHx8ICcwJykgKiAtMSk7Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu5L+d5oyBXG4gIH07XG59XG5cbmNvbnN0IHJlbW92ZUZpeCA9ICgpID0+IHtcbiAgbXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1maXgnKTtcbiAgbXlCb2R5LnN0eWxlLnRvcCA9IFwiXCI7XG59XG5jb25zdCBhZGRGaXggPSAoKSA9PiB7XG4gIG15Qm9keUNsYXNzLmFkZCgnaXMtZml4Jyk7XG59XG5cblxuXG5cbiIsIi8vIOOCueOCr+ODreODvOODq+OBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cbi8vIOODreODvOODieOBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcblx0aGVhZGVyQmFja0Rvd24oKTtcbn0pO1xuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8g6Zai5pWwXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAqKlxuLy8gcC1oZWFkZXI644K544Kv44Ot44O844Or44GX44Gf44KJ5raI44GI44KLXG4vLyAqKlxuY29uc3QgbXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXAtaGVhZGVyXCIpO1xuY29uc3QgaGVhZGVyQ2xhc3MgPSBteUhlYWRlci5jbGFzc0xpc3Q7XG5jb25zdCBoZWFkZXJGYWRlUG9zaXRpb24gPSA1MDsvL+OCueOCr+ODreODvOODq+OBl+OBpuODmuODvOOCuOODiOODg+ODl+OBi+OCieOAh+OAh+OBq+mBlOOBl+OBn+OBqOOBjVxuXG5jb25zdCBoZWFkZXJGYWRlID0gKCkgPT4ge1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGlmIChzY3JvbGxUb3AgPj0gaGVhZGVyRmFkZVBvc2l0aW9uKSB7XG5cdFx0aGVhZGVyQ2xhc3MuYWRkKCdpcy1mYWRlJyk7XG5cdH0gZWxzZSB7XG5cdFx0aGVhZGVyQ2xhc3MucmVtb3ZlKCdpcy1mYWRlJyk7XG5cdH07XG59O1xuXG4vLyAqKlxuLy8gcC1oZWFkZXItYmFjazrjgrnjgq/jg63jg7zjg6vpgJTkuK3jgaflh7rnj75cbi8vICoqXG5jb25zdCBsYXlvdXRIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbC1oZWFkZXInKTtcbmNvbnN0IGxheW91dEhlYWRlckNsYXNzID0gbGF5b3V0SGVhZGVyLmNsYXNzTGlzdDtcblxuY29uc3QgaGVhZGVyQmFja0Rvd24gPSAoKSA9PiB7XG5cdGxldCBteVRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya3NcIik7XG5cdGxldCByZWN0ID0gbXlUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0bGV0IHRhcmdldFRvcCA9IHJlY3QudG9wICsgc2Nyb2xsVG9wO1xuXG5cdGlmIChzY3JvbGxUb3AgPj0gdGFyZ2V0VG9wKSB7XG5cdFx0aGVhZGVyQ2xhc3MucmVtb3ZlKCdwLWhlYWRlci0tdG9wJywgXCJpcy1mYWRlXCIpOy8vIOOCr+ODqeOCueWQjemZpOWOuyAgXCJVcE1vdmVcIlxuXHRcdGhlYWRlckNsYXNzLmFkZCgncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3ov73liqAgICdEb3duTW92ZSdcblx0XHRsYXlvdXRIZWFkZXJDbGFzcy5hZGQoJ2JhY2snKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblxuXHR9IGVsc2Uge1xuXHRcdGlmIChsYXlvdXRIZWFkZXJDbGFzcy5jb250YWlucygnYmFjaycpKSB7Ly/jgZnjgafjgavjgq/jg6njgrnlkI3jgYzjgaTjgYTjgabjgYTjgZ/jgokgXCJEb3duTW92ZVwiXG5cdFx0XHRsYXlvdXRIZWFkZXJDbGFzcy5yZW1vdmUoJ2JhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLnJlbW92ZSgncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrsgJ0Rvd25Nb3ZlJ1xuXHRcdFx0aGVhZGVyQ2xhc3MuYWRkKCdwLWhlYWRlci0tdG9wJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgICAnVXBNb3ZlJ1xuXHRcdH1cblx0fVxufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAvLyDjgqbjgqPjg7Pjg4njgqbluYXjgYzliIfjgormm7/jgo/jgaPjgZ/jgonplqLmlbDlkbzjgbPlh7rjgZdcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4vLyBcdHJlc2l6ZVJlbW92ZUNsYXNzKCk7Ly9pcy1vcGVuLCBpcy1jbG9zZeOCkuWkluOBmVxuLy8gXHRib2R5Rml4ZWROb25lKCk7Ly9ib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vIH0pO1xuXG5cbi8vICoqXG4vLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg5zjgr/jg7PvvJrjgr/jg4Pjg4Ev44Kv44Oq44OD44KvXG4vLyAqKlxuLy8gY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWhhbWJ1cmdlcicpO1xuLy8gY29uc3QgaGFtYnVyZ2VyQ2xhc3MgPSBoYW1idXJnZXIuY2xhc3NMaXN0O1xuLy8gY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQuYm9keTtcbi8vIGNvbnN0IG15Qm9keUNsYXNzID0gbXlCb2R5LmNsYXNzTGlzdDtcblxuLy8gaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuLy8gXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuLy8gXHRoYW1idXJnZXJDbGljaygpO1xuLy8gfSk7XG5cbi8vIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vIFx0aGFtYnVyZ2VyQ2xpY2soKTtcbi8vIH0pO1xuXG5cbi8vICoqXG4vLyDjg4rjg5PjgrLjg7zjgrfjg6fjg7Pjga7jg6rjgrnjg4jjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgolpcy1vcGVu44KS5raI44GZ77ya44K/44OD44OBL+OCr+ODquODg+OCr1xuLy8gKipcbi8vIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWhhbS1jbG9zZVwiKTtcblxuLy8gbmF2TGlzdC5mb3JFYWNoKChlbG0pID0+IHtcbi8vIFx0ZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuLy8gXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4vLyBcdFx0bmF2Q2xpY2soKTsvLyBpcy1vcGVu44KS5aSW44GZLGlzLWNsb3Nl44KS5LuY44GR44KLLGJvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gXHR9KTtcbi8vIH0pO1xuXG4vLyBuYXZMaXN0LmZvckVhY2goKGVsbSkgPT4ge1xuLy8gXHRlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyBcdFx0bmF2Q2xpY2soKTtcbi8vIFx0fSk7XG4vLyB9KTtcblxuXG5cbi8vIGNvbnN0IGhhbWJ1cmdlckNsaWNrID0gKCkgPT4ge1xuLy8gXHRsZXQgbXlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4vLyBcdGlmIChoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLWNsb3NlXCIpKSB7Ly9pcy1jbG9zZeOBjOOBguOBo+OBn+OCiVxuLy8gXHRcdHJlbW92ZUNsb3NlKCk7Ly9pcy1jbG9zZeOCkuWkluOBmVxuLy8gXHR9IGVsc2Uge1xuXG4vLyBcdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkgey8vaXMtb3BlbuOBjOOBguOBo+OBn+OCiVxuLy8gXHRcdFx0Y29uc3Qgc2Nyb2xsWSA9IG15Qm9keS5zdHlsZS50b3A7Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu6KiY5oa2XG4vLyBcdFx0XHRyZW1vdmVPcGVuKCk7Ly8gaXMtb3BlbuOCkuWkluOBmVxuLy8gXHRcdFx0YWRkQ2xvc2UoKTsvLyBpcy1jbG9zZeOCkuS7mOOBkeOCi1xuLy8gXHRcdFx0Ym9keUZpeGVkTm9uZSgpOy8vIGJvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHNjcm9sbFkgfHwgJzAnKSAqIC0xKTsvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7kv53mjIFcbi8vIFx0XHR9XG4vLyBcdH07XG5cbi8vIFx0Ly8gaXMtY2xvc2XjgoJpcy1vcGVu44KC44Gq44GL44Gj44Gf44KJXG4vLyBcdGlmICghaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1jbG9zZVwiKSAmJiAhaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7XG4vLyBcdFx0YWRkT3BlbigpOy8vaXMtb3BlbuOCkuOBpOOBkeOCi1xuLy8gXHRcdG15Qm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbi8vIFx0XHRteUJvZHkuc3R5bGUudG9wID0gYC0ke215UG9zaXRpb259cHhgO1xuLy8gXHR9O1xuLy8gfTtcblxuXG4vLyAvLyAqKlxuLy8gLy/jgqbjgqPjg7Pjg4njgqbluYXjgYzliIfjgormm7/jgo/jgaPjgZ/jgonjgIFpcy1vcGVufHxpcy1jbG9zZeOCkuWkluOBmVxuLy8gLy8gKipcbi8vIGNvbnN0IG1vb25NaW5pU2l6ZSA9IDU3MDtcbi8vIGNvbnN0IHJlc2l6ZVJlbW92ZUNsYXNzID0gKCkgPT4ge1xuLy8gXHRsZXQgeCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4vLyBcdGlmICh4ID49IG1vb25NaW5pU2l6ZSkge1xuLy8gXHRcdGlmIChoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHsvL2lzLW9wZW7jgYzjgYLjgaPjgZ/jgolcbi8vIFx0XHRcdHJlbW92ZU9wZW4oKTsvLyBpcy1vcGVu44KS5aSW44GZXG4vLyBcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdGlmIChoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLWNsb3NlXCIpKSB7Ly9pcy1jbG9zZeOBjOOBguOBo+OBn+OCiVxuLy8gXHRcdFx0XHRyZW1vdmVDbG9zZSgpOy8vaXMtY2xvc2XjgpLlpJbjgZlcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdH1cbi8vIH07XG5cblxuLy8gLy8gKipcbi8vIC8vIGlzLWNsb3Nl44KS5aSW44GZXG4vLyAvLyAqKlxuLy8gY29uc3QgcmVtb3ZlQ2xvc2UgPSAoKSA9PiB7XG4vLyBcdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtY2xvc2UnKTtcbi8vIFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuLy8gfTtcblxuLy8gLy8gKipcbi8vIC8vIGlzLWNsb3Nl44KS5LuY44GR44KLXG4vLyAvLyAqKlxuLy8gY29uc3QgYWRkQ2xvc2UgPSAoKSA9PiB7XG4vLyBcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcbi8vIFx0bXlCb2R5Q2xhc3MuYWRkKCdpcy1jbG9zZScpO1xuLy8gfTtcblxuLy8gLy8gKipcbi8vIC8vIGlzLW9wZW7jgpLlpJbjgZlcbi8vIC8vICoqXG4vLyBjb25zdCByZW1vdmVPcGVuID0gKCkgPT4ge1xuLy8gXHRoYW1idXJnZXJDbGFzcy5yZW1vdmUoJ2lzLW9wZW4nKTtcbi8vIFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG4vLyB9O1xuXG4vLyAvLyAqKlxuLy8gLy8gaXMtb3BlbuOCkuS7mOOBkeOCi1xuLy8gLy8gKipcbi8vIGNvbnN0IGFkZE9wZW4gPSAoKSA9PiB7XG4vLyBcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtb3BlbicpO1xuLy8gXHRteUJvZHlDbGFzcy5hZGQoJ2lzLW9wZW4nKTtcbi8vIH07XG5cblxuLy8gLy8gKipcbi8vIC8vIGJvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gLy8gKipcbi8vIGNvbnN0IGJvZHlGaXhlZE5vbmUgPSAoKSA9PiB7XG4vLyBcdG15Qm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4vLyBcdG15Qm9keS5zdHlsZS50b3AgPSBcIlwiO1xuLy8gXHRteUJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IFwiXCI7XG4vLyB9O1xuXG4vLyAvLyAqKlxuLy8gLy8g44OK44OT44Ky44O844K344On44Oz44Kv44Oq44OD44Kv44G+44Go44KBXG4vLyAvLyAqKlxuLy8gY29uc3QgbmF2Q2xpY2sgPSAoKSA9PiB7XG4vLyBcdHJlbW92ZU9wZW4oKTsvLyBpcy1vcGVu44KS5aSW44GZXG4vLyBcdGFkZENsb3NlKCk7Ly8gaXMtY2xvc2XjgpLku5jjgZHjgotcbi8vIFx0Ym9keUZpeGVkTm9uZSgpOy8vYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyB9O1xuXG5cblxuXG4iLCIvLyAqKiBwYXJ0aWNsZXMuanPjgpLkvb/jgYYgKipcbmNvbnN0IG15UGFydGljbGVJRCA9IFwianMtbWlsa3ktd2F5LXBhcnRpY2xlXCI7XG5jb25zdCBwYXJ0aWNsZV9zaGFwZSA9IFwic3RhclwiOyAvL+OCt+OCp+OCpOODl+OBruW9ou+8iGNpcmNsZTrkuLjjgIFlZGdlOuWbm+inkuOAgXRyaWFuZ2xlOuS4ieinkuOAgXBvbHlnb2465aSa6KeS5b2i44CBc3RhcjrmmJ/lnovjgIFpbWFnZTrnlLvlg4/vvIlcbmNvbnN0IG51bU9mU3RhcnMgPSA0MDA7IC8v5pif44Gu5pWwXG5jb25zdCBjb2xvck9mU3RhcnMgPSAnI2ZmZmY1NSc7IC8v5pif44Gu6ImyXG5jb25zdCBvcGFjaXR5T2ZTdGFycyA9IDAuNDsgLy/mmJ/jga7pgI/mmI7luqZcbmNvbnN0IHNpemVPZlN0YXJzID0gMzsgLy/mmJ/jga7lpKfjgY3jgZVcbmNvbnN0IG1vdmVfZGlyZWN0aW9uID0gXCJyaWdodFwiOyAvL+a1geOCjOOBruWQkeOBjShub25l44CBdG9w44CBdG9wLXJpZ2h044CBcmlnaHTjgIFib3R0b20tcmlnaHTjgIFib3R0b23jgIFib3R0b20tbGVmdOOAgWxlZnTjgIF0b3AtbGVmdOOCiOOCiumBuOaKnilcbmNvbnN0IG1vdmVfc3BlZWQgPSAxOyAgLy/jgrfjgqfjgqTjg5fjga7li5XjgY/jgrnjg5Tjg7zjg4lcblxucGFydGljbGVzSlMobXlQYXJ0aWNsZUlELCB7XG4gIFwicGFydGljbGVzXCI6IHtcbiAgICBcIm51bWJlclwiOiB7XG4gICAgICBcInZhbHVlXCI6IG51bU9mU3RhcnMsXG4gICAgICBcImRlbnNpdHlcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwidmFsdWVcIjogY29sb3JPZlN0YXJzLFxuICAgIH0sXG4gICAgXCJzaGFwZVwiOiB7XG4gICAgICBcInR5cGVcIjogcGFydGljbGVfc2hhcGUsXG4gICAgICBcInN0cm9rZVwiOiB7IC8v5aSW57eaXG4gICAgICAgIFwid2lkdGhcIjogMCxcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZcIlxuICAgICAgfSxcbiAgICAgIC8vIFwicG9seWdvblwiOiB7IC8vdHlwZeOCknBvbHlnb27jgavjgZfjgZ/jgajjgY3jga7oqK3lrppcbiAgICAgIC8vICAgXCJuYl9zaWRlc1wiOiA1XG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJpbWFnZVwiOiB7IC8vdHlwZeOCkmltYWdl44Gr44GX44Gf44Go44GN44Gu6Kit5a6aXG4gICAgICAvLyAgIFwic3JjXCI6IFwiXCIsXG4gICAgICAvLyAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgLy8gICBcImhlaWdodFwiOiAxMDBcbiAgICAgIC8vIH1cbiAgICB9LFxuICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICBcInZhbHVlXCI6IG9wYWNpdHlPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcbiAgICAgIFwiYW5pbVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsIC8v44K344Kn44Kk44OX44Gu6YCP5piO5bqm44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwic3BlZWRcIjogMSxcbiAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLjIsIC8v6YCP5piO5bqm44Gu5pyA5bCP5YCkXG4gICAgICAgIFwic3luY1wiOiBmYWxzZSAvL+WFqOOBpuOBruOCt+OCp+OCpOODl+OCkuWQjOaZguOBq+OCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaXplXCI6IHtcbiAgICAgIFwidmFsdWVcIjogc2l6ZU9mU3RhcnMsXG4gICAgICBcInJhbmRvbVwiOiB0cnVlLCAvL+OCt+OCp+OCpOODl+OBruWkp+OBjeOBleOCkuODqeODs+ODgOODoOOBq+OBmeOCi1xuICAgICAgXCJhbmltXCI6IHsgLy/jgrfjgqfjgqTjg5fjga7lpKfjgY3jgZXjgpLjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJzcGVlZFwiOiAxLFxuICAgICAgICBcInNpemVfbWluXCI6IDAuMiwgLy/lpKfjgY3jgZXjga7mnIDlsI/lgKRcbiAgICAgICAgXCJzeW5jXCI6IGZhbHNlIC8v5YWo44Gm44Gu44K344Kn44Kk44OX44KS5ZCM5pmC44Gr44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICB9XG4gICAgfSxcbiAgICBcImxpbmVfbGlua2VkXCI6IHtcbiAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLC8vIOaYn+OBqOaYn+OCkue3muOBp+e1kOOBtlxuICAgICAgLy8gXCJkaXN0YW5jZVwiOiA1MDAsXG4gICAgICAvLyBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgLy8gXCJvcGFjaXR5XCI6IDAuNCxcbiAgICAgIC8vIFwid2lkdGhcIjogMlxuICAgIH0sXG4gICAgXCJtb3ZlXCI6IHtcbiAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICBcInNwZWVkXCI6IG1vdmVfc3BlZWQsXG4gICAgICBcImRpcmVjdGlvblwiOiBtb3ZlX2RpcmVjdGlvbixcbiAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxuICAgICAgXCJzdHJhaWdodFwiOiB0cnVlLFxuICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLCAvL+OCqOODquOCouWkluOBq+WHuuOBn+OCt+OCp+OCpOODl+OBruWLleOBjShvdXTjgIFib3VuY2Xjgojjgorpgbjmip4pXG4gICAgICBcImJvdW5jZVwiOiBmYWxzZSxcbiAgICAgIFwiYXR0cmFjdFwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInJvdGF0ZVhcIjogMTAwMCxcbiAgICAgICAgXCJyb3RhdGVZXCI6IDEwMDBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwiaW50ZXJhY3Rpdml0eVwiOiB7XG4gICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcbiAgICBcImV2ZW50c1wiOiB7XG4gICAgICBcIm9uaG92ZXJcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcIm1vZGVcIjogXCJidWJibGVcIiAvL+ODnuOCpuOCueOCquODvOODkOODvOaZguOBq+eZuuWLleOBmeOCi+WLleOBjSjkuIvoqJhtb2Rlc+WGheOBrmdyYWLjgIFyZXB1bHNl44CBYnViYmxl44KI44KK6YG45oqeKVxuICAgICAgfSxcbiAgICAgIC8vIFwib25jbGlja1wiOiB7XG4gICAgICAvLyAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAvLyAgIFwibW9kZVwiOiBcImJ1YmJsZVwiIC8v44Kv44Oq44OD44Kv5pmC44Gr55m65YuV44GZ44KL5YuV44GNKOS4i+iomG1vZGVz5YaF44GuZ3JhYuOAgXJlcHVsc2XjgIFidWJibGXjgIFwdXNo44CBcmVtb3Zl44KI44KK6YG45oqeKVxuICAgICAgLy8gfSxcbiAgICAgIFwicmVzaXplXCI6IHRydWUgLy9jYW52YXPjga7jgrXjgqTjgrrlpInmm7Tjgavjgo/jgZvjgabmi6HlpKfnuK7lsI/jgZnjgotcbiAgICB9LFxuICAgIFwibW9kZXNcIjoge1xuICAgICAgLy8gXCJncmFiXCI6IHsgLy/jgqvjg7zjgr3jg6vjgajjgrfjgqfjgqTjg5fjga7plpPjgavnt5rjgYzooajnpLrjgZXjgozjgotcbiAgICAgIC8vICAgXCJkaXN0YW5jZVwiOiA0MDAsIC8v44Kr44O844K944Or44GL44KJ44Gu5Y+N5b+c6Led6ZuiXG4gICAgICAvLyAgIFwibGluZV9saW5rZWRcIjoge1xuICAgICAgLy8gICAgIFwib3BhY2l0eVwiOiAwLjVcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSxcbiAgICAgIFwiYnViYmxlXCI6IHsgLy/jgrfjgqfjgqTjg5fjgYzohqjjgonjgoBcbiAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXG4gICAgICAgIFwic2l6ZVwiOiA1LFxuICAgICAgICBcImR1cmF0aW9uXCI6IDAuMywgLy/ohqjjgonjgoDjgrfjgqfjgqTjg5fjga7mjIHntprmmYLplpMob25jbGlja+aZguOBruOBvylcbiAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgIFwic3BlZWRcIjogMyAvL+iGqOOCieOCgOOCt+OCp+OCpOODl+OBrumAn+W6pihvbmNsaWNr5pmC44Gu44G/KVxuICAgICAgfSxcbiAgICAgIC8vIFwicmVwdWxzZVwiOiB7IC8v44K344Kn44Kk44OX44GM44Kr44O844K944Or44GL44KJ6YCD44GS44KLXG4gICAgICAvLyAgIFwiZGlzdGFuY2VcIjogMjAwLCAvL+OCq+ODvOOCveODq+OBi+OCieOBruWPjeW/nOi3nembolxuICAgICAgLy8gICBcImR1cmF0aW9uXCI6IDAuNFxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwicHVzaFwiOiB7IC8v44K344Kn44Kk44OX44GM5aKX44GI44KLXG4gICAgICAvLyAgIFwicGFydGljbGVzX25iXCI6IDQgLy/lopfjgYjjgovjgrfjgqfjgqTjg5fjga7mlbBcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcInJlbW92ZVwiOiB7XG4gICAgICAvLyAgIFwicGFydGljbGVzX25iXCI6IDIgLy/muJvjgovjgrfjgqfjgqTjg5fjga7mlbBcbiAgICAgIC8vIH1cbiAgICB9XG4gIH0sXG4gIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlIC8vUmV0aW5hIERpc3BsYXnjgavlr77lv5zjgZnjgotcbn0pO1xuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG5cblxuXG5cblxuXG4vLyAqKiBjYW52YXPkvb/jgYbloLTlkIggKipcbi8vIGZ1bmN0aW9uIHJhbmRvbShsb3csIGhpZ2gpIHtcbi8vICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdykgKyBsb3c7XG4vLyB9XG5cbi8vIGNsYXNzIFZpc3VhbCB7XG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcy1taWxreS13YXknKTtcbi8vICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIHRoaXMuY2FudmFzV2lkdGggPSAwO1xuLy8gICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gMDtcbi8vICAgICB0aGlzLnBhcnRpY2xlTGVuZ3RoID0gNTAwO1xuLy8gICAgIHRoaXMucGFydGljbGVzID0gW107XG4vLyAgICAgdGhpcy5wYXJ0aWNsZU1heFJhZGl1cyA9IDI7XG5cbi8vICAgICB0aGlzLmluaXRpYWxpemUoKTtcbi8vICAgICB0aGlzLnJlbmRlcigpO1xuLy8gICB9XG5cbi8vICAgaW5pdGlhbGl6ZSgpIHtcbi8vICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHRoaXMuY3JlYXRlUGFydGljbGUoaSkpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIHJlc2l6ZUNhbnZhcygpIHtcbi8vICAgICB0aGlzLmNhbnZhc1dpZHRoID0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbi8vICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IDIwMDtcbi8vICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbi8vICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhc0hlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuLy8gICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4vLyAgIH1cblxuLy8gICBjcmVhdGVQYXJ0aWNsZShpZCwgaXNSZWNyZWF0ZSkge1xuLy8gICAgIGNvbnN0IHJhZGl1cyA9IHJhbmRvbSgwLjUsIHRoaXMucGFydGljbGVNYXhSYWRpdXMpO1xuLy8gICAgIGNvbnN0IHggPSBpc1JlY3JlYXRlID8gLXJhZGl1cyAtIHJhbmRvbSgwLCB0aGlzLmNhbnZhc1dpZHRoKSA6IHJhbmRvbSgwLCB0aGlzLmNhbnZhc1dpZHRoKTtcbi8vICAgICBsZXQgeSA9IHJhbmRvbSh0aGlzLmNhbnZhc0hlaWdodCAvIDIgLSAxNTAsIHRoaXMuY2FudmFzSGVpZ2h0IC8gMiArIDE1MCk7XG4vLyAgICAgeSArPSByYW5kb20oLTEwMCwgMTAwKTtcbi8vICAgICBjb25zdCBhbHBoYSA9IHJhbmRvbSgwLjA1LCAxKTtcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBpZDogaWQsXG4vLyAgICAgICB4OiB4LFxuLy8gICAgICAgeTogeSxcbi8vICAgICAgIHN0YXJ0WTogeSxcbi8vICAgICAgIHJhZGl1czogcmFkaXVzLFxuLy8gICAgICAgZGVmYXVsdFJhZGl1czogcmFkaXVzLFxuLy8gICAgICAgc3RhcnRBbmdsZTogMCxcbi8vICAgICAgIGVuZEFuZ2xlOiBNYXRoLlBJICogMixcbi8vICAgICAgIGFscGhhOiBhbHBoYSxcbi8vICAgICAgIC8vIGNvbG9yOiB7IHI6IHJhbmRvbSgyNTUsIDApLCBnOiByYW5kb20oMjU1LCAwKSwgYjogMCB9LFxuLy8gICAgICAgc3BlZWQ6IGFscGhhICsgMSwgLy/jg57jgqTjg4rjgrnjgavjgZnjgovjgajlj7PjgYvjgonlt6Zcbi8vICAgICAgIGFtcGxpdHVkZTogcmFuZG9tKDUwLCAyMDApLFxuLy8gICAgICAgaXNCdXJzdDogZmFsc2Vcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgZHJhd1BhcnRpY2xlcygpIHtcbi8vICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbi8vICAgICAgIC8vIOS9jee9ruaDheWgseabtOaWsFxuLy8gICAgICAgdGhpcy5tb3ZlUGFydGljbGUocGFydGljbGUpO1xuXG4vLyAgICAgICAvLyBwYXJ0aWNsZeaPj+eUu1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwyNTUsMCwgLjUpYDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1KSc7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IDA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Qmx1ciA9IDMwO1xuXG4vLyAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoJHtwYXJ0aWNsZS5jb2xvci5yfSwgJHtwYXJ0aWNsZS5jb2xvci5nfSwgJHtwYXJ0aWNsZS5jb2xvci5ifSwgJHtwYXJ0aWNsZS5hbHBoYX0pYDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5hcmMocGFydGljbGUueCwgcGFydGljbGUueSwgcGFydGljbGUucmFkaXVzLCBwYXJ0aWNsZS5zdGFydEFuZ2xlLCBwYXJ0aWNsZS5lbmRBbmdsZSk7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuLy8gICAgIH0pO1xuLy8gICB9XG5cbi8vICAgbW92ZVBhcnRpY2xlKHBhcnRpY2xlKSB7XG4vLyAgICAgcGFydGljbGUueCArPSBwYXJ0aWNsZS5zcGVlZDtcbi8vICAgICBwYXJ0aWNsZS55ID0gcGFydGljbGUuc3RhcnRZICsgcGFydGljbGUuYW1wbGl0dWRlICogTWF0aC5zaW4oKChwYXJ0aWNsZS54IC8gNSkgKiBNYXRoLlBJKSAvIDE4MCk7XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgLy8gY2FudmFz5Yid5pyf5YyWXG4vLyAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoICsgdGhpcy5wYXJ0aWNsZU1heFJhZGl1cyAqIDIsIHRoaXMuY2FudmFzSGVpZ2h0KTtcblxuLy8gICAgIC8vIHBhcnRpY2xl44KS5o+P55S7XG4vLyAgICAgdGhpcy5kcmF3UGFydGljbGVzKCk7XG5cbi8vICAgICAvLyDnlLvpnaLjgYvjgonmtojjgYjjgZ/jgonmlrDjgZfjgYRwYXJ0aWNsZeOBq+W3ruOBl+abv+OBiFxuLy8gICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xuLy8gICAgICAgaWYgKHBhcnRpY2xlLnggLSBwYXJ0aWNsZS5yYWRpdXMgPj0gdGhpcy5jYW52YXNXaWR0aCkge1xuLy8gICAgICAgICB0aGlzLnBhcnRpY2xlc1twYXJ0aWNsZS5pZF0gPSB0aGlzLmNyZWF0ZVBhcnRpY2xlKHBhcnRpY2xlLmlkLCB0cnVlKTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcblxuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbi8vICAgfVxuLy8gfVxuLy8gbmV3IFZpc3VhbCgpO1xuXG5cblxuXG4vLyBkaXYyMDDnlJ/miJBcbi8vIGNvbnN0IGNvdW50ID0gMjAwO1xuLy8gbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1taWxreS13YXknKTtcbi8vIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgLy9mcmFnbWVudOS9nOaIkFxuXG4vLyBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4vLyAgIGxldCBtaWxrZXlXYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5V2F5LmNsYXNzTmFtZSA9IFwicC1taWxreS13YXlcIjtcblxuLy8gICBsZXQgbWlsa2V5TW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlNb3ZlLmNsYXNzTmFtZSA9IFwibWlsa3ktbW92ZVwiO1xuXG4vLyAgIGxldCBtaWxrZXlTdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleVN0YXIuY2xhc3NOYW1lID0gXCJtaWxreS1zdGFyXCI7XG5cbi8vICAgbWlsa2V5TW92ZS5hcHBlbmRDaGlsZChtaWxrZXlTdGFyKTtcbi8vICAgbWlsa2V5V2F5LmFwcGVuZENoaWxkKG1pbGtleU1vdmUpO1xuLy8gICBmcmFnbWVudC5hcHBlbmRDaGlsZChtaWxrZXlXYXkpO1xuLy8gfVxuXG4vLyBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpOyIsIi8vIGRhdGHlsZ7mgKdcbi8vIGRhdGEtc2FfbWFyZ2lu77ya6KGo56S644K/44Kk44Of44Oz44Kw44KS5L2N572u44Gn44Ga44KJ44GZXG4vLyBkYXRhLXNhX3RyaWdnZXLvvJrooajnpLrjgr/jgqTjg5/jg7PjgrDjga7ln7rmupbopoHntKDjgpLmjIflrppcbi8vIGRhdGEtc2FfZGVsYXnvvJrooajnpLrjgr/jgqTjg5/jg7PjgrDjgpLmmYLplpPjgafjgZrjgonjgZlcblxuXG5sZXQgQW5pbUNsYXNzID0gJ2pzLXNjcm9sbC1zaG93JztcbmxldCBzY3JvbGxBbmltYXRpb25TaG93Q2xhc3MgPSAnc2hvdyc7XG5sZXQgdHJpZ2dlck1hcmdpbkRlZmF1bHQgPSAyMDA7XG5cbmxldCBzY3JvbGxBbmltRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBBbmltQ2xhc3MpO1xubGV0IHNjcm9sbEFuaW1hdGlvbkZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxBbmltRWxtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0cmlnZ2VyTWFyZ2luID0gdHJpZ2dlck1hcmdpbkRlZmF1bHQ7XG4gICAgICAgIGxldCBlbG0gPSBzY3JvbGxBbmltRWxtW2ldO1xuICAgICAgICBsZXQgc2hvd1BvcyA9IDA7XG5cbiAgICAgICAgLy8gbWFyZ2lu44Gn44Ga44KJ44GZ5aC05ZCIXG4gICAgICAgIGlmIChlbG0uZGF0YXNldC5qc19kYXRhbWFyZ2luICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRyaWdnZXJNYXJnaW4gPSBwYXJzZUludChlbG0uZGF0YXNldC5qc19tYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJpZ2dlcuOBjOOBguOCi+WgtOWQiFxuICAgICAgICBpZiAoZWxtLmRhdGFzZXQuanNfdHJpZ2dlcikge1xuICAgICAgICAgICAgc2hvd1BvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxtLmRhdGFzZXQuanNfdHJpZ2dlcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdHJpZ2dlck1hcmdpbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dQb3MgPSBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdHJpZ2dlck1hcmdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaZgumWk+OBp+OBmuOCieOBmeWgtOWQiFxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gc2hvd1Bvcykge1xuICAgICAgICAgICAgbGV0IGRlbGF5ID0gKGVsbS5kYXRhc2V0LmpzX2RlbGF5KSA/IGVsbS5kYXRhc2V0LmpzX2RlbGF5IDogMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQW5pbUVsbVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgfS5iaW5kKG51bGwsIGkpLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNjcm9sbEFuaW1hdGlvbkZ1bmMpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEFuaW1hdGlvbkZ1bmMpO1xuIiwibGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5qcy1zd2lwZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDIwLC8v44K544Op44Kk44OJ44Gu6ZaT44Gu6Led6ZuiXG4gICAgZWZmZWN0OiAnZmFkZScsXG4gICAgbG9vcDogdHJ1ZSwvL+acgOW+jOOBq+mBlOOBl+OBn+OCieWFiOmgreOBq+aIu+OCi1xuICAgIHNwZWVkOiAzMDAsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcblxuICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgZm9yY2VUb0F4aXM6IGZhbHNlLFxuICAgIH0sXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJywvL+ODmuODvOOCuOODjeODvOOCt+ODp+ODs+OBruimgee0oFxuICAgICAgICBjbGlja2FibGU6IHRydWUsLy/jgq/jg6rjg4Pjgq/jgavlj43lv5zjgZXjgZvjgotcbiAgICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLC8v44Oa44O844K444ON44O844K344On44Oz44Gr5by35byx44GM44Gk44GPXG4gICAgfSxcblxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfVxufSk7IiwiLy8g6YqA5rKz6YmE6YGT44KS5Zu65a6a44GZ44KLXG5jb25zdCBteVRyYWluID0galF1ZXJ5KFwiLmpzLXRyYWluXCIpO1xuY29uc3QgdHJhaW5fcG9zID0gbXlUcmFpbi5vZmZzZXQoKS50b3A7XG5jb25zdCB0cmFpbl9oZWlnaHQgPSBteVRyYWluLm91dGVySGVpZ2h0KCk7XG5cblxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gdHJhaW5fcG9zICsgMjIpIHtcbiAgICAgICAgICAgIG15VHJhaW4uYWRkQ2xhc3MoXCJmaXhlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG15VHJhaW4ucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiLy8gSFRNTOOBrjxjYW52YXM+44K/44Kw44GrSmF2YVNjcmlwdOOCkuS9v+OBhOazou+8iOWhl+OCiu+8ieOCkuaPj+eUu+OBmeOCi1xuXG5sZXQgdW5pdCA9IDEwMCxcbiAgICBjYW52YXNMaXN0LCAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7phY3liJdcbiAgICBpbmZvID0ge30sIC8vIOWFqOOCreODo+ODs+ODkOOCueWFsemAmuOBruaPj+eUu+aDheWgsVxuICAgIGNvbG9yTGlzdDsgLy8g5ZCE44Kt44Oj44Oz44OQ44K544Gu6Imy5oOF5aCxXG5cbi8qKlxuICogSW5pdCBmdW5jdGlvbi5cbiAqIFxuICogSW5pdGlhbGl6ZSB2YXJpYWJsZXMgYW5kIGJlZ2luIHRoZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5mby5zZWNvbmRzID0gMDtcbiAgICBpbmZvLnQgPSAwO1xuICAgIGNhbnZhc0xpc3QgPSBbXTtcbiAgICBjb2xvckxpc3QgPSBbXTtcbiAgICAvLyBjYW52YXMx5YCL44KB44Gu6Imy5oyH5a6aXG4gICAgY2FudmFzTGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F2ZUNhbnZhc1wiKSk7XG4gICAgY29sb3JMaXN0LnB1c2goWycjZmZiZWY2JywgJyNmZmY1YmUnLCAnI2I2ZjdmZiddKTsvL+W3puOBjOS4gOeVquS4i+KGkuS4iuOBruazoumghlxuICAgIC8vIOWQhOOCreODo+ODs+ODkOOCueOBruWIneacn+WMllxuICAgIGZvcih2YXIgY2FudmFzSW5kZXggaW4gY2FudmFzTGlzdCkge1xuICAgICAgICB2YXIgY2FudmFzID0gY2FudmFzTGlzdFtjYW52YXNJbmRleF07XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDsgLy9DYW52YXPjga53aWR0aOOCkuOCpuOCo+ODs+ODieOCpuOBruW5heOBq+WQiOOCj+OBm+OCi1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNDUwOy8v5rOi44Gu6auY44GVXG4gICAgICAgIGNhbnZhcy5jb250ZXh0Q2FjaGUgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbiAgICAvLyDlhbHpgJrjga7mm7TmlrDlh6bnkIblkbzjgbPlh7rjgZdcbiAgICB1cGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZvcihsZXQgY2FudmFzSW5kZXggaW4gY2FudmFzTGlzdCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2FudmFzTGlzdFtjYW52YXNJbmRleF07XG4gICAgICAgIC8vIOWQhOOCreODo+ODs+ODkOOCueOBruaPj+eUu1xuICAgICAgICBkcmF3KGNhbnZhcywgY29sb3JMaXN0W2NhbnZhc0luZGV4XSk7XG4gICAgfVxuICAgIC8vIOWFsemAmuOBruaPj+eUu+aDheWgseOBruabtOaWsFxuICAgIGluZm8uc2Vjb25kcyA9IGluZm8uc2Vjb25kcyArIC4wMTQ7XG4gICAgaW5mby50ID0gaW5mby5zZWNvbmRzKk1hdGguUEk7XG4gICAgLy8g6Ieq6Lqr44Gu5YaN6LW35ZG844Gz5Ye644GXXG4gICAgc2V0VGltZW91dCh1cGRhdGUsIDM1KTtcbn1cblxuLyoqXG4gKiBEcmF3IGFuaW1hdGlvbiBmdW5jdGlvbi5cbiAqIFxuICogVGhpcyBmdW5jdGlvbiBkcmF3cyBvbmUgZnJhbWUgb2YgdGhlIGFuaW1hdGlvbiwgd2FpdHMgMjBtcywgYW5kIHRoZW4gY2FsbHNcbiAqIGl0c2VsZiBhZ2Fpbi5cbiAqL1xuZnVuY3Rpb24gZHJhdyhjYW52YXMsIGNvbG9yKSB7XG4gICAgLy8g5a++6LGh44GuY2FudmFz44Gu44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6XXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuY29udGV4dENhY2hlO1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruaPj+eUu+OCkuOCr+ODquOColxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvL+azouOBrumHjeOBquOCiuOCkuaPj+eUuyBkcmF3V2F2ZShjYW52YXMsIGNvbG9yW+aVsOWtl++8iOazouOBruaVsOOCkjDjgYvjgonmlbDjgYjjgabmjIflrprvvIldLCDpgI/pgY4sIOazouOBruW5heOBrnpvb20s5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMIClcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzBdLCAxLCAzLCAwKTsvLzAuNeKHkumAj+mBjuWFt+WQiDUwJeOAgTPih5LmlbDlrZfjgYzlpKfjgY3jgYTjgbvjganms6LjgYzjgarjgaDjgonjgYtcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzFdLCAxLCAyLCAyNTApO1xuICAgIGRyYXdXYXZlKGNhbnZhcywgY29sb3JbMl0sIDEsIDIuNSwgMTAwKTtcbn1cblxuLyoqXG4qIOazouOCkuaPj+eUu1xuKiBkcmF3V2F2ZSjoibIsIOS4jemAj+aYjuW6piwg5rOi44Gu5bmF44Guem9vbSwg5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMKVxuKi9cbmZ1bmN0aW9uIGRyYXdXYXZlKGNhbnZhcywgY29sb3IsIGFscGhhLCB6b29tLCBkZWxheSkge1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmNvbnRleHRDYWNoZTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yOy8v5aGX44KK44Gu6ImyXG4gICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7IC8v44OR44K544Gu6ZaL5aeLXG4gICAgZHJhd1NpbmUoY2FudmFzLCBpbmZvLnQgLyAwLjUsIHpvb20sIGRlbGF5KTtcbiAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKyAxMCwgY2FudmFzLmhlaWdodCk7IC8v44OR44K544KSQ2FudmFz44Gu5Y+z5LiL44G4XG4gICAgY29udGV4dC5saW5lVG8oMCwgY2FudmFzLmhlaWdodCk7IC8v44OR44K544KSQ2FudmFz44Gu5bem5LiL44G4XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKSAvL+ODkeOCueOCkumWieOBmOOCi1xuICAgIGNvbnRleHQuZmlsbCgpOyAvL+azouOCkuWhl+OCiuOBpOOBtuOBmVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGRyYXcgc2luZVxuICogXG4gKiBUaGUgc2luZSBjdXJ2ZSBpcyBkcmF3biBpbiAxMHB4IHNlZ21lbnRzIHN0YXJ0aW5nIGF0IHRoZSBvcmlnaW4uIFxuICogZHJhd1NpbmUo5pmC6ZaTLCDms6Ljga7luYXjga56b29tLCDms6Ljga7plovlp4vkvY3nva7jga7pgYXjgowpXG4gKi9cbmZ1bmN0aW9uIGRyYXdTaW5lKGNhbnZhcywgdCwgem9vbSwgZGVsYXkpIHtcbiAgICBsZXQgeEF4aXMgPSBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQvMik7XG4gICAgbGV0IHlBeGlzID0gMDtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0Q2FjaGU7XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHggYW5kIHksIHN0YXJ0aW5nIGF0IDAsMCBhbmQgdHJhbnNsYXRpbmcgdG8gdGhlIG9yaWdpbiBvblxuICAgIC8vIHRoZSBjYW52YXMuXG4gICAgbGV0IHggPSB0OyAvL+aZgumWk+OCkuaoquOBruS9jee9ruOBqOOBmeOCi1xuICAgIGxldCB5ID0gTWF0aC5zaW4oeCkvem9vbTtcbiAgICBjb250ZXh0Lm1vdmVUbyh5QXhpcywgdW5pdCp5K3hBeGlzKTsgLy/jgrnjgr/jg7zjg4jkvY3nva7jgavjg5HjgrnjgpLnva7jgY9cblxuICAgIC8vIExvb3AgdG8gZHJhdyBzZWdtZW50cyAo5qiq5bmF44Gu5YiG44CB5rOi44KS5o+P55S7KVxuICAgIGZvciAoaSA9IHlBeGlzOyBpIDw9IGNhbnZhcy53aWR0aCArIDEwOyBpICs9IDEwKSB7XG4gICAgICAgIHggPSB0KygteUF4aXMraSkvdW5pdC96b29tO1xuICAgICAgICB5ID0gTWF0aC5zaW4oeCAtIGRlbGF5KS8zO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhpLCB1bml0KnkreEF4aXMpO1xuICAgIH1cbn1cblxuaW5pdCgpO1xuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qIEF1dGhvciA6IFZpbmNlbnQgR2FycmVhdSAgLSB2aW5jZW50Z2FycmVhdS5jb21cbi8qIE1JVCBsaWNlbnNlOiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vKiBEZW1vIC8gR2VuZXJhdG9yIDogdmluY2VudGdhcnJlYXUuY29tL3BhcnRpY2xlcy5qc1xuLyogR2l0SHViIDogZ2l0aHViLmNvbS9WaW5jZW50R2FycmVhdS9wYXJ0aWNsZXMuanNcbi8qIEhvdyB0byB1c2U/IDogQ2hlY2sgdGhlIEdpdEh1YiBSRUFETUVcbi8qIHYyLjAuMFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmZ1bmN0aW9uIGhleFRvUmdiKGUpe3ZhciBhPS9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7ZT1lLnJlcGxhY2UoYSxmdW5jdGlvbihlLGEsdCxpKXtyZXR1cm4gYSthK3QrdCtpK2l9KTt2YXIgdD0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoZSk7cmV0dXJuIHQ/e3I6cGFyc2VJbnQodFsxXSwxNiksZzpwYXJzZUludCh0WzJdLDE2KSxiOnBhcnNlSW50KHRbM10sMTYpfTpudWxsfWZ1bmN0aW9uIGNsYW1wKGUsYSx0KXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZSxhKSx0KX1mdW5jdGlvbiBpc0luQXJyYXkoZSxhKXtyZXR1cm4gYS5pbmRleE9mKGUpPi0xfXZhciBwSlM9ZnVuY3Rpb24oZSxhKXt2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2UrXCIgPiAucGFydGljbGVzLWpzLWNhbnZhcy1lbFwiKTt0aGlzLnBKUz17Y2FudmFzOntlbDp0LHc6dC5vZmZzZXRXaWR0aCxoOnQub2Zmc2V0SGVpZ2h0fSxwYXJ0aWNsZXM6e251bWJlcjp7dmFsdWU6NDAwLGRlbnNpdHk6e2VuYWJsZTohMCx2YWx1ZV9hcmVhOjgwMH19LGNvbG9yOnt2YWx1ZTpcIiNmZmZcIn0sc2hhcGU6e3R5cGU6XCJjaXJjbGVcIixzdHJva2U6e3dpZHRoOjAsY29sb3I6XCIjZmYwMDAwXCJ9LHBvbHlnb246e25iX3NpZGVzOjV9LGltYWdlOntzcmM6XCJcIix3aWR0aDoxMDAsaGVpZ2h0OjEwMH19LG9wYWNpdHk6e3ZhbHVlOjEscmFuZG9tOiExLGFuaW06e2VuYWJsZTohMSxzcGVlZDoyLG9wYWNpdHlfbWluOjAsc3luYzohMX19LHNpemU6e3ZhbHVlOjIwLHJhbmRvbTohMSxhbmltOntlbmFibGU6ITEsc3BlZWQ6MjAsc2l6ZV9taW46MCxzeW5jOiExfX0sbGluZV9saW5rZWQ6e2VuYWJsZTohMCxkaXN0YW5jZToxMDAsY29sb3I6XCIjZmZmXCIsb3BhY2l0eToxLHdpZHRoOjF9LG1vdmU6e2VuYWJsZTohMCxzcGVlZDoyLGRpcmVjdGlvbjpcIm5vbmVcIixyYW5kb206ITEsc3RyYWlnaHQ6ITEsb3V0X21vZGU6XCJvdXRcIixib3VuY2U6ITEsYXR0cmFjdDp7ZW5hYmxlOiExLHJvdGF0ZVg6M2UzLHJvdGF0ZVk6M2UzfX0sYXJyYXk6W119LGludGVyYWN0aXZpdHk6e2RldGVjdF9vbjpcImNhbnZhc1wiLGV2ZW50czp7b25ob3Zlcjp7ZW5hYmxlOiEwLG1vZGU6XCJncmFiXCJ9LG9uY2xpY2s6e2VuYWJsZTohMCxtb2RlOlwicHVzaFwifSxyZXNpemU6ITB9LG1vZGVzOntncmFiOntkaXN0YW5jZToxMDAsbGluZV9saW5rZWQ6e29wYWNpdHk6MX19LGJ1YmJsZTp7ZGlzdGFuY2U6MjAwLHNpemU6ODAsZHVyYXRpb246LjR9LHJlcHVsc2U6e2Rpc3RhbmNlOjIwMCxkdXJhdGlvbjouNH0scHVzaDp7cGFydGljbGVzX25iOjR9LHJlbW92ZTp7cGFydGljbGVzX25iOjJ9fSxtb3VzZTp7fX0scmV0aW5hX2RldGVjdDohMSxmbjp7aW50ZXJhY3Q6e30sbW9kZXM6e30sdmVuZG9yczp7fX0sdG1wOnt9fTt2YXIgaT10aGlzLnBKUzthJiZPYmplY3QuZGVlcEV4dGVuZChpLGEpLGkudG1wLm9iaj17c2l6ZV92YWx1ZTppLnBhcnRpY2xlcy5zaXplLnZhbHVlLHNpemVfYW5pbV9zcGVlZDppLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQsbW92ZV9zcGVlZDppLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLGxpbmVfbGlua2VkX2Rpc3RhbmNlOmkucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlLGxpbmVfbGlua2VkX3dpZHRoOmkucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLG1vZGVfZ3JhYl9kaXN0YW5jZTppLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSxtb2RlX2J1YmJsZV9kaXN0YW5jZTppLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlLG1vZGVfYnViYmxlX3NpemU6aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLG1vZGVfcmVwdWxzZV9kaXN0YW5jZTppLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZX0saS5mbi5yZXRpbmFJbml0PWZ1bmN0aW9uKCl7aS5yZXRpbmFfZGV0ZWN0JiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xPyhpLmNhbnZhcy5weHJhdGlvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLGkudG1wLnJldGluYT0hMCk6KGkuY2FudmFzLnB4cmF0aW89MSxpLnRtcC5yZXRpbmE9ITEpLGkuY2FudmFzLnc9aS5jYW52YXMuZWwub2Zmc2V0V2lkdGgqaS5jYW52YXMucHhyYXRpbyxpLmNhbnZhcy5oPWkuY2FudmFzLmVsLm9mZnNldEhlaWdodCppLmNhbnZhcy5weHJhdGlvLGkucGFydGljbGVzLnNpemUudmFsdWU9aS50bXAub2JqLnNpemVfdmFsdWUqaS5jYW52YXMucHhyYXRpbyxpLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQ9aS50bXAub2JqLnNpemVfYW5pbV9zcGVlZCppLmNhbnZhcy5weHJhdGlvLGkucGFydGljbGVzLm1vdmUuc3BlZWQ9aS50bXAub2JqLm1vdmVfc3BlZWQqaS5jYW52YXMucHhyYXRpbyxpLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZT1pLnRtcC5vYmoubGluZV9saW5rZWRfZGlzdGFuY2UqaS5jYW52YXMucHhyYXRpbyxpLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZT1pLnRtcC5vYmoubW9kZV9ncmFiX2Rpc3RhbmNlKmkuY2FudmFzLnB4cmF0aW8saS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZT1pLnRtcC5vYmoubW9kZV9idWJibGVfZGlzdGFuY2UqaS5jYW52YXMucHhyYXRpbyxpLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aD1pLnRtcC5vYmoubGluZV9saW5rZWRfd2lkdGgqaS5jYW52YXMucHhyYXRpbyxpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemU9aS50bXAub2JqLm1vZGVfYnViYmxlX3NpemUqaS5jYW52YXMucHhyYXRpbyxpLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZT1pLnRtcC5vYmoubW9kZV9yZXB1bHNlX2Rpc3RhbmNlKmkuY2FudmFzLnB4cmF0aW99LGkuZm4uY2FudmFzSW5pdD1mdW5jdGlvbigpe2kuY2FudmFzLmN0eD1pLmNhbnZhcy5lbC5nZXRDb250ZXh0KFwiMmRcIil9LGkuZm4uY2FudmFzU2l6ZT1mdW5jdGlvbigpe2kuY2FudmFzLmVsLndpZHRoPWkuY2FudmFzLncsaS5jYW52YXMuZWwuaGVpZ2h0PWkuY2FudmFzLmgsaSYmaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5yZXNpemUmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZnVuY3Rpb24oKXtpLmNhbnZhcy53PWkuY2FudmFzLmVsLm9mZnNldFdpZHRoLGkuY2FudmFzLmg9aS5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0LGkudG1wLnJldGluYSYmKGkuY2FudmFzLncqPWkuY2FudmFzLnB4cmF0aW8saS5jYW52YXMuaCo9aS5jYW52YXMucHhyYXRpbyksaS5jYW52YXMuZWwud2lkdGg9aS5jYW52YXMudyxpLmNhbnZhcy5lbC5oZWlnaHQ9aS5jYW52YXMuaCxpLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZXx8KGkuZm4ucGFydGljbGVzRW1wdHkoKSxpLmZuLnBhcnRpY2xlc0NyZWF0ZSgpLGkuZm4ucGFydGljbGVzRHJhdygpLGkuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpKSxpLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKX0pfSxpLmZuLmNhbnZhc1BhaW50PWZ1bmN0aW9uKCl7aS5jYW52YXMuY3R4LmZpbGxSZWN0KDAsMCxpLmNhbnZhcy53LGkuY2FudmFzLmgpfSxpLmZuLmNhbnZhc0NsZWFyPWZ1bmN0aW9uKCl7aS5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLDAsaS5jYW52YXMudyxpLmNhbnZhcy5oKX0saS5mbi5wYXJ0aWNsZT1mdW5jdGlvbihlLGEsdCl7aWYodGhpcy5yYWRpdXM9KGkucGFydGljbGVzLnNpemUucmFuZG9tP01hdGgucmFuZG9tKCk6MSkqaS5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxpLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlJiYodGhpcy5zaXplX3N0YXR1cz0hMSx0aGlzLnZzPWkucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZC8xMDAsaS5wYXJ0aWNsZXMuc2l6ZS5hbmltLnN5bmN8fCh0aGlzLnZzPXRoaXMudnMqTWF0aC5yYW5kb20oKSkpLHRoaXMueD10P3QueDpNYXRoLnJhbmRvbSgpKmkuY2FudmFzLncsdGhpcy55PXQ/dC55Ok1hdGgucmFuZG9tKCkqaS5jYW52YXMuaCx0aGlzLng+aS5jYW52YXMudy0yKnRoaXMucmFkaXVzP3RoaXMueD10aGlzLngtdGhpcy5yYWRpdXM6dGhpcy54PDIqdGhpcy5yYWRpdXMmJih0aGlzLng9dGhpcy54K3RoaXMucmFkaXVzKSx0aGlzLnk+aS5jYW52YXMuaC0yKnRoaXMucmFkaXVzP3RoaXMueT10aGlzLnktdGhpcy5yYWRpdXM6dGhpcy55PDIqdGhpcy5yYWRpdXMmJih0aGlzLnk9dGhpcy55K3RoaXMucmFkaXVzKSxpLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSYmaS5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCh0aGlzLHQpLHRoaXMuY29sb3I9e30sXCJvYmplY3RcIj09dHlwZW9mIGUudmFsdWUpaWYoZS52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KXt2YXIgcz1lLnZhbHVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppLnBhcnRpY2xlcy5jb2xvci52YWx1ZS5sZW5ndGgpXTt0aGlzLmNvbG9yLnJnYj1oZXhUb1JnYihzKX1lbHNlIHZvaWQgMCE9ZS52YWx1ZS5yJiZ2b2lkIDAhPWUudmFsdWUuZyYmdm9pZCAwIT1lLnZhbHVlLmImJih0aGlzLmNvbG9yLnJnYj17cjplLnZhbHVlLnIsZzplLnZhbHVlLmcsYjplLnZhbHVlLmJ9KSx2b2lkIDAhPWUudmFsdWUuaCYmdm9pZCAwIT1lLnZhbHVlLnMmJnZvaWQgMCE9ZS52YWx1ZS5sJiYodGhpcy5jb2xvci5oc2w9e2g6ZS52YWx1ZS5oLHM6ZS52YWx1ZS5zLGw6ZS52YWx1ZS5sfSk7ZWxzZVwicmFuZG9tXCI9PWUudmFsdWU/dGhpcy5jb2xvci5yZ2I9e3I6TWF0aC5mbG9vcigyNTYqTWF0aC5yYW5kb20oKSkrMCxnOk1hdGguZmxvb3IoMjU2Kk1hdGgucmFuZG9tKCkpKzAsYjpNYXRoLmZsb29yKDI1NipNYXRoLnJhbmRvbSgpKSswfTpcInN0cmluZ1wiPT10eXBlb2YgZS52YWx1ZSYmKHRoaXMuY29sb3I9ZSx0aGlzLmNvbG9yLnJnYj1oZXhUb1JnYih0aGlzLmNvbG9yLnZhbHVlKSk7dGhpcy5vcGFjaXR5PShpLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbT9NYXRoLnJhbmRvbSgpOjEpKmkucGFydGljbGVzLm9wYWNpdHkudmFsdWUsaS5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSYmKHRoaXMub3BhY2l0eV9zdGF0dXM9ITEsdGhpcy52bz1pLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQvMTAwLGkucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zeW5jfHwodGhpcy52bz10aGlzLnZvKk1hdGgucmFuZG9tKCkpKTt2YXIgbj17fTtzd2l0Y2goaS5wYXJ0aWNsZXMubW92ZS5kaXJlY3Rpb24pe2Nhc2VcInRvcFwiOm49e3g6MCx5Oi0xfTticmVhaztjYXNlXCJ0b3AtcmlnaHRcIjpuPXt4Oi41LHk6LS41fTticmVhaztjYXNlXCJyaWdodFwiOm49e3g6MSx5Oi0wfTticmVhaztjYXNlXCJib3R0b20tcmlnaHRcIjpuPXt4Oi41LHk6LjV9O2JyZWFrO2Nhc2VcImJvdHRvbVwiOm49e3g6MCx5OjF9O2JyZWFrO2Nhc2VcImJvdHRvbS1sZWZ0XCI6bj17eDotLjUseToxfTticmVhaztjYXNlXCJsZWZ0XCI6bj17eDotMSx5OjB9O2JyZWFrO2Nhc2VcInRvcC1sZWZ0XCI6bj17eDotLjUseTotLjV9O2JyZWFrO2RlZmF1bHQ6bj17eDowLHk6MH19aS5wYXJ0aWNsZXMubW92ZS5zdHJhaWdodD8odGhpcy52eD1uLngsdGhpcy52eT1uLnksaS5wYXJ0aWNsZXMubW92ZS5yYW5kb20mJih0aGlzLnZ4PXRoaXMudngqTWF0aC5yYW5kb20oKSx0aGlzLnZ5PXRoaXMudnkqTWF0aC5yYW5kb20oKSkpOih0aGlzLnZ4PW4ueCtNYXRoLnJhbmRvbSgpLS41LHRoaXMudnk9bi55K01hdGgucmFuZG9tKCktLjUpLHRoaXMudnhfaT10aGlzLnZ4LHRoaXMudnlfaT10aGlzLnZ5O3ZhciByPWkucGFydGljbGVzLnNoYXBlLnR5cGU7aWYoXCJvYmplY3RcIj09dHlwZW9mIHIpe2lmKHIgaW5zdGFuY2VvZiBBcnJheSl7dmFyIGM9cltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqci5sZW5ndGgpXTt0aGlzLnNoYXBlPWN9fWVsc2UgdGhpcy5zaGFwZT1yO2lmKFwiaW1hZ2VcIj09dGhpcy5zaGFwZSl7dmFyIG89aS5wYXJ0aWNsZXMuc2hhcGU7dGhpcy5pbWc9e3NyYzpvLmltYWdlLnNyYyxyYXRpbzpvLmltYWdlLndpZHRoL28uaW1hZ2UuaGVpZ2h0fSx0aGlzLmltZy5yYXRpb3x8KHRoaXMuaW1nLnJhdGlvPTEpLFwic3ZnXCI9PWkudG1wLmltZ190eXBlJiZ2b2lkIDAhPWkudG1wLnNvdXJjZV9zdmcmJihpLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nKHRoaXMpLGkudG1wLnB1c2hpbmcmJih0aGlzLmltZy5sb2FkZWQ9ITEpKX19LGkuZm4ucGFydGljbGUucHJvdG90eXBlLmRyYXc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7aS5jYW52YXMuY3R4LmRyYXdJbWFnZShyLGEueC10LGEueS10LDIqdCwyKnQvYS5pbWcucmF0aW8pfXZhciBhPXRoaXM7aWYodm9pZCAwIT1hLnJhZGl1c19idWJibGUpdmFyIHQ9YS5yYWRpdXNfYnViYmxlO2Vsc2UgdmFyIHQ9YS5yYWRpdXM7aWYodm9pZCAwIT1hLm9wYWNpdHlfYnViYmxlKXZhciBzPWEub3BhY2l0eV9idWJibGU7ZWxzZSB2YXIgcz1hLm9wYWNpdHk7aWYoYS5jb2xvci5yZ2IpdmFyIG49XCJyZ2JhKFwiK2EuY29sb3IucmdiLnIrXCIsXCIrYS5jb2xvci5yZ2IuZytcIixcIithLmNvbG9yLnJnYi5iK1wiLFwiK3MrXCIpXCI7ZWxzZSB2YXIgbj1cImhzbGEoXCIrYS5jb2xvci5oc2wuaCtcIixcIithLmNvbG9yLmhzbC5zK1wiJSxcIithLmNvbG9yLmhzbC5sK1wiJSxcIitzK1wiKVwiO3N3aXRjaChpLmNhbnZhcy5jdHguZmlsbFN0eWxlPW4saS5jYW52YXMuY3R4LmJlZ2luUGF0aCgpLGEuc2hhcGUpe2Nhc2VcImNpcmNsZVwiOmkuY2FudmFzLmN0eC5hcmMoYS54LGEueSx0LDAsMipNYXRoLlBJLCExKTticmVhaztjYXNlXCJlZGdlXCI6aS5jYW52YXMuY3R4LnJlY3QoYS54LXQsYS55LXQsMip0LDIqdCk7YnJlYWs7Y2FzZVwidHJpYW5nbGVcIjppLmZuLnZlbmRvcnMuZHJhd1NoYXBlKGkuY2FudmFzLmN0eCxhLngtdCxhLnkrdC8xLjY2LDIqdCwzLDIpO2JyZWFrO2Nhc2VcInBvbHlnb25cIjppLmZuLnZlbmRvcnMuZHJhd1NoYXBlKGkuY2FudmFzLmN0eCxhLngtdC8oaS5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zLjUpLGEueS10Ly43NiwyLjY2KnQvKGkucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksaS5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywxKTticmVhaztjYXNlXCJzdGFyXCI6aS5mbi52ZW5kb3JzLmRyYXdTaGFwZShpLmNhbnZhcy5jdHgsYS54LTIqdC8oaS5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy80KSxhLnktdC8xLjUyLDIqdCoyLjY2LyhpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLGkucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsMik7YnJlYWs7Y2FzZVwiaW1hZ2VcIjppZihcInN2Z1wiPT1pLnRtcC5pbWdfdHlwZSl2YXIgcj1hLmltZy5vYmo7ZWxzZSB2YXIgcj1pLnRtcC5pbWdfb2JqO3ImJmUoKX1pLmNhbnZhcy5jdHguY2xvc2VQYXRoKCksaS5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoPjAmJihpLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGU9aS5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLmNvbG9yLGkuY2FudmFzLmN0eC5saW5lV2lkdGg9aS5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoLGkuY2FudmFzLmN0eC5zdHJva2UoKSksaS5jYW52YXMuY3R4LmZpbGwoKX0saS5mbi5wYXJ0aWNsZXNDcmVhdGU9ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPGkucGFydGljbGVzLm51bWJlci52YWx1ZTtlKyspaS5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgaS5mbi5wYXJ0aWNsZShpLnBhcnRpY2xlcy5jb2xvcixpLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSl9LGkuZm4ucGFydGljbGVzVXBkYXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxpLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7ZSsrKXt2YXIgYT1pLnBhcnRpY2xlcy5hcnJheVtlXTtpZihpLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7dmFyIHQ9aS5wYXJ0aWNsZXMubW92ZS5zcGVlZC8yO2EueCs9YS52eCp0LGEueSs9YS52eSp0fWlmKGkucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUmJigxPT1hLm9wYWNpdHlfc3RhdHVzPyhhLm9wYWNpdHk+PWkucGFydGljbGVzLm9wYWNpdHkudmFsdWUmJihhLm9wYWNpdHlfc3RhdHVzPSExKSxhLm9wYWNpdHkrPWEudm8pOihhLm9wYWNpdHk8PWkucGFydGljbGVzLm9wYWNpdHkuYW5pbS5vcGFjaXR5X21pbiYmKGEub3BhY2l0eV9zdGF0dXM9ITApLGEub3BhY2l0eS09YS52byksYS5vcGFjaXR5PDAmJihhLm9wYWNpdHk9MCkpLGkucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUmJigxPT1hLnNpemVfc3RhdHVzPyhhLnJhZGl1cz49aS5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSYmKGEuc2l6ZV9zdGF0dXM9ITEpLGEucmFkaXVzKz1hLnZzKTooYS5yYWRpdXM8PWkucGFydGljbGVzLnNpemUuYW5pbS5zaXplX21pbiYmKGEuc2l6ZV9zdGF0dXM9ITApLGEucmFkaXVzLT1hLnZzKSxhLnJhZGl1czwwJiYoYS5yYWRpdXM9MCkpLFwiYm91bmNlXCI9PWkucGFydGljbGVzLm1vdmUub3V0X21vZGUpdmFyIHM9e3hfbGVmdDphLnJhZGl1cyx4X3JpZ2h0OmkuY2FudmFzLncseV90b3A6YS5yYWRpdXMseV9ib3R0b206aS5jYW52YXMuaH07ZWxzZSB2YXIgcz17eF9sZWZ0Oi1hLnJhZGl1cyx4X3JpZ2h0OmkuY2FudmFzLncrYS5yYWRpdXMseV90b3A6LWEucmFkaXVzLHlfYm90dG9tOmkuY2FudmFzLmgrYS5yYWRpdXN9O3N3aXRjaChhLngtYS5yYWRpdXM+aS5jYW52YXMudz8oYS54PXMueF9sZWZ0LGEueT1NYXRoLnJhbmRvbSgpKmkuY2FudmFzLmgpOmEueCthLnJhZGl1czwwJiYoYS54PXMueF9yaWdodCxhLnk9TWF0aC5yYW5kb20oKSppLmNhbnZhcy5oKSxhLnktYS5yYWRpdXM+aS5jYW52YXMuaD8oYS55PXMueV90b3AsYS54PU1hdGgucmFuZG9tKCkqaS5jYW52YXMudyk6YS55K2EucmFkaXVzPDAmJihhLnk9cy55X2JvdHRvbSxhLng9TWF0aC5yYW5kb20oKSppLmNhbnZhcy53KSxpLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKXtjYXNlXCJib3VuY2VcIjphLngrYS5yYWRpdXM+aS5jYW52YXMudz9hLnZ4PS1hLnZ4OmEueC1hLnJhZGl1czwwJiYoYS52eD0tYS52eCksYS55K2EucmFkaXVzPmkuY2FudmFzLmg/YS52eT0tYS52eTphLnktYS5yYWRpdXM8MCYmKGEudnk9LWEudnkpfWlmKGlzSW5BcnJheShcImdyYWJcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkmJmkuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlKGEpLChpc0luQXJyYXkoXCJidWJibGVcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSl8fGlzSW5BcnJheShcImJ1YmJsZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkmJmkuZm4ubW9kZXMuYnViYmxlUGFydGljbGUoYSksKGlzSW5BcnJheShcInJlcHVsc2VcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSl8fGlzSW5BcnJheShcInJlcHVsc2VcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpJiZpLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZShhKSxpLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGV8fGkucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpZm9yKHZhciBuPWUrMTtuPGkucGFydGljbGVzLmFycmF5Lmxlbmd0aDtuKyspe3ZhciByPWkucGFydGljbGVzLmFycmF5W25dO2kucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSYmaS5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzKGEsciksaS5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSYmaS5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzKGEsciksaS5wYXJ0aWNsZXMubW92ZS5ib3VuY2UmJmkuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzKGEscil9fX0saS5mbi5wYXJ0aWNsZXNEcmF3PWZ1bmN0aW9uKCl7aS5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLDAsaS5jYW52YXMudyxpLmNhbnZhcy5oKSxpLmZuLnBhcnRpY2xlc1VwZGF0ZSgpO2Zvcih2YXIgZT0wO2U8aS5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoO2UrKyl7dmFyIGE9aS5wYXJ0aWNsZXMuYXJyYXlbZV07YS5kcmF3KCl9fSxpLmZuLnBhcnRpY2xlc0VtcHR5PWZ1bmN0aW9uKCl7aS5wYXJ0aWNsZXMuYXJyYXk9W119LGkuZm4ucGFydGljbGVzUmVmcmVzaD1mdW5jdGlvbigpe2NhbmNlbFJlcXVlc3RBbmltRnJhbWUoaS5mbi5jaGVja0FuaW1GcmFtZSksY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShpLmZuLmRyYXdBbmltRnJhbWUpLGkudG1wLnNvdXJjZV9zdmc9dm9pZCAwLGkudG1wLmltZ19vYmo9dm9pZCAwLGkudG1wLmNvdW50X3N2Zz0wLGkuZm4ucGFydGljbGVzRW1wdHkoKSxpLmZuLmNhbnZhc0NsZWFyKCksaS5mbi52ZW5kb3JzLnN0YXJ0KCl9LGkuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcz1mdW5jdGlvbihlLGEpe3ZhciB0PWUueC1hLngscz1lLnktYS55LG49TWF0aC5zcXJ0KHQqdCtzKnMpO2lmKG48PWkucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXt2YXIgcj1pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5LW4vKDEvaS5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSkvaS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U7aWYocj4wKXt2YXIgYz1pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtpLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGU9XCJyZ2JhKFwiK2MucitcIixcIitjLmcrXCIsXCIrYy5iK1wiLFwiK3IrXCIpXCIsaS5jYW52YXMuY3R4LmxpbmVXaWR0aD1pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxpLmNhbnZhcy5jdHguYmVnaW5QYXRoKCksaS5jYW52YXMuY3R4Lm1vdmVUbyhlLngsZS55KSxpLmNhbnZhcy5jdHgubGluZVRvKGEueCxhLnkpLGkuY2FudmFzLmN0eC5zdHJva2UoKSxpLmNhbnZhcy5jdHguY2xvc2VQYXRoKCl9fX0saS5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzPWZ1bmN0aW9uKGUsYSl7dmFyIHQ9ZS54LWEueCxzPWUueS1hLnksbj1NYXRoLnNxcnQodCp0K3Mqcyk7aWYobjw9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe3ZhciByPXQvKDFlMyppLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCksYz1zLygxZTMqaS5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVkpO2UudngtPXIsZS52eS09YyxhLnZ4Kz1yLGEudnkrPWN9fSxpLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcz1mdW5jdGlvbihlLGEpe3ZhciB0PWUueC1hLngsaT1lLnktYS55LHM9TWF0aC5zcXJ0KHQqdCtpKmkpLG49ZS5yYWRpdXMrYS5yYWRpdXM7bj49cyYmKGUudng9LWUudngsZS52eT0tZS52eSxhLnZ4PS1hLnZ4LGEudnk9LWEudnkpfSxpLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXM9ZnVuY3Rpb24oZSxhKXtpLnRtcC5wdXNoaW5nPSEwO2Zvcih2YXIgdD0wO2U+dDt0KyspaS5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgaS5mbi5wYXJ0aWNsZShpLnBhcnRpY2xlcy5jb2xvcixpLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLHt4OmE/YS5wb3NfeDpNYXRoLnJhbmRvbSgpKmkuY2FudmFzLncseTphP2EucG9zX3k6TWF0aC5yYW5kb20oKSppLmNhbnZhcy5ofSkpLHQ9PWUtMSYmKGkucGFydGljbGVzLm1vdmUuZW5hYmxlfHxpLmZuLnBhcnRpY2xlc0RyYXcoKSxpLnRtcC5wdXNoaW5nPSExKX0saS5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXM9ZnVuY3Rpb24oZSl7aS5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKDAsZSksaS5wYXJ0aWNsZXMubW92ZS5lbmFibGV8fGkuZm4ucGFydGljbGVzRHJhdygpfSxpLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIGEoKXtlLm9wYWNpdHlfYnViYmxlPWUub3BhY2l0eSxlLnJhZGl1c19idWJibGU9ZS5yYWRpdXN9ZnVuY3Rpb24gdChhLHQscyxuLGMpe2lmKGEhPXQpaWYoaS50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCl7aWYodm9pZCAwIT1zKXt2YXIgbz1uLXAqKG4tYSkvaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbixsPWEtbztkPWErbCxcInNpemVcIj09YyYmKGUucmFkaXVzX2J1YmJsZT1kKSxcIm9wYWNpdHlcIj09YyYmKGUub3BhY2l0eV9idWJibGU9ZCl9fWVsc2UgaWYocjw9aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7aWYodm9pZCAwIT1zKXZhciB2PXM7ZWxzZSB2YXIgdj1uO2lmKHYhPWEpe3ZhciBkPW4tcCoobi1hKS9pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uO1wic2l6ZVwiPT1jJiYoZS5yYWRpdXNfYnViYmxlPWQpLFwib3BhY2l0eVwiPT1jJiYoZS5vcGFjaXR5X2J1YmJsZT1kKX19ZWxzZVwic2l6ZVwiPT1jJiYoZS5yYWRpdXNfYnViYmxlPXZvaWQgMCksXCJvcGFjaXR5XCI9PWMmJihlLm9wYWNpdHlfYnViYmxlPXZvaWQgMCl9aWYoaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSYmaXNJbkFycmF5KFwiYnViYmxlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXt2YXIgcz1lLngtaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LG49ZS55LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxyPU1hdGguc3FydChzKnMrbipuKSxjPTEtci9pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlO2lmKHI8PWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe2lmKGM+PTAmJlwibW91c2Vtb3ZlXCI9PWkuaW50ZXJhY3Rpdml0eS5zdGF0dXMpe2lmKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSE9aS5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSlpZihpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemU+aS5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7dmFyIG89ZS5yYWRpdXMraS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplKmM7bz49MCYmKGUucmFkaXVzX2J1YmJsZT1vKX1lbHNle3ZhciBsPWUucmFkaXVzLWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxvPWUucmFkaXVzLWwqYztvPjA/ZS5yYWRpdXNfYnViYmxlPW86ZS5yYWRpdXNfYnViYmxlPTB9aWYoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5IT1pLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKWlmKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eT5pLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKXt2YXIgdj1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkqYzt2PmUub3BhY2l0eSYmdjw9aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5JiYoZS5vcGFjaXR5X2J1YmJsZT12KX1lbHNle3ZhciB2PWUub3BhY2l0eS0oaS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZS1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpKmM7djxlLm9wYWNpdHkmJnY+PWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSYmKGUub3BhY2l0eV9idWJibGU9dil9fX1lbHNlIGEoKTtcIm1vdXNlbGVhdmVcIj09aS5pbnRlcmFjdGl2aXR5LnN0YXR1cyYmYSgpfWVsc2UgaWYoaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSYmaXNJbkFycmF5KFwiYnViYmxlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtpZihpLnRtcC5idWJibGVfY2xpY2tpbmcpe3ZhciBzPWUueC1pLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsbj1lLnktaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195LHI9TWF0aC5zcXJ0KHMqcytuKm4pLHA9KChuZXcgRGF0ZSkuZ2V0VGltZSgpLWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lKS8xZTM7cD5pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uJiYoaS50bXAuYnViYmxlX2R1cmF0aW9uX2VuZD0hMCkscD4yKmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24mJihpLnRtcC5idWJibGVfY2xpY2tpbmc9ITEsaS50bXAuYnViYmxlX2R1cmF0aW9uX2VuZD0hMSl9aS50bXAuYnViYmxlX2NsaWNraW5nJiYodChpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsaS5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxlLnJhZGl1c19idWJibGUsZS5yYWRpdXMsXCJzaXplXCIpLHQoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5LGkucGFydGljbGVzLm9wYWNpdHkudmFsdWUsZS5vcGFjaXR5X2J1YmJsZSxlLm9wYWNpdHksXCJvcGFjaXR5XCIpKX19LGkuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIGEoKXt2YXIgYT1NYXRoLmF0YW4yKGQscCk7aWYoZS52eD11Kk1hdGguY29zKGEpLGUudnk9dSpNYXRoLnNpbihhKSxcImJvdW5jZVwiPT1pLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKXt2YXIgdD17eDplLngrZS52eCx5OmUueStlLnZ5fTt0LngrZS5yYWRpdXM+aS5jYW52YXMudz9lLnZ4PS1lLnZ4OnQueC1lLnJhZGl1czwwJiYoZS52eD0tZS52eCksdC55K2UucmFkaXVzPmkuY2FudmFzLmg/ZS52eT0tZS52eTp0LnktZS5yYWRpdXM8MCYmKGUudnk9LWUudnkpfX1pZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlJiZpc0luQXJyYXkoXCJyZXB1bHNlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpJiZcIm1vdXNlbW92ZVwiPT1pLmludGVyYWN0aXZpdHkuc3RhdHVzKXt2YXIgdD1lLngtaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LHM9ZS55LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxuPU1hdGguc3FydCh0KnQrcypzKSxyPXt4OnQvbix5OnMvbn0sYz1pLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSxvPTEwMCxsPWNsYW1wKDEvYyooLTEqTWF0aC5wb3cobi9jLDIpKzEpKmMqbywwLDUwKSx2PXt4OmUueCtyLngqbCx5OmUueStyLnkqbH07XCJib3VuY2VcIj09aS5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZT8odi54LWUucmFkaXVzPjAmJnYueCtlLnJhZGl1czxpLmNhbnZhcy53JiYoZS54PXYueCksdi55LWUucmFkaXVzPjAmJnYueStlLnJhZGl1czxpLmNhbnZhcy5oJiYoZS55PXYueSkpOihlLng9di54LGUueT12LnkpfWVsc2UgaWYoaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSYmaXNJbkFycmF5KFwicmVwdWxzZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSlpZihpLnRtcC5yZXB1bHNlX2ZpbmlzaHx8KGkudG1wLnJlcHVsc2VfY291bnQrKyxpLnRtcC5yZXB1bHNlX2NvdW50PT1pLnBhcnRpY2xlcy5hcnJheS5sZW5ndGgmJihpLnRtcC5yZXB1bHNlX2ZpbmlzaD0hMCkpLGkudG1wLnJlcHVsc2VfY2xpY2tpbmcpe3ZhciBjPU1hdGgucG93KGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLzYsMykscD1pLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gtZS54LGQ9aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195LWUueSxtPXAqcCtkKmQsdT0tYy9tKjE7Yz49bSYmYSgpfWVsc2UgMD09aS50bXAucmVwdWxzZV9jbGlja2luZyYmKGUudng9ZS52eF9pLGUudnk9ZS52eV9pKX0saS5mbi5tb2Rlcy5ncmFiUGFydGljbGU9ZnVuY3Rpb24oZSl7aWYoaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSYmXCJtb3VzZW1vdmVcIj09aS5pbnRlcmFjdGl2aXR5LnN0YXR1cyl7dmFyIGE9ZS54LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCx0PWUueS1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kscz1NYXRoLnNxcnQoYSphK3QqdCk7aWYoczw9aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2Upe3ZhciBuPWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHktcy8oMS9pLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5KS9pLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZTtpZihuPjApe3ZhciByPWkucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO2kuY2FudmFzLmN0eC5zdHJva2VTdHlsZT1cInJnYmEoXCIrci5yK1wiLFwiK3IuZytcIixcIityLmIrXCIsXCIrbitcIilcIixpLmNhbnZhcy5jdHgubGluZVdpZHRoPWkucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLGkuY2FudmFzLmN0eC5iZWdpblBhdGgoKSxpLmNhbnZhcy5jdHgubW92ZVRvKGUueCxlLnkpLGkuY2FudmFzLmN0eC5saW5lVG8oaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSksaS5jYW52YXMuY3R4LnN0cm9rZSgpLGkuY2FudmFzLmN0eC5jbG9zZVBhdGgoKX19fX0saS5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycz1mdW5jdGlvbigpe1wid2luZG93XCI9PWkuaW50ZXJhY3Rpdml0eS5kZXRlY3Rfb24/aS5pbnRlcmFjdGl2aXR5LmVsPXdpbmRvdzppLmludGVyYWN0aXZpdHkuZWw9aS5jYW52YXMuZWwsKGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGV8fGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpJiYoaS5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixmdW5jdGlvbihlKXtpZihpLmludGVyYWN0aXZpdHkuZWw9PXdpbmRvdyl2YXIgYT1lLmNsaWVudFgsdD1lLmNsaWVudFk7ZWxzZSB2YXIgYT1lLm9mZnNldFh8fGUuY2xpZW50WCx0PWUub2Zmc2V0WXx8ZS5jbGllbnRZO2kuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeD1hLGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeT10LGkudG1wLnJldGluYSYmKGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCo9aS5jYW52YXMucHhyYXRpbyxpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kqPWkuY2FudmFzLnB4cmF0aW8pLGkuaW50ZXJhY3Rpdml0eS5zdGF0dXM9XCJtb3VzZW1vdmVcIn0pLGkuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKGUpe2kuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeD1udWxsLGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeT1udWxsLGkuaW50ZXJhY3Rpdml0eS5zdGF0dXM9XCJtb3VzZWxlYXZlXCJ9KSksaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSYmaS5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7aWYoaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194PWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxpLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3k9aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lPShuZXcgRGF0ZSkuZ2V0VGltZSgpLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpc3dpdGNoKGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKXtjYXNlXCJwdXNoXCI6aS5wYXJ0aWNsZXMubW92ZS5lbmFibGU/aS5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYixpLmludGVyYWN0aXZpdHkubW91c2UpOjE9PWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYj9pLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLGkuaW50ZXJhY3Rpdml0eS5tb3VzZSk6aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iPjEmJmkuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhpLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO2JyZWFrO2Nhc2VcInJlbW92ZVwiOmkuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iKTticmVhaztjYXNlXCJidWJibGVcIjppLnRtcC5idWJibGVfY2xpY2tpbmc9ITA7YnJlYWs7Y2FzZVwicmVwdWxzZVwiOmkudG1wLnJlcHVsc2VfY2xpY2tpbmc9ITAsaS50bXAucmVwdWxzZV9jb3VudD0wLGkudG1wLnJlcHVsc2VfZmluaXNoPSExLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnRtcC5yZXB1bHNlX2NsaWNraW5nPSExfSwxZTMqaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZHVyYXRpb24pfX0pfSxpLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXM9ZnVuY3Rpb24oKXtpZihpLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5lbmFibGUpe3ZhciBlPWkuY2FudmFzLmVsLndpZHRoKmkuY2FudmFzLmVsLmhlaWdodC8xZTM7aS50bXAucmV0aW5hJiYoZS89MippLmNhbnZhcy5weHJhdGlvKTt2YXIgYT1lKmkucGFydGljbGVzLm51bWJlci52YWx1ZS9pLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS52YWx1ZV9hcmVhLHQ9aS5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoLWE7MD50P2kuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhNYXRoLmFicyh0KSk6aS5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXModCl9fSxpLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwPWZ1bmN0aW9uKGUsYSl7Zm9yKHZhciB0PTA7dDxpLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7dCsrKXt2YXIgcz1pLnBhcnRpY2xlcy5hcnJheVt0XSxuPWUueC1zLngscj1lLnktcy55LGM9TWF0aC5zcXJ0KG4qbityKnIpO2M8PWUucmFkaXVzK3MucmFkaXVzJiYoZS54PWE/YS54Ok1hdGgucmFuZG9tKCkqaS5jYW52YXMudyxlLnk9YT9hLnk6TWF0aC5yYW5kb20oKSppLmNhbnZhcy5oLGkuZm4udmVuZG9ycy5jaGVja092ZXJsYXAoZSkpfX0saS5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZz1mdW5jdGlvbihlKXt2YXIgYT1pLnRtcC5zb3VyY2Vfc3ZnLHQ9LyMoWzAtOUEtRl17Myw2fSkvZ2kscz1hLnJlcGxhY2UodCxmdW5jdGlvbihhLHQsaSxzKXtpZihlLmNvbG9yLnJnYil2YXIgbj1cInJnYmEoXCIrZS5jb2xvci5yZ2IucitcIixcIitlLmNvbG9yLnJnYi5nK1wiLFwiK2UuY29sb3IucmdiLmIrXCIsXCIrZS5vcGFjaXR5K1wiKVwiO2Vsc2UgdmFyIG49XCJoc2xhKFwiK2UuY29sb3IuaHNsLmgrXCIsXCIrZS5jb2xvci5oc2wucytcIiUsXCIrZS5jb2xvci5oc2wubCtcIiUsXCIrZS5vcGFjaXR5K1wiKVwiO3JldHVybiBufSksbj1uZXcgQmxvYihbc10se3R5cGU6XCJpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLThcIn0pLHI9d2luZG93LlVSTHx8d2luZG93LndlYmtpdFVSTHx8d2luZG93LGM9ci5jcmVhdGVPYmplY3RVUkwobiksbz1uZXcgSW1hZ2U7by5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7ZS5pbWcub2JqPW8sZS5pbWcubG9hZGVkPSEwLHIucmV2b2tlT2JqZWN0VVJMKGMpLGkudG1wLmNvdW50X3N2ZysrfSksby5zcmM9Y30saS5mbi52ZW5kb3JzLmRlc3Ryb3lwSlM9ZnVuY3Rpb24oKXtjYW5jZWxBbmltYXRpb25GcmFtZShpLmZuLmRyYXdBbmltRnJhbWUpLHQucmVtb3ZlKCkscEpTRG9tPW51bGx9LGkuZm4udmVuZG9ycy5kcmF3U2hhcGU9ZnVuY3Rpb24oZSxhLHQsaSxzLG4pe3ZhciByPXMqbixjPXMvbixvPTE4MCooYy0yKS9jLGw9TWF0aC5QSS1NYXRoLlBJKm8vMTgwO2Uuc2F2ZSgpLGUuYmVnaW5QYXRoKCksZS50cmFuc2xhdGUoYSx0KSxlLm1vdmVUbygwLDApO2Zvcih2YXIgdj0wO3I+djt2KyspZS5saW5lVG8oaSwwKSxlLnRyYW5zbGF0ZShpLDApLGUucm90YXRlKGwpO2UuZmlsbCgpLGUucmVzdG9yZSgpfSxpLmZuLnZlbmRvcnMuZXhwb3J0SW1nPWZ1bmN0aW9uKCl7d2luZG93Lm9wZW4oaS5jYW52YXMuZWwudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLFwiX2JsYW5rXCIpfSxpLmZuLnZlbmRvcnMubG9hZEltZz1mdW5jdGlvbihlKXtpZihpLnRtcC5pbWdfZXJyb3I9dm9pZCAwLFwiXCIhPWkucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYylpZihcInN2Z1wiPT1lKXt2YXIgYT1uZXcgWE1MSHR0cFJlcXVlc3Q7YS5vcGVuKFwiR0VUXCIsaS5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjKSxhLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbihlKXs0PT1hLnJlYWR5U3RhdGUmJigyMDA9PWEuc3RhdHVzPyhpLnRtcC5zb3VyY2Vfc3ZnPWUuY3VycmVudFRhcmdldC5yZXNwb25zZSxpLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCkpOihjb25zb2xlLmxvZyhcIkVycm9yIHBKUyAtIEltYWdlIG5vdCBmb3VuZFwiKSxpLnRtcC5pbWdfZXJyb3I9ITApKX0sYS5zZW5kKCl9ZWxzZXt2YXIgdD1uZXcgSW1hZ2U7dC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7aS50bXAuaW1nX29iaj10LGkuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKX0pLHQuc3JjPWkucGFydGljbGVzLnNoYXBlLmltYWdlLnNyY31lbHNlIGNvbnNvbGUubG9nKFwiRXJyb3IgcEpTIC0gTm8gaW1hZ2Uuc3JjXCIpLGkudG1wLmltZ19lcnJvcj0hMH0saS5mbi52ZW5kb3JzLmRyYXc9ZnVuY3Rpb24oKXtcImltYWdlXCI9PWkucGFydGljbGVzLnNoYXBlLnR5cGU/XCJzdmdcIj09aS50bXAuaW1nX3R5cGU/aS50bXAuY291bnRfc3ZnPj1pLnBhcnRpY2xlcy5udW1iZXIudmFsdWU/KGkuZm4ucGFydGljbGVzRHJhdygpLGkucGFydGljbGVzLm1vdmUuZW5hYmxlP2kuZm4uZHJhd0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGkuZm4udmVuZG9ycy5kcmF3KTpjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSkpOmkudG1wLmltZ19lcnJvcnx8KGkuZm4uZHJhd0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGkuZm4udmVuZG9ycy5kcmF3KSk6dm9pZCAwIT1pLnRtcC5pbWdfb2JqPyhpLmZuLnBhcnRpY2xlc0RyYXcoKSxpLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZT9pLmZuLmRyYXdBbmltRnJhbWU9cmVxdWVzdEFuaW1GcmFtZShpLmZuLnZlbmRvcnMuZHJhdyk6Y2FuY2VsUmVxdWVzdEFuaW1GcmFtZShpLmZuLmRyYXdBbmltRnJhbWUpKTppLnRtcC5pbWdfZXJyb3J8fChpLmZuLmRyYXdBbmltRnJhbWU9cmVxdWVzdEFuaW1GcmFtZShpLmZuLnZlbmRvcnMuZHJhdykpOihpLmZuLnBhcnRpY2xlc0RyYXcoKSxpLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZT9pLmZuLmRyYXdBbmltRnJhbWU9cmVxdWVzdEFuaW1GcmFtZShpLmZuLnZlbmRvcnMuZHJhdyk6Y2FuY2VsUmVxdWVzdEFuaW1GcmFtZShpLmZuLmRyYXdBbmltRnJhbWUpKX0saS5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdz1mdW5jdGlvbigpe1wiaW1hZ2VcIj09aS5wYXJ0aWNsZXMuc2hhcGUudHlwZT9cInN2Z1wiPT1pLnRtcC5pbWdfdHlwZSYmdm9pZCAwPT1pLnRtcC5zb3VyY2Vfc3ZnP2kudG1wLmNoZWNrQW5pbUZyYW1lPXJlcXVlc3RBbmltRnJhbWUoY2hlY2spOihjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkudG1wLmNoZWNrQW5pbUZyYW1lKSxpLnRtcC5pbWdfZXJyb3J8fChpLmZuLnZlbmRvcnMuaW5pdCgpLGkuZm4udmVuZG9ycy5kcmF3KCkpKTooaS5mbi52ZW5kb3JzLmluaXQoKSxpLmZuLnZlbmRvcnMuZHJhdygpKX0saS5mbi52ZW5kb3JzLmluaXQ9ZnVuY3Rpb24oKXtpLmZuLnJldGluYUluaXQoKSxpLmZuLmNhbnZhc0luaXQoKSxpLmZuLmNhbnZhc1NpemUoKSxpLmZuLmNhbnZhc1BhaW50KCksaS5mbi5wYXJ0aWNsZXNDcmVhdGUoKSxpLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKSxpLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZT1oZXhUb1JnYihpLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcil9LGkuZm4udmVuZG9ycy5zdGFydD1mdW5jdGlvbigpe2lzSW5BcnJheShcImltYWdlXCIsaS5wYXJ0aWNsZXMuc2hhcGUudHlwZSk/KGkudG1wLmltZ190eXBlPWkucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIoaS5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLmxlbmd0aC0zKSxpLmZuLnZlbmRvcnMubG9hZEltZyhpLnRtcC5pbWdfdHlwZSkpOmkuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKX0saS5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycygpLGkuZm4udmVuZG9ycy5zdGFydCgpfTtPYmplY3QuZGVlcEV4dGVuZD1mdW5jdGlvbihlLGEpe2Zvcih2YXIgdCBpbiBhKWFbdF0mJmFbdF0uY29uc3RydWN0b3ImJmFbdF0uY29uc3RydWN0b3I9PT1PYmplY3Q/KGVbdF09ZVt0XXx8e30sYXJndW1lbnRzLmNhbGxlZShlW3RdLGFbdF0pKTplW3RdPWFbdF07cmV0dXJuIGV9LHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe3dpbmRvdy5zZXRUaW1lb3V0KGUsMWUzLzYwKX19KCksd2luZG93LmNhbmNlbFJlcXVlc3RBbmltRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxjbGVhclRpbWVvdXR9KCksd2luZG93LnBKU0RvbT1bXSx3aW5kb3cucGFydGljbGVzSlM9ZnVuY3Rpb24oZSxhKXtcInN0cmluZ1wiIT10eXBlb2YgZSYmKGE9ZSxlPVwicGFydGljbGVzLWpzXCIpLGV8fChlPVwicGFydGljbGVzLWpzXCIpO3ZhciB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpLGk9XCJwYXJ0aWNsZXMtanMtY2FudmFzLWVsXCIscz10LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSk7aWYocy5sZW5ndGgpZm9yKDtzLmxlbmd0aD4wOyl0LnJlbW92ZUNoaWxkKHNbMF0pO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7bi5jbGFzc05hbWU9aSxuLnN0eWxlLndpZHRoPVwiMTAwJVwiLG4uc3R5bGUuaGVpZ2h0PVwiMTAwJVwiO3ZhciByPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpLmFwcGVuZENoaWxkKG4pO251bGwhPXImJnBKU0RvbS5wdXNoKG5ldyBwSlMoZSxhKSl9LHdpbmRvdy5wYXJ0aWNsZXNKUy5sb2FkPWZ1bmN0aW9uKGUsYSx0KXt2YXIgaT1uZXcgWE1MSHR0cFJlcXVlc3Q7aS5vcGVuKFwiR0VUXCIsYSksaS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oYSl7aWYoND09aS5yZWFkeVN0YXRlKWlmKDIwMD09aS5zdGF0dXMpe3ZhciBzPUpTT04ucGFyc2UoYS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlKTt3aW5kb3cucGFydGljbGVzSlMoZSxzKSx0JiZ0KCl9ZWxzZSBjb25zb2xlLmxvZyhcIkVycm9yIHBKUyAtIFhNTEh0dHBSZXF1ZXN0IHN0YXR1czogXCIraS5zdGF0dXMpLGNvbnNvbGUubG9nKFwiRXJyb3IgcEpTIC0gRmlsZSBjb25maWcgbm90IGZvdW5kXCIpfSxpLnNlbmQoKX07IiwiLyoqXG4gKiBAbW9kdWxlcyA6IG5vZGVfbW9kdWxlc+ODleOCqeODq+ODgOOBvuOBp+OBrue1tuWvvuODkeOCueOBruOCqOOCpOODquOCouOCuVxuICogd2VicGFjay5jb25maWcuanPjgavjgablrprnvqnjgZfjgabjgYTjgotcbiAqL1xuXG4vLyBpbXBvcnQgJ0Btb2R1bGVzL3N2Z3h1c2UnOyAvL1NWR+OCueODl+ODqeOCpOODiOOCkklF44Gn5L2/55So44GZ44KL44Gf44KB44Gu44Op44Kk44OW44Op44OqXG4vLyBpbXBvcnQgJy4vbGliL2JfYnJvd3Nlcl9zd2l0Y2hlci5qcyc7IC8v44OW44Op44Km44K25Yik5a6a44Gu44Gf44KB44Op44Kk44OW44Op44OqXG5cblxuLy8gaW1wb3J0ICcuL2xpYi9mYXN0Y2xpY2suanMnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teUZhc3RDbGljay5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215VHJhaW4uanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUhlYWRlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215SGFtYnVyZ2VyLmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlIb3Zlci5qcyc7XG5pbXBvcnQgJy4vbGliL3BhcnRpY2xlcy5taW4uanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teU1pbGt5V2F5LmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlTd2lwZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVNjcm9sbFNob3cuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9kYXRhLXNwbGl0dGluZy5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215RmFsbGluZ0JveC5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215V2F2ZS5qcyc7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9
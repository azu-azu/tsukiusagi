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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUZhbGxpbmdCb3guanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215SGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlNaWxreVdheS5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlTY3JvbGxTaG93LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVN3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlUcmFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9saWIvcGFydGljbGVzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGluZyIsIndoaXRlc3BhY2UiLCJjb3VudCIsImZyYWdtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaSIsInNlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsInJvdGF0ZUJhY2siLCJmYWxsaW5nTGF5ZXIiLCJsaW5lSGl0Ym94IiwibGluZSIsInBhcmVudCIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50MiIsImhhbVRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keUZpeCIsIm5hdkxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmVDaGVja2VkIiwicmVtb3ZlRml4Iiwid2luZG93IiwiY2hlY2tlZCIsIm15Qm9keSIsImJvZHkiLCJteUJvZHlDbGFzcyIsImNsYXNzTGlzdCIsIm15UG9zaXRpb24iLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNvbnRhaW5zIiwiYWRkRml4Iiwic3R5bGUiLCJ0b3AiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJwYXJzZUludCIsInJlbW92ZSIsImFkZCIsImhlYWRlckZhZGUiLCJoZWFkZXJCYWNrRG93biIsIm15SGVhZGVyIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXJGYWRlUG9zaXRpb24iLCJsYXlvdXRIZWFkZXIiLCJsYXlvdXRIZWFkZXJDbGFzcyIsIm15VGFyZ2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhcmdldFRvcCIsIm15UGFydGljbGVJRCIsInBhcnRpY2xlX3NoYXBlIiwibnVtT2ZTdGFycyIsImNvbG9yT2ZTdGFycyIsIm9wYWNpdHlPZlN0YXJzIiwic2l6ZU9mU3RhcnMiLCJtb3ZlX2RpcmVjdGlvbiIsIm1vdmVfc3BlZWQiLCJwYXJ0aWNsZXNKUyIsIkFuaW1DbGFzcyIsInNjcm9sbEFuaW1hdGlvblNob3dDbGFzcyIsInRyaWdnZXJNYXJnaW5EZWZhdWx0Iiwic2Nyb2xsQW5pbUVsbSIsInNjcm9sbEFuaW1hdGlvbkZ1bmMiLCJsZW5ndGgiLCJ0cmlnZ2VyTWFyZ2luIiwiZWxtIiwic2hvd1BvcyIsImRhdGFzZXQiLCJqc19kYXRhbWFyZ2luIiwianNfbWFyZ2luIiwianNfdHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhlaWdodCIsImRlbGF5IiwianNfZGVsYXkiLCJzZXRUaW1lb3V0IiwiaW5kZXgiLCJiaW5kIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImVmZmVjdCIsImxvb3AiLCJzcGVlZCIsImRyYWdnYWJsZSIsIm1vdXNld2hlZWwiLCJmb3JjZVRvQXhpcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImR5bmFtaWNCdWxsZXRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm15VHJhaW4iLCJqUXVlcnkiLCJ0cmFpbl9wb3MiLCJvZmZzZXQiLCJ0cmFpbl9oZWlnaHQiLCJvdXRlckhlaWdodCIsIiQiLCJzY3JvbGwiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGV4VG9SZ2IiLCJlIiwiYSIsInJlcGxhY2UiLCJ0IiwiZXhlYyIsInIiLCJnIiwiYiIsImNsYW1wIiwiTWF0aCIsIm1pbiIsIm1heCIsImlzSW5BcnJheSIsImluZGV4T2YiLCJwSlMiLCJjYW52YXMiLCJ3Iiwib2Zmc2V0V2lkdGgiLCJoIiwib2Zmc2V0SGVpZ2h0IiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJpbWFnZSIsInNyYyIsImhlaWdodCIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiYXJyYXkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsIm1vdXNlIiwicmV0aW5hX2RldGVjdCIsImZuIiwiaW50ZXJhY3QiLCJ2ZW5kb3JzIiwidG1wIiwiT2JqZWN0IiwiZGVlcEV4dGVuZCIsIm9iaiIsInNpemVfdmFsdWUiLCJzaXplX2FuaW1fc3BlZWQiLCJsaW5lX2xpbmtlZF9kaXN0YW5jZSIsImxpbmVfbGlua2VkX3dpZHRoIiwibW9kZV9ncmFiX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfZGlzdGFuY2UiLCJtb2RlX2J1YmJsZV9zaXplIiwibW9kZV9yZXB1bHNlX2Rpc3RhbmNlIiwicmV0aW5hSW5pdCIsImRldmljZVBpeGVsUmF0aW8iLCJweHJhdGlvIiwicmV0aW5hIiwiY2FudmFzSW5pdCIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNTaXplIiwicGFydGljbGVzRW1wdHkiLCJwYXJ0aWNsZXNDcmVhdGUiLCJwYXJ0aWNsZXNEcmF3IiwiZGVuc2l0eUF1dG9QYXJ0aWNsZXMiLCJjYW52YXNQYWludCIsImZpbGxSZWN0IiwiY2FudmFzQ2xlYXIiLCJjbGVhclJlY3QiLCJwYXJ0aWNsZSIsInJhZGl1cyIsInNpemVfc3RhdHVzIiwidnMiLCJ4IiwieSIsImNoZWNrT3ZlcmxhcCIsIkFycmF5IiwicyIsImZsb29yIiwicmdiIiwibCIsImhzbCIsIm9wYWNpdHlfc3RhdHVzIiwidm8iLCJuIiwidngiLCJ2eSIsInZ4X2kiLCJ2eV9pIiwiYyIsIm8iLCJpbWciLCJyYXRpbyIsImltZ190eXBlIiwic291cmNlX3N2ZyIsImNyZWF0ZVN2Z0ltZyIsInB1c2hpbmciLCJsb2FkZWQiLCJwcm90b3R5cGUiLCJkcmF3IiwiZHJhd0ltYWdlIiwicmFkaXVzX2J1YmJsZSIsIm9wYWNpdHlfYnViYmxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJkcmF3U2hhcGUiLCJpbWdfb2JqIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJmaWxsIiwicGFydGljbGVzVXBkYXRlIiwieF9sZWZ0IiwieF9yaWdodCIsInlfdG9wIiwieV9ib3R0b20iLCJncmFiUGFydGljbGUiLCJidWJibGVQYXJ0aWNsZSIsInJlcHVsc2VQYXJ0aWNsZSIsImxpbmtQYXJ0aWNsZXMiLCJhdHRyYWN0UGFydGljbGVzIiwiYm91bmNlUGFydGljbGVzIiwicGFydGljbGVzUmVmcmVzaCIsImNhbmNlbFJlcXVlc3RBbmltRnJhbWUiLCJjaGVja0FuaW1GcmFtZSIsImRyYXdBbmltRnJhbWUiLCJjb3VudF9zdmciLCJzdGFydCIsInNxcnQiLCJjb2xvcl9yZ2JfbGluZSIsIm1vdmVUbyIsImxpbmVUbyIsInB1c2hQYXJ0aWNsZXMiLCJwb3NfeCIsInBvc195IiwicmVtb3ZlUGFydGljbGVzIiwic3BsaWNlIiwiYnViYmxlX2R1cmF0aW9uX2VuZCIsInAiLCJkIiwidiIsInN0YXR1cyIsImJ1YmJsZV9jbGlja2luZyIsImNsaWNrX3Bvc194IiwiY2xpY2tfcG9zX3kiLCJEYXRlIiwiZ2V0VGltZSIsImNsaWNrX3RpbWUiLCJhdGFuMiIsInUiLCJjb3MiLCJzaW4iLCJwb3ciLCJyZXB1bHNlX2ZpbmlzaCIsInJlcHVsc2VfY291bnQiLCJyZXB1bHNlX2NsaWNraW5nIiwibSIsImV2ZW50c0xpc3RlbmVycyIsImNsaWVudFgiLCJjbGllbnRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJhYnMiLCJCbG9iIiwiVVJMIiwid2Via2l0VVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiSW1hZ2UiLCJyZXZva2VPYmplY3RVUkwiLCJkZXN0cm95cEpTIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwSlNEb20iLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsImV4cG9ydEltZyIsIm9wZW4iLCJ0b0RhdGFVUkwiLCJsb2FkSW1nIiwiaW1nX2Vycm9yIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiY3VycmVudFRhcmdldCIsInJlc3BvbnNlIiwiY2hlY2tCZWZvcmVEcmF3IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJyZXF1ZXN0QW5pbUZyYW1lIiwiY2hlY2siLCJpbml0Iiwic3Vic3RyIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJjYWxsZWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJsb2FkIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLFNBQVMsQ0FBQztBQUNOQyxZQUFVLEVBQUU7QUFETixDQUFELENBQVQsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUNBLElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxz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LElBQUltVSxjQUFKLEVBQU47QUFBeUJuVSxHQUFDLENBQUMrVCxJQUFGLENBQU8sS0FBUCxFQUFhbE4sQ0FBYixHQUFnQjdHLENBQUMsQ0FBQ29VLGtCQUFGLEdBQXFCLFVBQVN2TixDQUFULEVBQVc7QUFBQyxRQUFHLEtBQUc3RyxDQUFDLENBQUNxVSxVQUFSLEVBQW1CLElBQUcsT0FBS3JVLENBQUMsQ0FBQzJSLE1BQVYsRUFBaUI7QUFBQyxVQUFJbEUsQ0FBQyxHQUFDdUksSUFBSSxDQUFDQyxLQUFMLENBQVdwUCxDQUFDLENBQUN5TixhQUFGLENBQWdCQyxRQUEzQixDQUFOO0FBQTJDbFQsWUFBTSxDQUFDc0MsV0FBUCxDQUFtQmlELENBQW5CLEVBQXFCNkcsQ0FBckIsR0FBd0IxRyxDQUFDLElBQUVBLENBQUMsRUFBNUI7QUFBK0IsS0FBNUYsTUFBaUcwTixPQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBc0MxVSxDQUFDLENBQUMyUixNQUFwRCxHQUE0RDhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaLENBQTVEO0FBQTZHLEdBQWxSLEVBQW1SMVUsQ0FBQyxDQUFDMlUsSUFBRixFQUFuUjtBQUE0UixDQUFqNkMsQzs7Ozs7Ozs7Ozs7O0FDUnhqcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9fYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCJTcGxpdHRpbmcoe1xuICAgIHdoaXRlc3BhY2U6IHRydWVcbn0pIiwiY29uc3QgY291bnQgPSA3O1xuY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vZnJhZ21lbnTkvZzmiJBcblxuLy8gZmFsbGluZy1ib3hcbmZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdG9yLmNsYXNzTmFtZSA9IFwic2VjdG9yXCI7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlY3Rvcik7XG5cbiAgbGV0IHJvdGF0ZUJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQmFjay5jbGFzc05hbWUgPSBcInJvdGF0ZVwiO1xuICBzZWN0b3IuYXBwZW5kQ2hpbGQocm90YXRlQmFjayk7XG5cbiAgbGV0IGZhbGxpbmdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWxsaW5nTGF5ZXIuY2xhc3NOYW1lID0gXCJmYWxsaW5nXCI7XG4gIHJvdGF0ZUJhY2suYXBwZW5kQ2hpbGQoZmFsbGluZ0xheWVyKTtcblxuICBsZXQgbGluZUhpdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lSGl0Ym94LmNsYXNzTmFtZSA9IFwibGluZS1ib3hcIjtcbiAgZmFsbGluZ0xheWVyLmFwcGVuZENoaWxkKGxpbmVIaXRib3gpO1xuXG4gIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gXCJsaW5lLWJveF9fbGluZSBjLWJhbGxcIjtcbiAgbGluZUhpdGJveC5hcHBlbmRDaGlsZChsaW5lKTtcbn1cbmNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zZWN0b3InKTtcbnBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cblxuXG4vLyBwbGF5aW5nLWJveFxuZm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgbGV0IHNlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0b3IuY2xhc3NOYW1lID0gXCJzZWN0b3IyXCI7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlY3Rvcik7XG5cbiAgbGV0IHJvdGF0ZUJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQmFjay5jbGFzc05hbWUgPSBcInJvdGF0ZTJcIjtcbiAgc2VjdG9yLmFwcGVuZENoaWxkKHJvdGF0ZUJhY2spO1xuXG4gIGxldCBmYWxsaW5nTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmFsbGluZ0xheWVyLmNsYXNzTmFtZSA9IFwiZmFsbGluZzJcIjtcbiAgcm90YXRlQmFjay5hcHBlbmRDaGlsZChmYWxsaW5nTGF5ZXIpO1xuXG4gIGxldCBsaW5lSGl0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmVIaXRib3guY2xhc3NOYW1lID0gXCJsaW5lLWJveDJcIjtcbiAgZmFsbGluZ0xheWVyLmFwcGVuZENoaWxkKGxpbmVIaXRib3gpO1xuXG4gIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gXCJsaW5lLWJveF9fbGluZTIgYy1iYWxsXCI7XG4gIGxpbmVIaXRib3guYXBwZW5kQ2hpbGQobGluZSk7XG59XG5jb25zdCBwYXJlbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlY3Rvci1wbGF5Jyk7XG5wYXJlbnQyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiIsIi8vIOODj+ODs+ODkOODvOOCrOODvOOBjOOCr+ODquODg+OCr+OBleOCjOOBn+OCiVxuY29uc3QgaGFtVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW0tdHJpZ2dlcicpO1xuaGFtVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIGJvZHlGaXgoKTtcbn0pO1xuXG4vLyBMaXN044KS44Kv44Oq44OD44Kv44GX44Gf44KJXG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1oYW0tY2xvc2VcIik7XG5uYXZMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVDaGVja2VkKCk7XG4gICAgcmVtb3ZlRml4KCk7XG4gIH0pO1xufSk7XG5cbi8vIOOCpuOCo+ODs+ODieOCpuW5heOBjOWIh+OCiuabv+OCj+OBo+OBn+OCiVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgcmVtb3ZlQ2hlY2tlZCgpO1xuICByZW1vdmVGaXgoKTtcbn0pO1xuXG5cblxuXG4vLyAtLS0tLS0tLWZ1bmN0aW9uLS0tLS0tLS0tLS0tXG4vLyDjg4Hjgqfjg4Pjgq/jg5zjg4Pjgq/jgrlcbmNvbnN0IHJlbW92ZUNoZWNrZWQgPSAoKSA9PiB7XG4gIGhhbVRyaWdnZXIuY2hlY2tlZCA9IGZhbHNlO1xufTtcblxuLy8g44Oc44OH44Kj5Zu65a6aXG5jb25zdCBteUJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgbXlCb2R5Q2xhc3MgPSBteUJvZHkuY2xhc3NMaXN0O1xuY29uc3QgYm9keUZpeCA9ICgpID0+IHtcbiAgbGV0IG15UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICBpZiAoIW15Qm9keUNsYXNzLmNvbnRhaW5zKFwiaXMtZml4XCIpKSB7IC8vaXMtZml444GM44Gq44GR44KM44GwXG4gICAgYWRkRml4KCk7XG4gICAgbXlCb2R5LnN0eWxlLnRvcCA9IGAtJHtteVBvc2l0aW9ufXB4YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzY3JvbGxZID0gbXlCb2R5LnN0eWxlLnRvcDsvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7oqJjmhrZcbiAgICByZW1vdmVGaXgoKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoc2Nyb2xsWSB8fCAnMCcpICogLTEpOy8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruS/neaMgVxuICB9O1xufVxuXG5jb25zdCByZW1vdmVGaXggPSAoKSA9PiB7XG4gIG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtZml4Jyk7XG4gIG15Qm9keS5zdHlsZS50b3AgPSBcIlwiO1xufVxuY29uc3QgYWRkRml4ID0gKCkgPT4ge1xuICBteUJvZHlDbGFzcy5hZGQoJ2lzLWZpeCcpO1xufVxuXG5cblxuXG4iLCIvLyDjgrnjgq/jg63jg7zjg6vjgZfjgZ/jgonplqLmlbDlkbzjgbPlh7rjgZdcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcblx0aGVhZGVyQmFja0Rvd24oKTtcbn0pO1xuXG4vLyDjg63jg7zjg4njgZfjgZ/jgonplqLmlbDlkbzjgbPlh7rjgZdcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHRoZWFkZXJGYWRlKCk7XG5cdGhlYWRlckJhY2tEb3duKCk7XG59KTtcblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIOmWouaVsFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gKipcbi8vIHAtaGVhZGVyOuOCueOCr+ODreODvOODq+OBl+OBn+OCiea2iOOBiOOCi1xuLy8gKipcbmNvbnN0IG15SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1wLWhlYWRlclwiKTtcbmNvbnN0IGhlYWRlckNsYXNzID0gbXlIZWFkZXIuY2xhc3NMaXN0O1xuY29uc3QgaGVhZGVyRmFkZVBvc2l0aW9uID0gNTA7Ly/jgrnjgq/jg63jg7zjg6vjgZfjgabjg5rjg7zjgrjjg4jjg4Pjg5fjgYvjgonjgIfjgIfjgavpgZTjgZfjgZ/jgajjgY1cblxuY29uc3QgaGVhZGVyRmFkZSA9ICgpID0+IHtcblx0bGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRpZiAoc2Nyb2xsVG9wID49IGhlYWRlckZhZGVQb3NpdGlvbikge1xuXHRcdGhlYWRlckNsYXNzLmFkZCgnaXMtZmFkZScpO1xuXHR9IGVsc2Uge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnaXMtZmFkZScpO1xuXHR9O1xufTtcblxuLy8gKipcbi8vIHAtaGVhZGVyLWJhY2s644K544Kv44Ot44O844Or6YCU5Lit44Gn5Ye654++XG4vLyAqKlxuY29uc3QgbGF5b3V0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWwtaGVhZGVyJyk7XG5jb25zdCBsYXlvdXRIZWFkZXJDbGFzcyA9IGxheW91dEhlYWRlci5jbGFzc0xpc3Q7XG5cbmNvbnN0IGhlYWRlckJhY2tEb3duID0gKCkgPT4ge1xuXHRsZXQgbXlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtzXCIpO1xuXHRsZXQgcmVjdCA9IG15VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGxldCB0YXJnZXRUb3AgPSByZWN0LnRvcCArIHNjcm9sbFRvcDtcblxuXHRpZiAoc2Nyb2xsVG9wID49IHRhcmdldFRvcCkge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZSgncC1oZWFkZXItLXRvcCcsIFwiaXMtZmFkZVwiKTsvLyDjgq/jg6njgrnlkI3pmaTljrsgIFwiVXBNb3ZlXCJcblx0XHRoZWFkZXJDbGFzcy5hZGQoJ3AtaGVhZGVyLS1iYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgICAnRG93bk1vdmUnXG5cdFx0bGF5b3V0SGVhZGVyQ2xhc3MuYWRkKCdiYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cblx0fSBlbHNlIHtcblx0XHRpZiAobGF5b3V0SGVhZGVyQ2xhc3MuY29udGFpbnMoJ2JhY2snKSkgey8v44GZ44Gn44Gr44Kv44Op44K55ZCN44GM44Gk44GE44Gm44GE44Gf44KJIFwiRG93bk1vdmVcIlxuXHRcdFx0bGF5b3V0SGVhZGVyQ2xhc3MucmVtb3ZlKCdiYWNrJyk7Ly8g44Kv44Op44K55ZCN6Zmk5Y67XG5cdFx0XHRoZWFkZXJDbGFzcy5yZW1vdmUoJ3AtaGVhZGVyLS1iYWNrJyk7Ly8g44Kv44Op44K55ZCN6Zmk5Y67ICdEb3duTW92ZSdcblx0XHRcdGhlYWRlckNsYXNzLmFkZCgncC1oZWFkZXItLXRvcCcpOy8vIOOCr+ODqeOCueWQjei/veWKoCAgJ1VwTW92ZSdcblx0XHR9XG5cdH1cbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gLy8g44Km44Kj44Oz44OJ44Km5bmF44GM5YiH44KK5pu/44KP44Gj44Gf44KJ6Zai5pWw5ZG844Gz5Ye644GXXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuLy8gXHRyZXNpemVSZW1vdmVDbGFzcygpOy8vaXMtb3BlbiwgaXMtY2xvc2XjgpLlpJbjgZlcbi8vIFx0Ym9keUZpeGVkTm9uZSgpOy8vYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyB9KTtcblxuXG4vLyAqKlxuLy8g44OP44Oz44OQ44O844Ks44O844Oc44K/44Oz77ya44K/44OD44OBL+OCr+ODquODg+OCr1xuLy8gKipcbi8vIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1oYW1idXJnZXInKTtcbi8vIGNvbnN0IGhhbWJ1cmdlckNsYXNzID0gaGFtYnVyZ2VyLmNsYXNzTGlzdDtcbi8vIGNvbnN0IG15Qm9keSA9IGRvY3VtZW50LmJvZHk7XG4vLyBjb25zdCBteUJvZHlDbGFzcyA9IG15Qm9keS5jbGFzc0xpc3Q7XG5cbi8vIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcbi8vIFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcbi8vIFx0aGFtYnVyZ2VyQ2xpY2soKTtcbi8vIH0pO1xuXG4vLyBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyBcdGhhbWJ1cmdlckNsaWNrKCk7XG4vLyB9KTtcblxuXG4vLyAqKlxuLy8g44OK44OT44Ky44O844K344On44Oz44Gu44Oq44K544OI44KS44Kv44Oq44OD44Kv44GX44Gf44KJaXMtb3BlbuOCkua2iOOBme+8muOCv+ODg+ODgS/jgq/jg6rjg4Pjgq9cbi8vICoqXG4vLyBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1oYW0tY2xvc2VcIik7XG5cbi8vIG5hdkxpc3QuZm9yRWFjaCgoZWxtKSA9PiB7XG4vLyBcdGVsbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcbi8vIFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuLy8gXHRcdG5hdkNsaWNrKCk7Ly8gaXMtb3BlbuOCkuWkluOBmSxpcy1jbG9zZeOCkuS7mOOBkeOCiyxib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vIFx0fSk7XG4vLyB9KTtcblxuLy8gbmF2TGlzdC5mb3JFYWNoKChlbG0pID0+IHtcbi8vIFx0ZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuLy8gXHRcdG5hdkNsaWNrKCk7XG4vLyBcdH0pO1xuLy8gfSk7XG5cblxuXG4vLyBjb25zdCBoYW1idXJnZXJDbGljayA9ICgpID0+IHtcbi8vIFx0bGV0IG15UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuLy8gXHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1jbG9zZVwiKSkgey8vaXMtY2xvc2XjgYzjgYLjgaPjgZ/jgolcbi8vIFx0XHRyZW1vdmVDbG9zZSgpOy8vaXMtY2xvc2XjgpLlpJbjgZlcbi8vIFx0fSBlbHNlIHtcblxuLy8gXHRcdGlmIChoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHsvL2lzLW9wZW7jgYzjgYLjgaPjgZ/jgolcbi8vIFx0XHRcdGNvbnN0IHNjcm9sbFkgPSBteUJvZHkuc3R5bGUudG9wOy8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruiomOaGtlxuLy8gXHRcdFx0cmVtb3ZlT3BlbigpOy8vIGlzLW9wZW7jgpLlpJbjgZlcbi8vIFx0XHRcdGFkZENsb3NlKCk7Ly8gaXMtY2xvc2XjgpLku5jjgZHjgotcbi8vIFx0XHRcdGJvZHlGaXhlZE5vbmUoKTsvLyBib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vIFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChzY3JvbGxZIHx8ICcwJykgKiAtMSk7Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu5L+d5oyBXG4vLyBcdFx0fVxuLy8gXHR9O1xuXG4vLyBcdC8vIGlzLWNsb3Nl44KCaXMtb3BlbuOCguOBquOBi+OBo+OBn+OCiVxuLy8gXHRpZiAoIWhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikgJiYgIWhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkge1xuLy8gXHRcdGFkZE9wZW4oKTsvL2lzLW9wZW7jgpLjgaTjgZHjgotcbi8vIFx0XHRteUJvZHkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4vLyBcdFx0bXlCb2R5LnN0eWxlLnRvcCA9IGAtJHtteVBvc2l0aW9ufXB4YDtcbi8vIFx0fTtcbi8vIH07XG5cblxuLy8gLy8gKipcbi8vIC8v44Km44Kj44Oz44OJ44Km5bmF44GM5YiH44KK5pu/44KP44Gj44Gf44KJ44CBaXMtb3Blbnx8aXMtY2xvc2XjgpLlpJbjgZlcbi8vIC8vICoqXG4vLyBjb25zdCBtb29uTWluaVNpemUgPSA1NzA7XG4vLyBjb25zdCByZXNpemVSZW1vdmVDbGFzcyA9ICgpID0+IHtcbi8vIFx0bGV0IHggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuLy8gXHRpZiAoeCA+PSBtb29uTWluaVNpemUpIHtcbi8vIFx0XHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7Ly9pcy1vcGVu44GM44GC44Gj44Gf44KJXG4vLyBcdFx0XHRyZW1vdmVPcGVuKCk7Ly8gaXMtb3BlbuOCkuWkluOBmVxuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1jbG9zZVwiKSkgey8vaXMtY2xvc2XjgYzjgYLjgaPjgZ/jgolcbi8vIFx0XHRcdFx0cmVtb3ZlQ2xvc2UoKTsvL2lzLWNsb3Nl44KS5aSW44GZXG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9O1xuXG5cbi8vIC8vICoqXG4vLyAvLyBpcy1jbG9zZeOCkuWkluOBmVxuLy8gLy8gKipcbi8vIGNvbnN0IHJlbW92ZUNsb3NlID0gKCkgPT4ge1xuLy8gXHRoYW1idXJnZXJDbGFzcy5yZW1vdmUoJ2lzLWNsb3NlJyk7XG4vLyBcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtY2xvc2UnKTtcbi8vIH07XG5cbi8vIC8vICoqXG4vLyAvLyBpcy1jbG9zZeOCkuS7mOOBkeOCi1xuLy8gLy8gKipcbi8vIGNvbnN0IGFkZENsb3NlID0gKCkgPT4ge1xuLy8gXHRoYW1idXJnZXJDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG4vLyBcdG15Qm9keUNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcbi8vIH07XG5cbi8vIC8vICoqXG4vLyAvLyBpcy1vcGVu44KS5aSW44GZXG4vLyAvLyAqKlxuLy8gY29uc3QgcmVtb3ZlT3BlbiA9ICgpID0+IHtcbi8vIFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG4vLyBcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gfTtcblxuLy8gLy8gKipcbi8vIC8vIGlzLW9wZW7jgpLku5jjgZHjgotcbi8vIC8vICoqXG4vLyBjb25zdCBhZGRPcGVuID0gKCkgPT4ge1xuLy8gXHRoYW1idXJnZXJDbGFzcy5hZGQoJ2lzLW9wZW4nKTtcbi8vIFx0bXlCb2R5Q2xhc3MuYWRkKCdpcy1vcGVuJyk7XG4vLyB9O1xuXG5cbi8vIC8vICoqXG4vLyAvLyBib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vIC8vICoqXG4vLyBjb25zdCBib2R5Rml4ZWROb25lID0gKCkgPT4ge1xuLy8gXHRteUJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuLy8gXHRteUJvZHkuc3R5bGUudG9wID0gXCJcIjtcbi8vIFx0bXlCb2R5LnN0eWxlLnBhZGRpbmdUb3AgPSBcIlwiO1xuLy8gfTtcblxuLy8gLy8gKipcbi8vIC8vIOODiuODk+OCsuODvOOCt+ODp+ODs+OCr+ODquODg+OCr+OBvuOBqOOCgVxuLy8gLy8gKipcbi8vIGNvbnN0IG5hdkNsaWNrID0gKCkgPT4ge1xuLy8gXHRyZW1vdmVPcGVuKCk7Ly8gaXMtb3BlbuOCkuWkluOBmVxuLy8gXHRhZGRDbG9zZSgpOy8vIGlzLWNsb3Nl44KS5LuY44GR44KLXG4vLyBcdGJvZHlGaXhlZE5vbmUoKTsvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gfTtcblxuXG5cblxuIiwiLy8gKiogcGFydGljbGVzLmpz44KS5L2/44GGICoqXG5jb25zdCBteVBhcnRpY2xlSUQgPSBcImpzLW1pbGt5LXdheS1wYXJ0aWNsZVwiO1xuY29uc3QgcGFydGljbGVfc2hhcGUgPSBcInN0YXJcIjsgLy/jgrfjgqfjgqTjg5fjga7lvaLvvIhjaXJjbGU65Li444CBZWRnZTrlm5vop5LjgIF0cmlhbmdsZTrkuInop5LjgIFwb2x5Z29uOuWkmuinkuW9ouOAgXN0YXI65pif5Z6L44CBaW1hZ2U655S75YOP77yJXG5jb25zdCBudW1PZlN0YXJzID0gNDAwOyAvL+aYn+OBruaVsFxuY29uc3QgY29sb3JPZlN0YXJzID0gJyNmZmZmNTUnOyAvL+aYn+OBruiJslxuY29uc3Qgb3BhY2l0eU9mU3RhcnMgPSAwLjQ7IC8v5pif44Gu6YCP5piO5bqmXG5jb25zdCBzaXplT2ZTdGFycyA9IDM7IC8v5pif44Gu5aSn44GN44GVXG5jb25zdCBtb3ZlX2RpcmVjdGlvbiA9IFwicmlnaHRcIjsgLy/mtYHjgozjga7lkJHjgY0obm9uZeOAgXRvcOOAgXRvcC1yaWdodOOAgXJpZ2h044CBYm90dG9tLXJpZ2h044CBYm90dG9t44CBYm90dG9tLWxlZnTjgIFsZWZ044CBdG9wLWxlZnTjgojjgorpgbjmip4pXG5jb25zdCBtb3ZlX3NwZWVkID0gMTsgIC8v44K344Kn44Kk44OX44Gu5YuV44GP44K544OU44O844OJXG5cbnBhcnRpY2xlc0pTKG15UGFydGljbGVJRCwge1xuICBcInBhcnRpY2xlc1wiOiB7XG4gICAgXCJudW1iZXJcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBudW1PZlN0YXJzLFxuICAgICAgXCJkZW5zaXR5XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICBcInZhbHVlXCI6IGNvbG9yT2ZTdGFycyxcbiAgICB9LFxuICAgIFwic2hhcGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IHBhcnRpY2xlX3NoYXBlLFxuICAgICAgXCJzdHJva2VcIjogeyAvL+Wklue3mlxuICAgICAgICBcIndpZHRoXCI6IDAsXG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmXCJcbiAgICAgIH0sXG4gICAgICAvLyBcInBvbHlnb25cIjogeyAvL3R5cGXjgpJwb2x5Z29u44Gr44GX44Gf44Go44GN44Gu6Kit5a6aXG4gICAgICAvLyAgIFwibmJfc2lkZXNcIjogNVxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwiaW1hZ2VcIjogeyAvL3R5cGXjgpJpbWFnZeOBq+OBl+OBn+OBqOOBjeOBruioreWumlxuICAgICAgLy8gICBcInNyY1wiOiBcIlwiLFxuICAgICAgLy8gICBcIndpZHRoXCI6IDEwMCxcbiAgICAgIC8vICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICAvLyB9XG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBvcGFjaXR5T2ZTdGFycyxcbiAgICAgIFwicmFuZG9tXCI6IHRydWUsXG4gICAgICBcImFuaW1cIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLCAvL+OCt+OCp+OCpOODl+OBrumAj+aYjuW6puOCkuOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgICBcInNwZWVkXCI6IDEsXG4gICAgICAgIFwib3BhY2l0eV9taW5cIjogMC4yLCAvL+mAj+aYjuW6puOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2l6ZVwiOiB7XG4gICAgICBcInZhbHVlXCI6IHNpemVPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSwgLy/jgrfjgqfjgqTjg5fjga7lpKfjgY3jgZXjgpLjg6njg7Pjg4Djg6DjgavjgZnjgotcbiAgICAgIFwiYW5pbVwiOiB7IC8v44K344Kn44Kk44OX44Gu5aSn44GN44GV44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwic3BlZWRcIjogMSxcbiAgICAgICAgXCJzaXplX21pblwiOiAwLjIsIC8v5aSn44GN44GV44Gu5pyA5bCP5YCkXG4gICAgICAgIFwic3luY1wiOiBmYWxzZSAvL+WFqOOBpuOBruOCt+OCp+OCpOODl+OCkuWQjOaZguOBq+OCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICBcImVuYWJsZVwiOiBmYWxzZSwvLyDmmJ/jgajmmJ/jgpLnt5rjgafntZDjgbZcbiAgICAgIC8vIFwiZGlzdGFuY2VcIjogNTAwLFxuICAgICAgLy8gXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIC8vIFwib3BhY2l0eVwiOiAwLjQsXG4gICAgICAvLyBcIndpZHRoXCI6IDJcbiAgICB9LFxuICAgIFwibW92ZVwiOiB7XG4gICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgXCJzcGVlZFwiOiBtb3ZlX3NwZWVkLFxuICAgICAgXCJkaXJlY3Rpb25cIjogbW92ZV9kaXJlY3Rpb24sXG4gICAgICBcInJhbmRvbVwiOiBmYWxzZSxcbiAgICAgIFwic3RyYWlnaHRcIjogdHJ1ZSxcbiAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIiwgLy/jgqjjg6rjgqLlpJbjgavlh7rjgZ/jgrfjgqfjgqTjg5fjga7li5XjgY0ob3V044CBYm91bmNl44KI44KK6YG45oqeKVxuICAgICAgXCJib3VuY2VcIjogZmFsc2UsXG4gICAgICBcImF0dHJhY3RcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJyb3RhdGVYXCI6IDEwMDAsXG4gICAgICAgIFwicm90YXRlWVwiOiAxMDAwXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcImludGVyYWN0aXZpdHlcIjoge1xuICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXG4gICAgXCJldmVudHNcIjoge1xuICAgICAgXCJvbmhvdmVyXCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJtb2RlXCI6IFwiYnViYmxlXCIgLy/jg57jgqbjgrnjgqrjg7zjg5Djg7zmmYLjgavnmbrli5XjgZnjgovli5XjgY0o5LiL6KiYbW9kZXPlhoXjga5ncmFi44CBcmVwdWxzZeOAgWJ1YmJsZeOCiOOCiumBuOaKnilcbiAgICAgIH0sXG4gICAgICAvLyBcIm9uY2xpY2tcIjoge1xuICAgICAgLy8gICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgLy8gICBcIm1vZGVcIjogXCJidWJibGVcIiAvL+OCr+ODquODg+OCr+aZguOBq+eZuuWLleOBmeOCi+WLleOBjSjkuIvoqJhtb2Rlc+WGheOBrmdyYWLjgIFyZXB1bHNl44CBYnViYmxl44CBcHVzaOOAgXJlbW92ZeOCiOOCiumBuOaKnilcbiAgICAgIC8vIH0sXG4gICAgICBcInJlc2l6ZVwiOiB0cnVlIC8vY2FudmFz44Gu44K144Kk44K65aSJ5pu044Gr44KP44Gb44Gm5ouh5aSn57iu5bCP44GZ44KLXG4gICAgfSxcbiAgICBcIm1vZGVzXCI6IHtcbiAgICAgIC8vIFwiZ3JhYlwiOiB7IC8v44Kr44O844K944Or44Go44K344Kn44Kk44OX44Gu6ZaT44Gr57ea44GM6KGo56S644GV44KM44KLXG4gICAgICAvLyAgIFwiZGlzdGFuY2VcIjogNDAwLCAvL+OCq+ODvOOCveODq+OBi+OCieOBruWPjeW/nOi3nembolxuICAgICAgLy8gICBcImxpbmVfbGlua2VkXCI6IHtcbiAgICAgIC8vICAgICBcIm9wYWNpdHlcIjogMC41XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sXG4gICAgICBcImJ1YmJsZVwiOiB7IC8v44K344Kn44Kk44OX44GM6Iao44KJ44KAXG4gICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxuICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgXCJkdXJhdGlvblwiOiAwLjMsIC8v6Iao44KJ44KA44K344Kn44Kk44OX44Gu5oyB57aa5pmC6ZaTKG9uY2xpY2vmmYLjga7jgb8pXG4gICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICBcInNwZWVkXCI6IDMgLy/ohqjjgonjgoDjgrfjgqfjgqTjg5fjga7pgJ/luqYob25jbGlja+aZguOBruOBvylcbiAgICAgIH0sXG4gICAgICAvLyBcInJlcHVsc2VcIjogeyAvL+OCt+OCp+OCpOODl+OBjOOCq+ODvOOCveODq+OBi+OCiemAg+OBkuOCi1xuICAgICAgLy8gICBcImRpc3RhbmNlXCI6IDIwMCwgLy/jgqvjg7zjgr3jg6vjgYvjgonjga7lj43lv5zot53pm6JcbiAgICAgIC8vICAgXCJkdXJhdGlvblwiOiAwLjRcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcInB1c2hcIjogeyAvL+OCt+OCp+OCpOODl+OBjOWil+OBiOOCi1xuICAgICAgLy8gICBcInBhcnRpY2xlc19uYlwiOiA0IC8v5aKX44GI44KL44K344Kn44Kk44OX44Gu5pWwXG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJyZW1vdmVcIjoge1xuICAgICAgLy8gICBcInBhcnRpY2xlc19uYlwiOiAyIC8v5rib44KL44K344Kn44Kk44OX44Gu5pWwXG4gICAgICAvLyB9XG4gICAgfVxuICB9LFxuICBcInJldGluYV9kZXRlY3RcIjogdHJ1ZSAvL1JldGluYSBEaXNwbGF544Gr5a++5b+c44GZ44KLXG59KTtcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuXG5cblxuXG5cblxuLy8gKiogY2FudmFz5L2/44GG5aC05ZCIICoqXG4vLyBmdW5jdGlvbiByYW5kb20obG93LCBoaWdoKSB7XG4vLyAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpICsgbG93O1xuLy8gfVxuXG4vLyBjbGFzcyBWaXN1YWwge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMtbWlsa3ktd2F5Jyk7XG4vLyAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgICB0aGlzLmNhbnZhc1dpZHRoID0gMDtcbi8vICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IDA7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZUxlbmd0aCA9IDUwMDtcbi8vICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuLy8gICAgIHRoaXMucGFydGljbGVNYXhSYWRpdXMgPSAyO1xuXG4vLyAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4vLyAgICAgdGhpcy5yZW5kZXIoKTtcbi8vICAgfVxuXG4vLyAgIGluaXRpYWxpemUoKSB7XG4vLyAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVMZW5ndGg7IGkrKykge1xuLy8gICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaCh0aGlzLmNyZWF0ZVBhcnRpY2xlKGkpKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICByZXNpemVDYW52YXMoKSB7XG4vLyAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4vLyAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAyMDA7XG4vLyAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4vLyAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbi8vICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIHRoaXMuY29udGV4dC5zY2FsZSh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgd2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuLy8gICB9XG5cbi8vICAgY3JlYXRlUGFydGljbGUoaWQsIGlzUmVjcmVhdGUpIHtcbi8vICAgICBjb25zdCByYWRpdXMgPSByYW5kb20oMC41LCB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzKTtcbi8vICAgICBjb25zdCB4ID0gaXNSZWNyZWF0ZSA/IC1yYWRpdXMgLSByYW5kb20oMCwgdGhpcy5jYW52YXNXaWR0aCkgOiByYW5kb20oMCwgdGhpcy5jYW52YXNXaWR0aCk7XG4vLyAgICAgbGV0IHkgPSByYW5kb20odGhpcy5jYW52YXNIZWlnaHQgLyAyIC0gMTUwLCB0aGlzLmNhbnZhc0hlaWdodCAvIDIgKyAxNTApO1xuLy8gICAgIHkgKz0gcmFuZG9tKC0xMDAsIDEwMCk7XG4vLyAgICAgY29uc3QgYWxwaGEgPSByYW5kb20oMC4wNSwgMSk7XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgaWQ6IGlkLFxuLy8gICAgICAgeDogeCxcbi8vICAgICAgIHk6IHksXG4vLyAgICAgICBzdGFydFk6IHksXG4vLyAgICAgICByYWRpdXM6IHJhZGl1cyxcbi8vICAgICAgIGRlZmF1bHRSYWRpdXM6IHJhZGl1cyxcbi8vICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICBlbmRBbmdsZTogTWF0aC5QSSAqIDIsXG4vLyAgICAgICBhbHBoYTogYWxwaGEsXG4vLyAgICAgICAvLyBjb2xvcjogeyByOiByYW5kb20oMjU1LCAwKSwgZzogcmFuZG9tKDI1NSwgMCksIGI6IDAgfSxcbi8vICAgICAgIHNwZWVkOiBhbHBoYSArIDEsIC8v44Oe44Kk44OK44K544Gr44GZ44KL44Go5Y+z44GL44KJ5bemXG4vLyAgICAgICBhbXBsaXR1ZGU6IHJhbmRvbSg1MCwgMjAwKSxcbi8vICAgICAgIGlzQnVyc3Q6IGZhbHNlXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGRyYXdQYXJ0aWNsZXMoKSB7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4vLyAgICAgICAvLyDkvY3nva7mg4XloLHmm7TmlrBcbi8vICAgICAgIHRoaXMubW92ZVBhcnRpY2xlKHBhcnRpY2xlKTtcblxuLy8gICAgICAgLy8gcGFydGljbGXmj4/nlLtcbi8vICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbi8vICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsMjU1LDAsIC41KWA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSknO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFggPSAwO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSAwO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSAzMDtcblxuLy8gICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2JhKCR7cGFydGljbGUuY29sb3Iucn0sICR7cGFydGljbGUuY29sb3IuZ30sICR7cGFydGljbGUuY29sb3IuYn0sICR7cGFydGljbGUuYWxwaGF9KWA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBhcnRpY2xlLngsIHBhcnRpY2xlLnksIHBhcnRpY2xlLnJhZGl1cywgcGFydGljbGUuc3RhcnRBbmdsZSwgcGFydGljbGUuZW5kQW5nbGUpO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIG1vdmVQYXJ0aWNsZShwYXJ0aWNsZSkge1xuLy8gICAgIHBhcnRpY2xlLnggKz0gcGFydGljbGUuc3BlZWQ7XG4vLyAgICAgcGFydGljbGUueSA9IHBhcnRpY2xlLnN0YXJ0WSArIHBhcnRpY2xlLmFtcGxpdHVkZSAqIE1hdGguc2luKCgocGFydGljbGUueCAvIDUpICogTWF0aC5QSSkgLyAxODApO1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIC8vIGNhbnZhc+WIneacn+WMllxuLy8gICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCArIHRoaXMucGFydGljbGVNYXhSYWRpdXMgKiAyLCB0aGlzLmNhbnZhc0hlaWdodCk7XG5cbi8vICAgICAvLyBwYXJ0aWNsZeOCkuaPj+eUu1xuLy8gICAgIHRoaXMuZHJhd1BhcnRpY2xlcygpO1xuXG4vLyAgICAgLy8g55S76Z2i44GL44KJ5raI44GI44Gf44KJ5paw44GX44GEcGFydGljbGXjgavlt67jgZfmm7/jgYhcbi8vICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbi8vICAgICAgIGlmIChwYXJ0aWNsZS54IC0gcGFydGljbGUucmFkaXVzID49IHRoaXMuY2FudmFzV2lkdGgpIHtcbi8vICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbcGFydGljbGUuaWRdID0gdGhpcy5jcmVhdGVQYXJ0aWNsZShwYXJ0aWNsZS5pZCwgdHJ1ZSk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG5cbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4vLyAgIH1cbi8vIH1cbi8vIG5ldyBWaXN1YWwoKTtcblxuXG5cblxuLy8gZGl2MjAw55Sf5oiQXG4vLyBjb25zdCBjb3VudCA9IDIwMDtcbi8vIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWlsa3ktd2F5Jyk7XG4vLyBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vZnJhZ21lbnTkvZzmiJBcblxuLy8gZm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuLy8gICBsZXQgbWlsa2V5V2F5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleVdheS5jbGFzc05hbWUgPSBcInAtbWlsa3ktd2F5XCI7XG5cbi8vICAgbGV0IG1pbGtleU1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5TW92ZS5jbGFzc05hbWUgPSBcIm1pbGt5LW1vdmVcIjtcblxuLy8gICBsZXQgbWlsa2V5U3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlTdGFyLmNsYXNzTmFtZSA9IFwibWlsa3ktc3RhclwiO1xuXG4vLyAgIG1pbGtleU1vdmUuYXBwZW5kQ2hpbGQobWlsa2V5U3Rhcik7XG4vLyAgIG1pbGtleVdheS5hcHBlbmRDaGlsZChtaWxrZXlNb3ZlKTtcbi8vICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWlsa2V5V2F5KTtcbi8vIH1cblxuLy8gcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTsiLCIvLyBkYXRh5bGe5oCnXG4vLyBkYXRhLXNhX21hcmdpbu+8muihqOekuuOCv+OCpOODn+ODs+OCsOOCkuS9jee9ruOBp+OBmuOCieOBmVxuLy8gZGF0YS1zYV90cmlnZ2Vy77ya6KGo56S644K/44Kk44Of44Oz44Kw44Gu5Z+65rqW6KaB57Sg44KS5oyH5a6aXG4vLyBkYXRhLXNhX2RlbGF577ya6KGo56S644K/44Kk44Of44Oz44Kw44KS5pmC6ZaT44Gn44Ga44KJ44GZXG5cblxubGV0IEFuaW1DbGFzcyA9ICdqcy1zY3JvbGwtc2hvdyc7XG5sZXQgc2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzID0gJ3Nob3cnO1xubGV0IHRyaWdnZXJNYXJnaW5EZWZhdWx0ID0gMjAwO1xuXG5sZXQgc2Nyb2xsQW5pbUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQW5pbUNsYXNzKTtcbmxldCBzY3JvbGxBbmltYXRpb25GdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsQW5pbUVsbS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdHJpZ2dlck1hcmdpbiA9IHRyaWdnZXJNYXJnaW5EZWZhdWx0O1xuICAgICAgICBsZXQgZWxtID0gc2Nyb2xsQW5pbUVsbVtpXTtcbiAgICAgICAgbGV0IHNob3dQb3MgPSAwO1xuXG4gICAgICAgIC8vIG1hcmdpbuOBp+OBmuOCieOBmeWgtOWQiFxuICAgICAgICBpZiAoZWxtLmRhdGFzZXQuanNfZGF0YW1hcmdpbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0cmlnZ2VyTWFyZ2luID0gcGFyc2VJbnQoZWxtLmRhdGFzZXQuanNfbWFyZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyaWdnZXLjgYzjgYLjgovloLTlkIhcbiAgICAgICAgaWYgKGVsbS5kYXRhc2V0LmpzX3RyaWdnZXIpIHtcbiAgICAgICAgICAgIHNob3dQb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsbS5kYXRhc2V0LmpzX3RyaWdnZXIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRyaWdnZXJNYXJnaW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93UG9zID0gZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRyaWdnZXJNYXJnaW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmmYLplpPjgafjgZrjgonjgZnloLTlkIhcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHNob3dQb3MpIHtcbiAgICAgICAgICAgIGxldCBkZWxheSA9IChlbG0uZGF0YXNldC5qc19kZWxheSkgPyBlbG0uZGF0YXNldC5qc19kZWxheSA6IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbEFuaW1FbG1baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0uYmluZChudWxsLCBpKSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbiIsImxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuanMtc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCwvL+OCueODqeOCpOODieOBrumWk+OBrui3nembolxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGxvb3A6IHRydWUsLy/mnIDlvozjgavpgZTjgZfjgZ/jgonlhYjpoK3jgavmiLvjgotcbiAgICBzcGVlZDogMzAwLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG5cbiAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgIGZvcmNlVG9BeGlzOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsLy/jg5rjg7zjgrjjg43jg7zjgrfjg6fjg7Pjga7opoHntKBcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLC8v44Kv44Oq44OD44Kv44Gr5Y+N5b+c44GV44Gb44KLXG4gICAgICAgIGR5bmFtaWNCdWxsZXRzOiBmYWxzZSwvL+ODmuODvOOCuOODjeODvOOCt+ODp+ODs+OBq+W8t+W8seOBjOOBpOOBj1xuICAgIH0sXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH1cbn0pOyIsIi8vIOmKgOays+mJhOmBk+OCkuWbuuWumuOBmeOCi1xuY29uc3QgbXlUcmFpbiA9IGpRdWVyeShcIi5qcy10cmFpblwiKTtcbmNvbnN0IHRyYWluX3BvcyA9IG15VHJhaW4ub2Zmc2V0KCkudG9wO1xuY29uc3QgdHJhaW5faGVpZ2h0ID0gbXlUcmFpbi5vdXRlckhlaWdodCgpO1xuXG5cbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IHRyYWluX3BvcyArIDIyKSB7XG4gICAgICAgICAgICBteVRyYWluLmFkZENsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBteVRyYWluLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKiBBdXRob3IgOiBWaW5jZW50IEdhcnJlYXUgIC0gdmluY2VudGdhcnJlYXUuY29tXG4vKiBNSVQgbGljZW5zZTogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLyogRGVtbyAvIEdlbmVyYXRvciA6IHZpbmNlbnRnYXJyZWF1LmNvbS9wYXJ0aWNsZXMuanNcbi8qIEdpdEh1YiA6IGdpdGh1Yi5jb20vVmluY2VudEdhcnJlYXUvcGFydGljbGVzLmpzXG4vKiBIb3cgdG8gdXNlPyA6IENoZWNrIHRoZSBHaXRIdWIgUkVBRE1FXG4vKiB2Mi4wLjBcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5mdW5jdGlvbiBoZXhUb1JnYihlKXt2YXIgYT0vXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO2U9ZS5yZXBsYWNlKGEsZnVuY3Rpb24oZSxhLHQsaSl7cmV0dXJuIGErYSt0K3QraStpfSk7dmFyIHQ9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGUpO3JldHVybiB0P3tyOnBhcnNlSW50KHRbMV0sMTYpLGc6cGFyc2VJbnQodFsyXSwxNiksYjpwYXJzZUludCh0WzNdLDE2KX06bnVsbH1mdW5jdGlvbiBjbGFtcChlLGEsdCl7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGUsYSksdCl9ZnVuY3Rpb24gaXNJbkFycmF5KGUsYSl7cmV0dXJuIGEuaW5kZXhPZihlKT4tMX12YXIgcEpTPWZ1bmN0aW9uKGUsYSl7dmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitlK1wiID4gLnBhcnRpY2xlcy1qcy1jYW52YXMtZWxcIik7dGhpcy5wSlM9e2NhbnZhczp7ZWw6dCx3OnQub2Zmc2V0V2lkdGgsaDp0Lm9mZnNldEhlaWdodH0scGFydGljbGVzOntudW1iZXI6e3ZhbHVlOjQwMCxkZW5zaXR5OntlbmFibGU6ITAsdmFsdWVfYXJlYTo4MDB9fSxjb2xvcjp7dmFsdWU6XCIjZmZmXCJ9LHNoYXBlOnt0eXBlOlwiY2lyY2xlXCIsc3Ryb2tlOnt3aWR0aDowLGNvbG9yOlwiI2ZmMDAwMFwifSxwb2x5Z29uOntuYl9zaWRlczo1fSxpbWFnZTp7c3JjOlwiXCIsd2lkdGg6MTAwLGhlaWdodDoxMDB9fSxvcGFjaXR5Ont2YWx1ZToxLHJhbmRvbTohMSxhbmltOntlbmFibGU6ITEsc3BlZWQ6MixvcGFjaXR5X21pbjowLHN5bmM6ITF9fSxzaXplOnt2YWx1ZToyMCxyYW5kb206ITEsYW5pbTp7ZW5hYmxlOiExLHNwZWVkOjIwLHNpemVfbWluOjAsc3luYzohMX19LGxpbmVfbGlua2VkOntlbmFibGU6ITAsZGlzdGFuY2U6MTAwLGNvbG9yOlwiI2ZmZlwiLG9wYWNpdHk6MSx3aWR0aDoxfSxtb3ZlOntlbmFibGU6ITAsc3BlZWQ6MixkaXJlY3Rpb246XCJub25lXCIscmFuZG9tOiExLHN0cmFpZ2h0OiExLG91dF9tb2RlOlwib3V0XCIsYm91bmNlOiExLGF0dHJhY3Q6e2VuYWJsZTohMSxyb3RhdGVYOjNlMyxyb3RhdGVZOjNlM319LGFycmF5OltdfSxpbnRlcmFjdGl2aXR5OntkZXRlY3Rfb246XCJjYW52YXNcIixldmVudHM6e29uaG92ZXI6e2VuYWJsZTohMCxtb2RlOlwiZ3JhYlwifSxvbmNsaWNrOntlbmFibGU6ITAsbW9kZTpcInB1c2hcIn0scmVzaXplOiEwfSxtb2Rlczp7Z3JhYjp7ZGlzdGFuY2U6MTAwLGxpbmVfbGlua2VkOntvcGFjaXR5OjF9fSxidWJibGU6e2Rpc3RhbmNlOjIwMCxzaXplOjgwLGR1cmF0aW9uOi40fSxyZXB1bHNlOntkaXN0YW5jZToyMDAsZHVyYXRpb246LjR9LHB1c2g6e3BhcnRpY2xlc19uYjo0fSxyZW1vdmU6e3BhcnRpY2xlc19uYjoyfX0sbW91c2U6e319LHJldGluYV9kZXRlY3Q6ITEsZm46e2ludGVyYWN0Ont9LG1vZGVzOnt9LHZlbmRvcnM6e319LHRtcDp7fX07dmFyIGk9dGhpcy5wSlM7YSYmT2JqZWN0LmRlZXBFeHRlbmQoaSxhKSxpLnRtcC5vYmo9e3NpemVfdmFsdWU6aS5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxzaXplX2FuaW1fc3BlZWQ6aS5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLG1vdmVfc3BlZWQ6aS5wYXJ0aWNsZXMubW92ZS5zcGVlZCxsaW5lX2xpbmtlZF9kaXN0YW5jZTppLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSxsaW5lX2xpbmtlZF93aWR0aDppLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxtb2RlX2dyYWJfZGlzdGFuY2U6aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UsbW9kZV9idWJibGVfZGlzdGFuY2U6aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSxtb2RlX2J1YmJsZV9zaXplOmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxtb2RlX3JlcHVsc2VfZGlzdGFuY2U6aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2V9LGkuZm4ucmV0aW5hSW5pdD1mdW5jdGlvbigpe2kucmV0aW5hX2RldGVjdCYmd2luZG93LmRldmljZVBpeGVsUmF0aW8+MT8oaS5jYW52YXMucHhyYXRpbz13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxpLnRtcC5yZXRpbmE9ITApOihpLmNhbnZhcy5weHJhdGlvPTEsaS50bXAucmV0aW5hPSExKSxpLmNhbnZhcy53PWkuY2FudmFzLmVsLm9mZnNldFdpZHRoKmkuY2FudmFzLnB4cmF0aW8saS5jYW52YXMuaD1pLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQqaS5jYW52YXMucHhyYXRpbyxpLnBhcnRpY2xlcy5zaXplLnZhbHVlPWkudG1wLm9iai5zaXplX3ZhbHVlKmkuY2FudmFzLnB4cmF0aW8saS5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkPWkudG1wLm9iai5zaXplX2FuaW1fc3BlZWQqaS5jYW52YXMucHhyYXRpbyxpLnBhcnRpY2xlcy5tb3ZlLnNwZWVkPWkudG1wLm9iai5tb3ZlX3NwZWVkKmkuY2FudmFzLnB4cmF0aW8saS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U9aS50bXAub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlKmkuY2FudmFzLnB4cmF0aW8saS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2U9aS50bXAub2JqLm1vZGVfZ3JhYl9kaXN0YW5jZSppLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2U9aS50bXAub2JqLm1vZGVfYnViYmxlX2Rpc3RhbmNlKmkuY2FudmFzLnB4cmF0aW8saS5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg9aS50bXAub2JqLmxpbmVfbGlua2VkX3dpZHRoKmkuY2FudmFzLnB4cmF0aW8saS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplPWkudG1wLm9iai5tb2RlX2J1YmJsZV9zaXplKmkuY2FudmFzLnB4cmF0aW8saS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2U9aS50bXAub2JqLm1vZGVfcmVwdWxzZV9kaXN0YW5jZSppLmNhbnZhcy5weHJhdGlvfSxpLmZuLmNhbnZhc0luaXQ9ZnVuY3Rpb24oKXtpLmNhbnZhcy5jdHg9aS5jYW52YXMuZWwuZ2V0Q29udGV4dChcIjJkXCIpfSxpLmZuLmNhbnZhc1NpemU9ZnVuY3Rpb24oKXtpLmNhbnZhcy5lbC53aWR0aD1pLmNhbnZhcy53LGkuY2FudmFzLmVsLmhlaWdodD1pLmNhbnZhcy5oLGkmJmkuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGZ1bmN0aW9uKCl7aS5jYW52YXMudz1pLmNhbnZhcy5lbC5vZmZzZXRXaWR0aCxpLmNhbnZhcy5oPWkuY2FudmFzLmVsLm9mZnNldEhlaWdodCxpLnRtcC5yZXRpbmEmJihpLmNhbnZhcy53Kj1pLmNhbnZhcy5weHJhdGlvLGkuY2FudmFzLmgqPWkuY2FudmFzLnB4cmF0aW8pLGkuY2FudmFzLmVsLndpZHRoPWkuY2FudmFzLncsaS5jYW52YXMuZWwuaGVpZ2h0PWkuY2FudmFzLmgsaS5wYXJ0aWNsZXMubW92ZS5lbmFibGV8fChpLmZuLnBhcnRpY2xlc0VtcHR5KCksaS5mbi5wYXJ0aWNsZXNDcmVhdGUoKSxpLmZuLnBhcnRpY2xlc0RyYXcoKSxpLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKSksaS5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCl9KX0saS5mbi5jYW52YXNQYWludD1mdW5jdGlvbigpe2kuY2FudmFzLmN0eC5maWxsUmVjdCgwLDAsaS5jYW52YXMudyxpLmNhbnZhcy5oKX0saS5mbi5jYW52YXNDbGVhcj1mdW5jdGlvbigpe2kuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwwLGkuY2FudmFzLncsaS5jYW52YXMuaCl9LGkuZm4ucGFydGljbGU9ZnVuY3Rpb24oZSxhLHQpe2lmKHRoaXMucmFkaXVzPShpLnBhcnRpY2xlcy5zaXplLnJhbmRvbT9NYXRoLnJhbmRvbSgpOjEpKmkucGFydGljbGVzLnNpemUudmFsdWUsaS5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSYmKHRoaXMuc2l6ZV9zdGF0dXM9ITEsdGhpcy52cz1pLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQvMTAwLGkucGFydGljbGVzLnNpemUuYW5pbS5zeW5jfHwodGhpcy52cz10aGlzLnZzKk1hdGgucmFuZG9tKCkpKSx0aGlzLng9dD90Lng6TWF0aC5yYW5kb20oKSppLmNhbnZhcy53LHRoaXMueT10P3QueTpNYXRoLnJhbmRvbSgpKmkuY2FudmFzLmgsdGhpcy54PmkuY2FudmFzLnctMip0aGlzLnJhZGl1cz90aGlzLng9dGhpcy54LXRoaXMucmFkaXVzOnRoaXMueDwyKnRoaXMucmFkaXVzJiYodGhpcy54PXRoaXMueCt0aGlzLnJhZGl1cyksdGhpcy55PmkuY2FudmFzLmgtMip0aGlzLnJhZGl1cz90aGlzLnk9dGhpcy55LXRoaXMucmFkaXVzOnRoaXMueTwyKnRoaXMucmFkaXVzJiYodGhpcy55PXRoaXMueSt0aGlzLnJhZGl1cyksaS5wYXJ0aWNsZXMubW92ZS5ib3VuY2UmJmkuZm4udmVuZG9ycy5jaGVja092ZXJsYXAodGhpcyx0KSx0aGlzLmNvbG9yPXt9LFwib2JqZWN0XCI9PXR5cGVvZiBlLnZhbHVlKWlmKGUudmFsdWUgaW5zdGFuY2VvZiBBcnJheSl7dmFyIHM9ZS52YWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaS5wYXJ0aWNsZXMuY29sb3IudmFsdWUubGVuZ3RoKV07dGhpcy5jb2xvci5yZ2I9aGV4VG9SZ2Iocyl9ZWxzZSB2b2lkIDAhPWUudmFsdWUuciYmdm9pZCAwIT1lLnZhbHVlLmcmJnZvaWQgMCE9ZS52YWx1ZS5iJiYodGhpcy5jb2xvci5yZ2I9e3I6ZS52YWx1ZS5yLGc6ZS52YWx1ZS5nLGI6ZS52YWx1ZS5ifSksdm9pZCAwIT1lLnZhbHVlLmgmJnZvaWQgMCE9ZS52YWx1ZS5zJiZ2b2lkIDAhPWUudmFsdWUubCYmKHRoaXMuY29sb3IuaHNsPXtoOmUudmFsdWUuaCxzOmUudmFsdWUucyxsOmUudmFsdWUubH0pO2Vsc2VcInJhbmRvbVwiPT1lLnZhbHVlP3RoaXMuY29sb3IucmdiPXtyOk1hdGguZmxvb3IoMjU2Kk1hdGgucmFuZG9tKCkpKzAsZzpNYXRoLmZsb29yKDI1NipNYXRoLnJhbmRvbSgpKSswLGI6TWF0aC5mbG9vcigyNTYqTWF0aC5yYW5kb20oKSkrMH06XCJzdHJpbmdcIj09dHlwZW9mIGUudmFsdWUmJih0aGlzLmNvbG9yPWUsdGhpcy5jb2xvci5yZ2I9aGV4VG9SZ2IodGhpcy5jb2xvci52YWx1ZSkpO3RoaXMub3BhY2l0eT0oaS5wYXJ0aWNsZXMub3BhY2l0eS5yYW5kb20/TWF0aC5yYW5kb20oKToxKSppLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLGkucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUmJih0aGlzLm9wYWNpdHlfc3RhdHVzPSExLHRoaXMudm89aS5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnNwZWVkLzEwMCxpLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3luY3x8KHRoaXMudm89dGhpcy52bypNYXRoLnJhbmRvbSgpKSk7dmFyIG49e307c3dpdGNoKGkucGFydGljbGVzLm1vdmUuZGlyZWN0aW9uKXtjYXNlXCJ0b3BcIjpuPXt4OjAseTotMX07YnJlYWs7Y2FzZVwidG9wLXJpZ2h0XCI6bj17eDouNSx5Oi0uNX07YnJlYWs7Y2FzZVwicmlnaHRcIjpuPXt4OjEseTotMH07YnJlYWs7Y2FzZVwiYm90dG9tLXJpZ2h0XCI6bj17eDouNSx5Oi41fTticmVhaztjYXNlXCJib3R0b21cIjpuPXt4OjAseToxfTticmVhaztjYXNlXCJib3R0b20tbGVmdFwiOm49e3g6LS41LHk6MX07YnJlYWs7Y2FzZVwibGVmdFwiOm49e3g6LTEseTowfTticmVhaztjYXNlXCJ0b3AtbGVmdFwiOm49e3g6LS41LHk6LS41fTticmVhaztkZWZhdWx0Om49e3g6MCx5OjB9fWkucGFydGljbGVzLm1vdmUuc3RyYWlnaHQ/KHRoaXMudng9bi54LHRoaXMudnk9bi55LGkucGFydGljbGVzLm1vdmUucmFuZG9tJiYodGhpcy52eD10aGlzLnZ4Kk1hdGgucmFuZG9tKCksdGhpcy52eT10aGlzLnZ5Kk1hdGgucmFuZG9tKCkpKToodGhpcy52eD1uLngrTWF0aC5yYW5kb20oKS0uNSx0aGlzLnZ5PW4ueStNYXRoLnJhbmRvbSgpLS41KSx0aGlzLnZ4X2k9dGhpcy52eCx0aGlzLnZ5X2k9dGhpcy52eTt2YXIgcj1pLnBhcnRpY2xlcy5zaGFwZS50eXBlO2lmKFwib2JqZWN0XCI9PXR5cGVvZiByKXtpZihyIGluc3RhbmNlb2YgQXJyYXkpe3ZhciBjPXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnIubGVuZ3RoKV07dGhpcy5zaGFwZT1jfX1lbHNlIHRoaXMuc2hhcGU9cjtpZihcImltYWdlXCI9PXRoaXMuc2hhcGUpe3ZhciBvPWkucGFydGljbGVzLnNoYXBlO3RoaXMuaW1nPXtzcmM6by5pbWFnZS5zcmMscmF0aW86by5pbWFnZS53aWR0aC9vLmltYWdlLmhlaWdodH0sdGhpcy5pbWcucmF0aW98fCh0aGlzLmltZy5yYXRpbz0xKSxcInN2Z1wiPT1pLnRtcC5pbWdfdHlwZSYmdm9pZCAwIT1pLnRtcC5zb3VyY2Vfc3ZnJiYoaS5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyh0aGlzKSxpLnRtcC5wdXNoaW5nJiYodGhpcy5pbWcubG9hZGVkPSExKSl9fSxpLmZuLnBhcnRpY2xlLnByb3RvdHlwZS5kcmF3PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2kuY2FudmFzLmN0eC5kcmF3SW1hZ2UocixhLngtdCxhLnktdCwyKnQsMip0L2EuaW1nLnJhdGlvKX12YXIgYT10aGlzO2lmKHZvaWQgMCE9YS5yYWRpdXNfYnViYmxlKXZhciB0PWEucmFkaXVzX2J1YmJsZTtlbHNlIHZhciB0PWEucmFkaXVzO2lmKHZvaWQgMCE9YS5vcGFjaXR5X2J1YmJsZSl2YXIgcz1hLm9wYWNpdHlfYnViYmxlO2Vsc2UgdmFyIHM9YS5vcGFjaXR5O2lmKGEuY29sb3IucmdiKXZhciBuPVwicmdiYShcIithLmNvbG9yLnJnYi5yK1wiLFwiK2EuY29sb3IucmdiLmcrXCIsXCIrYS5jb2xvci5yZ2IuYitcIixcIitzK1wiKVwiO2Vsc2UgdmFyIG49XCJoc2xhKFwiK2EuY29sb3IuaHNsLmgrXCIsXCIrYS5jb2xvci5oc2wucytcIiUsXCIrYS5jb2xvci5oc2wubCtcIiUsXCIrcytcIilcIjtzd2l0Y2goaS5jYW52YXMuY3R4LmZpbGxTdHlsZT1uLGkuY2FudmFzLmN0eC5iZWdpblBhdGgoKSxhLnNoYXBlKXtjYXNlXCJjaXJjbGVcIjppLmNhbnZhcy5jdHguYXJjKGEueCxhLnksdCwwLDIqTWF0aC5QSSwhMSk7YnJlYWs7Y2FzZVwiZWRnZVwiOmkuY2FudmFzLmN0eC5yZWN0KGEueC10LGEueS10LDIqdCwyKnQpO2JyZWFrO2Nhc2VcInRyaWFuZ2xlXCI6aS5mbi52ZW5kb3JzLmRyYXdTaGFwZShpLmNhbnZhcy5jdHgsYS54LXQsYS55K3QvMS42NiwyKnQsMywyKTticmVhaztjYXNlXCJwb2x5Z29uXCI6aS5mbi52ZW5kb3JzLmRyYXdTaGFwZShpLmNhbnZhcy5jdHgsYS54LXQvKGkucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMy41KSxhLnktdC8uNzYsMi42Nip0LyhpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLGkucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsMSk7YnJlYWs7Y2FzZVwic3RhclwiOmkuZm4udmVuZG9ycy5kcmF3U2hhcGUoaS5jYW52YXMuY3R4LGEueC0yKnQvKGkucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvNCksYS55LXQvMS41MiwyKnQqMi42Ni8oaS5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zKSxpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLDIpO2JyZWFrO2Nhc2VcImltYWdlXCI6aWYoXCJzdmdcIj09aS50bXAuaW1nX3R5cGUpdmFyIHI9YS5pbWcub2JqO2Vsc2UgdmFyIHI9aS50bXAuaW1nX29iajtyJiZlKCl9aS5jYW52YXMuY3R4LmNsb3NlUGF0aCgpLGkucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aD4wJiYoaS5jYW52YXMuY3R4LnN0cm9rZVN0eWxlPWkucGFydGljbGVzLnNoYXBlLnN0cm9rZS5jb2xvcixpLmNhbnZhcy5jdHgubGluZVdpZHRoPWkucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aCxpLmNhbnZhcy5jdHguc3Ryb2tlKCkpLGkuY2FudmFzLmN0eC5maWxsKCl9LGkuZm4ucGFydGljbGVzQ3JlYXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxpLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7ZSsrKWkucGFydGljbGVzLmFycmF5LnB1c2gobmV3IGkuZm4ucGFydGljbGUoaS5wYXJ0aWNsZXMuY29sb3IsaS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkpfSxpLmZuLnBhcnRpY2xlc1VwZGF0ZT1mdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8aS5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoO2UrKyl7dmFyIGE9aS5wYXJ0aWNsZXMuYXJyYXlbZV07aWYoaS5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe3ZhciB0PWkucGFydGljbGVzLm1vdmUuc3BlZWQvMjthLngrPWEudngqdCxhLnkrPWEudnkqdH1pZihpLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlJiYoMT09YS5vcGFjaXR5X3N0YXR1cz8oYS5vcGFjaXR5Pj1pLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlJiYoYS5vcGFjaXR5X3N0YXR1cz0hMSksYS5vcGFjaXR5Kz1hLnZvKTooYS5vcGFjaXR5PD1pLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4mJihhLm9wYWNpdHlfc3RhdHVzPSEwKSxhLm9wYWNpdHktPWEudm8pLGEub3BhY2l0eTwwJiYoYS5vcGFjaXR5PTApKSxpLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlJiYoMT09YS5zaXplX3N0YXR1cz8oYS5yYWRpdXM+PWkucGFydGljbGVzLnNpemUudmFsdWUmJihhLnNpemVfc3RhdHVzPSExKSxhLnJhZGl1cys9YS52cyk6KGEucmFkaXVzPD1pLnBhcnRpY2xlcy5zaXplLmFuaW0uc2l6ZV9taW4mJihhLnNpemVfc3RhdHVzPSEwKSxhLnJhZGl1cy09YS52cyksYS5yYWRpdXM8MCYmKGEucmFkaXVzPTApKSxcImJvdW5jZVwiPT1pLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKXZhciBzPXt4X2xlZnQ6YS5yYWRpdXMseF9yaWdodDppLmNhbnZhcy53LHlfdG9wOmEucmFkaXVzLHlfYm90dG9tOmkuY2FudmFzLmh9O2Vsc2UgdmFyIHM9e3hfbGVmdDotYS5yYWRpdXMseF9yaWdodDppLmNhbnZhcy53K2EucmFkaXVzLHlfdG9wOi1hLnJhZGl1cyx5X2JvdHRvbTppLmNhbnZhcy5oK2EucmFkaXVzfTtzd2l0Y2goYS54LWEucmFkaXVzPmkuY2FudmFzLnc/KGEueD1zLnhfbGVmdCxhLnk9TWF0aC5yYW5kb20oKSppLmNhbnZhcy5oKTphLngrYS5yYWRpdXM8MCYmKGEueD1zLnhfcmlnaHQsYS55PU1hdGgucmFuZG9tKCkqaS5jYW52YXMuaCksYS55LWEucmFkaXVzPmkuY2FudmFzLmg/KGEueT1zLnlfdG9wLGEueD1NYXRoLnJhbmRvbSgpKmkuY2FudmFzLncpOmEueSthLnJhZGl1czwwJiYoYS55PXMueV9ib3R0b20sYS54PU1hdGgucmFuZG9tKCkqaS5jYW52YXMudyksaS5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSl7Y2FzZVwiYm91bmNlXCI6YS54K2EucmFkaXVzPmkuY2FudmFzLnc/YS52eD0tYS52eDphLngtYS5yYWRpdXM8MCYmKGEudng9LWEudngpLGEueSthLnJhZGl1cz5pLmNhbnZhcy5oP2Eudnk9LWEudnk6YS55LWEucmFkaXVzPDAmJihhLnZ5PS1hLnZ5KX1pZihpc0luQXJyYXkoXCJncmFiXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpJiZpLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZShhKSwoaXNJbkFycmF5KFwiYnViYmxlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpfHxpc0luQXJyYXkoXCJidWJibGVcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpJiZpLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlKGEpLChpc0luQXJyYXkoXCJyZXB1bHNlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpfHxpc0luQXJyYXkoXCJyZXB1bHNlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSYmaS5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUoYSksaS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlfHxpLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKWZvcih2YXIgbj1lKzE7bjxpLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7bisrKXt2YXIgcj1pLnBhcnRpY2xlcy5hcnJheVtuXTtpLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUmJmkuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyhhLHIpLGkucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUmJmkuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyhhLHIpLGkucGFydGljbGVzLm1vdmUuYm91bmNlJiZpLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyhhLHIpfX19LGkuZm4ucGFydGljbGVzRHJhdz1mdW5jdGlvbigpe2kuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwwLGkuY2FudmFzLncsaS5jYW52YXMuaCksaS5mbi5wYXJ0aWNsZXNVcGRhdGUoKTtmb3IodmFyIGU9MDtlPGkucGFydGljbGVzLmFycmF5Lmxlbmd0aDtlKyspe3ZhciBhPWkucGFydGljbGVzLmFycmF5W2VdO2EuZHJhdygpfX0saS5mbi5wYXJ0aWNsZXNFbXB0eT1mdW5jdGlvbigpe2kucGFydGljbGVzLmFycmF5PVtdfSxpLmZuLnBhcnRpY2xlc1JlZnJlc2g9ZnVuY3Rpb24oKXtjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkuZm4uY2hlY2tBbmltRnJhbWUpLGNhbmNlbFJlcXVlc3RBbmltRnJhbWUoaS5mbi5kcmF3QW5pbUZyYW1lKSxpLnRtcC5zb3VyY2Vfc3ZnPXZvaWQgMCxpLnRtcC5pbWdfb2JqPXZvaWQgMCxpLnRtcC5jb3VudF9zdmc9MCxpLmZuLnBhcnRpY2xlc0VtcHR5KCksaS5mbi5jYW52YXNDbGVhcigpLGkuZm4udmVuZG9ycy5zdGFydCgpfSxpLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXM9ZnVuY3Rpb24oZSxhKXt2YXIgdD1lLngtYS54LHM9ZS55LWEueSxuPU1hdGguc3FydCh0KnQrcypzKTtpZihuPD1pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7dmFyIHI9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eS1uLygxL2kucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkpL2kucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlO2lmKHI+MCl7dmFyIGM9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7aS5jYW52YXMuY3R4LnN0cm9rZVN0eWxlPVwicmdiYShcIitjLnIrXCIsXCIrYy5nK1wiLFwiK2MuYitcIixcIityK1wiKVwiLGkuY2FudmFzLmN0eC5saW5lV2lkdGg9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsaS5jYW52YXMuY3R4LmJlZ2luUGF0aCgpLGkuY2FudmFzLmN0eC5tb3ZlVG8oZS54LGUueSksaS5jYW52YXMuY3R4LmxpbmVUbyhhLngsYS55KSxpLmNhbnZhcy5jdHguc3Ryb2tlKCksaS5jYW52YXMuY3R4LmNsb3NlUGF0aCgpfX19LGkuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcz1mdW5jdGlvbihlLGEpe3ZhciB0PWUueC1hLngscz1lLnktYS55LG49TWF0aC5zcXJ0KHQqdCtzKnMpO2lmKG48PWkucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXt2YXIgcj10LygxZTMqaS5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVgpLGM9cy8oMWUzKmkucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVZKTtlLnZ4LT1yLGUudnktPWMsYS52eCs9cixhLnZ5Kz1jfX0saS5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXM9ZnVuY3Rpb24oZSxhKXt2YXIgdD1lLngtYS54LGk9ZS55LWEueSxzPU1hdGguc3FydCh0KnQraSppKSxuPWUucmFkaXVzK2EucmFkaXVzO24+PXMmJihlLnZ4PS1lLnZ4LGUudnk9LWUudnksYS52eD0tYS52eCxhLnZ5PS1hLnZ5KX0saS5mbi5tb2Rlcy5wdXNoUGFydGljbGVzPWZ1bmN0aW9uKGUsYSl7aS50bXAucHVzaGluZz0hMDtmb3IodmFyIHQ9MDtlPnQ7dCsrKWkucGFydGljbGVzLmFycmF5LnB1c2gobmV3IGkuZm4ucGFydGljbGUoaS5wYXJ0aWNsZXMuY29sb3IsaS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSx7eDphP2EucG9zX3g6TWF0aC5yYW5kb20oKSppLmNhbnZhcy53LHk6YT9hLnBvc195Ok1hdGgucmFuZG9tKCkqaS5jYW52YXMuaH0pKSx0PT1lLTEmJihpLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZXx8aS5mbi5wYXJ0aWNsZXNEcmF3KCksaS50bXAucHVzaGluZz0hMSl9LGkuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzPWZ1bmN0aW9uKGUpe2kucGFydGljbGVzLmFycmF5LnNwbGljZSgwLGUpLGkucGFydGljbGVzLm1vdmUuZW5hYmxlfHxpLmZuLnBhcnRpY2xlc0RyYXcoKX0saS5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZT1mdW5jdGlvbihlKXtmdW5jdGlvbiBhKCl7ZS5vcGFjaXR5X2J1YmJsZT1lLm9wYWNpdHksZS5yYWRpdXNfYnViYmxlPWUucmFkaXVzfWZ1bmN0aW9uIHQoYSx0LHMsbixjKXtpZihhIT10KWlmKGkudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQpe2lmKHZvaWQgMCE9cyl7dmFyIG89bi1wKihuLWEpL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24sbD1hLW87ZD1hK2wsXCJzaXplXCI9PWMmJihlLnJhZGl1c19idWJibGU9ZCksXCJvcGFjaXR5XCI9PWMmJihlLm9wYWNpdHlfYnViYmxlPWQpfX1lbHNlIGlmKHI8PWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe2lmKHZvaWQgMCE9cyl2YXIgdj1zO2Vsc2UgdmFyIHY9bjtpZih2IT1hKXt2YXIgZD1uLXAqKG4tYSkvaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbjtcInNpemVcIj09YyYmKGUucmFkaXVzX2J1YmJsZT1kKSxcIm9wYWNpdHlcIj09YyYmKGUub3BhY2l0eV9idWJibGU9ZCl9fWVsc2VcInNpemVcIj09YyYmKGUucmFkaXVzX2J1YmJsZT12b2lkIDApLFwib3BhY2l0eVwiPT1jJiYoZS5vcGFjaXR5X2J1YmJsZT12b2lkIDApfWlmKGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUmJmlzSW5BcnJheShcImJ1YmJsZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7dmFyIHM9ZS54LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxuPWUueS1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kscj1NYXRoLnNxcnQocypzK24qbiksYz0xLXIvaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZTtpZihyPD1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtpZihjPj0wJiZcIm1vdXNlbW92ZVwiPT1pLmludGVyYWN0aXZpdHkuc3RhdHVzKXtpZihpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUhPWkucGFydGljbGVzLnNpemUudmFsdWUpaWYoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplPmkucGFydGljbGVzLnNpemUudmFsdWUpe3ZhciBvPWUucmFkaXVzK2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSpjO28+PTAmJihlLnJhZGl1c19idWJibGU9byl9ZWxzZXt2YXIgbD1lLnJhZGl1cy1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsbz1lLnJhZGl1cy1sKmM7bz4wP2UucmFkaXVzX2J1YmJsZT1vOmUucmFkaXVzX2J1YmJsZT0wfWlmKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSE9aS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSlpZihpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHk+aS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSl7dmFyIHY9aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KmM7dj5lLm9wYWNpdHkmJnY8PWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSYmKGUub3BhY2l0eV9idWJibGU9dil9ZWxzZXt2YXIgdj1lLm9wYWNpdHktKGkucGFydGljbGVzLm9wYWNpdHkudmFsdWUtaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KSpjO3Y8ZS5vcGFjaXR5JiZ2Pj1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkmJihlLm9wYWNpdHlfYnViYmxlPXYpfX19ZWxzZSBhKCk7XCJtb3VzZWxlYXZlXCI9PWkuaW50ZXJhY3Rpdml0eS5zdGF0dXMmJmEoKX1lbHNlIGlmKGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUmJmlzSW5BcnJheShcImJ1YmJsZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7aWYoaS50bXAuYnViYmxlX2NsaWNraW5nKXt2YXIgcz1lLngtaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194LG49ZS55LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxyPU1hdGguc3FydChzKnMrbipuKSxwPSgobmV3IERhdGUpLmdldFRpbWUoKS1pLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSkvMWUzO3A+aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiYmKGkudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQ9ITApLHA+MippLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uJiYoaS50bXAuYnViYmxlX2NsaWNraW5nPSExLGkudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQ9ITEpfWkudG1wLmJ1YmJsZV9jbGlja2luZyYmKHQoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLGkucGFydGljbGVzLnNpemUudmFsdWUsZS5yYWRpdXNfYnViYmxlLGUucmFkaXVzLFwic2l6ZVwiKSx0KGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSxpLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLGUub3BhY2l0eV9idWJibGUsZS5vcGFjaXR5LFwib3BhY2l0eVwiKSl9fSxpLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZT1mdW5jdGlvbihlKXtmdW5jdGlvbiBhKCl7dmFyIGE9TWF0aC5hdGFuMihkLHApO2lmKGUudng9dSpNYXRoLmNvcyhhKSxlLnZ5PXUqTWF0aC5zaW4oYSksXCJib3VuY2VcIj09aS5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSl7dmFyIHQ9e3g6ZS54K2UudngseTplLnkrZS52eX07dC54K2UucmFkaXVzPmkuY2FudmFzLnc/ZS52eD0tZS52eDp0LngtZS5yYWRpdXM8MCYmKGUudng9LWUudngpLHQueStlLnJhZGl1cz5pLmNhbnZhcy5oP2Uudnk9LWUudnk6dC55LWUucmFkaXVzPDAmJihlLnZ5PS1lLnZ5KX19aWYoaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSYmaXNJbkFycmF5KFwicmVwdWxzZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSYmXCJtb3VzZW1vdmVcIj09aS5pbnRlcmFjdGl2aXR5LnN0YXR1cyl7dmFyIHQ9ZS54LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxzPWUueS1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksbj1NYXRoLnNxcnQodCp0K3Mqcykscj17eDp0L24seTpzL259LGM9aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2Usbz0xMDAsbD1jbGFtcCgxL2MqKC0xKk1hdGgucG93KG4vYywyKSsxKSpjKm8sMCw1MCksdj17eDplLngrci54KmwseTplLnkrci55Kmx9O1wiYm91bmNlXCI9PWkucGFydGljbGVzLm1vdmUub3V0X21vZGU/KHYueC1lLnJhZGl1cz4wJiZ2LngrZS5yYWRpdXM8aS5jYW52YXMudyYmKGUueD12LngpLHYueS1lLnJhZGl1cz4wJiZ2LnkrZS5yYWRpdXM8aS5jYW52YXMuaCYmKGUueT12LnkpKTooZS54PXYueCxlLnk9di55KX1lbHNlIGlmKGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUmJmlzSW5BcnJheShcInJlcHVsc2VcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpaWYoaS50bXAucmVwdWxzZV9maW5pc2h8fChpLnRtcC5yZXB1bHNlX2NvdW50KyssaS50bXAucmVwdWxzZV9jb3VudD09aS5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoJiYoaS50bXAucmVwdWxzZV9maW5pc2g9ITApKSxpLnRtcC5yZXB1bHNlX2NsaWNraW5nKXt2YXIgYz1NYXRoLnBvdyhpLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZS82LDMpLHA9aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194LWUueCxkPWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeS1lLnksbT1wKnArZCpkLHU9LWMvbSoxO2M+PW0mJmEoKX1lbHNlIDA9PWkudG1wLnJlcHVsc2VfY2xpY2tpbmcmJihlLnZ4PWUudnhfaSxlLnZ5PWUudnlfaSl9LGkuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlPWZ1bmN0aW9uKGUpe2lmKGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUmJlwibW91c2Vtb3ZlXCI9PWkuaW50ZXJhY3Rpdml0eS5zdGF0dXMpe3ZhciBhPWUueC1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsdD1lLnktaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LHM9TWF0aC5zcXJ0KGEqYSt0KnQpO2lmKHM8PWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlKXt2YXIgbj1pLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5LXMvKDEvaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSkvaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2U7aWYobj4wKXt2YXIgcj1pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtpLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGU9XCJyZ2JhKFwiK3IucitcIixcIityLmcrXCIsXCIrci5iK1wiLFwiK24rXCIpXCIsaS5jYW52YXMuY3R4LmxpbmVXaWR0aD1pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxpLmNhbnZhcy5jdHguYmVnaW5QYXRoKCksaS5jYW52YXMuY3R4Lm1vdmVUbyhlLngsZS55KSxpLmNhbnZhcy5jdHgubGluZVRvKGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kpLGkuY2FudmFzLmN0eC5zdHJva2UoKSxpLmNhbnZhcy5jdHguY2xvc2VQYXRoKCl9fX19LGkuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnM9ZnVuY3Rpb24oKXtcIndpbmRvd1wiPT1pLmludGVyYWN0aXZpdHkuZGV0ZWN0X29uP2kuaW50ZXJhY3Rpdml0eS5lbD13aW5kb3c6aS5pbnRlcmFjdGl2aXR5LmVsPWkuY2FudmFzLmVsLChpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlfHxpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSYmKGkuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsZnVuY3Rpb24oZSl7aWYoaS5pbnRlcmFjdGl2aXR5LmVsPT13aW5kb3cpdmFyIGE9ZS5jbGllbnRYLHQ9ZS5jbGllbnRZO2Vsc2UgdmFyIGE9ZS5vZmZzZXRYfHxlLmNsaWVudFgsdD1lLm9mZnNldFl8fGUuY2xpZW50WTtpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3g9YSxpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3k9dCxpLnRtcC5yZXRpbmEmJihpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gqPWkuY2FudmFzLnB4cmF0aW8saS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195Kj1pLmNhbnZhcy5weHJhdGlvKSxpLmludGVyYWN0aXZpdHkuc3RhdHVzPVwibW91c2Vtb3ZlXCJ9KSxpLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbihlKXtpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3g9bnVsbCxpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3k9bnVsbCxpLmludGVyYWN0aXZpdHkuc3RhdHVzPVwibW91c2VsZWF2ZVwifSkpLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUmJmkuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe2lmKGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeD1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195PWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxpLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZT0obmV3IERhdGUpLmdldFRpbWUoKSxpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXN3aXRjaChpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSl7Y2FzZVwicHVzaFwiOmkucGFydGljbGVzLm1vdmUuZW5hYmxlP2kuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhpLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlKToxPT1pLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmI/aS5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYixpLmludGVyYWN0aXZpdHkubW91c2UpOmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYj4xJiZpLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iKTticmVhaztjYXNlXCJyZW1vdmVcIjppLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhpLmludGVyYWN0aXZpdHkubW9kZXMucmVtb3ZlLnBhcnRpY2xlc19uYik7YnJlYWs7Y2FzZVwiYnViYmxlXCI6aS50bXAuYnViYmxlX2NsaWNraW5nPSEwO2JyZWFrO2Nhc2VcInJlcHVsc2VcIjppLnRtcC5yZXB1bHNlX2NsaWNraW5nPSEwLGkudG1wLnJlcHVsc2VfY291bnQ9MCxpLnRtcC5yZXB1bHNlX2ZpbmlzaD0hMSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS50bXAucmVwdWxzZV9jbGlja2luZz0hMX0sMWUzKmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmR1cmF0aW9uKX19KX0saS5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzPWZ1bmN0aW9uKCl7aWYoaS5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkuZW5hYmxlKXt2YXIgZT1pLmNhbnZhcy5lbC53aWR0aCppLmNhbnZhcy5lbC5oZWlnaHQvMWUzO2kudG1wLnJldGluYSYmKGUvPTIqaS5jYW52YXMucHhyYXRpbyk7dmFyIGE9ZSppLnBhcnRpY2xlcy5udW1iZXIudmFsdWUvaS5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYSx0PWkucGFydGljbGVzLmFycmF5Lmxlbmd0aC1hOzA+dD9pLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnModCkpOmkuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKHQpfX0saS5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcD1mdW5jdGlvbihlLGEpe2Zvcih2YXIgdD0wO3Q8aS5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoO3QrKyl7dmFyIHM9aS5wYXJ0aWNsZXMuYXJyYXlbdF0sbj1lLngtcy54LHI9ZS55LXMueSxjPU1hdGguc3FydChuKm4rcipyKTtjPD1lLnJhZGl1cytzLnJhZGl1cyYmKGUueD1hP2EueDpNYXRoLnJhbmRvbSgpKmkuY2FudmFzLncsZS55PWE/YS55Ok1hdGgucmFuZG9tKCkqaS5jYW52YXMuaCxpLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKGUpKX19LGkuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWc9ZnVuY3Rpb24oZSl7dmFyIGE9aS50bXAuc291cmNlX3N2Zyx0PS8jKFswLTlBLUZdezMsNn0pL2dpLHM9YS5yZXBsYWNlKHQsZnVuY3Rpb24oYSx0LGkscyl7aWYoZS5jb2xvci5yZ2IpdmFyIG49XCJyZ2JhKFwiK2UuY29sb3IucmdiLnIrXCIsXCIrZS5jb2xvci5yZ2IuZytcIixcIitlLmNvbG9yLnJnYi5iK1wiLFwiK2Uub3BhY2l0eStcIilcIjtlbHNlIHZhciBuPVwiaHNsYShcIitlLmNvbG9yLmhzbC5oK1wiLFwiK2UuY29sb3IuaHNsLnMrXCIlLFwiK2UuY29sb3IuaHNsLmwrXCIlLFwiK2Uub3BhY2l0eStcIilcIjtyZXR1cm4gbn0pLG49bmV3IEJsb2IoW3NdLHt0eXBlOlwiaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04XCJ9KSxyPXdpbmRvdy5VUkx8fHdpbmRvdy53ZWJraXRVUkx8fHdpbmRvdyxjPXIuY3JlYXRlT2JqZWN0VVJMKG4pLG89bmV3IEltYWdlO28uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe2UuaW1nLm9iaj1vLGUuaW1nLmxvYWRlZD0hMCxyLnJldm9rZU9iamVjdFVSTChjKSxpLnRtcC5jb3VudF9zdmcrK30pLG8uc3JjPWN9LGkuZm4udmVuZG9ycy5kZXN0cm95cEpTPWZ1bmN0aW9uKCl7Y2FuY2VsQW5pbWF0aW9uRnJhbWUoaS5mbi5kcmF3QW5pbUZyYW1lKSx0LnJlbW92ZSgpLHBKU0RvbT1udWxsfSxpLmZuLnZlbmRvcnMuZHJhd1NoYXBlPWZ1bmN0aW9uKGUsYSx0LGkscyxuKXt2YXIgcj1zKm4sYz1zL24sbz0xODAqKGMtMikvYyxsPU1hdGguUEktTWF0aC5QSSpvLzE4MDtlLnNhdmUoKSxlLmJlZ2luUGF0aCgpLGUudHJhbnNsYXRlKGEsdCksZS5tb3ZlVG8oMCwwKTtmb3IodmFyIHY9MDtyPnY7disrKWUubGluZVRvKGksMCksZS50cmFuc2xhdGUoaSwwKSxlLnJvdGF0ZShsKTtlLmZpbGwoKSxlLnJlc3RvcmUoKX0saS5mbi52ZW5kb3JzLmV4cG9ydEltZz1mdW5jdGlvbigpe3dpbmRvdy5vcGVuKGkuY2FudmFzLmVsLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSxcIl9ibGFua1wiKX0saS5mbi52ZW5kb3JzLmxvYWRJbWc9ZnVuY3Rpb24oZSl7aWYoaS50bXAuaW1nX2Vycm9yPXZvaWQgMCxcIlwiIT1pLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMpaWYoXCJzdmdcIj09ZSl7dmFyIGE9bmV3IFhNTEh0dHBSZXF1ZXN0O2Eub3BlbihcIkdFVFwiLGkucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyksYS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oZSl7ND09YS5yZWFkeVN0YXRlJiYoMjAwPT1hLnN0YXR1cz8oaS50bXAuc291cmNlX3N2Zz1lLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UsaS5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpKTooY29uc29sZS5sb2coXCJFcnJvciBwSlMgLSBJbWFnZSBub3QgZm91bmRcIiksaS50bXAuaW1nX2Vycm9yPSEwKSl9LGEuc2VuZCgpfWVsc2V7dmFyIHQ9bmV3IEltYWdlO3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe2kudG1wLmltZ19vYmo9dCxpLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCl9KSx0LnNyYz1pLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmN9ZWxzZSBjb25zb2xlLmxvZyhcIkVycm9yIHBKUyAtIE5vIGltYWdlLnNyY1wiKSxpLnRtcC5pbWdfZXJyb3I9ITB9LGkuZm4udmVuZG9ycy5kcmF3PWZ1bmN0aW9uKCl7XCJpbWFnZVwiPT1pLnBhcnRpY2xlcy5zaGFwZS50eXBlP1wic3ZnXCI9PWkudG1wLmltZ190eXBlP2kudG1wLmNvdW50X3N2Zz49aS5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlPyhpLmZuLnBhcnRpY2xlc0RyYXcoKSxpLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZT9pLmZuLmRyYXdBbmltRnJhbWU9cmVxdWVzdEFuaW1GcmFtZShpLmZuLnZlbmRvcnMuZHJhdyk6Y2FuY2VsUmVxdWVzdEFuaW1GcmFtZShpLmZuLmRyYXdBbmltRnJhbWUpKTppLnRtcC5pbWdfZXJyb3J8fChpLmZuLmRyYXdBbmltRnJhbWU9cmVxdWVzdEFuaW1GcmFtZShpLmZuLnZlbmRvcnMuZHJhdykpOnZvaWQgMCE9aS50bXAuaW1nX29iaj8oaS5mbi5wYXJ0aWNsZXNEcmF3KCksaS5wYXJ0aWNsZXMubW92ZS5lbmFibGU/aS5mbi5kcmF3QW5pbUZyYW1lPXJlcXVlc3RBbmltRnJhbWUoaS5mbi52ZW5kb3JzLmRyYXcpOmNhbmNlbFJlcXVlc3RBbmltRnJhbWUoaS5mbi5kcmF3QW5pbUZyYW1lKSk6aS50bXAuaW1nX2Vycm9yfHwoaS5mbi5kcmF3QW5pbUZyYW1lPXJlcXVlc3RBbmltRnJhbWUoaS5mbi52ZW5kb3JzLmRyYXcpKTooaS5mbi5wYXJ0aWNsZXNEcmF3KCksaS5wYXJ0aWNsZXMubW92ZS5lbmFibGU/aS5mbi5kcmF3QW5pbUZyYW1lPXJlcXVlc3RBbmltRnJhbWUoaS5mbi52ZW5kb3JzLmRyYXcpOmNhbmNlbFJlcXVlc3RBbmltRnJhbWUoaS5mbi5kcmF3QW5pbUZyYW1lKSl9LGkuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXc9ZnVuY3Rpb24oKXtcImltYWdlXCI9PWkucGFydGljbGVzLnNoYXBlLnR5cGU/XCJzdmdcIj09aS50bXAuaW1nX3R5cGUmJnZvaWQgMD09aS50bXAuc291cmNlX3N2Zz9pLnRtcC5jaGVja0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGNoZWNrKTooY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShpLnRtcC5jaGVja0FuaW1GcmFtZSksaS50bXAuaW1nX2Vycm9yfHwoaS5mbi52ZW5kb3JzLmluaXQoKSxpLmZuLnZlbmRvcnMuZHJhdygpKSk6KGkuZm4udmVuZG9ycy5pbml0KCksaS5mbi52ZW5kb3JzLmRyYXcoKSl9LGkuZm4udmVuZG9ycy5pbml0PWZ1bmN0aW9uKCl7aS5mbi5yZXRpbmFJbml0KCksaS5mbi5jYW52YXNJbml0KCksaS5mbi5jYW52YXNTaXplKCksaS5mbi5jYW52YXNQYWludCgpLGkuZm4ucGFydGljbGVzQ3JlYXRlKCksaS5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCksaS5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU9aGV4VG9SZ2IoaS5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3IpfSxpLmZuLnZlbmRvcnMuc3RhcnQ9ZnVuY3Rpb24oKXtpc0luQXJyYXkoXCJpbWFnZVwiLGkucGFydGljbGVzLnNoYXBlLnR5cGUpPyhpLnRtcC5pbWdfdHlwZT1pLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMuc3Vic3RyKGkucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5sZW5ndGgtMyksaS5mbi52ZW5kb3JzLmxvYWRJbWcoaS50bXAuaW1nX3R5cGUpKTppLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCl9LGkuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMoKSxpLmZuLnZlbmRvcnMuc3RhcnQoKX07T2JqZWN0LmRlZXBFeHRlbmQ9ZnVuY3Rpb24oZSxhKXtmb3IodmFyIHQgaW4gYSlhW3RdJiZhW3RdLmNvbnN0cnVjdG9yJiZhW3RdLmNvbnN0cnVjdG9yPT09T2JqZWN0PyhlW3RdPWVbdF18fHt9LGFyZ3VtZW50cy5jYWxsZWUoZVt0XSxhW3RdKSk6ZVt0XT1hW3RdO3JldHVybiBlfSx3aW5kb3cucmVxdWVzdEFuaW1GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXt3aW5kb3cuc2V0VGltZW91dChlLDFlMy82MCl9fSgpLHdpbmRvdy5jYW5jZWxSZXF1ZXN0QW5pbUZyYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZXx8Y2xlYXJUaW1lb3V0fSgpLHdpbmRvdy5wSlNEb209W10sd2luZG93LnBhcnRpY2xlc0pTPWZ1bmN0aW9uKGUsYSl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJihhPWUsZT1cInBhcnRpY2xlcy1qc1wiKSxlfHwoZT1cInBhcnRpY2xlcy1qc1wiKTt2YXIgdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSxpPVwicGFydGljbGVzLWpzLWNhbnZhcy1lbFwiLHM9dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpO2lmKHMubGVuZ3RoKWZvcig7cy5sZW5ndGg+MDspdC5yZW1vdmVDaGlsZChzWzBdKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO24uY2xhc3NOYW1lPWksbi5zdHlsZS53aWR0aD1cIjEwMCVcIixuLnN0eWxlLmhlaWdodD1cIjEwMCVcIjt2YXIgcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKS5hcHBlbmRDaGlsZChuKTtudWxsIT1yJiZwSlNEb20ucHVzaChuZXcgcEpTKGUsYSkpfSx3aW5kb3cucGFydGljbGVzSlMubG9hZD1mdW5jdGlvbihlLGEsdCl7dmFyIGk9bmV3IFhNTEh0dHBSZXF1ZXN0O2kub3BlbihcIkdFVFwiLGEpLGkub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKGEpe2lmKDQ9PWkucmVhZHlTdGF0ZSlpZigyMDA9PWkuc3RhdHVzKXt2YXIgcz1KU09OLnBhcnNlKGEuY3VycmVudFRhcmdldC5yZXNwb25zZSk7d2luZG93LnBhcnRpY2xlc0pTKGUscyksdCYmdCgpfWVsc2UgY29uc29sZS5sb2coXCJFcnJvciBwSlMgLSBYTUxIdHRwUmVxdWVzdCBzdGF0dXM6IFwiK2kuc3RhdHVzKSxjb25zb2xlLmxvZyhcIkVycm9yIHBKUyAtIEZpbGUgY29uZmlnIG5vdCBmb3VuZFwiKX0saS5zZW5kKCl9OyIsIi8qKlxuICogQG1vZHVsZXMgOiBub2RlX21vZHVsZXPjg5Xjgqnjg6vjg4Djgb7jgafjga7ntbblr77jg5Hjgrnjga7jgqjjgqTjg6rjgqLjgrlcbiAqIHdlYnBhY2suY29uZmlnLmpz44Gr44Gm5a6a576p44GX44Gm44GE44KLXG4gKi9cblxuLy8gaW1wb3J0ICdAbW9kdWxlcy9zdmd4dXNlJzsgLy9TVkfjgrnjg5fjg6njgqTjg4jjgpJJReOBp+S9v+eUqOOBmeOCi+OBn+OCgeOBruODqeOCpOODluODqeODqlxuLy8gaW1wb3J0ICcuL2xpYi9iX2Jyb3dzZXJfc3dpdGNoZXIuanMnOyAvL+ODluODqeOCpuOCtuWIpOWumuOBruOBn+OCgeODqeOCpOODluODqeODqlxuXG5cbi8vIGltcG9ydCAnLi9saWIvZmFzdGNsaWNrLmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlGYXN0Q2xpY2suanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVRyYWluLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlIZWFkZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUhhbWJ1cmdlci5qcyc7XG5pbXBvcnQgJy4vbGliL3BhcnRpY2xlcy5taW4uanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teU1pbGt5V2F5LmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlTd2lwZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVNjcm9sbFNob3cuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9kYXRhLXNwbGl0dGluZy5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215RmFsbGluZ0JveC5qcyc7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9
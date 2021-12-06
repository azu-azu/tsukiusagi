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

// スクロールしたら関数呼び出し
window.addEventListener('scroll', function () {
  headerFade();
  headerBackDown();
}); // ロードしたら関数呼び出し

window.addEventListener('load', function () {
  headerFade();
  headerBackDown();
}); // ウィンドウ幅が切り替わったら関数呼び出し

window.addEventListener('resize', function () {
  resizeRemoveClass(); //is-open, is-closeを外す

  bodyFixedNone(); //bodyのfixedを外す
}); // **
// ハンバーガーボタン：タッチ or クリック
// **

var hamburger = document.getElementById('js-hamburger');
var hamburgerClass = hamburger.classList;
var myBody = document.body;
var myBodyClass = myBody.classList;
var flag = false;
hamburger.addEventListener('touchstart', function () {
  flag = true;
  hamburgerClick();
});
hamburger.addEventListener('click', function () {
  if (flag) {
    flag = false;
  } else {
    hamburgerClick();
  }
}); // **
// ナビゲーションのリストをクリックしたらis-openを消す
// **

var navList = document.querySelectorAll(".js-marker");
navList.forEach(function (elm) {
  elm.addEventListener('touchstart', function () {
    flag = true;
    removeOpen(); // is-openを外す

    addClose(); // is-closeを付ける

    bodyFixedNone(); //bodyのfixedを外す
  });
});
navList.forEach(function (elm) {
  elm.addEventListener('click', function () {
    if (flag) {
      flag = false;
    } else {
      removeOpen(); // is-openを外す

      addClose(); // is-closeを付ける

      bodyFixedNone(); //bodyのfixedを外す
    }
  });
}); // ----------------------------------------------------
// 関数
// ----------------------------------------------------
// **
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


var layoutHeader = document.getElementById('js-l-header');
var layoutHeaderClass = layoutHeader.classList;

var headerBackDown = function headerBackDown() {
  var myTarget = document.getElementById("works");
  var rect = myTarget.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var targetTop = rect.top + scrollTop;

  if (scrollTop >= targetTop) {
    headerClass.remove("UpMove", 'p-header--top', "is-fade"); // クラス名除去

    headerClass.add('DownMove', 'p-header--back'); // クラス名追加

    layoutHeaderClass.add('back'); // クラス名追加
  } else {
    if (headerClass.contains("DownMove")) {
      //すでにクラス名がついていたら
      layoutHeaderClass.remove('back'); // クラス名除去

      headerClass.remove('DownMove', 'p-header--back'); // クラス名除去

      headerClass.add('UpMove', 'p-header--top'); // クラス名追加
    }
  }
};

var hamburgerClick = function hamburgerClick() {
  var myPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (hamburgerClass.contains("is-close")) {
    //is-closeがあったら
    removeClose(); //is-closeを外す
  } else {
    if (hamburgerClass.contains("is-open")) {
      //is-openがあったら
      var scrollY = myBody.style.top; // スクロール位置の記憶

      removeOpen(); // is-openを外す

      addClose(); // is-closeを付ける

      bodyFixedNone(); // bodyのfixedを外す

      window.scrollTo(0, parseInt(scrollY || '0') * -1); // スクロール位置の保持
    }
  }

  ; // is-closeもis-openもなかったら

  if (!hamburgerClass.contains("is-close") && !hamburgerClass.contains("is-open")) {
    addOpen(); //is-openをつける

    myBody.style.position = "fixed";
    myBody.style.top = "-".concat(myPosition, "px");
  }

  ;
}; // **
//ウィンドウ幅が切り替わったら、is-open||is-closeを外す
// **


var moonMiniSize = 570;

var resizeRemoveClass = function resizeRemoveClass() {
  var x = document.body.clientWidth;

  if (x >= moonMiniSize) {
    if (hamburgerClass.contains("is-open")) {
      //is-openがあったら
      removeOpen(); // is-openを外す
    } else {
      if (hamburgerClass.contains("is-close")) {
        //is-closeがあったら
        removeClose(); //is-closeを外す
      }
    }
  }
}; // **
// is-closeを外す
// **


var removeClose = function removeClose() {
  hamburgerClass.remove('is-close');
  myBodyClass.remove('is-close');
}; // **
// is-closeを付ける
// **


var addClose = function addClose() {
  hamburgerClass.add('is-close');
  myBodyClass.add('is-close');
}; // **
// is-openを外す
// **


var removeOpen = function removeOpen() {
  hamburgerClass.remove('is-open');
  myBodyClass.remove('is-open');
}; // **
// is-openを付ける
// **


var addOpen = function addOpen() {
  hamburgerClass.add('is-open');
  myBodyClass.add('is-open');
}; // **
// bodyのfixedを外す
// **


var bodyFixedNone = function bodyFixedNone() {
  myBody.style.position = "";
  myBody.style.top = "";
  myBody.style.paddingTop = "";
}; // // ウィンドウ幅が切り替わったとき
// const moonMiniSize = 570;
// jQuery(function ($) {
// 	$(window).resize(function () {
// 		let x = $(window).width();
// 		let y = moonMiniSize;
// 		if (x >= y) {
// 			$("#js-hamburger").removeClass("is-open");
// 			$("body").removeClass("is-open");
// 			// $("#js-hamburger").addClass("is-close");
// 			// $("body").addClass("is-close");
// 			bodyFixedNone();//bodyのfixedを外す
// 		}
// 		else {
// 		}
// 	});
// })
// **
// ハンバーガーボタン：クリックイベント
// **
// const hamburger = document.getElementById('js-hamburger');
// const hamburgerClass = hamburger.classList;
// const myBody = document.body;
// const myBodyClass = myBody.classList;
// hamburger.addEventListener('click', () => {
// 	let myPosition = window.pageYOffset || document.documentElement.scrollTop;
// 	//is-closeがあったら
// 	if (hamburgerClass.contains("is-close")) {
// 		//is-closeを外す
// 		hamburgerClass.remove('is-close');
// 		myBodyClass.remove('is-close');
// 		//is-openをつける
// 		hamburgerClass.add('is-open');
// 		myBodyClass.add('is-open');
// 		myBody.style.position = "fixed";
// 		myBody.style.top = `-${myPosition}px`;
// 	} else {
// 		//is-openがあったら
// 		if (hamburgerClass.contains("is-open")) {
// 			// スクロール位置の記憶
// 			const scrollY = myBody.style.top;
// 			// is-openを外す
// 			hamburgerClass.remove('is-open');
// 			myBodyClass.remove('is-open');
// 			// is-closeをつける
// 			hamburgerClass.add('is-close');
// 			myBodyClass.add('is-close');
// 			// bodyのfixedを外す
// 			bodyFixedNone();
// 			// スクロール位置の保持
// 			window.scrollTo(0, parseInt(scrollY || '0') * -1);
// 		}
// 	}
// });
// **
// is-openを消す
// **
// ハンバーガーメニューのリストをクリックしたとき
// const navList = document.querySelectorAll(".js-marker");
// navList.forEach((elm) => {
// 	elm.addEventListener('click', () => {
// 		hamburgerClass.remove('is-open');
// 		myBodyClass.remove('is-open');
// 		hamburgerClass.add('is-close');
// 		myBodyClass.add('is-close');
// 		//bodyのfixedを外す
// 		bodyFixedNone();
// 	});
// });

/***/ }),

/***/ "../_assets/js/common/myHover.js":
/*!***************************************!*\
  !*** ../_assets/js/common/myHover.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var myList = document.querySelectorAll('.js-marker');
var moonMiniSize = 570; // ロードしたとき

window.addEventListener('load', function () {
  var x = document.body.clientWidth;

  if (x >= moonMiniSize) {
    myList.forEach(function (item) {
      item.addEventListener('mousemove', function (e) {
        moveIndicator(e.target);
      });
    });
  }
}); // resizeしたとき

window.addEventListener("resize", resize());

function resize() {
  if (window.matchMedia("(min-width: ".concat(moonMiniSize, "px)")).matches) {
    myList.forEach(function (item) {
      item.addEventListener('mousemove', function (e) {
        moveIndicator(e.target);
      });
    });
  } else {
    removeIndicator();
  }
} // window.addEventListener('resize', () => {
//   let x = document.body.clientWidth;
//   if (x >= moonMiniSize) {
//     myList.forEach((item) => {
//       item.addEventListener('mousemove', (e) => {
//         moveIndicator(e.target);
//       });
//     });
//   } else {
//     removeIndicator();
//   }
// });
// ----------------------------------------------------
// 関数
// ----------------------------------------------------


function moveIndicator(e) {
  var marker = document.getElementById('js-marker');
  marker.style.opacity = 1;
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

function removeIndicator() {
  var marker = document.getElementById('js-marker');
  marker.style.opacity = '';
  marker.style.left = '';
  marker.style.width = '';
}

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
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/myHeader.js */ "../_assets/js/common/myHeader.js");
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_myHeader_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_myHover_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/myHover.js */ "../_assets/js/common/myHover.js");
/* harmony import */ var _common_myHover_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_myHover_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_myInvalidHover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/myInvalidHover */ "../_assets/js/common/myInvalidHover.js");
/* harmony import */ var _common_myInvalidHover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_myInvalidHover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/smooth-scroll.js */ "../_assets/js/common/smooth-scroll.js");
/* harmony import */ var _common_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/myMilkyWay.js */ "../_assets/js/common/myMilkyWay.js");
/* harmony import */ var _common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/myScrollShow.js */ "../_assets/js/common/myScrollShow.js");
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_data_splitting_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/data-splitting.js */ "../_assets/js/common/data-splitting.js");
/* harmony import */ var _common_data_splitting_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_data_splitting_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/myFallingBox.js */ "../_assets/js/common/myFallingBox.js");
/* harmony import */ var _common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_myFallingBox_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/myWave.js */ "../_assets/js/common/myWave.js");
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_myWave_js__WEBPACK_IMPORTED_MODULE_10__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
// import '@modules/svgxuse'; //SVGスプライトをIEで使用するためのライブラリ
// import './lib/b_browser_switcher.js'; //ブラウザ判定のためライブラリ










 // import './common/myBubblyButton.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUZhbGxpbmdCb3guanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215SGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUhvdmVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUludmFsaWRIb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlNaWxreVdheS5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlTY3JvbGxTaG93LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVN3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlUcmFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlXYXZlLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9zbW9vdGgtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOlsiU3BsaXR0aW5nIiwid2hpdGVzcGFjZSIsImNvdW50IiwicGFyZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImkiLCJzZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJyb3RhdGVCYWNrIiwiZmFsbGluZ0xheWVyIiwibGluZUhpdGJveCIsImxpbmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGVhZGVyRmFkZSIsImhlYWRlckJhY2tEb3duIiwicmVzaXplUmVtb3ZlQ2xhc3MiLCJib2R5Rml4ZWROb25lIiwiaGFtYnVyZ2VyIiwiaGFtYnVyZ2VyQ2xhc3MiLCJjbGFzc0xpc3QiLCJteUJvZHkiLCJib2R5IiwibXlCb2R5Q2xhc3MiLCJmbGFnIiwiaGFtYnVyZ2VyQ2xpY2siLCJuYXZMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbG0iLCJyZW1vdmVPcGVuIiwiYWRkQ2xvc2UiLCJteUhlYWRlciIsImhlYWRlckNsYXNzIiwiaGVhZGVyRmFkZVBvc2l0aW9uIiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGQiLCJyZW1vdmUiLCJsYXlvdXRIZWFkZXIiLCJsYXlvdXRIZWFkZXJDbGFzcyIsIm15VGFyZ2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhcmdldFRvcCIsInRvcCIsImNvbnRhaW5zIiwibXlQb3NpdGlvbiIsInJlbW92ZUNsb3NlIiwic2Nyb2xsWSIsInN0eWxlIiwic2Nyb2xsVG8iLCJwYXJzZUludCIsImFkZE9wZW4iLCJwb3NpdGlvbiIsIm1vb25NaW5pU2l6ZSIsIngiLCJjbGllbnRXaWR0aCIsInBhZGRpbmdUb3AiLCJteUxpc3QiLCJpdGVtIiwiZSIsIm1vdmVJbmRpY2F0b3IiLCJ0YXJnZXQiLCJyZXNpemUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInJlbW92ZUluZGljYXRvciIsIm1hcmtlciIsIm9wYWNpdHkiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJteVBhcnRpY2xlSUQiLCJwYXJ0aWNsZV9zaGFwZSIsIm51bU9mU3RhcnMiLCJjb2xvck9mU3RhcnMiLCJvcGFjaXR5T2ZTdGFycyIsInNpemVPZlN0YXJzIiwibW92ZV9kaXJlY3Rpb24iLCJtb3ZlX3NwZWVkIiwicGFydGljbGVzSlMiLCJBbmltQ2xhc3MiLCJzY3JvbGxBbmltYXRpb25TaG93Q2xhc3MiLCJ0cmlnZ2VyTWFyZ2luRGVmYXVsdCIsInNjcm9sbEFuaW1FbG0iLCJzY3JvbGxBbmltYXRpb25GdW5jIiwibGVuZ3RoIiwidHJpZ2dlck1hcmdpbiIsInNob3dQb3MiLCJkYXRhc2V0IiwianNfZGF0YW1hcmdpbiIsImpzX21hcmdpbiIsImpzX3RyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIZWlnaHQiLCJkZWxheSIsImpzX2RlbGF5IiwiaW5kZXgiLCJiaW5kIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImVmZmVjdCIsImxvb3AiLCJzcGVlZCIsImRyYWdnYWJsZSIsIm1vdXNld2hlZWwiLCJmb3JjZVRvQXhpcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImR5bmFtaWNCdWxsZXRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm15VHJhaW4iLCJqUXVlcnkiLCJ0cmFpbl9wb3MiLCJvZmZzZXQiLCJ0cmFpbl9oZWlnaHQiLCJvdXRlckhlaWdodCIsIiQiLCJzY3JvbGwiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidW5pdCIsImNhbnZhc0xpc3QiLCJpbmZvIiwiY29sb3JMaXN0IiwiaW5pdCIsInNlY29uZHMiLCJ0IiwicHVzaCIsImNhbnZhc0luZGV4IiwiY2FudmFzIiwiaGVpZ2h0IiwiY29udGV4dENhY2hlIiwiZ2V0Q29udGV4dCIsInVwZGF0ZSIsImRyYXciLCJNYXRoIiwiUEkiLCJjb2xvciIsImNvbnRleHQiLCJjbGVhclJlY3QiLCJkcmF3V2F2ZSIsImFscGhhIiwiem9vbSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYmVnaW5QYXRoIiwiZHJhd1NpbmUiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwieEF4aXMiLCJmbG9vciIsInlBeGlzIiwieSIsInNpbiIsIm1vdmVUbyIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwic3RhcnRTY3JvbGxZIiwidGFyZ2V0U2Nyb2xsWSIsImVhc2VPdXRDdWJpYyIsInBvdyIsInNjcm9sbEFuaW1hdGlvbiIsInByb2dyZXNzIiwibWluIiwiRGF0ZSIsIm5vdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsImRvY3VtZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib2Zmc2V0VG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLFNBQVMsQ0FBQztBQUNOQyxZQUFVLEVBQUU7QUFETixDQUFELENBQVQsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUNBLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxJQUFJQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csc0JBQVQsRUFBZixDLENBQWtE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QUFDOUI0SCxtQkFBZTtBQUNoQixHQW5CRDtBQW9CRCxDQXJCRCxFOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL19hc3NldHMvanMvbWFpbi5qc1wiKTtcbiIsIlNwbGl0dGluZyh7XG4gICAgd2hpdGVzcGFjZTogdHJ1ZVxufSkiLCJjb25zdCBjb3VudCA9IDc7XG5sZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlY3RvcicpO1xubGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbmZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdG9yLmNsYXNzTmFtZSA9IFwic2VjdG9yXCI7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlY3Rvcik7XG5cbiAgbGV0IHJvdGF0ZUJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQmFjay5jbGFzc05hbWUgPSBcInJvdGF0ZVwiO1xuICBzZWN0b3IuYXBwZW5kQ2hpbGQocm90YXRlQmFjayk7XG5cbiAgbGV0IGZhbGxpbmdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWxsaW5nTGF5ZXIuY2xhc3NOYW1lID0gXCJmYWxsaW5nXCI7XG4gIHJvdGF0ZUJhY2suYXBwZW5kQ2hpbGQoZmFsbGluZ0xheWVyKTtcblxuICBsZXQgbGluZUhpdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lSGl0Ym94LmNsYXNzTmFtZSA9IFwibGluZS1ib3hcIjtcbiAgZmFsbGluZ0xheWVyLmFwcGVuZENoaWxkKGxpbmVIaXRib3gpO1xuXG4gIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gXCJsaW5lLWJveF9fbGluZSBjLWJhbGxcIjtcbiAgbGluZUhpdGJveC5hcHBlbmRDaGlsZChsaW5lKTtcbn1cblxucGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiIsIi8vIOOCueOCr+ODreODvOODq+OBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cbi8vIOODreODvOODieOBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcblx0aGVhZGVyQmFja0Rvd24oKTtcbn0pO1xuXG4vLyDjgqbjgqPjg7Pjg4njgqbluYXjgYzliIfjgormm7/jgo/jgaPjgZ/jgonplqLmlbDlkbzjgbPlh7rjgZdcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG5cdHJlc2l6ZVJlbW92ZUNsYXNzKCk7Ly9pcy1vcGVuLCBpcy1jbG9zZeOCkuWkluOBmVxuXHRib2R5Rml4ZWROb25lKCk7Ly9ib2R544GuZml4ZWTjgpLlpJbjgZlcbn0pO1xuXG5cbi8vICoqXG4vLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg5zjgr/jg7PvvJrjgr/jg4Pjg4Egb3Ig44Kv44Oq44OD44KvXG4vLyAqKlxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWhhbWJ1cmdlcicpO1xuY29uc3QgaGFtYnVyZ2VyQ2xhc3MgPSBoYW1idXJnZXIuY2xhc3NMaXN0O1xuY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG15Qm9keUNsYXNzID0gbXlCb2R5LmNsYXNzTGlzdDtcbmxldCBmbGFnID0gZmFsc2U7XG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHRmbGFnID0gdHJ1ZTtcblx0aGFtYnVyZ2VyQ2xpY2soKTtcbn0pO1xuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdGlmIChmbGFnKSB7XG5cdFx0ZmxhZyA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGhhbWJ1cmdlckNsaWNrKCk7XG5cdH1cbn0pO1xuXG4vLyAqKlxuLy8g44OK44OT44Ky44O844K344On44Oz44Gu44Oq44K544OI44KS44Kv44Oq44OD44Kv44GX44Gf44KJaXMtb3BlbuOCkua2iOOBmVxuLy8gKipcbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1hcmtlclwiKTtcbm5hdkxpc3QuZm9yRWFjaCgoZWxtKSA9PiB7XG5cdGVsbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuXHRcdGZsYWcgPSB0cnVlO1xuXHRcdHJlbW92ZU9wZW4oKTsvLyBpcy1vcGVu44KS5aSW44GZXG5cdFx0YWRkQ2xvc2UoKTsvLyBpcy1jbG9zZeOCkuS7mOOBkeOCi1xuXHRcdGJvZHlGaXhlZE5vbmUoKTsvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuXHR9KTtcbn0pO1xuXG5uYXZMaXN0LmZvckVhY2goKGVsbSkgPT4ge1xuXHRlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0aWYgKGZsYWcpIHtcblx0XHRcdGZsYWcgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlT3BlbigpOy8vIGlzLW9wZW7jgpLlpJbjgZlcblx0XHRcdGFkZENsb3NlKCk7Ly8gaXMtY2xvc2XjgpLku5jjgZHjgotcblx0XHRcdGJvZHlGaXhlZE5vbmUoKTsvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuXHRcdH1cblx0fSk7XG59KTtcblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8g6Zai5pWwXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAqKlxuLy8gcC1oZWFkZXI644K544Kv44Ot44O844Or44GX44Gf44KJ5raI44GI44KLXG4vLyAqKlxuY29uc3QgbXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWhlYWRlclwiKTtcbmNvbnN0IGhlYWRlckNsYXNzID0gbXlIZWFkZXIuY2xhc3NMaXN0O1xuY29uc3QgaGVhZGVyRmFkZVBvc2l0aW9uID0gNTA7Ly/jgrnjgq/jg63jg7zjg6vjgZfjgabjg5rjg7zjgrjjg4jjg4Pjg5fjgYvjgonjgIfjgIfjgavpgZTjgZfjgZ/jgajjgY1cblxuY29uc3QgaGVhZGVyRmFkZSA9ICgpID0+IHtcblx0bGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRpZiAoc2Nyb2xsVG9wID49IGhlYWRlckZhZGVQb3NpdGlvbikge1xuXHRcdGhlYWRlckNsYXNzLmFkZCgnaXMtZmFkZScpO1xuXHR9IGVsc2Uge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnaXMtZmFkZScpO1xuXHR9O1xufTtcblxuLy8gKipcbi8vIHAtaGVhZGVyLWJhY2s644K544Kv44Ot44O844Or6YCU5Lit44Gn5Ye654++XG4vLyAqKlxuY29uc3QgbGF5b3V0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWwtaGVhZGVyJyk7XG5jb25zdCBsYXlvdXRIZWFkZXJDbGFzcyA9IGxheW91dEhlYWRlci5jbGFzc0xpc3Q7XG5cbmNvbnN0IGhlYWRlckJhY2tEb3duID0gKCkgPT4ge1xuXHRsZXQgbXlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtzXCIpO1xuXHRsZXQgcmVjdCA9IG15VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGxldCB0YXJnZXRUb3AgPSByZWN0LnRvcCArIHNjcm9sbFRvcDtcblxuXHRpZiAoc2Nyb2xsVG9wID49IHRhcmdldFRvcCkge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZShcIlVwTW92ZVwiLCAncC1oZWFkZXItLXRvcCcsIFwiaXMtZmFkZVwiKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRoZWFkZXJDbGFzcy5hZGQoJ0Rvd25Nb3ZlJywgJ3AtaGVhZGVyLS1iYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cdFx0bGF5b3V0SGVhZGVyQ2xhc3MuYWRkKCdiYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cblx0fSBlbHNlIHtcblx0XHRpZiAoaGVhZGVyQ2xhc3MuY29udGFpbnMoXCJEb3duTW92ZVwiKSkgey8v44GZ44Gn44Gr44Kv44Op44K55ZCN44GM44Gk44GE44Gm44GE44Gf44KJXG5cdFx0XHRsYXlvdXRIZWFkZXJDbGFzcy5yZW1vdmUoJ2JhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLmFkZCgnVXBNb3ZlJywgJ3AtaGVhZGVyLS10b3AnKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblx0XHR9XG5cdH1cbn07XG5cblxuY29uc3QgaGFtYnVyZ2VyQ2xpY2sgPSAoKSA9PiB7XG5cdGxldCBteVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cblx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHsvL2lzLWNsb3Nl44GM44GC44Gj44Gf44KJXG5cdFx0cmVtb3ZlQ2xvc2UoKTsvL2lzLWNsb3Nl44KS5aSW44GZXG5cdH0gZWxzZSB7XG5cblx0XHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7Ly9pcy1vcGVu44GM44GC44Gj44Gf44KJXG5cdFx0XHRjb25zdCBzY3JvbGxZID0gbXlCb2R5LnN0eWxlLnRvcDsvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7oqJjmhrZcblx0XHRcdHJlbW92ZU9wZW4oKTsvLyBpcy1vcGVu44KS5aSW44GZXG5cdFx0XHRhZGRDbG9zZSgpOy8vIGlzLWNsb3Nl44KS5LuY44GR44KLXG5cdFx0XHRib2R5Rml4ZWROb25lKCk7Ly8gYm9keeOBrmZpeGVk44KS5aSW44GZXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoc2Nyb2xsWSB8fCAnMCcpICogLTEpOy8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruS/neaMgVxuXHRcdH1cblx0fTtcblxuXHQvLyBpcy1jbG9zZeOCgmlzLW9wZW7jgoLjgarjgYvjgaPjgZ/jgolcblx0aWYgKCFoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLWNsb3NlXCIpICYmICFoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHtcblx0XHRhZGRPcGVuKCk7Ly9pcy1vcGVu44KS44Gk44GR44KLXG5cdFx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuXHRcdG15Qm9keS5zdHlsZS50b3AgPSBgLSR7bXlQb3NpdGlvbn1weGA7XG5cdH07XG59O1xuXG5cbi8vICoqXG4vL+OCpuOCo+ODs+ODieOCpuW5heOBjOWIh+OCiuabv+OCj+OBo+OBn+OCieOAgWlzLW9wZW58fGlzLWNsb3Nl44KS5aSW44GZXG4vLyAqKlxuY29uc3QgbW9vbk1pbmlTaXplID0gNTcwO1xuY29uc3QgcmVzaXplUmVtb3ZlQ2xhc3MgPSAoKSA9PiB7XG5cdGxldCB4ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblx0aWYgKHggPj0gbW9vbk1pbmlTaXplKSB7XG5cdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkgey8vaXMtb3BlbuOBjOOBguOBo+OBn+OCiVxuXHRcdFx0cmVtb3ZlT3BlbigpOy8vIGlzLW9wZW7jgpLlpJbjgZlcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHsvL2lzLWNsb3Nl44GM44GC44Gj44Gf44KJXG5cdFx0XHRcdHJlbW92ZUNsb3NlKCk7Ly9pcy1jbG9zZeOCkuWkluOBmVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuXG4vLyAqKlxuLy8gaXMtY2xvc2XjgpLlpJbjgZlcbi8vICoqXG5jb25zdCByZW1vdmVDbG9zZSA9ICgpID0+IHtcblx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuXHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLWNsb3NlJyk7XG59O1xuXG4vLyAqKlxuLy8gaXMtY2xvc2XjgpLku5jjgZHjgotcbi8vICoqXG5jb25zdCBhZGRDbG9zZSA9ICgpID0+IHtcblx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1jbG9zZScpO1xuXHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG59O1xuXG4vLyAqKlxuLy8gaXMtb3BlbuOCkuWkluOBmVxuLy8gKipcbmNvbnN0IHJlbW92ZU9wZW4gPSAoKSA9PiB7XG5cdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuXHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLW9wZW4nKTtcbn07XG5cbi8vICoqXG4vLyBpcy1vcGVu44KS5LuY44GR44KLXG4vLyAqKlxuY29uc3QgYWRkT3BlbiA9ICgpID0+IHtcblx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1vcGVuJyk7XG5cdG15Qm9keUNsYXNzLmFkZCgnaXMtb3BlbicpO1xufTtcblxuXG4vLyAqKlxuLy8gYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyAqKlxuY29uc3QgYm9keUZpeGVkTm9uZSA9ICgpID0+IHtcblx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcblx0bXlCb2R5LnN0eWxlLnRvcCA9IFwiXCI7XG5cdG15Qm9keS5zdHlsZS5wYWRkaW5nVG9wID0gXCJcIjtcbn07XG5cblxuXG5cblxuLy8gLy8g44Km44Kj44Oz44OJ44Km5bmF44GM5YiH44KK5pu/44KP44Gj44Gf44Go44GNXG4vLyBjb25zdCBtb29uTWluaVNpemUgPSA1NzA7XG4vLyBqUXVlcnkoZnVuY3Rpb24gKCQpIHtcbi8vIFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4vLyBcdFx0bGV0IHggPSAkKHdpbmRvdykud2lkdGgoKTtcbi8vIFx0XHRsZXQgeSA9IG1vb25NaW5pU2l6ZTtcbi8vIFx0XHRpZiAoeCA+PSB5KSB7XG4vLyBcdFx0XHQkKFwiI2pzLWhhbWJ1cmdlclwiKS5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4vLyBcdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4vLyBcdFx0XHQvLyAkKFwiI2pzLWhhbWJ1cmdlclwiKS5hZGRDbGFzcyhcImlzLWNsb3NlXCIpO1xuLy8gXHRcdFx0Ly8gJChcImJvZHlcIikuYWRkQ2xhc3MoXCJpcy1jbG9zZVwiKTtcblxuLy8gXHRcdFx0Ym9keUZpeGVkTm9uZSgpOy8vYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyBcdFx0fVxuLy8gXHRcdGVsc2Uge1xuLy8gXHRcdH1cbi8vIFx0fSk7XG4vLyB9KVxuXG5cblxuLy8gKipcbi8vIOODj+ODs+ODkOODvOOCrOODvOODnOOCv+ODs++8muOCr+ODquODg+OCr+OCpOODmeODs+ODiFxuLy8gKipcbi8vIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1oYW1idXJnZXInKTtcbi8vIGNvbnN0IGhhbWJ1cmdlckNsYXNzID0gaGFtYnVyZ2VyLmNsYXNzTGlzdDtcbi8vIGNvbnN0IG15Qm9keSA9IGRvY3VtZW50LmJvZHk7XG4vLyBjb25zdCBteUJvZHlDbGFzcyA9IG15Qm9keS5jbGFzc0xpc3Q7XG5cblxuLy8gaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gXHRsZXQgbXlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4vLyBcdC8vaXMtY2xvc2XjgYzjgYLjgaPjgZ/jgolcbi8vIFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHtcbi8vIFx0XHQvL2lzLWNsb3Nl44KS5aSW44GZXG4vLyBcdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuLy8gXHRcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtY2xvc2UnKTtcblxuLy8gXHRcdC8vaXMtb3BlbuOCkuOBpOOBkeOCi1xuLy8gXHRcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtb3BlbicpO1xuLy8gXHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtb3BlbicpO1xuLy8gXHRcdG15Qm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbi8vIFx0XHRteUJvZHkuc3R5bGUudG9wID0gYC0ke215UG9zaXRpb259cHhgO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdC8vaXMtb3BlbuOBjOOBguOBo+OBn+OCiVxuLy8gXHRcdGlmIChoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHtcbi8vIFx0XHRcdC8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruiomOaGtlxuLy8gXHRcdFx0Y29uc3Qgc2Nyb2xsWSA9IG15Qm9keS5zdHlsZS50b3A7XG5cbi8vIFx0XHRcdC8vIGlzLW9wZW7jgpLlpJbjgZlcbi8vIFx0XHRcdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gXHRcdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cbi8vIFx0XHRcdC8vIGlzLWNsb3Nl44KS44Gk44GR44KLXG4vLyBcdFx0XHRoYW1idXJnZXJDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG4vLyBcdFx0XHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG5cbi8vIFx0XHRcdC8vIGJvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gXHRcdFx0Ym9keUZpeGVkTm9uZSgpO1xuXG4vLyBcdFx0XHQvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7kv53mjIFcbi8vIFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChzY3JvbGxZIHx8ICcwJykgKiAtMSk7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9KTtcblxuXG4vLyAqKlxuLy8gaXMtb3BlbuOCkua2iOOBmVxuLy8gKipcbi8vIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruODquOCueODiOOCkuOCr+ODquODg+OCr+OBl+OBn+OBqOOBjVxuLy8gY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWFya2VyXCIpO1xuLy8gbmF2TGlzdC5mb3JFYWNoKChlbG0pID0+IHtcbi8vIFx0ZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gXHRcdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gXHRcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gXHRcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcbi8vIFx0XHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG5cbi8vIFx0XHQvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gXHRcdGJvZHlGaXhlZE5vbmUoKTtcbi8vIFx0fSk7XG4vLyB9KTsiLCJjb25zdCBteUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbWFya2VyJyk7XG5jb25zdCBtb29uTWluaVNpemUgPSA1NzA7XG4vLyDjg63jg7zjg4njgZfjgZ/jgajjgY1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBsZXQgeCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gIGlmICh4ID49IG1vb25NaW5pU2l6ZSkge1xuICAgIG15TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIG1vdmVJbmRpY2F0b3IoZS50YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cbi8vIHJlc2l6ZeOBl+OBn+OBqOOBjVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKCkpO1xuXG5mdW5jdGlvbiByZXNpemUoKSB7XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHttb29uTWluaVNpemV9cHgpYCkubWF0Y2hlcykge1xuICAgIG15TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIG1vdmVJbmRpY2F0b3IoZS50YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlSW5kaWNhdG9yKCk7XG4gIH1cbn1cblxuXG5cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbi8vICAgbGV0IHggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuLy8gICBpZiAoeCA+PSBtb29uTWluaVNpemUpIHtcbi8vICAgICBteUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuLy8gICAgICAgICBtb3ZlSW5kaWNhdG9yKGUudGFyZ2V0KTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJlbW92ZUluZGljYXRvcigpO1xuLy8gICB9XG4vLyB9KTtcblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8g6Zai5pWwXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBtb3ZlSW5kaWNhdG9yKGUpIHtcbiAgbGV0IG1hcmtlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1tYXJrZXInKTtcbiAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICBtYXJrZXIuc3R5bGUubGVmdCA9IGUub2Zmc2V0TGVmdCArICdweCc7XG4gIG1hcmtlci5zdHlsZS53aWR0aCA9IGUub2Zmc2V0V2lkdGggKyAncHgnO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbmRpY2F0b3IoKSB7XG4gIGxldCBtYXJrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWFya2VyJyk7XG4gIG1hcmtlci5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIG1hcmtlci5zdHlsZS5sZWZ0ID0gJyc7XG4gIG1hcmtlci5zdHlsZS53aWR0aCA9ICcnO1xufSIsIi8vIOOCueOCr+ODreODvOODq+aZguOBq+ODm+ODkOODvOOCkueEoeWKueOBq+OBmeOCi1xubGV0IG15Qm9keSA9IGRvY3VtZW50LmJvZHksXG4gIHRpbWVyO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICBjbGVhclRpbWVvdXQodGltZXIpO1xuICBpZiAoIW15Qm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUtaG92ZXInKSkge1xuICAgIG15Qm9keS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlLWhvdmVyJylcbiAgfVxuXG4gIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbXlCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtaG92ZXInKVxuICB9LCA1MDApO1xufSwgZmFsc2UpO1xuXG5cbi8vIENTU+OBq+asoeOBruOCs+ODvOODieOCkui/veWKoOOBmeOCi1xuLy8gLmRpc2FibGUtaG92ZXIge1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH0iLCIvLyAqKiBwYXJ0aWNsZXMuanPjgpLkvb/jgYYgKipcbmNvbnN0IG15UGFydGljbGVJRCA9IFwianMtbWlsa3ktd2F5LXBhcnRpY2xlXCI7XG5jb25zdCBwYXJ0aWNsZV9zaGFwZSA9IFwic3RhclwiOyAvL+OCt+OCp+OCpOODl+OBruW9ou+8iGNpcmNsZTrkuLjjgIFlZGdlOuWbm+inkuOAgXRyaWFuZ2xlOuS4ieinkuOAgXBvbHlnb2465aSa6KeS5b2i44CBc3RhcjrmmJ/lnovjgIFpbWFnZTrnlLvlg4/vvIlcbmNvbnN0IG51bU9mU3RhcnMgPSA0MDA7IC8v5pif44Gu5pWwXG5jb25zdCBjb2xvck9mU3RhcnMgPSAnI2ZmZmY1NSc7IC8v5pif44Gu6ImyXG5jb25zdCBvcGFjaXR5T2ZTdGFycyA9IDAuNDsgLy/mmJ/jga7pgI/mmI7luqZcbmNvbnN0IHNpemVPZlN0YXJzID0gMzsgLy/mmJ/jga7lpKfjgY3jgZVcbmNvbnN0IG1vdmVfZGlyZWN0aW9uID0gXCJyaWdodFwiOyAvL+a1geOCjOOBruWQkeOBjShub25l44CBdG9w44CBdG9wLXJpZ2h044CBcmlnaHTjgIFib3R0b20tcmlnaHTjgIFib3R0b23jgIFib3R0b20tbGVmdOOAgWxlZnTjgIF0b3AtbGVmdOOCiOOCiumBuOaKnilcbmNvbnN0IG1vdmVfc3BlZWQgPSAxOyAgLy/jgrfjgqfjgqTjg5fjga7li5XjgY/jgrnjg5Tjg7zjg4lcblxucGFydGljbGVzSlMobXlQYXJ0aWNsZUlELCB7XG4gIFwicGFydGljbGVzXCI6IHtcbiAgICBcIm51bWJlclwiOiB7XG4gICAgICBcInZhbHVlXCI6IG51bU9mU3RhcnMsXG4gICAgICBcImRlbnNpdHlcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwidmFsdWVcIjogY29sb3JPZlN0YXJzLFxuICAgIH0sXG4gICAgXCJzaGFwZVwiOiB7XG4gICAgICBcInR5cGVcIjogcGFydGljbGVfc2hhcGUsXG4gICAgICBcInN0cm9rZVwiOiB7IC8v5aSW57eaXG4gICAgICAgIFwid2lkdGhcIjogMCxcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZcIlxuICAgICAgfSxcbiAgICAgIC8vIFwicG9seWdvblwiOiB7IC8vdHlwZeOCknBvbHlnb27jgavjgZfjgZ/jgajjgY3jga7oqK3lrppcbiAgICAgIC8vICAgXCJuYl9zaWRlc1wiOiA1XG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJpbWFnZVwiOiB7IC8vdHlwZeOCkmltYWdl44Gr44GX44Gf44Go44GN44Gu6Kit5a6aXG4gICAgICAvLyAgIFwic3JjXCI6IFwiXCIsXG4gICAgICAvLyAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgLy8gICBcImhlaWdodFwiOiAxMDBcbiAgICAgIC8vIH1cbiAgICB9LFxuICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICBcInZhbHVlXCI6IG9wYWNpdHlPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcbiAgICAgIFwiYW5pbVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsIC8v44K344Kn44Kk44OX44Gu6YCP5piO5bqm44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwic3BlZWRcIjogMSxcbiAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLjIsIC8v6YCP5piO5bqm44Gu5pyA5bCP5YCkXG4gICAgICAgIFwic3luY1wiOiBmYWxzZSAvL+WFqOOBpuOBruOCt+OCp+OCpOODl+OCkuWQjOaZguOBq+OCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaXplXCI6IHtcbiAgICAgIFwidmFsdWVcIjogc2l6ZU9mU3RhcnMsXG4gICAgICBcInJhbmRvbVwiOiB0cnVlLCAvL+OCt+OCp+OCpOODl+OBruWkp+OBjeOBleOCkuODqeODs+ODgOODoOOBq+OBmeOCi1xuICAgICAgXCJhbmltXCI6IHsgLy/jgrfjgqfjgqTjg5fjga7lpKfjgY3jgZXjgpLjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJzcGVlZFwiOiAxLFxuICAgICAgICBcInNpemVfbWluXCI6IDAuMiwgLy/lpKfjgY3jgZXjga7mnIDlsI/lgKRcbiAgICAgICAgXCJzeW5jXCI6IGZhbHNlIC8v5YWo44Gm44Gu44K344Kn44Kk44OX44KS5ZCM5pmC44Gr44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICB9XG4gICAgfSxcbiAgICBcImxpbmVfbGlua2VkXCI6IHtcbiAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLC8vIOaYn+OBqOaYn+OCkue3muOBp+e1kOOBtlxuICAgICAgLy8gXCJkaXN0YW5jZVwiOiA1MDAsXG4gICAgICAvLyBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgLy8gXCJvcGFjaXR5XCI6IDAuNCxcbiAgICAgIC8vIFwid2lkdGhcIjogMlxuICAgIH0sXG4gICAgXCJtb3ZlXCI6IHtcbiAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICBcInNwZWVkXCI6IG1vdmVfc3BlZWQsXG4gICAgICBcImRpcmVjdGlvblwiOiBtb3ZlX2RpcmVjdGlvbixcbiAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxuICAgICAgXCJzdHJhaWdodFwiOiB0cnVlLFxuICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLCAvL+OCqOODquOCouWkluOBq+WHuuOBn+OCt+OCp+OCpOODl+OBruWLleOBjShvdXTjgIFib3VuY2Xjgojjgorpgbjmip4pXG4gICAgICBcImJvdW5jZVwiOiBmYWxzZSxcbiAgICAgIFwiYXR0cmFjdFwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInJvdGF0ZVhcIjogMTAwMCxcbiAgICAgICAgXCJyb3RhdGVZXCI6IDEwMDBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwiaW50ZXJhY3Rpdml0eVwiOiB7XG4gICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcbiAgICBcImV2ZW50c1wiOiB7XG4gICAgICBcIm9uaG92ZXJcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcIm1vZGVcIjogXCJidWJibGVcIiAvL+ODnuOCpuOCueOCquODvOODkOODvOaZguOBq+eZuuWLleOBmeOCi+WLleOBjSjkuIvoqJhtb2Rlc+WGheOBrmdyYWLjgIFyZXB1bHNl44CBYnViYmxl44KI44KK6YG45oqeKVxuICAgICAgfSxcbiAgICAgIC8vIFwib25jbGlja1wiOiB7XG4gICAgICAvLyAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAvLyAgIFwibW9kZVwiOiBcImJ1YmJsZVwiIC8v44Kv44Oq44OD44Kv5pmC44Gr55m65YuV44GZ44KL5YuV44GNKOS4i+iomG1vZGVz5YaF44GuZ3JhYuOAgXJlcHVsc2XjgIFidWJibGXjgIFwdXNo44CBcmVtb3Zl44KI44KK6YG45oqeKVxuICAgICAgLy8gfSxcbiAgICAgIFwicmVzaXplXCI6IHRydWUgLy9jYW52YXPjga7jgrXjgqTjgrrlpInmm7Tjgavjgo/jgZvjgabmi6HlpKfnuK7lsI/jgZnjgotcbiAgICB9LFxuICAgIFwibW9kZXNcIjoge1xuICAgICAgLy8gXCJncmFiXCI6IHsgLy/jgqvjg7zjgr3jg6vjgajjgrfjgqfjgqTjg5fjga7plpPjgavnt5rjgYzooajnpLrjgZXjgozjgotcbiAgICAgIC8vICAgXCJkaXN0YW5jZVwiOiA0MDAsIC8v44Kr44O844K944Or44GL44KJ44Gu5Y+N5b+c6Led6ZuiXG4gICAgICAvLyAgIFwibGluZV9saW5rZWRcIjoge1xuICAgICAgLy8gICAgIFwib3BhY2l0eVwiOiAwLjVcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSxcbiAgICAgIFwiYnViYmxlXCI6IHsgLy/jgrfjgqfjgqTjg5fjgYzohqjjgonjgoBcbiAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXG4gICAgICAgIFwic2l6ZVwiOiA1LFxuICAgICAgICBcImR1cmF0aW9uXCI6IDAuMywgLy/ohqjjgonjgoDjgrfjgqfjgqTjg5fjga7mjIHntprmmYLplpMob25jbGlja+aZguOBruOBvylcbiAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgIFwic3BlZWRcIjogMyAvL+iGqOOCieOCgOOCt+OCp+OCpOODl+OBrumAn+W6pihvbmNsaWNr5pmC44Gu44G/KVxuICAgICAgfSxcbiAgICAgIC8vIFwicmVwdWxzZVwiOiB7IC8v44K344Kn44Kk44OX44GM44Kr44O844K944Or44GL44KJ6YCD44GS44KLXG4gICAgICAvLyAgIFwiZGlzdGFuY2VcIjogMjAwLCAvL+OCq+ODvOOCveODq+OBi+OCieOBruWPjeW/nOi3nembolxuICAgICAgLy8gICBcImR1cmF0aW9uXCI6IDAuNFxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwicHVzaFwiOiB7IC8v44K344Kn44Kk44OX44GM5aKX44GI44KLXG4gICAgICAvLyAgIFwicGFydGljbGVzX25iXCI6IDQgLy/lopfjgYjjgovjgrfjgqfjgqTjg5fjga7mlbBcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcInJlbW92ZVwiOiB7XG4gICAgICAvLyAgIFwicGFydGljbGVzX25iXCI6IDIgLy/muJvjgovjgrfjgqfjgqTjg5fjga7mlbBcbiAgICAgIC8vIH1cbiAgICB9XG4gIH0sXG4gIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlIC8vUmV0aW5hIERpc3BsYXnjgavlr77lv5zjgZnjgotcbn0pO1xuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG5cblxuXG5cblxuXG4vLyAqKiBjYW52YXPkvb/jgYbloLTlkIggKipcbi8vIGZ1bmN0aW9uIHJhbmRvbShsb3csIGhpZ2gpIHtcbi8vICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdykgKyBsb3c7XG4vLyB9XG5cbi8vIGNsYXNzIFZpc3VhbCB7XG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcy1taWxreS13YXknKTtcbi8vICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIHRoaXMuY2FudmFzV2lkdGggPSAwO1xuLy8gICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gMDtcbi8vICAgICB0aGlzLnBhcnRpY2xlTGVuZ3RoID0gNTAwO1xuLy8gICAgIHRoaXMucGFydGljbGVzID0gW107XG4vLyAgICAgdGhpcy5wYXJ0aWNsZU1heFJhZGl1cyA9IDI7XG5cbi8vICAgICB0aGlzLmluaXRpYWxpemUoKTtcbi8vICAgICB0aGlzLnJlbmRlcigpO1xuLy8gICB9XG5cbi8vICAgaW5pdGlhbGl6ZSgpIHtcbi8vICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHRoaXMuY3JlYXRlUGFydGljbGUoaSkpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIHJlc2l6ZUNhbnZhcygpIHtcbi8vICAgICB0aGlzLmNhbnZhc1dpZHRoID0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbi8vICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IDIwMDtcbi8vICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbi8vICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhc0hlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuLy8gICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4vLyAgIH1cblxuLy8gICBjcmVhdGVQYXJ0aWNsZShpZCwgaXNSZWNyZWF0ZSkge1xuLy8gICAgIGNvbnN0IHJhZGl1cyA9IHJhbmRvbSgwLjUsIHRoaXMucGFydGljbGVNYXhSYWRpdXMpO1xuLy8gICAgIGNvbnN0IHggPSBpc1JlY3JlYXRlID8gLXJhZGl1cyAtIHJhbmRvbSgwLCB0aGlzLmNhbnZhc1dpZHRoKSA6IHJhbmRvbSgwLCB0aGlzLmNhbnZhc1dpZHRoKTtcbi8vICAgICBsZXQgeSA9IHJhbmRvbSh0aGlzLmNhbnZhc0hlaWdodCAvIDIgLSAxNTAsIHRoaXMuY2FudmFzSGVpZ2h0IC8gMiArIDE1MCk7XG4vLyAgICAgeSArPSByYW5kb20oLTEwMCwgMTAwKTtcbi8vICAgICBjb25zdCBhbHBoYSA9IHJhbmRvbSgwLjA1LCAxKTtcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBpZDogaWQsXG4vLyAgICAgICB4OiB4LFxuLy8gICAgICAgeTogeSxcbi8vICAgICAgIHN0YXJ0WTogeSxcbi8vICAgICAgIHJhZGl1czogcmFkaXVzLFxuLy8gICAgICAgZGVmYXVsdFJhZGl1czogcmFkaXVzLFxuLy8gICAgICAgc3RhcnRBbmdsZTogMCxcbi8vICAgICAgIGVuZEFuZ2xlOiBNYXRoLlBJICogMixcbi8vICAgICAgIGFscGhhOiBhbHBoYSxcbi8vICAgICAgIC8vIGNvbG9yOiB7IHI6IHJhbmRvbSgyNTUsIDApLCBnOiByYW5kb20oMjU1LCAwKSwgYjogMCB9LFxuLy8gICAgICAgc3BlZWQ6IGFscGhhICsgMSwgLy/jg57jgqTjg4rjgrnjgavjgZnjgovjgajlj7PjgYvjgonlt6Zcbi8vICAgICAgIGFtcGxpdHVkZTogcmFuZG9tKDUwLCAyMDApLFxuLy8gICAgICAgaXNCdXJzdDogZmFsc2Vcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgZHJhd1BhcnRpY2xlcygpIHtcbi8vICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbi8vICAgICAgIC8vIOS9jee9ruaDheWgseabtOaWsFxuLy8gICAgICAgdGhpcy5tb3ZlUGFydGljbGUocGFydGljbGUpO1xuXG4vLyAgICAgICAvLyBwYXJ0aWNsZeaPj+eUu1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwyNTUsMCwgLjUpYDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1KSc7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IDA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Qmx1ciA9IDMwO1xuXG4vLyAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoJHtwYXJ0aWNsZS5jb2xvci5yfSwgJHtwYXJ0aWNsZS5jb2xvci5nfSwgJHtwYXJ0aWNsZS5jb2xvci5ifSwgJHtwYXJ0aWNsZS5hbHBoYX0pYDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5hcmMocGFydGljbGUueCwgcGFydGljbGUueSwgcGFydGljbGUucmFkaXVzLCBwYXJ0aWNsZS5zdGFydEFuZ2xlLCBwYXJ0aWNsZS5lbmRBbmdsZSk7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuLy8gICAgIH0pO1xuLy8gICB9XG5cbi8vICAgbW92ZVBhcnRpY2xlKHBhcnRpY2xlKSB7XG4vLyAgICAgcGFydGljbGUueCArPSBwYXJ0aWNsZS5zcGVlZDtcbi8vICAgICBwYXJ0aWNsZS55ID0gcGFydGljbGUuc3RhcnRZICsgcGFydGljbGUuYW1wbGl0dWRlICogTWF0aC5zaW4oKChwYXJ0aWNsZS54IC8gNSkgKiBNYXRoLlBJKSAvIDE4MCk7XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgLy8gY2FudmFz5Yid5pyf5YyWXG4vLyAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoICsgdGhpcy5wYXJ0aWNsZU1heFJhZGl1cyAqIDIsIHRoaXMuY2FudmFzSGVpZ2h0KTtcblxuLy8gICAgIC8vIHBhcnRpY2xl44KS5o+P55S7XG4vLyAgICAgdGhpcy5kcmF3UGFydGljbGVzKCk7XG5cbi8vICAgICAvLyDnlLvpnaLjgYvjgonmtojjgYjjgZ/jgonmlrDjgZfjgYRwYXJ0aWNsZeOBq+W3ruOBl+abv+OBiFxuLy8gICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xuLy8gICAgICAgaWYgKHBhcnRpY2xlLnggLSBwYXJ0aWNsZS5yYWRpdXMgPj0gdGhpcy5jYW52YXNXaWR0aCkge1xuLy8gICAgICAgICB0aGlzLnBhcnRpY2xlc1twYXJ0aWNsZS5pZF0gPSB0aGlzLmNyZWF0ZVBhcnRpY2xlKHBhcnRpY2xlLmlkLCB0cnVlKTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcblxuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbi8vICAgfVxuLy8gfVxuLy8gbmV3IFZpc3VhbCgpO1xuXG5cblxuXG4vLyBkaXYyMDDnlJ/miJBcbi8vIGNvbnN0IGNvdW50ID0gMjAwO1xuLy8gbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1taWxreS13YXknKTtcbi8vIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgLy9mcmFnbWVudOS9nOaIkFxuXG4vLyBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4vLyAgIGxldCBtaWxrZXlXYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5V2F5LmNsYXNzTmFtZSA9IFwicC1taWxreS13YXlcIjtcblxuLy8gICBsZXQgbWlsa2V5TW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlNb3ZlLmNsYXNzTmFtZSA9IFwibWlsa3ktbW92ZVwiO1xuXG4vLyAgIGxldCBtaWxrZXlTdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleVN0YXIuY2xhc3NOYW1lID0gXCJtaWxreS1zdGFyXCI7XG5cbi8vICAgbWlsa2V5TW92ZS5hcHBlbmRDaGlsZChtaWxrZXlTdGFyKTtcbi8vICAgbWlsa2V5V2F5LmFwcGVuZENoaWxkKG1pbGtleU1vdmUpO1xuLy8gICBmcmFnbWVudC5hcHBlbmRDaGlsZChtaWxrZXlXYXkpO1xuLy8gfVxuXG4vLyBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpOyIsIi8vIGRhdGHlsZ7mgKdcbi8vIGRhdGEtc2FfbWFyZ2lu77ya6KGo56S644K/44Kk44Of44Oz44Kw44KS5L2N572u44Gn44Ga44KJ44GZXG4vLyBkYXRhLXNhX3RyaWdnZXLvvJrooajnpLrjgr/jgqTjg5/jg7PjgrDjga7ln7rmupbopoHntKDjgpLmjIflrppcbi8vIGRhdGEtc2FfZGVsYXnvvJrooajnpLrjgr/jgqTjg5/jg7PjgrDjgpLmmYLplpPjgafjgZrjgonjgZlcblxuXG5sZXQgQW5pbUNsYXNzID0gJ2pzLXNjcm9sbC1zaG93JztcbmxldCBzY3JvbGxBbmltYXRpb25TaG93Q2xhc3MgPSAnc2hvdyc7XG5sZXQgdHJpZ2dlck1hcmdpbkRlZmF1bHQgPSAyMDA7XG5cbmxldCBzY3JvbGxBbmltRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBBbmltQ2xhc3MpO1xubGV0IHNjcm9sbEFuaW1hdGlvbkZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxBbmltRWxtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0cmlnZ2VyTWFyZ2luID0gdHJpZ2dlck1hcmdpbkRlZmF1bHQ7XG4gICAgICAgIGxldCBlbG0gPSBzY3JvbGxBbmltRWxtW2ldO1xuICAgICAgICBsZXQgc2hvd1BvcyA9IDA7XG5cbiAgICAgICAgLy8gbWFyZ2lu44Gn44Ga44KJ44GZ5aC05ZCIXG4gICAgICAgIGlmIChlbG0uZGF0YXNldC5qc19kYXRhbWFyZ2luICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRyaWdnZXJNYXJnaW4gPSBwYXJzZUludChlbG0uZGF0YXNldC5qc19tYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJpZ2dlcuOBjOOBguOCi+WgtOWQiFxuICAgICAgICBpZiAoZWxtLmRhdGFzZXQuanNfdHJpZ2dlcikge1xuICAgICAgICAgICAgc2hvd1BvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxtLmRhdGFzZXQuanNfdHJpZ2dlcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdHJpZ2dlck1hcmdpbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dQb3MgPSBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdHJpZ2dlck1hcmdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaZgumWk+OBp+OBmuOCieOBmeWgtOWQiFxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gc2hvd1Bvcykge1xuICAgICAgICAgICAgbGV0IGRlbGF5ID0gKGVsbS5kYXRhc2V0LmpzX2RlbGF5KSA/IGVsbS5kYXRhc2V0LmpzX2RlbGF5IDogMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQW5pbUVsbVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgfS5iaW5kKG51bGwsIGkpLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNjcm9sbEFuaW1hdGlvbkZ1bmMpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEFuaW1hdGlvbkZ1bmMpO1xuIiwibGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5qcy1zd2lwZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDIwLC8v44K544Op44Kk44OJ44Gu6ZaT44Gu6Led6ZuiXG4gICAgZWZmZWN0OiAnZmFkZScsXG4gICAgbG9vcDogdHJ1ZSwvL+acgOW+jOOBq+mBlOOBl+OBn+OCieWFiOmgreOBq+aIu+OCi1xuICAgIHNwZWVkOiAzMDAsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcblxuICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgZm9yY2VUb0F4aXM6IGZhbHNlLFxuICAgIH0sXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJywvL+ODmuODvOOCuOODjeODvOOCt+ODp+ODs+OBruimgee0oFxuICAgICAgICBjbGlja2FibGU6IHRydWUsLy/jgq/jg6rjg4Pjgq/jgavlj43lv5zjgZXjgZvjgotcbiAgICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLC8v44Oa44O844K444ON44O844K344On44Oz44Gr5by35byx44GM44Gk44GPXG4gICAgfSxcblxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfVxufSk7IiwiLy8g6YqA5rKz6YmE6YGT44KS5Zu65a6a44GZ44KLXG5jb25zdCBteVRyYWluID0galF1ZXJ5KFwiLmpzLXRyYWluXCIpO1xuY29uc3QgdHJhaW5fcG9zID0gbXlUcmFpbi5vZmZzZXQoKS50b3A7XG5jb25zdCB0cmFpbl9oZWlnaHQgPSBteVRyYWluLm91dGVySGVpZ2h0KCk7XG5cblxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gdHJhaW5fcG9zICsgMjIpIHtcbiAgICAgICAgICAgIG15VHJhaW4uYWRkQ2xhc3MoXCJmaXhlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG15VHJhaW4ucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiLy8gSFRNTOOBrjxjYW52YXM+44K/44Kw44GrSmF2YVNjcmlwdOOCkuS9v+OBhOazou+8iOWhl+OCiu+8ieOCkuaPj+eUu+OBmeOCi1xuXG5sZXQgdW5pdCA9IDEwMCxcbiAgICBjYW52YXNMaXN0LCAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7phY3liJdcbiAgICBpbmZvID0ge30sIC8vIOWFqOOCreODo+ODs+ODkOOCueWFsemAmuOBruaPj+eUu+aDheWgsVxuICAgIGNvbG9yTGlzdDsgLy8g5ZCE44Kt44Oj44Oz44OQ44K544Gu6Imy5oOF5aCxXG5cbi8qKlxuICogSW5pdCBmdW5jdGlvbi5cbiAqIFxuICogSW5pdGlhbGl6ZSB2YXJpYWJsZXMgYW5kIGJlZ2luIHRoZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5mby5zZWNvbmRzID0gMDtcbiAgICBpbmZvLnQgPSAwO1xuICAgIGNhbnZhc0xpc3QgPSBbXTtcbiAgICBjb2xvckxpc3QgPSBbXTtcbiAgICAvLyBjYW52YXMx5YCL44KB44Gu6Imy5oyH5a6aXG4gICAgY2FudmFzTGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F2ZUNhbnZhc1wiKSk7XG4gICAgY29sb3JMaXN0LnB1c2goWycjZmZiZWY2JywgJyNmZmY1YmUnLCAnI2I2ZjdmZiddKTsvL+W3puOBjOS4gOeVquS4i+KGkuS4iuOBruazoumghlxuICAgIC8vIOWQhOOCreODo+ODs+ODkOOCueOBruWIneacn+WMllxuICAgIGZvcih2YXIgY2FudmFzSW5kZXggaW4gY2FudmFzTGlzdCkge1xuICAgICAgICB2YXIgY2FudmFzID0gY2FudmFzTGlzdFtjYW52YXNJbmRleF07XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDsgLy9DYW52YXPjga53aWR0aOOCkuOCpuOCo+ODs+ODieOCpuOBruW5heOBq+WQiOOCj+OBm+OCi1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNDUwOy8v5rOi44Gu6auY44GVXG4gICAgICAgIGNhbnZhcy5jb250ZXh0Q2FjaGUgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbiAgICAvLyDlhbHpgJrjga7mm7TmlrDlh6bnkIblkbzjgbPlh7rjgZdcbiAgICB1cGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZvcihsZXQgY2FudmFzSW5kZXggaW4gY2FudmFzTGlzdCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2FudmFzTGlzdFtjYW52YXNJbmRleF07XG4gICAgICAgIC8vIOWQhOOCreODo+ODs+ODkOOCueOBruaPj+eUu1xuICAgICAgICBkcmF3KGNhbnZhcywgY29sb3JMaXN0W2NhbnZhc0luZGV4XSk7XG4gICAgfVxuICAgIC8vIOWFsemAmuOBruaPj+eUu+aDheWgseOBruabtOaWsFxuICAgIGluZm8uc2Vjb25kcyA9IGluZm8uc2Vjb25kcyArIC4wMTQ7XG4gICAgaW5mby50ID0gaW5mby5zZWNvbmRzKk1hdGguUEk7XG4gICAgLy8g6Ieq6Lqr44Gu5YaN6LW35ZG844Gz5Ye644GXXG4gICAgc2V0VGltZW91dCh1cGRhdGUsIDM1KTtcbn1cblxuLyoqXG4gKiBEcmF3IGFuaW1hdGlvbiBmdW5jdGlvbi5cbiAqIFxuICogVGhpcyBmdW5jdGlvbiBkcmF3cyBvbmUgZnJhbWUgb2YgdGhlIGFuaW1hdGlvbiwgd2FpdHMgMjBtcywgYW5kIHRoZW4gY2FsbHNcbiAqIGl0c2VsZiBhZ2Fpbi5cbiAqL1xuZnVuY3Rpb24gZHJhdyhjYW52YXMsIGNvbG9yKSB7XG4gICAgLy8g5a++6LGh44GuY2FudmFz44Gu44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6XXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuY29udGV4dENhY2hlO1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruaPj+eUu+OCkuOCr+ODquOColxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvL+azouOBrumHjeOBquOCiuOCkuaPj+eUuyBkcmF3V2F2ZShjYW52YXMsIGNvbG9yW+aVsOWtl++8iOazouOBruaVsOOCkjDjgYvjgonmlbDjgYjjgabmjIflrprvvIldLCDpgI/pgY4sIOazouOBruW5heOBrnpvb20s5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMIClcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzBdLCAxLCAzLCAwKTsvLzAuNeKHkumAj+mBjuWFt+WQiDUwJeOAgTPih5LmlbDlrZfjgYzlpKfjgY3jgYTjgbvjganms6LjgYzjgarjgaDjgonjgYtcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzFdLCAxLCAyLCAyNTApO1xuICAgIGRyYXdXYXZlKGNhbnZhcywgY29sb3JbMl0sIDEsIDIuNSwgMTAwKTtcbn1cblxuLyoqXG4qIOazouOCkuaPj+eUu1xuKiBkcmF3V2F2ZSjoibIsIOS4jemAj+aYjuW6piwg5rOi44Gu5bmF44Guem9vbSwg5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMKVxuKi9cbmZ1bmN0aW9uIGRyYXdXYXZlKGNhbnZhcywgY29sb3IsIGFscGhhLCB6b29tLCBkZWxheSkge1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmNvbnRleHRDYWNoZTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yOy8v5aGX44KK44Gu6ImyXG4gICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7IC8v44OR44K544Gu6ZaL5aeLXG4gICAgZHJhd1NpbmUoY2FudmFzLCBpbmZvLnQgLyAwLjUsIHpvb20sIGRlbGF5KTtcbiAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKyAxMCwgY2FudmFzLmhlaWdodCk7IC8v44OR44K544KSQ2FudmFz44Gu5Y+z5LiL44G4XG4gICAgY29udGV4dC5saW5lVG8oMCwgY2FudmFzLmhlaWdodCk7IC8v44OR44K544KSQ2FudmFz44Gu5bem5LiL44G4XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKSAvL+ODkeOCueOCkumWieOBmOOCi1xuICAgIGNvbnRleHQuZmlsbCgpOyAvL+azouOCkuWhl+OCiuOBpOOBtuOBmVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGRyYXcgc2luZVxuICogXG4gKiBUaGUgc2luZSBjdXJ2ZSBpcyBkcmF3biBpbiAxMHB4IHNlZ21lbnRzIHN0YXJ0aW5nIGF0IHRoZSBvcmlnaW4uIFxuICogZHJhd1NpbmUo5pmC6ZaTLCDms6Ljga7luYXjga56b29tLCDms6Ljga7plovlp4vkvY3nva7jga7pgYXjgowpXG4gKi9cbmZ1bmN0aW9uIGRyYXdTaW5lKGNhbnZhcywgdCwgem9vbSwgZGVsYXkpIHtcbiAgICBsZXQgeEF4aXMgPSBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQvMik7XG4gICAgbGV0IHlBeGlzID0gMDtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0Q2FjaGU7XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHggYW5kIHksIHN0YXJ0aW5nIGF0IDAsMCBhbmQgdHJhbnNsYXRpbmcgdG8gdGhlIG9yaWdpbiBvblxuICAgIC8vIHRoZSBjYW52YXMuXG4gICAgbGV0IHggPSB0OyAvL+aZgumWk+OCkuaoquOBruS9jee9ruOBqOOBmeOCi1xuICAgIGxldCB5ID0gTWF0aC5zaW4oeCkvem9vbTtcbiAgICBjb250ZXh0Lm1vdmVUbyh5QXhpcywgdW5pdCp5K3hBeGlzKTsgLy/jgrnjgr/jg7zjg4jkvY3nva7jgavjg5HjgrnjgpLnva7jgY9cblxuICAgIC8vIExvb3AgdG8gZHJhdyBzZWdtZW50cyAo5qiq5bmF44Gu5YiG44CB5rOi44KS5o+P55S7KVxuICAgIGZvciAoaSA9IHlBeGlzOyBpIDw9IGNhbnZhcy53aWR0aCArIDEwOyBpICs9IDEwKSB7XG4gICAgICAgIHggPSB0KygteUF4aXMraSkvdW5pdC96b29tO1xuICAgICAgICB5ID0gTWF0aC5zaW4oeCAtIGRlbGF5KS8zO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhpLCB1bml0KnkreEF4aXMpO1xuICAgIH1cbn1cblxuaW5pdCgpO1xuIiwiY29uc3QgZHVyYXRpb24gPSAxMDAwO1xubGV0IHN0YXJ0VGltZTsvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7plovlp4vmmYLplpPjgpLmoLzntI3jgZnjgovlpInmlbBcbmxldCBzdGFydFNjcm9sbFk7Ly8g44Ki44OL44Oh44O844K344On44Oz44Gu6ZaL5aeL5pmC44Gu44K544Kv44Ot44O844Or5L2N572u44KS5qC857SN44GZ44KL5aSJ5pWwXG5sZXQgdGFyZ2V0U2Nyb2xsWTsvLyDjgr/jg7zjgrLjg4Pjg4jjga7jgrnjgq/jg63jg7zjg6vkvY3nva7jgpLmoLzntI3jgZnjgovlpInmlbBcblxuLyoqXG4gKiDjgqTjg7zjgrjjg7PjgrDplqLmlbBcbiAqIEBwYXJhbSB4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5jb25zdCBlYXNlT3V0Q3ViaWMgPSAoeCkgPT4ge1xuICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB4LCAzKTtcbn07XG5cbi8qKlxuICog44Ki44OL44Oh44O844K344On44Oz44Gu5ZCE44OV44Os44O844Og44Gn44Gu5Yem55CGXG4gKi9cbmNvbnN0IHNjcm9sbEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbik7Ly8g54++5Zyo5pmC6ZaT44Gu57aZ57aa5pmC6ZaT44Gr5a++44GZ44KL6YCy5o2X5bqm44KS566X5Ye6XG4gIGNvbnN0IHNjcm9sbFkgPVxuICAgIHN0YXJ0U2Nyb2xsWSArXG4gICAgKHRhcmdldFNjcm9sbFkgLSBzdGFydFNjcm9sbFkpICogZWFzZU91dEN1YmljKHByb2dyZXNzKTtcbiAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkpO1xuXG4gIGlmIChwcm9ncmVzcyA8IDEpIHsvLyDpgLLmjZfluqbjgYwx5pyq5rqA77yIPTEwMCXjgafjga/jgarjgYTvvInloLTlkIjjgIHoh6rliIboh6rouqvjgpLlkbzjgbPlh7rjgZfjgIHnubDjgorov5TjgZlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsQW5pbWF0aW9uKTtcbiAgfVxufTtcblxuLy8g44OI44OD44OX44G45oi744KL6KaB57Sg44KS44Kv44Oq44OD44Kv44GX44Gf44KJ44K544Kv44Ot44O844Or44Ki44OL44Oh44O844K344On44Oz5a6f6KGMXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXj0nIyddXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXJnZXRJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIik7Ly8g44K/44O844Ky44OD44OI44Gu6KaB57Sg44KS5Y+W5b6XXG4gICAgaWYgKHRhcmdldElkID09PSBcIiNcIikge1xuICAgICAgdGFyZ2V0U2Nyb2xsWSA9IDA7Ly8gaHJlZj1cIiNcIuOBruWgtOWQiOOBr+ODmuODvOOCuOODiOODg+ODl+OBquOBruOBpzBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0SWQpOy8vIOOCv+ODvOOCsuODg+ODiOOBruimgee0oFxuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDsvLyDjg5rjg7zjgrjlhajkvZPjga7pq5jjgZVcblxuICAgICAgaWYgKHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wICsgd2luZG93LmlubmVySGVpZ2h0ID4gZG9jdW1lbnRIZWlnaHQpIHsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZ5Y+W5b6XXG4gICAgICAgIHRhcmdldFNjcm9sbFkgPSBkb2N1bWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZK+OCpuOCo+ODs+ODieOCpumrmOOBleOBjOODmuODvOOCuOWFqOS9k+OBrumrmOOBleOCkui2heOBiOOBn+OBqOOBje+8iO+8neOBneOBk+OBvuOBp+OCueOCr+ODreODvOODq+OBp+OBjeOBquOBhO+8ieOBr+OAgeODmuODvOOCuOS4gOeVquOBl+OBn+OBvuOBp+OBruS9jee9ruOCkuWPluW+l1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0U2Nyb2xsWSA9IHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wOy8vIOOCv+ODvOOCsuODg+ODiOOBrlnluqfmqJlcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTsvLyBEYXRlLm5vdygp44Gn6ZaL5aeL5pmC6ZaT44KS44K744OD44OIXG4gICAgc3RhcnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7Ly8g54++5Zyo44Gu44K544Kv44Ot44O844Or5L2N572u44KS44K744OD44OIXG4gICAgc2Nyb2xsQW5pbWF0aW9uKCk7XG4gIH0pO1xufSk7IiwiLyoqXG4gKiBAbW9kdWxlcyA6IG5vZGVfbW9kdWxlc+ODleOCqeODq+ODgOOBvuOBp+OBrue1tuWvvuODkeOCueOBruOCqOOCpOODquOCouOCuVxuICogd2VicGFjay5jb25maWcuanPjgavjgablrprnvqnjgZfjgabjgYTjgotcbiAqL1xuXG4vLyBpbXBvcnQgJ0Btb2R1bGVzL3N2Z3h1c2UnOyAvL1NWR+OCueODl+ODqeOCpOODiOOCkklF44Gn5L2/55So44GZ44KL44Gf44KB44Gu44Op44Kk44OW44Op44OqXG4vLyBpbXBvcnQgJy4vbGliL2JfYnJvd3Nlcl9zd2l0Y2hlci5qcyc7IC8v44OW44Op44Km44K25Yik5a6a44Gu44Gf44KB44Op44Kk44OW44Op44OqXG5cbmltcG9ydCAnLi9jb21tb24vbXlUcmFpbi5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215SGVhZGVyLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlIb3Zlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215SW52YWxpZEhvdmVyJztcbmltcG9ydCAnLi9jb21tb24vc21vb3RoLXNjcm9sbC5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215TWlsa3lXYXkuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVN3aXBlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215U2Nyb2xsU2hvdy5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlGYWxsaW5nQm94LmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlXYXZlLmpzJztcblxuXG5cbi8vIGltcG9ydCAnLi9jb21tb24vbXlCdWJibHlCdXR0b24uanMnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teU9yYml0Jztcbi8vIGltcG9ydCAnLi9jb21tb24vdGVzdC5qcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215VGV4dFJvdGF0ZS5qcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uJ1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teVN0YXJXYXknO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teUxvYWRpbmcuanMnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teVBhcnRpY2xlUm91bmQnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teVBhcnRpY2xlQmFuZyc7Il0sInNvdXJjZVJvb3QiOiIifQ==
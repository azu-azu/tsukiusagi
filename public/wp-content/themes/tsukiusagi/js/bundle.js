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
//     myList.forEach((item) => {
//       item.removeEventListener('mousemove', (e) => {
//         moveIndicator(e.target);
//       });
//     });
//   }
// });
// ----------------------------------------------------
// 関数
// ----------------------------------------------------


var marker = document.getElementById('js-marker');

function moveIndicator(e) {
  marker.style.opacity = 1;
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

function removeIndicator() {
  marker.style.opacity = '';
  marker.style.left = '';
  marker.style.width = '';
}

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
/* harmony import */ var _common_myHover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/myHover */ "../_assets/js/common/myHover.js");
/* harmony import */ var _common_myHover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_myHover__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/smooth-scroll */ "../_assets/js/common/smooth-scroll.js");
/* harmony import */ var _common_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_myMilkyWay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/myMilkyWay */ "../_assets/js/common/myMilkyWay.js");
/* harmony import */ var _common_myMilkyWay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_myMilkyWay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/myScrollShow.js */ "../_assets/js/common/myScrollShow.js");
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_data_splitting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/data-splitting */ "../_assets/js/common/data-splitting.js");
/* harmony import */ var _common_data_splitting__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_data_splitting__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_myFallingBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/myFallingBox */ "../_assets/js/common/myFallingBox.js");
/* harmony import */ var _common_myFallingBox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_myFallingBox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/myWave.js */ "../_assets/js/common/myWave.js");
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_myWave_js__WEBPACK_IMPORTED_MODULE_9__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
// import '@modules/svgxuse'; //SVGスプライトをIEで使用するためのライブラリ
// import './lib/b_browser_switcher.js'; //ブラウザ判定のためライブラリ


 // import './common/myInvalidHover';







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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUZhbGxpbmdCb3guanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215SGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUhvdmVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teU1pbGt5V2F5LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVNjcm9sbFNob3cuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215U3dpcGVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVRyYWluLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVdhdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL3Ntb290aC1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJTcGxpdHRpbmciLCJ3aGl0ZXNwYWNlIiwiY291bnQiLCJwYXJlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaSIsInNlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsInJvdGF0ZUJhY2siLCJmYWxsaW5nTGF5ZXIiLCJsaW5lSGl0Ym94IiwibGluZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWFkZXJGYWRlIiwiaGVhZGVyQmFja0Rvd24iLCJyZXNpemVSZW1vdmVDbGFzcyIsImJvZHlGaXhlZE5vbmUiLCJoYW1idXJnZXIiLCJoYW1idXJnZXJDbGFzcyIsImNsYXNzTGlzdCIsIm15Qm9keSIsImJvZHkiLCJteUJvZHlDbGFzcyIsImZsYWciLCJoYW1idXJnZXJDbGljayIsIm5hdkxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsbSIsInJlbW92ZU9wZW4iLCJhZGRDbG9zZSIsIm15SGVhZGVyIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXJGYWRlUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsImFkZCIsInJlbW92ZSIsImxheW91dEhlYWRlciIsImxheW91dEhlYWRlckNsYXNzIiwibXlUYXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0VG9wIiwidG9wIiwiY29udGFpbnMiLCJteVBvc2l0aW9uIiwicmVtb3ZlQ2xvc2UiLCJzY3JvbGxZIiwic3R5bGUiLCJzY3JvbGxUbyIsInBhcnNlSW50IiwiYWRkT3BlbiIsInBvc2l0aW9uIiwibW9vbk1pbmlTaXplIiwieCIsImNsaWVudFdpZHRoIiwicGFkZGluZ1RvcCIsIm15TGlzdCIsIml0ZW0iLCJlIiwibW92ZUluZGljYXRvciIsInRhcmdldCIsInJlc2l6ZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwicmVtb3ZlSW5kaWNhdG9yIiwibWFya2VyIiwib3BhY2l0eSIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm15UGFydGljbGVJRCIsInBhcnRpY2xlX3NoYXBlIiwibnVtT2ZTdGFycyIsImNvbG9yT2ZTdGFycyIsIm9wYWNpdHlPZlN0YXJzIiwic2l6ZU9mU3RhcnMiLCJtb3ZlX2RpcmVjdGlvbiIsIm1vdmVfc3BlZWQiLCJwYXJ0aWNsZXNKUyIsIkFuaW1DbGFzcyIsInNjcm9sbEFuaW1hdGlvblNob3dDbGFzcyIsInRyaWdnZXJNYXJnaW5EZWZhdWx0Iiwic2Nyb2xsQW5pbUVsbSIsInNjcm9sbEFuaW1hdGlvbkZ1bmMiLCJsZW5ndGgiLCJ0cmlnZ2VyTWFyZ2luIiwic2hvd1BvcyIsImRhdGFzZXQiLCJqc19kYXRhbWFyZ2luIiwianNfbWFyZ2luIiwianNfdHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhlaWdodCIsImRlbGF5IiwianNfZGVsYXkiLCJzZXRUaW1lb3V0IiwiaW5kZXgiLCJiaW5kIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImVmZmVjdCIsImxvb3AiLCJzcGVlZCIsImRyYWdnYWJsZSIsIm1vdXNld2hlZWwiLCJmb3JjZVRvQXhpcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImR5bmFtaWNCdWxsZXRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm15VHJhaW4iLCJqUXVlcnkiLCJ0cmFpbl9wb3MiLCJvZmZzZXQiLCJ0cmFpbl9oZWlnaHQiLCJvdXRlckhlaWdodCIsIiQiLCJzY3JvbGwiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidW5pdCIsImNhbnZhc0xpc3QiLCJpbmZvIiwiY29sb3JMaXN0IiwiaW5pdCIsInNlY29uZHMiLCJ0IiwicHVzaCIsImNhbnZhc0luZGV4IiwiY2FudmFzIiwiaGVpZ2h0IiwiY29udGV4dENhY2hlIiwiZ2V0Q29udGV4dCIsInVwZGF0ZSIsImRyYXciLCJNYXRoIiwiUEkiLCJjb2xvciIsImNvbnRleHQiLCJjbGVhclJlY3QiLCJkcmF3V2F2ZSIsImFscGhhIiwiem9vbSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYmVnaW5QYXRoIiwiZHJhd1NpbmUiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwieEF4aXMiLCJmbG9vciIsInlBeGlzIiwieSIsInNpbiIsIm1vdmVUbyIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwic3RhcnRTY3JvbGxZIiwidGFyZ2V0U2Nyb2xsWSIsImVhc2VPdXRDdWJpYyIsInBvdyIsInNjcm9sbEFuaW1hdGlvbiIsInByb2dyZXNzIiwibWluIiwiRGF0ZSIsIm5vdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsImRvY3VtZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib2Zmc2V0VG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLFNBQVMsQ0FBQztBQUNOQyxZQUFVLEVBQUU7QUFETixDQUFELENBQVQsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUNBLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxJQUFJQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csc0JBQVQsRUFBZixDLENBQWtEOztBQUVsRCxLQUFLQyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdOLEtBQWhCLEVBQXVCTSxDQUFDLEVBQXhCLEVBQTRC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USxDQUFDdUIsSUFBVCxDQUFja0ssWUFBckMsQ0FGSyxDQUU2Qzs7QUFFbEQsVUFBSUYsYUFBYSxDQUFDRyxTQUFkLEdBQTBCN0ssTUFBTSxDQUFDcUYsV0FBakMsR0FBK0NzRixjQUFuRCxFQUFtRTtBQUFDO0FBQ2xFZCxxQkFBYSxHQUFHYyxjQUFjLEdBQUczSyxNQUFNLENBQUNxRixXQUF4QyxDQURpRSxDQUNiO0FBQ3JELE9BRkQsTUFFTztBQUNMd0UscUJBQWEsR0FBR2EsYUFBYSxDQUFDRyxTQUE5QixDQURLLENBQ21DO0FBQ3pDO0FBQ0Y7O0FBQ0RsQixhQUFTLEdBQUdRLElBQUksQ0FBQ0MsR0FBTCxFQUFaLENBaEJ1QyxDQWdCaEI7O0FBQ3ZCUixnQkFBWSxHQUFHNUosTUFBTSxDQUFDc0MsT0FBdEIsQ0FqQnVDLENBaUJUOztBQUM5QjBILG1CQUFlO0FBQ2hCLEdBbkJEO0FBb0JELENBckJELEU7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL19hc3NldHMvanMvbWFpbi5qc1wiKTtcbiIsIlNwbGl0dGluZyh7XG4gICAgd2hpdGVzcGFjZTogdHJ1ZVxufSkiLCJjb25zdCBjb3VudCA9IDc7XG5sZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlY3RvcicpO1xubGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbmZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdG9yLmNsYXNzTmFtZSA9IFwic2VjdG9yXCI7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlY3Rvcik7XG5cbiAgbGV0IHJvdGF0ZUJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQmFjay5jbGFzc05hbWUgPSBcInJvdGF0ZVwiO1xuICBzZWN0b3IuYXBwZW5kQ2hpbGQocm90YXRlQmFjayk7XG5cbiAgbGV0IGZhbGxpbmdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWxsaW5nTGF5ZXIuY2xhc3NOYW1lID0gXCJmYWxsaW5nXCI7XG4gIHJvdGF0ZUJhY2suYXBwZW5kQ2hpbGQoZmFsbGluZ0xheWVyKTtcblxuICBsZXQgbGluZUhpdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lSGl0Ym94LmNsYXNzTmFtZSA9IFwibGluZS1ib3hcIjtcbiAgZmFsbGluZ0xheWVyLmFwcGVuZENoaWxkKGxpbmVIaXRib3gpO1xuXG4gIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gXCJsaW5lLWJveF9fbGluZSBjLWJhbGxcIjtcbiAgbGluZUhpdGJveC5hcHBlbmRDaGlsZChsaW5lKTtcbn1cblxucGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiIsIi8vIOOCueOCr+ODreODvOODq+OBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cbi8vIOODreODvOODieOBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcblx0aGVhZGVyQmFja0Rvd24oKTtcbn0pO1xuXG4vLyDjgqbjgqPjg7Pjg4njgqbluYXjgYzliIfjgormm7/jgo/jgaPjgZ/jgonplqLmlbDlkbzjgbPlh7rjgZdcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG5cdHJlc2l6ZVJlbW92ZUNsYXNzKCk7Ly9pcy1vcGVuLCBpcy1jbG9zZeOCkuWkluOBmVxuXHRib2R5Rml4ZWROb25lKCk7Ly9ib2R544GuZml4ZWTjgpLlpJbjgZlcbn0pO1xuXG5cbi8vICoqXG4vLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg5zjgr/jg7PvvJrjgr/jg4Pjg4Egb3Ig44Kv44Oq44OD44KvXG4vLyAqKlxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWhhbWJ1cmdlcicpO1xuY29uc3QgaGFtYnVyZ2VyQ2xhc3MgPSBoYW1idXJnZXIuY2xhc3NMaXN0O1xuY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG15Qm9keUNsYXNzID0gbXlCb2R5LmNsYXNzTGlzdDtcbmxldCBmbGFnID0gZmFsc2U7XG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHRmbGFnID0gdHJ1ZTtcblx0aGFtYnVyZ2VyQ2xpY2soKTtcbn0pO1xuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdGlmIChmbGFnKSB7XG5cdFx0ZmxhZyA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGhhbWJ1cmdlckNsaWNrKCk7XG5cdH1cbn0pO1xuXG4vLyAqKlxuLy8g44OK44OT44Ky44O844K344On44Oz44Gu44Oq44K544OI44KS44Kv44Oq44OD44Kv44GX44Gf44KJaXMtb3BlbuOCkua2iOOBmVxuLy8gKipcbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1hcmtlclwiKTtcbm5hdkxpc3QuZm9yRWFjaCgoZWxtKSA9PiB7XG5cdGVsbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuXHRcdGZsYWcgPSB0cnVlO1xuXHRcdHJlbW92ZU9wZW4oKTsvLyBpcy1vcGVu44KS5aSW44GZXG5cdFx0YWRkQ2xvc2UoKTsvLyBpcy1jbG9zZeOCkuS7mOOBkeOCi1xuXHRcdGJvZHlGaXhlZE5vbmUoKTsvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuXHR9KTtcbn0pO1xuXG5uYXZMaXN0LmZvckVhY2goKGVsbSkgPT4ge1xuXHRlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0aWYgKGZsYWcpIHtcblx0XHRcdGZsYWcgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlT3BlbigpOy8vIGlzLW9wZW7jgpLlpJbjgZlcblx0XHRcdGFkZENsb3NlKCk7Ly8gaXMtY2xvc2XjgpLku5jjgZHjgotcblx0XHRcdGJvZHlGaXhlZE5vbmUoKTsvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuXHRcdH1cblx0fSk7XG59KTtcblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8g6Zai5pWwXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAqKlxuLy8gcC1oZWFkZXI644K544Kv44Ot44O844Or44GX44Gf44KJ5raI44GI44KLXG4vLyAqKlxuY29uc3QgbXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWhlYWRlclwiKTtcbmNvbnN0IGhlYWRlckNsYXNzID0gbXlIZWFkZXIuY2xhc3NMaXN0O1xuY29uc3QgaGVhZGVyRmFkZVBvc2l0aW9uID0gNTA7Ly/jgrnjgq/jg63jg7zjg6vjgZfjgabjg5rjg7zjgrjjg4jjg4Pjg5fjgYvjgonjgIfjgIfjgavpgZTjgZfjgZ/jgajjgY1cblxuY29uc3QgaGVhZGVyRmFkZSA9ICgpID0+IHtcblx0bGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRpZiAoc2Nyb2xsVG9wID49IGhlYWRlckZhZGVQb3NpdGlvbikge1xuXHRcdGhlYWRlckNsYXNzLmFkZCgnaXMtZmFkZScpO1xuXHR9IGVsc2Uge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnaXMtZmFkZScpO1xuXHR9O1xufTtcblxuLy8gKipcbi8vIHAtaGVhZGVyLWJhY2s644K544Kv44Ot44O844Or6YCU5Lit44Gn5Ye654++XG4vLyAqKlxuY29uc3QgbGF5b3V0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWwtaGVhZGVyJyk7XG5jb25zdCBsYXlvdXRIZWFkZXJDbGFzcyA9IGxheW91dEhlYWRlci5jbGFzc0xpc3Q7XG5cbmNvbnN0IGhlYWRlckJhY2tEb3duID0gKCkgPT4ge1xuXHRsZXQgbXlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtzXCIpO1xuXHRsZXQgcmVjdCA9IG15VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGxldCB0YXJnZXRUb3AgPSByZWN0LnRvcCArIHNjcm9sbFRvcDtcblxuXHRpZiAoc2Nyb2xsVG9wID49IHRhcmdldFRvcCkge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZShcIlVwTW92ZVwiLCAncC1oZWFkZXItLXRvcCcsIFwiaXMtZmFkZVwiKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRoZWFkZXJDbGFzcy5hZGQoJ0Rvd25Nb3ZlJywgJ3AtaGVhZGVyLS1iYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cdFx0bGF5b3V0SGVhZGVyQ2xhc3MuYWRkKCdiYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cblx0fSBlbHNlIHtcblx0XHRpZiAoaGVhZGVyQ2xhc3MuY29udGFpbnMoXCJEb3duTW92ZVwiKSkgey8v44GZ44Gn44Gr44Kv44Op44K55ZCN44GM44Gk44GE44Gm44GE44Gf44KJXG5cdFx0XHRsYXlvdXRIZWFkZXJDbGFzcy5yZW1vdmUoJ2JhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLmFkZCgnVXBNb3ZlJywgJ3AtaGVhZGVyLS10b3AnKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblx0XHR9XG5cdH1cbn07XG5cblxuY29uc3QgaGFtYnVyZ2VyQ2xpY2sgPSAoKSA9PiB7XG5cdGxldCBteVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cblx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHsvL2lzLWNsb3Nl44GM44GC44Gj44Gf44KJXG5cdFx0cmVtb3ZlQ2xvc2UoKTsvL2lzLWNsb3Nl44KS5aSW44GZXG5cdH0gZWxzZSB7XG5cblx0XHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7Ly9pcy1vcGVu44GM44GC44Gj44Gf44KJXG5cdFx0XHRjb25zdCBzY3JvbGxZID0gbXlCb2R5LnN0eWxlLnRvcDsvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7oqJjmhrZcblx0XHRcdHJlbW92ZU9wZW4oKTsvLyBpcy1vcGVu44KS5aSW44GZXG5cdFx0XHRhZGRDbG9zZSgpOy8vIGlzLWNsb3Nl44KS5LuY44GR44KLXG5cdFx0XHRib2R5Rml4ZWROb25lKCk7Ly8gYm9keeOBrmZpeGVk44KS5aSW44GZXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoc2Nyb2xsWSB8fCAnMCcpICogLTEpOy8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruS/neaMgVxuXHRcdH1cblx0fTtcblxuXHQvLyBpcy1jbG9zZeOCgmlzLW9wZW7jgoLjgarjgYvjgaPjgZ/jgolcblx0aWYgKCFoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLWNsb3NlXCIpICYmICFoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHtcblx0XHRhZGRPcGVuKCk7Ly9pcy1vcGVu44KS44Gk44GR44KLXG5cdFx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuXHRcdG15Qm9keS5zdHlsZS50b3AgPSBgLSR7bXlQb3NpdGlvbn1weGA7XG5cdH07XG59O1xuXG5cbi8vICoqXG4vL+OCpuOCo+ODs+ODieOCpuW5heOBjOWIh+OCiuabv+OCj+OBo+OBn+OCieOAgWlzLW9wZW58fGlzLWNsb3Nl44KS5aSW44GZXG4vLyAqKlxuY29uc3QgbW9vbk1pbmlTaXplID0gNTcwO1xuY29uc3QgcmVzaXplUmVtb3ZlQ2xhc3MgPSAoKSA9PiB7XG5cdGxldCB4ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblx0aWYgKHggPj0gbW9vbk1pbmlTaXplKSB7XG5cdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkgey8vaXMtb3BlbuOBjOOBguOBo+OBn+OCiVxuXHRcdFx0cmVtb3ZlT3BlbigpOy8vIGlzLW9wZW7jgpLlpJbjgZlcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHsvL2lzLWNsb3Nl44GM44GC44Gj44Gf44KJXG5cdFx0XHRcdHJlbW92ZUNsb3NlKCk7Ly9pcy1jbG9zZeOCkuWkluOBmVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuXG4vLyAqKlxuLy8gaXMtY2xvc2XjgpLlpJbjgZlcbi8vICoqXG5jb25zdCByZW1vdmVDbG9zZSA9ICgpID0+IHtcblx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuXHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLWNsb3NlJyk7XG59O1xuXG4vLyAqKlxuLy8gaXMtY2xvc2XjgpLku5jjgZHjgotcbi8vICoqXG5jb25zdCBhZGRDbG9zZSA9ICgpID0+IHtcblx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1jbG9zZScpO1xuXHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG59O1xuXG4vLyAqKlxuLy8gaXMtb3BlbuOCkuWkluOBmVxuLy8gKipcbmNvbnN0IHJlbW92ZU9wZW4gPSAoKSA9PiB7XG5cdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuXHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLW9wZW4nKTtcbn07XG5cbi8vICoqXG4vLyBpcy1vcGVu44KS5LuY44GR44KLXG4vLyAqKlxuY29uc3QgYWRkT3BlbiA9ICgpID0+IHtcblx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1vcGVuJyk7XG5cdG15Qm9keUNsYXNzLmFkZCgnaXMtb3BlbicpO1xufTtcblxuXG4vLyAqKlxuLy8gYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyAqKlxuY29uc3QgYm9keUZpeGVkTm9uZSA9ICgpID0+IHtcblx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcblx0bXlCb2R5LnN0eWxlLnRvcCA9IFwiXCI7XG5cdG15Qm9keS5zdHlsZS5wYWRkaW5nVG9wID0gXCJcIjtcbn07XG5cblxuXG5cblxuLy8gLy8g44Km44Kj44Oz44OJ44Km5bmF44GM5YiH44KK5pu/44KP44Gj44Gf44Go44GNXG4vLyBjb25zdCBtb29uTWluaVNpemUgPSA1NzA7XG4vLyBqUXVlcnkoZnVuY3Rpb24gKCQpIHtcbi8vIFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4vLyBcdFx0bGV0IHggPSAkKHdpbmRvdykud2lkdGgoKTtcbi8vIFx0XHRsZXQgeSA9IG1vb25NaW5pU2l6ZTtcbi8vIFx0XHRpZiAoeCA+PSB5KSB7XG4vLyBcdFx0XHQkKFwiI2pzLWhhbWJ1cmdlclwiKS5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4vLyBcdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4vLyBcdFx0XHQvLyAkKFwiI2pzLWhhbWJ1cmdlclwiKS5hZGRDbGFzcyhcImlzLWNsb3NlXCIpO1xuLy8gXHRcdFx0Ly8gJChcImJvZHlcIikuYWRkQ2xhc3MoXCJpcy1jbG9zZVwiKTtcblxuLy8gXHRcdFx0Ym9keUZpeGVkTm9uZSgpOy8vYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyBcdFx0fVxuLy8gXHRcdGVsc2Uge1xuLy8gXHRcdH1cbi8vIFx0fSk7XG4vLyB9KVxuXG5cblxuLy8gKipcbi8vIOODj+ODs+ODkOODvOOCrOODvOODnOOCv+ODs++8muOCr+ODquODg+OCr+OCpOODmeODs+ODiFxuLy8gKipcbi8vIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1oYW1idXJnZXInKTtcbi8vIGNvbnN0IGhhbWJ1cmdlckNsYXNzID0gaGFtYnVyZ2VyLmNsYXNzTGlzdDtcbi8vIGNvbnN0IG15Qm9keSA9IGRvY3VtZW50LmJvZHk7XG4vLyBjb25zdCBteUJvZHlDbGFzcyA9IG15Qm9keS5jbGFzc0xpc3Q7XG5cblxuLy8gaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gXHRsZXQgbXlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4vLyBcdC8vaXMtY2xvc2XjgYzjgYLjgaPjgZ/jgolcbi8vIFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHtcbi8vIFx0XHQvL2lzLWNsb3Nl44KS5aSW44GZXG4vLyBcdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuLy8gXHRcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtY2xvc2UnKTtcblxuLy8gXHRcdC8vaXMtb3BlbuOCkuOBpOOBkeOCi1xuLy8gXHRcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtb3BlbicpO1xuLy8gXHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtb3BlbicpO1xuLy8gXHRcdG15Qm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbi8vIFx0XHRteUJvZHkuc3R5bGUudG9wID0gYC0ke215UG9zaXRpb259cHhgO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdC8vaXMtb3BlbuOBjOOBguOBo+OBn+OCiVxuLy8gXHRcdGlmIChoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHtcbi8vIFx0XHRcdC8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruiomOaGtlxuLy8gXHRcdFx0Y29uc3Qgc2Nyb2xsWSA9IG15Qm9keS5zdHlsZS50b3A7XG5cbi8vIFx0XHRcdC8vIGlzLW9wZW7jgpLlpJbjgZlcbi8vIFx0XHRcdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gXHRcdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cbi8vIFx0XHRcdC8vIGlzLWNsb3Nl44KS44Gk44GR44KLXG4vLyBcdFx0XHRoYW1idXJnZXJDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG4vLyBcdFx0XHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG5cbi8vIFx0XHRcdC8vIGJvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gXHRcdFx0Ym9keUZpeGVkTm9uZSgpO1xuXG4vLyBcdFx0XHQvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7kv53mjIFcbi8vIFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChzY3JvbGxZIHx8ICcwJykgKiAtMSk7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9KTtcblxuXG4vLyAqKlxuLy8gaXMtb3BlbuOCkua2iOOBmVxuLy8gKipcbi8vIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruODquOCueODiOOCkuOCr+ODquODg+OCr+OBl+OBn+OBqOOBjVxuLy8gY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWFya2VyXCIpO1xuLy8gbmF2TGlzdC5mb3JFYWNoKChlbG0pID0+IHtcbi8vIFx0ZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gXHRcdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gXHRcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gXHRcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcbi8vIFx0XHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG5cbi8vIFx0XHQvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gXHRcdGJvZHlGaXhlZE5vbmUoKTtcbi8vIFx0fSk7XG4vLyB9KTsiLCJjb25zdCBteUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbWFya2VyJyk7XG5jb25zdCBtb29uTWluaVNpemUgPSA1NzA7XG4vLyDjg63jg7zjg4njgZfjgZ/jgajjgY1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBsZXQgeCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gIGlmICh4ID49IG1vb25NaW5pU2l6ZSkge1xuICAgIG15TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIG1vdmVJbmRpY2F0b3IoZS50YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cbi8vIHJlc2l6ZeOBl+OBn+OBqOOBjVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKCkpO1xuXG5mdW5jdGlvbiByZXNpemUoKSB7XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHttb29uTWluaVNpemV9cHgpYCkubWF0Y2hlcykge1xuICAgIG15TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIG1vdmVJbmRpY2F0b3IoZS50YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlSW5kaWNhdG9yKCk7XG4gIH1cbn1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbi8vICAgbGV0IHggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuLy8gICBpZiAoeCA+PSBtb29uTWluaVNpemUpIHtcbi8vICAgICBteUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuLy8gICAgICAgICBtb3ZlSW5kaWNhdG9yKGUudGFyZ2V0KTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJlbW92ZUluZGljYXRvcigpO1xuLy8gICAgIG15TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4vLyAgICAgICAgIG1vdmVJbmRpY2F0b3IoZS50YXJnZXQpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH0pO1xuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyDplqLmlbBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1tYXJrZXInKTtcbmZ1bmN0aW9uIG1vdmVJbmRpY2F0b3IoZSkge1xuICBtYXJrZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gIG1hcmtlci5zdHlsZS5sZWZ0ID0gZS5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgbWFya2VyLnN0eWxlLndpZHRoID0gZS5vZmZzZXRXaWR0aCArICdweCc7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUluZGljYXRvcigpIHtcbiAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgbWFya2VyLnN0eWxlLmxlZnQgPSAnJztcbiAgbWFya2VyLnN0eWxlLndpZHRoID0gJyc7XG59IiwiLy8gKiogcGFydGljbGVzLmpz44KS5L2/44GGICoqXG5jb25zdCBteVBhcnRpY2xlSUQgPSBcImpzLW1pbGt5LXdheS1wYXJ0aWNsZVwiO1xuY29uc3QgcGFydGljbGVfc2hhcGUgPSBcInN0YXJcIjsgLy/jgrfjgqfjgqTjg5fjga7lvaLvvIhjaXJjbGU65Li444CBZWRnZTrlm5vop5LjgIF0cmlhbmdsZTrkuInop5LjgIFwb2x5Z29uOuWkmuinkuW9ouOAgXN0YXI65pif5Z6L44CBaW1hZ2U655S75YOP77yJXG5jb25zdCBudW1PZlN0YXJzID0gNDAwOyAvL+aYn+OBruaVsFxuY29uc3QgY29sb3JPZlN0YXJzID0gJyNmZmZmNTUnOyAvL+aYn+OBruiJslxuY29uc3Qgb3BhY2l0eU9mU3RhcnMgPSAwLjQ7IC8v5pif44Gu6YCP5piO5bqmXG5jb25zdCBzaXplT2ZTdGFycyA9IDM7IC8v5pif44Gu5aSn44GN44GVXG5jb25zdCBtb3ZlX2RpcmVjdGlvbiA9IFwicmlnaHRcIjsgLy/mtYHjgozjga7lkJHjgY0obm9uZeOAgXRvcOOAgXRvcC1yaWdodOOAgXJpZ2h044CBYm90dG9tLXJpZ2h044CBYm90dG9t44CBYm90dG9tLWxlZnTjgIFsZWZ044CBdG9wLWxlZnTjgojjgorpgbjmip4pXG5jb25zdCBtb3ZlX3NwZWVkID0gMTsgIC8v44K344Kn44Kk44OX44Gu5YuV44GP44K544OU44O844OJXG5cbnBhcnRpY2xlc0pTKG15UGFydGljbGVJRCwge1xuICBcInBhcnRpY2xlc1wiOiB7XG4gICAgXCJudW1iZXJcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBudW1PZlN0YXJzLFxuICAgICAgXCJkZW5zaXR5XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICBcInZhbHVlXCI6IGNvbG9yT2ZTdGFycyxcbiAgICB9LFxuICAgIFwic2hhcGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IHBhcnRpY2xlX3NoYXBlLFxuICAgICAgXCJzdHJva2VcIjogeyAvL+Wklue3mlxuICAgICAgICBcIndpZHRoXCI6IDAsXG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmXCJcbiAgICAgIH0sXG4gICAgICAvLyBcInBvbHlnb25cIjogeyAvL3R5cGXjgpJwb2x5Z29u44Gr44GX44Gf44Go44GN44Gu6Kit5a6aXG4gICAgICAvLyAgIFwibmJfc2lkZXNcIjogNVxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwiaW1hZ2VcIjogeyAvL3R5cGXjgpJpbWFnZeOBq+OBl+OBn+OBqOOBjeOBruioreWumlxuICAgICAgLy8gICBcInNyY1wiOiBcIlwiLFxuICAgICAgLy8gICBcIndpZHRoXCI6IDEwMCxcbiAgICAgIC8vICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICAvLyB9XG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBvcGFjaXR5T2ZTdGFycyxcbiAgICAgIFwicmFuZG9tXCI6IHRydWUsXG4gICAgICBcImFuaW1cIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLCAvL+OCt+OCp+OCpOODl+OBrumAj+aYjuW6puOCkuOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgICBcInNwZWVkXCI6IDEsXG4gICAgICAgIFwib3BhY2l0eV9taW5cIjogMC4yLCAvL+mAj+aYjuW6puOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2l6ZVwiOiB7XG4gICAgICBcInZhbHVlXCI6IHNpemVPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSwgLy/jgrfjgqfjgqTjg5fjga7lpKfjgY3jgZXjgpLjg6njg7Pjg4Djg6DjgavjgZnjgotcbiAgICAgIFwiYW5pbVwiOiB7IC8v44K344Kn44Kk44OX44Gu5aSn44GN44GV44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwic3BlZWRcIjogMSxcbiAgICAgICAgXCJzaXplX21pblwiOiAwLjIsIC8v5aSn44GN44GV44Gu5pyA5bCP5YCkXG4gICAgICAgIFwic3luY1wiOiBmYWxzZSAvL+WFqOOBpuOBruOCt+OCp+OCpOODl+OCkuWQjOaZguOBq+OCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICBcImVuYWJsZVwiOiBmYWxzZSwvLyDmmJ/jgajmmJ/jgpLnt5rjgafntZDjgbZcbiAgICAgIC8vIFwiZGlzdGFuY2VcIjogNTAwLFxuICAgICAgLy8gXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIC8vIFwib3BhY2l0eVwiOiAwLjQsXG4gICAgICAvLyBcIndpZHRoXCI6IDJcbiAgICB9LFxuICAgIFwibW92ZVwiOiB7XG4gICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgXCJzcGVlZFwiOiBtb3ZlX3NwZWVkLFxuICAgICAgXCJkaXJlY3Rpb25cIjogbW92ZV9kaXJlY3Rpb24sXG4gICAgICBcInJhbmRvbVwiOiBmYWxzZSxcbiAgICAgIFwic3RyYWlnaHRcIjogdHJ1ZSxcbiAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIiwgLy/jgqjjg6rjgqLlpJbjgavlh7rjgZ/jgrfjgqfjgqTjg5fjga7li5XjgY0ob3V044CBYm91bmNl44KI44KK6YG45oqeKVxuICAgICAgXCJib3VuY2VcIjogZmFsc2UsXG4gICAgICBcImF0dHJhY3RcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJyb3RhdGVYXCI6IDEwMDAsXG4gICAgICAgIFwicm90YXRlWVwiOiAxMDAwXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcImludGVyYWN0aXZpdHlcIjoge1xuICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXG4gICAgXCJldmVudHNcIjoge1xuICAgICAgXCJvbmhvdmVyXCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJtb2RlXCI6IFwiYnViYmxlXCIgLy/jg57jgqbjgrnjgqrjg7zjg5Djg7zmmYLjgavnmbrli5XjgZnjgovli5XjgY0o5LiL6KiYbW9kZXPlhoXjga5ncmFi44CBcmVwdWxzZeOAgWJ1YmJsZeOCiOOCiumBuOaKnilcbiAgICAgIH0sXG4gICAgICAvLyBcIm9uY2xpY2tcIjoge1xuICAgICAgLy8gICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgLy8gICBcIm1vZGVcIjogXCJidWJibGVcIiAvL+OCr+ODquODg+OCr+aZguOBq+eZuuWLleOBmeOCi+WLleOBjSjkuIvoqJhtb2Rlc+WGheOBrmdyYWLjgIFyZXB1bHNl44CBYnViYmxl44CBcHVzaOOAgXJlbW92ZeOCiOOCiumBuOaKnilcbiAgICAgIC8vIH0sXG4gICAgICBcInJlc2l6ZVwiOiB0cnVlIC8vY2FudmFz44Gu44K144Kk44K65aSJ5pu044Gr44KP44Gb44Gm5ouh5aSn57iu5bCP44GZ44KLXG4gICAgfSxcbiAgICBcIm1vZGVzXCI6IHtcbiAgICAgIC8vIFwiZ3JhYlwiOiB7IC8v44Kr44O844K944Or44Go44K344Kn44Kk44OX44Gu6ZaT44Gr57ea44GM6KGo56S644GV44KM44KLXG4gICAgICAvLyAgIFwiZGlzdGFuY2VcIjogNDAwLCAvL+OCq+ODvOOCveODq+OBi+OCieOBruWPjeW/nOi3nembolxuICAgICAgLy8gICBcImxpbmVfbGlua2VkXCI6IHtcbiAgICAgIC8vICAgICBcIm9wYWNpdHlcIjogMC41XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sXG4gICAgICBcImJ1YmJsZVwiOiB7IC8v44K344Kn44Kk44OX44GM6Iao44KJ44KAXG4gICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxuICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgXCJkdXJhdGlvblwiOiAwLjMsIC8v6Iao44KJ44KA44K344Kn44Kk44OX44Gu5oyB57aa5pmC6ZaTKG9uY2xpY2vmmYLjga7jgb8pXG4gICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICBcInNwZWVkXCI6IDMgLy/ohqjjgonjgoDjgrfjgqfjgqTjg5fjga7pgJ/luqYob25jbGlja+aZguOBruOBvylcbiAgICAgIH0sXG4gICAgICAvLyBcInJlcHVsc2VcIjogeyAvL+OCt+OCp+OCpOODl+OBjOOCq+ODvOOCveODq+OBi+OCiemAg+OBkuOCi1xuICAgICAgLy8gICBcImRpc3RhbmNlXCI6IDIwMCwgLy/jgqvjg7zjgr3jg6vjgYvjgonjga7lj43lv5zot53pm6JcbiAgICAgIC8vICAgXCJkdXJhdGlvblwiOiAwLjRcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcInB1c2hcIjogeyAvL+OCt+OCp+OCpOODl+OBjOWil+OBiOOCi1xuICAgICAgLy8gICBcInBhcnRpY2xlc19uYlwiOiA0IC8v5aKX44GI44KL44K344Kn44Kk44OX44Gu5pWwXG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJyZW1vdmVcIjoge1xuICAgICAgLy8gICBcInBhcnRpY2xlc19uYlwiOiAyIC8v5rib44KL44K344Kn44Kk44OX44Gu5pWwXG4gICAgICAvLyB9XG4gICAgfVxuICB9LFxuICBcInJldGluYV9kZXRlY3RcIjogdHJ1ZSAvL1JldGluYSBEaXNwbGF544Gr5a++5b+c44GZ44KLXG59KTtcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuXG5cblxuXG5cblxuLy8gKiogY2FudmFz5L2/44GG5aC05ZCIICoqXG4vLyBmdW5jdGlvbiByYW5kb20obG93LCBoaWdoKSB7XG4vLyAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpICsgbG93O1xuLy8gfVxuXG4vLyBjbGFzcyBWaXN1YWwge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMtbWlsa3ktd2F5Jyk7XG4vLyAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgICB0aGlzLmNhbnZhc1dpZHRoID0gMDtcbi8vICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IDA7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZUxlbmd0aCA9IDUwMDtcbi8vICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuLy8gICAgIHRoaXMucGFydGljbGVNYXhSYWRpdXMgPSAyO1xuXG4vLyAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4vLyAgICAgdGhpcy5yZW5kZXIoKTtcbi8vICAgfVxuXG4vLyAgIGluaXRpYWxpemUoKSB7XG4vLyAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVMZW5ndGg7IGkrKykge1xuLy8gICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaCh0aGlzLmNyZWF0ZVBhcnRpY2xlKGkpKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICByZXNpemVDYW52YXMoKSB7XG4vLyAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4vLyAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAyMDA7XG4vLyAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4vLyAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbi8vICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIHRoaXMuY29udGV4dC5zY2FsZSh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgd2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuLy8gICB9XG5cbi8vICAgY3JlYXRlUGFydGljbGUoaWQsIGlzUmVjcmVhdGUpIHtcbi8vICAgICBjb25zdCByYWRpdXMgPSByYW5kb20oMC41LCB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzKTtcbi8vICAgICBjb25zdCB4ID0gaXNSZWNyZWF0ZSA/IC1yYWRpdXMgLSByYW5kb20oMCwgdGhpcy5jYW52YXNXaWR0aCkgOiByYW5kb20oMCwgdGhpcy5jYW52YXNXaWR0aCk7XG4vLyAgICAgbGV0IHkgPSByYW5kb20odGhpcy5jYW52YXNIZWlnaHQgLyAyIC0gMTUwLCB0aGlzLmNhbnZhc0hlaWdodCAvIDIgKyAxNTApO1xuLy8gICAgIHkgKz0gcmFuZG9tKC0xMDAsIDEwMCk7XG4vLyAgICAgY29uc3QgYWxwaGEgPSByYW5kb20oMC4wNSwgMSk7XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgaWQ6IGlkLFxuLy8gICAgICAgeDogeCxcbi8vICAgICAgIHk6IHksXG4vLyAgICAgICBzdGFydFk6IHksXG4vLyAgICAgICByYWRpdXM6IHJhZGl1cyxcbi8vICAgICAgIGRlZmF1bHRSYWRpdXM6IHJhZGl1cyxcbi8vICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICBlbmRBbmdsZTogTWF0aC5QSSAqIDIsXG4vLyAgICAgICBhbHBoYTogYWxwaGEsXG4vLyAgICAgICAvLyBjb2xvcjogeyByOiByYW5kb20oMjU1LCAwKSwgZzogcmFuZG9tKDI1NSwgMCksIGI6IDAgfSxcbi8vICAgICAgIHNwZWVkOiBhbHBoYSArIDEsIC8v44Oe44Kk44OK44K544Gr44GZ44KL44Go5Y+z44GL44KJ5bemXG4vLyAgICAgICBhbXBsaXR1ZGU6IHJhbmRvbSg1MCwgMjAwKSxcbi8vICAgICAgIGlzQnVyc3Q6IGZhbHNlXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGRyYXdQYXJ0aWNsZXMoKSB7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4vLyAgICAgICAvLyDkvY3nva7mg4XloLHmm7TmlrBcbi8vICAgICAgIHRoaXMubW92ZVBhcnRpY2xlKHBhcnRpY2xlKTtcblxuLy8gICAgICAgLy8gcGFydGljbGXmj4/nlLtcbi8vICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbi8vICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsMjU1LDAsIC41KWA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSknO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFggPSAwO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSAwO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSAzMDtcblxuLy8gICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2JhKCR7cGFydGljbGUuY29sb3Iucn0sICR7cGFydGljbGUuY29sb3IuZ30sICR7cGFydGljbGUuY29sb3IuYn0sICR7cGFydGljbGUuYWxwaGF9KWA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBhcnRpY2xlLngsIHBhcnRpY2xlLnksIHBhcnRpY2xlLnJhZGl1cywgcGFydGljbGUuc3RhcnRBbmdsZSwgcGFydGljbGUuZW5kQW5nbGUpO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIG1vdmVQYXJ0aWNsZShwYXJ0aWNsZSkge1xuLy8gICAgIHBhcnRpY2xlLnggKz0gcGFydGljbGUuc3BlZWQ7XG4vLyAgICAgcGFydGljbGUueSA9IHBhcnRpY2xlLnN0YXJ0WSArIHBhcnRpY2xlLmFtcGxpdHVkZSAqIE1hdGguc2luKCgocGFydGljbGUueCAvIDUpICogTWF0aC5QSSkgLyAxODApO1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIC8vIGNhbnZhc+WIneacn+WMllxuLy8gICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCArIHRoaXMucGFydGljbGVNYXhSYWRpdXMgKiAyLCB0aGlzLmNhbnZhc0hlaWdodCk7XG5cbi8vICAgICAvLyBwYXJ0aWNsZeOCkuaPj+eUu1xuLy8gICAgIHRoaXMuZHJhd1BhcnRpY2xlcygpO1xuXG4vLyAgICAgLy8g55S76Z2i44GL44KJ5raI44GI44Gf44KJ5paw44GX44GEcGFydGljbGXjgavlt67jgZfmm7/jgYhcbi8vICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbi8vICAgICAgIGlmIChwYXJ0aWNsZS54IC0gcGFydGljbGUucmFkaXVzID49IHRoaXMuY2FudmFzV2lkdGgpIHtcbi8vICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbcGFydGljbGUuaWRdID0gdGhpcy5jcmVhdGVQYXJ0aWNsZShwYXJ0aWNsZS5pZCwgdHJ1ZSk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG5cbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4vLyAgIH1cbi8vIH1cbi8vIG5ldyBWaXN1YWwoKTtcblxuXG5cblxuLy8gZGl2MjAw55Sf5oiQXG4vLyBjb25zdCBjb3VudCA9IDIwMDtcbi8vIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWlsa3ktd2F5Jyk7XG4vLyBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vZnJhZ21lbnTkvZzmiJBcblxuLy8gZm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuLy8gICBsZXQgbWlsa2V5V2F5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleVdheS5jbGFzc05hbWUgPSBcInAtbWlsa3ktd2F5XCI7XG5cbi8vICAgbGV0IG1pbGtleU1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5TW92ZS5jbGFzc05hbWUgPSBcIm1pbGt5LW1vdmVcIjtcblxuLy8gICBsZXQgbWlsa2V5U3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlTdGFyLmNsYXNzTmFtZSA9IFwibWlsa3ktc3RhclwiO1xuXG4vLyAgIG1pbGtleU1vdmUuYXBwZW5kQ2hpbGQobWlsa2V5U3Rhcik7XG4vLyAgIG1pbGtleVdheS5hcHBlbmRDaGlsZChtaWxrZXlNb3ZlKTtcbi8vICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWlsa2V5V2F5KTtcbi8vIH1cblxuLy8gcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTsiLCIvLyBkYXRh5bGe5oCnXG4vLyBkYXRhLXNhX21hcmdpbu+8muihqOekuuOCv+OCpOODn+ODs+OCsOOCkuS9jee9ruOBp+OBmuOCieOBmVxuLy8gZGF0YS1zYV90cmlnZ2Vy77ya6KGo56S644K/44Kk44Of44Oz44Kw44Gu5Z+65rqW6KaB57Sg44KS5oyH5a6aXG4vLyBkYXRhLXNhX2RlbGF577ya6KGo56S644K/44Kk44Of44Oz44Kw44KS5pmC6ZaT44Gn44Ga44KJ44GZXG5cblxubGV0IEFuaW1DbGFzcyA9ICdqcy1zY3JvbGwtc2hvdyc7XG5sZXQgc2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzID0gJ3Nob3cnO1xubGV0IHRyaWdnZXJNYXJnaW5EZWZhdWx0ID0gMjAwO1xuXG5sZXQgc2Nyb2xsQW5pbUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQW5pbUNsYXNzKTtcbmxldCBzY3JvbGxBbmltYXRpb25GdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsQW5pbUVsbS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdHJpZ2dlck1hcmdpbiA9IHRyaWdnZXJNYXJnaW5EZWZhdWx0O1xuICAgICAgICBsZXQgZWxtID0gc2Nyb2xsQW5pbUVsbVtpXTtcbiAgICAgICAgbGV0IHNob3dQb3MgPSAwO1xuXG4gICAgICAgIC8vIG1hcmdpbuOBp+OBmuOCieOBmeWgtOWQiFxuICAgICAgICBpZiAoZWxtLmRhdGFzZXQuanNfZGF0YW1hcmdpbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0cmlnZ2VyTWFyZ2luID0gcGFyc2VJbnQoZWxtLmRhdGFzZXQuanNfbWFyZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyaWdnZXLjgYzjgYLjgovloLTlkIhcbiAgICAgICAgaWYgKGVsbS5kYXRhc2V0LmpzX3RyaWdnZXIpIHtcbiAgICAgICAgICAgIHNob3dQb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsbS5kYXRhc2V0LmpzX3RyaWdnZXIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRyaWdnZXJNYXJnaW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93UG9zID0gZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRyaWdnZXJNYXJnaW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmmYLplpPjgafjgZrjgonjgZnloLTlkIhcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHNob3dQb3MpIHtcbiAgICAgICAgICAgIGxldCBkZWxheSA9IChlbG0uZGF0YXNldC5qc19kZWxheSkgPyBlbG0uZGF0YXNldC5qc19kZWxheSA6IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbEFuaW1FbG1baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0uYmluZChudWxsLCBpKSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbiIsImxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuanMtc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCwvL+OCueODqeOCpOODieOBrumWk+OBrui3nembolxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGxvb3A6IHRydWUsLy/mnIDlvozjgavpgZTjgZfjgZ/jgonlhYjpoK3jgavmiLvjgotcbiAgICBzcGVlZDogMzAwLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG5cbiAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgIGZvcmNlVG9BeGlzOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsLy/jg5rjg7zjgrjjg43jg7zjgrfjg6fjg7Pjga7opoHntKBcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLC8v44Kv44Oq44OD44Kv44Gr5Y+N5b+c44GV44Gb44KLXG4gICAgICAgIGR5bmFtaWNCdWxsZXRzOiBmYWxzZSwvL+ODmuODvOOCuOODjeODvOOCt+ODp+ODs+OBq+W8t+W8seOBjOOBpOOBj1xuICAgIH0sXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH1cbn0pOyIsIi8vIOmKgOays+mJhOmBk+OCkuWbuuWumuOBmeOCi1xuY29uc3QgbXlUcmFpbiA9IGpRdWVyeShcIi5qcy10cmFpblwiKTtcbmNvbnN0IHRyYWluX3BvcyA9IG15VHJhaW4ub2Zmc2V0KCkudG9wO1xuY29uc3QgdHJhaW5faGVpZ2h0ID0gbXlUcmFpbi5vdXRlckhlaWdodCgpO1xuXG5cbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IHRyYWluX3BvcyArIDIyKSB7XG4gICAgICAgICAgICBteVRyYWluLmFkZENsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBteVRyYWluLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIi8vIEhUTUzjga48Y2FudmFzPuOCv+OCsOOBq0phdmFTY3JpcHTjgpLkvb/jgYTms6LvvIjloZfjgorvvInjgpLmj4/nlLvjgZnjgotcblxubGV0IHVuaXQgPSAxMDAsXG4gICAgY2FudmFzTGlzdCwgLy8g44Kt44Oj44Oz44OQ44K544Gu6YWN5YiXXG4gICAgaW5mbyA9IHt9LCAvLyDlhajjgq3jg6Pjg7Pjg5DjgrnlhbHpgJrjga7mj4/nlLvmg4XloLFcbiAgICBjb2xvckxpc3Q7IC8vIOWQhOOCreODo+ODs+ODkOOCueOBruiJsuaDheWgsVxuXG4vKipcbiAqIEluaXQgZnVuY3Rpb24uXG4gKiBcbiAqIEluaXRpYWxpemUgdmFyaWFibGVzIGFuZCBiZWdpbiB0aGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGluZm8uc2Vjb25kcyA9IDA7XG4gICAgaW5mby50ID0gMDtcbiAgICBjYW52YXNMaXN0ID0gW107XG4gICAgY29sb3JMaXN0ID0gW107XG4gICAgLy8gY2FudmFzMeWAi+OCgeOBruiJsuaMh+WumlxuICAgIGNhbnZhc0xpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhdmVDYW52YXNcIikpO1xuICAgIGNvbG9yTGlzdC5wdXNoKFsnI2ZmYmVmNicsICcjZmZmNWJlJywgJyNiNmY3ZmYnXSk7Ly/lt6bjgYzkuIDnlarkuIvihpLkuIrjga7ms6LpoIZcbiAgICAvLyDlkITjgq3jg6Pjg7Pjg5Djgrnjga7liJ3mnJ/ljJZcbiAgICBmb3IodmFyIGNhbnZhc0luZGV4IGluIGNhbnZhc0xpc3QpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNhbnZhc0xpc3RbY2FudmFzSW5kZXhdO1xuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7IC8vQ2FudmFz44Gud2lkdGjjgpLjgqbjgqPjg7Pjg4njgqbjga7luYXjgavlkIjjgo/jgZvjgotcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDQ1MDsvL+azouOBrumrmOOBlVxuICAgICAgICBjYW52YXMuY29udGV4dENhY2hlID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gICAgLy8g5YWx6YCa44Gu5pu05paw5Yem55CG5ZG844Gz5Ye644GXXG4gICAgdXBkYXRlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBmb3IobGV0IGNhbnZhc0luZGV4IGluIGNhbnZhc0xpc3QpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNhbnZhc0xpc3RbY2FudmFzSW5kZXhdO1xuICAgICAgICAvLyDlkITjgq3jg6Pjg7Pjg5Djgrnjga7mj4/nlLtcbiAgICAgICAgZHJhdyhjYW52YXMsIGNvbG9yTGlzdFtjYW52YXNJbmRleF0pO1xuICAgIH1cbiAgICAvLyDlhbHpgJrjga7mj4/nlLvmg4XloLHjga7mm7TmlrBcbiAgICBpbmZvLnNlY29uZHMgPSBpbmZvLnNlY29uZHMgKyAuMDE0O1xuICAgIGluZm8udCA9IGluZm8uc2Vjb25kcypNYXRoLlBJO1xuICAgIC8vIOiHqui6q+OBruWGjei1t+WRvOOBs+WHuuOBl1xuICAgIHNldFRpbWVvdXQodXBkYXRlLCAzNSk7XG59XG5cbi8qKlxuICogRHJhdyBhbmltYXRpb24gZnVuY3Rpb24uXG4gKiBcbiAqIFRoaXMgZnVuY3Rpb24gZHJhd3Mgb25lIGZyYW1lIG9mIHRoZSBhbmltYXRpb24sIHdhaXRzIDIwbXMsIGFuZCB0aGVuIGNhbGxzXG4gKiBpdHNlbGYgYWdhaW4uXG4gKi9cbmZ1bmN0aW9uIGRyYXcoY2FudmFzLCBjb2xvcikge1xuICAgIC8vIOWvvuixoeOBrmNhbnZhc+OBruOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmNvbnRleHRDYWNoZTtcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7mj4/nlLvjgpLjgq/jg6rjgqJcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy/ms6Ljga7ph43jgarjgorjgpLmj4/nlLsgZHJhd1dhdmUoY2FudmFzLCBjb2xvclvmlbDlrZfvvIjms6Ljga7mlbDjgpIw44GL44KJ5pWw44GI44Gm5oyH5a6a77yJXSwg6YCP6YGOLCDms6Ljga7luYXjga56b29tLOazouOBrumWi+Wni+S9jee9ruOBrumBheOCjCApXG4gICAgZHJhd1dhdmUoY2FudmFzLCBjb2xvclswXSwgMSwgMywgMCk7Ly8wLjXih5LpgI/pgY7lhbflkIg1MCXjgIEz4oeS5pWw5a2X44GM5aSn44GN44GE44G744Gp5rOi44GM44Gq44Gg44KJ44GLXG4gICAgZHJhd1dhdmUoY2FudmFzLCBjb2xvclsxXSwgMSwgMiwgMjUwKTtcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzJdLCAxLCAyLjUsIDEwMCk7XG59XG5cbi8qKlxuKiDms6LjgpLmj4/nlLtcbiogZHJhd1dhdmUo6ImyLCDkuI3pgI/mmI7luqYsIOazouOBruW5heOBrnpvb20sIOazouOBrumWi+Wni+S9jee9ruOBrumBheOCjClcbiovXG5mdW5jdGlvbiBkcmF3V2F2ZShjYW52YXMsIGNvbG9yLCBhbHBoYSwgem9vbSwgZGVsYXkpIHtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0Q2FjaGU7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjsvL+Whl+OCiuOBruiJslxuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyAvL+ODkeOCueOBrumWi+Wni1xuICAgIGRyYXdTaW5lKGNhbnZhcywgaW5mby50IC8gMC41LCB6b29tLCBkZWxheSk7XG4gICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICsgMTAsIGNhbnZhcy5oZWlnaHQpOyAvL+ODkeOCueOCkkNhbnZhc+OBruWPs+S4i+OBuFxuICAgIGNvbnRleHQubGluZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyAvL+ODkeOCueOCkkNhbnZhc+OBruW3puS4i+OBuFxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCkgLy/jg5HjgrnjgpLplonjgZjjgotcbiAgICBjb250ZXh0LmZpbGwoKTsgLy/ms6LjgpLloZfjgorjgaTjgbbjgZlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBkcmF3IHNpbmVcbiAqIFxuICogVGhlIHNpbmUgY3VydmUgaXMgZHJhd24gaW4gMTBweCBzZWdtZW50cyBzdGFydGluZyBhdCB0aGUgb3JpZ2luLiBcbiAqIGRyYXdTaW5lKOaZgumWkywg5rOi44Gu5bmF44Guem9vbSwg5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMKVxuICovXG5mdW5jdGlvbiBkcmF3U2luZShjYW52YXMsIHQsIHpvb20sIGRlbGF5KSB7XG4gICAgbGV0IHhBeGlzID0gTWF0aC5mbG9vcihjYW52YXMuaGVpZ2h0LzIpO1xuICAgIGxldCB5QXhpcyA9IDA7XG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuY29udGV4dENhY2hlO1xuICAgIC8vIFNldCB0aGUgaW5pdGlhbCB4IGFuZCB5LCBzdGFydGluZyBhdCAwLDAgYW5kIHRyYW5zbGF0aW5nIHRvIHRoZSBvcmlnaW4gb25cbiAgICAvLyB0aGUgY2FudmFzLlxuICAgIGxldCB4ID0gdDsgLy/mmYLplpPjgpLmqKrjga7kvY3nva7jgajjgZnjgotcbiAgICBsZXQgeSA9IE1hdGguc2luKHgpL3pvb207XG4gICAgY29udGV4dC5tb3ZlVG8oeUF4aXMsIHVuaXQqeSt4QXhpcyk7IC8v44K544K/44O844OI5L2N572u44Gr44OR44K544KS572u44GPXG5cbiAgICAvLyBMb29wIHRvIGRyYXcgc2VnbWVudHMgKOaoquW5heOBruWIhuOAgeazouOCkuaPj+eUuylcbiAgICBmb3IgKGkgPSB5QXhpczsgaSA8PSBjYW52YXMud2lkdGggKyAxMDsgaSArPSAxMCkge1xuICAgICAgICB4ID0gdCsoLXlBeGlzK2kpL3VuaXQvem9vbTtcbiAgICAgICAgeSA9IE1hdGguc2luKHggLSBkZWxheSkvMztcbiAgICAgICAgY29udGV4dC5saW5lVG8oaSwgdW5pdCp5K3hBeGlzKTtcbiAgICB9XG59XG5cbmluaXQoKTtcbiIsImNvbnN0IGR1cmF0aW9uID0gMTAwMDtcbmxldCBzdGFydFRpbWU7Ly8g44Ki44OL44Oh44O844K344On44Oz44Gu6ZaL5aeL5pmC6ZaT44KS5qC857SN44GZ44KL5aSJ5pWwXG5sZXQgc3RhcnRTY3JvbGxZOy8vIOOCouODi+ODoeODvOOCt+ODp+ODs+OBrumWi+Wni+aZguOBruOCueOCr+ODreODvOODq+S9jee9ruOCkuagvOe0jeOBmeOCi+WkieaVsFxubGV0IHRhcmdldFNjcm9sbFk7Ly8g44K/44O844Ky44OD44OI44Gu44K544Kv44Ot44O844Or5L2N572u44KS5qC857SN44GZ44KL5aSJ5pWwXG5cbi8qKlxuICog44Kk44O844K444Oz44Kw6Zai5pWwXG4gKiBAcGFyYW0geFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgZWFzZU91dEN1YmljID0gKHgpID0+IHtcbiAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0geCwgMyk7XG59O1xuXG4vKipcbiAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OBruWQhOODleODrOODvOODoOOBp+OBruWHpueQhlxuICovXG5jb25zdCBzY3JvbGxBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oMSwgKERhdGUubm93KCkgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pOy8vIOePvuWcqOaZgumWk+OBrue2mee2muaZgumWk+OBq+WvvuOBmeOCi+mAsuaNl+W6puOCkueul+WHulxuICBjb25zdCBzY3JvbGxZID1cbiAgICBzdGFydFNjcm9sbFkgK1xuICAgICh0YXJnZXRTY3JvbGxZIC0gc3RhcnRTY3JvbGxZKSAqIGVhc2VPdXRDdWJpYyhwcm9ncmVzcyk7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZKTtcblxuICBpZiAocHJvZ3Jlc3MgPCAxKSB7Ly8g6YCy5o2X5bqm44GMMeacqua6gO+8iD0xMDAl44Gn44Gv44Gq44GE77yJ5aC05ZCI44CB6Ieq5YiG6Ieq6Lqr44KS5ZG844Gz5Ye644GX44CB57mw44KK6L+U44GZXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbEFuaW1hdGlvbik7XG4gIH1cbn07XG5cbi8vIOODiOODg+ODl+OBuOaIu+OCi+imgee0oOOCkuOCr+ODquODg+OCr+OBl+OBn+OCieOCueOCr+ODreODvOODq+OCouODi+ODoeODvOOCt+ODp+ODs+Wun+ihjFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFbaHJlZl49JyMnXVwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpOy8vIOOCv+ODvOOCsuODg+ODiOOBruimgee0oOOCkuWPluW+l1xuICAgIGlmICh0YXJnZXRJZCA9PT0gXCIjXCIpIHtcbiAgICAgIHRhcmdldFNjcm9sbFkgPSAwOy8vIGhyZWY9XCIjXCLjga7loLTlkIjjga/jg5rjg7zjgrjjg4jjg4Pjg5fjgarjga7jgacwXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldElkKTsvLyDjgr/jg7zjgrLjg4Pjg4jjga7opoHntKBcbiAgICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7Ly8g44Oa44O844K45YWo5L2T44Gu6auY44GVXG5cbiAgICAgIGlmICh0YXJnZXRFbGVtZW50Lm9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCA+IGRvY3VtZW50SGVpZ2h0KSB7Ly8g44K/44O844Ky44OD44OI44GuWeW6p+aomeWPluW+l1xuICAgICAgICB0YXJnZXRTY3JvbGxZID0gZG9jdW1lbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7Ly8g44K/44O844Ky44OD44OI44GuWeW6p+aomSvjgqbjgqPjg7Pjg4njgqbpq5jjgZXjgYzjg5rjg7zjgrjlhajkvZPjga7pq5jjgZXjgpLotoXjgYjjgZ/jgajjgY3vvIjvvJ3jgZ3jgZPjgb7jgafjgrnjgq/jg63jg7zjg6vjgafjgY3jgarjgYTvvInjga/jgIHjg5rjg7zjgrjkuIDnlarjgZfjgZ/jgb7jgafjga7kvY3nva7jgpLlj5blvpdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFNjcm9sbFkgPSB0YXJnZXRFbGVtZW50Lm9mZnNldFRvcDsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZXG4gICAgICB9XG4gICAgfVxuICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7Ly8gRGF0ZS5ub3coKeOBp+mWi+Wni+aZgumWk+OCkuOCu+ODg+ODiFxuICAgIHN0YXJ0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZOy8vIOePvuWcqOOBruOCueOCr+ODreODvOODq+S9jee9ruOCkuOCu+ODg+ODiFxuICAgIHNjcm9sbEFuaW1hdGlvbigpO1xuICB9KTtcbn0pOyIsIi8qKlxuICogQG1vZHVsZXMgOiBub2RlX21vZHVsZXPjg5Xjgqnjg6vjg4Djgb7jgafjga7ntbblr77jg5Hjgrnjga7jgqjjgqTjg6rjgqLjgrlcbiAqIHdlYnBhY2suY29uZmlnLmpz44Gr44Gm5a6a576p44GX44Gm44GE44KLXG4gKi9cblxuLy8gaW1wb3J0ICdAbW9kdWxlcy9zdmd4dXNlJzsgLy9TVkfjgrnjg5fjg6njgqTjg4jjgpJJReOBp+S9v+eUqOOBmeOCi+OBn+OCgeOBruODqeOCpOODluODqeODqlxuLy8gaW1wb3J0ICcuL2xpYi9iX2Jyb3dzZXJfc3dpdGNoZXIuanMnOyAvL+ODluODqeOCpuOCtuWIpOWumuOBruOBn+OCgeODqeOCpOODluODqeODqlxuXG5pbXBvcnQgJy4vY29tbW9uL215VHJhaW4uanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUhlYWRlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215SG92ZXInO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teUludmFsaWRIb3Zlcic7XG5pbXBvcnQgJy4vY29tbW9uL3Ntb290aC1zY3JvbGwnO1xuaW1wb3J0ICcuL2NvbW1vbi9teU1pbGt5V2F5JztcbmltcG9ydCAnLi9jb21tb24vbXlTd2lwZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVNjcm9sbFNob3cuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9kYXRhLXNwbGl0dGluZyc7XG5pbXBvcnQgJy4vY29tbW9uL215RmFsbGluZ0JveCc7XG5pbXBvcnQgJy4vY29tbW9uL215V2F2ZS5qcyc7XG5cblxuXG4vLyBpbXBvcnQgJy4vY29tbW9uL215QnViYmx5QnV0dG9uLmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlPcmJpdCc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL3Rlc3QuanMnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teVRleHRSb3RhdGUuanMnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbidcbi8vIGltcG9ydCAnLi9jb21tb24vbXlTdGFyV2F5Jztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlMb2FkaW5nLmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlQYXJ0aWNsZVJvdW5kJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlQYXJ0aWNsZUJhbmcnOyJdLCJzb3VyY2VSb290IjoiIn0=
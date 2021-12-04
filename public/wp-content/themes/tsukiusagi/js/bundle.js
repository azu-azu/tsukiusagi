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

// スクロールしたら関数呼び出し
window.addEventListener('scroll', function () {
  headerFade();
  headerBackDown();
}); // ロードしたら関数呼び出し

window.addEventListener('load', function () {
  headerFade();
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
      bodyFixedNone(); //bodyのfixedを外す
    } else {}
  });
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
    hamburgerOpenRemove();
    bodyFixedNone(); //bodyのfixedを外す
  });
});
navList.forEach(function (elm) {
  elm.addEventListener('click', function () {
    if (flag) {
      flag = false;
    } else {
      hamburgerOpenRemove();
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
}; // **
// bodyのfixedを外す
// **


var bodyFixedNone = function bodyFixedNone() {
  myBody.style.position = "";
  myBody.style.top = "";
  myBody.style.paddingTop = "";
}; // **
// ハンバーガーボタンのクリック
// **


var hamburgerClick = function hamburgerClick() {
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
}; // **
// is-openを外す
// **


var hamburgerOpenRemove = function hamburgerOpenRemove() {
  hamburgerClass.remove('is-open');
  myBodyClass.remove('is-open');
  hamburgerClass.add('is-close');
  myBodyClass.add('is-close');
}; // **
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

// mouseoverしたらmoveIndecator呼び出し
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
}); // 関数

var marker = document.querySelector('#marker');

function moveIndicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
  console.log(e.offsetWidth);
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
/* harmony import */ var _common_myMilkyWay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/myMilkyWay */ "../_assets/js/common/myMilkyWay.js");
/* harmony import */ var _common_myMilkyWay__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_myMilkyWay__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/myScrollShow.js */ "../_assets/js/common/myScrollShow.js");
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_data_splitting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/data-splitting */ "../_assets/js/common/data-splitting.js");
/* harmony import */ var _common_data_splitting__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_data_splitting__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_myFallingBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/myFallingBox */ "../_assets/js/common/myFallingBox.js");
/* harmony import */ var _common_myFallingBox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_myFallingBox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/myWave.js */ "../_assets/js/common/myWave.js");
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_myWave_js__WEBPACK_IMPORTED_MODULE_11__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
// import '@modules/svgxuse'; //SVGスプライトをIEで使用するためのライブラリ
// import './lib/b_browser_switcher.js'; //ブラウザ判定のためライブラリ











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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUJ1YmJseUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlGYWxsaW5nQm94LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlIb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlJbnZhbGlkSG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215TWlsa3lXYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215U2Nyb2xsU2hvdy5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlTd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215VHJhaW4uanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215V2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vc21vb3RoLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGluZyIsIndoaXRlc3BhY2UiLCJhbmltYXRlQnV0dG9uIiwiZSIsIm15Q2xhc3NsaXN0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmUiLCJhZGQiLCJhbmltYXRlUmVtb3ZlIiwiYnViYmx5QnV0dG9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm15TGVuZ3RoIiwibGVuZ3RoIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb3VudCIsInBhcmVudCIsImdldEVsZW1lbnRCeUlkIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2VjdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwicm90YXRlQmFjayIsImZhbGxpbmdMYXllciIsImxpbmVIaXRib3giLCJsaW5lIiwid2luZG93IiwiaGVhZGVyRmFkZSIsImhlYWRlckJhY2tEb3duIiwibW9vbk1pbmlTaXplIiwialF1ZXJ5IiwiJCIsInJlc2l6ZSIsIngiLCJ3aWR0aCIsInkiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYm9keUZpeGVkTm9uZSIsImhhbWJ1cmdlciIsImhhbWJ1cmdlckNsYXNzIiwibXlCb2R5IiwiYm9keSIsIm15Qm9keUNsYXNzIiwiZmxhZyIsImhhbWJ1cmdlckNsaWNrIiwibmF2TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxtIiwiaGFtYnVyZ2VyT3BlblJlbW92ZSIsIm15SGVhZGVyIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXJGYWRlUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsImxheW91dEhlYWRlciIsImxheW91dEhlYWRlckNsYXNzIiwibXlUYXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0VG9wIiwidG9wIiwiY29udGFpbnMiLCJzdHlsZSIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsIm15UG9zaXRpb24iLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJwYXJzZUludCIsImxpc3QiLCJsaW5rIiwibWFya2VyIiwib3BhY2l0eSIsIm1vdmVJbmRpY2F0b3IiLCJpdGVtIiwiYWN0aXZlTGluayIsInJlbW92ZUFjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwiY29uc29sZSIsImxvZyIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm15UGFydGljbGVJRCIsInBhcnRpY2xlX3NoYXBlIiwibnVtT2ZTdGFycyIsImNvbG9yT2ZTdGFycyIsIm9wYWNpdHlPZlN0YXJzIiwic2l6ZU9mU3RhcnMiLCJtb3ZlX2RpcmVjdGlvbiIsIm1vdmVfc3BlZWQiLCJwYXJ0aWNsZXNKUyIsIkFuaW1DbGFzcyIsInNjcm9sbEFuaW1hdGlvblNob3dDbGFzcyIsInRyaWdnZXJNYXJnaW5EZWZhdWx0Iiwic2Nyb2xsQW5pbUVsbSIsInNjcm9sbEFuaW1hdGlvbkZ1bmMiLCJ0cmlnZ2VyTWFyZ2luIiwic2hvd1BvcyIsImRhdGFzZXQiLCJqc19kYXRhbWFyZ2luIiwianNfbWFyZ2luIiwianNfdHJpZ2dlciIsImlubmVySGVpZ2h0IiwiZGVsYXkiLCJqc19kZWxheSIsImluZGV4IiwiYmluZCIsInN3aXBlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJlZmZlY3QiLCJsb29wIiwic3BlZWQiLCJkcmFnZ2FibGUiLCJtb3VzZXdoZWVsIiwiZm9yY2VUb0F4aXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJkeW5hbWljQnVsbGV0cyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJteVRyYWluIiwidHJhaW5fcG9zIiwib2Zmc2V0IiwidHJhaW5faGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzY3JvbGwiLCJ1bml0IiwiY2FudmFzTGlzdCIsImluZm8iLCJjb2xvckxpc3QiLCJpbml0Iiwic2Vjb25kcyIsInQiLCJwdXNoIiwiY2FudmFzSW5kZXgiLCJjYW52YXMiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNvbnRleHRDYWNoZSIsImdldENvbnRleHQiLCJ1cGRhdGUiLCJkcmF3IiwiTWF0aCIsIlBJIiwiY29sb3IiLCJjb250ZXh0IiwiY2xlYXJSZWN0IiwiZHJhd1dhdmUiLCJhbHBoYSIsInpvb20iLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImRyYXdTaW5lIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCIsInhBeGlzIiwiZmxvb3IiLCJ5QXhpcyIsInNpbiIsIm1vdmVUbyIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwic3RhcnRTY3JvbGxZIiwidGFyZ2V0U2Nyb2xsWSIsImVhc2VPdXRDdWJpYyIsInBvdyIsInNjcm9sbEFuaW1hdGlvbiIsInByb2dyZXNzIiwibWluIiwiRGF0ZSIsIm5vdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsZW1lbnQiLCJ0YXJnZXRJZCIsImdldEF0dHJpYnV0ZSIsInRhcmdldEVsZW1lbnQiLCJkb2N1bWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsIm9mZnNldFRvcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxTQUFTLENBQUM7QUFDTkMsWUFBVSxFQUFFO0FBRE4sQ0FBRCxDQUFULEM7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUMsYUFBYSxHQUFH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bkIsS0FGRCxNQUVPO0FBQ0wsVUFBTVksYUFBYSxHQUFHckwsUUFBUSxDQUFDeUUsYUFBVCxDQUF1QjBHLFFBQXZCLENBQXRCLENBREssQ0FDa0Q7O0FBQ3ZELFVBQU1HLGNBQWMsR0FBR3RMLFFBQVEsQ0FBQ21DLElBQVQsQ0FBY29KLFlBQXJDLENBRkssQ0FFNkM7O0FBRWxELFVBQUlGLGFBQWEsQ0FBQ0csU0FBZCxHQUEwQnJLLE1BQU0sQ0FBQ21GLFdBQWpDLEdBQStDZ0YsY0FBbkQsRUFBbUU7QUFBQztBQUNsRWIscUJBQWEsR0FBR2EsY0FBYyxHQUFHbkssTUFBTSxDQUFDbUYsV0FBeEMsQ0FEaUUsQ0FDYjtBQUNyRCxPQUZELE1BRU87QUFDTG1FLHFCQUFhLEdBQUdZLGFBQWEsQ0FBQ0csU0FBOUIsQ0FESyxDQUNtQztBQUN6QztBQUNGOztBQUNEakIsYUFBUyxHQUFHUSxJQUFJLENBQUNDLEdBQUwsRUFBWixDQWhCdUMsQ0FnQmhCOztBQUN2QlIsZ0JBQVksR0FBR3JKLE1BQU0sQ0FBQzJDLE9BQXRCLENBakJ1QyxDQWlCVDs7QUFDOUI4RyxtQkFBZTtBQUNoQixHQW5CRDtBQW9CRCxDQXJCRCxFOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9fYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCJTcGxpdHRpbmcoe1xuICAgIHdoaXRlc3BhY2U6IHRydWVcbn0pIiwiY29uc3QgYW5pbWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgbXlDbGFzc2xpc3QgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICBteUNsYXNzbGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICBteUNsYXNzbGlzdC5hZGQoJ2FuaW1hdGUnKTtcbn07XG5cbmNvbnN0IGFuaW1hdGVSZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IG15Q2xhc3NsaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgbXlDbGFzc2xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XG59O1xuXG5cbmNvbnN0IGJ1YmJseUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtYnViYmx5XCIpO1xuY29uc3QgbXlMZW5ndGggPSBidWJibHlCdXR0b25zLmxlbmd0aDtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBteUxlbmd0aDsgaSsrKSB7XG4gICAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBhbmltYXRlQnV0dG9uLCBmYWxzZSk7XG4gICAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGFuaW1hdGVSZW1vdmUsIGZhbHNlKTtcbn1cblxuXG5cbi8vIGNvbnN0IGFuaW1hdGVCdXR0b24gPSBmdW5jdGlvbiAoZSkge1xuLy8gICAgIGNvbnN0IG15Q2xhc3NsaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdDtcblxuLy8gICAgIG15Q2xhc3NsaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuLy8gICAgIG15Q2xhc3NsaXN0LmFkZCgnYW5pbWF0ZScpO1xuXG4vLyAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIG15Q2xhc3NsaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuLy8gICAgIH0sIDcwMCk7XG4vLyB9O1xuXG5cblxuXG4iLCJjb25zdCBjb3VudCA9IDc7XG5sZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlY3RvcicpO1xubGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbmZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdG9yLmNsYXNzTmFtZSA9IFwic2VjdG9yXCI7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlY3Rvcik7XG5cbiAgbGV0IHJvdGF0ZUJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQmFjay5jbGFzc05hbWUgPSBcInJvdGF0ZVwiO1xuICBzZWN0b3IuYXBwZW5kQ2hpbGQocm90YXRlQmFjayk7XG5cbiAgbGV0IGZhbGxpbmdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWxsaW5nTGF5ZXIuY2xhc3NOYW1lID0gXCJmYWxsaW5nXCI7XG4gIHJvdGF0ZUJhY2suYXBwZW5kQ2hpbGQoZmFsbGluZ0xheWVyKTtcblxuICBsZXQgbGluZUhpdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lSGl0Ym94LmNsYXNzTmFtZSA9IFwibGluZS1ib3hcIjtcbiAgZmFsbGluZ0xheWVyLmFwcGVuZENoaWxkKGxpbmVIaXRib3gpO1xuXG4gIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gXCJsaW5lLWJveF9fbGluZSBjLWJhbGxcIjtcbiAgbGluZUhpdGJveC5hcHBlbmRDaGlsZChsaW5lKTtcbn1cblxucGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiIsIi8vIOOCueOCr+ODreODvOODq+OBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cbi8vIOODreODvOODieOBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcbn0pO1xuXG4vLyDjgqbjgqPjg7Pjg4njgqbluYXjgYzliIfjgormm7/jgo/jgaPjgZ/jgajjgY1cbmNvbnN0IG1vb25NaW5pU2l6ZSA9IDU3MDtcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgeCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdGxldCB5ID0gbW9vbk1pbmlTaXplO1xuXHRcdGlmICh4ID49IHkpIHtcblx0XHRcdCQoXCIjanMtaGFtYnVyZ2VyXCIpLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0XHRcdCQoXCIjanMtaGFtYnVyZ2VyXCIpLmFkZENsYXNzKFwiaXMtY2xvc2VcIik7XG5cdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcImlzLWNsb3NlXCIpO1xuXG5cdFx0XHRib2R5Rml4ZWROb25lKCk7Ly9ib2R544GuZml4ZWTjgpLlpJbjgZlcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0fVxuXHR9KTtcbn0pXG5cbi8vICoqXG4vLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg5zjgr/jg7PvvJrjgr/jg4Pjg4Egb3Ig44Kv44Oq44OD44KvXG4vLyAqKlxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWhhbWJ1cmdlcicpO1xuY29uc3QgaGFtYnVyZ2VyQ2xhc3MgPSBoYW1idXJnZXIuY2xhc3NMaXN0O1xuY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG15Qm9keUNsYXNzID0gbXlCb2R5LmNsYXNzTGlzdDtcbmxldCBmbGFnID0gZmFsc2U7XG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHRmbGFnID0gdHJ1ZTtcblx0aGFtYnVyZ2VyQ2xpY2soKTtcbn0pO1xuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdGlmIChmbGFnKSB7XG5cdFx0ZmxhZyA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGhhbWJ1cmdlckNsaWNrKCk7XG5cdH1cbn0pO1xuXG4vLyAqKlxuLy8g44OK44OT44Ky44O844K344On44Oz44Gu44Oq44K544OI44KS44Kv44Oq44OD44Kv44GX44Gf44KJaXMtb3BlbuOCkua2iOOBmVxuLy8gKipcbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1hcmtlclwiKTtcbm5hdkxpc3QuZm9yRWFjaCgoZWxtKSA9PiB7XG5cdGVsbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuXHRcdGZsYWcgPSB0cnVlO1xuXHRcdGhhbWJ1cmdlck9wZW5SZW1vdmUoKTtcblx0XHRib2R5Rml4ZWROb25lKCk7Ly9ib2R544GuZml4ZWTjgpLlpJbjgZlcblx0fSk7XG59KTtcblxubmF2TGlzdC5mb3JFYWNoKChlbG0pID0+IHtcblx0ZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGlmIChmbGFnKSB7XG5cdFx0XHRmbGFnID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhhbWJ1cmdlck9wZW5SZW1vdmUoKTtcblx0XHRcdGJvZHlGaXhlZE5vbmUoKTsvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuXHRcdH1cblx0fSk7XG59KTtcblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8g6Zai5pWwXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAqKlxuLy8gcC1oZWFkZXI644K544Kv44Ot44O844Or44GX44Gf44KJ5raI44GI44KLXG4vLyAqKlxuY29uc3QgbXlIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWhlYWRlclwiKTtcbmNvbnN0IGhlYWRlckNsYXNzID0gbXlIZWFkZXIuY2xhc3NMaXN0O1xuY29uc3QgaGVhZGVyRmFkZVBvc2l0aW9uID0gNTA7Ly/jgrnjgq/jg63jg7zjg6vjgZfjgabjg5rjg7zjgrjjg4jjg4Pjg5fjgYvjgonjgIfjgIfjgavpgZTjgZfjgZ/jgajjgY1cblxuY29uc3QgaGVhZGVyRmFkZSA9ICgpID0+IHtcblx0bGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRpZiAoc2Nyb2xsVG9wID49IGhlYWRlckZhZGVQb3NpdGlvbikge1xuXHRcdGhlYWRlckNsYXNzLmFkZCgnaXMtZmFkZScpO1xuXHR9IGVsc2Uge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnaXMtZmFkZScpO1xuXHR9O1xufTtcblxuLy8gKipcbi8vIHAtaGVhZGVyLWJhY2s644K544Kv44Ot44O844Or6YCU5Lit44Gn5Ye654++XG4vLyAqKlxuY29uc3QgbGF5b3V0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWwtaGVhZGVyJyk7XG5jb25zdCBsYXlvdXRIZWFkZXJDbGFzcyA9IGxheW91dEhlYWRlci5jbGFzc0xpc3Q7XG5cbmNvbnN0IGhlYWRlckJhY2tEb3duID0gKCkgPT4ge1xuXHRsZXQgbXlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtzXCIpO1xuXHRsZXQgcmVjdCA9IG15VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGxldCB0YXJnZXRUb3AgPSByZWN0LnRvcCArIHNjcm9sbFRvcDtcblxuXHRpZiAoc2Nyb2xsVG9wID49IHRhcmdldFRvcCkge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZShcIlVwTW92ZVwiLCAncC1oZWFkZXItLXRvcCcsIFwiaXMtZmFkZVwiKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRoZWFkZXJDbGFzcy5hZGQoJ0Rvd25Nb3ZlJywgJ3AtaGVhZGVyLS1iYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cdFx0bGF5b3V0SGVhZGVyQ2xhc3MuYWRkKCdiYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cblx0fSBlbHNlIHtcblx0XHRpZiAoaGVhZGVyQ2xhc3MuY29udGFpbnMoXCJEb3duTW92ZVwiKSkgey8v44GZ44Gn44Gr44Kv44Op44K55ZCN44GM44Gk44GE44Gm44GE44Gf44KJXG5cdFx0XHRsYXlvdXRIZWFkZXJDbGFzcy5yZW1vdmUoJ2JhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLmFkZCgnVXBNb3ZlJywgJ3AtaGVhZGVyLS10b3AnKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblx0XHR9XG5cdH1cbn07XG5cbi8vICoqXG4vLyBib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vICoqXG5jb25zdCBib2R5Rml4ZWROb25lID0gKCkgPT4ge1xuXHRteUJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuXHRteUJvZHkuc3R5bGUudG9wID0gXCJcIjtcblx0bXlCb2R5LnN0eWxlLnBhZGRpbmdUb3AgPSBcIlwiO1xufTtcblxuLy8gKipcbi8vIOODj+ODs+ODkOODvOOCrOODvOODnOOCv+ODs+OBruOCr+ODquODg+OCr1xuLy8gKipcbmNvbnN0IGhhbWJ1cmdlckNsaWNrID0gKCkgPT4ge1xuXHRsZXQgbXlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG5cdC8vaXMtY2xvc2XjgYzjgYLjgaPjgZ/jgolcblx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikpIHtcblx0XHQvL2lzLWNsb3Nl44KS5aSW44GZXG5cdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuXHRcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtY2xvc2UnKTtcblxuXHRcdC8vaXMtb3BlbuOCkuOBpOOBkeOCi1xuXHRcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtb3BlbicpO1xuXHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtb3BlbicpO1xuXHRcdG15Qm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcblx0XHRteUJvZHkuc3R5bGUudG9wID0gYC0ke215UG9zaXRpb259cHhgO1xuXHR9IGVsc2Uge1xuXHRcdC8vaXMtb3BlbuOBjOOBguOBo+OBn+OCiVxuXHRcdGlmIChoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHtcblx0XHRcdC8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruiomOaGtlxuXHRcdFx0Y29uc3Qgc2Nyb2xsWSA9IG15Qm9keS5zdHlsZS50b3A7XG5cblx0XHRcdC8vIGlzLW9wZW7jgpLlpJbjgZlcblx0XHRcdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuXHRcdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cblx0XHRcdC8vIGlzLWNsb3Nl44KS44Gk44GR44KLXG5cdFx0XHRoYW1idXJnZXJDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG5cdFx0XHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG5cblx0XHRcdC8vIGJvZHnjga5maXhlZOOCkuWkluOBmVxuXHRcdFx0Ym9keUZpeGVkTm9uZSgpO1xuXG5cdFx0XHQvLyDjgrnjgq/jg63jg7zjg6vkvY3nva7jga7kv53mjIFcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChzY3JvbGxZIHx8ICcwJykgKiAtMSk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyAqKlxuLy8gaXMtb3BlbuOCkuWkluOBmVxuLy8gKipcbmNvbnN0IGhhbWJ1cmdlck9wZW5SZW1vdmUgPSAoKSA9PiB7XG5cdGhhbWJ1cmdlckNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuXHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLW9wZW4nKTtcblx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1jbG9zZScpO1xuXHRteUJvZHlDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG59O1xuXG5cblxuXG4vLyAqKlxuLy8g44OP44Oz44OQ44O844Ks44O844Oc44K/44Oz77ya44Kv44Oq44OD44Kv44Kk44OZ44Oz44OIXG4vLyAqKlxuLy8gY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWhhbWJ1cmdlcicpO1xuLy8gY29uc3QgaGFtYnVyZ2VyQ2xhc3MgPSBoYW1idXJnZXIuY2xhc3NMaXN0O1xuLy8gY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQuYm9keTtcbi8vIGNvbnN0IG15Qm9keUNsYXNzID0gbXlCb2R5LmNsYXNzTGlzdDtcblxuXG4vLyBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyBcdGxldCBteVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbi8vIFx0Ly9pcy1jbG9zZeOBjOOBguOBo+OBn+OCiVxuLy8gXHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1jbG9zZVwiKSkge1xuLy8gXHRcdC8vaXMtY2xvc2XjgpLlpJbjgZlcbi8vIFx0XHRoYW1idXJnZXJDbGFzcy5yZW1vdmUoJ2lzLWNsb3NlJyk7XG4vLyBcdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuXG4vLyBcdFx0Ly9pcy1vcGVu44KS44Gk44GR44KLXG4vLyBcdFx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1vcGVuJyk7XG4vLyBcdFx0bXlCb2R5Q2xhc3MuYWRkKCdpcy1vcGVuJyk7XG4vLyBcdFx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuLy8gXHRcdG15Qm9keS5zdHlsZS50b3AgPSBgLSR7bXlQb3NpdGlvbn1weGA7XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0Ly9pcy1vcGVu44GM44GC44Gj44Gf44KJXG4vLyBcdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkge1xuLy8gXHRcdFx0Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu6KiY5oa2XG4vLyBcdFx0XHRjb25zdCBzY3JvbGxZID0gbXlCb2R5LnN0eWxlLnRvcDtcblxuLy8gXHRcdFx0Ly8gaXMtb3BlbuOCkuWkluOBmVxuLy8gXHRcdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG4vLyBcdFx0XHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLW9wZW4nKTtcblxuLy8gXHRcdFx0Ly8gaXMtY2xvc2XjgpLjgaTjgZHjgotcbi8vIFx0XHRcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcbi8vIFx0XHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcblxuLy8gXHRcdFx0Ly8gYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyBcdFx0XHRib2R5Rml4ZWROb25lKCk7XG5cbi8vIFx0XHRcdC8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruS/neaMgVxuLy8gXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHNjcm9sbFkgfHwgJzAnKSAqIC0xKTtcbi8vIFx0XHR9XG4vLyBcdH1cbi8vIH0pO1xuXG5cbi8vICoqXG4vLyBpcy1vcGVu44KS5raI44GZXG4vLyAqKlxuLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44Oq44K544OI44KS44Kv44Oq44OD44Kv44GX44Gf44Go44GNXG4vLyBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1tYXJrZXJcIik7XG4vLyBuYXZMaXN0LmZvckVhY2goKGVsbSkgPT4ge1xuLy8gXHRlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyBcdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG4vLyBcdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG4vLyBcdFx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1jbG9zZScpO1xuLy8gXHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcblxuLy8gXHRcdC8vYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyBcdFx0Ym9keUZpeGVkTm9uZSgpO1xuLy8gXHR9KTtcbi8vIH0pOyIsIi8vIG1vdXNlb3ZlcuOBl+OBn+OCiW1vdmVJbmRlY2F0b3LlkbzjgbPlh7rjgZdcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbWFya2VyJyk7XG5saXN0LmZvckVhY2gobGluayA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICBtYXJrZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgbW92ZUluZGljYXRvcihlLnRhcmdldCk7XG4gIH0pXG59KVxuXG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWN0aXZlTGluaykpO1xubGlzdC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVBY3RpdmUpKTtcblxuLy8g44Kv44Oq44OD44Kv44GX44Gf44KJ6YCP5piO44Gr44GZ44KLXG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAwO1xufSkpO1xuXG5cblxuLy8g6Zai5pWwXG5jb25zdCBtYXJrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFya2VyJyk7XG5mdW5jdGlvbiBtb3ZlSW5kaWNhdG9yKGUpIHtcbiAgbWFya2VyLnN0eWxlLmxlZnQgPSBlLm9mZnNldExlZnQgKyAncHgnO1xuICBtYXJrZXIuc3R5bGUud2lkdGggPSBlLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgY29uc29sZS5sb2coZS5vZmZzZXRXaWR0aCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2ZUxpbmsoKSB7XG4gIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXJrZXItYWN0aXZlJykpO1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoJ21hcmtlci1hY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKCkge1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWFya2VyLWFjdGl2ZScpKTtcbn0iLCIvLyDjgrnjgq/jg63jg7zjg6vmmYLjgavjg5vjg5Djg7zjgpLnhKHlirnjgavjgZnjgotcbmxldCBteUJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICB0aW1lcjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgaWYgKCFteUJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlLWhvdmVyJykpIHtcbiAgICBteUJvZHkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1ob3ZlcicpXG4gIH1cblxuICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIG15Qm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlLWhvdmVyJylcbiAgfSwgNTAwKTtcbn0sIGZhbHNlKTtcblxuXG4vLyBDU1PjgavmrKHjga7jgrPjg7zjg4njgpLov73liqDjgZnjgotcbi8vIC5kaXNhYmxlLWhvdmVyIHtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9IiwiLy8gKiogcGFydGljbGVzLmpz44KS5L2/44GGICoqXG5jb25zdCBteVBhcnRpY2xlSUQgPSBcImpzLW1pbGt5LXdheS1wYXJ0aWNsZVwiO1xuY29uc3QgcGFydGljbGVfc2hhcGUgPSBcInN0YXJcIjsgLy/jgrfjgqfjgqTjg5fjga7lvaLvvIhjaXJjbGU65Li444CBZWRnZTrlm5vop5LjgIF0cmlhbmdsZTrkuInop5LjgIFwb2x5Z29uOuWkmuinkuW9ouOAgXN0YXI65pif5Z6L44CBaW1hZ2U655S75YOP77yJXG5jb25zdCBudW1PZlN0YXJzID0gNDAwOyAvL+aYn+OBruaVsFxuY29uc3QgY29sb3JPZlN0YXJzID0gJyNmZmZmNTUnOyAvL+aYn+OBruiJslxuY29uc3Qgb3BhY2l0eU9mU3RhcnMgPSAwLjQ7IC8v5pif44Gu6YCP5piO5bqmXG5jb25zdCBzaXplT2ZTdGFycyA9IDM7IC8v5pif44Gu5aSn44GN44GVXG5jb25zdCBtb3ZlX2RpcmVjdGlvbiA9IFwicmlnaHRcIjsgLy/mtYHjgozjga7lkJHjgY0obm9uZeOAgXRvcOOAgXRvcC1yaWdodOOAgXJpZ2h044CBYm90dG9tLXJpZ2h044CBYm90dG9t44CBYm90dG9tLWxlZnTjgIFsZWZ044CBdG9wLWxlZnTjgojjgorpgbjmip4pXG5jb25zdCBtb3ZlX3NwZWVkID0gMTsgIC8v44K344Kn44Kk44OX44Gu5YuV44GP44K544OU44O844OJXG5cbnBhcnRpY2xlc0pTKG15UGFydGljbGVJRCwge1xuICBcInBhcnRpY2xlc1wiOiB7XG4gICAgXCJudW1iZXJcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBudW1PZlN0YXJzLFxuICAgICAgXCJkZW5zaXR5XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICBcInZhbHVlXCI6IGNvbG9yT2ZTdGFycyxcbiAgICB9LFxuICAgIFwic2hhcGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IHBhcnRpY2xlX3NoYXBlLFxuICAgICAgXCJzdHJva2VcIjogeyAvL+Wklue3mlxuICAgICAgICBcIndpZHRoXCI6IDAsXG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmXCJcbiAgICAgIH0sXG4gICAgICAvLyBcInBvbHlnb25cIjogeyAvL3R5cGXjgpJwb2x5Z29u44Gr44GX44Gf44Go44GN44Gu6Kit5a6aXG4gICAgICAvLyAgIFwibmJfc2lkZXNcIjogNVxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwiaW1hZ2VcIjogeyAvL3R5cGXjgpJpbWFnZeOBq+OBl+OBn+OBqOOBjeOBruioreWumlxuICAgICAgLy8gICBcInNyY1wiOiBcIlwiLFxuICAgICAgLy8gICBcIndpZHRoXCI6IDEwMCxcbiAgICAgIC8vICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICAvLyB9XG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBvcGFjaXR5T2ZTdGFycyxcbiAgICAgIFwicmFuZG9tXCI6IHRydWUsXG4gICAgICBcImFuaW1cIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLCAvL+OCt+OCp+OCpOODl+OBrumAj+aYjuW6puOCkuOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgICBcInNwZWVkXCI6IDEsXG4gICAgICAgIFwib3BhY2l0eV9taW5cIjogMC4yLCAvL+mAj+aYjuW6puOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2l6ZVwiOiB7XG4gICAgICBcInZhbHVlXCI6IHNpemVPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSwgLy/jgrfjgqfjgqTjg5fjga7lpKfjgY3jgZXjgpLjg6njg7Pjg4Djg6DjgavjgZnjgotcbiAgICAgIFwiYW5pbVwiOiB7IC8v44K344Kn44Kk44OX44Gu5aSn44GN44GV44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwic3BlZWRcIjogMSxcbiAgICAgICAgXCJzaXplX21pblwiOiAwLjIsIC8v5aSn44GN44GV44Gu5pyA5bCP5YCkXG4gICAgICAgIFwic3luY1wiOiBmYWxzZSAvL+WFqOOBpuOBruOCt+OCp+OCpOODl+OCkuWQjOaZguOBq+OCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICBcImVuYWJsZVwiOiBmYWxzZSwvLyDmmJ/jgajmmJ/jgpLnt5rjgafntZDjgbZcbiAgICAgIC8vIFwiZGlzdGFuY2VcIjogNTAwLFxuICAgICAgLy8gXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIC8vIFwib3BhY2l0eVwiOiAwLjQsXG4gICAgICAvLyBcIndpZHRoXCI6IDJcbiAgICB9LFxuICAgIFwibW92ZVwiOiB7XG4gICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgXCJzcGVlZFwiOiBtb3ZlX3NwZWVkLFxuICAgICAgXCJkaXJlY3Rpb25cIjogbW92ZV9kaXJlY3Rpb24sXG4gICAgICBcInJhbmRvbVwiOiBmYWxzZSxcbiAgICAgIFwic3RyYWlnaHRcIjogdHJ1ZSxcbiAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIiwgLy/jgqjjg6rjgqLlpJbjgavlh7rjgZ/jgrfjgqfjgqTjg5fjga7li5XjgY0ob3V044CBYm91bmNl44KI44KK6YG45oqeKVxuICAgICAgXCJib3VuY2VcIjogZmFsc2UsXG4gICAgICBcImF0dHJhY3RcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJyb3RhdGVYXCI6IDEwMDAsXG4gICAgICAgIFwicm90YXRlWVwiOiAxMDAwXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcImludGVyYWN0aXZpdHlcIjoge1xuICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXG4gICAgXCJldmVudHNcIjoge1xuICAgICAgXCJvbmhvdmVyXCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJtb2RlXCI6IFwiYnViYmxlXCIgLy/jg57jgqbjgrnjgqrjg7zjg5Djg7zmmYLjgavnmbrli5XjgZnjgovli5XjgY0o5LiL6KiYbW9kZXPlhoXjga5ncmFi44CBcmVwdWxzZeOAgWJ1YmJsZeOCiOOCiumBuOaKnilcbiAgICAgIH0sXG4gICAgICAvLyBcIm9uY2xpY2tcIjoge1xuICAgICAgLy8gICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgLy8gICBcIm1vZGVcIjogXCJidWJibGVcIiAvL+OCr+ODquODg+OCr+aZguOBq+eZuuWLleOBmeOCi+WLleOBjSjkuIvoqJhtb2Rlc+WGheOBrmdyYWLjgIFyZXB1bHNl44CBYnViYmxl44CBcHVzaOOAgXJlbW92ZeOCiOOCiumBuOaKnilcbiAgICAgIC8vIH0sXG4gICAgICBcInJlc2l6ZVwiOiB0cnVlIC8vY2FudmFz44Gu44K144Kk44K65aSJ5pu044Gr44KP44Gb44Gm5ouh5aSn57iu5bCP44GZ44KLXG4gICAgfSxcbiAgICBcIm1vZGVzXCI6IHtcbiAgICAgIC8vIFwiZ3JhYlwiOiB7IC8v44Kr44O844K944Or44Go44K344Kn44Kk44OX44Gu6ZaT44Gr57ea44GM6KGo56S644GV44KM44KLXG4gICAgICAvLyAgIFwiZGlzdGFuY2VcIjogNDAwLCAvL+OCq+ODvOOCveODq+OBi+OCieOBruWPjeW/nOi3nembolxuICAgICAgLy8gICBcImxpbmVfbGlua2VkXCI6IHtcbiAgICAgIC8vICAgICBcIm9wYWNpdHlcIjogMC41XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sXG4gICAgICBcImJ1YmJsZVwiOiB7IC8v44K344Kn44Kk44OX44GM6Iao44KJ44KAXG4gICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxuICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgXCJkdXJhdGlvblwiOiAwLjMsIC8v6Iao44KJ44KA44K344Kn44Kk44OX44Gu5oyB57aa5pmC6ZaTKG9uY2xpY2vmmYLjga7jgb8pXG4gICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICBcInNwZWVkXCI6IDMgLy/ohqjjgonjgoDjgrfjgqfjgqTjg5fjga7pgJ/luqYob25jbGlja+aZguOBruOBvylcbiAgICAgIH0sXG4gICAgICAvLyBcInJlcHVsc2VcIjogeyAvL+OCt+OCp+OCpOODl+OBjOOCq+ODvOOCveODq+OBi+OCiemAg+OBkuOCi1xuICAgICAgLy8gICBcImRpc3RhbmNlXCI6IDIwMCwgLy/jgqvjg7zjgr3jg6vjgYvjgonjga7lj43lv5zot53pm6JcbiAgICAgIC8vICAgXCJkdXJhdGlvblwiOiAwLjRcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcInB1c2hcIjogeyAvL+OCt+OCp+OCpOODl+OBjOWil+OBiOOCi1xuICAgICAgLy8gICBcInBhcnRpY2xlc19uYlwiOiA0IC8v5aKX44GI44KL44K344Kn44Kk44OX44Gu5pWwXG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJyZW1vdmVcIjoge1xuICAgICAgLy8gICBcInBhcnRpY2xlc19uYlwiOiAyIC8v5rib44KL44K344Kn44Kk44OX44Gu5pWwXG4gICAgICAvLyB9XG4gICAgfVxuICB9LFxuICBcInJldGluYV9kZXRlY3RcIjogdHJ1ZSAvL1JldGluYSBEaXNwbGF544Gr5a++5b+c44GZ44KLXG59KTtcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuXG5cblxuXG5cblxuLy8gKiogY2FudmFz5L2/44GG5aC05ZCIICoqXG4vLyBmdW5jdGlvbiByYW5kb20obG93LCBoaWdoKSB7XG4vLyAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpICsgbG93O1xuLy8gfVxuXG4vLyBjbGFzcyBWaXN1YWwge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMtbWlsa3ktd2F5Jyk7XG4vLyAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgICB0aGlzLmNhbnZhc1dpZHRoID0gMDtcbi8vICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IDA7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZUxlbmd0aCA9IDUwMDtcbi8vICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuLy8gICAgIHRoaXMucGFydGljbGVNYXhSYWRpdXMgPSAyO1xuXG4vLyAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4vLyAgICAgdGhpcy5yZW5kZXIoKTtcbi8vICAgfVxuXG4vLyAgIGluaXRpYWxpemUoKSB7XG4vLyAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVMZW5ndGg7IGkrKykge1xuLy8gICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaCh0aGlzLmNyZWF0ZVBhcnRpY2xlKGkpKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICByZXNpemVDYW52YXMoKSB7XG4vLyAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4vLyAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAyMDA7XG4vLyAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4vLyAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbi8vICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIHRoaXMuY29udGV4dC5zY2FsZSh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgd2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuLy8gICB9XG5cbi8vICAgY3JlYXRlUGFydGljbGUoaWQsIGlzUmVjcmVhdGUpIHtcbi8vICAgICBjb25zdCByYWRpdXMgPSByYW5kb20oMC41LCB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzKTtcbi8vICAgICBjb25zdCB4ID0gaXNSZWNyZWF0ZSA/IC1yYWRpdXMgLSByYW5kb20oMCwgdGhpcy5jYW52YXNXaWR0aCkgOiByYW5kb20oMCwgdGhpcy5jYW52YXNXaWR0aCk7XG4vLyAgICAgbGV0IHkgPSByYW5kb20odGhpcy5jYW52YXNIZWlnaHQgLyAyIC0gMTUwLCB0aGlzLmNhbnZhc0hlaWdodCAvIDIgKyAxNTApO1xuLy8gICAgIHkgKz0gcmFuZG9tKC0xMDAsIDEwMCk7XG4vLyAgICAgY29uc3QgYWxwaGEgPSByYW5kb20oMC4wNSwgMSk7XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgaWQ6IGlkLFxuLy8gICAgICAgeDogeCxcbi8vICAgICAgIHk6IHksXG4vLyAgICAgICBzdGFydFk6IHksXG4vLyAgICAgICByYWRpdXM6IHJhZGl1cyxcbi8vICAgICAgIGRlZmF1bHRSYWRpdXM6IHJhZGl1cyxcbi8vICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICBlbmRBbmdsZTogTWF0aC5QSSAqIDIsXG4vLyAgICAgICBhbHBoYTogYWxwaGEsXG4vLyAgICAgICAvLyBjb2xvcjogeyByOiByYW5kb20oMjU1LCAwKSwgZzogcmFuZG9tKDI1NSwgMCksIGI6IDAgfSxcbi8vICAgICAgIHNwZWVkOiBhbHBoYSArIDEsIC8v44Oe44Kk44OK44K544Gr44GZ44KL44Go5Y+z44GL44KJ5bemXG4vLyAgICAgICBhbXBsaXR1ZGU6IHJhbmRvbSg1MCwgMjAwKSxcbi8vICAgICAgIGlzQnVyc3Q6IGZhbHNlXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGRyYXdQYXJ0aWNsZXMoKSB7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4vLyAgICAgICAvLyDkvY3nva7mg4XloLHmm7TmlrBcbi8vICAgICAgIHRoaXMubW92ZVBhcnRpY2xlKHBhcnRpY2xlKTtcblxuLy8gICAgICAgLy8gcGFydGljbGXmj4/nlLtcbi8vICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbi8vICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsMjU1LDAsIC41KWA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSknO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFggPSAwO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSAwO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSAzMDtcblxuLy8gICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2JhKCR7cGFydGljbGUuY29sb3Iucn0sICR7cGFydGljbGUuY29sb3IuZ30sICR7cGFydGljbGUuY29sb3IuYn0sICR7cGFydGljbGUuYWxwaGF9KWA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBhcnRpY2xlLngsIHBhcnRpY2xlLnksIHBhcnRpY2xlLnJhZGl1cywgcGFydGljbGUuc3RhcnRBbmdsZSwgcGFydGljbGUuZW5kQW5nbGUpO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIG1vdmVQYXJ0aWNsZShwYXJ0aWNsZSkge1xuLy8gICAgIHBhcnRpY2xlLnggKz0gcGFydGljbGUuc3BlZWQ7XG4vLyAgICAgcGFydGljbGUueSA9IHBhcnRpY2xlLnN0YXJ0WSArIHBhcnRpY2xlLmFtcGxpdHVkZSAqIE1hdGguc2luKCgocGFydGljbGUueCAvIDUpICogTWF0aC5QSSkgLyAxODApO1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIC8vIGNhbnZhc+WIneacn+WMllxuLy8gICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCArIHRoaXMucGFydGljbGVNYXhSYWRpdXMgKiAyLCB0aGlzLmNhbnZhc0hlaWdodCk7XG5cbi8vICAgICAvLyBwYXJ0aWNsZeOCkuaPj+eUu1xuLy8gICAgIHRoaXMuZHJhd1BhcnRpY2xlcygpO1xuXG4vLyAgICAgLy8g55S76Z2i44GL44KJ5raI44GI44Gf44KJ5paw44GX44GEcGFydGljbGXjgavlt67jgZfmm7/jgYhcbi8vICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbi8vICAgICAgIGlmIChwYXJ0aWNsZS54IC0gcGFydGljbGUucmFkaXVzID49IHRoaXMuY2FudmFzV2lkdGgpIHtcbi8vICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbcGFydGljbGUuaWRdID0gdGhpcy5jcmVhdGVQYXJ0aWNsZShwYXJ0aWNsZS5pZCwgdHJ1ZSk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG5cbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4vLyAgIH1cbi8vIH1cbi8vIG5ldyBWaXN1YWwoKTtcblxuXG5cblxuLy8gZGl2MjAw55Sf5oiQXG4vLyBjb25zdCBjb3VudCA9IDIwMDtcbi8vIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWlsa3ktd2F5Jyk7XG4vLyBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vZnJhZ21lbnTkvZzmiJBcblxuLy8gZm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuLy8gICBsZXQgbWlsa2V5V2F5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleVdheS5jbGFzc05hbWUgPSBcInAtbWlsa3ktd2F5XCI7XG5cbi8vICAgbGV0IG1pbGtleU1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5TW92ZS5jbGFzc05hbWUgPSBcIm1pbGt5LW1vdmVcIjtcblxuLy8gICBsZXQgbWlsa2V5U3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlTdGFyLmNsYXNzTmFtZSA9IFwibWlsa3ktc3RhclwiO1xuXG4vLyAgIG1pbGtleU1vdmUuYXBwZW5kQ2hpbGQobWlsa2V5U3Rhcik7XG4vLyAgIG1pbGtleVdheS5hcHBlbmRDaGlsZChtaWxrZXlNb3ZlKTtcbi8vICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWlsa2V5V2F5KTtcbi8vIH1cblxuLy8gcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTsiLCIvLyBkYXRh5bGe5oCnXG4vLyBkYXRhLXNhX21hcmdpbu+8muihqOekuuOCv+OCpOODn+ODs+OCsOOCkuS9jee9ruOBp+OBmuOCieOBmVxuLy8gZGF0YS1zYV90cmlnZ2Vy77ya6KGo56S644K/44Kk44Of44Oz44Kw44Gu5Z+65rqW6KaB57Sg44KS5oyH5a6aXG4vLyBkYXRhLXNhX2RlbGF577ya6KGo56S644K/44Kk44Of44Oz44Kw44KS5pmC6ZaT44Gn44Ga44KJ44GZXG5cblxubGV0IEFuaW1DbGFzcyA9ICdqcy1zY3JvbGwtc2hvdyc7XG5sZXQgc2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzID0gJ3Nob3cnO1xubGV0IHRyaWdnZXJNYXJnaW5EZWZhdWx0ID0gMjAwO1xuXG5sZXQgc2Nyb2xsQW5pbUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQW5pbUNsYXNzKTtcbmxldCBzY3JvbGxBbmltYXRpb25GdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsQW5pbUVsbS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdHJpZ2dlck1hcmdpbiA9IHRyaWdnZXJNYXJnaW5EZWZhdWx0O1xuICAgICAgICBsZXQgZWxtID0gc2Nyb2xsQW5pbUVsbVtpXTtcbiAgICAgICAgbGV0IHNob3dQb3MgPSAwO1xuXG4gICAgICAgIC8vIG1hcmdpbuOBp+OBmuOCieOBmeWgtOWQiFxuICAgICAgICBpZiAoZWxtLmRhdGFzZXQuanNfZGF0YW1hcmdpbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0cmlnZ2VyTWFyZ2luID0gcGFyc2VJbnQoZWxtLmRhdGFzZXQuanNfbWFyZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyaWdnZXLjgYzjgYLjgovloLTlkIhcbiAgICAgICAgaWYgKGVsbS5kYXRhc2V0LmpzX3RyaWdnZXIpIHtcbiAgICAgICAgICAgIHNob3dQb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsbS5kYXRhc2V0LmpzX3RyaWdnZXIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRyaWdnZXJNYXJnaW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93UG9zID0gZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRyaWdnZXJNYXJnaW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmmYLplpPjgafjgZrjgonjgZnloLTlkIhcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHNob3dQb3MpIHtcbiAgICAgICAgICAgIGxldCBkZWxheSA9IChlbG0uZGF0YXNldC5qc19kZWxheSkgPyBlbG0uZGF0YXNldC5qc19kZWxheSA6IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbEFuaW1FbG1baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgIH0uYmluZChudWxsLCBpKSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBbmltYXRpb25GdW5jKTtcbiIsImxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuanMtc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCwvL+OCueODqeOCpOODieOBrumWk+OBrui3nembolxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGxvb3A6IHRydWUsLy/mnIDlvozjgavpgZTjgZfjgZ/jgonlhYjpoK3jgavmiLvjgotcbiAgICBzcGVlZDogMzAwLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG5cbiAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgIGZvcmNlVG9BeGlzOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsLy/jg5rjg7zjgrjjg43jg7zjgrfjg6fjg7Pjga7opoHntKBcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLC8v44Kv44Oq44OD44Kv44Gr5Y+N5b+c44GV44Gb44KLXG4gICAgICAgIGR5bmFtaWNCdWxsZXRzOiBmYWxzZSwvL+ODmuODvOOCuOODjeODvOOCt+ODp+ODs+OBq+W8t+W8seOBjOOBpOOBj1xuICAgIH0sXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH1cbn0pOyIsIi8vIOmKgOays+mJhOmBk+OCkuWbuuWumuOBmeOCi1xuY29uc3QgbXlUcmFpbiA9IGpRdWVyeShcIi5qcy10cmFpblwiKTtcbmNvbnN0IHRyYWluX3BvcyA9IG15VHJhaW4ub2Zmc2V0KCkudG9wO1xuY29uc3QgdHJhaW5faGVpZ2h0ID0gbXlUcmFpbi5vdXRlckhlaWdodCgpO1xuXG5cbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IHRyYWluX3BvcyArIDIyKSB7XG4gICAgICAgICAgICBteVRyYWluLmFkZENsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBteVRyYWluLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIi8vIEhUTUzjga48Y2FudmFzPuOCv+OCsOOBq0phdmFTY3JpcHTjgpLkvb/jgYTms6LvvIjloZfjgorvvInjgpLmj4/nlLvjgZnjgotcblxubGV0IHVuaXQgPSAxMDAsXG4gICAgY2FudmFzTGlzdCwgLy8g44Kt44Oj44Oz44OQ44K544Gu6YWN5YiXXG4gICAgaW5mbyA9IHt9LCAvLyDlhajjgq3jg6Pjg7Pjg5DjgrnlhbHpgJrjga7mj4/nlLvmg4XloLFcbiAgICBjb2xvckxpc3Q7IC8vIOWQhOOCreODo+ODs+ODkOOCueOBruiJsuaDheWgsVxuXG4vKipcbiAqIEluaXQgZnVuY3Rpb24uXG4gKiBcbiAqIEluaXRpYWxpemUgdmFyaWFibGVzIGFuZCBiZWdpbiB0aGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGluZm8uc2Vjb25kcyA9IDA7XG4gICAgaW5mby50ID0gMDtcbiAgICBjYW52YXNMaXN0ID0gW107XG4gICAgY29sb3JMaXN0ID0gW107XG4gICAgLy8gY2FudmFzMeWAi+OCgeOBruiJsuaMh+WumlxuICAgIGNhbnZhc0xpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhdmVDYW52YXNcIikpO1xuICAgIGNvbG9yTGlzdC5wdXNoKFsnI2ZmYmVmNicsICcjZmZmNWJlJywgJyNiNmY3ZmYnXSk7Ly/lt6bjgYzkuIDnlarkuIvihpLkuIrjga7ms6LpoIZcbiAgICAvLyDlkITjgq3jg6Pjg7Pjg5Djgrnjga7liJ3mnJ/ljJZcbiAgICBmb3IodmFyIGNhbnZhc0luZGV4IGluIGNhbnZhc0xpc3QpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNhbnZhc0xpc3RbY2FudmFzSW5kZXhdO1xuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7IC8vQ2FudmFz44Gud2lkdGjjgpLjgqbjgqPjg7Pjg4njgqbjga7luYXjgavlkIjjgo/jgZvjgotcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDQ1MDsvL+azouOBrumrmOOBlVxuICAgICAgICBjYW52YXMuY29udGV4dENhY2hlID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gICAgLy8g5YWx6YCa44Gu5pu05paw5Yem55CG5ZG844Gz5Ye644GXXG4gICAgdXBkYXRlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBmb3IobGV0IGNhbnZhc0luZGV4IGluIGNhbnZhc0xpc3QpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNhbnZhc0xpc3RbY2FudmFzSW5kZXhdO1xuICAgICAgICAvLyDlkITjgq3jg6Pjg7Pjg5Djgrnjga7mj4/nlLtcbiAgICAgICAgZHJhdyhjYW52YXMsIGNvbG9yTGlzdFtjYW52YXNJbmRleF0pO1xuICAgIH1cbiAgICAvLyDlhbHpgJrjga7mj4/nlLvmg4XloLHjga7mm7TmlrBcbiAgICBpbmZvLnNlY29uZHMgPSBpbmZvLnNlY29uZHMgKyAuMDE0O1xuICAgIGluZm8udCA9IGluZm8uc2Vjb25kcypNYXRoLlBJO1xuICAgIC8vIOiHqui6q+OBruWGjei1t+WRvOOBs+WHuuOBl1xuICAgIHNldFRpbWVvdXQodXBkYXRlLCAzNSk7XG59XG5cbi8qKlxuICogRHJhdyBhbmltYXRpb24gZnVuY3Rpb24uXG4gKiBcbiAqIFRoaXMgZnVuY3Rpb24gZHJhd3Mgb25lIGZyYW1lIG9mIHRoZSBhbmltYXRpb24sIHdhaXRzIDIwbXMsIGFuZCB0aGVuIGNhbGxzXG4gKiBpdHNlbGYgYWdhaW4uXG4gKi9cbmZ1bmN0aW9uIGRyYXcoY2FudmFzLCBjb2xvcikge1xuICAgIC8vIOWvvuixoeOBrmNhbnZhc+OBruOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmNvbnRleHRDYWNoZTtcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7mj4/nlLvjgpLjgq/jg6rjgqJcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy/ms6Ljga7ph43jgarjgorjgpLmj4/nlLsgZHJhd1dhdmUoY2FudmFzLCBjb2xvclvmlbDlrZfvvIjms6Ljga7mlbDjgpIw44GL44KJ5pWw44GI44Gm5oyH5a6a77yJXSwg6YCP6YGOLCDms6Ljga7luYXjga56b29tLOazouOBrumWi+Wni+S9jee9ruOBrumBheOCjCApXG4gICAgZHJhd1dhdmUoY2FudmFzLCBjb2xvclswXSwgMSwgMywgMCk7Ly8wLjXih5LpgI/pgY7lhbflkIg1MCXjgIEz4oeS5pWw5a2X44GM5aSn44GN44GE44G744Gp5rOi44GM44Gq44Gg44KJ44GLXG4gICAgZHJhd1dhdmUoY2FudmFzLCBjb2xvclsxXSwgMSwgMiwgMjUwKTtcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzJdLCAxLCAyLjUsIDEwMCk7XG59XG5cbi8qKlxuKiDms6LjgpLmj4/nlLtcbiogZHJhd1dhdmUo6ImyLCDkuI3pgI/mmI7luqYsIOazouOBruW5heOBrnpvb20sIOazouOBrumWi+Wni+S9jee9ruOBrumBheOCjClcbiovXG5mdW5jdGlvbiBkcmF3V2F2ZShjYW52YXMsIGNvbG9yLCBhbHBoYSwgem9vbSwgZGVsYXkpIHtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0Q2FjaGU7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjsvL+Whl+OCiuOBruiJslxuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyAvL+ODkeOCueOBrumWi+Wni1xuICAgIGRyYXdTaW5lKGNhbnZhcywgaW5mby50IC8gMC41LCB6b29tLCBkZWxheSk7XG4gICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICsgMTAsIGNhbnZhcy5oZWlnaHQpOyAvL+ODkeOCueOCkkNhbnZhc+OBruWPs+S4i+OBuFxuICAgIGNvbnRleHQubGluZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyAvL+ODkeOCueOCkkNhbnZhc+OBruW3puS4i+OBuFxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCkgLy/jg5HjgrnjgpLplonjgZjjgotcbiAgICBjb250ZXh0LmZpbGwoKTsgLy/ms6LjgpLloZfjgorjgaTjgbbjgZlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBkcmF3IHNpbmVcbiAqIFxuICogVGhlIHNpbmUgY3VydmUgaXMgZHJhd24gaW4gMTBweCBzZWdtZW50cyBzdGFydGluZyBhdCB0aGUgb3JpZ2luLiBcbiAqIGRyYXdTaW5lKOaZgumWkywg5rOi44Gu5bmF44Guem9vbSwg5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMKVxuICovXG5mdW5jdGlvbiBkcmF3U2luZShjYW52YXMsIHQsIHpvb20sIGRlbGF5KSB7XG4gICAgbGV0IHhBeGlzID0gTWF0aC5mbG9vcihjYW52YXMuaGVpZ2h0LzIpO1xuICAgIGxldCB5QXhpcyA9IDA7XG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuY29udGV4dENhY2hlO1xuICAgIC8vIFNldCB0aGUgaW5pdGlhbCB4IGFuZCB5LCBzdGFydGluZyBhdCAwLDAgYW5kIHRyYW5zbGF0aW5nIHRvIHRoZSBvcmlnaW4gb25cbiAgICAvLyB0aGUgY2FudmFzLlxuICAgIGxldCB4ID0gdDsgLy/mmYLplpPjgpLmqKrjga7kvY3nva7jgajjgZnjgotcbiAgICBsZXQgeSA9IE1hdGguc2luKHgpL3pvb207XG4gICAgY29udGV4dC5tb3ZlVG8oeUF4aXMsIHVuaXQqeSt4QXhpcyk7IC8v44K544K/44O844OI5L2N572u44Gr44OR44K544KS572u44GPXG5cbiAgICAvLyBMb29wIHRvIGRyYXcgc2VnbWVudHMgKOaoquW5heOBruWIhuOAgeazouOCkuaPj+eUuylcbiAgICBmb3IgKGkgPSB5QXhpczsgaSA8PSBjYW52YXMud2lkdGggKyAxMDsgaSArPSAxMCkge1xuICAgICAgICB4ID0gdCsoLXlBeGlzK2kpL3VuaXQvem9vbTtcbiAgICAgICAgeSA9IE1hdGguc2luKHggLSBkZWxheSkvMztcbiAgICAgICAgY29udGV4dC5saW5lVG8oaSwgdW5pdCp5K3hBeGlzKTtcbiAgICB9XG59XG5cbmluaXQoKTtcbiIsImNvbnN0IGR1cmF0aW9uID0gMTAwMDtcbmxldCBzdGFydFRpbWU7Ly8g44Ki44OL44Oh44O844K344On44Oz44Gu6ZaL5aeL5pmC6ZaT44KS5qC857SN44GZ44KL5aSJ5pWwXG5sZXQgc3RhcnRTY3JvbGxZOy8vIOOCouODi+ODoeODvOOCt+ODp+ODs+OBrumWi+Wni+aZguOBruOCueOCr+ODreODvOODq+S9jee9ruOCkuagvOe0jeOBmeOCi+WkieaVsFxubGV0IHRhcmdldFNjcm9sbFk7Ly8g44K/44O844Ky44OD44OI44Gu44K544Kv44Ot44O844Or5L2N572u44KS5qC857SN44GZ44KL5aSJ5pWwXG5cbi8qKlxuICog44Kk44O844K444Oz44Kw6Zai5pWwXG4gKiBAcGFyYW0geFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgZWFzZU91dEN1YmljID0gKHgpID0+IHtcbiAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0geCwgMyk7XG59O1xuXG4vKipcbiAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OBruWQhOODleODrOODvOODoOOBp+OBruWHpueQhlxuICovXG5jb25zdCBzY3JvbGxBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oMSwgKERhdGUubm93KCkgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pOy8vIOePvuWcqOaZgumWk+OBrue2mee2muaZgumWk+OBq+WvvuOBmeOCi+mAsuaNl+W6puOCkueul+WHulxuICBjb25zdCBzY3JvbGxZID1cbiAgICBzdGFydFNjcm9sbFkgK1xuICAgICh0YXJnZXRTY3JvbGxZIC0gc3RhcnRTY3JvbGxZKSAqIGVhc2VPdXRDdWJpYyhwcm9ncmVzcyk7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZKTtcblxuICBpZiAocHJvZ3Jlc3MgPCAxKSB7Ly8g6YCy5o2X5bqm44GMMeacqua6gO+8iD0xMDAl44Gn44Gv44Gq44GE77yJ5aC05ZCI44CB6Ieq5YiG6Ieq6Lqr44KS5ZG844Gz5Ye644GX44CB57mw44KK6L+U44GZXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbEFuaW1hdGlvbik7XG4gIH1cbn07XG5cbi8vIOODiOODg+ODl+OBuOaIu+OCi+imgee0oOOCkuOCr+ODquODg+OCr+OBl+OBn+OCieOCueOCr+ODreODvOODq+OCouODi+ODoeODvOOCt+ODp+ODs+Wun+ihjFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFbaHJlZl49JyMnXVwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpOy8vIOOCv+ODvOOCsuODg+ODiOOBruimgee0oOOCkuWPluW+l1xuICAgIGlmICh0YXJnZXRJZCA9PT0gXCIjXCIpIHtcbiAgICAgIHRhcmdldFNjcm9sbFkgPSAwOy8vIGhyZWY9XCIjXCLjga7loLTlkIjjga/jg5rjg7zjgrjjg4jjg4Pjg5fjgarjga7jgacwXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldElkKTsvLyDjgr/jg7zjgrLjg4Pjg4jjga7opoHntKBcbiAgICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7Ly8g44Oa44O844K45YWo5L2T44Gu6auY44GVXG5cbiAgICAgIGlmICh0YXJnZXRFbGVtZW50Lm9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCA+IGRvY3VtZW50SGVpZ2h0KSB7Ly8g44K/44O844Ky44OD44OI44GuWeW6p+aomeWPluW+l1xuICAgICAgICB0YXJnZXRTY3JvbGxZID0gZG9jdW1lbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7Ly8g44K/44O844Ky44OD44OI44GuWeW6p+aomSvjgqbjgqPjg7Pjg4njgqbpq5jjgZXjgYzjg5rjg7zjgrjlhajkvZPjga7pq5jjgZXjgpLotoXjgYjjgZ/jgajjgY3vvIjvvJ3jgZ3jgZPjgb7jgafjgrnjgq/jg63jg7zjg6vjgafjgY3jgarjgYTvvInjga/jgIHjg5rjg7zjgrjkuIDnlarjgZfjgZ/jgb7jgafjga7kvY3nva7jgpLlj5blvpdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFNjcm9sbFkgPSB0YXJnZXRFbGVtZW50Lm9mZnNldFRvcDsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZXG4gICAgICB9XG4gICAgfVxuICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7Ly8gRGF0ZS5ub3coKeOBp+mWi+Wni+aZgumWk+OCkuOCu+ODg+ODiFxuICAgIHN0YXJ0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZOy8vIOePvuWcqOOBruOCueOCr+ODreODvOODq+S9jee9ruOCkuOCu+ODg+ODiFxuICAgIHNjcm9sbEFuaW1hdGlvbigpO1xuICB9KTtcbn0pOyIsIi8qKlxuICogQG1vZHVsZXMgOiBub2RlX21vZHVsZXPjg5Xjgqnjg6vjg4Djgb7jgafjga7ntbblr77jg5Hjgrnjga7jgqjjgqTjg6rjgqLjgrlcbiAqIHdlYnBhY2suY29uZmlnLmpz44Gr44Gm5a6a576p44GX44Gm44GE44KLXG4gKi9cblxuLy8gaW1wb3J0ICdAbW9kdWxlcy9zdmd4dXNlJzsgLy9TVkfjgrnjg5fjg6njgqTjg4jjgpJJReOBp+S9v+eUqOOBmeOCi+OBn+OCgeOBruODqeOCpOODluODqeODqlxuLy8gaW1wb3J0ICcuL2xpYi9iX2Jyb3dzZXJfc3dpdGNoZXIuanMnOyAvL+ODluODqeOCpuOCtuWIpOWumuOBruOBn+OCgeODqeOCpOODluODqeODqlxuXG5pbXBvcnQgJy4vY29tbW9uL215VHJhaW4uanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUJ1YmJseUJ1dHRvbi5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215SGVhZGVyLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlIb3Zlcic7XG5pbXBvcnQgJy4vY29tbW9uL215SW52YWxpZEhvdmVyJztcbmltcG9ydCAnLi9jb21tb24vc21vb3RoLXNjcm9sbCc7XG5pbXBvcnQgJy4vY29tbW9uL215TWlsa3lXYXknO1xuaW1wb3J0ICcuL2NvbW1vbi9teVN3aXBlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215U2Nyb2xsU2hvdy5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL2RhdGEtc3BsaXR0aW5nJztcbmltcG9ydCAnLi9jb21tb24vbXlGYWxsaW5nQm94JztcbmltcG9ydCAnLi9jb21tb24vbXlXYXZlLmpzJztcblxuXG4vLyBpbXBvcnQgJy4vY29tbW9uL215T3JiaXQnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi90ZXN0LmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlUZXh0Um90YXRlLmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24nXG4vLyBpbXBvcnQgJy4vY29tbW9uL215U3RhcldheSc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215TG9hZGluZy5qcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215UGFydGljbGVSb3VuZCc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215UGFydGljbGVCYW5nJzsiXSwic291cmNlUm9vdCI6IiJ9
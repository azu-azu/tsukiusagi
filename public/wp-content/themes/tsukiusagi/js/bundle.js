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

var colorOfStars = '#ff0'; //星の色

var opacityOfStars = 0.4; //星の透明度

var sizeOfStars = 3; //星の大きさ

var move_direction = "right"; //流れの向き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)

var move_speed = 2; //シェイプの動くスピード

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
        "speed": 10,
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
        "speed": 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUJ1YmJseUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlGYWxsaW5nQm94LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlIb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlJbnZhbGlkSG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215TWlsa3lXYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215U2Nyb2xsU2hvdy5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlTd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215VHJhaW4uanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215V2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vc21vb3RoLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGluZyIsIndoaXRlc3BhY2UiLCJhbmltYXRlQnV0dG9uIiwiZSIsIm15Q2xhc3NsaXN0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmUiLCJhZGQiLCJhbmltYXRlUmVtb3ZlIiwiYnViYmx5QnV0dG9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm15TGVuZ3RoIiwibGVuZ3RoIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb3VudCIsInBhcmVudCIsImdldEVsZW1lbnRCeUlkIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2VjdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwicm90YXRlQmFjayIsImZhbGxpbmdMYXllciIsImxpbmVIaXRib3giLCJsaW5lIiwid2luZG93IiwiaGVhZGVyRmFkZSIsImhlYWRlckJhY2tEb3duIiwibXlIZWFkZXIiLCJoZWFkZXJDbGFzcyIsImhlYWRlckZhZGVQb3NpdGlvbiIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwibXlUYXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0VG9wIiwidG9wIiwiY29udGFpbnMiLCJoYW1idXJnZXIiLCJoYW1idXJnZXJDbGFzcyIsIm15Qm9keSIsImJvZHkiLCJteUJvZHlDbGFzcyIsIm15UG9zaXRpb24iLCJzdHlsZSIsInBvc2l0aW9uIiwic2Nyb2xsWSIsImJvZHlGaXhlZE5vbmUiLCJzY3JvbGxUbyIsInBhcnNlSW50IiwibmF2TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxtIiwibW9vbk1pbmlTaXplIiwialF1ZXJ5IiwiJCIsInJlc2l6ZSIsIngiLCJ3aWR0aCIsInkiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicGFkZGluZ1RvcCIsIm1hcmtlciIsInF1ZXJ5U2VsZWN0b3IiLCJtb3ZlSW5kaWNhdG9yIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsImFjdGl2ZUxpbmsiLCJsaXN0IiwiaXRlbSIsInJlbW92ZUFjdGl2ZSIsImxpbmsiLCJvcGFjaXR5IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibXlQYXJ0aWNsZUlEIiwicGFydGljbGVfc2hhcGUiLCJudW1PZlN0YXJzIiwiY29sb3JPZlN0YXJzIiwib3BhY2l0eU9mU3RhcnMiLCJzaXplT2ZTdGFycyIsIm1vdmVfZGlyZWN0aW9uIiwibW92ZV9zcGVlZCIsInBhcnRpY2xlc0pTIiwiQW5pbUNsYXNzIiwic2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzIiwidHJpZ2dlck1hcmdpbkRlZmF1bHQiLCJzY3JvbGxBbmltRWxtIiwic2Nyb2xsQW5pbWF0aW9uRnVuYyIsInRyaWdnZXJNYXJnaW4iLCJzaG93UG9zIiwiZGF0YXNldCIsImpzX2RhdGFtYXJnaW4iLCJqc19tYXJnaW4iLCJqc190cmlnZ2VyIiwiaW5uZXJIZWlnaHQiLCJkZWxheSIsImpzX2RlbGF5IiwiaW5kZXgiLCJiaW5kIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImVmZmVjdCIsImxvb3AiLCJzcGVlZCIsImRyYWdnYWJsZSIsIm1vdXNld2hlZWwiLCJmb3JjZVRvQXhpcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImR5bmFtaWNCdWxsZXRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm15VHJhaW4iLCJ0cmFpbl9wb3MiLCJvZmZzZXQiLCJ0cmFpbl9oZWlnaHQiLCJvdXRlckhlaWdodCIsInNjcm9sbCIsInVuaXQiLCJjYW52YXNMaXN0IiwiaW5mbyIsImNvbG9yTGlzdCIsImluaXQiLCJzZWNvbmRzIiwidCIsInB1c2giLCJjYW52YXNJbmRleCIsImNhbnZhcyIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY29udGV4dENhY2hlIiwiZ2V0Q29udGV4dCIsInVwZGF0ZSIsImRyYXciLCJNYXRoIiwiUEkiLCJjb2xvciIsImNvbnRleHQiLCJjbGVhclJlY3QiLCJkcmF3V2F2ZSIsImFscGhhIiwiem9vbSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYmVnaW5QYXRoIiwiZHJhd1NpbmUiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwieEF4aXMiLCJmbG9vciIsInlBeGlzIiwic2luIiwibW92ZVRvIiwiZHVyYXRpb24iLCJzdGFydFRpbWUiLCJzdGFydFNjcm9sbFkiLCJ0YXJnZXRTY3JvbGxZIiwiZWFzZU91dEN1YmljIiwicG93Iiwic2Nyb2xsQW5pbWF0aW9uIiwicHJvZ3Jlc3MiLCJtaW4iLCJEYXRlIiwibm93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxlbWVudCIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsImRvY3VtZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib2Zmc2V0VG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLFNBQVMsQ0FBQztBQUNOQyxZQUFVLEVBQUU7QUFETixDQUFELENBQVQsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVVDLENBQVYsRUFBYTtBQUMvQixNQUFNQyxXQUFXLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUE3QjtBQUNBSCxHQUFDLENBQUNJ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LEdBQWpCLEVBQXNCO0FBQ3BCVixtQkFBYSxHQUFHLENBQWhCLENBRG9CLENBQ0Y7QUFDbkIsS0FGRCxNQUVPO0FBQ0wsVUFBTVksYUFBYSxHQUFHOUssUUFBUSxDQUFDNkQsYUFBVCxDQUF1QitHLFFBQXZCLENBQXRCLENBREssQ0FDa0Q7O0FBQ3ZELFVBQU1HLGNBQWMsR0FBRy9LLFFBQVEsQ0FBQ3FDLElBQVQsQ0FBYzJJLFlBQXJDLENBRkssQ0FFNkM7O0FBRWxELFVBQUlGLGFBQWEsQ0FBQ0csU0FBZCxHQUEwQjlKLE1BQU0sQ0FBQzRFLFdBQWpDLEdBQStDZ0YsY0FBbkQsRUFBbUU7QUFBQztBQUNsRWIscUJBQWEsR0FBR2EsY0FBYyxHQUFHNUosTUFBTSxDQUFDNEUsV0FBeEMsQ0FEaUUsQ0FDYjtBQUNyRCxPQUZELE1BRU87QUFDTG1FLHFCQUFhLEdBQUdZLGFBQWEsQ0FBQ0csU0FBOUIsQ0FESyxDQUNtQztBQUN6QztBQUNGOztBQUNEakIsYUFBUyxHQUFHUSxJQUFJLENBQUNDLEdBQUwsRUFBWixDQWhCdUMsQ0FnQmhCOztBQUN2QlIsZ0JBQVksR0FBRzlJLE1BQU0sQ0FBQ3VCLE9BQXRCLENBakJ1QyxDQWlCVDs7QUFDOUIySCxtQkFBZTtBQUNoQixHQW5CRDtBQW9CRCxDQXJCRCxFOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9fYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCJTcGxpdHRpbmcoe1xuICAgIHdoaXRlc3BhY2U6IHRydWVcbn0pIiwiY29uc3QgYW5pbWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgbXlDbGFzc2xpc3QgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICBteUNsYXNzbGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICBteUNsYXNzbGlzdC5hZGQoJ2FuaW1hdGUnKTtcbn07XG5cbmNvbnN0IGFuaW1hdGVSZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IG15Q2xhc3NsaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgbXlDbGFzc2xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XG59O1xuXG5cbmNvbnN0IGJ1YmJseUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtYnViYmx5XCIpO1xuY29uc3QgbXlMZW5ndGggPSBidWJibHlCdXR0b25zLmxlbmd0aDtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBteUxlbmd0aDsgaSsrKSB7XG4gICAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBhbmltYXRlQnV0dG9uLCBmYWxzZSk7XG4gICAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGFuaW1hdGVSZW1vdmUsIGZhbHNlKTtcbn1cblxuXG5cbi8vIGNvbnN0IGFuaW1hdGVCdXR0b24gPSBmdW5jdGlvbiAoZSkge1xuLy8gICAgIGNvbnN0IG15Q2xhc3NsaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdDtcblxuLy8gICAgIG15Q2xhc3NsaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuLy8gICAgIG15Q2xhc3NsaXN0LmFkZCgnYW5pbWF0ZScpO1xuXG4vLyAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIG15Q2xhc3NsaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuLy8gICAgIH0sIDcwMCk7XG4vLyB9O1xuXG5cblxuXG4iLCJjb25zdCBjb3VudCA9IDc7XG5sZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlY3RvcicpO1xubGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbmZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdG9yLmNsYXNzTmFtZSA9IFwic2VjdG9yXCI7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlY3Rvcik7XG5cbiAgbGV0IHJvdGF0ZUJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQmFjay5jbGFzc05hbWUgPSBcInJvdGF0ZVwiO1xuICBzZWN0b3IuYXBwZW5kQ2hpbGQocm90YXRlQmFjayk7XG5cbiAgbGV0IGZhbGxpbmdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmYWxsaW5nTGF5ZXIuY2xhc3NOYW1lID0gXCJmYWxsaW5nXCI7XG4gIHJvdGF0ZUJhY2suYXBwZW5kQ2hpbGQoZmFsbGluZ0xheWVyKTtcblxuICBsZXQgbGluZUhpdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lSGl0Ym94LmNsYXNzTmFtZSA9IFwibGluZS1ib3hcIjtcbiAgZmFsbGluZ0xheWVyLmFwcGVuZENoaWxkKGxpbmVIaXRib3gpO1xuXG4gIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gXCJsaW5lLWJveF9fbGluZSBjLWJhbGxcIjtcbiAgbGluZUhpdGJveC5hcHBlbmRDaGlsZChsaW5lKTtcbn1cblxucGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiIsIi8vIGNvbnN0IGJvZHlXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbi8vIOOCueOCr+ODreODvOODq+OBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cbi8vIOODreODvOODieOBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcbn0pO1xuXG5cbi8vICoqXG4vLyBwLWhlYWRlcjrjgrnjgq/jg63jg7zjg6vjgZfjgZ/jgonmtojjgYjjgotcbi8vICoqXG5jb25zdCBteUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaGVhZGVyXCIpO1xuY29uc3QgaGVhZGVyQ2xhc3MgPSBteUhlYWRlci5jbGFzc0xpc3Q7XG5jb25zdCBoZWFkZXJGYWRlUG9zaXRpb24gPSA1MDsvL+OCueOCr+ODreODvOODq+OBl+OBpuODmuODvOOCuOODiOODg+ODl+OBi+OCieOAh+OAh+OBq+mBlOOBl+OBn+OBqOOBjVxuXG5jb25zdCBoZWFkZXJGYWRlID0gKCkgPT4ge1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGlmIChzY3JvbGxUb3AgPj0gaGVhZGVyRmFkZVBvc2l0aW9uKSB7XG5cdFx0aGVhZGVyQ2xhc3MuYWRkKCdpcy1mYWRlJyk7XG5cdH0gZWxzZSB7XG5cdFx0aGVhZGVyQ2xhc3MucmVtb3ZlKCdpcy1mYWRlJyk7XG5cdH07XG59XG5cblxuLy8gKipcbi8vIHAtaGVhZGVyLWJhY2s644K544Kv44Ot44O844Or6YCU5Lit44Gn5Ye654++XG4vLyAqKlxuY29uc3QgaGVhZGVyQmFja0Rvd24gPSAoKSA9PiB7XG5cdGxldCBteVRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya3NcIik7XG5cdGxldCByZWN0ID0gbXlUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0bGV0IHRhcmdldFRvcCA9IHJlY3QudG9wICsgc2Nyb2xsVG9wO1xuXG5cdGlmIChzY3JvbGxUb3AgPj0gdGFyZ2V0VG9wKSB7XG5cdFx0aGVhZGVyQ2xhc3MucmVtb3ZlKFwiVXBNb3ZlXCIsICdwLWhlYWRlci0tdG9wJywgXCJpcy1mYWRlXCIpOy8vIOOCr+ODqeOCueWQjemZpOWOu1xuXHRcdGhlYWRlckNsYXNzLmFkZCgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblxuXHR9IGVsc2Uge1xuXHRcdGlmIChoZWFkZXJDbGFzcy5jb250YWlucyhcIkRvd25Nb3ZlXCIpKSB7Ly/jgZnjgafjgavjgq/jg6njgrnlkI3jgYzjgaTjgYTjgabjgYTjgZ/jgolcblx0XHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3pmaTljrtcblx0XHRcdGhlYWRlckNsYXNzLmFkZCgnVXBNb3ZlJywgJ3AtaGVhZGVyLS10b3AnKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblx0XHR9XG5cdH1cbn1cblxuXG4vLyAqKlxuLy8g44OP44Oz44OQ44O844Ks44O844Oc44K/44Oz77ya44Kv44Oq44OD44Kv44Kk44OZ44Oz44OIXG4vLyAqKlxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWhhbWJ1cmdlcicpO1xuY29uc3QgaGFtYnVyZ2VyQ2xhc3MgPSBoYW1idXJnZXIuY2xhc3NMaXN0O1xuY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG15Qm9keUNsYXNzID0gbXlCb2R5LmNsYXNzTGlzdDtcblxuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGxldCBteVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cblx0Ly9pcy1jbG9zZeOBjOOBguOBo+OBn+OCiVxuXHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1jbG9zZVwiKSkge1xuXHRcdC8vaXMtY2xvc2XjgpLlpJbjgZlcblx0XHRoYW1idXJnZXJDbGFzcy5yZW1vdmUoJ2lzLWNsb3NlJyk7XG5cdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1jbG9zZScpO1xuXG5cdFx0Ly9pcy1vcGVu44KS44Gk44GR44KLXG5cdFx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1vcGVuJyk7XG5cdFx0bXlCb2R5Q2xhc3MuYWRkKCdpcy1vcGVuJyk7XG5cdFx0bXlCb2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuXHRcdG15Qm9keS5zdHlsZS50b3AgPSBgLSR7bXlQb3NpdGlvbn1weGA7XG5cdH0gZWxzZSB7XG5cdFx0Ly9pcy1vcGVu44GM44GC44Gj44Gf44KJXG5cdFx0aWYgKGhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkge1xuXHRcdFx0Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu6KiY5oa2XG5cdFx0XHRjb25zdCBzY3JvbGxZID0gbXlCb2R5LnN0eWxlLnRvcDtcblxuXHRcdFx0Ly8gaXMtb3BlbuOCkuWkluOBmVxuXHRcdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0XHRteUJvZHlDbGFzcy5yZW1vdmUoJ2lzLW9wZW4nKTtcblxuXHRcdFx0Ly8gaXMtY2xvc2XjgpLjgaTjgZHjgotcblx0XHRcdGhhbWJ1cmdlckNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcblx0XHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcblxuXHRcdFx0Ly8gYm9keeOBrmZpeGVk44KS5aSW44GZXG5cdFx0XHRib2R5Rml4ZWROb25lKCk7XG5cblx0XHRcdC8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruS/neaMgVxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHNjcm9sbFkgfHwgJzAnKSAqIC0xKTtcblx0XHR9XG5cdH1cbn0pO1xuXG5cbi8vICoqXG4vLyBpcy1vcGVu44KS5raI44GZXG4vLyAqKlxuLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44Oq44K544OI44KS44Kv44Oq44OD44Kv44GX44Gf44Go44GNXG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1tYXJrZXJcIik7XG5uYXZMaXN0LmZvckVhY2goKGVsbSkgPT4ge1xuXHRlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0bXlCb2R5Q2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0aGFtYnVyZ2VyQ2xhc3MuYWRkKCdpcy1jbG9zZScpO1xuXHRcdG15Qm9keUNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcblxuXHRcdC8vYm9keeOBrmZpeGVk44KS5aSW44GZXG5cdFx0Ym9keUZpeGVkTm9uZSgpO1xuXHR9KTtcbn0pO1xuXG5cbi8vIOOCpuOCo+ODs+ODieOCpuW5heOBjOWIh+OCiuabv+OCj+OBo+OBn+OBqOOBjVxuY29uc3QgbW9vbk1pbmlTaXplID0gNTcwO1xualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuXHRcdGxldCB4ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdFx0bGV0IHkgPSBtb29uTWluaVNpemU7XG5cdFx0aWYgKHggPj0geSkge1xuXHRcdFx0JChcIiNqcy1oYW1idXJnZXJcIikucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuXHRcdFx0JChcIiNqcy1oYW1idXJnZXJcIikuYWRkQ2xhc3MoXCJpcy1jbG9zZVwiKTtcblx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiaXMtY2xvc2VcIik7XG5cblx0XHRcdC8vYm9keeOBrmZpeGVk44KS5aSW44GZXG5cdFx0XHRib2R5Rml4ZWROb25lKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdH1cblx0fSk7XG59KVxuXG5cbi8vICoqXG4vLyDplqLmlbDvvJpib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vICoqXG5jb25zdCBib2R5Rml4ZWROb25lID0gKCkgPT4ge1xuXHRteUJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuXHRteUJvZHkuc3R5bGUudG9wID0gXCJcIjtcblx0bXlCb2R5LnN0eWxlLnBhZGRpbmdUb3AgPSBcIlwiO1xufTtcblxuXG5cblxuXG5cblxuXG5cbi8vIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruWIh+OCiuabv+OBiOioreWumlxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbi8vIFx0Y29uc3Qgc3BXaW5kb3dTaXplID0gNTcwOyAvL+WIh+OCiuabv+OBiOaZguOBrueUu+mdouW5hVxuLy8gXHRjb25zdCB0YXJnZXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWdtZW51Jyk7XG4vLyBcdGNvbnN0IHRhcmdldDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbmF2Jyk7XG4vLyBcdGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYnRuLWhvbWUnKTtcbi8vIFx0Y29uc3QgYnRuV29ya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYnRuLXdvcmtzJyk7XG4vLyBcdGNvbnN0IGJ0blByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYnRuLXByb2ZpbGUnKTtcbi8vIFx0Y29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1idG4tY29udGFjdCcpO1xuXG5cbi8vIFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IHNwV2luZG93U2l6ZSkgey8v55S76Z2i5bmF44GM5Lul5LiL44Gu5aC05ZCIXG4vLyBcdFx0dGFyZ2V0MS5jbGFzc0xpc3QucmVtb3ZlKFwicC1nbWVudVwiKTtcbi8vIFx0XHR0YXJnZXQyLmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdlwiKTtcblxuLy8gXHRcdHRhcmdldDEuY2xhc3NMaXN0LmFkZChcInAtZ21lbnUtLWhhbWJ1cmdlclwiKTtcbi8vIFx0XHR0YXJnZXQyLmNsYXNzTGlzdC5hZGQoXCJjLW5hdi0taGFtYnVyZ2VyXCIpO1xuLy8gXHRcdGJ0bkhvbWUuY2xhc3NMaXN0LmFkZChcImMtbmF2LWJ0bi0taG9tZVwiKTtcbi8vIFx0XHRidG5Xb3Jrcy5jbGFzc0xpc3QuYWRkKFwiYy1uYXYtYnRuLS13b3Jrc1wiKTtcbi8vIFx0XHRidG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJjLW5hdi1idG4tLXByb2ZpbGVcIik7XG4vLyBcdFx0YnRuQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwiYy1uYXYtYnRuLS1jb250YWN0XCIpO1xuXG4vLyBcdFx0dGFyZ2V0MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuLy8gXHRcdFx0dGFyZ2V0MS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJylcbi8vIFx0XHRcdGJ0bkhvbWUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb2ZmJylcbi8vIFx0XHRcdGJ0bldvcmtzLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9mZicpXG4vLyBcdFx0XHRidG5Qcm9maWxlLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9mZicpXG4vLyBcdFx0XHRidG5Db250YWN0LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9mZicpXG4vLyBcdFx0fSk7XG5cbi8vIFx0fSBlbHNlIHsvL+W5heOBjOWkp+OBjeOBhOaZglxuLy8gXHRcdHRhcmdldDEuY2xhc3NMaXN0LnJlbW92ZShcInAtZ21lbnUtLWhhbWJ1cmdlclwiKTtcbi8vIFx0XHR0YXJnZXQyLmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdi0taGFtYnVyZ2VyXCIpO1xuLy8gXHRcdGJ0bkhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImMtbmF2LWJ0bi0taG9tZVwiKTtcbi8vIFx0XHRidG5Xb3Jrcy5jbGFzc0xpc3QucmVtb3ZlKFwiYy1uYXYtYnRuLS13b3Jrc1wiKTtcbi8vIFx0XHRidG5Qcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdi1idG4tLXByb2ZpbGVcIik7XG4vLyBcdFx0YnRuQ29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYy1uYXYtYnRuLS1jb250YWN0XCIpO1xuLy8gXHRcdHRhcmdldDEuY2xhc3NMaXN0LmFkZChcInAtZ21lbnVcIik7XG4vLyBcdFx0dGFyZ2V0Mi5jbGFzc0xpc3QuYWRkKFwiYy1uYXZcIik7XG4vLyBcdH1cbi8vIH0pO1xuXG5cblxuXG5cblxuLy8gKipcbi8vIGpRdWVyeeOBp+abuOOBj+WgtOWQiFxuLy8gKipcblxuLy8gKirjg5jjg4Pjg4Djg7zjga7jg5Xjgqfjg7zjg4kqKlxuLy8galF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4vLyBcdGxldCB0dGwgPSAkKCcuanMtaGVhZGVyJyk7XG4vLyBcdCQod2luZG93KS5vbignbG9hZCBzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4vLyBcdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA1MCkgeyAvL+OCueOCr+ODreODvOODq+OBl+OBpuODmuODvOOCuOODiOODg+ODl+OBi+OCieOAh+OAh+OBq+mBlOOBl+OBn+OCiVxuLy8gXHRcdFx0dHRsLmFkZENsYXNzKCdpcy1mYWRlJyk7XG4vLyBcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdHR0bC5yZW1vdmVDbGFzcygnaXMtZmFkZScpO1xuLy8gXHRcdH1cbi8vIFx0fSk7XG4vLyB9KTtcblxuXG4vLyAqKuOCueOCr+ODreODvOODq+mAlOS4reOBp+ODmOODg+ODgOODvOWHuuePvioqXG4vLyBmdW5jdGlvbiBoZWFkZXJCYWNrKCkge1xuLy8gXHRsZXQgZWxlbVRvcCA9IGpRdWVyeSgnI3dvcmtzJykub2Zmc2V0KCkudG9wOy8vI+OBruS9jee9rlxuLy8gXHRsZXQgc2Nyb2xsID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4vLyBcdGlmIChzY3JvbGwgPj0gZWxlbVRvcCkge1xuLy8gXHRcdC8vIOOCr+ODqeOCueWQjemZpOWOu1xuLy8gXHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykucmVtb3ZlQ2xhc3MoJ1VwTW92ZScpO1xuLy8gXHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykucmVtb3ZlQ2xhc3MoJ3AtaGVhZGVyJyk7XG4vLyBcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5yZW1vdmVDbGFzcygnaXMtZmFkZScpO1xuXG4vLyBcdFx0Ly8g44Kv44Op44K55ZCN6L+95YqgXG4vLyBcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5hZGRDbGFzcygnRG93bk1vdmUnKTtcbi8vIFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLmFkZENsYXNzKCdwLWhlYWRlci0tYmFjaycpO1xuXG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0aWYgKGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykuaGFzQ2xhc3MoJ0Rvd25Nb3ZlJykpIHsvL+OBmeOBp+OBq+OCr+ODqeOCueWQjeOBjOOBpOOBhOOBpuOBhOOBn+OCiVxuLy8gXHRcdFx0Ly8g44Kv44Op44K55ZCN6Zmk5Y67XG4vLyBcdFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLnJlbW92ZUNsYXNzKCdEb3duTW92ZScpO1xuLy8gXHRcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5yZW1vdmVDbGFzcygncC1oZWFkZXItLWJhY2snKTtcblxuLy8gXHRcdFx0Ly8g44Kv44Op44K55ZCN6L+95YqgXG4vLyBcdFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLmFkZENsYXNzKCdVcE1vdmUnKTtcbi8vIFx0XHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykuYWRkQ2xhc3MoJ3AtaGVhZGVyJyk7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9IiwiY29uc3QgbWFya2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcmtlcicpO1xuZnVuY3Rpb24gbW92ZUluZGljYXRvcihlKSB7XG4gIG1hcmtlci5zdHlsZS5sZWZ0ID0gZS5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgbWFya2VyLnN0eWxlLndpZHRoID0gZS5vZmZzZXRXaWR0aCArICdweCc7XG59XG5cbmZ1bmN0aW9uIGFjdGl2ZUxpbmsoKSB7XG4gIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXJrZXItYWN0aXZlJykpO1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoJ21hcmtlci1hY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKCkge1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWFya2VyLWFjdGl2ZScpKTtcbn1cblxuXG4vLyBtb3VzZW92ZXLjgZfjgZ/jgoltb3ZlSW5kZWNhdG9y5ZG844Gz5Ye644GXXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1hcmtlcicpO1xubGlzdC5mb3JFYWNoKGxpbmsgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIG1vdmVJbmRpY2F0b3IoZS50YXJnZXQpO1xuICB9KVxufSlcblxuXG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWN0aXZlTGluaykpO1xubGlzdC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVBY3RpdmUpKTtcblxuLy8g44Kv44Oq44OD44Kv44GX44Gf44KJ6YCP5piO44Gr44GZ44KLXG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAwO1xufSkpOyIsIi8vIOOCueOCr+ODreODvOODq+aZguOBq+ODm+ODkOODvOOCkueEoeWKueOBq+OBmeOCi1xubGV0IG15Qm9keSA9IGRvY3VtZW50LmJvZHksXG4gIHRpbWVyO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICBjbGVhclRpbWVvdXQodGltZXIpO1xuICBpZiAoIW15Qm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUtaG92ZXInKSkge1xuICAgIG15Qm9keS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlLWhvdmVyJylcbiAgfVxuXG4gIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbXlCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtaG92ZXInKVxuICB9LCA1MDApO1xufSwgZmFsc2UpO1xuXG5cbi8vIENTU+OBq+asoeOBruOCs+ODvOODieOCkui/veWKoOOBmeOCi1xuLy8gLmRpc2FibGUtaG92ZXIge1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH0iLCIvLyAqKiBwYXJ0aWNsZXMuanPjgpLkvb/jgYYgKipcbmNvbnN0IG15UGFydGljbGVJRCA9IFwianMtbWlsa3ktd2F5LXBhcnRpY2xlXCI7XG5jb25zdCBwYXJ0aWNsZV9zaGFwZSA9IFwic3RhclwiOyAvL+OCt+OCp+OCpOODl+OBruW9ou+8iGNpcmNsZTrkuLjjgIFlZGdlOuWbm+inkuOAgXRyaWFuZ2xlOuS4ieinkuOAgXBvbHlnb2465aSa6KeS5b2i44CBc3RhcjrmmJ/lnovjgIFpbWFnZTrnlLvlg4/vvIlcbmNvbnN0IG51bU9mU3RhcnMgPSA0MDA7IC8v5pif44Gu5pWwXG5jb25zdCBjb2xvck9mU3RhcnMgPSAnI2ZmMCc7IC8v5pif44Gu6ImyXG5jb25zdCBvcGFjaXR5T2ZTdGFycyA9IDAuNDsgLy/mmJ/jga7pgI/mmI7luqZcbmNvbnN0IHNpemVPZlN0YXJzID0gMzsgLy/mmJ/jga7lpKfjgY3jgZVcbmNvbnN0IG1vdmVfZGlyZWN0aW9uID0gXCJyaWdodFwiOyAvL+a1geOCjOOBruWQkeOBjShub25l44CBdG9w44CBdG9wLXJpZ2h044CBcmlnaHTjgIFib3R0b20tcmlnaHTjgIFib3R0b23jgIFib3R0b20tbGVmdOOAgWxlZnTjgIF0b3AtbGVmdOOCiOOCiumBuOaKnilcbmNvbnN0IG1vdmVfc3BlZWQgPSAyOyAgLy/jgrfjgqfjgqTjg5fjga7li5XjgY/jgrnjg5Tjg7zjg4lcblxucGFydGljbGVzSlMobXlQYXJ0aWNsZUlELCB7XG4gIFwicGFydGljbGVzXCI6IHtcbiAgICBcIm51bWJlclwiOiB7XG4gICAgICBcInZhbHVlXCI6IG51bU9mU3RhcnMsXG4gICAgICBcImRlbnNpdHlcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwidmFsdWVcIjogY29sb3JPZlN0YXJzLFxuICAgIH0sXG4gICAgXCJzaGFwZVwiOiB7XG4gICAgICBcInR5cGVcIjogcGFydGljbGVfc2hhcGUsXG4gICAgICBcInN0cm9rZVwiOiB7IC8v5aSW57eaXG4gICAgICAgIFwid2lkdGhcIjogMCxcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZcIlxuICAgICAgfSxcbiAgICAgIC8vIFwicG9seWdvblwiOiB7IC8vdHlwZeOCknBvbHlnb27jgavjgZfjgZ/jgajjgY3jga7oqK3lrppcbiAgICAgIC8vICAgXCJuYl9zaWRlc1wiOiA1XG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJpbWFnZVwiOiB7IC8vdHlwZeOCkmltYWdl44Gr44GX44Gf44Go44GN44Gu6Kit5a6aXG4gICAgICAvLyAgIFwic3JjXCI6IFwiXCIsXG4gICAgICAvLyAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgLy8gICBcImhlaWdodFwiOiAxMDBcbiAgICAgIC8vIH1cbiAgICB9LFxuICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICBcInZhbHVlXCI6IG9wYWNpdHlPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcbiAgICAgIFwiYW5pbVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsIC8v44K344Kn44Kk44OX44Gu6YCP5piO5bqm44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwic3BlZWRcIjogMTAsXG4gICAgICAgIFwib3BhY2l0eV9taW5cIjogMC4yLCAvL+mAj+aYjuW6puOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2l6ZVwiOiB7XG4gICAgICBcInZhbHVlXCI6IHNpemVPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSwgLy/jgrfjgqfjgqTjg5fjga7lpKfjgY3jgZXjgpLjg6njg7Pjg4Djg6DjgavjgZnjgotcbiAgICAgIFwiYW5pbVwiOiB7IC8v44K344Kn44Kk44OX44Gu5aSn44GN44GV44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwic3BlZWRcIjogMTAsXG4gICAgICAgIFwic2l6ZV9taW5cIjogMC4yLCAvL+Wkp+OBjeOBleOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibGluZV9saW5rZWRcIjoge1xuICAgICAgXCJlbmFibGVcIjogZmFsc2UsLy8g5pif44Go5pif44KS57ea44Gn57WQ44G2XG4gICAgICAvLyBcImRpc3RhbmNlXCI6IDUwMCxcbiAgICAgIC8vIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICAvLyBcIm9wYWNpdHlcIjogMC40LFxuICAgICAgLy8gXCJ3aWR0aFwiOiAyXG4gICAgfSxcbiAgICBcIm1vdmVcIjoge1xuICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgIFwic3BlZWRcIjogbW92ZV9zcGVlZCxcbiAgICAgIFwiZGlyZWN0aW9uXCI6IG1vdmVfZGlyZWN0aW9uLFxuICAgICAgXCJyYW5kb21cIjogZmFsc2UsXG4gICAgICBcInN0cmFpZ2h0XCI6IHRydWUsXG4gICAgICBcIm91dF9tb2RlXCI6IFwib3V0XCIsIC8v44Ko44Oq44Ki5aSW44Gr5Ye644Gf44K344Kn44Kk44OX44Gu5YuV44GNKG91dOOAgWJvdW5jZeOCiOOCiumBuOaKnilcbiAgICAgIFwiYm91bmNlXCI6IGZhbHNlLFxuICAgICAgXCJhdHRyYWN0XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwicm90YXRlWFwiOiAxMDAwLFxuICAgICAgICBcInJvdGF0ZVlcIjogMTAwMFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcbiAgICBcImRldGVjdF9vblwiOiBcImNhbnZhc1wiLFxuICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgIFwib25ob3ZlclwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwibW9kZVwiOiBcImJ1YmJsZVwiIC8v44Oe44Km44K544Kq44O844OQ44O85pmC44Gr55m65YuV44GZ44KL5YuV44GNKOS4i+iomG1vZGVz5YaF44GuZ3JhYuOAgXJlcHVsc2XjgIFidWJibGXjgojjgorpgbjmip4pXG4gICAgICB9LFxuICAgICAgLy8gXCJvbmNsaWNrXCI6IHtcbiAgICAgIC8vICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgIC8vICAgXCJtb2RlXCI6IFwiYnViYmxlXCIgLy/jgq/jg6rjg4Pjgq/mmYLjgavnmbrli5XjgZnjgovli5XjgY0o5LiL6KiYbW9kZXPlhoXjga5ncmFi44CBcmVwdWxzZeOAgWJ1YmJsZeOAgXB1c2jjgIFyZW1vdmXjgojjgorpgbjmip4pXG4gICAgICAvLyB9LFxuICAgICAgXCJyZXNpemVcIjogdHJ1ZSAvL2NhbnZhc+OBruOCteOCpOOCuuWkieabtOOBq+OCj+OBm+OBpuaLoeWkp+e4ruWwj+OBmeOCi1xuICAgIH0sXG4gICAgXCJtb2Rlc1wiOiB7XG4gICAgICAvLyBcImdyYWJcIjogeyAvL+OCq+ODvOOCveODq+OBqOOCt+OCp+OCpOODl+OBrumWk+OBq+e3muOBjOihqOekuuOBleOCjOOCi1xuICAgICAgLy8gICBcImRpc3RhbmNlXCI6IDQwMCwgLy/jgqvjg7zjgr3jg6vjgYvjgonjga7lj43lv5zot53pm6JcbiAgICAgIC8vICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICAvLyAgICAgXCJvcGFjaXR5XCI6IDAuNVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9LFxuICAgICAgXCJidWJibGVcIjogeyAvL+OCt+OCp+OCpOODl+OBjOiGqOOCieOCgFxuICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcbiAgICAgICAgXCJzaXplXCI6IDUsXG4gICAgICAgIFwiZHVyYXRpb25cIjogMC4zLCAvL+iGqOOCieOCgOOCt+OCp+OCpOODl+OBruaMgee2muaZgumWkyhvbmNsaWNr5pmC44Gu44G/KVxuICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgXCJzcGVlZFwiOiAzIC8v6Iao44KJ44KA44K344Kn44Kk44OX44Gu6YCf5bqmKG9uY2xpY2vmmYLjga7jgb8pXG4gICAgICB9LFxuICAgICAgLy8gXCJyZXB1bHNlXCI6IHsgLy/jgrfjgqfjgqTjg5fjgYzjgqvjg7zjgr3jg6vjgYvjgonpgIPjgZLjgotcbiAgICAgIC8vICAgXCJkaXN0YW5jZVwiOiAyMDAsIC8v44Kr44O844K944Or44GL44KJ44Gu5Y+N5b+c6Led6ZuiXG4gICAgICAvLyAgIFwiZHVyYXRpb25cIjogMC40XG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJwdXNoXCI6IHsgLy/jgrfjgqfjgqTjg5fjgYzlopfjgYjjgotcbiAgICAgIC8vICAgXCJwYXJ0aWNsZXNfbmJcIjogNCAvL+Wil+OBiOOCi+OCt+OCp+OCpOODl+OBruaVsFxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwicmVtb3ZlXCI6IHtcbiAgICAgIC8vICAgXCJwYXJ0aWNsZXNfbmJcIjogMiAvL+a4m+OCi+OCt+OCp+OCpOODl+OBruaVsFxuICAgICAgLy8gfVxuICAgIH1cbiAgfSxcbiAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWUgLy9SZXRpbmEgRGlzcGxheeOBq+WvvuW/nOOBmeOCi1xufSk7XG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcblxuXG5cblxuXG5cbi8vICoqIGNhbnZhc+S9v+OBhuWgtOWQiCAqKlxuLy8gZnVuY3Rpb24gcmFuZG9tKGxvdywgaGlnaCkge1xuLy8gICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSArIGxvdztcbi8vIH1cblxuLy8gY2xhc3MgVmlzdWFsIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzLW1pbGt5LXdheScpO1xuLy8gICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyAgICAgdGhpcy5jYW52YXNXaWR0aCA9IDA7XG4vLyAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAwO1xuLy8gICAgIHRoaXMucGFydGljbGVMZW5ndGggPSA1MDA7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbi8vICAgICB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzID0gMjtcblxuLy8gICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuLy8gICAgIHRoaXMucmVuZGVyKCk7XG4vLyAgIH1cblxuLy8gICBpbml0aWFsaXplKCkge1xuLy8gICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlTGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIHRoaXMucGFydGljbGVzLnB1c2godGhpcy5jcmVhdGVQYXJ0aWNsZShpKSk7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgcmVzaXplQ2FudmFzKCkge1xuLy8gICAgIHRoaXMuY2FudmFzV2lkdGggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuLy8gICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gMjAwO1xuLy8gICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXNXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuLy8gICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4vLyAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgICB0aGlzLmNvbnRleHQuc2NhbGUod2luZG93LmRldmljZVBpeGVsUmF0aW8sIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbi8vICAgfVxuXG4vLyAgIGNyZWF0ZVBhcnRpY2xlKGlkLCBpc1JlY3JlYXRlKSB7XG4vLyAgICAgY29uc3QgcmFkaXVzID0gcmFuZG9tKDAuNSwgdGhpcy5wYXJ0aWNsZU1heFJhZGl1cyk7XG4vLyAgICAgY29uc3QgeCA9IGlzUmVjcmVhdGUgPyAtcmFkaXVzIC0gcmFuZG9tKDAsIHRoaXMuY2FudmFzV2lkdGgpIDogcmFuZG9tKDAsIHRoaXMuY2FudmFzV2lkdGgpO1xuLy8gICAgIGxldCB5ID0gcmFuZG9tKHRoaXMuY2FudmFzSGVpZ2h0IC8gMiAtIDE1MCwgdGhpcy5jYW52YXNIZWlnaHQgLyAyICsgMTUwKTtcbi8vICAgICB5ICs9IHJhbmRvbSgtMTAwLCAxMDApO1xuLy8gICAgIGNvbnN0IGFscGhhID0gcmFuZG9tKDAuMDUsIDEpO1xuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIGlkOiBpZCxcbi8vICAgICAgIHg6IHgsXG4vLyAgICAgICB5OiB5LFxuLy8gICAgICAgc3RhcnRZOiB5LFxuLy8gICAgICAgcmFkaXVzOiByYWRpdXMsXG4vLyAgICAgICBkZWZhdWx0UmFkaXVzOiByYWRpdXMsXG4vLyAgICAgICBzdGFydEFuZ2xlOiAwLFxuLy8gICAgICAgZW5kQW5nbGU6IE1hdGguUEkgKiAyLFxuLy8gICAgICAgYWxwaGE6IGFscGhhLFxuLy8gICAgICAgLy8gY29sb3I6IHsgcjogcmFuZG9tKDI1NSwgMCksIGc6IHJhbmRvbSgyNTUsIDApLCBiOiAwIH0sXG4vLyAgICAgICBzcGVlZDogYWxwaGEgKyAxLCAvL+ODnuOCpOODiuOCueOBq+OBmeOCi+OBqOWPs+OBi+OCieW3plxuLy8gICAgICAgYW1wbGl0dWRlOiByYW5kb20oNTAsIDIwMCksXG4vLyAgICAgICBpc0J1cnN0OiBmYWxzZVxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICBkcmF3UGFydGljbGVzKCkge1xuLy8gICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xuLy8gICAgICAgLy8g5L2N572u5oOF5aCx5pu05pawXG4vLyAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZShwYXJ0aWNsZSk7XG5cbi8vICAgICAgIC8vIHBhcnRpY2xl5o+P55S7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoMjU1LDI1NSwwLCAuNSlgO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUpJztcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZID0gMDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dCbHVyID0gMzA7XG5cbi8vICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgke3BhcnRpY2xlLmNvbG9yLnJ9LCAke3BhcnRpY2xlLmNvbG9yLmd9LCAke3BhcnRpY2xlLmNvbG9yLmJ9LCAke3BhcnRpY2xlLmFscGhhfSlgO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmFyYyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55LCBwYXJ0aWNsZS5yYWRpdXMsIHBhcnRpY2xlLnN0YXJ0QW5nbGUsIHBhcnRpY2xlLmVuZEFuZ2xlKTtcbi8vICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4vLyAgICAgfSk7XG4vLyAgIH1cblxuLy8gICBtb3ZlUGFydGljbGUocGFydGljbGUpIHtcbi8vICAgICBwYXJ0aWNsZS54ICs9IHBhcnRpY2xlLnNwZWVkO1xuLy8gICAgIHBhcnRpY2xlLnkgPSBwYXJ0aWNsZS5zdGFydFkgKyBwYXJ0aWNsZS5hbXBsaXR1ZGUgKiBNYXRoLnNpbigoKHBhcnRpY2xlLnggLyA1KSAqIE1hdGguUEkpIC8gMTgwKTtcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICAvLyBjYW52YXPliJ3mnJ/ljJZcbi8vICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzV2lkdGggKyB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzICogMiwgdGhpcy5jYW52YXNIZWlnaHQpO1xuXG4vLyAgICAgLy8gcGFydGljbGXjgpLmj4/nlLtcbi8vICAgICB0aGlzLmRyYXdQYXJ0aWNsZXMoKTtcblxuLy8gICAgIC8vIOeUu+mdouOBi+OCiea2iOOBiOOBn+OCieaWsOOBl+OBhHBhcnRpY2xl44Gr5beu44GX5pu/44GIXG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4vLyAgICAgICBpZiAocGFydGljbGUueCAtIHBhcnRpY2xlLnJhZGl1cyA+PSB0aGlzLmNhbnZhc1dpZHRoKSB7XG4vLyAgICAgICAgIHRoaXMucGFydGljbGVzW3BhcnRpY2xlLmlkXSA9IHRoaXMuY3JlYXRlUGFydGljbGUocGFydGljbGUuaWQsIHRydWUpO1xuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuXG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuLy8gICB9XG4vLyB9XG4vLyBuZXcgVmlzdWFsKCk7XG5cblxuXG5cbi8vIGRpdjIwMOeUn+aIkFxuLy8gY29uc3QgY291bnQgPSAyMDA7XG4vLyBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW1pbGt5LXdheScpO1xuLy8gbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbi8vIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbi8vICAgbGV0IG1pbGtleVdheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlXYXkuY2xhc3NOYW1lID0gXCJwLW1pbGt5LXdheVwiO1xuXG4vLyAgIGxldCBtaWxrZXlNb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleU1vdmUuY2xhc3NOYW1lID0gXCJtaWxreS1tb3ZlXCI7XG5cbi8vICAgbGV0IG1pbGtleVN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5U3Rhci5jbGFzc05hbWUgPSBcIm1pbGt5LXN0YXJcIjtcblxuLy8gICBtaWxrZXlNb3ZlLmFwcGVuZENoaWxkKG1pbGtleVN0YXIpO1xuLy8gICBtaWxrZXlXYXkuYXBwZW5kQ2hpbGQobWlsa2V5TW92ZSk7XG4vLyAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1pbGtleVdheSk7XG4vLyB9XG5cbi8vIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7IiwiLy8gZGF0YeWxnuaAp1xuLy8gZGF0YS1zYV9tYXJnaW7vvJrooajnpLrjgr/jgqTjg5/jg7PjgrDjgpLkvY3nva7jgafjgZrjgonjgZlcbi8vIGRhdGEtc2FfdHJpZ2dlcu+8muihqOekuuOCv+OCpOODn+ODs+OCsOOBruWfuua6luimgee0oOOCkuaMh+WumlxuLy8gZGF0YS1zYV9kZWxhee+8muihqOekuuOCv+OCpOODn+ODs+OCsOOCkuaZgumWk+OBp+OBmuOCieOBmVxuXG5cbmxldCBBbmltQ2xhc3MgPSAnanMtc2Nyb2xsLXNob3cnO1xubGV0IHNjcm9sbEFuaW1hdGlvblNob3dDbGFzcyA9ICdzaG93JztcbmxldCB0cmlnZ2VyTWFyZ2luRGVmYXVsdCA9IDIwMDtcblxubGV0IHNjcm9sbEFuaW1FbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEFuaW1DbGFzcyk7XG5sZXQgc2Nyb2xsQW5pbWF0aW9uRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEFuaW1FbG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRyaWdnZXJNYXJnaW4gPSB0cmlnZ2VyTWFyZ2luRGVmYXVsdDtcbiAgICAgICAgbGV0IGVsbSA9IHNjcm9sbEFuaW1FbG1baV07XG4gICAgICAgIGxldCBzaG93UG9zID0gMDtcblxuICAgICAgICAvLyBtYXJnaW7jgafjgZrjgonjgZnloLTlkIhcbiAgICAgICAgaWYgKGVsbS5kYXRhc2V0LmpzX2RhdGFtYXJnaW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdHJpZ2dlck1hcmdpbiA9IHBhcnNlSW50KGVsbS5kYXRhc2V0LmpzX21hcmdpbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2Vy44GM44GC44KL5aC05ZCIXG4gICAgICAgIGlmIChlbG0uZGF0YXNldC5qc190cmlnZ2VyKSB7XG4gICAgICAgICAgICBzaG93UG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbG0uZGF0YXNldC5qc190cmlnZ2VyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0cmlnZ2VyTWFyZ2luO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd1BvcyA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0cmlnZ2VyTWFyZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pmC6ZaT44Gn44Ga44KJ44GZ5aC05ZCIXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiBzaG93UG9zKSB7XG4gICAgICAgICAgICBsZXQgZGVsYXkgPSAoZWxtLmRhdGFzZXQuanNfZGVsYXkpID8gZWxtLmRhdGFzZXQuanNfZGVsYXkgOiAwO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxBbmltRWxtW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICB9LmJpbmQobnVsbCwgaSksIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2Nyb2xsQW5pbWF0aW9uRnVuYyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQW5pbWF0aW9uRnVuYyk7XG4iLCJsZXQgc3dpcGVyID0gbmV3IFN3aXBlcignLmpzLXN3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsLy/jgrnjg6njgqTjg4njga7plpPjga7ot53pm6JcbiAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICBsb29wOiB0cnVlLC8v5pyA5b6M44Gr6YGU44GX44Gf44KJ5YWI6aCt44Gr5oi744KLXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuXG4gICAgbW91c2V3aGVlbDoge1xuICAgICAgICBmb3JjZVRvQXhpczogZmFsc2UsXG4gICAgfSxcblxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLC8v44Oa44O844K444ON44O844K344On44Oz44Gu6KaB57SgXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwvL+OCr+ODquODg+OCr+OBq+WPjeW/nOOBleOBm+OCi1xuICAgICAgICBkeW5hbWljQnVsbGV0czogZmFsc2UsLy/jg5rjg7zjgrjjg43jg7zjgrfjg6fjg7PjgavlvLflvLHjgYzjgaTjgY9cbiAgICB9LFxuXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9XG59KTsiLCIvLyDpioDmsrPpiYTpgZPjgpLlm7rlrprjgZnjgotcbmNvbnN0IG15VHJhaW4gPSBqUXVlcnkoXCIuanMtdHJhaW5cIik7XG5jb25zdCB0cmFpbl9wb3MgPSBteVRyYWluLm9mZnNldCgpLnRvcDtcbmNvbnN0IHRyYWluX2hlaWdodCA9IG15VHJhaW4ub3V0ZXJIZWlnaHQoKTtcblxuXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiB0cmFpbl9wb3MgKyAyMikge1xuICAgICAgICAgICAgbXlUcmFpbi5hZGRDbGFzcyhcImZpeGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXlUcmFpbi5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIvLyBIVE1M44GuPGNhbnZhcz7jgr/jgrDjgatKYXZhU2NyaXB044KS5L2/44GE5rOi77yI5aGX44KK77yJ44KS5o+P55S744GZ44KLXG5cbmxldCB1bml0ID0gMTAwLFxuICAgIGNhbnZhc0xpc3QsIC8vIOOCreODo+ODs+ODkOOCueOBrumFjeWIl1xuICAgIGluZm8gPSB7fSwgLy8g5YWo44Kt44Oj44Oz44OQ44K55YWx6YCa44Gu5o+P55S75oOF5aCxXG4gICAgY29sb3JMaXN0OyAvLyDlkITjgq3jg6Pjg7Pjg5Djgrnjga7oibLmg4XloLFcblxuLyoqXG4gKiBJbml0IGZ1bmN0aW9uLlxuICogXG4gKiBJbml0aWFsaXplIHZhcmlhYmxlcyBhbmQgYmVnaW4gdGhlIGFuaW1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpbmZvLnNlY29uZHMgPSAwO1xuICAgIGluZm8udCA9IDA7XG4gICAgY2FudmFzTGlzdCA9IFtdO1xuICAgIGNvbG9yTGlzdCA9IFtdO1xuICAgIC8vIGNhbnZhczHlgIvjgoHjga7oibLmjIflrppcbiAgICBjYW52YXNMaXN0LnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YXZlQ2FudmFzXCIpKTtcbiAgICBjb2xvckxpc3QucHVzaChbJyNmZmJlZjYnLCAnI2ZmZjViZScsICcjYjZmN2ZmJ10pOy8v5bem44GM5LiA55Wq5LiL4oaS5LiK44Gu5rOi6aCGXG4gICAgLy8g5ZCE44Kt44Oj44Oz44OQ44K544Gu5Yid5pyf5YyWXG4gICAgZm9yKHZhciBjYW52YXNJbmRleCBpbiBjYW52YXNMaXN0KSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBjYW52YXNMaXN0W2NhbnZhc0luZGV4XTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoOyAvL0NhbnZhc+OBrndpZHRo44KS44Km44Kj44Oz44OJ44Km44Gu5bmF44Gr5ZCI44KP44Gb44KLXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA0NTA7Ly/ms6Ljga7pq5jjgZVcbiAgICAgICAgY2FudmFzLmNvbnRleHRDYWNoZSA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuICAgIC8vIOWFsemAmuOBruabtOaWsOWHpueQhuWRvOOBs+WHuuOBl1xuICAgIHVwZGF0ZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgZm9yKGxldCBjYW52YXNJbmRleCBpbiBjYW52YXNMaXN0KSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBjYW52YXNMaXN0W2NhbnZhc0luZGV4XTtcbiAgICAgICAgLy8g5ZCE44Kt44Oj44Oz44OQ44K544Gu5o+P55S7XG4gICAgICAgIGRyYXcoY2FudmFzLCBjb2xvckxpc3RbY2FudmFzSW5kZXhdKTtcbiAgICB9XG4gICAgLy8g5YWx6YCa44Gu5o+P55S75oOF5aCx44Gu5pu05pawXG4gICAgaW5mby5zZWNvbmRzID0gaW5mby5zZWNvbmRzICsgLjAxNDtcbiAgICBpbmZvLnQgPSBpbmZvLnNlY29uZHMqTWF0aC5QSTtcbiAgICAvLyDoh6rouqvjga7lho3otbflkbzjgbPlh7rjgZdcbiAgICBzZXRUaW1lb3V0KHVwZGF0ZSwgMzUpO1xufVxuXG4vKipcbiAqIERyYXcgYW5pbWF0aW9uIGZ1bmN0aW9uLlxuICogXG4gKiBUaGlzIGZ1bmN0aW9uIGRyYXdzIG9uZSBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uLCB3YWl0cyAyMG1zLCBhbmQgdGhlbiBjYWxsc1xuICogaXRzZWxmIGFnYWluLlxuICovXG5mdW5jdGlvbiBkcmF3KGNhbnZhcywgY29sb3IpIHtcbiAgICAvLyDlr77osaHjga5jYW52YXPjga7jgrPjg7Pjg4bjgq3jgrnjg4jjgpLlj5blvpdcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0Q2FjaGU7XG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu5o+P55S744KS44Kv44Oq44KiXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIC8v5rOi44Gu6YeN44Gq44KK44KS5o+P55S7IGRyYXdXYXZlKGNhbnZhcywgY29sb3Jb5pWw5a2X77yI5rOi44Gu5pWw44KSMOOBi+OCieaVsOOBiOOBpuaMh+Wumu+8iV0sIOmAj+mBjiwg5rOi44Gu5bmF44Guem9vbSzms6Ljga7plovlp4vkvY3nva7jga7pgYXjgowgKVxuICAgIGRyYXdXYXZlKGNhbnZhcywgY29sb3JbMF0sIDEsIDMsIDApOy8vMC414oeS6YCP6YGO5YW35ZCINTAl44CBM+KHkuaVsOWtl+OBjOWkp+OBjeOBhOOBu+OBqeazouOBjOOBquOBoOOCieOBi1xuICAgIGRyYXdXYXZlKGNhbnZhcywgY29sb3JbMV0sIDEsIDIsIDI1MCk7XG4gICAgZHJhd1dhdmUoY2FudmFzLCBjb2xvclsyXSwgMSwgMi41LCAxMDApO1xufVxuXG4vKipcbiog5rOi44KS5o+P55S7XG4qIGRyYXdXYXZlKOiJsiwg5LiN6YCP5piO5bqmLCDms6Ljga7luYXjga56b29tLCDms6Ljga7plovlp4vkvY3nva7jga7pgYXjgowpXG4qL1xuZnVuY3Rpb24gZHJhd1dhdmUoY2FudmFzLCBjb2xvciwgYWxwaGEsIHpvb20sIGRlbGF5KSB7XG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuY29udGV4dENhY2hlO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7Ly/loZfjgorjga7oibJcbiAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTsgLy/jg5Hjgrnjga7plovlp4tcbiAgICBkcmF3U2luZShjYW52YXMsIGluZm8udCAvIDAuNSwgem9vbSwgZGVsYXkpO1xuICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCArIDEwLCBjYW52YXMuaGVpZ2h0KTsgLy/jg5HjgrnjgpJDYW52YXPjga7lj7PkuIvjgbhcbiAgICBjb250ZXh0LmxpbmVUbygwLCBjYW52YXMuaGVpZ2h0KTsgLy/jg5HjgrnjgpJDYW52YXPjga7lt6bkuIvjgbhcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpIC8v44OR44K544KS6ZaJ44GY44KLXG4gICAgY29udGV4dC5maWxsKCk7IC8v5rOi44KS5aGX44KK44Gk44G244GZXG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gZHJhdyBzaW5lXG4gKiBcbiAqIFRoZSBzaW5lIGN1cnZlIGlzIGRyYXduIGluIDEwcHggc2VnbWVudHMgc3RhcnRpbmcgYXQgdGhlIG9yaWdpbi4gXG4gKiBkcmF3U2luZSjmmYLplpMsIOazouOBruW5heOBrnpvb20sIOazouOBrumWi+Wni+S9jee9ruOBrumBheOCjClcbiAqL1xuZnVuY3Rpb24gZHJhd1NpbmUoY2FudmFzLCB0LCB6b29tLCBkZWxheSkge1xuICAgIGxldCB4QXhpcyA9IE1hdGguZmxvb3IoY2FudmFzLmhlaWdodC8yKTtcbiAgICBsZXQgeUF4aXMgPSAwO1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmNvbnRleHRDYWNoZTtcbiAgICAvLyBTZXQgdGhlIGluaXRpYWwgeCBhbmQgeSwgc3RhcnRpbmcgYXQgMCwwIGFuZCB0cmFuc2xhdGluZyB0byB0aGUgb3JpZ2luIG9uXG4gICAgLy8gdGhlIGNhbnZhcy5cbiAgICBsZXQgeCA9IHQ7IC8v5pmC6ZaT44KS5qiq44Gu5L2N572u44Go44GZ44KLXG4gICAgbGV0IHkgPSBNYXRoLnNpbih4KS96b29tO1xuICAgIGNvbnRleHQubW92ZVRvKHlBeGlzLCB1bml0KnkreEF4aXMpOyAvL+OCueOCv+ODvOODiOS9jee9ruOBq+ODkeOCueOCkue9ruOBj1xuXG4gICAgLy8gTG9vcCB0byBkcmF3IHNlZ21lbnRzICjmqKrluYXjga7liIbjgIHms6LjgpLmj4/nlLspXG4gICAgZm9yIChpID0geUF4aXM7IGkgPD0gY2FudmFzLndpZHRoICsgMTA7IGkgKz0gMTApIHtcbiAgICAgICAgeCA9IHQrKC15QXhpcytpKS91bml0L3pvb207XG4gICAgICAgIHkgPSBNYXRoLnNpbih4IC0gZGVsYXkpLzM7XG4gICAgICAgIGNvbnRleHQubGluZVRvKGksIHVuaXQqeSt4QXhpcyk7XG4gICAgfVxufVxuXG5pbml0KCk7XG4iLCJjb25zdCBkdXJhdGlvbiA9IDEwMDA7XG5sZXQgc3RhcnRUaW1lOy8vIOOCouODi+ODoeODvOOCt+ODp+ODs+OBrumWi+Wni+aZgumWk+OCkuagvOe0jeOBmeOCi+WkieaVsFxubGV0IHN0YXJ0U2Nyb2xsWTsvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7plovlp4vmmYLjga7jgrnjgq/jg63jg7zjg6vkvY3nva7jgpLmoLzntI3jgZnjgovlpInmlbBcbmxldCB0YXJnZXRTY3JvbGxZOy8vIOOCv+ODvOOCsuODg+ODiOOBruOCueOCr+ODreODvOODq+S9jee9ruOCkuagvOe0jeOBmeOCi+WkieaVsFxuXG4vKipcbiAqIOOCpOODvOOCuOODs+OCsOmWouaVsFxuICogQHBhcmFtIHhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmNvbnN0IGVhc2VPdXRDdWJpYyA9ICh4KSA9PiB7XG4gIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHgsIDMpO1xufTtcblxuLyoqXG4gKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7lkITjg5Xjg6zjg7zjg6Djgafjga7lh6bnkIZcbiAqL1xuY29uc3Qgc2Nyb2xsQW5pbWF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKDEsIChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKTsvLyDnj77lnKjmmYLplpPjga7ntpnntprmmYLplpPjgavlr77jgZnjgovpgLLmjZfluqbjgpLnrpflh7pcbiAgY29uc3Qgc2Nyb2xsWSA9XG4gICAgc3RhcnRTY3JvbGxZICtcbiAgICAodGFyZ2V0U2Nyb2xsWSAtIHN0YXJ0U2Nyb2xsWSkgKiBlYXNlT3V0Q3ViaWMocHJvZ3Jlc3MpO1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSk7XG5cbiAgaWYgKHByb2dyZXNzIDwgMSkgey8vIOmAsuaNl+W6puOBjDHmnKrmuoDvvIg9MTAwJeOBp+OBr+OBquOBhO+8ieWgtOWQiOOAgeiHquWIhuiHqui6q+OCkuWRvOOBs+WHuuOBl+OAgee5sOOCiui/lOOBmVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxBbmltYXRpb24pO1xuICB9XG59O1xuXG4vLyDjg4jjg4Pjg5fjgbjmiLvjgovopoHntKDjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgonjgrnjgq/jg63jg7zjg6vjgqLjg4vjg6Hjg7zjgrfjg6fjg7Plrp/ooYxcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZePScjJ11cIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhcmdldElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTsvLyDjgr/jg7zjgrLjg4Pjg4jjga7opoHntKDjgpLlj5blvpdcbiAgICBpZiAodGFyZ2V0SWQgPT09IFwiI1wiKSB7XG4gICAgICB0YXJnZXRTY3JvbGxZID0gMDsvLyBocmVmPVwiI1wi44Gu5aC05ZCI44Gv44Oa44O844K444OI44OD44OX44Gq44Gu44GnMFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRJZCk7Ly8g44K/44O844Ky44OD44OI44Gu6KaB57SgXG4gICAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0Oy8vIOODmuODvOOCuOWFqOS9k+OBrumrmOOBlVxuXG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5vZmZzZXRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPiBkb2N1bWVudEhlaWdodCkgey8vIOOCv+ODvOOCsuODg+ODiOOBrlnluqfmqJnlj5blvpdcbiAgICAgICAgdGFyZ2V0U2Nyb2xsWSA9IGRvY3VtZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0Oy8vIOOCv+ODvOOCsuODg+ODiOOBrlnluqfmqJkr44Km44Kj44Oz44OJ44Km6auY44GV44GM44Oa44O844K45YWo5L2T44Gu6auY44GV44KS6LaF44GI44Gf44Go44GN77yI77yd44Gd44GT44G+44Gn44K544Kv44Ot44O844Or44Gn44GN44Gq44GE77yJ44Gv44CB44Oa44O844K45LiA55Wq44GX44Gf44G+44Gn44Gu5L2N572u44KS5Y+W5b6XXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRTY3JvbGxZID0gdGFyZ2V0RWxlbWVudC5vZmZzZXRUb3A7Ly8g44K/44O844Ky44OD44OI44GuWeW6p+aomVxuICAgICAgfVxuICAgIH1cbiAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpOy8vIERhdGUubm93KCnjgafplovlp4vmmYLplpPjgpLjgrvjg4Pjg4hcbiAgICBzdGFydFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTsvLyDnj77lnKjjga7jgrnjgq/jg63jg7zjg6vkvY3nva7jgpLjgrvjg4Pjg4hcbiAgICBzY3JvbGxBbmltYXRpb24oKTtcbiAgfSk7XG59KTsiLCIvKipcbiAqIEBtb2R1bGVzIDogbm9kZV9tb2R1bGVz44OV44Kp44Or44OA44G+44Gn44Gu57W25a++44OR44K544Gu44Ko44Kk44Oq44Ki44K5XG4gKiB3ZWJwYWNrLmNvbmZpZy5qc+OBq+OBpuWumue+qeOBl+OBpuOBhOOCi1xuICovXG5cbi8vIGltcG9ydCAnQG1vZHVsZXMvc3ZneHVzZSc7IC8vU1ZH44K544OX44Op44Kk44OI44KSSUXjgafkvb/nlKjjgZnjgovjgZ/jgoHjga7jg6njgqTjg5bjg6njg6pcbi8vIGltcG9ydCAnLi9saWIvYl9icm93c2VyX3N3aXRjaGVyLmpzJzsgLy/jg5bjg6njgqbjgrbliKTlrprjga7jgZ/jgoHjg6njgqTjg5bjg6njg6pcblxuaW1wb3J0ICcuL2NvbW1vbi9teVRyYWluLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlCdWJibHlCdXR0b24uanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUhlYWRlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215SG92ZXInO1xuaW1wb3J0ICcuL2NvbW1vbi9teUludmFsaWRIb3Zlcic7XG5pbXBvcnQgJy4vY29tbW9uL3Ntb290aC1zY3JvbGwnO1xuaW1wb3J0ICcuL2NvbW1vbi9teU1pbGt5V2F5JztcbmltcG9ydCAnLi9jb21tb24vbXlTd2lwZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVNjcm9sbFNob3cuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9kYXRhLXNwbGl0dGluZyc7XG5pbXBvcnQgJy4vY29tbW9uL215RmFsbGluZ0JveCc7XG5pbXBvcnQgJy4vY29tbW9uL215V2F2ZS5qcyc7XG5cblxuLy8gaW1wb3J0ICcuL2NvbW1vbi9teU9yYml0Jztcbi8vIGltcG9ydCAnLi9jb21tb24vdGVzdC5qcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215VGV4dFJvdGF0ZS5qcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uJ1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teVN0YXJXYXknO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teUxvYWRpbmcuanMnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teVBhcnRpY2xlUm91bmQnO1xuLy8gaW1wb3J0ICcuL2NvbW1vbi9teVBhcnRpY2xlQmFuZyc7Il0sInNvdXJjZVJvb3QiOiIifQ==
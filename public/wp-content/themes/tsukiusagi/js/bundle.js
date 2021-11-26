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
var myBody = document.body;
hamburger.addEventListener('click', function () {
  var myPosition = window.pageYOffset || document.documentElement.scrollTop; //is-closeがあったら

  if (hamburger.classList.contains("is-close")) {
    //is-closeを外す
    hamburger.classList.remove('is-close');
    myBody.classList.remove('is-close'); //is-openをつける

    hamburger.classList.add('is-open');
    myBody.classList.add('is-open');
    myBody.style.position = "fixed";
    myBody.style.top = "-".concat(myPosition, "px");
  } else {
    //is-openがあったら
    if (hamburger.classList.contains("is-open")) {
      // スクロール位置の記憶
      var scrollY = myBody.style.top; // is-openを外す

      hamburger.classList.remove('is-open');
      myBody.classList.remove('is-open'); // is-closeをつける

      hamburger.classList.add('is-close');
      myBody.classList.add('is-close'); // bodyのfixedを外す

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
    hamburger.classList.remove('is-open');
    myBody.classList.remove('is-open');
    hamburger.classList.add('is-close');
    myBody.classList.add('is-close'); //bodyのfixedを外す

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
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.paddingTop = "";
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

/***/ "../_assets/js/common/myStarWay.js":
/*!*****************************************!*\
  !*** ../_assets/js/common/myStarWay.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var parent = document.getElementById('js-star-way');
var fragment = document.createDocumentFragment(); //fragment作成

for (i = 0; i < 100; i++) {
  var children = document.createElement('div');
  children.className = "star";
  fragment.appendChild(children);
}

parent.appendChild(fragment); // window.onload = function () {
//   let count = 100,
//     div,
//     divStar = document.getElementById('js-star'),
//     fragment = document.createDocumentFragment();
//   // rows
//   for (let i = 0; i < count; ++i) {
//     // columns
//     for (let j = 0; j < count; ++j) {
//       div = document.createElement('div');
//       div.className = 'star';
//       fragment.appendChild(div);
//     }
//   }
//   divStar.appendChild(fragment);
// };

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

/***/ "../_assets/js/common/test.js":
/*!************************************!*\
  !*** ../_assets/js/common/test.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/myTrain.js */ "../_assets/js/common/myTrain.js");
/* harmony import */ var _common_myTrain_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_myTrain_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_myTextRotate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/myTextRotate.js */ "../_assets/js/common/myTextRotate.js");
/* harmony import */ var _common_myTextRotate_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_myTextRotate_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/myBubblyButton.js */ "../_assets/js/common/myBubblyButton.js");
/* harmony import */ var _common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_myBubblyButton_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/myHeader.js */ "../_assets/js/common/myHeader.js");
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_myHeader_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_myHover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/myHover */ "../_assets/js/common/myHover.js");
/* harmony import */ var _common_myHover__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_myHover__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/smooth-scroll */ "../_assets/js/common/smooth-scroll.js");
/* harmony import */ var _common_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_myMilkyWay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/myMilkyWay */ "../_assets/js/common/myMilkyWay.js");
/* harmony import */ var _common_myMilkyWay__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_myMilkyWay__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/myScrollShow.js */ "../_assets/js/common/myScrollShow.js");
/* harmony import */ var _common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_myScrollShow_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_data_splitting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/data-splitting */ "../_assets/js/common/data-splitting.js");
/* harmony import */ var _common_data_splitting__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_data_splitting__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_myStarWay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/myStarWay */ "../_assets/js/common/myStarWay.js");
/* harmony import */ var _common_myStarWay__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_myStarWay__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/myWave.js */ "../_assets/js/common/myWave.js");
/* harmony import */ var _common_myWave_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_myWave_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/test.js */ "../_assets/js/common/test.js");
/* harmony import */ var _common_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_common_test_js__WEBPACK_IMPORTED_MODULE_13__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
//SVGスプライトをIEで使用するためのライブラリ
// import '@modules/svgxuse';
//ブラウザ判定のためライブラリ













 // import './common'
// import './common/myLoading.js';
// import './common/myParticleRound';
// import './common/myParticleBang';

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL2RhdGEtc3BsaXR0aW5nLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teUJ1YmJseUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215SG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215TWlsa3lXYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215U2Nyb2xsU2hvdy5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlTdGFyV2F5LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVN3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlUZXh0Um90YXRlLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVRyYWluLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVdhdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL3Ntb290aC1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvbGliL2JfYnJvd3Nlcl9zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGluZyIsIndoaXRlc3BhY2UiLCJhbmltYXRlQnV0dG9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0VGltZW91dCIsImJ1YmJseUJ1dHRvbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImhlYWRlckZhZGUiLCJoZWFkZXJCYWNrRG93biIsImhlYWRlckNsYXNzIiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkZXJGYWRlUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsIm15VGFyZ2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhcmdldFRvcCIsInRvcCIsImNvbnRhaW5zIiwiaGFtYnVyZ2VyIiwibXlCb2R5IiwiYm9keSIsIm15UG9zaXRpb24iLCJzdHlsZSIsInBvc2l0aW9uIiwic2Nyb2xsWSIsImJvZHlGaXhlZE5vbmUiLCJzY3JvbGxUbyIsInBhcnNlSW50IiwibmF2TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxtIiwibW9vbk1pbmlTaXplIiwialF1ZXJ5IiwiJCIsInJlc2l6ZSIsIngiLCJ3aWR0aCIsInkiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicGFkZGluZ1RvcCIsIm1hcmtlciIsInF1ZXJ5U2VsZWN0b3IiLCJtb3ZlSW5kaWNhdG9yIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsImxpc3QiLCJsaW5rIiwib3BhY2l0eSIsImFjdGl2ZUxpbmsiLCJpdGVtIiwicmVtb3ZlQWN0aXZlIiwibXlQYXJ0aWNsZUlEIiwicGFydGljbGVfc2hhcGUiLCJudW1PZlN0YXJzIiwiY29sb3JPZlN0YXJzIiwib3BhY2l0eU9mU3RhcnMiLCJzaXplT2ZTdGFycyIsIm1vdmVfZGlyZWN0aW9uIiwibW92ZV9zcGVlZCIsInBhcnRpY2xlc0pTIiwiQW5pbUNsYXNzIiwic2Nyb2xsQW5pbWF0aW9uU2hvd0NsYXNzIiwidHJpZ2dlck1hcmdpbkRlZmF1bHQiLCJzY3JvbGxBbmltRWxtIiwic2Nyb2xsQW5pbWF0aW9uRnVuYyIsInRyaWdnZXJNYXJnaW4iLCJzaG93UG9zIiwiZGF0YXNldCIsImpzX2RhdGFtYXJnaW4iLCJqc19tYXJnaW4iLCJqc190cmlnZ2VyIiwiaW5uZXJIZWlnaHQiLCJkZWxheSIsImpzX2RlbGF5IiwiaW5kZXgiLCJiaW5kIiwicGFyZW50IiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZWZmZWN0IiwibG9vcCIsInNwZWVkIiwiZHJhZ2dhYmxlIiwibW91c2V3aGVlbCIsImZvcmNlVG9BeGlzIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiZHluYW1pY0J1bGxldHMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFyYWdyYXBoIiwidGV4dEVmZmVjdCIsImFuaW1hdGlvbk5hbWUiLCJ0ZXh0IiwiaW5uZXJIVE1MIiwiY2hhcnMiLCJuZXdUZXh0IiwiYW5pbWF0aW9uIiwiY2hhciIsImNoYXJBdCIsIndyYXBwZWRDaGFycyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid3JhcHBlZENoYXJzTGVuIiwiaiIsImFkZEVmZmVjdCIsInRyYWluX3BvcyIsIm9mZnNldCIsInRyYWluX2hlaWdodCIsIm91dGVySGVpZ2h0Iiwic2Nyb2xsIiwiY3NzIiwidW5pdCIsImNhbnZhc0xpc3QiLCJpbmZvIiwiY29sb3JMaXN0IiwiaW5pdCIsInNlY29uZHMiLCJ0IiwicHVzaCIsImNhbnZhc0luZGV4IiwiY2FudmFzIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0Q2FjaGUiLCJnZXRDb250ZXh0IiwidXBkYXRlIiwiZHJhdyIsIk1hdGgiLCJQSSIsImNvbG9yIiwiY29udGV4dCIsImNsZWFyUmVjdCIsImRyYXdXYXZlIiwiYWxwaGEiLCJ6b29tIiwiZmlsbFN0eWxlIiwiZ2xvYmFsQWxwaGEiLCJiZWdpblBhdGgiLCJkcmF3U2luZSIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJ4QXhpcyIsImZsb29yIiwieUF4aXMiLCJzaW4iLCJtb3ZlVG8iLCJkdXJhdGlvbiIsInN0YXJ0VGltZSIsInN0YXJ0U2Nyb2xsWSIsInRhcmdldFNjcm9sbFkiLCJlYXNlT3V0Q3ViaWMiLCJwb3ciLCJzY3JvbGxBbmltYXRpb24iLCJwcm9ncmVzcyIsIm1pbiIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbGVtZW50IiwiZXZlbnQiLCJ0YXJnZXRJZCIsImdldEF0dHJpYnV0ZSIsInRhcmdldEVsZW1lbnQiLCJkb2N1bWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsIm9mZnNldFRvcCIsIl91YWMiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwidmVyIiwiYXBwVmVyc2lvbiIsImJyb3dzZXIiLCJpbmRleE9mIiwiZGV2aWNlIiwiaW9zVmVyIiwidGVzdCIsInBsYXRmb3JtIiwidiIsIm1hdGNoIiwidmVyc2lvbnMiLCJpc0lFIiwic3Vic3RyIiwiaXNpT1MiLCJpc01vYmlsZSIsImlzVGFibGV0IiwiaXNUb3VjaCIsImlzTW9kZXJuIiwiaG9tZUNsYXNzIiwiY2xhc3NTdHIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FB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bEIsR0FBd0JULElBQUksQ0FBQ1MsTUFBTCxHQUFjLEdBQXRDLEdBQTZDLGlCQUQzRCxFQUVFZSxRQUFRLElBQUt4QixJQUFJLENBQUNtQixRQUFOLEdBQWtCLFNBQWxCLEdBQThCLFVBRjVDLEVBR0VLLFFBQVEsSUFBS3hCLElBQUksQ0FBQ3FCLE9BQU4sR0FBaUIsUUFBakIsR0FBNkIsUUFIM0MsRUFJRUcsUUFBUSxJQUFLeEIsSUFBSSxDQUFDa0IsS0FBTixHQUFlLE1BQWYsR0FBd0IsRUFKdEMsRUFLRU0sUUFBUSxJQUFLeEIsSUFBSSxDQUFDZ0IsSUFBTixHQUFjLEtBQWQsR0FBc0IsRUFMcEMsRUFNRVEsUUFBUSxJQUFLeEIsSUFBSSxDQUFDc0IsUUFBTixHQUFrQixTQUFsQixHQUE4QixNQU41QztBQU9BLFNBQU9FLFFBQVA7QUFDRCxDQVZEOztBQVlBOU0sUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUN2REosVUFBUSxDQUFDYSxlQUFULENBQXlCeUUsU0FBekIsSUFBc0N1SCxTQUFTLEVBQS9DO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFDQSxvQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9fYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCJTcGxpdHRpbmcoe1xuICAgIHdoaXRlc3BhY2U6IHRydWVcbn0pIiwibGV0IGFuaW1hdGVCdXR0b24gPSBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgIC8vcmVzZXQgYW5pbWF0aW9uXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgIFxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgIH0sNzAwKTtcbn07XG5cblxuY29uc3QgYnViYmx5QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1idWJibHlcIik7XG5mb3IgKGxldCBpID0gMDsgaSA8IGJ1YmJseUJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbi8vIGJ1YmJseUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignaG92ZXInLCBhbmltYXRlQnV0dG9uLCBmYWxzZSk7XG5idWJibHlCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGFuaW1hdGVCdXR0b24sIGZhbHNlKTtcbn1cbiIsIi8vIGNvbnN0IGJvZHlXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbi8vIOOCueOCr+ODreODvOODq+OBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0aGVhZGVyRmFkZSgpO1xuXHRoZWFkZXJCYWNrRG93bigpO1xufSk7XG5cbi8vIOODreODvOODieOBl+OBn+OCiemWouaVsOWRvOOBs+WHuuOBl1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcbn0pO1xuXG5cbi8vICoqXG4vLyBwLWhlYWRlcjrjgrnjgq/jg63jg7zjg6vjgZfjgZ/jgonmtojjgYjjgotcbi8vICoqXG5jb25zdCBoZWFkZXJDbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaGVhZGVyXCIpO1xuY29uc3QgaGVhZGVyRmFkZVBvc2l0aW9uID0gNTA7Ly/jgrnjgq/jg63jg7zjg6vjgZfjgabjg5rjg7zjgrjjg4jjg4Pjg5fjgYvjgonjgIfjgIfjgavpgZTjgZfjgZ/jgajjgY1cbmNvbnN0IGhlYWRlckZhZGUgPSAoKSA9PiB7XG5cdGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0aWYgKHNjcm9sbFRvcCA+PSBoZWFkZXJGYWRlUG9zaXRpb24pIHtcblx0XHRoZWFkZXJDbGFzcy5jbGFzc0xpc3QuYWRkKCdpcy1mYWRlJyk7XG5cdH0gZWxzZSB7XG5cdFx0aGVhZGVyQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmFkZScpO1xuXHR9O1xufVxuXG5cbi8vICoqXG4vLyBwLWhlYWRlci1iYWNrOuOCueOCr+ODreODvOODq+mAlOS4reOBp+WHuuePvlxuLy8gKipcbmNvbnN0IGhlYWRlckJhY2tEb3duID0gKCkgPT4ge1xuXHRsZXQgbXlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtzXCIpO1xuXHRsZXQgcmVjdCA9IG15VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGxldCB0YXJnZXRUb3AgPSByZWN0LnRvcCArIHNjcm9sbFRvcDtcblxuXHRpZiAoc2Nyb2xsVG9wID49IHRhcmdldFRvcCkge1xuXHRcdGhlYWRlckNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJVcE1vdmVcIiwgXCJwLWhlYWRlclwiLCBcImlzLWZhZGVcIik7Ly8g44Kv44Op44K55ZCN6Zmk5Y67XG5cdFx0aGVhZGVyQ2xhc3MuY2xhc3NMaXN0LmFkZCgnRG93bk1vdmUnLCAncC1oZWFkZXItLWJhY2snKTsvLyDjgq/jg6njgrnlkI3ov73liqBcblxuXHR9IGVsc2Uge1xuXHRcdGlmIChoZWFkZXJDbGFzcy5jbGFzc0xpc3QuY29udGFpbnMoXCJEb3duTW92ZVwiKSkgey8v44GZ44Gn44Gr44Kv44Op44K55ZCN44GM44Gk44GE44Gm44GE44Gf44KJXG5cdFx0XHRoZWFkZXJDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCdEb3duTW92ZScsICdwLWhlYWRlci0tYmFjaycpOy8vIOOCr+ODqeOCueWQjemZpOWOu1xuXHRcdFx0aGVhZGVyQ2xhc3MuY2xhc3NMaXN0LmFkZCgnVXBNb3ZlJywgJ3AtaGVhZGVyJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cdFx0fVxuXHR9XG59XG5cblxuLy8gKipcbi8vIOODj+ODs+ODkOODvOOCrOODvOODnOOCv+ODs++8muOCr+ODquODg+OCr+OCpOODmeODs+ODiFxuLy8gKipcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1oYW1idXJnZXInKTtcbmNvbnN0IG15Qm9keSA9IGRvY3VtZW50LmJvZHk7XG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGxldCBteVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cblx0Ly9pcy1jbG9zZeOBjOOBguOBo+OBn+OCiVxuXHRpZiAoaGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWNsb3NlXCIpKSB7XG5cdFx0Ly9pcy1jbG9zZeOCkuWkluOBmVxuXHRcdGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jbG9zZScpO1xuXHRcdG15Qm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jbG9zZScpO1xuXG5cdFx0Ly9pcy1vcGVu44KS44Gk44GR44KLXG5cdFx0aGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcblx0XHRteUJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuXHRcdG15Qm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcblx0XHRteUJvZHkuc3R5bGUudG9wID0gYC0ke215UG9zaXRpb259cHhgO1xuXHR9IGVsc2Uge1xuXHRcdC8vaXMtb3BlbuOBjOOBguOBo+OBn+OCiVxuXHRcdGlmIChoYW1idXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtb3BlblwiKSkge1xuXHRcdFx0Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu6KiY5oa2XG5cdFx0XHRjb25zdCBzY3JvbGxZID0gbXlCb2R5LnN0eWxlLnRvcDtcblxuXHRcdFx0Ly8gaXMtb3BlbuOCkuWkluOBmVxuXHRcdFx0aGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcblx0XHRcdG15Qm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG5cblx0XHRcdC8vIGlzLWNsb3Nl44KS44Gk44GR44KLXG5cdFx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LmFkZCgnaXMtY2xvc2UnKTtcblx0XHRcdG15Qm9keS5jbGFzc0xpc3QuYWRkKCdpcy1jbG9zZScpO1xuXG5cdFx0XHQvLyBib2R544GuZml4ZWTjgpLlpJbjgZlcblx0XHRcdGJvZHlGaXhlZE5vbmUoKTtcblxuXHRcdFx0Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu5L+d5oyBXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoc2Nyb2xsWSB8fCAnMCcpICogLTEpO1xuXHRcdH1cblx0fVxufSk7XG5cblxuLy8gKipcbi8vIGlzLW9wZW7jgpLmtojjgZlcbi8vICoqXG4vLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7jg6rjgrnjg4jjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgajjgY1cbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1hcmtlclwiKTtcbm5hdkxpc3QuZm9yRWFjaCgoZWxtKSA9PiB7XG5cdGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXHRcdG15Qm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0aGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2lzLWNsb3NlJyk7XG5cdFx0bXlCb2R5LmNsYXNzTGlzdC5hZGQoJ2lzLWNsb3NlJyk7XG5cblx0XHQvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuXHRcdGJvZHlGaXhlZE5vbmUoKTtcblx0fSk7XG59KTtcblxuXG4vLyDjgqbjgqPjg7Pjg4njgqbluYXjgYzliIfjgormm7/jgo/jgaPjgZ/jgajjgY1cbmNvbnN0IG1vb25NaW5pU2l6ZSA9IDU3MDtcbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgeCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdGxldCB5ID0gbW9vbk1pbmlTaXplO1xuXHRcdGlmICh4ID49IHkpIHtcblx0XHRcdCQoXCIjanMtaGFtYnVyZ2VyXCIpLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0XHRcdCQoXCIjanMtaGFtYnVyZ2VyXCIpLmFkZENsYXNzKFwiaXMtY2xvc2VcIik7XG5cdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcImlzLWNsb3NlXCIpO1xuXG5cdFx0XHQvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuXHRcdFx0Ym9keUZpeGVkTm9uZSgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHR9XG5cdH0pO1xufSlcblxuXG4vLyAqKlxuLy8g6Zai5pWw77yaYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyAqKlxuY29uc3QgYm9keUZpeGVkTm9uZSA9ICgpID0+IHtcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG5cdGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIjtcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gXCJcIjtcbn07XG5cblxuXG5cblxuXG5cblxuXG4vLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7liIfjgormm7/jgYjoqK3lrppcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4vLyBcdGNvbnN0IHNwV2luZG93U2l6ZSA9IDU3MDsgLy/liIfjgormm7/jgYjmmYLjga7nlLvpnaLluYVcbi8vIFx0Y29uc3QgdGFyZ2V0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1nbWVudScpO1xuLy8gXHRjb25zdCB0YXJnZXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW5hdicpO1xuLy8gXHRjb25zdCBidG5Ib21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJ0bi1ob21lJyk7XG4vLyBcdGNvbnN0IGJ0bldvcmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJ0bi13b3JrcycpO1xuLy8gXHRjb25zdCBidG5Qcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJ0bi1wcm9maWxlJyk7XG4vLyBcdGNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYnRuLWNvbnRhY3QnKTtcblxuXG4vLyBcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBzcFdpbmRvd1NpemUpIHsvL+eUu+mdouW5heOBjOS7peS4i+OBruWgtOWQiFxuLy8gXHRcdHRhcmdldDEuY2xhc3NMaXN0LnJlbW92ZShcInAtZ21lbnVcIik7XG4vLyBcdFx0dGFyZ2V0Mi5jbGFzc0xpc3QucmVtb3ZlKFwiYy1uYXZcIik7XG5cbi8vIFx0XHR0YXJnZXQxLmNsYXNzTGlzdC5hZGQoXCJwLWdtZW51LS1oYW1idXJnZXJcIik7XG4vLyBcdFx0dGFyZ2V0Mi5jbGFzc0xpc3QuYWRkKFwiYy1uYXYtLWhhbWJ1cmdlclwiKTtcbi8vIFx0XHRidG5Ib21lLmNsYXNzTGlzdC5hZGQoXCJjLW5hdi1idG4tLWhvbWVcIik7XG4vLyBcdFx0YnRuV29ya3MuY2xhc3NMaXN0LmFkZChcImMtbmF2LWJ0bi0td29ya3NcIik7XG4vLyBcdFx0YnRuUHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwiYy1uYXYtYnRuLS1wcm9maWxlXCIpO1xuLy8gXHRcdGJ0bkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImMtbmF2LWJ0bi0tY29udGFjdFwiKTtcblxuLy8gXHRcdHRhcmdldDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbi8vIFx0XHRcdHRhcmdldDEuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpXG4vLyBcdFx0XHRidG5Ib21lLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9mZicpXG4vLyBcdFx0XHRidG5Xb3Jrcy5jaGlsZHJlblswXS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vZmYnKVxuLy8gXHRcdFx0YnRuUHJvZmlsZS5jaGlsZHJlblswXS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vZmYnKVxuLy8gXHRcdFx0YnRuQ29udGFjdC5jaGlsZHJlblswXS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vZmYnKVxuLy8gXHRcdH0pO1xuXG4vLyBcdH0gZWxzZSB7Ly/luYXjgYzlpKfjgY3jgYTmmYJcbi8vIFx0XHR0YXJnZXQxLmNsYXNzTGlzdC5yZW1vdmUoXCJwLWdtZW51LS1oYW1idXJnZXJcIik7XG4vLyBcdFx0dGFyZ2V0Mi5jbGFzc0xpc3QucmVtb3ZlKFwiYy1uYXYtLWhhbWJ1cmdlclwiKTtcbi8vIFx0XHRidG5Ib21lLmNsYXNzTGlzdC5yZW1vdmUoXCJjLW5hdi1idG4tLWhvbWVcIik7XG4vLyBcdFx0YnRuV29ya3MuY2xhc3NMaXN0LnJlbW92ZShcImMtbmF2LWJ0bi0td29ya3NcIik7XG4vLyBcdFx0YnRuUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYy1uYXYtYnRuLS1wcm9maWxlXCIpO1xuLy8gXHRcdGJ0bkNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShcImMtbmF2LWJ0bi0tY29udGFjdFwiKTtcbi8vIFx0XHR0YXJnZXQxLmNsYXNzTGlzdC5hZGQoXCJwLWdtZW51XCIpO1xuLy8gXHRcdHRhcmdldDIuY2xhc3NMaXN0LmFkZChcImMtbmF2XCIpO1xuLy8gXHR9XG4vLyB9KTtcblxuXG5cblxuXG5cbi8vICoqXG4vLyBqUXVlcnnjgafmm7jjgY/loLTlkIhcbi8vICoqXG5cbi8vICoq44OY44OD44OA44O844Gu44OV44Kn44O844OJKipcbi8vIGpRdWVyeShmdW5jdGlvbiAoJCkge1xuLy8gXHRsZXQgdHRsID0gJCgnLmpzLWhlYWRlcicpO1xuLy8gXHQkKHdpbmRvdykub24oJ2xvYWQgc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuLy8gXHRcdGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gNTApIHsgLy/jgrnjgq/jg63jg7zjg6vjgZfjgabjg5rjg7zjgrjjg4jjg4Pjg5fjgYvjgonjgIfjgIfjgavpgZTjgZfjgZ/jgolcbi8vIFx0XHRcdHR0bC5hZGRDbGFzcygnaXMtZmFkZScpO1xuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHR0dGwucmVtb3ZlQ2xhc3MoJ2lzLWZhZGUnKTtcbi8vIFx0XHR9XG4vLyBcdH0pO1xuLy8gfSk7XG5cblxuLy8gKirjgrnjgq/jg63jg7zjg6vpgJTkuK3jgafjg5jjg4Pjg4Djg7zlh7rnj74qKlxuLy8gZnVuY3Rpb24gaGVhZGVyQmFjaygpIHtcbi8vIFx0bGV0IGVsZW1Ub3AgPSBqUXVlcnkoJyN3b3JrcycpLm9mZnNldCgpLnRvcDsvLyPjga7kvY3nva5cbi8vIFx0bGV0IHNjcm9sbCA9IGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuLy8gXHRpZiAoc2Nyb2xsID49IGVsZW1Ub3ApIHtcbi8vIFx0XHQvLyDjgq/jg6njgrnlkI3pmaTljrtcbi8vIFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLnJlbW92ZUNsYXNzKCdVcE1vdmUnKTtcbi8vIFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLnJlbW92ZUNsYXNzKCdwLWhlYWRlcicpO1xuLy8gXHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykucmVtb3ZlQ2xhc3MoJ2lzLWZhZGUnKTtcblxuLy8gXHRcdC8vIOOCr+ODqeOCueWQjei/veWKoFxuLy8gXHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykuYWRkQ2xhc3MoJ0Rvd25Nb3ZlJyk7XG4vLyBcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5hZGRDbGFzcygncC1oZWFkZXItLWJhY2snKTtcblxuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGlmIChqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLmhhc0NsYXNzKCdEb3duTW92ZScpKSB7Ly/jgZnjgafjgavjgq/jg6njgrnlkI3jgYzjgaTjgYTjgabjgYTjgZ/jgolcbi8vIFx0XHRcdC8vIOOCr+ODqeOCueWQjemZpOWOu1xuLy8gXHRcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5yZW1vdmVDbGFzcygnRG93bk1vdmUnKTtcbi8vIFx0XHRcdGpRdWVyeSgnLmpzLWhlYWRlci1iYWNrJykucmVtb3ZlQ2xhc3MoJ3AtaGVhZGVyLS1iYWNrJyk7XG5cbi8vIFx0XHRcdC8vIOOCr+ODqeOCueWQjei/veWKoFxuLy8gXHRcdFx0alF1ZXJ5KCcuanMtaGVhZGVyLWJhY2snKS5hZGRDbGFzcygnVXBNb3ZlJyk7XG4vLyBcdFx0XHRqUXVlcnkoJy5qcy1oZWFkZXItYmFjaycpLmFkZENsYXNzKCdwLWhlYWRlcicpO1xuLy8gXHRcdH1cbi8vIFx0fVxuLy8gfSIsImNvbnN0IG1hcmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXJrZXInKTtcbmZ1bmN0aW9uIG1vdmVJbmRpY2F0b3IoZSkge1xuICBtYXJrZXIuc3R5bGUubGVmdCA9IGUub2Zmc2V0TGVmdCArICdweCc7XG4gIG1hcmtlci5zdHlsZS53aWR0aCA9IGUub2Zmc2V0V2lkdGggKyAncHgnO1xufVxuXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1hcmtlcicpO1xubGlzdC5mb3JFYWNoKGxpbmsgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgbWFya2VyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIG1vdmVJbmRpY2F0b3IoZS50YXJnZXQpO1xuICB9KVxufSlcblxuXG5mdW5jdGlvbiBhY3RpdmVMaW5rKCkge1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWFya2VyLWFjdGl2ZScpKTtcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKCdtYXJrZXItYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZSgpIHtcbiAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmtlci1hY3RpdmUnKSk7XG59XG5cbmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBhY3RpdmVMaW5rKSk7XG5saXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlbW92ZUFjdGl2ZSkpO1xuXG4vLyDjgq/jg6rjg4Pjgq/jgZfjgZ/jgonpgI/mmI7jgavjgZnjgotcbmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtYXJrZXIuc3R5bGUub3BhY2l0eSA9IDA7XG59KSk7XG4iLCIvLyAqKiBwYXJ0aWNsZXMuanPjgpLkvb/jgYYgKipcbmNvbnN0IG15UGFydGljbGVJRCA9IFwianMtbWlsa3ktd2F5LXBhcnRpY2xlXCI7XG5jb25zdCBwYXJ0aWNsZV9zaGFwZSA9IFwic3RhclwiOyAvL+OCt+OCp+OCpOODl+OBruW9ou+8iGNpcmNsZTrkuLjjgIFlZGdlOuWbm+inkuOAgXRyaWFuZ2xlOuS4ieinkuOAgXBvbHlnb2465aSa6KeS5b2i44CBc3RhcjrmmJ/lnovjgIFpbWFnZTrnlLvlg4/vvIlcbmNvbnN0IG51bU9mU3RhcnMgPSA0MDA7IC8v5pif44Gu5pWwXG5jb25zdCBjb2xvck9mU3RhcnMgPSAnI2ZmMCc7IC8v5pif44Gu6ImyXG5jb25zdCBvcGFjaXR5T2ZTdGFycyA9IDAuNDsgLy/mmJ/jga7pgI/mmI7luqZcbmNvbnN0IHNpemVPZlN0YXJzID0gMzsgLy/mmJ/jga7lpKfjgY3jgZVcbmNvbnN0IG1vdmVfZGlyZWN0aW9uID0gXCJyaWdodFwiOyAvL+a1geOCjOOBruWQkeOBjShub25l44CBdG9w44CBdG9wLXJpZ2h044CBcmlnaHTjgIFib3R0b20tcmlnaHTjgIFib3R0b23jgIFib3R0b20tbGVmdOOAgWxlZnTjgIF0b3AtbGVmdOOCiOOCiumBuOaKnilcbmNvbnN0IG1vdmVfc3BlZWQgPSAyOyAgLy/jgrfjgqfjgqTjg5fjga7li5XjgY/jgrnjg5Tjg7zjg4lcblxucGFydGljbGVzSlMobXlQYXJ0aWNsZUlELCB7XG4gIFwicGFydGljbGVzXCI6IHtcbiAgICBcIm51bWJlclwiOiB7XG4gICAgICBcInZhbHVlXCI6IG51bU9mU3RhcnMsXG4gICAgICBcImRlbnNpdHlcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwidmFsdWVcIjogY29sb3JPZlN0YXJzLFxuICAgIH0sXG4gICAgXCJzaGFwZVwiOiB7XG4gICAgICBcInR5cGVcIjogcGFydGljbGVfc2hhcGUsXG4gICAgICBcInN0cm9rZVwiOiB7IC8v5aSW57eaXG4gICAgICAgIFwid2lkdGhcIjogMCxcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZcIlxuICAgICAgfSxcbiAgICAgIC8vIFwicG9seWdvblwiOiB7IC8vdHlwZeOCknBvbHlnb27jgavjgZfjgZ/jgajjgY3jga7oqK3lrppcbiAgICAgIC8vICAgXCJuYl9zaWRlc1wiOiA1XG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJpbWFnZVwiOiB7IC8vdHlwZeOCkmltYWdl44Gr44GX44Gf44Go44GN44Gu6Kit5a6aXG4gICAgICAvLyAgIFwic3JjXCI6IFwiXCIsXG4gICAgICAvLyAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgLy8gICBcImhlaWdodFwiOiAxMDBcbiAgICAgIC8vIH1cbiAgICB9LFxuICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICBcInZhbHVlXCI6IG9wYWNpdHlPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcbiAgICAgIFwiYW5pbVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsIC8v44K344Kn44Kk44OX44Gu6YCP5piO5bqm44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwic3BlZWRcIjogMTAsXG4gICAgICAgIFwib3BhY2l0eV9taW5cIjogMC4yLCAvL+mAj+aYjuW6puOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2l6ZVwiOiB7XG4gICAgICBcInZhbHVlXCI6IHNpemVPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSwgLy/jgrfjgqfjgqTjg5fjga7lpKfjgY3jgZXjgpLjg6njg7Pjg4Djg6DjgavjgZnjgotcbiAgICAgIFwiYW5pbVwiOiB7IC8v44K344Kn44Kk44OX44Gu5aSn44GN44GV44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwic3BlZWRcIjogMTAsXG4gICAgICAgIFwic2l6ZV9taW5cIjogMC4yLCAvL+Wkp+OBjeOBleOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibGluZV9saW5rZWRcIjoge1xuICAgICAgXCJlbmFibGVcIjogZmFsc2UsLy8g5pif44Go5pif44KS57ea44Gn57WQ44G2XG4gICAgICAvLyBcImRpc3RhbmNlXCI6IDUwMCxcbiAgICAgIC8vIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICAvLyBcIm9wYWNpdHlcIjogMC40LFxuICAgICAgLy8gXCJ3aWR0aFwiOiAyXG4gICAgfSxcbiAgICBcIm1vdmVcIjoge1xuICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgIFwic3BlZWRcIjogbW92ZV9zcGVlZCxcbiAgICAgIFwiZGlyZWN0aW9uXCI6IG1vdmVfZGlyZWN0aW9uLFxuICAgICAgXCJyYW5kb21cIjogZmFsc2UsXG4gICAgICBcInN0cmFpZ2h0XCI6IHRydWUsXG4gICAgICBcIm91dF9tb2RlXCI6IFwib3V0XCIsIC8v44Ko44Oq44Ki5aSW44Gr5Ye644Gf44K344Kn44Kk44OX44Gu5YuV44GNKG91dOOAgWJvdW5jZeOCiOOCiumBuOaKnilcbiAgICAgIFwiYm91bmNlXCI6IGZhbHNlLFxuICAgICAgXCJhdHRyYWN0XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwicm90YXRlWFwiOiAxMDAwLFxuICAgICAgICBcInJvdGF0ZVlcIjogMTAwMFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcbiAgICBcImRldGVjdF9vblwiOiBcImNhbnZhc1wiLFxuICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgIFwib25ob3ZlclwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwibW9kZVwiOiBcImJ1YmJsZVwiIC8v44Oe44Km44K544Kq44O844OQ44O85pmC44Gr55m65YuV44GZ44KL5YuV44GNKOS4i+iomG1vZGVz5YaF44GuZ3JhYuOAgXJlcHVsc2XjgIFidWJibGXjgojjgorpgbjmip4pXG4gICAgICB9LFxuICAgICAgLy8gXCJvbmNsaWNrXCI6IHtcbiAgICAgIC8vICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgIC8vICAgXCJtb2RlXCI6IFwiYnViYmxlXCIgLy/jgq/jg6rjg4Pjgq/mmYLjgavnmbrli5XjgZnjgovli5XjgY0o5LiL6KiYbW9kZXPlhoXjga5ncmFi44CBcmVwdWxzZeOAgWJ1YmJsZeOAgXB1c2jjgIFyZW1vdmXjgojjgorpgbjmip4pXG4gICAgICAvLyB9LFxuICAgICAgXCJyZXNpemVcIjogdHJ1ZSAvL2NhbnZhc+OBruOCteOCpOOCuuWkieabtOOBq+OCj+OBm+OBpuaLoeWkp+e4ruWwj+OBmeOCi1xuICAgIH0sXG4gICAgXCJtb2Rlc1wiOiB7XG4gICAgICAvLyBcImdyYWJcIjogeyAvL+OCq+ODvOOCveODq+OBqOOCt+OCp+OCpOODl+OBrumWk+OBq+e3muOBjOihqOekuuOBleOCjOOCi1xuICAgICAgLy8gICBcImRpc3RhbmNlXCI6IDQwMCwgLy/jgqvjg7zjgr3jg6vjgYvjgonjga7lj43lv5zot53pm6JcbiAgICAgIC8vICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICAvLyAgICAgXCJvcGFjaXR5XCI6IDAuNVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9LFxuICAgICAgXCJidWJibGVcIjogeyAvL+OCt+OCp+OCpOODl+OBjOiGqOOCieOCgFxuICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcbiAgICAgICAgXCJzaXplXCI6IDUsXG4gICAgICAgIFwiZHVyYXRpb25cIjogMC4zLCAvL+iGqOOCieOCgOOCt+OCp+OCpOODl+OBruaMgee2muaZgumWkyhvbmNsaWNr5pmC44Gu44G/KVxuICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgXCJzcGVlZFwiOiAzIC8v6Iao44KJ44KA44K344Kn44Kk44OX44Gu6YCf5bqmKG9uY2xpY2vmmYLjga7jgb8pXG4gICAgICB9LFxuICAgICAgLy8gXCJyZXB1bHNlXCI6IHsgLy/jgrfjgqfjgqTjg5fjgYzjgqvjg7zjgr3jg6vjgYvjgonpgIPjgZLjgotcbiAgICAgIC8vICAgXCJkaXN0YW5jZVwiOiAyMDAsIC8v44Kr44O844K944Or44GL44KJ44Gu5Y+N5b+c6Led6ZuiXG4gICAgICAvLyAgIFwiZHVyYXRpb25cIjogMC40XG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJwdXNoXCI6IHsgLy/jgrfjgqfjgqTjg5fjgYzlopfjgYjjgotcbiAgICAgIC8vICAgXCJwYXJ0aWNsZXNfbmJcIjogNCAvL+Wil+OBiOOCi+OCt+OCp+OCpOODl+OBruaVsFxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwicmVtb3ZlXCI6IHtcbiAgICAgIC8vICAgXCJwYXJ0aWNsZXNfbmJcIjogMiAvL+a4m+OCi+OCt+OCp+OCpOODl+OBruaVsFxuICAgICAgLy8gfVxuICAgIH1cbiAgfSxcbiAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWUgLy9SZXRpbmEgRGlzcGxheeOBq+WvvuW/nOOBmeOCi1xufSk7XG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcblxuXG5cblxuXG5cbi8vICoqIGNhbnZhc+S9v+OBhuWgtOWQiCAqKlxuLy8gZnVuY3Rpb24gcmFuZG9tKGxvdywgaGlnaCkge1xuLy8gICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSArIGxvdztcbi8vIH1cblxuLy8gY2xhc3MgVmlzdWFsIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzLW1pbGt5LXdheScpO1xuLy8gICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyAgICAgdGhpcy5jYW52YXNXaWR0aCA9IDA7XG4vLyAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAwO1xuLy8gICAgIHRoaXMucGFydGljbGVMZW5ndGggPSA1MDA7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbi8vICAgICB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzID0gMjtcblxuLy8gICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuLy8gICAgIHRoaXMucmVuZGVyKCk7XG4vLyAgIH1cblxuLy8gICBpbml0aWFsaXplKCkge1xuLy8gICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlTGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIHRoaXMucGFydGljbGVzLnB1c2godGhpcy5jcmVhdGVQYXJ0aWNsZShpKSk7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgcmVzaXplQ2FudmFzKCkge1xuLy8gICAgIHRoaXMuY2FudmFzV2lkdGggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuLy8gICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gMjAwO1xuLy8gICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXNXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuLy8gICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4vLyAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgICB0aGlzLmNvbnRleHQuc2NhbGUod2luZG93LmRldmljZVBpeGVsUmF0aW8sIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbi8vICAgfVxuXG4vLyAgIGNyZWF0ZVBhcnRpY2xlKGlkLCBpc1JlY3JlYXRlKSB7XG4vLyAgICAgY29uc3QgcmFkaXVzID0gcmFuZG9tKDAuNSwgdGhpcy5wYXJ0aWNsZU1heFJhZGl1cyk7XG4vLyAgICAgY29uc3QgeCA9IGlzUmVjcmVhdGUgPyAtcmFkaXVzIC0gcmFuZG9tKDAsIHRoaXMuY2FudmFzV2lkdGgpIDogcmFuZG9tKDAsIHRoaXMuY2FudmFzV2lkdGgpO1xuLy8gICAgIGxldCB5ID0gcmFuZG9tKHRoaXMuY2FudmFzSGVpZ2h0IC8gMiAtIDE1MCwgdGhpcy5jYW52YXNIZWlnaHQgLyAyICsgMTUwKTtcbi8vICAgICB5ICs9IHJhbmRvbSgtMTAwLCAxMDApO1xuLy8gICAgIGNvbnN0IGFscGhhID0gcmFuZG9tKDAuMDUsIDEpO1xuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIGlkOiBpZCxcbi8vICAgICAgIHg6IHgsXG4vLyAgICAgICB5OiB5LFxuLy8gICAgICAgc3RhcnRZOiB5LFxuLy8gICAgICAgcmFkaXVzOiByYWRpdXMsXG4vLyAgICAgICBkZWZhdWx0UmFkaXVzOiByYWRpdXMsXG4vLyAgICAgICBzdGFydEFuZ2xlOiAwLFxuLy8gICAgICAgZW5kQW5nbGU6IE1hdGguUEkgKiAyLFxuLy8gICAgICAgYWxwaGE6IGFscGhhLFxuLy8gICAgICAgLy8gY29sb3I6IHsgcjogcmFuZG9tKDI1NSwgMCksIGc6IHJhbmRvbSgyNTUsIDApLCBiOiAwIH0sXG4vLyAgICAgICBzcGVlZDogYWxwaGEgKyAxLCAvL+ODnuOCpOODiuOCueOBq+OBmeOCi+OBqOWPs+OBi+OCieW3plxuLy8gICAgICAgYW1wbGl0dWRlOiByYW5kb20oNTAsIDIwMCksXG4vLyAgICAgICBpc0J1cnN0OiBmYWxzZVxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICBkcmF3UGFydGljbGVzKCkge1xuLy8gICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xuLy8gICAgICAgLy8g5L2N572u5oOF5aCx5pu05pawXG4vLyAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZShwYXJ0aWNsZSk7XG5cbi8vICAgICAgIC8vIHBhcnRpY2xl5o+P55S7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoMjU1LDI1NSwwLCAuNSlgO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUpJztcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZID0gMDtcbi8vICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dCbHVyID0gMzA7XG5cbi8vICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgke3BhcnRpY2xlLmNvbG9yLnJ9LCAke3BhcnRpY2xlLmNvbG9yLmd9LCAke3BhcnRpY2xlLmNvbG9yLmJ9LCAke3BhcnRpY2xlLmFscGhhfSlgO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmFyYyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55LCBwYXJ0aWNsZS5yYWRpdXMsIHBhcnRpY2xlLnN0YXJ0QW5nbGUsIHBhcnRpY2xlLmVuZEFuZ2xlKTtcbi8vICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4vLyAgICAgfSk7XG4vLyAgIH1cblxuLy8gICBtb3ZlUGFydGljbGUocGFydGljbGUpIHtcbi8vICAgICBwYXJ0aWNsZS54ICs9IHBhcnRpY2xlLnNwZWVkO1xuLy8gICAgIHBhcnRpY2xlLnkgPSBwYXJ0aWNsZS5zdGFydFkgKyBwYXJ0aWNsZS5hbXBsaXR1ZGUgKiBNYXRoLnNpbigoKHBhcnRpY2xlLnggLyA1KSAqIE1hdGguUEkpIC8gMTgwKTtcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICAvLyBjYW52YXPliJ3mnJ/ljJZcbi8vICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzV2lkdGggKyB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzICogMiwgdGhpcy5jYW52YXNIZWlnaHQpO1xuXG4vLyAgICAgLy8gcGFydGljbGXjgpLmj4/nlLtcbi8vICAgICB0aGlzLmRyYXdQYXJ0aWNsZXMoKTtcblxuLy8gICAgIC8vIOeUu+mdouOBi+OCiea2iOOBiOOBn+OCieaWsOOBl+OBhHBhcnRpY2xl44Gr5beu44GX5pu/44GIXG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4vLyAgICAgICBpZiAocGFydGljbGUueCAtIHBhcnRpY2xlLnJhZGl1cyA+PSB0aGlzLmNhbnZhc1dpZHRoKSB7XG4vLyAgICAgICAgIHRoaXMucGFydGljbGVzW3BhcnRpY2xlLmlkXSA9IHRoaXMuY3JlYXRlUGFydGljbGUocGFydGljbGUuaWQsIHRydWUpO1xuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuXG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuLy8gICB9XG4vLyB9XG4vLyBuZXcgVmlzdWFsKCk7XG5cblxuXG5cbi8vIGRpdjIwMOeUn+aIkFxuLy8gY29uc3QgY291bnQgPSAyMDA7XG4vLyBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW1pbGt5LXdheScpO1xuLy8gbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvL2ZyYWdtZW505L2c5oiQXG5cbi8vIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbi8vICAgbGV0IG1pbGtleVdheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlXYXkuY2xhc3NOYW1lID0gXCJwLW1pbGt5LXdheVwiO1xuXG4vLyAgIGxldCBtaWxrZXlNb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleU1vdmUuY2xhc3NOYW1lID0gXCJtaWxreS1tb3ZlXCI7XG5cbi8vICAgbGV0IG1pbGtleVN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5U3Rhci5jbGFzc05hbWUgPSBcIm1pbGt5LXN0YXJcIjtcblxuLy8gICBtaWxrZXlNb3ZlLmFwcGVuZENoaWxkKG1pbGtleVN0YXIpO1xuLy8gICBtaWxrZXlXYXkuYXBwZW5kQ2hpbGQobWlsa2V5TW92ZSk7XG4vLyAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1pbGtleVdheSk7XG4vLyB9XG5cbi8vIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7IiwiLy8gZGF0YeWxnuaAp1xuLy8gZGF0YS1zYV9tYXJnaW7vvJrooajnpLrjgr/jgqTjg5/jg7PjgrDjgpLkvY3nva7jgafjgZrjgonjgZlcbi8vIGRhdGEtc2FfdHJpZ2dlcu+8muihqOekuuOCv+OCpOODn+ODs+OCsOOBruWfuua6luimgee0oOOCkuaMh+WumlxuLy8gZGF0YS1zYV9kZWxhee+8muihqOekuuOCv+OCpOODn+ODs+OCsOOCkuaZgumWk+OBp+OBmuOCieOBmVxuXG5cbmxldCBBbmltQ2xhc3MgPSAnanMtc2Nyb2xsLXNob3cnO1xubGV0IHNjcm9sbEFuaW1hdGlvblNob3dDbGFzcyA9ICdzaG93JztcbmxldCB0cmlnZ2VyTWFyZ2luRGVmYXVsdCA9IDIwMDtcblxubGV0IHNjcm9sbEFuaW1FbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEFuaW1DbGFzcyk7XG5sZXQgc2Nyb2xsQW5pbWF0aW9uRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEFuaW1FbG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRyaWdnZXJNYXJnaW4gPSB0cmlnZ2VyTWFyZ2luRGVmYXVsdDtcbiAgICAgICAgbGV0IGVsbSA9IHNjcm9sbEFuaW1FbG1baV07XG4gICAgICAgIGxldCBzaG93UG9zID0gMDtcblxuICAgICAgICAvLyBtYXJnaW7jgafjgZrjgonjgZnloLTlkIhcbiAgICAgICAgaWYgKGVsbS5kYXRhc2V0LmpzX2RhdGFtYXJnaW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdHJpZ2dlck1hcmdpbiA9IHBhcnNlSW50KGVsbS5kYXRhc2V0LmpzX21hcmdpbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2Vy44GM44GC44KL5aC05ZCIXG4gICAgICAgIGlmIChlbG0uZGF0YXNldC5qc190cmlnZ2VyKSB7XG4gICAgICAgICAgICBzaG93UG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbG0uZGF0YXNldC5qc190cmlnZ2VyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0cmlnZ2VyTWFyZ2luO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd1BvcyA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0cmlnZ2VyTWFyZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pmC6ZaT44Gn44Ga44KJ44GZ5aC05ZCIXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiBzaG93UG9zKSB7XG4gICAgICAgICAgICBsZXQgZGVsYXkgPSAoZWxtLmRhdGFzZXQuanNfZGVsYXkpID8gZWxtLmRhdGFzZXQuanNfZGVsYXkgOiAwO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxBbmltRWxtW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICB9LmJpbmQobnVsbCwgaSksIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2Nyb2xsQW5pbWF0aW9uRnVuYyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQW5pbWF0aW9uRnVuYyk7XG4iLCJsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXN0YXItd2F5Jyk7XG5sZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vZnJhZ21lbnTkvZzmiJBcblxuZm9yIChpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gIGxldCBjaGlsZHJlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaGlsZHJlbi5jbGFzc05hbWUgPSBcInN0YXJcIlxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG59XG5cbnBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cblxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgbGV0IGNvdW50ID0gMTAwLFxuLy8gICAgIGRpdixcbi8vICAgICBkaXZTdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXN0YXInKSxcbi8vICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuLy8gICAvLyByb3dzXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuXG4vLyAgICAgLy8gY29sdW1uc1xuLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQ7ICsraikge1xuLy8gICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgICBkaXYuY2xhc3NOYW1lID0gJ3N0YXInO1xuLy8gICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBkaXZTdGFyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbi8vIH07IiwibGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5qcy1zd2lwZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDIwLC8v44K544Op44Kk44OJ44Gu6ZaT44Gu6Led6ZuiXG4gICAgZWZmZWN0OiAnZmFkZScsXG4gICAgbG9vcDogdHJ1ZSwvL+acgOW+jOOBq+mBlOOBl+OBn+OCieWFiOmgreOBq+aIu+OCi1xuICAgIHNwZWVkOiAzMDAsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcblxuICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgZm9yY2VUb0F4aXM6IGZhbHNlLFxuICAgIH0sXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJywvL+ODmuODvOOCuOODjeODvOOCt+ODp+ODs+OBruimgee0oFxuICAgICAgICBjbGlja2FibGU6IHRydWUsLy/jgq/jg6rjg4Pjgq/jgavlj43lv5zjgZXjgZvjgotcbiAgICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLC8v44Oa44O844K444ON44O844K344On44Oz44Gr5by35byx44GM44Gk44GPXG4gICAgfSxcblxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfVxufSk7IiwiLy9UZXh0IEFuaW1hdGlvblxuY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXJvdGF0ZScpO1xuXG5mdW5jdGlvbiB0ZXh0RWZmZWN0KGFuaW1hdGlvbk5hbWUpIHtcblx0bGV0IHRleHQgPSBwYXJhZ3JhcGguaW5uZXJIVE1MLFxuXHRcdGNoYXJzID0gdGV4dC5sZW5ndGgsXG5cdFx0bmV3VGV4dCA9ICcnLFxuXHRcdGFuaW1hdGlvbiA9IGFuaW1hdGlvbk5hbWUsXG5cdFx0Y2hhcixcblx0XHRpO1xuXG5cdGZvciAoaSA9IDA7IGkgPCBjaGFyczsgaSArPSAxKSB7XG5cdFx0bmV3VGV4dCArPSAnPGk+JyArIHRleHQuY2hhckF0KGkpICsgJzwvaT4nO1xuXHR9XG5cblx0cGFyYWdyYXBoLmlubmVySFRNTCA9IG5ld1RleHQ7XG5cblx0bGV0IHdyYXBwZWRDaGFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJyksXG5cdFx0d3JhcHBlZENoYXJzTGVuID0gd3JhcHBlZENoYXJzLmxlbmd0aCxcblx0XHRqID0gMDtcblxuXHRmdW5jdGlvbiBhZGRFZmZlY3QoKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHR3cmFwcGVkQ2hhcnNbal0uY2xhc3NOYW1lID0gYW5pbWF0aW9uO1xuXHRcdFx0aiArPSAxO1xuXHRcdFx0aWYgKGogPCB3cmFwcGVkQ2hhcnNMZW4pIHtcblx0XHRcdFx0YWRkRWZmZWN0KCk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwKVxuXHR9XG5cblx0YWRkRWZmZWN0KCk7XG59O1xuXG50ZXh0RWZmZWN0KCdmbHktaW4tb3V0Jyk7IiwiLy8g6YqA5rKz6YmE6YGT44KS5Zu65a6a44GZ44KLXG5sZXQgdHJhaW5fcG9zID0galF1ZXJ5KFwiLmpzLXRyYWluXCIpLm9mZnNldCgpLnRvcDtcbmxldCB0cmFpbl9oZWlnaHQgPSBqUXVlcnkoXCIuanMtdHJhaW5cIikub3V0ZXJIZWlnaHQoKTtcblxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gdHJhaW5fcG9zIC0gNDApIHtcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmNzcyhcInBhZGRpbmctdG9wXCIsIHRyYWluX2hlaWdodCk7XG4gICAgICAgICAgICAkKFwiLmpzLXRyYWluXCIpLmFkZENsYXNzKFwiZml4ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiYm9keVwiKS5jc3MoXCJwYWRkaW5nLXRvcFwiLCAwKTtcbiAgICAgICAgICAgICQoXCIuanMtdHJhaW5cIikucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiLy8gSFRNTOOBrjxjYW52YXM+44K/44Kw44GrSmF2YVNjcmlwdOOCkuS9v+OBhOazou+8iOWhl+OCiu+8ieOCkuaPj+eUu+OBmeOCi1xuXG5sZXQgdW5pdCA9IDEwMCxcbiAgICBjYW52YXNMaXN0LCAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7phY3liJdcbiAgICBpbmZvID0ge30sIC8vIOWFqOOCreODo+ODs+ODkOOCueWFsemAmuOBruaPj+eUu+aDheWgsVxuICAgIGNvbG9yTGlzdDsgLy8g5ZCE44Kt44Oj44Oz44OQ44K544Gu6Imy5oOF5aCxXG5cbi8qKlxuICogSW5pdCBmdW5jdGlvbi5cbiAqIFxuICogSW5pdGlhbGl6ZSB2YXJpYWJsZXMgYW5kIGJlZ2luIHRoZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5mby5zZWNvbmRzID0gMDtcbiAgICBpbmZvLnQgPSAwO1xuICAgIGNhbnZhc0xpc3QgPSBbXTtcbiAgICBjb2xvckxpc3QgPSBbXTtcbiAgICAvLyBjYW52YXMx5YCL44KB44Gu6Imy5oyH5a6aXG4gICAgY2FudmFzTGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F2ZUNhbnZhc1wiKSk7XG4gICAgY29sb3JMaXN0LnB1c2goWycjZmZiZWY2JywgJyNmZmY1YmUnLCAnI2I2ZjdmZiddKTsvL+W3puOBjOS4gOeVquS4i+KGkuS4iuOBruazoumghlxuICAgIC8vIOWQhOOCreODo+ODs+ODkOOCueOBruWIneacn+WMllxuICAgIGZvcih2YXIgY2FudmFzSW5kZXggaW4gY2FudmFzTGlzdCkge1xuICAgICAgICB2YXIgY2FudmFzID0gY2FudmFzTGlzdFtjYW52YXNJbmRleF07XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDsgLy9DYW52YXPjga53aWR0aOOCkuOCpuOCo+ODs+ODieOCpuOBruW5heOBq+WQiOOCj+OBm+OCi1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNDUwOy8v5rOi44Gu6auY44GVXG4gICAgICAgIGNhbnZhcy5jb250ZXh0Q2FjaGUgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbiAgICAvLyDlhbHpgJrjga7mm7TmlrDlh6bnkIblkbzjgbPlh7rjgZdcbiAgICB1cGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZvcihsZXQgY2FudmFzSW5kZXggaW4gY2FudmFzTGlzdCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2FudmFzTGlzdFtjYW52YXNJbmRleF07XG4gICAgICAgIC8vIOWQhOOCreODo+ODs+ODkOOCueOBruaPj+eUu1xuICAgICAgICBkcmF3KGNhbnZhcywgY29sb3JMaXN0W2NhbnZhc0luZGV4XSk7XG4gICAgfVxuICAgIC8vIOWFsemAmuOBruaPj+eUu+aDheWgseOBruabtOaWsFxuICAgIGluZm8uc2Vjb25kcyA9IGluZm8uc2Vjb25kcyArIC4wMTQ7XG4gICAgaW5mby50ID0gaW5mby5zZWNvbmRzKk1hdGguUEk7XG4gICAgLy8g6Ieq6Lqr44Gu5YaN6LW35ZG844Gz5Ye644GXXG4gICAgc2V0VGltZW91dCh1cGRhdGUsIDM1KTtcbn1cblxuLyoqXG4gKiBEcmF3IGFuaW1hdGlvbiBmdW5jdGlvbi5cbiAqIFxuICogVGhpcyBmdW5jdGlvbiBkcmF3cyBvbmUgZnJhbWUgb2YgdGhlIGFuaW1hdGlvbiwgd2FpdHMgMjBtcywgYW5kIHRoZW4gY2FsbHNcbiAqIGl0c2VsZiBhZ2Fpbi5cbiAqL1xuZnVuY3Rpb24gZHJhdyhjYW52YXMsIGNvbG9yKSB7XG4gICAgLy8g5a++6LGh44GuY2FudmFz44Gu44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6XXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuY29udGV4dENhY2hlO1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruaPj+eUu+OCkuOCr+ODquOColxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvL+azouOBrumHjeOBquOCiuOCkuaPj+eUuyBkcmF3V2F2ZShjYW52YXMsIGNvbG9yW+aVsOWtl++8iOazouOBruaVsOOCkjDjgYvjgonmlbDjgYjjgabmjIflrprvvIldLCDpgI/pgY4sIOazouOBruW5heOBrnpvb20s5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMIClcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzBdLCAxLCAzLCAwKTsvLzAuNeKHkumAj+mBjuWFt+WQiDUwJeOAgTPih5LmlbDlrZfjgYzlpKfjgY3jgYTjgbvjganms6LjgYzjgarjgaDjgonjgYtcbiAgICBkcmF3V2F2ZShjYW52YXMsIGNvbG9yWzFdLCAxLCAyLCAyNTApO1xuICAgIGRyYXdXYXZlKGNhbnZhcywgY29sb3JbMl0sIDEsIDIuNSwgMTAwKTtcbn1cblxuLyoqXG4qIOazouOCkuaPj+eUu1xuKiBkcmF3V2F2ZSjoibIsIOS4jemAj+aYjuW6piwg5rOi44Gu5bmF44Guem9vbSwg5rOi44Gu6ZaL5aeL5L2N572u44Gu6YGF44KMKVxuKi9cbmZ1bmN0aW9uIGRyYXdXYXZlKGNhbnZhcywgY29sb3IsIGFscGhhLCB6b29tLCBkZWxheSkge1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmNvbnRleHRDYWNoZTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yOy8v5aGX44KK44Gu6ImyXG4gICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7IC8v44OR44K544Gu6ZaL5aeLXG4gICAgZHJhd1NpbmUoY2FudmFzLCBpbmZvLnQgLyAwLjUsIHpvb20sIGRlbGF5KTtcbiAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKyAxMCwgY2FudmFzLmhlaWdodCk7IC8v44OR44K544KSQ2FudmFz44Gu5Y+z5LiL44G4XG4gICAgY29udGV4dC5saW5lVG8oMCwgY2FudmFzLmhlaWdodCk7IC8v44OR44K544KSQ2FudmFz44Gu5bem5LiL44G4XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKSAvL+ODkeOCueOCkumWieOBmOOCi1xuICAgIGNvbnRleHQuZmlsbCgpOyAvL+azouOCkuWhl+OCiuOBpOOBtuOBmVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGRyYXcgc2luZVxuICogXG4gKiBUaGUgc2luZSBjdXJ2ZSBpcyBkcmF3biBpbiAxMHB4IHNlZ21lbnRzIHN0YXJ0aW5nIGF0IHRoZSBvcmlnaW4uIFxuICogZHJhd1NpbmUo5pmC6ZaTLCDms6Ljga7luYXjga56b29tLCDms6Ljga7plovlp4vkvY3nva7jga7pgYXjgowpXG4gKi9cbmZ1bmN0aW9uIGRyYXdTaW5lKGNhbnZhcywgdCwgem9vbSwgZGVsYXkpIHtcbiAgICBsZXQgeEF4aXMgPSBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQvMik7XG4gICAgbGV0IHlBeGlzID0gMDtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0Q2FjaGU7XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHggYW5kIHksIHN0YXJ0aW5nIGF0IDAsMCBhbmQgdHJhbnNsYXRpbmcgdG8gdGhlIG9yaWdpbiBvblxuICAgIC8vIHRoZSBjYW52YXMuXG4gICAgbGV0IHggPSB0OyAvL+aZgumWk+OCkuaoquOBruS9jee9ruOBqOOBmeOCi1xuICAgIGxldCB5ID0gTWF0aC5zaW4oeCkvem9vbTtcbiAgICBjb250ZXh0Lm1vdmVUbyh5QXhpcywgdW5pdCp5K3hBeGlzKTsgLy/jgrnjgr/jg7zjg4jkvY3nva7jgavjg5HjgrnjgpLnva7jgY9cblxuICAgIC8vIExvb3AgdG8gZHJhdyBzZWdtZW50cyAo5qiq5bmF44Gu5YiG44CB5rOi44KS5o+P55S7KVxuICAgIGZvciAoaSA9IHlBeGlzOyBpIDw9IGNhbnZhcy53aWR0aCArIDEwOyBpICs9IDEwKSB7XG4gICAgICAgIHggPSB0KygteUF4aXMraSkvdW5pdC96b29tO1xuICAgICAgICB5ID0gTWF0aC5zaW4oeCAtIGRlbGF5KS8zO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhpLCB1bml0KnkreEF4aXMpO1xuICAgIH1cbn1cblxuaW5pdCgpO1xuIiwiY29uc3QgZHVyYXRpb24gPSAxMDAwO1xubGV0IHN0YXJ0VGltZTsvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7plovlp4vmmYLplpPjgpLmoLzntI3jgZnjgovlpInmlbBcbmxldCBzdGFydFNjcm9sbFk7Ly8g44Ki44OL44Oh44O844K344On44Oz44Gu6ZaL5aeL5pmC44Gu44K544Kv44Ot44O844Or5L2N572u44KS5qC857SN44GZ44KL5aSJ5pWwXG5sZXQgdGFyZ2V0U2Nyb2xsWTsvLyDjgr/jg7zjgrLjg4Pjg4jjga7jgrnjgq/jg63jg7zjg6vkvY3nva7jgpLmoLzntI3jgZnjgovlpInmlbBcblxuLyoqXG4gKiDjgqTjg7zjgrjjg7PjgrDplqLmlbBcbiAqIEBwYXJhbSB4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5jb25zdCBlYXNlT3V0Q3ViaWMgPSAoeCkgPT4ge1xuICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB4LCAzKTtcbn07XG5cbi8qKlxuICog44Ki44OL44Oh44O844K344On44Oz44Gu5ZCE44OV44Os44O844Og44Gn44Gu5Yem55CGXG4gKi9cbmNvbnN0IHNjcm9sbEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbik7Ly8g54++5Zyo5pmC6ZaT44Gu57aZ57aa5pmC6ZaT44Gr5a++44GZ44KL6YCy5o2X5bqm44KS566X5Ye6XG4gIGNvbnN0IHNjcm9sbFkgPVxuICAgIHN0YXJ0U2Nyb2xsWSArXG4gICAgKHRhcmdldFNjcm9sbFkgLSBzdGFydFNjcm9sbFkpICogZWFzZU91dEN1YmljKHByb2dyZXNzKTtcbiAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkpO1xuXG4gIGlmIChwcm9ncmVzcyA8IDEpIHsvLyDpgLLmjZfluqbjgYwx5pyq5rqA77yIPTEwMCXjgafjga/jgarjgYTvvInloLTlkIjjgIHoh6rliIboh6rouqvjgpLlkbzjgbPlh7rjgZfjgIHnubDjgorov5TjgZlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsQW5pbWF0aW9uKTtcbiAgfVxufTtcblxuLy8g44OI44OD44OX44G45oi744KL6KaB57Sg44KS44Kv44Oq44OD44Kv44GX44Gf44KJ44K544Kv44Ot44O844Or44Ki44OL44Oh44O844K344On44Oz5a6f6KGMXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXj0nIyddXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhcmdldElkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIik7Ly8g44K/44O844Ky44OD44OI44Gu6KaB57Sg44KS5Y+W5b6XXG4gICAgaWYgKHRhcmdldElkID09PSBcIiNcIikge1xuICAgICAgdGFyZ2V0U2Nyb2xsWSA9IDA7Ly8gaHJlZj1cIiNcIuOBruWgtOWQiOOBr+ODmuODvOOCuOODiOODg+ODl+OBquOBruOBpzBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0SWQpOy8vIOOCv+ODvOOCsuODg+ODiOOBruimgee0oFxuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDsvLyDjg5rjg7zjgrjlhajkvZPjga7pq5jjgZVcblxuICAgICAgaWYgKHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wICsgd2luZG93LmlubmVySGVpZ2h0ID4gZG9jdW1lbnRIZWlnaHQpIHsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZ5Y+W5b6XXG4gICAgICAgIHRhcmdldFNjcm9sbFkgPSBkb2N1bWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDsvLyDjgr/jg7zjgrLjg4Pjg4jjga5Z5bqn5qiZK+OCpuOCo+ODs+ODieOCpumrmOOBleOBjOODmuODvOOCuOWFqOS9k+OBrumrmOOBleOCkui2heOBiOOBn+OBqOOBje+8iO+8neOBneOBk+OBvuOBp+OCueOCr+ODreODvOODq+OBp+OBjeOBquOBhO+8ieOBr+OAgeODmuODvOOCuOS4gOeVquOBl+OBn+OBvuOBp+OBruS9jee9ruOCkuWPluW+l1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0U2Nyb2xsWSA9IHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wOy8vIOOCv+ODvOOCsuODg+ODiOOBrlnluqfmqJlcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTsvLyBEYXRlLm5vdygp44Gn6ZaL5aeL5pmC6ZaT44KS44K744OD44OIXG4gICAgc3RhcnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7Ly8g54++5Zyo44Gu44K544Kv44Ot44O844Or5L2N572u44KS44K744OD44OIXG4gICAgc2Nyb2xsQW5pbWF0aW9uKCk7XG4gIH0pO1xufSk7IiwiXG53aW5kb3cuX3VhYyA9IHt9OyAvLyBkZWZpbmUgX3VhYyBhcyBhIGdsb2JhbCBvYmplY3RcbnZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgdmVyID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG5cbi8vIGNoZWNrIGJyb3dzZXIgdmVyc2lvblxuX3VhYy5icm93c2VyID0gKGZ1bmN0aW9uKCl7XG4gIGlmICh1YS5pbmRleE9mKCdlZGdlJykgIT09IC0xKSByZXR1cm4gJ2VkZ2UnOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVkZ2VcbiAgZWxzZSBpZiAodWEuaW5kZXhPZihcImllbW9iaWxlXCIpICE9PSAtMSkgICAgICByZXR1cm4gJ2llbW9iaWxlJzsgICAgICAgICAvLyBpZU1vYmlsZVxuICBlbHNlIGlmICh1YS5pbmRleE9mKCd0cmlkZW50LzcnKSAhPT0gLTEpICAgICByZXR1cm4gJ2llMTEnOyAgICAgICAgICAgICAvLyBpZTExXG4gIGVsc2UgaWYgKHVhLmluZGV4T2YoXCJtc2llXCIpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdvcGVyYScpID09PSAtMSl7XG4gICAgaWYgICAgICAodmVyLmluZGV4T2YoXCJtc2llIDYuXCIpICAhPT0gLTEpIHJldHVybiAnaWU2JzsgICAgICAgICAgICAgIC8vIGllNlxuICAgIGVsc2UgaWYgKHZlci5pbmRleE9mKFwibXNpZSA3LlwiKSAgIT09IC0xKSByZXR1cm4gJ2llNyc7ICAgICAgICAgICAgICAvLyBpZTdcbiAgICBlbHNlIGlmICh2ZXIuaW5kZXhPZihcIm1zaWUgOC5cIikgICE9PSAtMSkgcmV0dXJuICdpZTgnOyAgICAgICAgICAgICAgLy8gaWU4XG4gICAgZWxzZSBpZiAodmVyLmluZGV4T2YoXCJtc2llIDkuXCIpICAhPT0gLTEpIHJldHVybiAnaWU5JzsgICAgICAgICAgICAgIC8vIGllOVxuICAgIGVsc2UgaWYgKHZlci5pbmRleE9mKFwibXNpZSAxMC5cIikgIT09IC0xKSByZXR1cm4gJ2llMTAnOyAgICAgICAgICAgICAvLyBpZTEwXG4gIH1cbiAgZWxzZSBpZiAodWEuaW5kZXhPZignY2hyb21lJykgICE9PSAtMSAmJiB1YS5pbmRleE9mKCdlZGdlJykgPT09IC0xKSAgIHJldHVybiAnY2hyb21lJzsgICAgLy8gQ2hyb21lXG4gIGVsc2UgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpICAhPT0gLTEgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPT09IC0xKSByZXR1cm4gJ3NhZmFyaSc7ICAgIC8vIFNhZmFyaVxuICBlbHNlIGlmICh1YS5pbmRleE9mKCdvcGVyYScpICAgIT09IC0xKSByZXR1cm4gJ29wZXJhJzsgICAgICAgICAgICAgICAgICAvLyBPcGVyYVxuICBlbHNlIGlmICh1YS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xKSByZXR1cm4gJ2ZpcmVmb3gnOyAgICAgICAgICAgICAgICAvLyBGSXJlZm94XG4gIGVsc2UgcmV0dXJuICd1bmtub3duX2Jyb3dzZXInO1xufSkoKTtcblxuLy8gY2hlY2sgZGV2aWNlXG5fdWFjLmRldmljZSA9IChmdW5jdGlvbigpe1xuICBpZih1YS5pbmRleE9mKCdpcGhvbmUnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignaXBvZCcpICE9PSAtMSApIHJldHVybiAnaXBob25lJztcbiAgZWxzZSBpZiAodWEuaW5kZXhPZignaXBhZCcpICAgICE9PSAtMSkgcmV0dXJuICdpcGFkJztcbiAgZWxzZSBpZiAodWEuaW5kZXhPZignYW5kcm9pZCcpICE9PSAtMSkgcmV0dXJuICdhbmRyb2lkJztcbiAgZWxzZSBpZiAodWEuaW5kZXhPZignd2luZG93cycpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdwaG9uZScpICE9PSAtMSkgcmV0dXJuICd3aW5kb3dzX3Bob25lJztcbiAgZWxzZSByZXR1cm4gJyc7XG59KSgpO1xuXG4vLyBjaGVjayBpb3MgdmVyc2lvblxuX3VhYy5pb3NWZXIgPSAoZnVuY3Rpb24oKXtcbiAgaWYgKCAvaVAoaG9uZXxvZHxhZCkvLnRlc3QoIG5hdmlnYXRvci5wbGF0Zm9ybSApICkge1xuICAgIHZhciB2ID0gKG5hdmlnYXRvci5hcHBWZXJzaW9uKS5tYXRjaCgvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8pO1xuICAgIHZhciB2ZXJzaW9ucyA9IFtwYXJzZUludCh2WzFdLCAxMCksIHBhcnNlSW50KHZbMl0sIDEwKSwgcGFyc2VJbnQodlszXSB8fCAwLCAxMCldO1xuICAgIHJldHVybiB2ZXJzaW9uc1swXTtcbiAgfVxuICBlbHNlIHJldHVybiAwO1xufSkoKTtcbl91YWMuaXNJRSA9IChfdWFjLmJyb3dzZXIuc3Vic3RyKDAsIDIpID09PSAnaWUnICYmIF91YWMuYnJvd3NlciAhPT0gJ2llbW9iaWxlJyk7XG5fdWFjLmlzaU9TID0gKF91YWMuZGV2aWNlID09PSAnaXBob25lJyB8fCBfdWFjLmRldmljZSA9PT0gJ2lwYWQnKTtcbl91YWMuaXNNb2JpbGUgPSAodWEuaW5kZXhPZignbW9iaScpICE9PSAtMSB8fCBfdWFjLmRldmljZSA9PT0gJ2lwaG9uZScgfHwgKF91YWMuZGV2aWNlID09PSAnd2luZG93c19waG9uZScgJiYgdWEuaW5kZXhPZignd3BkZXNrdG9wJykgPT09IC0xKSB8fCBfdWFjLmRldmljZSA9PT0gJ2llbW9iaWxlJyk7XG5fdWFjLmlzVGFibGV0ID0gKF91YWMuZGV2aWNlID09PSAnaXBhZCcgfHwgKF91YWMuZGV2aWNlID09PSAnYW5kcm9pZCcgJiYgIV91YWMuaXNNb2JpbGUpKTtcbl91YWMuaXNUb3VjaCAgPSAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KTtcbl91YWMuaXNNb2Rlcm4gPSAhKF91YWMuYnJvd3NlciA9PT0gJ2llNicgfHwgX3VhYy5icm93c2VyID09PSAnaWU3JyB8fCBfdWFjLmJyb3dzZXIgPT09ICdpZTgnIHx8IF91YWMuYnJvd3NlciA9PT0gJ2llOScgfHwgKDAgPCBfdWFjLmlvc1ZlciAmJiBfdWFjLmlvc1ZlciA8IDgpKTtcblxuLy8gU2V0IHRoZSByZXN1bHRzIGFzIGNsYXNzIG5hbWVzIG9mIHRoZSBodG1sXG52YXIgaG9tZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjbGFzc1N0ciA9ICcgJztcbiAgY2xhc3NTdHIgKz0gKF91YWMuYnJvd3NlciAhPT0gJycpID8gX3VhYy5icm93c2VyICsgXCIgXCIgOiAnYnJvd3Nlci11bmtub3duICcsXG4gICAgY2xhc3NTdHIgKz0gKF91YWMuZGV2aWNlICAhPT0gJycpID8gX3VhYy5kZXZpY2UgKyBcIiBcIiAgOiAnZGV2aWNlLXVua25vd24gJyxcbiAgICBjbGFzc1N0ciArPSAoX3VhYy5pc01vYmlsZSkgPyAnbW9iaWxlICcgOiAnZGVza3RvcCAnLFxuICAgIGNsYXNzU3RyICs9IChfdWFjLmlzVG91Y2gpID8gJ3RvdWNoICcgIDogJ21vdXNlICcsXG4gICAgY2xhc3NTdHIgKz0gKF91YWMuaXNpT1MpID8gJ2lvcyAnIDogJycsXG4gICAgY2xhc3NTdHIgKz0gKF91YWMuaXNJRSkgPyAnaWUgJyA6ICcnLFxuICAgIGNsYXNzU3RyICs9IChfdWFjLmlzTW9kZXJuKSA/ICdtb2Rlcm4gJyA6ICdvbGQgJztcbiAgcmV0dXJuIGNsYXNzU3RyO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9IGhvbWVDbGFzcygpO1xufSk7XG4iLCIvKipcbiAqIEBtb2R1bGVzIDogbm9kZV9tb2R1bGVz44OV44Kp44Or44OA44G+44Gn44Gu57W25a++44OR44K544Gu44Ko44Kk44Oq44Ki44K5XG4gKiB3ZWJwYWNrLmNvbmZpZy5qc+OBq+OBpuWumue+qeOBl+OBpuOBhOOCi1xuICovXG5cbi8vU1ZH44K544OX44Op44Kk44OI44KSSUXjgafkvb/nlKjjgZnjgovjgZ/jgoHjga7jg6njgqTjg5bjg6njg6pcbi8vIGltcG9ydCAnQG1vZHVsZXMvc3ZneHVzZSc7XG5cbi8v44OW44Op44Km44K25Yik5a6a44Gu44Gf44KB44Op44Kk44OW44Op44OqXG5pbXBvcnQgJy4vbGliL2JfYnJvd3Nlcl9zd2l0Y2hlci5qcyc7XG5cbmltcG9ydCAnLi9jb21tb24vbXlUcmFpbi5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215VGV4dFJvdGF0ZS5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215QnViYmx5QnV0dG9uLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlIZWFkZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teUhvdmVyJztcbmltcG9ydCAnLi9jb21tb24vc21vb3RoLXNjcm9sbCc7XG5pbXBvcnQgJy4vY29tbW9uL215TWlsa3lXYXknO1xuaW1wb3J0ICcuL2NvbW1vbi9teVN3aXBlci5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215U2Nyb2xsU2hvdy5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL2RhdGEtc3BsaXR0aW5nJztcbmltcG9ydCAnLi9jb21tb24vbXlTdGFyV2F5JztcbmltcG9ydCAnLi9jb21tb24vbXlXYXZlLmpzJztcbmltcG9ydCAnLi9jb21tb24vdGVzdC5qcyc7XG5cblxuLy8gaW1wb3J0ICcuL2NvbW1vbidcbi8vIGltcG9ydCAnLi9jb21tb24vbXlMb2FkaW5nLmpzJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlQYXJ0aWNsZVJvdW5kJztcbi8vIGltcG9ydCAnLi9jb21tb24vbXlQYXJ0aWNsZUJhbmcnOyJdLCJzb3VyY2VSb290IjoiIn0=
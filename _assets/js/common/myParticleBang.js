// big-bang-particle
const Dots = function () {
  this.canvas;
  this.ctx;
  this.x;
  this.y;
  this.r;
  this.sx;
  this.sy;
};

Dots.prototype = {
  init: function (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.r = Math.random() * 3 + 1;
    this.sx = Math.random() * 30 - 15;
    this.sy = Math.random() * 20 - 10;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgba(255,255,255, .2)";

    this.ctx.shadowColor = 'rgba(210,189,255)';
    this.ctx.shadowOffsetX = -10;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = 20;

    this.ctx.fill();
    this.ctx.closePath();
  },

  update: function () {
    this.x = this.x + this.sx;
    this.y = this.y + this.sy;

    if (this.x < 0 || this.x > this.canvas.width) {
      this.init(this.canvas);
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.init(this.canvas);
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r + 5, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
  },
};


var Main = function () {
  var dotsArr = [],

    maxDotsNum = 70,
    dotsNum = 50,  // 始点の数
    overNum = 0,

    bg = document.getElementById('p-particle--bang'),
    canvas = document.getElementById('canvas-particle-bang'),
    ctx = canvas.getContext('2d'),

    width = parseInt(window.innerWidth),
    height = parseInt(window.innerHeight),
    area = width * height,
    cssText = 'width: ' + width + 'px; height: ' + height + 'px;';

  // 背景設置
  bg.setAttribute('style', cssText);
  canvas.setAttribute('style', cssText);
  canvas.width = (width * 2).toString();
  canvas.height = (height * 2).toString();

  //開始点の生成
  for (var i = 0; i < dotsNum; i++) {
    var dot = new Dots();
    dotsArr.push(dot);
    dot.init(canvas);
  }

  // 毎秒
  addDot()
  function addDot() {
    createDot()
    if (dotsNum > maxDotsNum) { return }
    setTimeout(function () {
      addDot()
    }, 5000)
  }



  function createDot() {
    var dot = new Dots();
    dotsArr.push(dot);
    dotsNum += 1;
    dot.init(canvas);
  };

  var requestAnimFrame =
    requestAnimationFrame ||
    webkitRequestAnimationFrame ||
    oRequestAnimationFrame ||
    msRequestAnimationFrame;
  requestAnimFrame(animateUpdate);

  function animateUpdate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (dotsNum > maxDotsNum) {
      overNum = dotsNum - maxDotsNum;
    }

    for (var i = overNum; i < dotsNum; i++) {
      dotsArr[i].update();
    }
    requestAnimFrame(animateUpdate);
  }
}();
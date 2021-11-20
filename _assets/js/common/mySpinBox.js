// Author: Hoang Tran (https://www.facebook.com/profile.php?id=100004848287494)
// Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

// You can change global variables here:
let radius = 360; // how big of the radius
let autoRotate = true; // auto rotate or not
let rotateSpeed = -60; // unit: seconds/360 degrees
let imgWidth = 300; // width of images (unit: px)
let imgHeight = 200; // height of images (unit: px)


// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 1000);

let oDrag = document.getElementById('drag-container');
let oSpin = document.getElementById('spin-container');
let aImg = oSpin.getElementsByTagName('img');
let aVid = oSpin.getElementsByTagName('video');
let aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
oSpin.style.width = imgWidth + "px";
oSpin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
    for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
    if(tY > 180) tY = 180;
    if(tY < 0) tY = 0;

    // Apply the angle
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
    oSpin.style.animationPlayState = (yes?'running':'paused');
}

let sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
    let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    oSpin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// setup events
document.onpointerdown = function (e) {
    clearInterval(oDrag.timer);
    e = e || window.event;
    let sX = e.clientX,
        sY = e.clientY;

    this.onpointermove = function (e) {
    e = e || window.event;
    let nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(oDrag);
    sX = nX;
    sY = nY;
};

    this.onpointerup = function (e) {
    oDrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
        applyTranform(oDrag);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(oDrag.timer);
            playSpin(true);
        }
    }, 17);
    this.onpointermove = this.onpointerup = null;
    };

    return false;
};

document.onmousewheel = function(e) {
    e = e || window.event;
    let d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
};

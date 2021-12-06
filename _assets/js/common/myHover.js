const myList = document.querySelectorAll('.js-marker');
const moonMiniSize = 570;
// ロードしたとき
window.addEventListener('load', () => {
  let x = document.body.clientWidth;
  if (x >= moonMiniSize) {
    myList.forEach((item) => {
      item.addEventListener('mousemove', (e) => {
        moveIndicator(e.target);
      });
    });
  }
});


// resizeしたとき
window.addEventListener("resize", resize());

function resize() {
  if (window.matchMedia(`(min-width: ${moonMiniSize}px)`).matches) {
    myList.forEach((item) => {
      item.addEventListener('mousemove', (e) => {
        moveIndicator(e.target);
      });
    });
  } else {
    removeIndicator();
  }
}

// window.addEventListener('resize', () => {
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
const marker = document.getElementById('js-marker');
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
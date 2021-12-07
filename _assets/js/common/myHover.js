const myList = document.querySelectorAll('.js-marker');
const moonMiniSize = 570;
const mediaQueryList = window.matchMedia(`(min-width: ${moonMiniSize}px)`);

const listener = (mediaQueryList) => {
  if (mediaQueryList.matches) {//pc
    myList.forEach((item) => {
      item.addEventListener('mousemove', (e) => {
        moveIndicator(e.target);
      });
    });
  } else {//sp
    removeIndicator();
  }
};

// リスナー登録
mediaQueryList.addEventListener("change", listener);

// 初期化処理
listener(mediaQueryList);



// ----------------------------------------------------
// 関数
// ----------------------------------------------------
function moveIndicator(e) {
  let marker = document.getElementById('js-marker');
  marker.style.opacity = 1;
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

function removeIndicator() {
  let marker = document.getElementById('js-marker');
  marker.style.opacity = '';
  marker.style.left = '';
  marker.style.width = '';
}

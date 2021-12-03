// スクロール時にホバーを無効にする
let myBody = document.body,
  timer;

window.addEventListener('scroll', function () {
  clearTimeout(timer);
  if (!myBody.classList.contains('disable-hover')) {
    myBody.classList.add('disable-hover')
  }

  timer = setTimeout(function () {
    myBody.classList.remove('disable-hover')
  }, 500);
}, false);


// CSSに次のコードを追加する
// .disable-hover {
//   pointer-events: none;
// }
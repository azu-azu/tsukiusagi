// mouseoverしたらmoveIndecator呼び出し
const list = document.querySelectorAll('.js-marker');
list.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    marker.style.opacity = 1;
    moveIndicator(e.target);
  })
})

list.forEach((item) => item.addEventListener('mouseover', activeLink));
list.forEach((item) => item.addEventListener('mouseleave', removeActive));

// クリックしたら透明にする
list.forEach((item) => item.addEventListener("click", () => {
  marker.style.opacity = 0;
}));



// 関数
const marker = document.querySelector('#marker');
function moveIndicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
  console.log(e.offsetWidth);
}

function activeLink() {
  list.forEach((item) => item.classList.remove('marker-active'));
  this.classList.add('marker-active');
}

function removeActive() {
  list.forEach((item) => item.classList.remove('marker-active'));
}
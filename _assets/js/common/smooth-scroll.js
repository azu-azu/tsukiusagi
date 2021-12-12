const duration = 1000;
let startTime;// アニメーションの開始時間を格納する変数
let startScrollY;// アニメーションの開始時のスクロール位置を格納する変数
let targetScrollY;// ターゲットのスクロール位置を格納する変数

/**
 * イージング関数
 * @param x
 * @returns {number}
 */
const easeOutCubic = (x) => {
  return 1 - Math.pow(1 - x, 3);
};

/**
 * アニメーションの各フレームでの処理
 */
const scrollAnimation = () => {
  const progress = Math.min(1, (Date.now() - startTime) / duration);// 現在時間の継続時間に対する進捗度を算出
  const scrollY =
    startScrollY +
    (targetScrollY - startScrollY) * easeOutCubic(progress);
  window.scrollTo(0, scrollY);

  if (progress < 1) {// 進捗度が1未満（=100%ではない）場合、自分自身を呼び出し、繰り返す
    requestAnimationFrame(scrollAnimation);
  }
};

const myTotop = document.getElementById('js-totop');

// トップへ戻る要素をクリックしたらスクロールアニメーション実行
myTotop.addEventListener("click", (e) => {
  e.preventDefault();

  const targetId = e.target.getAttribute("href");// ターゲットの要素を取得
  if (targetId === "#") {
    targetScrollY = 0;// href="#"の場合はページトップなので0
  } else {
    const targetElement = document.querySelector(targetId);// ターゲットの要素
    const documentHeight = document.body.clientHeight;// ページ全体の高さ

    if (targetElement.offsetTop + window.innerHeight > documentHeight) {// ターゲットのY座標取得
      targetScrollY = documentHeight - window.innerHeight;// ターゲットのY座標+ウィンドウ高さがページ全体の高さを超えたとき（＝そこまでスクロールできない）は、ページ一番したまでの位置を取得
    } else {
      targetScrollY = targetElement.offsetTop;// ターゲットのY座標
    }
  }
  startTime = Date.now();// Date.now()で開始時間をセット
  startScrollY = window.scrollY;// 現在のスクロール位置をセット
  scrollAnimation();
});
// document.querySelectorAll("a[href^='#']").forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.preventDefault();

//     const targetId = e.target.getAttribute("href");// ターゲットの要素を取得
//     if (targetId === "#") {
//       targetScrollY = 0;// href="#"の場合はページトップなので0
//     } else {
//       const targetElement = document.querySelector(targetId);// ターゲットの要素
//       const documentHeight = document.body.clientHeight;// ページ全体の高さ

//       if (targetElement.offsetTop + window.innerHeight > documentHeight) {// ターゲットのY座標取得
//         targetScrollY = documentHeight - window.innerHeight;// ターゲットのY座標+ウィンドウ高さがページ全体の高さを超えたとき（＝そこまでスクロールできない）は、ページ一番したまでの位置を取得
//       } else {
//         targetScrollY = targetElement.offsetTop;// ターゲットのY座標
//       }
//     }
//     startTime = Date.now();// Date.now()で開始時間をセット
//     startScrollY = window.scrollY;// 現在のスクロール位置をセット
//     scrollAnimation();
//   });
// });
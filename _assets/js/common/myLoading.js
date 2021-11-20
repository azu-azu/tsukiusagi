window.addEventListener("DOMContentLoaded", function () {
    // タブに対してクリックイベントを適用
    const myElm = document.getElementsByClassName("js-loading");
    for (let i = 0; i < myElm.length; i++) {
        setTimeout(() => {
            myElm[i].classList.add('is-show');
        }, 100);
    }
});
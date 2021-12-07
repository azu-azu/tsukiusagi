// スクロールしたら関数呼び出し
window.addEventListener('scroll', () => {
	headerFade();
	headerBackDown();
});

// ロードしたら関数呼び出し
window.addEventListener('load', () => {
	headerFade();
	headerBackDown();
});

// ウィンドウ幅が切り替わったら関数呼び出し
window.addEventListener('resize', () => {
	resizeRemoveClass();//is-open, is-closeを外す
	bodyFixedNone();//bodyのfixedを外す
});


// **
// ハンバーガーボタン：タッチ or クリック
// **
const hamburger = document.getElementById('js-hamburger');
const hamburgerClass = hamburger.classList;
const myBody = document.body;
const myBodyClass = myBody.classList;

let touch_event = window.ontouchstart;
let touch_points = navigator.maxTouchPoints;

if (touch_event !== undefined && 0 < touch_points) {
	hamburger.addEventListener('touchstart', function () {
		hamburgerClick();
	});
} else {
	hamburger.addEventListener('click', function () {
		hamburgerClick();
	});
}


// **
// ナビゲーションのリストをクリックしたらis-openを消す：タッチ or クリック
// **
const navList = document.querySelectorAll(".js-marker");
if (touch_event !== undefined && 0 < touch_points) {
	navList.forEach((elm) => {
		elm.addEventListener('touchstart', () => {
			removeOpen();// is-openを外す
			addClose();// is-closeを付ける
			bodyFixedNone();//bodyのfixedを外す
		});
	});
} else {
	navList.forEach((elm) => {
		elm.addEventListener('click', () => {
			removeOpen();// is-openを外す
			addClose();// is-closeを付ける
			bodyFixedNone();//bodyのfixedを外す
		});
	});
}











// ----------------------------------------------------
// 関数
// ----------------------------------------------------
// **
// p-header:スクロールしたら消える
// **
const myHeader = document.getElementById("js-header");
const headerClass = myHeader.classList;
const headerFadePosition = 50;//スクロールしてページトップから〇〇に達したとき

const headerFade = () => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop >= headerFadePosition) {
		headerClass.add('is-fade');
	} else {
		headerClass.remove('is-fade');
	};
};

// **
// p-header-back:スクロール途中で出現
// **
const layoutHeader = document.getElementById('js-l-header');
const layoutHeaderClass = layoutHeader.classList;

const headerBackDown = () => {
	let myTarget = document.getElementById("works");
	let rect = myTarget.getBoundingClientRect();
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let targetTop = rect.top + scrollTop;

	if (scrollTop >= targetTop) {
		headerClass.remove("UpMove", 'p-header--top', "is-fade");// クラス名除去
		headerClass.add('DownMove', 'p-header--back');// クラス名追加
		layoutHeaderClass.add('back');// クラス名追加

	} else {
		if (headerClass.contains("DownMove")) {//すでにクラス名がついていたら
			layoutHeaderClass.remove('back');// クラス名除去
			headerClass.remove('DownMove', 'p-header--back');// クラス名除去
			headerClass.add('UpMove', 'p-header--top');// クラス名追加
		}
	}
};


const hamburgerClick = () => {
	let myPosition = window.pageYOffset || document.documentElement.scrollTop;

	if (hamburgerClass.contains("is-close")) {//is-closeがあったら
		removeClose();//is-closeを外す
	} else {

		if (hamburgerClass.contains("is-open")) {//is-openがあったら
			const scrollY = myBody.style.top;// スクロール位置の記憶
			removeOpen();// is-openを外す
			addClose();// is-closeを付ける
			bodyFixedNone();// bodyのfixedを外す
			window.scrollTo(0, parseInt(scrollY || '0') * -1);// スクロール位置の保持
		}
	};

	// is-closeもis-openもなかったら
	if (!hamburgerClass.contains("is-close") && !hamburgerClass.contains("is-open")) {
		addOpen();//is-openをつける
		myBody.style.position = "fixed";
		myBody.style.top = `-${myPosition}px`;
	};
};


// **
//ウィンドウ幅が切り替わったら、is-open||is-closeを外す
// **
const moonMiniSize = 570;
const resizeRemoveClass = () => {
	let x = document.body.clientWidth;
	if (x >= moonMiniSize) {
		if (hamburgerClass.contains("is-open")) {//is-openがあったら
			removeOpen();// is-openを外す
		} else {
			if (hamburgerClass.contains("is-close")) {//is-closeがあったら
				removeClose();//is-closeを外す
			}
		}
	}
};


// **
// is-closeを外す
// **
const removeClose = () => {
	hamburgerClass.remove('is-close');
	myBodyClass.remove('is-close');
};

// **
// is-closeを付ける
// **
const addClose = () => {
	hamburgerClass.add('is-close');
	myBodyClass.add('is-close');
};

// **
// is-openを外す
// **
const removeOpen = () => {
	hamburgerClass.remove('is-open');
	myBodyClass.remove('is-open');
};

// **
// is-openを付ける
// **
const addOpen = () => {
	hamburgerClass.add('is-open');
	myBodyClass.add('is-open');
};


// **
// bodyのfixedを外す
// **
const bodyFixedNone = () => {
	myBody.style.position = "";
	myBody.style.top = "";
	myBody.style.paddingTop = "";
};





// // ウィンドウ幅が切り替わったとき
// const moonMiniSize = 570;
// jQuery(function ($) {
// 	$(window).resize(function () {
// 		let x = $(window).width();
// 		let y = moonMiniSize;
// 		if (x >= y) {
// 			$("#js-hamburger").removeClass("is-open");
// 			$("body").removeClass("is-open");
// 			// $("#js-hamburger").addClass("is-close");
// 			// $("body").addClass("is-close");

// 			bodyFixedNone();//bodyのfixedを外す
// 		}
// 		else {
// 		}
// 	});
// })



// **
// ハンバーガーボタン：クリックイベント
// **
// const hamburger = document.getElementById('js-hamburger');
// const hamburgerClass = hamburger.classList;
// const myBody = document.body;
// const myBodyClass = myBody.classList;


// hamburger.addEventListener('click', () => {
// 	let myPosition = window.pageYOffset || document.documentElement.scrollTop;

// 	//is-closeがあったら
// 	if (hamburgerClass.contains("is-close")) {
// 		//is-closeを外す
// 		hamburgerClass.remove('is-close');
// 		myBodyClass.remove('is-close');

// 		//is-openをつける
// 		hamburgerClass.add('is-open');
// 		myBodyClass.add('is-open');
// 		myBody.style.position = "fixed";
// 		myBody.style.top = `-${myPosition}px`;
// 	} else {
// 		//is-openがあったら
// 		if (hamburgerClass.contains("is-open")) {
// 			// スクロール位置の記憶
// 			const scrollY = myBody.style.top;

// 			// is-openを外す
// 			hamburgerClass.remove('is-open');
// 			myBodyClass.remove('is-open');

// 			// is-closeをつける
// 			hamburgerClass.add('is-close');
// 			myBodyClass.add('is-close');

// 			// bodyのfixedを外す
// 			bodyFixedNone();

// 			// スクロール位置の保持
// 			window.scrollTo(0, parseInt(scrollY || '0') * -1);
// 		}
// 	}
// });


// **
// is-openを消す
// **
// ハンバーガーメニューのリストをクリックしたとき
// const navList = document.querySelectorAll(".js-marker");
// navList.forEach((elm) => {
// 	elm.addEventListener('click', () => {
// 		hamburgerClass.remove('is-open');
// 		myBodyClass.remove('is-open');
// 		hamburgerClass.add('is-close');
// 		myBodyClass.add('is-close');

// 		//bodyのfixedを外す
// 		bodyFixedNone();
// 	});
// });
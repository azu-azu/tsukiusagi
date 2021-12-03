<?php
//--------------------------------------------
//テーマサポート
//--------------------------------------------
add_theme_support('title-tag');
add_theme_support('post-thumbnails'); //アイキャッチ画像を扱う
add_theme_support('automatic-feed-links'); //フィードの利用を許可する
add_theme_support('custom-background'); //カスタム背景機能をサポートする
add_theme_support('wp-block-styles'); //ブロックエディターのスタイルを適用
add_theme_support('responsive-embeds'); //挿入した動画などがレスポンシブ対応（画面幅に応じてサイズが拡大・縮小）になる
add_theme_support('html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption')); //コメントフォーム、検索フォーム、コメントリスト、ギャラリーでHTML5マークアップの使用を許可
add_theme_support('custom-header'); //カスタムヘッダー

//--------------------------------------------
//スタイルシートを読み込む
//--------------------------------------------
// グーグルフォント
add_action('wp_enqueue_scripts', 'my_enqueue_scripts');
function my_enqueue_scripts() {
    wp_enqueue_style('my-style-handle',
        'https://fonts.googleapis.com', array(), null);
    wp_enqueue_style('my-style-handle',
        'https://fonts.gstatic.com', array(), null);
}
add_filter('style_loader_tag', 'my_style_loader_tag_filter', 10, 2);

function my_style_loader_tag_filter($html, $handle) {
    if ($handle === 'my-style-handle') {
        return str_replace("rel='stylesheet'",
            "rel='preconnect' type='https://fonts.googleapis.com'", $html);
    }
    if ($handle === 'my-style-handle') {
        return str_replace("rel='stylesheet'",
            "rel='preconnect' type='https://fonts.gstatic.com' crossorigin", $html);
    }
    return $html;
}

// 第四引数：キャッシュ自動クリア
function tsukiusagi_script() {
    // wp_enqueue_style('font-awesome', '//use.fontawesome.com/releases/v5.6.1/css/all.css', array());
    wp_enqueue_style('m-plus-1p', 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500&display=swap', array());
    wp_enqueue_style('noto-sans', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap', array());
    wp_enqueue_style('gluten', 'https://fonts.googleapis.com/css2?family=Gluten:wght@100&display=swap', array());

    wp_enqueue_style('ress', 'https://unpkg.com/ress/dist/ress.min.css', array(), '1.0.0');
    wp_enqueue_style('style-css', get_template_directory_uri() . '/css/style.css', array(), date("YmdHi"));
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css', array(), date("YmdHi"));
    // wp_enqueue_style('swipe', '//unpkg.com/swiper/swiper-bundle.min.css', array(),date("YmdHi"), '1.0.0');
}
add_action('wp_enqueue_scripts', 'tsukiusagi_script');

//--------------------------------------------
//jsを読み込む
//--------------------------------------------
wp_enqueue_script('jquery');
wp_enqueue_script('bundle', get_template_directory_uri() . '/js/bundle.js', array(), date("YmdHi"), true);

// cdnの読み込み
wp_enqueue_script('particles', 'http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', array(), true); //milky-way
wp_enqueue_script('csspluguin', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js', array(), '', true);
wp_enqueue_script('easing', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js', array(), true);
wp_enqueue_script('tweenlite', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js', array(), true);
wp_enqueue_script('timelinelite', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js', array(), true);
wp_enqueue_script('swiper-bundle', '//unpkg.com/swiper/swiper-bundle.min.js', array(), true);
wp_enqueue_script('splitting', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), true);//data-splitting


// wp_enqueue_script('swiper-bundle', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.5/swiper-bundle.min.js', array(), true);
// wp_enqueue_script('coco', 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/5-1-8/js/5-1-8.js', array(), true);


// ページごとに読み込みファイルを変えるとき
// function file_load_scripts_styles() {
//     if(is_front_page() || is_home() || is_page('home')) {
//   }
//   elseif(is_page('price')) {
//   }
//   elseif(is_page('about') || is_page('flow')) {
//   }
// }
// add_action('wp_footer', 'file_load_scripts_styles'); // wp_footerに処理を登録

//--------------------------------------------
// uri指定のショートコード
//--------------------------------------------
function shortcode_tp() {
    return get_template_directory_uri();
}
add_shortcode('uri', 'shortcode_tp');

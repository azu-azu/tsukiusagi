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


function tsukiusagi_script() {
    // wp_enqueue_style('font-awesome', '//use.fontawesome.com/releases/v5.6.1/css/all.css', array());
    wp_enqueue_style('m-plus-1p', 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500&display=swap', array(),'','');
    wp_enqueue_style('gluten', 'https://fonts.googleapis.com/css2?family=Gluten:wght@100&display=swap', array(),'','');
    wp_enqueue_style('noto-sans', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap', array(),'','');
    wp_enqueue_style('xmas', 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap', array(),'','');
    wp_enqueue_style('ress', 'https://unpkg.com/ress/dist/ress.min.css', array(), '1.0.0','');
    wp_enqueue_style('style-css', get_template_directory_uri() . '/css/style.css', array(), date("YmdHi"),'');
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css', array(), date("YmdHi"),'');
    // wp_enqueue_style('swipe', '//unpkg.com/swiper/swiper-bundle.min.css', array(),date("YmdHi"), '1.0.0');
}
add_action('wp_enqueue_scripts', 'tsukiusagi_script');

//--------------------------------------------
//jsを読み込む（true:フッターで読み込み/第四引数：キャッシュ自動クリア）
//--------------------------------------------
// 本体のjQueryをストップ
function my_delete_local_jquery() {
    wp_deregister_script('jquery');
}
add_action( 'wp_enqueue_scripts', 'my_delete_local_jquery' );

wp_enqueue_script('jquery360', get_template_directory_uri() . '/js/lib/jquery-3.6.0.min.js', array(), '', true);

// ページごとに読み込みファイルを変える
function file_load_scripts_styles() {
    if (is_front_page() || is_home() || is_page('home')) {
        wp_enqueue_script('swiper-bundle', '//unpkg.com/swiper/swiper-bundle.min.js', array(), '', true);
        wp_enqueue_script('bundle', get_template_directory_uri() . '/js/bundle.js', array(), date("YmdHi"), true);
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true);//data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
    }
    if (is_page()) {
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true);//data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
    }
    // elseif(is_page('about') || is_page('flow')) {
    // }
}
add_action('wp_footer', 'file_load_scripts_styles'); // wp_footerに処理を登録


// wp_enqueue_script('css-plugin', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js', array(), '', true);
// wp_enqueue_script('easing', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js', array(), '', true);
// wp_enqueue_script('tween-lite', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js', array(), '', true);
// wp_enqueue_script('timeline-lite', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js', array(), '', true);
// wp_enqueue_script('particles', 'http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', array(), '', true); //libで読み込みに変更


//--------------------------------------------
// uri指定のショートコード
//--------------------------------------------
function shortcode_tp() {
    return get_template_directory_uri();
}
add_shortcode('uri', 'shortcode_tp');



//--------------------------------------------
// contact form 7
//--------------------------------------------
add_filter( 'wpcf7_validate_email*', 'custom_email_confirmation_validation_filter', 20, 2 );

function custom_email_confirmation_validation_filter( $result, $tag ) {
    if ( 'your-email-confirm' == $tag->name ) {
        $your_email = isset( $_POST['your-email'] ) ? trim( $_POST['your-email'] ) : '';
        $your_email_confirm = isset( $_POST['your-email-confirm'] ) ? trim( $_POST['your-email-confirm'] ) : '';

        if ( $your_email != $your_email_confirm ) {
            $result->invalidate( $tag, "Are you sure this is the correct address?" );
        }
    }

    return $result;
}


//--------------------------------------------
// OGP画像
//--------------------------------------------
function my_meta_ogp() {
	if( is_front_page() || is_home() || is_singular() ) {
		/********************
		初期設定
		********************/
		$ogp_image = get_template_directory_uri() . 'screenshot.png'; //アイキャッチ画像が登録されていない場合に使用する画像URL
		$twitter_site = '@aki_code';// Twitterのユーザー名
		$twitter_card = 'summary_large_image';// Twitterカードの種類（summary_large_image または summary）
		$facebook_app_id = 'FacebookのApp ID';// Facebook App ID
		/********************
		↑ここまで
		********************/
		global $post;
		$ogp_ttl = '';
		$ogp_desc = '';
		$ogp_url = '';
		$ogp_img = '';
		$insert = '';	
		if( is_singular() ) {
			setup_postdata($post);
			$ogp_ttl = $post->post_title;
			$ogp_desc = mb_substr(get_the_excerpt(), 0, 100);
			$ogp_url = get_permalink();
			wp_reset_postdata();
		} elseif ( is_front_page() || is_home() ) {
			$ogp_ttl = get_bloginfo('name');
			$ogp_desc = get_bloginfo('description');
			$ogp_url = home_url();
		}
		$ogp_type = ( is_front_page() || is_home() ) ? 'website' : 'article';
		if ( is_singular() && has_post_thumbnail() ) {
			$ps_thumb = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full');
			$ogp_img = $ps_thumb[0];
		} else {
			$ogp_img = 'TOPページ＆アイキャッチ画像がないときに使われる画像のURL';
		}	
		$insert .= '<meta property="og:title" content="'.esc_attr($ogp_ttl).'" />' . "\n";
		$insert .= '<meta property="og:description" content="'.esc_attr($ogp_desc).'" />' . "\n";
		$insert .= '<meta property="og:type" content="'.$ogp_type.'" />' . "\n";
		$insert .= '<meta property="og:url" content="'.esc_url($ogp_url).'" />' . "\n";
		$insert .= '<meta property="og:image" content="'.esc_url($ogp_img).'" />' . "\n";
		$insert .= '<meta property="og:site_name" content="'.esc_attr(get_bloginfo('name')).'" />' . "\n";
		$insert .= '<meta name="twitter:card" content="'.$twitter_card.'" />' . "\n";
		$insert .= '<meta name="twitter:site" content="'.$twitter_site.'" />' . "\n";
		$insert .= '<meta property="og:locale" content="ja_JP" />' . "\n";
		if ($facebook_app_id != "") {
		$insert .= '<meta property="fb:app_id" content="' . $facebook_app_id . '">' . "\n";
		}	echo $insert;
	}
}
add_action('wp_head','my_meta_ogp');
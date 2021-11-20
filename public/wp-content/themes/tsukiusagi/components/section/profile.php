<section class="p-sec-profile" id="profile">
  <article class="c-sec-ttl__wrapper">
    <h2 class="c-sec-ttl c-anim-box--lr txt js-show">Profile</h2>
  </article>

  <article class="p-sec-profile__cards c-anim-box--up js-show">
    <div class="swiper-container js-swiper">
      <ul class="swiper-wrapper">
        <li class="slider-item swiper-slide">
          <figure class="slider-image-wrapper">
            <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/1.png" alt="SliderImg">
          </figure>
          <div class="slider-item-content">
            <h3>好きなこと</h3>
            <p>
              CSSとJavaScriptの<br>
              アニメーション
            </p>
          </div>
        </li>

        <li class="slider-item swiper-slide">
          <figure class="slider-image-wrapper">
            <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/2.png" alt="SliderImg">
          </figure>
          <div class="slider-item-content right">
            <p>
              名　前：まつもと<br>
              居住地：東京
            </p>
          </div>
        </li>

        <li class="slider-item swiper-slide">
          <figure class="slider-image-wrapper">
            <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/1.png" alt="SliderImg">
          </figure>
          <div class="slider-item-content">
            <h3>コーディング</h3>
            <p>
              ・FLOCSSでのCSS設計<br>
              ・チーム制作
            </p>
          </div>
        </li>

        <li class="slider-item swiper-slide">
          <figure class="slider-image-wrapper">
            <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/4.png" alt="SliderImg">
          </figure>
          <div class="slider-item-content right">
            <h3>WordPress</h3>
            <p>
              ・テーマ開発<br>
              ・ブロックエディタ開発<br>
              ・プラグイン開発
            </p>
          </div>
        </li>

        <li class="slider-item swiper-slide">
          <figure class="slider-image-wrapper">
            <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/3.png" alt="SliderImg">
          </figure>
          <div class="slider-item-content">
            <h3>経歴</h3>
            <p>
              ・企業でVBA開発<br>
                ↓<br>
              ・2021.5〜 WEB制作
            </p>
          </div>
        </li>
      </ul>

      <div class="swiper-pagination"></div>
    </div>
    <article class="slider-buttons">
      <button class="swiper-button-prev">Prev</button>
      <button class="swiper-button-next">Next</button>
    </article>
  </article>

  <?php get_template_part('components/parts/skills');?>
</section>
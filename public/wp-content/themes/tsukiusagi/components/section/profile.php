<section class="p-sec-profile" id="profile">
  <article class="c-sec-ttl__wrapper">
    <h2 class="c-sec-ttl c-anim-box--down txt c-linear-light js-scroll-show">
      Profile
    </h2>
  </article>

  <article class="p-sec-profile__cards">
    <section class="swiper js-swiper">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/1-s.png" alt="うさぎの背景画像">
          <article class="swiper-slide__content">
            <h3>好きなこと</h3>
            <p>
              CSSとJavaScriptの<br>
              アニメーション
            </p>
          </article>
        </li>

        <li class="swiper-slide">
          <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/2-s.png" alt="うさぎの背景画像">
          <article class="swiper-slide__content right">
          <h3>月うさぎWeb</h3>
          <p>
              管理人：まつもと<br>
              所在地：東京
            </p>
          </article>
        </li>

        <li class="swiper-slide">
          <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/1-s.png" alt="うさぎの背景画像">
          <article class="swiper-slide__content">
            <h3>コーディング</h3>
            <p>
              ・FLOCSSでのCSS設計<br>
              ・チーム制作
            </p>
          </article>
        </li>

        <li class="swiper-slide">
          <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/4-s.png" alt="うさぎの背景画像">
          <article class="swiper-slide__content right">
            <h3>WordPress</h3>
            <p>
              ・テーマ開発<br>
              ・ブロックエディタ開発<br>
              ・プラグイン開発
            </p>
          </article>
        </li>

        <li class="swiper-slide">
          <img class="slider-image" src="<?php echo do_shortcode('[uri]'); ?>/img/profile/3-s.png" alt="うさぎの背景画像">
          <article class="swiper-slide__content">
            <h3>経歴</h3>
            <p>
              ・企業でVBA開発<br>
              ・2021.5〜 WEB制作
            </p>
          </article>
        </li>
      </ul>

      <div class="swiper-pagination"></div>
    </section>
    <article class="slider-buttons">
      <button class="swiper-button-prev">Prev</button>
      <button class="swiper-button-next">Next</button>
    </article>
  </article>

  <?php get_template_part('components/parts/skills');?>
  <?php get_template_part('components/parts/falling-box');?>
</section>

<header class="l-header" id="js-l-header">
  <?php get_template_part('components/common/hamburger');?>

  <section class="p-header p-header--top" id="js-p-header">
    <h1 class="c-header-ttl"><?php bloginfo('name'); ?></h1>
    <nav class="p-gmenu">
      <a class="c-header-ttl--totop c-bubbly-button--white" href="#">月へ戻る</a>
      <ul class="c-nav">
        <li class="js-ham-close" style="--i:0;"><a class="c-bubbly-button--white" href="#works">Works</a></li>
        <li class="js-ham-close" style="--i:1;"><a class="c-bubbly-button--white" href="#profile">Profile</a></li>
        <li class="js-ham-close" style="--i:2;"><a class="c-bubbly-button--yellow" href="#contact">Contact</a></li>
        <div class="c-marker"></div>
      </ul>
    </nav>
  </section>
</header>
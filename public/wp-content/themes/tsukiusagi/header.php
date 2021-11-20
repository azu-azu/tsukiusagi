<!DOCTYPE html>
<html lang="<?php language_attributes();?>">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tsukiusagi</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php wp_head();?>
  </head>

  <body>
    <header class="l-header">
      <section class="p-header is-close" id="js-header">
        <h1 class="c-header-ttl">月うさぎ</h1>
        <nav class="p-gmenu">
          <a class="c-header-ttl--top js-page-top c-bubbly-button--white js-bubbly js-marker" href="#">月へ戻る</a>
          <ul class="c-nav">
            <li class="js-marker" style="--i:0;"><a class="c-bubbly-button--white js-bubbly" href="#works">Works</a></li>
            <li class="js-marker" style="--i:1;"><a class="c-bubbly-button--white js-bubbly" href="#profile">Profile</a></li>
            <li class="js-marker" style="--i:2;"><a class="c-bubbly-button--yellow js-bubbly" id="default" href="#contact">Contact</a></li>
            <div class="js-marker" id="marker"></div>
          </ul>
        </nav>
      </section>
      <article class='c-hamburger sp-only is-close' id="js-hamburger">
        <span class="line-top"></span>
        <span class="line-middle"></span>
        <span class="line-bottom"></span>
      </article>
      <div class="c-overlay sp-only"></div>
    </header>
<!DOCTYPE html>
<html lang="<?php language_attributes();?>">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tsukiusagi</title>

    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <?php wp_head();?>
  </head>

  <body class="">
    <header class="l-header" id="js-l-header">
      <input class="c-ham-trigger" id="ham-trigger" type="checkbox">
      <label class="c-hamburger sp-only" for="ham-trigger">
        <span class="line-top"></span>
        <span class="line-middle"></span>
        <span class="line-bottom"></span>
      </label>
      <!-- <label class="c-overlay sp-only" for="ham-trigger"></label> -->
      <section class="p-header p-header--top" id="js-p-header">
        <h1 class="c-header-ttl">月うさぎWeb</h1>
        <nav class="p-gmenu">
          <a class="c-header-ttl--totop c-bubbly-button--white js-marker" href="#">月へ戻る</a>
          <ul class="c-nav">
            <li class="js-marker js-ham-close" style="--i:0;"><a class="c-bubbly-button--white" href="#works">Works</a></li>
            <li class="js-marker js-ham-close" style="--i:1;"><a class="c-bubbly-button--white" href="#profile">Profile</a></li>
            <li class="js-marker js-ham-close" style="--i:2;"><a class="c-bubbly-button--yellow" id="default" href="#contact">Contact</a></li>
            <div class="c-marker js-marker" id="js-marker"></div>
          </ul>
        </nav>
      </section>
    </header>
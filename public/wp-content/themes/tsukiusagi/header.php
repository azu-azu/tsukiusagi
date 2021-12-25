<!DOCTYPE html>
<html lang="<?php language_attributes();?>">

  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <link rel="icon" href="<?php echo do_shortcode('[uri]'); ?>/img/svg/favicon.svg" type="image/svg+xml">

    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <?php wp_head();?>
  </head>

  <body <?php body_class(); ?>>
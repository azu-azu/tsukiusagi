<?php
/*
Template Name: default
*/
?>
<?php get_header('topic'); ?>

<main class="l-topic">
  <?php get_template_part('components/parts/floating-stars');?>

  <section class="l-topic__container">
    <?php if(have_posts()) : while(have_posts()) : the_post(); ?>

    <article class="c-sec-ttl__wrapper">
      <h2 class="c-sec-ttl c-linear-light"><?php the_title(); ?></h2>
    </article>

    <?php the_content(); ?>
    <?php get_template_part('components/common/offset-title');?>

    <?php endwhile; ?>
    <?php endif; ?>
  </section>
</main>

<?php get_footer(); ?>
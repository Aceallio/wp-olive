<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package SBX_Starter_Theme
 */

?>

<footer id="colophon" class="site-footer bg-light py-2">
    <!-- Add footer content here -->
    <div class="container">
        <span class="">Copyright © <?= date('Y'); ?> BRAND NAME LTD.</span>
        <span class="">
            Powered by
            <a href="https://starboxtech.com" class="footer-bottom-text">StarBox Technologies Ltd.</a>
        </span>
    </div>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
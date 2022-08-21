"use strict";

/* global wp, jQuery */

/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function ($) {
  // Site title and description.
  wp.customize('blogname', function (value) {
    value.bind(function (to) {
      $('.site-title a').text(to);
    });
  });
  wp.customize('blogdescription', function (value) {
    value.bind(function (to) {
      $('.site-description').text(to);
    });
  }); // Header text color.

  wp.customize('header_textcolor', function (value) {
    value.bind(function (to) {
      if ('blank' === to) {
        $('.site-title, .site-description').css({
          clip: 'rect(1px, 1px, 1px, 1px)',
          position: 'absolute'
        });
      } else {
        $('.site-title, .site-description').css({
          clip: 'auto',
          position: 'relative'
        });
        $('.site-title a, .site-description').css({
          color: to
        });
      }
    });
  });
})(jQuery);
"use strict";

/**
 * Default project scripts go here
 */
// Sticky Header
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    // Variables
    var header = jQuery(".ar-header");
    var offset = jQuery(".ar-header").height();
    var scrollPosition = jQuery(window).scrollTop(); // Add/remove sticky classes based on scroll position

    if (scrollPosition >= offset) {
      header.addClass("sticky-header"); // Special case for home header (Transparent theme)

      if (header.is("#home-header")) {
        header.removeClass("home-header");
      }
    } else {
      header.removeClass("sticky-header"); // Special case for home header (Transparent theme)

      if (header.is("#home-header")) {
        header.addClass("home-header");
      }
    }
  });
}); // Scroll to top

jQuery(document).ready(function ($) {
  $("#scroll-to-top").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow", function () {});
  });
}); // Ajax posts filter

jQuery(function ($) {
  $("#filter").submit(function () {
    var filter = $("#filter");
    $.ajax({
      url: filter.attr("action"),
      data: filter.serialize(),
      // form data
      type: filter.attr("method"),
      // POST
      beforeSend: function beforeSend(xhr) {
        filter.find("button").text("Loading..."); // changing the button label
      },
      success: function success(data) {
        filter.find("button").text("Apply filter"); // changing the button label back

        $("#response").html(data); // insert data
      }
    });
    return false;
  });
});
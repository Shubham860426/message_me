// app/javascript/application.js

import "@hotwired/turbo-rails"
import "controllers"
import jQuery from "jquery"

window.$ = window.jQuery = jQuery;

import("semantic-ui").then(() => {
  document.addEventListener("turbo:load", function() {
    $('.ui.dropdown').dropdown();
  });

  $('.ui.dropdown').dropdown();
  $(document).on('click', '.message .close', function() {
    $(this).closest('.message').transition('fade');
  });
});
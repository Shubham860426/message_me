// app/javascript/application.js

import "@hotwired/turbo-rails"
import "controllers"
import jQuery from "jquery"


import "channels/consumer"
import "channels/chatroom_channel" 

window.$ = window.jQuery = jQuery;

window.scroll_bottom = function () {
	if ($('#messages').length > 0 ) {
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
	}
}

import("semantic-ui").then(() => {
  document.addEventListener("turbo:load", function() {
    $('.ui.dropdown').dropdown();
  });

  $('.ui.dropdown').dropdown();
  $(document).on('click', '.message .close', function() {
    $(this).closest('.message').transition('fade');
  });
});

document.addEventListener("turbo:load", function() {
  scroll_bottom();
});


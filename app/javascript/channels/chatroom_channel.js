import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("Connected to ChatroomChannel successfully!!!");
  },

  disconnected() {
    console.log("Disconnected from ChatroomChannel");
  },

  received(data) {
    $('#message-container').append(data.mod_message);
    scroll_bottom();
  }
});


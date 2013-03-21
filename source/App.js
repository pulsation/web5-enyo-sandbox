enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Hello World"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true}
		]},
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"}
		]}
	],

  published: {
    messages: []
  },

  messagesChanged: function (inOldValue) {
    this.$.main.setContent("");
    this.messages.forEach(function (message) {
      this.$.main.addContent(message + "<br />");
    }, this);
  },

	helloWorldTap: function(inSender, inEvent) {
    var that = this;
    HelloMessages().pull(function (messages) {
      // TODO: check if it would be possible to use enyo.bind() instead of that
      that.setMessages(messages);
    });
	}
});

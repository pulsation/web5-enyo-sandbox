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
    this.messages.forEach(function (message) {
      this.$.main.addContent(message + "<br />");
    }, this);
  },

	helloWorldTap: function(inSender, inEvent) {
    HelloMessages().pull(
      enyo.bind(this, function (messages) {
        this.setMessages(messages);
      })
    );
	}
});

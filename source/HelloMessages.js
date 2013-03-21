var HelloMessages = function () {
  var _default = [ "hello", "world" ];
  return {
    push: function (messages, callback) {
      Lawnchair({ adapter: "dom" }, function () {
        var record = { key: "hello",
          messages: messages };
        this.save(record, function (record) {
          callback(record.messages);
        });
      });
    },
    pull: function (callback) {
      var that = this;
      Lawnchair({ adapter: "dom" }, function () {
        this.get("hello", function (record) {
          if (!record) {
            that.push(_default, callback);
          } else {
            callback(record.messages);
          }
        });
      });
    }
  };
};

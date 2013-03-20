var HelloMessages = function () {

  return {

    fetchAll : function (callback) {
      new Pouch("http://localhost:5984/hello_messages", function (err, db) {
        if (!err) {
          db.allDocs(function (err, result) {
            if (!err) {
              callback(result);
            }
          });
        }
      });
    }
  };
};

var myMessages = HelloMessages();

myMessages.fetchAll();

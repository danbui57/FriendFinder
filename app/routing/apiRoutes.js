var friends = require("../data/friend");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);

    });
  


};
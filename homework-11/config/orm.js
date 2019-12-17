const connection = require("../config/connection.js");


var orm = {
    // The last variable cb represents the anonymous function being passed from server.js
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (tableInput, colToInsert, inputVal, cb) {
        const queryString = "INSERT INTO ?? (??) VALUE ??";
        connection.query(queryString, [tableInput, colToInsert, inputVal], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function()
};




module.exports = orm;
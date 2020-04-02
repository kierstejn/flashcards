"use strict";
exports.__esModule = true;
var db_1 = require("../db");
exports.getAllDecks = function () {
    return db_1["default"]('deck').select("*");
};
exports.getDeck = function (id) {
    return new Promise(function (resolve, reject) {
        db_1["default"].raw("select id, name, (" +
            "select array_to_json(array_agg(row_to_json(d))) " +
            "from " +
            "(" +
            "select id, primary_front_text as primaryFrontText, primary_back_text as primaryBackText, " +
            "secondary_front_text as secondaryFrontText, secondary_back_text as secondaryBackText " +
            "from card " +
            "where deck_id=deck.id" +
            ") d" +
            ") as cardList " +
            "from deck " +
            "where id = ?", [id]).then(function (data) {
            resolve(data.rows);
        })["catch"](function (err) {
            reject(err);
        });
    });
};

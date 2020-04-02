"use strict";
exports.__esModule = true;
var knex_1 = require("knex");
var db = knex_1["default"]({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'flashcards'
    }
});
exports["default"] = db;

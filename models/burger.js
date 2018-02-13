var orm = require("../config/orm.js");

const Burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", callback);
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

};

module.exports = Burger;
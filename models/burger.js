const orm = require('../config/orm');

const burger = {
    selectAll: function(cb){
        orm.selectAll((result)=>{
            cb(result);
        });
    },
    insertOne: function(burger_name, cb){
        orm.insertOne(burger_name, (result)=>{
            cb(result);
        });
    },
    updateOne: function(burger_id, cb){
        orm.updateOne(burger_id, (result)=>{
            cb(result);
        });
    }
}

 module.exports = burger;
const connection = require('./connection');

const orm = {
    selectAll(cb) {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    },
    insertOne(burger_name, cb){
        const queryString="INSERT INTO burgers (burger_name) VALUES ?";
        connection.query(
            queryString,
            burger_name,
            (err, result) => {
                if(err) throw err;
               cb(result);
        });
    },
    updateOne(burger_id, cb){
        const queryString="UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(
            queryString,
            burger_id,
            (err, result) => {
                if(err) throw err;
                cb(result);
        });
    }
}
module.exports = orm;
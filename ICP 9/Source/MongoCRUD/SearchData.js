/*
 * Created by mnpw3d on 20/10/2016.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://ase1:1234@ds115219.mlab.com:15219/aseicp9';
var findUser = function(db, callback) {
    var cursor =db.collection('icp9').find({"mobile":"+1 785-304-3664"});
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.address.city);
            console.log("MObil num:" + doc.mobile);
        } else {
            callback();
        }
    });
};
/*
var findUserwithName = function(db,callback) {
    var cursor = db.collection('icp9').find({"fname":"Sidrah"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.address.city);
        }
    });
}
var findUserwithUniversity = function(db, callback) {
    var cursor = db.collection('icp9').find({"education.university":"UMKC"});
    cursor.each(function(err,doc){
       assert.equal(err,null);
       if(doc != null)
       {
           console.log("First Name:" + doc.fname);
           console.log("University:" + doc.education.university);
           console.log("Degree:" + doc.education.degree);
           console.log("Major:" + doc.education.major);
           console.log("mail:" + doc.mail);
       }
    });
}*/
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var database=client.db('aseicp9');
    findUser(database, function() {
        client.close();
    });
});
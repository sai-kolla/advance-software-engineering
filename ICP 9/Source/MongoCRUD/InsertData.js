/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://ase1:1234@ds115219.mlab.com:15219/aseicp9';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
var insertDocument = function(db, callback) {
    db.collection('icp9').insertOne( {
        "user id" : "Sai22",
        "fname" : "Sai",
        "lname" : "Nagarjuna",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "mobile" : "+1 785-304-3664",
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"skppd@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var database=client.db('aseicp9');
    insertDocument(database, function() {
        client.close();
    });
});
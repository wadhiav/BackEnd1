var express = require('express');
var router = express.Router();
var User = require('../models/database');


//user api requests
router.get('/database/user', function(req, res, next){

});

// create a user 
router.post('/database', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// update a user in the db
router.put('/database/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    }).catch(next);
});

router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});

router.get('/database', function(req, res, next){
    
    });
    
    // create a user 
    router.post('/database', function(req, res, next){
        Contact.create(req.body).then(function(contact){
            res.send(contact);
        }).catch(next);
    });
    
    // update a user in the db
    router.put('/database/:id', function(req, res, next){
        Contact.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
            Contact.findOne({_id: req.params.id}).then(function(contact){
                res.send(contact);
            });
        }).catch(next);
    });
    
    router.delete('/users/:id', function(req, res, next){
        Contact.findByIdAndRemove({_id: req.params.id}).then(function(contact){
            res.send(contact);
        }).catch(next);
    });
    

module.exports = router;
const mongoose = require('mongoose');
const Manager = mongoose.model("Manager");

module.exports = {
    index: (req, res) => {
        Manager.find({}, (err, manager)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log(manager);
                res.json(manager);
            }
        })
    },
    create: (req,res) => {
        var manager = new Manager(req.body);
        manager.save((err, manager) => {
            if(err){
                console.log(err);
                res.json({message:"Error", error: err});
            }
            else{
                res.json(manager)
            }
        });
    },
    createC: (req,res) => {
        var comment = new Rate(req.body);
        comment.save((err, commentsFromDB) =>{
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else{
                Manager.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, function(err, comment){
                    if(err){
                        console.log('fail')
                    }
                    else{
                        console.log('success')
                    }
                });
                res.json(commentsFromDB);
            }
        });
    },
    show: (req, res) => {
        Manager.findOne({_id: req.params.id}, (err, manager)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json(manager); 
            }
        });
    },
    delete: (req, res) => {
        Manager.remove({_id: req.params.id}, (err, manager) =>{
                res.json();
        });
    },
    edit: (req, res) => {
        Manager.findOneAndUpdate({_id: req.params.id}, req.body, (err, manager)=>{
            if(err){
                console.log(err);
                res.json(err);
            } 
            else{
                res.json(manager);
            }               
        });
    },
}

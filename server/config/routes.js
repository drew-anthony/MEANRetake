const managers = require("./../controller/managers");
const path = require('path');

module.exports = (app) => {
    app.get('/managers', managers.index),
    app.get('/managers/:id', managers.show),  
    app.post('/managers', managers.create),    
    app.put('/managers/:id', managers.edit),
    app.delete('/managers/:id', managers.delete),
    app.post('/managers/:id', managers.createC),
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });  
}
var express = require("express"),
app= express(),
servercontoller = require("./server/controller/controller"),
bodyparser  = require("body-parser"),
mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/test', function(err) {
    if (err) throw err;
});

app.get('/', function(req,res){

	res.sendFile(__dirname+"/client/view/index.html");

})

app.use(bodyparser());


app.use("/js", express.static(__dirname+"/client/js"));




app.get("/api/lostpeople",servercontoller.list)

app.post("/api/lostpeople",servercontoller.create)



app.listen(3000,function(){

	console.log("i am listeninig");
})
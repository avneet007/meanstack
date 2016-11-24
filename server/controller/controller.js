
var datapost = require("./models/people")


module.exports.create = function(req,res){

	var postData = new datapost(req.body);

     postData.save(function(err,result){
  

      res.json(result);

     });

}

module.exports.list = function(req,res){

	datapost.find({},function(err,result){
  
      res.json(result);
      
	 });

}
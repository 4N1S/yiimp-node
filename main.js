var yiimp = require('yiimp-node');
// Public API
var client = new yiimp("/api","unimining.net",5000);


//function status
client.status(function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);
});

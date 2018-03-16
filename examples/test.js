var yiimp = require('../index.js');
// Public API
var client = new yiimp("/api","unimining.net",5000);


//function status
// client.status(function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });
// function Currencies
// client.currencies(function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });
var address="DBe3Syk3kWtWqU8o3zS4sdWBuXak8rK3LQ";

//function wallet
client.wallet(address,function (error,data) {
	if(error) console.log("E!",error)
	console.dir(data);
});

//Stream 
// function home
// client.init(function(data) {
// 	// if(error) console.log("E!",error)
// 	console.dir(data);
// });
//function Currenciestream
client.currenciestream(function (data) {
	console.dir(data);
});

//function walletstream
// client.walletstream(address,function (data) {
// 	console.dir(data);
// });
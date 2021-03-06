
var _ = require('underscore');
var https = require('https');
var crypto = require('crypto');
var url = require('url');
var urlencode = require('urlencode');

var yiimp = function(hostapi,dns,key,secret,verbose) {
	this.verbose = verbose || false;
	this.version = "0.0.1";
	this.key = key;
	this.secret = secret;
	this.host = dns;
	// this.host="examples.opendatasoft.com";
	this.hostapi = "https://www."+dns+""+hostapi;
	this.baseURL = "https://www."+dns;
	this.userAgent = "yiimp-node";
	this.request_options = {
		method: 'GET',
		headers: {
			"User-Agent": "yiimp-node",
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}
};


yiimp.prototype.currencies = function(callback) {

	this.pubRequest("/currencies", {}, function(err, data) {
		return callback(err, data);
	});
}



yiimp.prototype.wallet = function(address,callback) {

	this.pubRequest("/walletEx?address="+address, {}, function(err, data) {
		return callback(err, data);
	});
}


yiimp.prototype.status = function(callback) {

	this.pubRequest("/status", {}, function(err, data) {
		return callback(err, data);
	});
}

//Stream
yiimp.prototype.initstream = function(callback) {
	this.pubRequest("/", {}, function(err, data) {
		setInterval(function(){ 
				callback.call(err, data);
		}, 45000);
	});

}
yiimp.prototype.walletstream = function(address,callback) {
	console.log("[x]Init Stream Wallet")
		this.pubRequest("/walletEx?address="+address, {}, function(data, err) {
			setInterval(function(){ 
					callback.call(data, err);
			}, 45000);
		});
	});

}
yiimp.prototype.currenciestream = function(callback) {
	console.log("[x]Init Stream Currencies")

	this.pubRequest("/currencies", {}, function(data, err) {
		setInterval(function(){ 
				callback.call(data, err);
		}, 45000);
	});

}


yiimp.prototype.pubRequest = function(method, params, callback) {
	var options = {
	  hostname: this.host,
	  path: this.hostapi + method,
	  port: 443,
	  method: 'GET',
	  verbose: this.verbose
	};
	console.log(options.path);
	cb = function(response) {
		if (response.statusCode < 200 || response.statusCode > 299) {
		   callback(response.statusCode);
		 }
		if(response.statusCode==200){
		var str = '';
		response.on('data', function (chunk) {
			str += chunk;
			if (options.verbose) console.log(str);
		});


		response.on('end', function () {
			console.log(str);
			var objFromJSON;
			try {
				objFromJSON = JSON.parse(str);
				return callback(null, objFromJSON);
			}
			catch (err) {
				return callback(err, null);
			}
		});
		}
	}
	var req = https.request(options, cb);
	req.on('error', function(err) {
		callback(err.status, null);
	});

	req.end();

};

module.exports = yiimp;

# Yiimp Api Node.js Wrapper

## Synopsis

This projects helps you to make HTTP requests to the yiimp API.


## Installation

```sh
npm install yiimp-node
```

```javasctipt
var yimpclient = require('yiimp-node');
```

```javasctipt
// Public API
//hostapi: /api
//dns: yiimp.eu

var client = new yimpclient(hostapi,dns,interval);
```

## Yiimp API

YiiMP is a pool management solution based on the Yii Framework. Yiimp api datasets are accessible by developers through an HTTP REST API.


## API Index
Example Api's server address: https://yiimp.eu/api or define our domaine, method GET.

## Methods

* [status](#status)
* [currencies](#currencies)
* [wallet](#wallet)
* [initstream](#initstream)
* [walletstream](#walletstream)
* [currenciestream](#currenciestream)




### status

**Response**

    {"bitcore":
      {"name":"bitcore","port":3556,"coins":1,"fees":2,"hashrate":47524264198,"workers":939,"estimate_current":"0.00000821","estimate_last24h":"0.00000904","actual_last24h":"0.01038","hashrate_last24h":50681728691.198}
    }

**Examples**
Request:
    /api/status
    
```javasctipt
 client.status(function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);
 });

```


### currencies

**Response**

  {
    "ALQO":
    {
      "algo":"quark","port":4033,"name":"ALQO","height":184569,"workers":5,"shares":"0","hashrate":"0","estimate":"0.00027","24h_blocks":0,"24h_btc":0,"lastblock":183066,"timesincelast":94968

    }
  }

**Examples**
Request:
    /api/currencies
    
```javasctipt
 client.currencies(function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);
 });

```


### wallet

**Response**

  { 
    currency: 'DSR',
    unsold: 1.038396970406842,
    balance: 0,
    unpaid: 1.03839697,
    paid24h: 4.89693467,
    total: 5.93533164,
    miners:
     [ { version: 'ccminer/8.20-KlausT',
         password: 'c=DSR',
         ID: '',
         algo: 'neoscrypt',
         difficulty: 606,
         subscribe: 1,
         accepted: 1084499.629,
         rejected: 0 
       } 
      ] 
  }

**Examples**

Request:
    /api/wallet
    
    param: 
    Address: address target     
    
```javasctipt
 client.wallet(address,function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);
 });

```


### initstream

**Response**

    {
      "bitcore":
      {"name":"bitcore","port":3556,"coins":1,"fees":2,"hashrate":47524264198,"workers":939,"estimate_current":"0.00000821","estimate_last24h":"0.00000904","actual_last24h":"0.01038","hashrate_last24h":50681728691.198}
    }

**Examples**
Request:
    /api/status

    params:
    duration: minimum 10s or highest     

    
```javasctipt
 client.initstream(function (data) {
  console.dir(data);
 });

```



### walletstream

**Response**

  { 
    currency: 'DSR',
    unsold: 1.038396970406842,
    balance: 0,
    unpaid: 1.03839697,
    paid24h: 4.89693467,
    total: 5.93533164,
    miners:
     [ { version: 'ccminer/8.20-KlausT',
         password: 'c=DSR',
         ID: '',
         algo: 'neoscrypt',
         difficulty: 606,
         subscribe: 1,
         accepted: 1084499.629,
         rejected: 0 
       } 
      ] 
  }

**Examples**

Request:
    /api/wallet
    
    params: 
    Address: address target
    duration: minimum 10s or highest     
    
```javasctipt
 client.walletstream(address,function (data) {
  console.dir(data);
 });

```


### currenciestream

**Response**

  {
    "ALQO":
    {
      "algo":"quark","port":4033,"name":"ALQO","height":184569,"workers":5,"shares":"0","hashrate":"0","estimate":"0.00027","24h_blocks":0,"24h_btc":0,"lastblock":183066,"timesincelast":94968

    }
  }

**Examples**
Request:
    /api/currencies
    
    params: 
    duration: minimum 10s or highest  


```javasctipt
 client.currencies(function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);
 });

```



## API Reference

https://github.com/globalzon/yaamp

https://github.com/tpruvot/yiimp



## Contributors

Anis Haboubi

## License

See [LICENSE.txt](LICENSE.txt) for more info.
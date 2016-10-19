# t-ajax
Library for performing an asynchronous HTTP (Ajax) request by using Promise

## Install
`$ npm install --save t-ajax`

## Exmaple
```
const Ajax = require('t-ajax');
  ...
  Ajax.post('/login', data) 
    .then(function(response) {
      session = response.headers['set-cookie']
      Ajax.get('/sessionCheck', session)
        .then(function(response) {
        })
  }
```
  

## Function
* get(url)
  * return response
  
* get(url, session)
  * return response data
  
* post(url, data)
  * return response

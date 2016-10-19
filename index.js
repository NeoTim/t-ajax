const http = require('http');
const Promise = require('promise');


var server='localhost'
var port=8080
/*
  @TODO 요청을 보내는 함수
*/
var sendRequest = function(option, data,cb) {
    var req = http.request(option, cb);
    if (data)
        req.write(data);
    req.end();
}

/*
  @TODO post 요청을 보내는 함수
*/

exports.post = function(url, data) {
    return new Promise(function(resolve, reject) {
        var option = {
            host: server,
            port: port,
            path: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        sendRequest(option, data,(res)=>{
          //로그인 실패시 예외처리 추가해야함
          resolve(res);
        });

    })
}


/*
  @TODO get 요청을 보내는 함수, Session이 있을시
*/
exports.get = function(url, session) {
    return new Promise(function(resolve, rejct) {
        var getOption = {
            host: server,
            port: port,
            path: url,
            headers: {
                'cookie': session
            }
        }
        var data = "";
        sendRequest(getOption, null, (res) => {
            res.on('data', function(chunk) {
                data += chunk;
            });
            res.on('end', function() {
                resolve(data);
            });
        });

    })
}

/*
  @TODO get 요청을 보내는 함수
*/
exports.get = function(url){
  return new Promise(function(resolve, rejct) {
      var getOption = {
          host: server,
          port: port,
          path: url,
      }
      sendRequest(getOption, null, (res) => {
          resolve(res);
      });

  })
}

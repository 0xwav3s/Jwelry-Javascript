
var File = require("fs")
var Duong_dan_Thu_muc_Media="Media"
var Thu_muc_PDF = "Nop_Don"

function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error('Lỗi ...');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}


function Doc_Thong_tin_Dich_vu() {
  var Duong_dan = "index.html"
  var Chuoi_Thong_tin = File.readFileSync(Duong_dan, "UTF-8")
  return Chuoi_Thong_tin
}


class XL_LUU_TRU {
    
  Thong_tin_Dich_vu(){
    return Doc_Thong_tin_Dich_vu()
  }

  Doc_Nhi_phan_Media(Ten_Tap_tin){ 
    var Nhi_phan = ""
    var Duong_dan = Duong_dan_Thu_muc_Media + "//" + Ten_Tap_tin
    if (File.existsSync(Duong_dan))
      Nhi_phan = File.readFileSync(Duong_dan)
    return Nhi_phan

  }

  Ghi_Nhi_phan_Media(Ten, Chuoi_nhi_phan) {
    var Kq = "OK"
    try {
      var Nhi_phan = decodeBase64Image(Chuoi_nhi_phan);
      var Duong_dan = Duong_dan_Thu_muc_Media + "//" + Ten
      File.writeFileSync(Duong_dan, Nhi_phan.data);
    } catch (Loi) {
      Kq = Loi.toString()
    }
    return Kq
  }

  Ghi_Tap_tin_PDF(Ten, Chuoi_nhi_phan) {
    var Kq = "OK"
    try {
      var Nhi_phan = decodeBase64Image(Chuoi_nhi_phan);
      var Duong_dan = Thu_muc_PDF + "//" + Ten
      File.writeFileSync(Duong_dan, Nhi_phan.data);
    } catch (Loi) {
      Kq = Loi.toString()
    }
    return Kq
  }

}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
      // named pipe
      return val;
  }

  if (port >= 0) {
      // port number
      return port;
  }

  return false;
}

/**
* Event listener for HTTP server "error" event.
*/

function onError(error) {
  if (error.syscall !== 'listen') {
      throw error;
  }

  var bind = typeof Port === 'string'
      ? 'Pipe ' + Port
      : 'Port ' + Port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
      case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
      case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
      default:
          throw error;
  }
}

/**
* Event listener for HTTP server "listening" event.
*/

function onListening() {
  var addr = Dich_vu.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}



var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly





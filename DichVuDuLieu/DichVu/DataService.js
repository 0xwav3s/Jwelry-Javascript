
var NodeJs_Dich_vu = require("http")
var Luu_tru = require("../XuLy/XL_LUU_TRU_MONGODB")
//var Port = 1000
var Port = normalizePort(process.env.PORT || 1000);
var Xu_ly_Tham_so = require('querystring')
var Du_lieu = {}
// Du_lieu.Danh_sach_Dien_thoai = Luu_tru.Doc_Du_lieu("Dien_thoai")
// Du_lieu.Cua_hang = Luu_tru.getShopInfo()
// Du_lieu.danhSachDienThoaiThanhLy = Luu_tru.getAll_Thanh_ly("Dien_thoai")

var DanhSach_Nhan = Luu_tru.getAll("Nhan");
var DanhSach_Lac = Luu_tru.getAll("Lac");
var DanhSach_BongTai = Luu_tru.getAll("BongTai");
var DanhSach_DayChuyen = Luu_tru.getAll("DayChuyen");
var Cua_hang = Luu_tru.getShopInfo();
var Nguoi_dung = Luu_tru.getUserInfo();

DanhSach_Nhan.then(Kq => {
  Du_lieu.DanhSach_Nhan = Kq;
});

DanhSach_Lac.then(Kq => {
  Du_lieu.DanhSach_Lac = Kq;
});

DanhSach_BongTai.then(Kq => {
  Du_lieu.DanhSach_BongTai = Kq;
});

DanhSach_DayChuyen.then(Kq => {
  Du_lieu.DanhSach_DayChuyen = Kq;
});

Cua_hang.then(Kq => {
  Du_lieu.Cua_hang = Kq[0];
});

Nguoi_dung.then(Kq => {
  Du_lieu.Nguoi_dung = Kq;
});



var Dich_vu = NodeJs_Dich_vu.createServer((request, respone) => {
  var Chuoi_Nhan = ""
  var Dia_chi_Xu_ly = request.url.replace("/", "")
  request.on('data', (chunk) => { Chuoi_Nhan += chunk })
  request.on('end', () => {
    var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
    var action = Tham_so.action
    var Chuoi_Kq = ""
    switch (action) {
      case 'getAll_Nhan':
        var danhSachNhan = {}
        danhSachNhan = Du_lieu.DanhSach_Nhan
        Chuoi_Kq = JSON.stringify(danhSachNhan)
        console.log(Chuoi_Kq);
        respone.setHeader("Access-Control-Allow-Origin", '*');
        respone.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        respone.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
        respone.setHeader('Access-Control-Allow-Credentials', true);
        respone.end(Chuoi_Kq);
      break;
      case 'getAll_DayChuyen':
        var danhSachDayChuyen = {}
        danhSachDayChuyen = Du_lieu.DanhSach_DayChuyen
        Chuoi_Kq = JSON.stringify(danhSachDayChuyen)
        console.log(Chuoi_Kq);
        respone.setHeader("Access-Control-Allow-Origin", '*');
        respone.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        respone.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
        respone.setHeader('Access-Control-Allow-Credentials', true);
        respone.end(Chuoi_Kq);
      break;
      case 'getAll_Lac':
        var danhSachLac = {}
        danhSachLac = Du_lieu.DanhSach_Lac
        Chuoi_Kq = JSON.stringify(danhSachLac)
        console.log(Chuoi_Kq);
        respone.setHeader("Access-Control-Allow-Origin", '*');
        respone.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        respone.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
        respone.setHeader('Access-Control-Allow-Credentials', true);
        respone.end(Chuoi_Kq);
      break;
      case 'getAll_BongTai':
        var danhSachBongTai = {}
        danhSachBongTai = Du_lieu.DanhSach_BongTai
        Chuoi_Kq = JSON.stringify(danhSachBongTai)
        console.log(Chuoi_Kq);
        respone.setHeader("Access-Control-Allow-Origin", '*');
        respone.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        respone.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
        respone.setHeader('Access-Control-Allow-Credentials', true);
        respone.end(Chuoi_Kq);
      break;
      case 'getAll':
        var danhSachAll = []
        var danhSachNhan = {}
        danhSachNhan = Du_lieu.DanhSach_Nhan
        var danhSachDayChuyen = {}
        danhSachDayChuyen = Du_lieu.DanhSach_DayChuyen
        var danhSachLac = {}
        danhSachLac = Du_lieu.DanhSach_Lac
        var danhSachBongTai = {}
        danhSachBongTai = Du_lieu.DanhSach_BongTai
        danhSachNhan.forEach(element => {
          danhSachAll.push(element)
        })
        danhSachDayChuyen.forEach(element => {
          danhSachAll.push(element)
        });
        danhSachLac.forEach(element => {
          danhSachAll.push(element)
        });
        danhSachBongTai.forEach(element => {
          danhSachAll.push(element)
        });

        Chuoi_Kq = JSON.stringify(danhSachAll)
        console.log(Chuoi_Kq);
        respone.setHeader("Access-Control-Allow-Origin", '*');
        respone.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        respone.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
        respone.setHeader('Access-Control-Allow-Credentials', true);
        respone.end(Chuoi_Kq);
      break;
      default:
        Chuoi_Kq = Luu_tru.readInfoService()
        respone.setHeader("Access-Control-Allow-Origin", '*');
        respone.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        respone.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
        respone.setHeader('Access-Control-Allow-Credentials', true);
        respone.end(Chuoi_Kq);
        break;
    }
  })
})

/**
 * Normalize a port into a number, string, or false.
 */

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


Dich_vu.listen(Port,
  console.log(`Dịch vụ Dữ liệu đang thực thi tại địa chỉ: http://localhost:${Port}`)
);
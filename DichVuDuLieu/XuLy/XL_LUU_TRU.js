
var File = require("fs")
var ThuMucDuLieu = "DichVuLuuTru"
var Cong_nghe = "json"

function DocThongTinDichVu() {
  var DuongDan = "index.html"
  var ChuoiThongTin = File.readFileSync(DuongDan, "UTF-8")
  return Chuoi_Thong_tin
}

function DocThongTinCuaHang() {
  var DuongDan = `${ThuMucDuLieu}/Cua_hang.json`
  var ChuoiThongTin = File.readFileSync(DuongDan, "UTF-8")
  return JSON.parse(Chuoi_Thong_tin)
}


class XL_LUU_TRU {

  Doc_Du_lieu(Loai_Doi_tuong) {
    var Danh_sach = []
    var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong
    var Danh_sach_Ten_Tap_tin = File.readdirSync(Duong_dan, "UTF-8")
    Danh_sach_Ten_Tap_tin.forEach(Ten => {
      if (Ten.toLowerCase().endsWith(Cong_nghe)) {
        var Chuoi = File.readFileSync(Duong_dan + "//" + Ten, "UTF-8")
        var Doi_tuong = JSON.parse(Chuoi)
        Danh_sach.push(Doi_tuong)
      }

    })

    return Danh_sach
  }
  Doc_Thong_tin_Cua_hang() {
    return Doc_Thong_tin_Cua_hang()
  }
  Doc_Thong_tin_Dich_vu() {
    return Doc_Thong_tin_Dich_vu()
  }

  Ghi_moi_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {
    var Kq = ""
    try {
      var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//" + Doi_tuong.Ma_so + "." + Cong_nghe
      var Chuoi = JSON.stringify(Doi_tuong, null, "\t")
      File.writeFileSync(Duong_dan, Chuoi, "UTF-8")
    } catch (Loi) {
      Kq = Loi
    }

    return Kq
  }

  Cap_nhat_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {
    return this.Ghi_moi_Doi_tuong(Loai_Doi_tuong, Doi_tuong)
  }

  Doc_Danh_sach_Thanh_ly(Loai_Doi_tuong) {
    var Danh_sach = []
    var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//Thanh_ly"
    var Danh_sach_Ten_Tap_tin = File.readdirSync(Duong_dan, "UTF-8")
    Danh_sach_Ten_Tap_tin.forEach(Ten => {
      if (Ten.toLowerCase().endsWith(Cong_nghe)) {
        var Chuoi = File.readFileSync(Duong_dan + "//" + Ten, "UTF-8")
        var Doi_tuong = JSON.parse(Chuoi)
        Danh_sach.push(Doi_tuong)
      }

    })
    return Danh_sach
  }


  Thanh_ly_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {
    var Kq = ""
    try {

      var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//" + Doi_tuong.Ma_so + "." + Cong_nghe
      var Duong_dan_Thanh_ly = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//Thanh_ly//" + Doi_tuong.Ma_so + "." + Cong_nghe
      File.unlinkSync(Duong_dan)
      var Chuoi = JSON.stringify(Doi_tuong, null, "\t")
      File.writeFileSync(Duong_dan_Thanh_ly, Chuoi, "UTF-8")
    } catch (Loi) {
      Kq = Loi
    }

    return Kq
  }
  Phuc_hoi_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {
    var Kq = ""
    try {

      var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//" + Doi_tuong.Ma_so + "." + Cong_nghe
      var Duong_dan_Thanh_ly = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//Thanh_ly//" + Doi_tuong.Ma_so + "." + Cong_nghe
      File.unlinkSync(Duong_dan_Thanh_ly)
      var Chuoi = JSON.stringify(Doi_tuong, null, "\t")
      File.writeFileSync(Duong_dan, Chuoi, "UTF-8")
    } catch (Loi) {
      Kq = Loi
    }

    return Kq
  }
  Xoa_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {
    var Kq = ""
    try {
      var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//" + Doi_tuong.Ma_so + "." + Cong_nghe
      var Duong_dan_Xoa = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//Xoa//" + Doi_tuong.Ma_so + "." + Cong_nghe
      File.unlinkSync(Duong_dan)
      var Chuoi = JSON.stringify(Doi_tuong, null, "\t")
      File.writeFileSync(Duong_dan_Xoa, Chuoi, "UTF-8")

    } catch (Loi) {
      Kq = Loi
    }

    return Kq
  }

}



//Public để các file js khác gọi 
var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly





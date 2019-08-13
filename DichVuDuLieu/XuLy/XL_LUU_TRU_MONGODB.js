
var File = require("fs")
// MongoDB
var DbConnection = require('../XuLy/XL_KET_NOI_MONGODB');

function Doc_Thong_tin_Dich_vu() {
  var Duong_dan = "index.html"
  var Chuoi_Thong_tin = File.readFileSync(Duong_dan, "UTF-8")
  return Chuoi_Thong_tin
}


class XL_LUU_TRU {

  readInfoService(){
    return Doc_Thong_tin_Dich_vu()
  }

  async getShopInfo() {
    try {
      var db = await DbConnection.Get()
      var Cua_hang = await db.collection("Cua_hang").find({}).toArray()
      return Cua_hang
    } catch (Loi) {
      console.log(Loi)
    }
  }
  async getUserInfo() {
    try {
      var db = await DbConnection.Get();
      var Nguoi_dung = await db.collection("Nguoi_dung").find({}).toArray()
      return Nguoi_dung
    } catch (Loi) {
      console.log(Loi)
    }
  }

  async  getAll(Loai_Doi_tuong) {
    try {
      var db = await DbConnection.Get()
      var doiTuongKQ = await db.collection(Loai_Doi_tuong).find({"TrangThai":1}).toArray()
      return doiTuongKQ
    } catch (Loi) {
      console.log(Loi)
    }
  }

  // async  getAll_Thanh_ly(Loai_Doi_tuong) {
  //   try {
  //     var db = await DbConnection.Get()
  //     var Thanh_ly = await db.collection("Thanh_ly").find({}).toArray()
  //     return Thanh_ly
  //   } catch (Loi) {
  //     console.log(Loi)
  //   }
  // }
  
  async  insertNewObject(Loai_Doi_tuong, Doi_tuong) {

    try {
      var db = await DbConnection.Get()
      var Kq = await db.collection(Loai_Doi_tuong).insert(Doi_tuong)
      return Kq

    } catch (Loi) {
      console.log(Loi)
    }
  }
  async updateObject(Loai_Doi_tuong, Bieu_thuc_dieu_kien, Gia_tri_Cap_nhat) {
    try {
      var db = await DbConnection.Get()

      var Kq = await db.collection(Loai_Doi_tuong).update(Bieu_thuc_dieu_kien, Gia_tri_Cap_nhat)

      return Kq

    } catch (Loi) {
      console.log(Loi);
    }
  }
  async  removeObject(Loai_Doi_tuong, Bieu_thuc_dieu_kien) {
    try {
      var db = await DbConnection.Get()
      var Kq = await db.collection(Loai_Doi_tuong).remove(Bieu_thuc_dieu_kien);
      return Kq
    } catch (Loi) {
      console.log(Loi);
    }
  }
}



//Public để các file js khác gọi 
var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly





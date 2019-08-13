var urlService = "http://localhost:1000"
var urlMedia    = "http://localhost:1001"
//var urlService = "https://data-services-lamtm-sg.herokuapp.com/"
//var urlMedia = "https://media-services-lamtm-sg.herokuapp.com/"


//************** Các Hàm Xử lý Đọc Xuất   ***********
function getAll_Nhan() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `action=getAll_Nhan`
    var Dia_chi_Xu_ly = `${urlService}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function getAll_DayChuyen(){
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `action=getAll_DayChuyen`
    var Dia_chi_Xu_ly = `${urlService}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function getAll_Lac(){
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `action=getAll_Lac`
    var Dia_chi_Xu_ly = `${urlService}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function getAll_BongTai(){
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `action=getAll_BongTai`
    var Dia_chi_Xu_ly = `${urlService}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function getAll(){
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `action=getAll`
    var Dia_chi_Xu_ly = `${urlService}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function insertNewProduct(sanPham){
    var duLieu= {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `action=themSanPham`
    var Dia_chi_Xu_ly = `${urlService}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(sanPham)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        duLieu = JSON.parse(Chuoi_JSON)
    return duLieu
}

function Ghi_Media(Hinh) {
    
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi_Xu_ly = `${urlMedia}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Hinh)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_KQ = Xu_ly_HTTP.responseText
    return Chuoi_KQ
}

function xuatDanhSachSanPham(view, danhSachSanPham){
    view.innerHTML = '';
    var i = 0;
    danhSachSanPham.forEach(element => {
        i++;
        var giaVang =   element['CauTao']['ThanhPhanVang']['GiaHienTai']['DonGia'];
        var giaHot  =   element['CauTao']['ThanhPhanHat']['GiaHienTai']['DonGia'];
        var tienCong    =   element['CauTao']['TienCong'];
        var thanhTien =     parseInt(giaVang) + parseInt(giaHot) + parseInt(tienCong);
        var tam = document.createElement('tr');
        var noiDung = `
            <td>${i}</td>
            <td><img src="${urlMedia}/${element['MaSo']}.png" alt="" /></td>
            <td>${element['MaSo']}</td>
            <td>
                <button class="pd-setting">Active</button>
            </td>
            <td>${giaVang}</td>
            <td>${giaHot}</td>
            <td>${tienCong}</td>
            <td>${thanhTien}</td>
            <td>
                <a href="product-edit.html?maSP=${element['MaSo']}" data-toggle="tooltip" title="Sửa" class="pd-setting-ed btn"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Sửa</a>
                <a href="product-edit.html?maSP=${element['MaSo']}" data-toggle="tooltip" title="Xóa" class="pd-setting-ed btn"><i class="fa fa-trash-o" aria-hidden="true"></i>Xóa</a>
            </td>
        `;
        tam.innerHTML = noiDung;
        view.appendChild(tam);
    });
}

function xuatChiTietSanPham(view, id){

}
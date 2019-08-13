var urlService = "http://localhost:1000"
var urlMedia = "http://localhost:1001"
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

function getAll_DayChuyen() {
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

function getAll_Lac() {
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

function getAll_BongTai() {
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

function getAll() {
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

function insertNewProduct(sanPham) {
    var duLieu = {}
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

function Convert_Danhmuc_DL(type){
    if(type == "BongTai"){
        return "earrings"
    }else if(type == "DayChuyen"){
        return "necklaces"
    }else if(type == "Nhan"){
        return "rings"
    }else if(type == "Lac"){
        return "Bangles"
    }else{
        return 0
    }
}

function XL_Danh_muc(view) {
    var params = getSearchParameters();
    if (params.category == "rings") {
        view.innerHTML = `<a href="javascript:void(0)">Rings</a>`;
        return getAll_Nhan()
    } else if (params.category == "necklaces") {
        view.innerHTML = `<a href="javascript:void(0)">Necklaces</a>`;
        return getAll_DayChuyen()
    } else if (params.category == "earrings") {
        view.innerHTML = `<a href="javascript:void(0)">Earrings</a>`;
        return getAll_BongTai()
    } else if (params.category == "bangles") {
        view.innerHTML = `<a href="javascript:void(0)">Bangles</a>`;
        return getAll_Lac()
    } else {
        view.innerHTML = `<a href="javascript:void(0)">All Products</a>`;
        return getAll()
    }
}

function Don_gia_Ban(San_pham) {
    var giaVang = San_pham['CauTao']['ThanhPhanVang']['GiaHienTai']['DonGia'];
    var giaHot = San_pham['CauTao']['ThanhPhanHat']['GiaHienTai']['DonGia'];
    var tienCong = San_pham['CauTao']['TienCong'];
    var thanhTien = parseInt(giaVang) + parseInt(giaHot) + parseInt(tienCong);
    return thanhTien;
}

function Tao_The_hien_San_pham(San_pham, view) {
    var the_hien = document.createElement("article")
    //the_hien.setAttribute("data", JSON.stringify(San_pham))
    var thanhTien = Don_gia_Ban(San_pham)
    var danhmuc = Convert_Danhmuc_DL(San_pham['Nhom'])
    var Chuoi_HTML = `
        <a href="product.html?id=${San_pham['MaSo']}&category=${danhmuc}">
        <img src="${urlMedia}/${San_pham['MaSo']}.png" alt="">
        <h3>${San_pham['MaSo']}</h3>
        </a>
        <h4>$${thanhTien}</h4>
        <span id="${San_pham['MaSo']}" onClick="Them_vao_Gio_hang(this.id)"><a id="btn-${San_pham['MaSo']}" href="javascript:void(0)" class="btn-add">Add to cart</a></span>
    `;
    the_hien.innerHTML = Chuoi_HTML;
    view.appendChild(the_hien)
    return the_hien
}

function xuatDanhSachSanPham(view, danhSachSanPham) {
    view.innerHTML = '';
    var ds = []
    if (sessionStorage.getItem("Danh_sach_Chon") != undefined) {
        ds = JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
    }
    danhSachSanPham.forEach(element => {
        Tao_The_hien_San_pham(element, view)

        var id = element['MaSo']
        var vt = ds.indexOf(id)
        if (vt == -1) { // Nếu không có trong danh sách vị trí sẽ bằng -1
            document.getElementById("btn-" + id).classList.remove('btn-add-remove');
            document.getElementById("btn-" + id).classList.add('btn-add');
            document.getElementById("btn-" + id).innerHTML = "Add to cart"
        } else {
            document.getElementById("btn-" + id).classList.remove('btn-add');
            document.getElementById("btn-" + id).classList.add('btn-add-remove');
            document.getElementById("btn-" + id).innerHTML = "Remove to cart"
        }
    });
}

function Xuat_Danh_sach_Phan_trang(Danh_sach, vt, limit, i) {
    var dem = 0
    addClassActive(i)
    danhSachSanPham.innerHTML = ""
    var ds = []
    if (sessionStorage.getItem("Danh_sach_Chon") != undefined) {
        ds = JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
    }
    Danh_sach.forEach((San_pham, index) => {

        if (index >= vt && dem < limit) {
            Tao_The_hien_San_pham(San_pham, danhSachSanPham) //Lấy thể hiện html của sản phẩm
            var id = San_pham['MaSo']
            var vt1 = ds.indexOf(id)
            if (vt1 == -1) { // Nếu không có trong danh sách vị trí sẽ bằng -1
                document.getElementById("btn-" + id).classList.remove('btn-add-remove');
                document.getElementById("btn-" + id).classList.add('btn-add');
                document.getElementById("btn-" + id).innerHTML = "Add to cart"
            } else {
                document.getElementById("btn-" + id).classList.remove('btn-add');
                document.getElementById("btn-" + id).classList.add('btn-add-remove');
                document.getElementById("btn-" + id).innerHTML = "Remove to cart"
            }
            dem++
        }
    });
}

//Kiểm tra session để xuất ra vị trí trang và trang đang lưu
function Session_Current_page(Danh_sach, So_san_pham_cho_mot_trang) {
    if (sessionStorage.getItem("current_page") == null) {
        Xuat_Danh_sach_Phan_trang(Danh_sach, 0, So_san_pham_cho_mot_trang, 1)
    } else {
        var m = (sessionStorage.getItem("current_page") - 1) * So_san_pham_cho_mot_trang
        Xuat_Danh_sach_Phan_trang(Danh_sach, m, So_san_pham_cho_mot_trang, sessionStorage.getItem("current_page"))
    }
}

//Add và Remove class active
function addClassActive(i) {
    /**
     * Khi function này được thực hiện sẽ check button số trang đã được active chưa
     * Nếu chưa thì add class active.
     * Nếu chưa có session current_page thì add session với vị trí i hiện tại
     * Nếu đã tồn tại thì session đó lưu vị trí trước đó. Xóa class active và set lại session
     */
    var element = document.getElementById("page-" + i) //Lấy id của button số trang
    if (element != null) {
        element.classList.add("active");
    }
    if (sessionStorage.getItem("current_page") == null) {
        sessionStorage.setItem("current_page", i)
    }
    if (sessionStorage.getItem("current_page") != i) {
        var current = sessionStorage.getItem("current_page")
        if (document.getElementById("page-" + current)) {
            document.getElementById("page-" + current).classList.remove("active");
        }
        sessionStorage.setItem("current_page", i)
    }
}

function Tao_The_Hien_Phan_trang(Danh_sach, So_san_pham_cho_mot_trang, Th_Top, Th_Bot) {

    //Khởi tạo danh sách phân trang từ session
    //Session_Current_page(Danh_sach, So_san_pham_cho_mot_trang) 

    // Xuất danh sách sản phẩm đã được phân trang mặc định
    Xuat_Danh_sach_Phan_trang(Danh_sach, 0, So_san_pham_cho_mot_trang, 1)

    var Tong_so_san_pham = Danh_sach.length
    var Tong_trang = (Tong_so_san_pham % So_san_pham_cho_mot_trang == 0) ? Tong_so_san_pham / So_san_pham_cho_mot_trang : parseInt(Tong_so_san_pham / So_san_pham_cho_mot_trang) + 1
    var noi_dung_HTML = `
        <ul>
        <li><a href="#"><span class="ico-prev"></span></a></li>
    `
    var k = 1
    if (sessionStorage.getItem("current_page") == null) {
        noi_dung_HTML += '<li id="page-1" class="active"><a href="javaScript:void(0)" onclick="Xuat_Danh_sach_Phan_trang(Du_lieu,0 ,${So_san_pham_cho_mot_trang} ,1)" >1</a></li>'
        k = 2
    }
    for (var i = k; i <= Tong_trang; i++) {
        var vt = (i - 1) * So_san_pham_cho_mot_trang
        if (sessionStorage.getItem("current_page") == null) {
            noi_dung_HTML += `<li id="page-${i}"><a href="javaScript:void(0)" onclick="Xuat_Danh_sach_Phan_trang(Du_lieu,${vt} ,${So_san_pham_cho_mot_trang} ,${i})" >${i}</a></li>`
        } else {
            if (sessionStorage.getItem("current_page") == i) {
                noi_dung_HTML += `<li id="page-${i}" class="active"><a href="javaScript:void(0)" onclick="Xuat_Danh_sach_Phan_trang(Du_lieu,${vt} ,${So_san_pham_cho_mot_trang} ,${i})" >${i}</a></li>`
            } else {
                noi_dung_HTML += `<li id="page-${i}"><a href="javaScript:void(0)" onclick="Xuat_Danh_sach_Phan_trang(Du_lieu,${vt} ,${So_san_pham_cho_mot_trang} ,${i})" >${i}</a></li>`
            }
        }
    }
    noi_dung_HTML += `
        <li><a href="#"><span class="ico-next"></span></a></li>
        </ul>
    `
    Th_Top.innerHTML = noi_dung_HTML
    Th_Bot.innerHTML = noi_dung_HTML
}

function Them_vao_Gio_hang(id) {
    var ds = []
    if (sessionStorage.getItem("Danh_sach_Chon") != undefined) {
        ds = JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
    }
    var vt = ds.indexOf(id) //Lấy ra vị trí của id sản phẩm đó trong danh sách
    if (vt == -1) { // Nếu không có trong danh sách vị trí sẽ bằng -1

        /**
        * Thư viện sweetalert
        * Được khởi tạo khi function này được dùng tới để người dùng biết sản phẩm đã được thêm
        */
        Swal.fire({
            type: 'success',
            title: 'Add to cart',
            text: id,
            timer: 500,
        })
        document.getElementById("btn-" + id).classList.remove('btn-add');
        document.getElementById("btn-" + id).classList.add('btn-add-remove');
        document.getElementById("btn-" + id).innerHTML = "Remove to cart"
        ds.push(id) // Thêm vào danh sách
    } else {
        document.getElementById("btn-" + id).classList.remove('btn-add-remove');
        document.getElementById("btn-" + id).classList.add('btn-add');
        document.getElementById("btn-" + id).innerHTML = "Add to cart"
        ds.splice(vt, 1) // Nếu đã tồn tại thì Xóa
    }

    /**
     * Set danh sách sản phẩm vào lại session Danh_sach_chon
     * Nếu không còn sản phẩm nào thì xóa session
     */
    if (ds.length > 0) {
        sessionStorage.setItem("Danh_sach_Chon", JSON.stringify(ds))
    } else {
        sessionStorage.removeItem("Danh_sach_Chon")
    }

    //Sau khi có số lượng sản phẩm thì output số lượng sản phẩm lên màn hình
    Tao_The_hien_Gio_hang()
}

function Tao_The_hien_Gio_hang() {
    var ds = []
    if (sessionStorage.getItem("Danh_sach_Chon") != undefined) {
        ds = JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
    }
    if (ds.length > 0) {
        TH_GioHang.innerHTML = `<a href="cart.html"><span class="ico-products"></span>${ds.length} products</a>`
    } else {
        TH_GioHang.innerHTML = `<a href="javascript:void(0)"><span class="ico-products"></span>0</a>`
    }
}

function XL_Limit(checkboxes) {
    v_limit = 8
    if (checkboxes[2].checked) {
        v_limit = 32
    } else if (checkboxes[1].checked) {
        v_limit = 16
    } else {
        v_limit = 8
    }
    return v_limit
}

function XL_Crease(checkboxes) {
    crease = 0
    if (checkboxes[4].checked) {
        crease = 2
    }
    if (checkboxes[3].checked) {
        crease = 1
    }
    return crease
}

function XL_Type(checkboxes) {
    type = ""
    if (checkboxes[5].checked) {
        type += "KimCuong"
    }
    return type
}

function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
    var params = {};
    var prmarr = prmstr.split("&");
    for (var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function Xuat_San_pham_Mua(Danh_sach_Mua, Th_Cha) {
    
    Th_Cha.innerHTML = ""
    var noi_dung_HTML = ``
    noi_dung_HTML += `
        <tr>
        <th class="items">Items</th>
        <th class="price">Price</th>
        <th class="qnt">Quantity</th>
        <th class="total">Total</th>
        <th class="delete"></th>
        </tr>
    `
    tong = 0;
    ship = 0;
    i = 0;
    Danh_sach_Mua.forEach(San_pham => {
        thanhTien = Don_gia_Ban(San_pham)
        tong += thanhTien
        noi_dung_HTML += `
        <tr>
            <td class="items">
                <div class="image">
                    <img width="112px" height="112px" src="${urlMedia}/${San_pham['MaSo']}.png" alt="">
                </div>
                <h3><a href="#">${San_pham['Ten']}</a></h3>
                <p>
                ID: ${San_pham['MaSo']} </br>
                Thành phần vàng: ${San_pham['CauTao']['ThanhPhanVang']['ChatLieu']} </br>
                Tiền Công: ${San_pham['CauTao']['TienCong']}
                </p>
            </td>
            <td class="price">$${Tao_Chuoi_The_hien_So_nguyen_duong(thanhTien)}</td>
            <td class="qnt">
                <select id="ddlViewBy${i}" onchange="CapNhatTongTien(${i},${thanhTien},${Danh_sach_Mua.length})">
                    <option value="1" selected="selected">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <input id="price${i}" value="${thanhTien}" hidden>
            </td>        
            <td id="total_${i}" class="total">$${Tao_Chuoi_The_hien_So_nguyen_duong(thanhTien)}</td>
            <td class="delete"><a href="javascript:void(0)" class="ico-del" onclick="XoaSanPhamTrongGioHang(${i})"></a></td>
        </tr>
    `
        i += 1;
    })
    Th_Cha.innerHTML = noi_dung_HTML

    //Thể hiện tổng tiền ở cuối trang
    The_hien_Footer_tong_tien(Danh_sach_Mua.length)

}

function XoaSanPhamTrongGioHang(vt) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                type: 'success',
                title: 'Deleted!',
                text: "Product has been deleted.",
                timer: 500,
            })
            //sessionStorage.removeItem(vt))
            var ds = []
            ds = JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
            ds.splice(vt, 1) // Nếu đã tồn tại thì Xóa

            /**
             * Set danh sách sản phẩm vào lại session Danh_sach_chon
             * Nếu không còn sản phẩm nào thì xóa session
             */
            if (ds.length > 0) {
                sessionStorage.setItem("Danh_sach_Chon", JSON.stringify(ds))
            } else {
                sessionStorage.removeItem("Danh_sach_Chon")
                window.history.back();
            }

            document.getElementById("Th_Danh_sach_San_pham").deleteRow(vt + 1)
            The_hien_Footer_tong_tien(ds.length)
            Tao_The_hien_Gio_hang()
        }
    })

}

function CapNhatTongTien(id, thanhTien, length) {
    var selectBox = document.getElementById("ddlViewBy" + id);
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    tongtien = thanhTien * selectedValue
    document.getElementById("total_" + id).innerHTML = "$" + Tao_Chuoi_The_hien_So_nguyen_duong(tongtien)

    //Thể hiện tổng tiền ở cuối trang
    The_hien_Footer_tong_tien(length)
}

function The_hien_Footer_tong_tien(length) {

    //Tính tổng tiền
    tong = 0
    for (i = 0; i < length; i++) {
        var number = document.getElementById("price" + i).value;
        var slb = document.getElementById("ddlViewBy" + i);
        var slvalue = slb.options[slb.selectedIndex].value;
        tong += number * slvalue
    }

    //Xuất html ra màn hình
    noi_dung_total = `
                    <h4>Subtotal: $${Tao_Chuoi_The_hien_So_nguyen_duong(tong)}</h4>
					<p>+shippment: Free ship</p>
					<h3 id="Totalpay">Total to pay: <strong>$${Tao_Chuoi_The_hien_So_nguyen_duong(tong)}</strong></h3>
					<a href="javascript:void(0)" class="btn-grey">Finalize and pay</a>
    `
    TH_Total.innerHTML = noi_dung_total
}

function Tao_Chuoi_The_hien_So_nguyen_duong(So_nguyen) {
    var Chuoi_The_hien = ""
    var Chuoi_So_nguyen = So_nguyen.toString()
    var So_Ky_so = Chuoi_So_nguyen.length
    if (So_Ky_so % 3 == 0) {
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    } else if (So_Ky_so % 3 == 1) {
        Chuoi_The_hien = Chuoi_So_nguyen[0]
        if (So_Ky_so > 1)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(1)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."

        }
    } else if (So_Ky_so % 3 == 2) {
        Chuoi_The_hien = Chuoi_So_nguyen[0] + Chuoi_So_nguyen[1]
        if (So_Ky_so > 2)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(2)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    }
    return Chuoi_The_hien
}

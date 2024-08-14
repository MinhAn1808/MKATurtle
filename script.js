//khai báo
var loginState = false
let users = {
    userName: "",
    userPassword: ""
}
let userInused = {
    userName: "",
    userPassword: ""
}
//Check userNameIsExits
const checkExits = function (userName) {
    var flag = true
    let usersNow = {
        userName: "",
        userPassword: ""
    }
    for (let index = 0; index < sessionStorage.length; index++) {
        usersNow = JSON.parse(sessionStorage.getItem(sessionStorage.key(index)))
        if (userName == usersNow.userName) {
            flag = false
            document.getElementById("title1").innerHTML = "Tên đăng nhập đã tồn tại vui lòng thử lại !"
        }
    }
    return flag
}
//userclick
const userclick = function(){
    window.confirm("Vui lòng kéo xuống phía dưới để hoàn thành đơn đặt hàng")
    if(nowUser == null || nowUser == ""){
        window.confirm("Bạn phải đăng nhập để tiếp tục")
    }
}
//Timeout
const timeOut = function () {
    document.getElementById("login").innerHTML = " "
}
//checkLoginState
const checkLogin = function () {
    if (loginState == false) {
        document.getElementById("login").innerHTML = "Bạn nên đăng nhập để mua hàng"
    } else {
        document.getElementById("login").innerHTML = " "
    }
}()
//Login //ERROR
const login = function () {
    let flag = false
    let usersNow = {
        userName: "",
        userPassword: ""
    }
    users.userName = document.getElementById("user-name").value
    users.userPassword = document.getElementById("user-password").value
    for (let index = 1; index < sessionStorage.length; index++) {
        usersNow = JSON.parse(sessionStorage.getItem(sessionStorage.key(index)))
        if (usersNow.userName == users.userName) {
            flag = true
            if (usersNow.userPassword == users.userPassword) {
                userInused = users
                document.getElementById("title1").innerHTML = "Đăng nhập thành công ! Xin chào " + userInused.userName
                break;
            }
            else {
                document.getElementById("title1").innerHTML = "Sai mật khẩu"
            }
        }
    }
    if (flag == false) {
        document.getElementById("title1").innerHTML = "Tên đăng nhập không tồn tại"
    }

};
//Register
const register = function () {
    users.userName = document.getElementById("user-name").value
    users.userPassword = document.getElementById("user-password").value
    if (checkPassword(users.userPassword) == true) {
        if (checkExits(users.userName) == true) {
            sessionStorage.setItem(users.userName, JSON.stringify(users))
            document.getElementById("title1").innerHTML = "Đăng kí tài khoản thành công"
        }
    }

}

//CheckValid
const checkPassword = function (str) {
    let flag = true
    let count = 0;
    let n = 0;
    for (let index = 0; index < str.length; index++) {
        count++;
    }
    if (count < 8) {
        flag = false
        document.getElementById("title1").innerHTML = "Mật khẩu phải ít nhất 8 kí tự"
    }
    return flag;
}
//uudai
const uudai = function(){
    window.confirm("Combo🐢sọc baby: 100🌾/3c | xanh baby: 100🌾/3c | ao bé: 100🌾/3c | mix 3 loại (xanh sọc - pond) baby 100🌾/3c | mix 4c baby (tự chọn) : 125🌾/4c | sọc 5,6cm + xanh + pond (baby) : 110🌾 🥰tặng cám khi mua Combo ")
}


//Giaodien
const body = document.querySelector('body')
const defaultTheme = 'light'

const setTheme = (theme) =>{
    localStorage.setItem('theme', theme)
    body.setAttribute('data-theme', theme)
}
const giaodien = () =>{
    const activeTheme = localStorage.getItem('theme');
    if(activeTheme == "light"){
        setTheme("dark")
    }else {setTheme("light")}
}
const setThemeOnInit = () =>{
    const savedTheme = localStorage.getItem('theme')
    savedTheme 
        ? body.setAttribute('data-theme', savedTheme)
        : setTheme(defaultTheme)
}
setThemeOnInit()
//Cần nghiên cứu

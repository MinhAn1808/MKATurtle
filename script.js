//khai báo
var loginState = false
var userNameList = []
var userPasswordList = []
var nowUser = ""

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
//Login
const login = function () {
    var loginFlag = false
    var userName = document.getElementById("user-name").value
    var userPassword = document.getElementById("user-password").value
    
    for (let index = 0; index < userNameList.length; index++) {
        if (userNameList[index] == userName) {
            if (userPassword == userPasswordList[index]) {
                loginFlag = true
                nowUser = userName
                document.getElementById("login").innerHTML = "Đăng nhập thành công ! Xin chào " + nowUser
                setTimeout(timeOut, 3000)
            }
            else{
                document.getElementById("login").innerHTML = "Sai mật khẩu"
                setTimeout(timeOut, 3000)
                break
            }
        }
        else if (loginFlag == false) {
            document.getElementById("login").innerHTML = "Tài khoản không tồn tại ! Vui lòng thử lại hoặc nhấn đăng ký"
            setTimeout(timeOut, 3000)
        }
    }

}
//Register
const register = function () {
    var userName = document.getElementById("user-name").value
    var userPassword = document.getElementById("user-password").value
    
    if (checkExits(userName) == true) {
        if (checkValidPassword(userPassword) == true) {
            userNameList.push(userName)
            userPasswordList.push(userPassword)
            document.getElementById("login").innerHTML = "Đăng ký thành công"
            setTimeout(timeOut, 3000)
        }
        else{
            document.getElementById("login").innerHTML = "Mật khẩu nên gồm ít nhất 8 kí tự, 1 chữ cái in hoa và 1 kí tự đặc biệt"
        }
    }

}
//CheckExits
const checkExits = function (userName) {
    var exitFlag = true
    for (let index = 0; index < userNameList.length; index++) {
        if (userName == userNameList[index]) {
            document.getElementById("login").innerHTML = "Tên đăng nhập đã tồn tại !"
            exitFlag = false
            break
        }
    }
    return exitFlag
}
//CheckValid
const checkValidPassword = function (userPassword) {
    var validFlag = true
    var count = 0
    for (let index = 0; index < userPassword.length; index++) {
        count++
    }
    if (count < 8) {
        validFlag = false
    }
    return validFlag
}
//uudai
const uudai = function(){
    window.confirm("Combo🐢sọc baby: 100🌾/3c | xanh baby: 100🌾/3c | ao bé: 100🌾/3c | mix 3 loại (xanh sọc - pond) baby 100🌾/3c | mix 4c baby (tự chọn) : 125🌾/4c | sọc 5,6cm + xanh + pond (baby) : 110🌾 🥰tặng cám khi mua Combo ")
}
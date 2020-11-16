 function login(){
    var akun1 = ["ahmad2017","integrity"];
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user == akun1[0]){
        if(pass == akun1[1]){
            alert("Login Berhasil !!");
            window.location.href="index.html"
        }
        else{
            alert("Password Salah !!");
        }
    }
    else{
        alert("Username atau Password Salah !!");
    }
 }
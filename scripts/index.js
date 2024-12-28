let form =document.getElementById("form")
form.addEventListener("submit",function(){
    let email = form.email.value;
    let password = form.password.value;
    if (email==("admin@empher.com")||password==("empher@123")){
        alert("Logged in as Admin.")
        window.location.href="admin.html"
    }
    else{

    }

})
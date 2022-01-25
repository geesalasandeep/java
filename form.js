function loginForm(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value.trim() == ""){
        alert('please fill username')
        username.style.border = '2px solid red'
        document.getElementById('info').style.visibility='visible';
        return false;
    }
    else if (username.value.length <=5){
        alert('min value is 5 in user name');
        username.style.border = ' 2px solid red'
        return false;
    }
    else{
        return true;
    }

}
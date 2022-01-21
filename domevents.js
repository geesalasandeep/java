// function magic(){
//     var ele = document.getElementById('design');
//     ele.style.height = '200px';
//     ele.style.width = '200px';
//     ele.style.backgroundColor = 'red';
// }

// function magicgone(){
//     var ele = document.getElementById('design');
//     ele.style.height = '100px';
//     ele.style.width = '100px';
//     ele.style.backgroundColor = 'black';

// }


// document.getElementById("mybtn").addEventListener("click",myFunction);

// function myFunction(){
//     alert('its ok try again');
// }



document.getElementById("mybtn").addEventListener("click",loginForm);


function loginForm(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    // document.getElementById("info").style.visibility = 'hidden';
    
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





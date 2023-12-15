document.addEventListener('DOMContentLoaded', function(){

   
    // console.log(temp)
    document.addEventListener('submit', function(event) {
        let username = document.getElementById("username");
        let huss = document.querySelector(".huss");
        let h_mail = document.querySelector(".huss_email");
        let em = document.getElementById("email");   
        let hu = document.getElementById("Password1");
        let pass = document.querySelector(".huss_pass");
        let hus = document.getElementById("Password2");
        let passes = document.querySelector(".huss_repeat");
        let check = document.getElementById("exampleCheck1");
        let agree = document.querySelector(".agree")
        
        let regx_ = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8}?)$/;

        let regularExpression = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
        if(username.value.trim()==""){
            username.style.border="solid 3px red";
            huss.style.display = "block";
            huss.style.color = "red";
            event.preventDefault();
            }
        else if(username.value.length<8){
            username.style.border="solid 3px red";
            huss.style.display = "block";
            huss.style.color = "red";
            event.preventDefault();
            }
        
        else if(regx_.test(em.value)==false){
            email.style.border="solid 3px red";
            h_mail.style.display = "block";
            h_mail.style.color = "red";
            event.preventDefault();
        }
       
        else if(regularExpression.test(hu.value)==false){
            console.log(hu.value)
            hu.style.border="solid 3px red";
            pass.style.display = "block";
            pass.style.color = "red";
            event.preventDefault();
        }
           
       else if(hu.value.trim()!=hus.value.trim()){
            hus.style.border="solid 3px red";
            passes.style.display = "block";
            passes.style.color = "red";
            event.preventDefault();
        }
        else if(check.checked==false){
            agree.style.display = "block";
            agree.style.color = "red";
            event.preventDefault();
        }

    });


});







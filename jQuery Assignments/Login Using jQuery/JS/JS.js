$('#main-navigation-menu').hide();
$('#main-add-button').hide();
$('.error-messages').hide();

var firstNameError=false;
var lastNameError=false;
var usernameError=false;
var emailError=false;
var phoneNumberError=false;
var passwordError=false;
var confirmPasswordError=false;

$('#register-first-name').focusout(function (){
    checkFirstName();
})
$('#register-last-name').focusout(function (){
    checkLastName();
})
$('#register-username').focusout(function (){
    checkUsername();
})
$('#register-email').focusout(function (){
    checkEmail();
})
$('#register-phone-number').focusout(function (){
    checkPhoneNumber();
})
$('#register-password').focusout(function (){
    checkPassword();
})
$('#register-confirm-password').focusout(function (){
    checkConfirmPassword();
})





function checkFirstName() {
    var pattern = /^[a-zA-Z]*$/;
    var firstName = $("#register-first-name").val();
    if (pattern.test(firstName) && firstName !== '') {
        $('#first-name-error').hide();
    } else {
        $('#first-name-error').show();
        firstNameError = true;
    }
 }

 function checkLastName() {
    var pattern = /^[a-zA-Z]*$/;
    var lastName = $("#register-last-name").val();
    if (pattern.test(lastName) && lastName !== '') {
        $('#last-name-error').hide();
    } else {
        $('#last-name-error').show();
        lastNameError = true;
    }
 }

 function checkUsername(){
     var username=$('#register-username').val();
     if(username.length>3 && username.length<10 &&username!==''){
         $('#username-error').hide();
     }
     else{
         $('#username-error').show();
         usernameError=true;
     }
 }

 function checkEmail() {
    var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var email = $('#register-email').val();
    if (pattern.test(email) && email !== '') {
       $('#email-error').hide();
    } else {
       $('#email-error').show();
       emailError = true;
    }
 }

 function checkPhoneNumber(){
     var phoneNumber=$('#register-phone-number').val();
     if(phoneNumber.length==10 && phoneNumber!==''){
         $('#phone-number-error').hide();
     }
     else{
         $('#phone-number-error').show();
         phoneNumberError=true;
     }
 }

 function checkPassword() {
    var password = $("#register-password").val();
    if (password.length < 8) {
       $("#password-error").show();
       passwordError = true;
    } else {
       $("#password-error").hide();
    }
 }

 function checkConfirmPassword() {
    var password = $("#register-password").val();
    var confirmPassword = $("#register-confirm-password").val();
    if (password !== confirmPassword) {
       $("#confirm-password-error").show();
       confirmPasswordError = true;
    } else {
       $("#confirm-password-error").hide();
    }
 }

 var registerUser={};
 var i=0;
 $(document).ready(function (){
     $('#register-page-button').click(function (){
        firstNameError=false;
        lastNameError=false;
        usernameError=false;
        emailError=false;
        phoneNumberError=false;
        passwordError=false;
        confirmPasswordError=false;
        checkFirstName();
        checkLastName();
        checkUsername();
        checkEmail();
        checkPhoneNumber();
        checkPassword();
        checkConfirmPassword();
        if (firstNameError === false && lastNameError === false && usernameError === false && emailError === false && phoneNumberError === false && passwordError === false && confirmPasswordError === false) {
            alert("Registration Successfull");
            var firstName = $("#register-first-name").val();
            var lastName = $("#register-last-name").val();
            var username=$('#register-username').val();
            var email = $('#register-email').val();
            var phoneNumber=$('#register-phone-number').val();
            var password = $("#register-password").val();
            var confirmPassword = $("#register-confirm-password").val();
            registerUser[i]=[firstName,lastName,username,email,phoneNumber,password,confirmPassword]
            i++
            localStorage.setItem("details",JSON.stringify(registerUser));
            var details=JSON.parse(localStorage.getItem("details"));
            $(':input').val('');
            return true;
            

         } 
         else {
            alert("Please fill the form correctly");
            return false;
         }
     })
     
 })


var clickHome;
$(document).ready(function (){
    $('#sign-in').click(function (){
        var username="Rohith";
        var password="admin";
        var newUsername=$('#login-username').val();
        var newPassword=$('#login-password').val();
        localStorage.setItem('name',username);
        var details=JSON.parse(localStorage.getItem("details"));
        if(details!==null){
            var len=Object.keys(details).length;
        }
        
        if(newUsername==='' && newPassword===''){
            alert("Please enter the details");
        }
        else if(newUsername==='' || newPassword===''){
            alert("Please enter the details");
        }
        else if(newUsername===username && newPassword===password){
            clickHome=1;
            localStorage.setItem('clickHome',clickHome)
            $('#main-navigation-menu').show();
            $('.adding-details').show();
            $('#main-add-button').show();
            $('#main-sign-in').hide();
            $('#sign-in').hide()
            $('#name').text(' ' + newUsername);
            $('#profile-name').text(newUsername);
            $('body').css('background-color','#04703a');
            $('#main-navigation-menu').css('background-color','white');
        }
        else{
            for(var i=0;i<len;i++){
                if(newUsername===details[i][2] && newPassword===details[i][5]){
                    localStorage.setItem('clickHome',clickHome)
                    clickHome=2;
                    $('#main-navigation-menu').show();
                    $('.adding-details').show();
                    $('#main-add-button').show();
                    $('#main-sign-in').hide();
                    $('#sign-in').hide()
                    $('#name').text(' ' + details[i][0]);
                    $('#profile-name').text(details[i][0]);
                    localStorage.setItem('name1',details[i][0])
                    $('body').css('background-color','#04703a');
                    $('#main-navigation-menu').css('background-color','white');
                }
                if(i==len-1 && newUsername!==details[i][2] && newPassword!==details[i][5]){
                    alert('Wrong Username or Password')
                }
            }
        }
    
    })
})

$(document).ready(function (){
    var clickHome=localStorage.getItem('clickHome')
    if(clickHome==1){
        var name=localStorage.getItem('name')
        $('#name1').text(name)
        console.log(name)
        $('#profile-name1').text(name)
    }
    else{
        var name1=localStorage.getItem('name1');
        $('#name1').text(name1);
        $('#profile-name1').text(name1);
    }
})
    
$(document).ready(function (){
    $('#navigation-menu-item-home').click(function(){
        window.open("index1.html");
    }); 
})

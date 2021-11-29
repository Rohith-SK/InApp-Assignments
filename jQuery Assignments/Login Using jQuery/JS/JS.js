$('#main-navigation-menu').hide();
$('#main-add-button').hide();
$('.error-messages').hide();
$('.add-error-messages').hide();
$('#user-details-table').hide();
$('.added-usernames').hide();

var firstNameError=false;
var lastNameError=false;
var usernameError=false;
var emailError=false;
var phoneNumberError=false;
var passwordError=false;
var confirmPasswordError=false;

$('#register-first-name').focusout(function (){
    CheckFirstName();
})
$('#register-last-name').focusout(function (){
    CheckLastName();
})
$('#register-username').focusout(function (){
    CheckUsername();
})
$('#register-email').focusout(function (){
    CheckEmail();
})
$('#register-phone-number').focusout(function (){
    CheckPhoneNumber();
})
$('#register-password').focusout(function (){
    CheckPassword();
})
$('#register-confirm-password').focusout(function (){
    CheckConfirmPassword();
})





function CheckFirstName() {
    var pattern = /^[a-zA-Z]*$/;
    var firstName = $("#register-first-name").val();
    if (pattern.test(firstName) && firstName !== '') {
        $('#first-name-error').hide();
    } else {
        $('#first-name-error').show();
        firstNameError = true;
    }
}

function CheckLastName() {
    var pattern = /^[a-zA-Z]*$/;
    var lastName = $("#register-last-name").val();
    if (pattern.test(lastName) && lastName !== '') {
        $('#last-name-error').hide();
    } else {
        $('#last-name-error').show();
        lastNameError = true;
    }
}

function CheckUsername(){
     var username=$('#register-username').val();
     if(username.length>3 && username.length<10 &&username!==''){
         $('#username-error').hide();
     }
     else{
         $('#username-error').show();
         usernameError=true;
     }
}

function CheckEmail() {
    var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var email = $('#register-email').val();
    if (pattern.test(email) && email !== '') {
       $('#email-error').hide();
    } else {
       $('#email-error').show();
       emailError = true;
    }
}

function CheckPhoneNumber(){
     var phoneNumber=$('#register-phone-number').val();
     if(phoneNumber.length==10 && phoneNumber!==''){
         $('#phone-number-error').hide();
     }
     else{
         $('#phone-number-error').show();
         phoneNumberError=true;
     }
}

function CheckPassword() {
    var password = $("#register-password").val();
    if (password.length < 8) {
       $("#password-error").show();
       passwordError = true;
    } else {
       $("#password-error").hide();
    }
}

function CheckConfirmPassword() {
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
        CheckFirstName();
        CheckLastName();
        CheckUsername();
        CheckEmail();
        CheckPhoneNumber();
        CheckPassword();
        CheckConfirmPassword();
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
        var name=localStorage.getItem('name');
        $('#name1').text(' ' + name);
        $('#profile-name1').text(name);
    }
    else{
        var name1=localStorage.getItem('name1');
        $('#name1').text(' ' + name1);
        $('#profile-name1').text(name1);
    }
})
    
$(document).ready(function (){
    $('#navigation-menu-item-home').click(function(){
        window.open("index1.html");
    }); 
})

var addUsernameError=false;
var addEmailError=false;
var addPasswordError=false;
var addPhoneNumberError=false;
var addAddressError=false;
var addPincodeError=false;

$('#add-username').focusout(function (){
    CheckAddUsername();
})
$('#add-email').focusout(function (){
    CheckAddEmail();
})
$('#add-password').focusout(function (){
    CheckAddPassword();
})
$('#add-phone-number').focusout(function (){
    CheckAddPhoneNumber();
})
$('#add-address').focusout(function (){
    CheckAddAddress();
})
$('#add-pincode').focusout(function (){
    CheckAddPincode();
})

function CheckAddUsername(){
    var addUsername=$('#add-username').val();
    if(addUsername.length>3 && addUsername.length<15 &&addUsername!==''){
        $('#add-username-error').hide();
    }
    else{
        $('#add-username-error').show();
        addUsernameError=true;
    }
}

function CheckAddEmail() {
    var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var addEmail = $('#add-email').val();
    if (pattern.test(addEmail) && addEmail !== '') {
       $('#add-email-error').hide();
    } else {
       $('#add-email-error').show();
       addEmailError = true;
    }
}

 
 function CheckAddPassword() {
    var addPassword = $("#add-password").val();
    if (addPassword.length < 8) {
       $("#add-password-error").show();
       addPasswordError = true;
    } else {
       $("#add-password-error").hide();
    }
}

function CheckAddPhoneNumber(){
    var addPhoneNumber=$('#add-phone-number').val();
    if(addPhoneNumber.length==10 && addPhoneNumber!==''){
        $('#add-phone-number-error').hide();
    }
    else{
        $('#add-phone-number-error').show();
        addPhoneNumberError=true;
    }
}

function CheckAddAddress(){
    var addAddress=$('#add-address').val();
    if(addAddress.length<10 || addAddress===''){
        $('#add-address-error').show();
        addAddressError=true;
    }
    else{
        $('#add-address-error').hide();
    }
}

function CheckAddPincode(){
    var addPincode=$('#add-pincode').val();
    if(addPincode.length!==6 || addPincode===''){
        $('#add-pincode-error').show();
        addPincodeError=true;
    }
    else{
        $('#add-pincode-error').hide();
    }
}


$(document).ready(function (){
    $('#add-button').click(function (){
        addUsernameError=false;
        addEmailError=false;
        addPasswordError=false;
        addPhoneNumberError=false;
        addAddressError=false;
        addPincodeError=false;

        CheckAddUsername();
        CheckAddEmail();
        CheckAddPassword();
        CheckAddPhoneNumber();
        CheckAddAddress();
        CheckAddPincode();

        if(addUsernameError===false && addEmailError===false && addPasswordError===false && addPhoneNumberError===false && addAddressError===false && addPincodeError===false){
            alert('User details added successfully');
            $('#user-details-table').show();
            $('.added-usernames').show();
            var addInputUsername=$('input[name="add-input-username"]').val();
            var addInputEmail=$('input[name="add-input-email"]').val();
            var addInputPassword=$('input[name="add-input-password"]').val();
            var addInputPhoneNumber=$('input[name="add-input-phone-number"]').val();
            var addInputAddress=$('#add-address').val();
            var addInputPincode=$('input[name="add-input-pincode"]').val();
            $('.data-table tbody').append('<tr input-username="'+addInputUsername+'" input-email="'+addInputEmail+'" input-password="'+addInputPassword+'" input-phone-number="'+addInputPhoneNumber+'" input-address="'+addInputAddress+'" input-pincode="'+addInputPincode+'"><td>'+addInputUsername+'</td><td>'+addInputEmail+'</td><td>'+addInputPassword+'</td><td>'+addInputPhoneNumber+'</td><td>'+addInputAddress+'</td><td>'+addInputPincode+'</td><td><button class="btn btn-danger btn-lg btn-delete" type="button">Delete</button><button class="btn btn-primary btn-lg btn-edit" type="button">Edit</button></td></tr>')
            $(':input').val('');
            $('#add-address').val('');
        }
        else{           
            alert('Please fill the form carefully')
        }       
        
    })
})

$(document).ready(function (){
    $('body').on('click','.btn-delete',function(){
        $(this).parents('tr').remove();
    })
})

$(document).ready(function(){
    $('body').on('click','.btn-edit',function(){
        var newUsername=$(this).parents('tr').attr('input-username')
        var newEmail=$(this).parents('tr').attr('input-email')
        var newPassword=$(this).parents('tr').attr('input-password')
        var newPhoneNumber=$(this).parents('tr').attr('input-phone-number')
        var newAddress=$(this).parents('tr').attr('input-address')
        var newPincode=$(this).parents('tr').attr('input-pincode')

        $(this).parents('tr').find('td:eq(0)').html("<input id='edit-username' name='edit-username' value='"+newUsername+"'>");
        $(this).parents('tr').find('td:eq(1)').html("<input id='edit-email' name='edit-email' value='"+newEmail+"'>");
        $(this).parents('tr').find('td:eq(2)').html("<input id='edit-password' type='password' name='edit-password' value='"+newPassword+"'>");
        $(this).parents('tr').find('td:eq(3)').html("<input id='edit-phone-number' name='edit-phone-number' value='"+newPhoneNumber+"'>");
        $(this).parents('tr').find('td:eq(4)').html("<input id='edit-address' name='edit-address' value='"+newAddress+"'>");
        $(this).parents('tr').find('td:eq(5)').html("<input id='edit-pincode' name='edit-pincode' value='"+newPincode+"'>");
        $(this).parents('tr').find('td:eq(6)').prepend("<button class='btn btn-primary btn-update' type='button'>Update</button>");
        $(this).hide();
        $('#edit-username').focusout(function (){
            CheckUpdatedUsername()
        })
        $('#edit-email').focusout(function (){
            CheckUpdatedEmail()
        })
        $('#edit-password').focusout(function (){
            CheckUpdatedPassword()
        })
        $('#edit-phone-number').focusout(function (){
            CheckUpdatedPhoneNumber()
        })
        $('#edit-address').focusout(function (){
            CheckUpdatedAddress()
        })
        $('#edit-pincode').focusout(function (){
            CheckUpdatedPincode()
        })

    })
})

var updatedUsernameError=false;
var updatedEmailError=false;
var updatedPasswordError=false;
var updatedPhoneNumberError=false;
var updatedAddressError=false;
var updatedPincodeError=false;


function CheckUpdatedUsername(){
    var addUpdatedUsername=$('input[name="edit-username"]').val();
    if(addUpdatedUsername.length<3 || addUpdatedUsername.length>15 || addUpdatedUsername===''){
        alert("Username length should be between 3 and 15");
        updatedUsernameError=true;
    }
    else{
        updatedUsernameError=false;
    }
}

function CheckUpdatedEmail() {
    var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var addUpdatedEmail=$('input[name="edit-email"]').val();
    if (pattern.test(addUpdatedEmail) && addUpdatedEmail !== '') {
        updatedEmailError=false;
    } else {
       alert("Please enter a valid Email")
       updatedEmailError = true;
    }
}

function CheckUpdatedPassword() {
    var addUpdatedPassword=$('input[name="edit-password"]').val();
    if (addUpdatedPassword.length < 8) {
       alert("Password length should be greater than 8")
       updatedPasswordError = true;
    } else {
       updatedPasswordError=false;
    }
}

function CheckUpdatedPhoneNumber(){
    var addUpdatedPhoneNumber=$('input[name="edit-phone-number"]').val();
    if(addUpdatedPhoneNumber.length==10 && addUpdatedPhoneNumber!==''){
        updatedPhoneNumberError=false;
    }
    else{
        alert("Please enter a valid phone number")
        updatedPhoneNumberError=true;
    }
}

function CheckUpdatedAddress(){
    var addUpdatedAddress=$('input[name="edit-address"]').val();
    if(addUpdatedAddress.length<10 || addUpdatedAddress===''){
        alert("Please enter a valid address")
        updatedAddressError=true;
    }
    else{
        updatedAddressError=false;
    }
}

function CheckUpdatedPincode(){
    var addUpdatedPincode=$('input[name="edit-pincode"]').val();
    if(addUpdatedPincode.length!==6 || addUpdatedPincode===''){
        alert("Please enter a valid pincode")
        updatedPincodeError=true;
    }
    else{
        updatedPincodeError=false;
    }
}




$(document).ready(function (){
    $('body').on('click','.btn-update',function (){

        if(updatedUsernameError===false && updatedEmailError===false && updatedPasswordError===false && updatedPhoneNumberError===false && updatedAddressError===false && updatedPincodeError===false){
            var addUpdatedUsername=$('input[name="edit-username"]').val();
            var addUpdatedEmail=$('input[name="edit-email"]').val();
            var addUpdatedPassword=$('input[name="edit-password"]').val();
            var addUpdatedPhoneNumber=$('input[name="edit-phone-number"]').val();
            var addUpdatedAddress=$('input[name="edit-address"]').val();
            var addUpdatedPincode=$('input[name="edit-pincode"]').val();
            
        

            $(this).parents('tr').find('td:eq(0)').text(addUpdatedUsername);
            $(this).parents('tr').find('td:eq(1)').text(addUpdatedEmail);
            $(this).parents('tr').find('td:eq(2)').text(addUpdatedPassword);
            $(this).parents('tr').find('td:eq(3)').text(addUpdatedPhoneNumber);
            $(this).parents('tr').find('td:eq(4)').text(addUpdatedAddress);
            $(this).parents('tr').find('td:eq(5)').text(addUpdatedPincode);

            $(this).parents('tr').attr('add-input-username',addUpdatedUsername);
            $(this).parents('tr').attr('add-input-email',addUpdatedEmail);
            $(this).parents('tr').attr('add-input-password',addUpdatedPassword);
            $(this).parents('tr').attr('add-input-phone-number',addUpdatedPhoneNumber);
            $(this).parents('tr').attr('add-input-address',addUpdatedAddress);
            $(this).parents('tr').attr('add-input-pincode',addUpdatedPincode);

            $(this).parents('tr').find('.btn-edit').show();
            $(this).parents('tr').find('.btn-update').remove();
        }
        else{
            alert("Please fill the details carefully")
        }
    })
})

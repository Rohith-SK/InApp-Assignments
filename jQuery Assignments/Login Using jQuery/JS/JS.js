$(document).ready(function (){
    $('#main-navigation-menu').hide();
    $('.adding-details').hide();
    $('.main-adding').hide();
});



$(document).ready(function (){
    $('#sign-in').click(function (){
        var username="Rohith";
        var userpassword="admin";
        var newUsername=$('#login-username').val();
        var newUserpassword=$('#login-password').val();
        if(newUsername==='' && newUserpassword===''){
            alert("Please enter the details");
        }
        else if(newUsername==='' || newUserpassword===''){
            alert("Please enter the details");
        }
        else if(newUsername===username && newUserpassword===userpassword){
            $('#main-navigation-menu').show();
            $('.adding-details').show();
            $('.main-adding').show();
            $('#main-sign-in').hide();
            $('body').css('background-color','#04703a');
            $('#main-navigation-menu').css('background-color','white');

        }
        else if(newUsername===localStorage.username && newUserpassword===localStorage.password){
            $('#main-navigation-menu').show();
            $('.adding-details').show();
            $('.main-adding').show();
            $('#main-sign-in').hide();
            $('body').css('background-color','#04703a');
            $('#main-navigation-menu').css('background-color','white');
        }
        else{
            alert("Wrong Username or Password");
        }
    });
});

$(document).ready(function (){
    var registerUser={};
    var i=0;
    $('#register-page-button').click(function (){
        var inputName=document.getElementById("register-username").value;
    var inputPassword=document.getElementById("register-password").value;
    if(inputName==='' && inputPassword===''){
        alert("Please enter the details");
    }
    else if(inputName==='' || inputPassword===''){
        alert("Please enter the details");
    }
    else{
        alert("Registration is Successful");
        registerUser[i]=[inputName,inputPassword];
        i++;
        localStorage.setItem("username", inputName);
        var username=localStorage.getItem("username");
        localStorage.setItem("password", inputPassword);
        var password=localStorage.getItem("password");
    } 
    });
});

var finalList={};
$(document).ready(function (){
    var j=0;
    var k =0;
    $('#add-button').click(function (){
        var listArray=[];
        var value=$('#add-username').val();
        var value1=$('#add-email').val();
        var value2=$('#add-password').val();
        var value3=$('#add-phone-number').val();
        var value4=$('#add-address').val();
        var value5=$('#add-pincode').val();
        if(value==='' || value1==='' || value2==='' || value3==='' || value4==='' || value5===''){
            alert("Please enter the details");
        }
        else{
            listArray.push(value,value1,value2,value3,value4,value5);
            k++;
            finalList[j]=JSON.stringify(listArray);
            j++;
            $('#new-user').append('<ul id="list"></ul>');
            $('#list').append("Details of User"+" "+k);
            for(var i=0;i<listArray.length;i++){
                $('#list li').each(function (i){
                    $(this).attr('id', 'list-details' + (i+1))
                })
                $('#list').append('<li>' + listArray[i] + '</li>' + '<hr />');
            }
            $(':input').val('');
        }
    });
});

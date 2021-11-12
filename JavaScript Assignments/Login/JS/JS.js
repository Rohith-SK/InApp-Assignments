function reg(){
    var username="Rohith";
    var password="admin";
    var newUsername =document.getElementById("login-username").value;
    var newPassword= document.getElementById("login-password").value;
    if(newUsername==='' && newPassword===''){
        alert("Please enter the details");
    }
    else if(newUsername==='' || newPassword===''){
        alert("Please enter the details");
    }
    else if(newUsername===username && newPassword===password){
        window.open("userAdd.html");
    }
    else{
        alert("Wrong Username or Password");
    }


}

var registerUser={};
var i=0;
function register(){
    var inputName=document.getElementById("register-username").value;
    var inputPassword=document.getElementById("register-password").value;
    if(inputName==='' && inputPassword===''){
        alert("Please enter the details");
    }
    else if(inputName==='' || inputPassword===''){
        alert("Please enter the details");
    }
    else{
        console.log(`Usernmae is ${inputName}`);
        console.log(`Password is ${inputPassword}`);
        alert("Registration is Successful");
        registerUser[i]=[inputName,inputPassword];
        i++;
        console.log(registerUser);

    } 
}


var listArray=[];
function add(){
    var value=document.getElementById('add-user').value;
    var list=document.getElementById('new-user');
    var newLI=document.createElement("LI");
    newLI.innerText=value;
    list.append(newLI);
    listArray.push(value)
    console.log(`List of Users Added: ${listArray}`);
}


function removes(){
    var list=document.getElementById("new-user");
    var value=document.getElementById("add-user").value;
    var index=listArray.indexOf(value);
    list.removeChild(list.childNodes[index+1]);
    var finalListArray=listArray.splice(index,1);
    console.log(`User Removed: ${finalListArray}`);
    console.log(`List of Users after removing: ${listArray}`);
}
    



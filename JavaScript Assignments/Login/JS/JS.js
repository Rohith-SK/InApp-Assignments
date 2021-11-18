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
    else if(localStorage.username===newUsername && localStorage.password===newPassword ){
        window.open("userAdd.html");
    }
    else{
        alert("Wrong Username or Password");
    }


}


var registerUser={}
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
        alert("Registration is Successful");
        registerUser[i]=[inputName,inputPassword];
        i++;
        localStorage.setItem("username", inputName);
        var username=localStorage.getItem("username");
        localStorage.setItem("password", inputPassword);
        var password=localStorage.getItem("password");
    } 
}

var j=0;
var k =1;
var listArray=[];
var finalList={};
function add(){
    var value=document.getElementById("add-username").value;
    var value1=document.getElementById("add-email").value;
    var value2=document.getElementById("add-password").value;
    var value3=document.getElementById("add-phone-number").value;
    var value4=document.getElementById("add-address").value;
    var value5=document.getElementById("add-pincode").value;
    if(value==='' || value1==='' || value2==='' || value3==='' || value4==='' || value5===''){
        alert("Please enter the details");
    }
    else{
        listArray.push(value,value1,value2,value3,value4,value5);
        document.getElementById("new-user").append("Details of User"+" "+k);
        k++;
        finalList[j]=JSON.stringify(listArray);
        j++;
        for(var i=0;i<listArray.length;i++){
            var li=document.createElement("li");
            li.innerHTML=listArray[i]+ "<hr />";
            document.getElementById("new-user").appendChild(li)
        }
        
        listArray.length=0;
    }
}

function removes(){
    var list=document.getElementById("new-user");
    var number=document.getElementById("user-number").value;
    delete finalList[number-1];

    if(number==1){
        for(var i=0;i<7;i++){
            list.removeChild(list.childNodes[number]);
        }
    }
    else{
        number=parseInt(number);
        var start=number+(6*(number-1));
        var end=number+(6*(number));
        start=parseInt(start);
        for(var i=start;i<=end;i++){
            list.removeChild(list.childNodes[start]);
        }
    }
}


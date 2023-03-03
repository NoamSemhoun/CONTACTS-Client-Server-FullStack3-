var logged_in=false;

const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
        
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    poppin: function(ev){
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);


const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");
var count = 0; 
var mail_black_list=[];


    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })


var emailArray=[];
var passwordArray=[];

function register(){

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (ValidateEmail(email) == false) 
        {
            return;
        }  

    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";

        localStorage.setItem('email', JSON.stringify(emailArray));
        localStorage.setItem('password', JSON.stringify(passwordArray));

        
        alert('Your account has been created');

    }
    else{
        alert(email + " is already register.");
        return ;
    }
}

function login_f(){

    logged_in=true;
    if(logged_in){
        document.getElementById("btn-display-contact").style.display="block";
        
    }
    return true;

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    
    alert(`${storedEmail} `)
    alert(`${storedPassword}`)
    
    var i = emailArray.indexOf(email);


    if(storedEmail.includes(email) && storedPassword.includes(password)){
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        document.location.href="pages/linkPage.html";
        return ;
    }else{
        alert('Error on login');
    }


    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        count++;
        if (mail_black_list.includes(email))
        {
            alert(" your email is in the black list");
            return;
        }
        if (count>3)
        {
            alert(" you try too much time , your email was black listed");
            mail_black_list.push(email);
            return;
        }
        return ;
    }
    else {
        
        if (mail_black_list.includes(email))
        {
            alert(" your email is in the black list");
            return;
        }

        alert(email + " yor are login Now \n welcome to our website.");

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        
        return ;
    }

}

function ValidateEmail(input) {
    
    var testX=new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (testX.test(input)) {
  
      alert("Valid email address!");
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      return false;
  
    }
  
  }


  ///////////////// add contact form ////////

const form = document.getElementById("form");
const result = document.getElementById("result");
//const btn_add_contact_temp=document.getElementById("add_contact_template");


// btn_add_contact_temp.addEventListener("click", ()=>{
//     var add_contact_template=document.getElementById("add_contact");
//     var clon = add_contact_template.content.cloneNode(true);
//     document.body.appendChild(clon);
//     document.getElementById("add_contact_template").style.display='none';
// })

function AddUser(){

    document.getElementById("add_contact").style.display='block';
    let email=document.getElementById("email").value;
    let name=document.getElementById("name").value;
    let phoneNumber=document.getElementById("phone").value;

    data=[name,email];
    
    console.log(phoneNumber+" "+ data);

    if(email && name && phoneNumber){
    var fakeajax=new Fajax();
    fakeajax.create_request("POST",phoneNumber,data);
    fakeajax.send();
    }else{
        console.log("fields empty");
    }

    
   
    
}

function RemoveTemplate(){
    
    //document.getElementById("add_contact").style.display='none';
    
}

function DisplayList(response){

    console.log("typeof  "+ typeof(response))
    // Get a reference to the list element
    var listElement = document.getElementById("contact_list");
    listElement.innerHTML="";

    if (typeof(response)=='string' ){
        var listItem = document.createElement("li");
        listItem.innerHTML = response;
        listElement.appendChild(listItem);

    }else{
        for (var i = 0; i < response.length; i++) {
            var listItem = document.createElement("li");
            listItem.innerHTML = response[i][0] + " " + response[i][1];
            listElement.appendChild(listItem);
        }
    }
    

}


function SearchContact() {
    var x = document.getElementById("mySearch");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;
    
    console.log(currentVal);

    if(!currentVal){
        console.log("GETALL REQUEST")
        var fakeajax=new Fajax();
        fakeajax.create_request("GETALL");

        fakeajax.send(DisplayList);

    }else{

        console.log("GET REQUEST")
        var fakeajax=new Fajax();
        fakeajax.create_request("GET",currentVal);
        fakeajax.send(DisplayList);
        
        //document.getElementById("displayContact").innerHTML = fakeajax.response;

    }
        

    
  }


function DelUser(){
    let phoneNumber=document.getElementById("del_phone").value;
    var fakeajax=new Fajax();
    fakeajax.create_request("DELETE",phoneNumber);
    fakeajax.send();
}

var submit =()=>{
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var obj = {
    "fname" : fname,
   "lname": lname,
    "email":email,
    "password":password

}
var bharatRegData =JSON.parse(localStorage.getItem("RegData")) ;
 if(bharatRegData == null)
bharatRegData=[];
console.log(obj)
 bharatRegData.push(obj);
 localStorage.setItem("RegData",JSON.stringify(bharatRegData));
}

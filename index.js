var btn=document.getElementById("submit-btn");
var input=document.getElementById("email");
btn.addEventListener("click",() =>{
  if(input.value=="" || input.value=="null"){
    alert("The email address is not formatted correctly")
  }
})
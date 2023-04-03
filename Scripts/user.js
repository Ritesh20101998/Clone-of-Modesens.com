//login data starts here
function check(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let LSData = JSON.parse(localStorage.getItem("accountList")) || [];
    let exist = LSData.length && 
    JSON.parse(localStorage.getItem("accountList")).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    if(LSData == null){
        LSData = [];
      }
    if(!exist){
        alert("Logged in Successfully")
        location.href = "./index.html";
    
    }
    else{
        alert("Incorrect login credentials");
    }
    e.preventDefault();
}
//login data ends here
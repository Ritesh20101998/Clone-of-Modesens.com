// signup storing data starts here
let form = document.getElementById("form");

    form.addEventListener("submit",(e) =>{
      e.preventDefault();
      let obj = {
          email : form.email.value,
          password : form.password.value,
      };
      //console.log(obj);
      let LSData = JSON.parse(localStorage.getItem("accountList"));
      if(LSData == null){
        LSData = [];
      }
      else{
        LSData.push(obj);
      localStorage.setItem("accountList",JSON.stringify(LSData));
      alert("Account Created Successfully")
      location.href = "./index.html";
      
      }
      
    })
// signup storing data ends here







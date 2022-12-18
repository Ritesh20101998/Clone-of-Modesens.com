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
      LSData.push(obj);
      localStorage.setItem("accountList",JSON.stringify(LSData))
    })
// signup storing data ends here







// function storeData(){
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     let lowerCaseLetters = /[a-z]/g;
//     let upperCaseLetters = /[A-Z]/g;
//     let numbers = /[0-9]/g;

//     let myForm = document.querySelector("form");

//     myForm.addEventListener("submit", function(event) {
//         event.preventDefault();
//     let obj = {
//             email:myForm.email.value,
//             password:myForm.password.value,
//         }

//     let users = [];
//     users.push(obj)
//     console.log(users);

//         if(email.value.length == 0){
//             alert("Please fill the email");
//         } else if(password.value.length == 0){
//             alert("Please fill the password");
//         }else if(email.value.length == 0 && password.value.length == 0){
//             alert('Please fill in email and password');
//         }else if(password.value.length < 8){
//             alert('Min of 8 characters required');
//         }else if(!password.value.match(numbers)){
//             alert('please add 1 number');
//         }else if(!password.value.match(upperCaseLetters)){
//             alert('please add 1 uppercase letter');
//         }else if(!password.value.match(lowerCaseLetters)){
//             alert('please add 1 lowercase letter');
//         }else{
//             localStorage.setItem('users', JSON.stringify(users));
        
//             alert('Your account has been created');
//         }
//     })
// }
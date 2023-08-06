let billing = document.getElementById("billing")
let checkout = document.getElementById("checkout")
let billform = document.getElementById("billform")

let fname = document.getElementById("Fname")
let lname = document.getElementById("Lname")
let email = document.getElementById("email")
let country = document.getElementById("country")
let address = document.getElementById("address")
let city = document.getElementById("city")
let pincode = document.getElementById("pincode")
let mobile = document.getElementById("mobile")
let submit = document.getElementById("submit")

billform.addEventListener("submit",(e) => {
    e.preventDefault();

    let obj = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        country: country.value,
        address : address.value,
        city : city.value,
        pincode : pincode.value,
        mobile : mobile.value
    }
    // console.log(obj)
    
    let formDataArr = JSON.parse(localStorage.getItem("user"))  || [];

    formDataArr.push(obj);
    console.log(formDataArr)
    localStorage.setItem("user", JSON.stringify(formDataArr));

    alert("address details successfully updated")
})

let form = document.getElementById('payment')
let card_number = document.getElementById('card-number')
let expiry_date = document.getElementById('expiry-date')
let cvv = document.getElementById('cvv')
let name = document.getElementById('name-on-card')
let loginbtn = document.getElementById('loginbtn')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let paymentobj = {
        card_number : card_number.value,
        expiry_date : expiry_date.value,
        cvv : cvv.value,
        name : name.value
    } 
    // console.log(paymentobj)

    paymentArr = JSON.parse(localStorage.getItem('paymentData')) || [];

    paymentArr.push(paymentobj)
    console.log(paymentArr)
    localStorage.setItem('paymentData', JSON.stringify(paymentArr))
    alert('payment details updated successfully')
    // window.location.href = "ordersuccessfull.html"
})
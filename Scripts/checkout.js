let address = document.getElementById("address")

address.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        fname:address.Fname.value,
        lname:address.Lname.value,
        email:address.email.value,
        country:address.country.value,
        address:address.address.value,
        city:address.city.value,
        pincode:address.pincode.value,
        mobile:address.pincode.value
    }
    console.log(obj)

    if(!fname || !lname || !email || !country || !address || !city || !pincode || !mobile){
        alert("Pls fill the datails!")
    }
    
    let add = JSON.parse(localStorage.getItem("addressData"))
    if(add===null){
        add = []
    }else{
        add.push(obj)
        localStorage.setItem("addressData",JSON.stringify(add))
        alert("Address details enter successfully")
    }
    
})


let payment = document.getElementById("payment")

loginbtn.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj1 = {
        card_number:payment.card_number.value,
        expiry:payment.expiry.value,
        cvv:payment.cvv.value,
        name:payment.name.value
    }
    console.log(obj1)
    let pay = JSON.parse(localStorage.getItem("paymentData"))

    if(!card_number || !expiry || !cvv || !name || !add ){
        alert("Pls fill the datails!")
    }
    
    
    if(pay===null){
        pay = []
    }else{
        pay.push(obj1)
        localStorage.setItem("paymentData",JSON.stringify(pay))
        alert("Payment details enter successfully")
    }
    
})
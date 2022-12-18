// carts starts here
let container = document.getElementById("cart-container")
let cartData = JSON.parse(localStorage.getItem("cart"));
let totalPrice = document.getElementById("cart-total");


if(cartData == null) cartData = [];
 
// total cart price starts here

function totalPrice1(){
    let sum = 0;
    cartData.forEach((element)=>{
      sum+= element.price * element.quantity
    })
    totalPrice.innerText =  sum;
  }
  totalPrice1()
  cartProducts(cartData);
// total cart price ends here

// cartProducts function starts here
function cartProducts(data){
    container.innerHTML = null;
    data.forEach((element,index)=>{
        let box = document.createElement("div");

          let image = document.createElement("img")
          image.src = element.image;

          let title = document.createElement("h3");
          title.innerText = element.title;

          let description = document.createElement("p");
          description.innerText = element.description;

          let price = document.createElement("h4");
          price.innerText = "₹ " +element.price;

          let box1 = document.createElement("div");
          let div1 = document.createElement("div");

          let increment = document.createElement("button");
          increment.innerText = "+";

          let quantity = document.createElement("span");
          quantity.innerText = element.quantity;
 
          let decrement = document.createElement("button");
          decrement.innerText = "-";
        
          let div2 = document.createElement("div");
          let remove = document.createElement("button");
          remove.innerText = "Remove";

          // increment starts here
          increment.addEventListener("click",(e)=>{
            quantity.innerText = ++element.quantity;
           // console.log(element.quantity)
            totalPrice1()
          })
          // increment ends here

          // decrement starts here
          decrement.addEventListener("click",(e)=>{
            if(quantity.innerText < 1){
              quantity.innerText = 0;
            }else{
              quantity.innerText = --element.quantity;
            }
            totalPrice1()
            // console.log(element.quantity)
          })
          // decrement ends here

          // remove starts here
          remove.addEventListener("click", ()=>{
            cartData.splice(index,1);
            localStorage.setItem(("cart"),JSON.stringify(cartData));
            cartProducts(cartData)
            totalPrice1();
          })  
          // remove ends here

        div1.append(increment,quantity,decrement)
        div2.append(remove)
        box1.append(div1,div2)
        box.append(image,title,description,price,box1)
        container.append(box);
    })
}
// cartProducts function ends here
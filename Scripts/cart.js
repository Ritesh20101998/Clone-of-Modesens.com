
let container = document.getElementById("cart-container")
let cartData = JSON.parse(localStorage.getItem("cart"));
let totalPrice = document.getElementById("cart-total");


if(cartData == null) cartData = [];
    

function totalPrice1(){
    let sum = 0;
    cartData.forEach((element)=>{
      sum+= element.price * element.quantity
    })
    totalPrice.innerText =  sum;
  }
  totalPrice1()
  cartProducts(cartData);

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

          let price = document.createElement("p");
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

          increment.addEventListener("click",(e)=>{
            quantity.innerText = ++element.quantity;
           // console.log(element.quantity)
            totalPrice1()
          })

          decrement.addEventListener("click",(e)=>{
            if(quantity.innerText < 1){
              quantity.innerText = 0;
            }else{
              quantity.innerText = --element.quantity;
            }
            totalPrice1()
            // console.log(element.quantity)
          })

          remove.addEventListener("click", ()=>{
            cartData.splice(index,1);
            localStorage.setItem(("cart"),JSON.stringify(cartData));
            cartProducts(cartData)
            totalPrice1();
          })  
        div1.append(increment,quantity,decrement)
        div2.append(remove)
        box1.append(div1,div2)
        box.append(image,title,description,price,box1)
        container.append(box);
    })
}

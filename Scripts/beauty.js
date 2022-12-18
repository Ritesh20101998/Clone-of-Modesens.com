let url = `https://6398195577359127a04715b0.mockapi.io/products`;

let container = document.getElementById("beauty-container")
let beautyData = [];

let filterSelect = document.getElementById("filter");

  filterSelect.addEventListener("change",()=>{
      let filtered = beautyData.filter((element) =>{
        if(element.title== filterSelect.value){
          return true
        }else{
          return false;    
        }
      })
      //console.log(filtered);
      beautyProducts(filtered);
    })

function fetchData(url){
    fetch("./programData/beauty.json")
    .then((resobj)=>{
        return resobj.json();
    })
    .then((data)=>{
        beautyData = data;
        beautyProducts(data);
        console.log(data)
    })
    .catch((err)=>{
        console.log(err);
    })
}

fetchData(url);


function beautyProducts(data = []){
    container.innerHTML = null;
    data.forEach((element)=>{
        let box = document.createElement("div");

          let image = document.createElement("img")
          image.src = element.image;

          let title = document.createElement("h3");
          title.innerText = element.title;

          let description = document.createElement("h5");
          description.innerText = element.description;

          let price = document.createElement("h4");
          price.innerText = "₹" + element.price;

          let addToCart = document.createElement("button");
          addToCart.innerText = "Cart";

          addToCart.addEventListener("click",() =>{
            let favData = JSON.parse(localStorage.getItem("beauty.json")) || [];
  
            let isinCart = false;
            for(let i=0; i<favData.length; i++){
              if(favData[i].id == element.id){
                isinCart = true;
                break;
              }
            }
            if(isinCart == true){
               alert("Product Already in cart");
            } else {
            favData.push(element)
            localStorage.setItem("beauty.json",JSON.stringify(favData));
            alert("Product Added in cart")

            }
          })

        box.append(image,title,description,price, addToCart)
        container.append(box);
    })

}
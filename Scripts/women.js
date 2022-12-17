let url = `https://6398195577359127a04715b0.mockapi.io/products`;

let container = document.getElementById("women-container")
let womenData = [];

let filterSelect = document.getElementById("filter");
let sort = document.getElementById("sort");

  filterSelect.addEventListener("change",()=>{
      let filtered = womenData.filter((element) =>{
        if(element.title== filterSelect.value){
          return true;
        }else{
          return false;    
        }
      })
      //console.log(filtered);
      womenProducts(filtered);
    })

    function handleSort() {
      let selecter = sort.value;
      if(selecter == "h2l"){
        womenData.sort((a,b) => +b.price - +a.price);
      } 
      if(selecter == "l2h"){
        womenData.sort((a,b) => +a.price - +b.price);
      }
      console.log(womenData)
      container.innerHTML = null
      womenProducts(womenData);
    }



function fetchData(url){
    fetch("./programData/women.json")
    .then((resobj)=>{
        return resobj.json();
    })
    .then((data)=>{
        womenData = data;
        womenProducts(data);
        console.log(data)
    })
    .catch((err)=>{
        console.log(err);
    })
}

fetchData(url);


function womenProducts(data = []){
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

          let addToCart = document.createElement("button");
          addToCart.innerText = "Add To Cart";

          addToCart.addEventListener("click",() =>{
            let favData = JSON.parse(localStorage.getItem("cart")) || [];
  
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
            favData.push({...element,quantity:1})
            localStorage.setItem("cart",JSON.stringify(favData));
            alert("Product Added in cart")

            }
          })

        box.append(image,title,description,price,addToCart)
        container.append(box);
    })

}
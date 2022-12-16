let url = `https://6398195577359127a04715b0.mockapi.io/products`;

let container = document.getElementById("kids-container")
let kidsData = [];

let filterSelect = document.getElementById("filter");

  filterSelect.addEventListener("change",()=>{
      let filtered = kidsData.filter((element) =>{
        if(element.title== filterSelect.value){
          return true
        }else{
          return false;    
        }
      })
      //console.log(filtered);
      kidsProducts(filtered);
    })

    function handleSort() {
      let selecter = document.querySelector("select").value;
      if(selecter == "HTL"){
        kidsData.sort((a, b) => b.price-a.price);
      } 
      if(selecter == "LTH"){
        kidsData.sort((a, b) => a.price-b.price);
      }
      //console.log(kidsData)
      kidsProducts(kidsData);
    }

    //handleSort();

function fetchData(url){
    fetch("./programData/kids.json")
    .then((resobj)=>{
        return resobj.json();
    })
    .then((data)=>{
        kidsData = data;
        kidsProducts(data);
        console.log(data)
    })
    .catch((err)=>{
        console.log(err);
    })
}
fetchData(url);


function kidsProducts(data = []){
    container.innerHTML = null;
    data.forEach((element)=>{
        let box = document.createElement("div");

          let image = document.createElement("img")
          image.src = element.image;

          let title = document.createElement("h3");
          title.innerText = element.title;

          let description = document.createElement("p");
          description.innerText = element.description;

          let price = document.createElement("p");
          price.innerText = "₹" + element.price;

          let addToCart = document.createElement("button");
          addToCart.innerText = "Cart";

          addToCart.addEventListener("click",() =>{
            let favData = JSON.parse(localStorage.getItem("kids.json")) || [];
  
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
            localStorage.setItem("kids.json",JSON.stringify(favData));
            alert("Product Added in cart")

            }
          })

        box.append(image,title,description,price, addToCart)
        container.append(box);
    })

}


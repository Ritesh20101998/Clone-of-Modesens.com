let url = `https://6398195577359127a04715b0.mockapi.io/products`;

let container = document.getElementById("beauty-container")
let beautyData = [];

let filterSelect = document.getElementById("filter");
let sort = document.getElementById("sort");

//filter starts here 
  filterSelect.addEventListener("change",()=>{
      let filtered = beautyData.filter((element) =>{
        if(element.title== filterSelect.value){
          return true
        }else{
          return false;    
        }
      })
      //console.log(filtered);
      container.innerHTML = null
      beautyProducts(filtered);
    })
// filter ends here

// sort starts here
    function handleSort() {
      let selecter = sort.value;
      if(selecter == "h2l"){
        beautyData.sort((a,b) => +b.price - +a.price);
      } 
      if(selecter == "l2h"){
        beautyData.sort((a,b) => +a.price - +b.price);
      }
      console.log(beautyData)
      container.innerHTML = null
      beautyProducts(beautyData);
    }
// sort ends here

// search starts here
function search(){
  let q = document.querySelector("#search-inp").value;
  console.log(q);
  let newData = beautyData.filter((e)=>{
   return e.description.toLowerCase().includes(q.toLowerCase());
  })
 //  console.log(newData);
 beautyProducts(newData);
}
// search ends here

// Fetch starts here
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
// fetch ends here

// beauty function starts here
function beautyProducts(data = []){
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

        box.append(image,title,description,price, addToCart)
        container.append(box);
    })
}
// beauty function ends here
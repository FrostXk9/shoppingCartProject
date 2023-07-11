let openShopping = 
document.querySelector(".shopping");
let closeShopping = 
document.querySelector(".closeShopping");
let list = 
document.querySelector(".list");
let listCard = 
document.querySelector(".listCard");
let body = 
document.querySelector("body");
let total = 
document.querySelector(".total");
let quantity = 
document.querySelector(".quantity");

openShopping.addEventListener("click",() =>{
    body.classList.add("active");//add cartlist
})

closeShopping.addEventListener("click",() =>{
    body.classList.remove("active");//remove cartlist
}) 
let product = [
    {
        id: 1,
        name: "Cellphones",
        image: "https://i.postimg.cc/wxZf3wjK/iphone-12-pro-5883473-1280.jpg",
        price: 1500
    },
    {
        id: 2,
        name: "Laptops",
        image: "https://i.postimg.cc/wTvzdqjq/laptop-5891723-1280.jpg",
        price: 1750
    },
    {
        id: 3,
        name: "3D printers",
        image: "https://i.postimg.cc/Kv5bdTR3/printer-2847967-1280.jpg",
        price: 1900
    },
    {
        id: 4,
        name: "Headphones",
        image: "https://i.postimg.cc/J07Xc2Hh/jbl-5303380-1280.jpg",
        price: 2350
    },
    {
        id: 5,
        name: "Home Appliances",
        image: "https://i.postimg.cc/zfGc2dQ3/istockphoto-1408821537-612x612.jpg",
        price: 3500
    },
    {
        id: 6,
        name: "Sound Systems",
        image: "https://i.postimg.cc/156X4BJg/istockphoto-1395191584-612x612.jpg",
        price: 2500
    },
];//id,name,image and price created for listcard
let listCards = []
    function initApp(){
        product.forEach((value, key) => {
            let newDiv = document.createElement("div");
            newDiv.classList.add("item");
            list.appendChild(newDiv);
            newDiv.innerHTML = `
            <img src="${value.image}"/>
            <div class="title">${value.name}</div>
            <div class = "price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">add to cart</button>
            `;
            list.appendChild(newDiv);
        })
    }
    initApp();
    function addToCard(key){
        if(listCards[key] == null){
            listCards[key] = product[key];
            listCards[key].quantity = 1;
        }//add +1 item to the cart
        reloadCard();
    }
    function reloadCard(){
        listCard.innerHTML = ``;
        let count = 0;
        let totalPrice = 0;
        listCards.forEach((value, key) => {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;

            if(value != null){
                let newDiv = document.createElement("li");
                newDiv.innerHTML = `
                   <div class="value">${value.name}</div>
                   <div class="price-rands">${value.price.toLocaleString()}</div>
                   <!-- inline styling -->
                   <style>
                   .value{
                    border-right: 1px solid white;
                    border-left: 1px solid white;
                    padding: 4px;
                   }
                   .price-rands{
                    padding: 4px;
                    border-right: 1px solid white;
                   }
                   </style>
                   <div>
                      <button style="cursor: cell; background-color: red;" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                      <div class="count">${value.quantity}</div>
                      <button style="cursor: cell; background-color: green;"onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                   </div>
                `;
                listCard.appendChild(newDiv);
            }
        })
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    }

    
    function changeQuantity(key, quantity){
        if(quantity == 0){
            delete listCards[key];
        }else{
            listCards[key].quantity = quantity;
            listCards[key].price = quantity * product[key].price;
        }
        reloadCard();
    }
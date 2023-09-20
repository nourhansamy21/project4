// localStorage.setItem("first car", "BMW")
// console.log(localStorage.getItem("first car"))
// localStorage.setItem("student1", "aya")
// localStorage.removeItem("student1")
// localStorage.clear()

////////////////////////////////////////////////////////////////////

let userInfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display = "flex"
    userData.innerHTML= localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click", function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "login.html"
    } , 1500 )
})




///////////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        title: "Iphone 14",
        color: "white",
        imageUrl: "images/618Bb+QzCmL._AC_SY300_SX300_.jpg"
    },
    {
        id: 2,
        title: "Samsung",
        color: "blue",
        imageUrl: "images/61mOx8va+LL._AC_SX679_.jpg"
    },
    {
        id: 3,
        title: "Oppo Reno 7",
        color: "blue",
        imageUrl: "images/61Y4iVRUatL._AC_SX679_.jpg"
    },
    {
        id: 4,
        title: "Apple Watch",
        color: "white",
        imageUrl: "images/51HBPmSP3iL.__AC_SX300_SY300_QL70_ML2_.jpg"
    }
]
function drawItems(){
    let y = products.map((item) =>{
        return `
        <div class="product-item">
                    <img class="product-item-img" src="${item.imageUrl}" alt="">
                    <div class="product-item-disc">
                        <h2>${item.title}</h2>
                        <p>this phone from iphone company</p>
                        <span>color : ${item.color}</span>
                    </div>
                    <div class="product-item-action">
                        <button class="add-to-cart" onClick ="addToCart(${item.id})">Add To Cart</button>
                        <i class="far fa-heart fav"></i>
                    </div>
                </div>
            `
    })
    allProducts.innerHTML = y
}
drawItems()
///////////////////////////////////////////////////////////

// function check(){
//     if(localStorage.getItem=("usename")){
//         window.location = "cartsproducts.html"
//     }else{
//         window.location = "login.html"
//     }
// }
////////////////////////////////////////////////////////////

let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")

// let addedItem = []
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []
if(addedItem){
    addedItem.map(item =>{
        cartProductDiv.innerHTML += `<p>${item.title}</p>`
    })
    badge.style.display = "block"
    badge.innerHTML = addedItem.length
}

if(localStorage.getItem=("usename")){
    function addToCart(id){
        let choosenItem = products.find((item) => item.id === id)
        cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`
        
        addedItem = [...addedItem , choosenItem]
        localStorage.setItem("productsInCart" , JSON.stringify(addedItem))
        let cartProductsLength = document.querySelectorAll(".carts_products div p")
        // console.log(cartProductsLength.length)
        badge.style.display = "block"
        badge.innerHTML = cartProductsLength.length
    }
    
}else{
    window.location = "login.html"
}


//////////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping-cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
    if(cartProductDiv.innerHTML !=""){
        if(cartsProducts.style.display == "block"){
            cartsProducts.style.display = "none"
        }else{
            cartsProducts.style.display = "block"
        }
    }
}

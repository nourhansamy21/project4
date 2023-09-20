let productsInCart = localStorage.getItem("productsInCart")
let allProducts = document.querySelector(".products")
let alProduct = document.querySelector(".products")

if(productsInCart){
    let item = JSON.parse(productsInCart)
    drawCartProducts(item)
}

function drawCartProducts(products){
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
                        <button class="add-to-cart" onClick ="removeFromCart(${item.id})">Remove From Cart</button>
                    </div>
                </div>
            `
    })
    allProducts.innerHTML = y
}
drawCartProducts()


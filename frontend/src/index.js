const url = "http://localhost:3000"; //set url for fetch method

document.addEventListener("DOMContentLoaded", callOnLoad); // add event listener to load 

function callOnLoad() {
  fetchProducts(); 
  
}

function addToCart(e) {
  //find out which product is being added
  // make a new cart instance using that product id
  const productId = e.target.id;
  //fetch to post to /carts
  // after fetching, make a cart item with the new cart id and the product id
  // change the dom to show that that product is now in the cart
  fetch(url + "/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ cart: { product_id: productId } }),
  })
    .then((r) => r.json())
    .then((cartData) => {
      new Cart(cartData.id, productId);
    });
     
      
}

function fetchProducts() {
  fetch(url + "/products")
    .then((response) => response.json())
    .then((products) => {
      products.data.forEach((product) => {
        let newProduct = new Product(product, product.attributes);
        
        document.querySelector(
          "#product-inventory"
        ).innerHTML += newProduct.renderProduct();
      });
      Cart.cartButtons().forEach((button) => {
        button.addEventListener("click", addToCart);
      });
      fetchCarts();
    });
    
}

function fetchCarts() {
  fetch(url + "/carts")
    .then((r) => r.json())
    .then((carts) => {
      carts.data.forEach((cart) => {
        new Cart(cart.id, cart.attributes.product_id);
      });
       removeProduct();
    });
}
function removeProduct() {
  const deleteButton = document.getElementsByClassName("delete");  
    [...deleteButton].forEach((r) => { 
     r.addEventListener("click", removeFromCart)
   })
  }

   function removeFromCart(e) {
      const cartId = e.target.id
       fetch(url + `/carts/${cartId}`,{
         method: "DELETE",
         headers: {
           "Content-Type": "application/json",
         },
        
       })        
      
         .then((r) => r.json())
         .then((cartData) => {
         console.log
           const cartInstance = Cart.all.filter((cart) => cart.id == cartId); //
           const productId = cartInstance[0].product_id.toString();//returned an id number just the number product id 
           const singleProduct = Product.all[productId].price
           Cart.all = Cart.all.filter((cart) => cart.id != cartId)
           e.target.parentElement.remove();
         
           Cart.total -= singleProduct
           const cartItemsClass = document.querySelector(".cart-items"); //find the class container of where cart product wil be stored
           cartItemsClass.appendChild(document.querySelector(".cart-total-price").innerHTML = "$" + (Math.round(Cart.total * 100) / 100).toFixed(2)); 

         });
       
   }

  

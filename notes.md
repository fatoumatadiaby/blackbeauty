Models : carts
       : products

carts has_many products
products belongs_to cart

cart 
 

product
    brand :string
    product_type : string
    ingrediants : string
    description : text
    price : decimal :precision => 8, :scale => 2
    size : 
    cart_id : integer

user 
  username :string
  email: string

user should be able to go on site see a list of products organized by product type and brand, when selected user should receive information about product ex description,ingrediants, and price and a add to cart button should appear allowing user to create a shopping cart full of items that will calculte the total price and check user out


  <!-- <div class="shop-item">
             <span class="brand-name"></span>
             <img class="product-image-type" src="">
             <div class="shop-item-details">
                  <span class="brand-product-type">product type</span>
                  <span class="brand-product-price">price</span> 
                 <button class="add to cart" onclick="addToCart()">Add to Cart</button>
             </div>
         </div> -->
<!-->
       removeFromCart() {
    
 }
 }
 let removeItemFromCart = document.getElementsByClassName('btn-danger')
  for (let i = 0; i < removeItemFromCart.length; i++) {
     let button = removeItemFromCart[i]
     button.addEventListener('click',function(event){
     let buttonClicked = event.target      buttonClicked.parentElement.remove
      updateCartTotal()
      })

     function updateCartTotal(){
         let cartItemContainer = document.getElementsByClassName('cart-content')[0]
          let cart = cartItemContainer.getElementsByClassName('cart')
          for (let i = 0; i < cart.length; i++) {
             var cart = carts[i]
          }
     } 



     <!-- 
      <div class="cart-content">
           <div class="cart">
               <div class="my-cart">
                 <h2>My cart</h2>
              </div>
               <div class="cart-item">
                   section for shopping cart items
               </div>
               <div>item 1 </div>
               <div>item 2</div> 
                <button class="button" onclick="removeFromCart()" >Remove from cart</button> 

                document.addEventListener("DOMContentLoaded", () => {
 fetchProducts() 
})




//   button.addEventListener('click', function () {
//             console.log('clicked');
//  for (i = 0; 1 < addItemsToCart.length; i++) {
//           let button = addItemsToCart[i]

      let addItemsToCart = document.getElementsByClassName('add-item');
        
         for (i = 0; 1 < addItemsToCart.length; i++) {
          let button = addItemsToCart[i]
           button.addEventListener('click', function () {
            console.log('clicked');
        });
           
    }
     <p class="description">${this.description}</p>
class Cart {
  static all = []; // pushing products selected into cart array to create and save cart
  static total = 0; // setting total to equal 0 when cart is created to be able to do math 
  constructor(id, product_id) { // ssetting up constructor to create an initialize objects of cart class 
    this.id = id; // assigned cart id upon initialization
    this.product_id = product_id; //same with product 
    Cart.all.push(this); // appending all products id values into an array to create a cart
    Cart.total += parseInt(Product.all[this.product_id].price); //calculating the cart total by changing the array into a string an conductiong basic math
    this.addToPage(); // calls the addtopage function up initialization
    this.removeFromCart();
  }

  static cartButtons() {
    return document.querySelectorAll(".btn-primary"); // calling return on the btn to give a return value thats not null
  }

  addToPage() {
    const cartItemsClass = document.querySelector(".cart-items"); //find the class container of where cart product wil be stored
    const item = document.createElement("div"); // creating an element to store the items added
    item.innerHTML += `${Product.all[this.product_id].product_type}  
     ${Product.all[this.product_id].price}`;// calling innerHtml on item to be able to insert the items into the div assigned to each product
    cartItemsClass.appendChild(item); // appending the item to the dom so the user will be able to see products added to cart
    document.querySelector(".cart-total-price").innerHTML =
      "$" + (Math.round(Cart.total * 100) / 100).toFixed(2); // added the extra 0 to the total price as well as a dollar sign
  }

  removeFromCart() {
     const cartItemsClass = document.querySelector(".cart-items");
    
  }
}



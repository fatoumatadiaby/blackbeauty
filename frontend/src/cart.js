class Cart {
  static all = [];
  static total = 0;
  constructor(id, product_id) {
    this.id = id;
    this.product_id = product_id;
    Cart.all.push(this);
    Cart.total += parseInt(Product.all[this.product_id].price);
    this.addToPage();
  }

  static cartButtons() {
    return document.querySelectorAll(".btn-primary");
  }

  addToPage() {
    const cartItemsClass = document.querySelector(".cart-items");
    const item = document.createElement("li");
    item.innerHTML += `${Product.all[this.product_id].brand}   ${
      Product.all[this.product_id].price
    }`;
    cartItemsClass.appendChild(item);
    document.querySelector(".cart-total-price").innerHTML =
      "$" + (Math.round(Cart.total * 100) / 100).toFixed(2);
  }
}

// removeFromCart() {

// }

class Cart {
    constructor(id,product_id) {
        this.id = id;
        this.product_id = product_id
        Cart.all.push(this)

    }
}
 
  function addToCart(event) {
     
}
 Cart.all = []
class Product {
  constructor(product, productAttributes) {
    this.id = product.id;
    this.brand = productAttributes.brand;
    this.product_type = productAttributes.product_type;
    this.ingrediants = productAttributes.ingrediants;
    this.description = productAttributes.description;
    this.directions = productAttributes.directions;
    this.price = (Math.round(productAttributes.price * 100) / 100).toFixed(2);
    Product.all[this.id] = this; 
  }

  renderProduct() {
    return `
    <div class="flip-card">
     <div class="flip-card-inner" id=${this.id} >
        <div class="flip-card-front">
           <div class="brand-one">
            <h3> ${this.brand} </h3>
           </div>
           <br>
           <div class="brand-two">
             <h3> ${this.product_type}</h3>
             <h3> $${this.price} </h3>
            </div>
        </div>
        <div class="flip-card-back">
        <button id=${this.id} class="btn btn-primary">Add to Cart</button>
            <p>${this.directions}</p>
         </div>
     </div>
   </div> `;
  }
}
Product.all = {};

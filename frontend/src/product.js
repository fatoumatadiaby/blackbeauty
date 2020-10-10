class Product{
    constructor(id, brand, product_type, ingrediants, description, directions, price) {
     this.id = id;     
     this.brand = brand;
     this.product_type = product_type;
     this.ingrediants = ingrediants;
     this.description = description;
     this.directions = directions;
     this.price = price;
    }
    
    renderProduct() {
        // debugger;
        const productDiv = document.getElementById("product-inventory")
          console.log(productDiv)
            const flipCard = document.createElement("div")
            flipCard.id = this.id
            productDiv.appendChild(flipCard)
            flipCard.innerHTML += `

          <div class="flip-card-inner" id=${this.id} >
             <div class="flip-card-front">
                 <h3> ${this.brand} </h3>
                 <h3> ${this.product_type} </h3><h3> ${this.price} </h3>
             </div>
             <div class="flip-card-back">
                 <p>${this.ingrediants}</p>
                 <p>${this.description}</p>
                 <p>${this.directions}</p>
             </div>
          </div>
      `
    }
    
}


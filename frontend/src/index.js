const url = "http://localhost:3000/products"

document.addEventListener('DOMContentLoaded', () => {
  fetchProducts()
  const createShoppingCart = document.getElementsByClassName("container content-section")
})

function fetchProducts() {
  fetch(url)
  .then(response => response.json())
  .then(products => {
      products.data.forEach(product => {
        let newProduct = new Product(product, product.attributes)
         document.querySelector('#product-inventory').innerHTML += newProduct.renderProduct()

      })
    } )
    }
   



         

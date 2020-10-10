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
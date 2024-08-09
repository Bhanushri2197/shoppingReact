import Product from "./Products";
import { useState } from "react";

function ProductBlock({ addItems }) {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  let removeItems = (product) => {
    let index = items.findIndex(item => item.name === product.name)
    if(index != -1){
        items.splice(index,1)
        setItems([...items])
        setTotal(total - parseFloat(product.price.replace('$', '')))
    }
  }

 
const products = [
  {
    "name": "Foundation",
    "price": "$25.00",
    "stockout" : true,
    "stockvalue" : "$15.00",
    "image": "src/assets/foundation.jpeg",
    "addToCartButton": "View Options",
    "sale" : false
  },
  {
    "name": "Mascara",
    "price": "$15.00",
    "image": "src/assets/mascara.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : true,
    "offerprice" : "$20.00"
  },
  {
    "name": "Lipstick",
    "price": "$20.00",
    "image": "src/assets/lipstick.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : true,
    "offerprice" : "$25.00"
  },
  {
    "name": "Blush",
    "price": "$18.00",
    "image": "src/assets/blush.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Eyeshadow Palette",
    "price": "$35.00",
    "image": "src/assets/eyeshadow.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Concealer",
    "price": "$22.00",
    "image": "src/assets/consealer.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : true,
    "offerprice" : "$30.00"
  },
  {
    "name": "Eyeliner",
    "price": "$16.00",
    "image": "src/assets/eyeliner.png",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Highlighter",
    "price": "$28.00",
    "image": "src/assets/highlighter.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : true,
    "offerprice" : "$35.00"
  },
  {
    "name": "Setting Spray",
    "price": "$24.00",
    "image": "src/assets/settingspray.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Primer",
    "price": "$30.00",
    "image": "src/assets/primer.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Bronzer",
    "price": "$27.00",
    "image": "src/assets/bronzer.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Lip Gloss",
    "price": "$18.00",
    "image": "src/assets/lipgloss.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Nail Polish",
    "price": "$12.00",
    "image": "src/assets/nailpolish.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : true,
    "offerprice" : "$20.00"
  },
 
  {
    "name": "Brow Gel",
    "price": "$19.00",
    "image": "src/assets/browgel.png",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Contour Kit",
    "price": "$33.00",
    "image": "src/assets/countor.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Lip Liner",
    "price": "$13.00",
    "image": "src/assets/lipliner.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Makeup Brush Set",
    "price": "$40.00",
    "image": "src/assets/brush.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : true,
    "offerprice" : "$50.00"
  },
  {
    "name": "Tinted Moisturizer",
    "price": "$26.00",
    "image": "src/assets/tint.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "BB Cream",
    "price": "$22.00",
    "image": "src/assets/bbcream.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : false
  },
  {
    "name": "Setting Powder",
    "price": "$29.00",
    "image": "src/assets/settingpowder.jpeg",
    "addToCartButton": "Add to Cart",
    "sale" : true,
    "offerprice" : "$35.00"
  }
]

  return (
    <div className="productsBlock">
      <div className="container">
        <div className="productDisplay justify-content-center row">
          {products.map((product) => (
            <Product key={product.name} product={product} addItems={addItems} />
          ))}
        </div>
     
      </div>
    </div>
  );
}

export default ProductBlock;

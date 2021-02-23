import React from 'react'
import {Card } from 'antd'
import 'antd/dist/antd.css';
function Product(props) {
  const {product} = props
  const {Meta} = Card
  return (
    <div>
          <Card
            style={{ width: 300 }}
             cover={
       <img
        alt={product.name}
        src={product.image}
      />
     
    }
   
  > <button>add to cart</button>
    <Meta className="title-top-sell"
      title={product.name}
      description={product.description}
      
    />
   <p>${product.price}</p>
  </Card>
    </div>
  )
}

export default Product

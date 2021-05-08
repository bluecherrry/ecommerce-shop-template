import React, { useState } from 'react'
import { Card, Button, Alert,message } from 'antd'
import { ShoppingCartOutlined, HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Counter from './Counter';
function Product(props) {
  const { product } = props
  const { Meta } = Card
  const [click, setClick] = useState(false)
  const success = () => {
    message.success('added to cart successfuly');
    setClick(true)
  };
  console.log(click);
  return (
    <div>
      <Card
        style={{ width: "90%" }}
        cover={
          <img className="zoom"
            alt={product.name}
            src={product.image}
          />

        }

      >
        <Meta className="title-top-sell"
          title={product.name}
          description={product.description}

        />
        <p>${product.price}</p>

        <Button onClick={success}
        >
          <ShoppingCartOutlined /></Button>
        <Button >
          <HeartTwoTone twoToneColor="#eb2f96" />
        </Button>
        {
          click ? <Counter selected={click}/> : ""
        //
        }
      </Card>
    </div>
  )
}

export default Product

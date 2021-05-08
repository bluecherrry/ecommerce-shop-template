import React from 'react'
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './Top.css'
import productList from './ProductList'
import Product from './Product';
function TopSell() {


  return (
    <div>
      <div className="header-top-selling">
        <h2 className="title-top-selling">
          Top Selling Products
      </h2>
        <p className="subtitle-top">
          Forget about struggling to do everything at once: taking care of the family, Running your business etc.
      </p>
      </div>
      <div >
        <Row className="row-top-sell">

          {productList.map((product) => (
            <Col xl={6} xs={24}>
              <Product product={product} key={product.id} />

            </Col>
          ))}
        </Row>

      </div>

    </div>
  )
}

export default TopSell

import React from 'react'
import 'antd/dist/antd.css';
import './Category.css'
import {Col, Row} from 'antd'
import kid from '../../assets/images/section-kid.jpg'
import men from '../../assets/images/section-men.png'
import women from '../../assets/images/section-women.jpg'
function Category() {
  return (
    <Row className="categories-section">
        <Col span={6} className="column" >
        <div>
       <h1 style={{fontSize:'70px',marginLeft:'50px'}}>End Of Season
         </h1> 
      <p className="p-section">
      Avail massive discounts and 
      get exciting offers with our
       shopping across all new arrival 
       categories

      </p>


        </div>
        </Col>
        <Col span={6} className="column" >
        <img src={women} alt=""  className="image-section" /></Col>
        <Col span={6} className="column" >
        <img src={kid} alt=""  className="image-section" /></Col>
        <Col span={6} className="column" >
        <img src={men} alt=""  className="image-section" /></Col>
      
    </Row>
  )
}

export default Category

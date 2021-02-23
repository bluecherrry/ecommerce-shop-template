import React from 'react'
import './Navbar1.css'
import {Link} from 'react-router-dom'
import {MailOutlined,PhoneOutlined,LoginOutlined,TwitterOutlined,FacebookOutlined,InstagramOutlined } from '@ant-design/icons' 
function Navbar1() {
  return (
    <div>
      <ul>
        <li>
     <a>   <MailOutlined className="icon" /> shararehshadlo@gmail.com </a>
        </li>
        <li>
          <a> <PhoneOutlined  className="icon"/>  +989393111049 </a>
        </li>
        <div className="right">
        <li>
          <a href="account">My account 

          </a>
        </li>
        <li>
          <a href="login">
          <LoginOutlined className="icon"/>Login
          </a>
        </li>
        <li>
          <a>
        <FacebookOutlined className="icon"/>
        <InstagramOutlined className="icon"/>
        <TwitterOutlined className="icon"/>
        </a>
        </li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar1


import React,{useState} from 'react'
import './Navbar2.css'
import {Link} from 'react-router-dom'
import {FacebookOutlined,InstagramOutlined,HeartOutlined,ShoppingCartOutlined } from '@ant-design/icons' 

function Navbar2() {
  const [click,setClick]=useState(false)
  const handleclick = () => setClick(!click)
  const mobileclosemenu = () => setClick(false)
  // const icon = () => { return ( click ? <BarsOutlined /> : <CloseOutlined /> )}
  // const preventClick = (e) => {return (e.preventDefault() )}

  return (
    <div className="navbar"> 
    
      
    <div className="navbar-container">
      
       <span className="cart-section">
     <ShoppingCartOutlined />
     <HeartOutlined />
      </span>
      {/*  logo */}
        <Link to="/" className="navbar-logo" onClick={mobileclosemenu}>
          <i>LOGO</i>
        </Link>
     
      {/* menu icon */}
      <div className="menu-icon" onClick={handleclick}>
        <i className={click? 'fa fa-times':'fa fa-bars'}/>
      </div>
      {/* menu item */}
      <div >
        <ul className={click ? 'nav-menu active ' : 'nav-menu'}>
          <li className="nav-item ">
            <Link to ="/" onClick={mobileclosemenu }className="nav-links">home </Link>
          </li>
          <li className="nav-item ">
            <Link to ="/services" onClick={mobileclosemenu} className="nav-links"> Products </Link>
          </li>
          <li className="nav-item ">
            <Link to ="/contact" onClick={mobileclosemenu} className="nav-links"> contact us </Link>
          </li>
          <li className="nav-item ">
            <Link to ="/about" onClick={mobileclosemenu} className="nav-links"> about us </Link>
          </li> 
         
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={mobileclosemenu}
            >
              Sign Up
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
    
  </div>

















  //  <div className={ click ? 'responsive active': 'topnav'  }>
  // <a href="#home" className="active" onClick={mobileclosemenu } >Home</a>
  // <a href="#contact" onClick={mobileclosemenu }>Contact</a>
  // <div className="dropdown" >
  //   <button className="dropbtn"
  //   onClick={mobileclosemenu}>Dropdown 
  //     <i className="fa fa-caret-down" />
  //   </button>
  //   <div className="dropdown-content">
  //     <a href="/">Link 1</a>
  //     <a href="/">Link 2</a>
  //     <a href="/">Link 3</a>
  //   </div>
  // </div> 
  // <a href="#about" onClick={mobileclosemenu}>About</a>
 // <a href="#" className='icon' onClick={ (e) => { preventClick(e) ;handleclick()}} > {icon} </a>


  )
  }

export default Navbar2


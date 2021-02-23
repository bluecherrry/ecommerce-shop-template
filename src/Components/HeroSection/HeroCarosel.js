import React,{Component} from 'react'
import './Hero.css'
import 'antd/dist/antd.css';
import { Carousel} from 'antd';
import Icon  from '@ant-design/icons'
import bg1 from '../../assets/images/bg-carosel-1.jpg'
import bg2 from '../../assets/images/bg-carosel-0.jpg'





class HeroCarosel extends Component {
  
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <div>
        <Icon type="left-circle" onClick={this.previous} className="icons" />
        <Carousel className="container" autoplay 
        ref={node => (this.carousel = node)} {...props}>
          <div className="slider-01">
            <h3 >
            <img src={bg1} alt="" className="bgpic"/>
            <div className="slide-left">
               <div className="slide-content">
            <div className="slide-sale">20 
             <span>%<br />off
               </span></div>
               <div className="slide-title">
                 <h1>Spring</h1></div>
                  <div className="slide-subtitle">
                    Season festival
                 </div>
                 <span className="slide-since">
            Catalogue 2018</span>
            </div></div>



            <div className="col-xl-6 col-md-4 text-right d-none d-md-block">
              {/* <div className="slide-offer">Limited time offer</div>
              <a className="slide-button" href="/sidebar-with-load-more">
                Get the Offer</a> */}
                </div></h3>
                </div>

            
          
          <div className="slider-02">
            <h3 >
              <img src={bg2} alt="" className="bgpic"/>
              <div className="slide-content">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-md-8">
              <div className="slide-left">
                <div className="slide-title">
                  <h1>New 
                    <br/>Arrival</h1>
                </div>
                <div className="slide-subtitle">
                  For women   </div>
              </div></div></div></div>
              <a className="slide-button-flat" href="/">shop now</a>
              </div>
              <div className="col-xl-6 col-md-4 text-right d-none d-md-block">
                {/* <div className="slide-offer">
                  Limited time offer
                </div>
                <a className="slide-button">
                  get the offer 
                </a> */}
              </div>
            </h3>
          </div>
        </Carousel>
        <Icon type="right-circle" onClick={this.next} className="icons" />
      </div>
    );
  }
}
export default HeroCarosel
//<img  src={bg1} alt="shop"className="bgpic" />1

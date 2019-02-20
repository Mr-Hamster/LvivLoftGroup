import React from 'react'
import './headerStyles.css'
import SmartSlider from 'react-smart-slider'


const slidesArray = [
    {
      title: "LOFT", url: "https://s-ec.bstatic.com/images/hotel/max1024x768/863/86308932.jpg"
    },
    {
      title: "LOFT", url: "https://t-ec.bstatic.com/images/hotel/max1024x768/164/164651804.jpg"
    },
    {
      title: "LOFT",
      url: "https://s-ec.bstatic.com/images/hotel/max1024x768/992/99268501.jpg",
    },
    {
        title: "LOFT",
        url: "https://s-ec.bstatic.com/images/hotel/max1024x768/463/46374259.jpg",
    },
  ];

export default  class Header extends React.Component {
    
    render(){
        return(
            <div className="wrapper-header-main">
                <div className='header-logo_main'>
                    <SmartSlider slides={slidesArray} autoSlide={true} buttonShape={'round'} autoSlideInterval={4500}/>
                </div>
            </div>       
        );
    }
}
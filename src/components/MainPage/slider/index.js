import React from 'react'
import './slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Link } from 'react-router-dom'

export default class Content extends React.Component{
    render(){
        return(
            <div className='slider-wrapper'>
            <br />
            <br />
            <br />
            <ScrollableAnchor id={'objects'}>
                <div className='slider-block'>
                    <h1>Обери свій "Loft" </h1>
                    <div className="carusel">
                        <Carousel autoPlay={true} showArrows={false}>
                            <div>
                                <img className="img" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492523/loftlviv/main_page/gallery/loft-hostel.jpg" />
                                <Link to='/lviv-loft-hostel'><p className="legend">Loft Hostel</p></Link>
                            </div>
                            <div>
                            <img className="img" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492523/loftlviv/main_page/gallery/loft-construction.jpg" />
                            <Link to='/lviv-loft-construction'><p className="legend">Loft Construction</p></Link>
                            </div>
                            <div>
                                <img className="img" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492523/loftlviv/main_page/gallery/loft-prison.jpg" />
                                <Link to='/lviv-loft-prison'><p className="legend">Loft Prison</p></Link>
                            </div>
                            <div>
                                <img className="img" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492523/loftlviv/main_page/gallery/loft-apartaments.jpg" />
                                <Link to='/lviv-loft-apartaments'><p className="legend">Loft  Apartaments</p></Link>
                            </div> 
                        </Carousel>
                    </div>     
                </div>  
            </ScrollableAnchor> 
                    <br />
                    <br />
                    <br />
                <ScrollableAnchor id={'about'}>   
                    <div className='slider-block'>
                    <h1>Lviv Loft Group</h1>    
                            <p> Це одна з найбільших та найпривабливіших мереж хостелів та апартаментів у Львові. "Loft" працює на ринку вже більше 3-ох років і зарекомендував себе, як одне з найкращих місць для ночівлі у місті Лева. 
                            </p>
                    </div>
                </ScrollableAnchor>
                <br />
                <br />
                <br />
            </div>
            
    
        );
    }
}
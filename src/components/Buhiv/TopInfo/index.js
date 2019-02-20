import React from 'react';
import './top_info_b.css';


export default class TopInfo_b extends React.Component{
    render(){
        return(
            <div className="wrapper_info_b">
                <div className='shadow_b'>
                    <a href="tel:+380672727832">+38(067) 27 27 832</a>
                </div>
                <div className='shadow_b1'>
                    <a href="https://goo.gl/maps/ZSMWFzik7X42">Львівська область, смт. Східниця, вул. Об'їзна 1</a>
                </div>
                <div className="icon_b">
                    <a  href="https://www.facebook.com/loftprison/"><img className='icons_a' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492014/loftlviv/buhiv/contacts/facebook_b.png" /></a>
                    <a  href="https://www.instagram.com/loftprison/"><img className='icons_a' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492014/loftlviv/buhiv/contacts/instagram_b.png" /></a>
                    <a  href="viber://chat?number=+380678834646"><img className='icons_a' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492014/loftlviv/buhiv/contacts/viber_b.png" /></a>
                    <a  href="whatsapp://send?phone=+380678834646"><img className='icons_a' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492014/loftlviv/buhiv/contacts/WhatsApp_b.png" /></a>    
                </div>
            </div>
        );
    }
}
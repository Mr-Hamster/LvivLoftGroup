import React from 'react'
import './footer_b.css'


export default class FooterBuhiv extends React.Component{
    render(){
        return(
            <div className="buhiv-footerSize">
                <div className="buhiv-logo-block">
                    <img className="buhiv-logo-footer" src="https://res.cloudinary.com/loftstar777/image/upload/v1550491817/loftlviv/buhiv/bg_img/villalogo.png"></img>
                    <div className="buhiv-title-footer">VILLA BUHIV</div>
                    <div className="buhiv-title-footer1">Відчуй життя Карпат</div>
                </div>
                <div className="buhiv-contacts">
                    <div className='buhivShadow'><a href="https://goo.gl/maps/Dw4fDBKgqwB2">Львівська область, смт. Східниця, вул. Об'їзна 1</a></div>
                    <div className='buhivShadow'>
                        <a href="tel:+380672727832">+38(067) 27 27 832</a>
                    </div>
                </div>
                <div className='buhiv-icons'>
                        <div className='buhiv-icons-size-footer'>
                            <a  href="https://www.facebook.com/loftprison/"><img className='buhiv-icons-footer'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492014/loftlviv/buhiv/contacts/facebook_b.png" /></a>
                            <a  href="https://www.instagram.com/loftprison/"><img className='buhiv-icons-footer'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492014/loftlviv/buhiv/contacts/instagram_b.png" /></a>
                            <a  href="viber://chat?number=+380672727832"><img className='buhiv-icons-footer'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492014/loftlviv/buhiv/contacts/viber_b.png" /></a>
                            <a  href="whatsapp://send?phone=+380672727832"><img className='buhiv-icons-footer'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492014/loftlviv/buhiv/contacts/WhatsApp_b.png" /></a>
                        </div>
                        <div className="buhiv-rights">
                            © Всі права захищено. Lviv Loft Group.
                        </div>
                </div>
            </div>
        );
    }
}
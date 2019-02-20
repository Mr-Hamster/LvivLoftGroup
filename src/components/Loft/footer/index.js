import React from 'react';
import './footer_l.css'


export default class FooterLoft extends React.Component{
    render(){
        return(
            <div className="loft-footerSize">
                <div className="loft-logo-block">
                    <img className="loft-logo-footer" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492368/loftlviv/loft/bg_img/logo.png"/>
                    <div className="loft-title-footer"><h1>Lviv Loft Hostel</h1></div>
                </div>
                <div className="loft-contacts">
                    <div className='loftShadow'><a href="https://goo.gl/maps/HudrfUwjGxM2"> Львів, вул. Січових Стрільців 21</a></div>
                    <div className='loftShadow'><a href="tel:+380978381616">+38(097) 838 16 16</a><a href="tel:+380938381616">+38(093) 838 16 16</a></div>
                    <div className='loftShadow'><a  href="mailto:lvivloft.hostel@gmail.com">lvivloft.hostel @gmail.com</a></div>
                </div>
                <div className='loft-icons'>
                        <div className='loft-icons-size-footer'>
                            <a  href="https://www.facebook.com/loftlviv/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/facebook1.png" /></a>
                            <a  href="https://www.instagram.com/lvivlofthostel/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/instagram1.png" /></a>
                            <a  href="viber://chat?number=+380978381616"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/Viber1.png" /></a>
                            <a  href="mailto:lvivloft.hostel@gmail.com"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/gmail1.png" /></a>
                            <a  href="whatsapp://send?phone=+380978381616"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a> 
                        </div>
                        <div className="loft-rights">
                            © Всі права захищено. Lviv Loft Group.
                        </div>
                </div>
            </div>
        );
    }
}
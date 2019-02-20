import React from 'react';
import './topinfo_l.css';


export default class TopInfo_l extends React.Component{
    render(){
        return(
                <div className='info_wrapperL'>
                    <div className="LoftHeader-info-wrapper">
                        <div className='shadowLoft'><a href="tel:+380978381616">+38(097) 838 16 16</a></div>
                        <div className='shadowLoft'>
                        <a href="https://goo.gl/maps/HudrfUwjGxM2">Львів, вул. Січових Стрільців 21</a></div>  
                        <div className='shadowLoft'><a href="mailto:lvivloft.hostel@gmail.com">lvivloft.hostel @gmail.com</a></div>
                    </div>
                    <div className='loft_icons'>
                        <a  href="https://www.facebook.com/loftlviv/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/facebook1.png" /></a>
                        <a  href="https://www.instagram.com/lvivlofthostel/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/instagram1.png" /></a>
                        <a  href="viber://chat?number=+380978381616"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/Viber1.png" /></a>
                        <a  href="mailto:lvivloft.hostel@gmail.com"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/gmail1.png" /></a>
                        <a  href="whatsapp://send?phone=+380978381616"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>     
                    </div>
                </div>
        );
    }
}
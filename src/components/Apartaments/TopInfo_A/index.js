import React from 'react';
import './topInfo_a.css';


export default class TopInfo_A extends React.Component{
    render(){
        return(
            <div className='info_wrapperL'>
                <div className="LoftHeader-info-wrapper">
                    <div className='shadowConstr'><a href="tel:+380734343131">+38(073) 434 31 31</a></div>
                    <div className='shadowConstr'>
                    <a href="https://goo.gl/maps/Dw4fDBKgqwB2">Львів, вул. Тиктора 6, кв. 12</a></div>  
                    <div className='shadowConstr'><a href="mailto:lvivloftapart@gmail.com">lvivloftapart @gmail.com</a></div>
                </div>
                <div className='loft_icons'>
                <a  href="https://www.facebook.com/lvivloftapartments/"><img className='iconsL' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/facebook1.png" /></a>
                <a  href="https://www.instagram.com/lvivloftapartments/"><img className='iconsL' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/instagram1.png" /></a>
                <a  href="viber://chat?number=+380734343131"><img className='iconsL' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/Viber1.png" /></a>
                <a  href="mailto:lvivloftapart@gmail.com"><img className='iconsL' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/gmail1" /></a>
                <a  href="whatsapp://send?phone=+380734343131"><img className='iconsL' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>
  
                </div>
            </div>
        );
    }
}
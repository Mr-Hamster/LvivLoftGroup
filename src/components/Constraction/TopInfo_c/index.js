import React from 'react';
import '../../Loft/topInfo/topinfo_l.css'


export default class TopInfo_c extends React.Component{
    render(){
        return(
            <div className='info_wrapperL'>
                <div className="LoftHeader-info-wrapper">
                    <div className='shadowConstr'><a href="tel:+380980206446">+38(098) 020 64 46</a></div>
                    <div className='shadowConstr'>
                    <a href="https://goo.gl/maps/pxkbKXuRJu22">Львів, вул. Вузька 3</a></div>  
                    <div className='shadowConstr'><a href="mailto:lvivloftconstruction@gmail.com">lvivloftconstruction @gmail.com</a></div>
                </div>
                <div className='loft_icons'>
                    <a  href="https://www.facebook.com/lvivloftconstruction/"><img className='iconsL'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/facebook1.png" /></a>
                    <a  href="https://www.instagram.com/lvivloftconstruction/"><img className='iconsL'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/instagram1.png" /></a>
                    <a  href="viber://chat?number=+380678834646"><img className='iconsL'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/Viber1.png" /></a>
                    <a  href="mailto:lvivloftconstruction@gmail.com"><img className='iconsL'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/gmail1.png" /></a>
                    <a  href="whatsapp://send?phone=+380678834646"><img className='iconsL'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>    
                </div>
            </div>
        );
    }
}
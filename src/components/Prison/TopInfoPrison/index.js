import React from 'react'
import './topinfo.css'

export default  class TopInfoPrison extends React.Component {
    
    render(){
        return(
                <div className='PrisonHeader-info-size'>
                    <div className='PrisonHeader-info-wrapper'>
                                <div className='PrisonShadow'><a href="tel:+380678834646">+38(067) 883 46 46</a></div>
                                <div className='PrisonShadow'><a href="https://goo.gl/maps/65REq7Lnwy72">Львів, вул. Ярослава Мудрого 12а блок 1</a></div>
                                <div className='PrisonShadow'><a  href="mailto:lvivloftprison@gmail.com">lvivloftprison @gmail.com</a></div>
                    </div>
                    <div className='PrisonHeader-icons'>
                    <a  href="https://www.facebook.com/loftprison/"><img className='PrisonStyle-icons' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/prison/contacts/facebook2.png" /></a>
                        <a  href="https://www.instagram.com/loftprison/"><img className='PrisonStyle-icons' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/prison/contacts/instagram2.png" /></a>
                        <a  href="viber://chat?number=+380678834646"><img className='PrisonStyle-icons'src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/prison/contacts/viber2.png" /></a>
                        <a  href="mailto:lvivloftprison@gmail.com"><img className='PrisonStyle-icons' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/prison/contacts/gmail2.png" /></a>
                        <a  href="whatsapp://send?phone=+380678834646"><img className='PrisonStyle-icons' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>        
                    </div>  
                </div>
        );
    }
}
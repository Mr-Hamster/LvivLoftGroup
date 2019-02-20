import React from 'react'
import '../../Loft/footer/footer_l.css'


export default class Footer extends React.Component{
    render(){
        return(
             <div className="loft-footerSize">
                <div className="loft-logo-block">
                    <img className="loft-logo-footer" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492224/loftlviv/prison/bg_img/logoPrison.png"/>
                    <div className="loft-title-footer"><h1>Lviv Loft Prison</h1></div>
                </div>
                <div className="loft-contacts">
                    <div className='loftShadow'><a href="https://goo.gl/maps/65REq7Lnwy72">Львів, вул. Ярослава Мудрого 12а блок 1</a></div>
                    <div className='loftShadow'><a href="tel:+380678834646">+38(067) 883 46 46</a><a href="tel:+380638834646">+38(063) 883 46 46</a></div>
                    <div className='loftShadow'><a  href="mailto:lvivloftprison@gmail.com">lvivloftprison @gmail.com</a></div>
                </div>
                <div className='loft-icons'>
                        <div className='loft-icons-size-footer'>
                        <a  href="https://www.facebook.com/loftprison/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/prison/contacts/facebook2.png" /></a>
                        <a  href="https://www.instagram.com/loftprison/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/prison/contacts/instagram2.png" /></a>
                        <a  href="viber://chat?number=+380678834646"><img className='loft-icons-footer'src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/prison/contacts/viber2.png" /></a>
                        <a  href="mailto:lvivloftprison@gmail.com"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/prison/contacts/gmail2.png" /></a>
                        <a  href="whatsapp://send?phone=+380678834646"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>   
                        </div>
                        <div className="loft-rights">
                            © Всі права захищено. Lviv Loft Group.
                        </div>
                </div>
         </div>
        );
    }
}
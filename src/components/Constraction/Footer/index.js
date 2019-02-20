import React from 'react';
import '../../Loft/footer/footer_l.css'


export default class FooterConstraction extends React.Component{
    render(){
        return(
            <div className="loft-footerSize" style={{backgroundImage:"url(https://res.cloudinary.com/loftstar777/image/upload/v1550491701/loftlviv/apart/bg_img/footer.jpg)"}}> 
                <div className="loft-logo-block">
                    <img className="constr-logo-footer" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492139/loftlviv/construction/bg_img/constraction_logo.png"/>
                    <div className="loft-title-footer"><h1>Lviv Loft Constraction</h1></div>
                </div>
                <div className="loft-contacts">
                    <div className='loftShadow'><a href="https://goo.gl/maps/pxkbKXuRJu22">Львів, вул. Вузька 3</a></div>
                    <div className='loftShadow'><a href="tel:+380980206446">+38(098) 020 64 46</a><a href="tel:+380930206446">+38(093) 020 64 46</a></div>
                    <div className='loftShadow'><a  href="mailto:lvivloftconstruction@gmail.com">lvivloftconstraction @gmail.com</a></div>
                </div>
                <div className='loft-icons'>
                        <div className='loft-icons-size-footer'>
                                <a  href="https://www.facebook.com/lvivloftconstruction/"><img className='loft-icons-footer'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/facebook1.png" /></a>
                                <a  href="https://www.instagram.com/lvivloftconstruction/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/instagram1.png" /></a>
                                <a  href="viber://chat?number=+380980206446"><img className='loft-icons-footer'  src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/viber1.png" /></a>
                                <a  href="mailto:lvivloftconstruction@gmail.com"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/gmail1.png" /></a>
                                <a  href="whatsapp://send?phone=+380980206446"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>
                            </div>
                        <div className="loft-rights">
                            © Всі права захищено. Lviv Loft Group.
                        </div>
                </div>
            </div>
        );
    }
}
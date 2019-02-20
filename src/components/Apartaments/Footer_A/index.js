import React from 'react'


export default class FooterApart extends React.Component{
    render(){
        return(
            <div className="loft-footerSize" style={{backgroundImage:"url(https://res.cloudinary.com/loftstar777/image/upload/v1550491701/loftlviv/apart/bg_img/footer.jpg)"}}>
                <div className="loft-logo-block">
                    <img className="loft-logo-footer" src="https://res.cloudinary.com/loftstar777/image/upload/v1550491701/loftlviv/apart/bg_img/logoapart.png"/>
                    <div className="loft-title-footer"><h1>Lviv Loft Apartaments</h1></div>
                </div>
                <div className="loft-contacts">
                    <div className='loftShadow'><a href="https://goo.gl/maps/Dw4fDBKgqwB2">Львів, вул. Тиктора 6, кв. 12</a></div>
                    <div className='loftShadow'><a href="tel:+380734343131">+38(073) 434 31 31</a><a href="tel:+380974343131">+38(097) 434 31 31</a></div>
                    <div className='loftShadow'><a  href="mailto:lvivloftapart@gmail.com">lvivloftapart @gmail.com</a></div>
                </div>
                <div className='loft-icons'>
                        <div className='loft-icons-size-footer'>
                                <a  href="https://www.facebook.com/lvivloftapartments/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/facebook1.png" /></a>
                                <a  href="https://www.instagram.com/lvivloftapartments/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/instagram1.png" /></a>
                                <a  href="viber://chat?number=+380734343131"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/Viber1.png" /></a>
                                <a  href="mailto:lvivloftapart@gmail.com"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/gmail1" /></a>
                                <a  href="whatsapp://send?phone=+380734343131"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>
                            </div>
                        <div className="loft-rights">
                            © Всі права захищено. Lviv Loft Group.
                        </div>
                </div>
            </div>
        );
    }
}
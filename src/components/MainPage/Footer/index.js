import React from 'react'
import './footer.css'


export default class Footer extends React.Component{
    render(){
        return(
            <div className="loft-footerSize" style={{backgroundColor:"#c50000",textShadow:"none"}}>
                <div className="loft-logo-block">
                    <img className="loft-logo-footer" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492498/loftlviv/main_page/logo.png"></img>
                    <div className="loft-title-footer"><h1>Lviv Loft Group</h1></div>
                </div>
                <div className="loft-contacts">
                    <div className='loftShadow' style={{textShadow:"none"}}>Україна, м. Львів</div>
                    <div className='loftShadow'><a href="tel:+380967864862" style={{textShadow:"none"}}>+38(096) 786 48 62</a></div>
                    <div className='loftShadow'><a  href="mailto:lvivloftgroup@gmail.com" style={{textShadow:"none"}}>lvivloftgroup@gmail.com</a></div>
                </div>
                <div className='loft-icons'>
                        <div className='loft-icons-size-footer'>
                        <a  href="https://www.instagram.com/lvivloftgroup/"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/instagram1.png" /></a>
                        <a  href="viber://chat?number=+380967864862"><img className='loft-icons-footer'src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/viber1.png" /></a>
                        <a  href="mailto:lvivloftgroup@gmail.com"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/gmail1.png" /></a>
                        <a  href="whatsapp://send?phone=+380967864862"><img className='loft-icons-footer' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>    
                        </div>
                        <div className="loft-rights" style={{textShadow:"none"}}>
                            © Всі права захищено. Lviv Loft Group.
                        </div>
                </div>
            </div>
        );
    }
}
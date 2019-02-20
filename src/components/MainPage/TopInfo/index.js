import React from 'react';
import '../../Loft/topInfo/topinfo_l.css'


export default class TopInfo_main extends React.Component{
    render(){
        return(
            <div className='PrisonHeader-info-size' style={{backgroundColor:'#c50000', borderBottom:'solid 3px black', borderTop:'solid 3px black'}}>
                    <div className='PrisonHeader-info-wrapper' style={{fontSize:'20px'}}>
                        <div className='shadowConstr'><a href="tel:+380967864862" style={{textShadow:'none'}}>+38(096) 786 48 62</a></div>
                        <div className='shadowConstr' style={{color:'black'}}>Україна, м. Львів</div>
                        <div className='shadowConstr'><a  href="mailto:lvivloftgroup@gmail.com" style={{textShadow:'none'}}>lvivloftgroup @gmail.com</a></div>
                    </div>
                    <div className='PrisonHeader-icons'>
                        <a  href="https://www.instagram.com/lvivloftgroup/"><img className='PrisonStyle-icons' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/instagram1.png" /></a>
                        <a  href="viber://chat?number=+380967864862"><img className='PrisonStyle-icons'src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/viber1.png" /></a>
                        <a  href="mailto:lvivloftgroup@gmail.com"><img className='PrisonStyle-icons' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/gmail1.png" /></a>
                        <a  href="whatsapp://send?phone=+380967864862"><img className='PrisonStyle-icons' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492465/loftlviv/contacts_icon/WhatsApp1.png" /></a>    
                    </div>  
                </div>
        );
    }
}
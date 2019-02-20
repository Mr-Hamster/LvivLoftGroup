import React from 'react'
import './header_img.css'
import TopInfo_l from '../topInfo';

export default class HeaderLoft extends React.Component{
    render(){
        return(
            <div className="wrapper_l">
                <div className="infoLoft">
                    <TopInfo_l />
                </div>
                <div className='header-text-ico'>
                    <div className="text_loft">
                        L<img className='logo_l' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492368/loftlviv/loft/bg_img/logo.png" />ft 
                    </div>
                    <div className="text_loft1">
                        Hostel
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import '../../Constraction/Header/headerConst.css';
import TopInfo_A from '../TopInfo_A';

export default class HeaderApart extends React.Component{
    render(){
        return(
            <div className="wrapper-header_a">
                <div className="info_c">
                    <TopInfo_A />
                </div>   
                <div className='header-logo_c'>
                    <div className="logo_text_c">L<img className='logo_a' src="https://res.cloudinary.com/loftstar777/image/upload/v1550491701/loftlviv/apart/bg_img/logoapart.png" />
                        FT
                    </div>
                    <div className="logo_text_c1">
                        Apartaments
                    </div>
                </div>
            </div>
        );
    }
}
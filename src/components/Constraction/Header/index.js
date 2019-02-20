import React from 'react';
import './headerConst.css';
import TopInfo_c from '../TopInfo_c/index';


export default class HeaderContraction extends React.Component{
    render(){
        return(
            <div className="wrapper-header">
            <div className="info_c">
                <TopInfo_c />
            </div>   
                <div className='header-logo_c'>
                    <div className="logo_text_c">L<img className='logo_c' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492139/loftlviv/construction/bg_img/constraction_logo.png" />
                        FT
                    </div>
                    <div className="logo_text_c1">
                        Construction
                    </div>
                </div>
            </div>
        );
    }
}
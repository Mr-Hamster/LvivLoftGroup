import React from 'react';
import './buhiv.css';

import TopInfo_b from '../TopInfo';


export default class HeaderBuhiv extends React.Component{
    render(){
        return(
            <div className="wrapper_b">
                <div className="fon_b">
                    <div className="info_b">
                        <TopInfo_b />
                    </div>
                    <div className="logo_b">
                        <img className="logo_b_1" src='https://res.cloudinary.com/loftstar777/image/upload/v1550334419/villalogo.png' />
                        <div className="text-buhiv"> 
                            VILLA BUHIV
                            <div className="text-buhiv1">Відчуй життя Карпат</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
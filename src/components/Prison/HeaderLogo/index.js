import React from 'react';
import './headerlogo.css';


export default class HeaderLogo extends React.Component{
    render(){
        return(
            <div className="logo-wraper">
                <div className="text-prison-header">
                    <div className="text_logo_p">
                        L<img className="logo_prison" src="https://res.cloudinary.com/loftstar777/image/upload/v1550492224/loftlviv/prison/bg_img/logoPrison.png" />ft
                    </div>
                    <div className="text_logo_p1">
                        Prison
                    </div>
                </div>
            </div>
        );
    }
}
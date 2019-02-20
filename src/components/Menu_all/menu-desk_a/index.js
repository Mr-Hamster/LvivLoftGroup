import React from 'react';
import './menu_l.css'
import {Link} from 'react-router-dom'
import Booking from '../../Prison/Booking/index.js';

export default class MenuDesktop extends React.Component{
    state={
        open: false,
    }
    render(){
        return(
                <div className='loft-menu-wrapper'>
                    <div className='loft-menu-item'>
                        <Link to='/'>Головна</Link>
                    </div>
                    <div className='loft-menu-item' onClick={()=> this.setState({open: !this.state.open})}>
                    Об'єкти 
                        {
                        this.state.open ? (
                        <div className='loft-downblock'>
                            <div className='loft-downblock-text'>
                            <Link to='/lviv-loft-hostel'>Loft Hostel</Link>
                            </div>
                            <div className='loft-downblock-text'>
                                <Link to='/lviv-loft-prison'>Loft Prison</Link>
                            </div>    
                            <div className='loft-downblock-text'>   
                                <Link to='/lviv-loft-construction'>Loft Construction</Link>
                            </div>
                            <div className='loft-downblock-text'>   
                                <Link to='/lviv-loft-apartaments'>Loft Apartaments</Link>
                            </div> 
                            <div className='loft-downblock-text'>   
                                <Link to='/villa-buhiv'>Villa Buhiv</Link>
                            </div>  
                                
                        </div>
                        ):null}
                    </div>
                    
                    <div className='loft-menu-item'>
                        <a href="#about">Про нас</a>
                    </div> 
                    <div className='loft-menu-item'>
                        <a href="#contacts">Контакти</a>
                    </div>
                        <Booking link={this.props.link}/>
                    
                </div>
        );
    }
}
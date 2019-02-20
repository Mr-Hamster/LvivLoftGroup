import React from 'react'
import { Link } from 'react-router-dom'
import './style_menu.css'


export default  class Menu_MainPage extends React.Component {
    state={
        open: false,
    }
    render(){  
        return(  
            <div className='main-menu-wrapper'>
                    <div className='main-menu-item'>
                        <Link to='/'>Головна</Link>
                    </div>
                    <div className='main-menu-item' onClick={()=> this.setState({open: !this.state.open})}>
                        Об'єкти
                        {
                        this.state.open ? (
                        <div className='main-downblock'>
                            <div className='main-downblock-text'>
                                <Link to='/lviv-loft-hostel'>Loft Hostel</Link>
                            </div>
                            <div className='main-downblock-text'>
                                <Link to='/lviv-loft-prison'>Loft Prison</Link>
                            </div>    
                            <div className='main-downblock-text'>   
                                <Link to='/lviv-loft-construction'>Loft Construction</Link>
                            </div>
                            <div className='main-downblock-text'>   
                                <Link to='/lviv-loft-apartaments'>Loft Apartaments</Link>
                            </div> 
                            <div className='main-downblock-text'>   
                                <Link to='/villa-buhiv'>Villa Buhiv</Link>
                            </div>  
                                
                        </div>
                        ):null}
                    </div>
                    
                    <div className='main-menu-item'>
                        <a href="#about">Про нас</a>
                    </div> {/*
                    <div className='main-menu-item'>
                        <a href="#">Співпраця з нами</a>
                    </div>*/}
                    <div className='main-menu-item'>
                        <a href="#contacts">Контакти</a>
                    </div>
                        
                </div>
        );
    }
}
import React from 'react'
import './mobile-menu.css'
import {Link} from 'react-router-dom'
import Booking from '../../Prison/Booking/index.js';    
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'


export default class MobileMenu extends React.Component{
      constructor(props) {
        super(props)
    
        this.state = {
          menuOpen: false,
        }
      }
      openMenu() {
        this.setState({ menuOpen: true })
      }
      closeMenu() {
        this.setState({ menuOpen: false })
      }

    render(){
        return(
                <div className="mobile-menu">
                    <div className="menu_block">
                    <CheeseburgerMenu
                        width={230}
                        backgroundColor={'grey'}
                        isOpen={this.state.menuOpen}
                        closeCallback={this.closeMenu.bind(this)}>
                        <div className='my-menu-content'>
                            <div className="mobile-menu-item">
                                <Link to='/'>Головна</Link>
                            </div>
                            <div className="mobile-menu-item">
                                    Об'єкти:
                            </div>
                            <div className="mobile-menu-item-hostel">
                                <Link to='/lviv-loft-hostel'>Loft Hostel</Link>
                            </div>
                            <div className="mobile-menu-item-hostel">
                                <Link to='/lviv-loft-prison'>Loft Prison</Link>
                            </div>
                            <div className="mobile-menu-item-hostel">
                                <Link to='/lviv-loft-apartaments'>Loft Apartaments</Link>
                            </div>
                            <div className="mobile-menu-item-hostel">
                                <Link to='/lviv-loft-construction'>Loft Construction</Link>
                            </div>
                            <div className="mobile-menu-item-hostel">
                                <Link to='/villa-buhiv'>Villa Buhiv</Link>
                            </div>
                        </div>
                    </CheeseburgerMenu>
                    <HamburgerMenu
                        isOpen={this.state.menuOpen}
                        menuClicked={this.openMenu.bind(this)}
                        width={32}
                        height={25}
                        strokeWidth={5}
                        color='white'
                        animationDuration={0.5}
                    />  
                    </div>    
                    <Booking link={this.props.link}/>
                </div>
        );
    }
}


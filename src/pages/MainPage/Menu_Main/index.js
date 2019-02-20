import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import MobileMenuMain from '../../../components/MainPage/Menu/menu-main-mobile';
import Menu_MainPage from '../../../components/MainPage/Menu/header-menu_main';


class Menu_Main extends Component {
  render() {
    if (this.props.isMobile()) return <MobileMenuMain />;
    if (this.props.isTablet()) return <MobileMenuMain />;
    return <Menu_MainPage />;
  }
}

export default withGetScreen(Menu_Main);

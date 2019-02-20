import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import MobileMenu from '../../components/Menu_all/menu_mobile_a/index.js';
import MenuDesktop from '../../components/Menu_all/menu-desk_a/index.js';


class Menu_all extends Component {
  render() {
    if (this.props.isMobile()) return <MobileMenu link={this.props.link}/>;
    if (this.props.isTablet()) return <MobileMenu link={this.props.link}/>;
    return <MenuDesktop link={this.props.link}/>;
  }
}
export default withGetScreen(Menu_all);

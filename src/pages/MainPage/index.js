import React from "react";
import Header from '../../components/MainPage/header';
import Content from '../../components/MainPage/slider';
import Footer from '../../components/MainPage/Footer';
import ScrollUpButton from'react-scroll-up-button';
import ScrollableAnchor from 'react-scrollable-anchor'
import Menu_Main from "./Menu_Main";
import TopInfo_main from "../../components/MainPage/TopInfo";

export default class MainPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <div className="wrapperAll">
                <TopInfo_main />
                <Header />
                <Menu_Main />
                <Content />
                <ScrollableAnchor id={'contacts'}>
                <Footer />
                </ScrollableAnchor>
                <ScrollUpButton />
            </div>
        );
    }
}
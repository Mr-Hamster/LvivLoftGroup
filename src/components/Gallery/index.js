import React from 'react';
import './gallery.css'
import Gallery from 'react-grid-gallery'

export default class GalleryAll extends React.Component{
    render(){
        return(
            <div className="gallery-wrapper">
                <div className="block-gallery">
                    <Gallery images={this.props.IMAGES} backdropClosesModal={true} rowHeight={180} margin={5}/>
                </div>
            </div>
        );
    }
}
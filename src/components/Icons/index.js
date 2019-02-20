import React from 'react'
import './icons.css'
import { Image } from 'react-bootstrap';
            
export default class Icons extends React.Component{
    render(){
        return(
                <div className="icon_block_a"> 
                    <Image className='icon_a' responsive src={this.props.item.image} />    
                    <div className='icon_text_a'>
                        {this.props.item.name}
                    </div>
                </div>
        );
    }
}        
            
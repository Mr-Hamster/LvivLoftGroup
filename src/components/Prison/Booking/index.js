import React from 'react'
import './booking.css'

export default class Booking extends React.Component{
    render(){
        return(
            <a href={this.props.link} style={{textDecoration:"none"}}>
                <div className="button">
                    Забронювати       
                </div>
            </a>
        );
    }
}
import React from 'react';
import './body_l.css'

export default class BodyLoft extends React.Component{
    render(){
        return(
            <div className="body_wrapper">
                <h1 className="h1_block" style={{borderBottom:"solid 3px #e2344b"}}>
                    Lviv Loft Hostel
                </h1>
                <div className="text_block_l">
                    <p>
                     Це хостел, який включає 26 спальних місць (12 чоловічих/12жіночих ) і один приватний номер на двох. Розташування хостелу також дуже зручне, адже він знаходиться біля одного з найстаріших університетів Європи. Привітний персонал, який завжди старається допомогти всім чим може, буде разом з тобою від початку і до кінця проживання. Також якщо ти бажаєш завести нових друзів, та дізнатися багато цікавого то "Loft Hostel" ідеальне місце для того, адже тут ти можеш зустріти людей з різних країн і з різними традиціями, які готові спілкуватися на будь-які теми.    
                    </p>
                </div>     
            </div>
        );
    }
}
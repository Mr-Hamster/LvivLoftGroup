import React from 'react'
import './about.css'


export default class AboutUs extends React.Component{
    render(){
        return(
            <div className="wrapper">
                    <h1 className="h1_block" style={{borderBottom:"solid 3px #000000", fontFamily:"Octin Prison W05 Regular"}}>
                        Lviv Loft Prison
                    </h1>
                <div className="text_block">
                    <div className="block-center">    
                        <div>
                        <img className='prisontext' src="https://res.cloudinary.com/loftstar777/image/upload/v1550492258/loftlviv/prison/icons/prisontext.gif"/>
                        Це виправна колонія хостельного типу, яка може заселити 36 людей. Включає в себе 2 окремі кімнати по 2 спальних місця в кожній, два 4-ьох місні і три 8-ми місні номери. Розташування також дуже зручне, 15 хвилин до Оперного театру і також недалеко від вокзалу. Хостел зроблений в стилі тюрми, камери які розраховані на різну кількість людей, стиль який переносить тебе в таку атмосферу коли ти дійсно відчуваєш себе в’язнем дозволить тобі отримати багато вражень та незабутніх емоцій. </div>
                    </div>
                </div>
                   
            </div>
        );
    }
}
import React from 'react'
import './body_a.css'


export default class BodyApart extends React.Component{
    render(){
        return(
            <div className="body-wrapper_a">   
                <h1 className="h1_block" style={{borderBottom:"solid 3px #ec5508"}}>
                    Lviv Loft Apartaments
                </h1>
                <div className="text_a">
                    <p>
                    Це апарт готель, який має в наявності 5 окремих номерів для двох осіб. Апарт готель дуже приваблива пропозиція, адже розташування дуже зручне. Він знаходиться на бічній вулиці Проспекту Свободи, що є запорукою спокійного відпочинку, та швидкого доступу в історичний центр Львова. Також співвідношення ціни і якості готелю, якщо ти бажаєш винаймати квартиру чи номер в готелі у самому центрі, то тобі саме до нас, адже ти не будеш переплачувати. Ще один великий плюс апартаментів – персонал, який завжди допоможе тобі вирішити будь-яку проблему, привітні адміністратори зі знанням іноземної мови завжди знайдуть спільну мову з клієнтом.
                    </p>
                </div>
            </div>
        );
    }
}
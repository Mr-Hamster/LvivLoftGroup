import React from 'react'
import './icons.css'

export default class Icons extends React.Component{
    render(){
        return(
            <div className="body-wrapper">   
                <h1 className="h1_block" style={{borderBottom:"solid 3px #afafaf"}}>
                    Lviv Loft Construction
                </h1>
                <div className="text_c">
                    <p>
                    Це апарт готель, може заселити до 10 людей, включає в себе приватний номер для двох, та два сімейні номери для чотирьох людей. Розташування апартаментів дуже зручне, адже вони знаходиться на початку вулиці Личаківської, що дуже близько до центру. Апартаменти зроблені  в стилі незавершеного будівництва, тому якщо ти хочеш відчути себе справжнім прорабом – тобі саме до нас!
                    </p>
                </div> 
                
            </div>
        );
    }
}
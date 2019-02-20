import React from 'react';
import './body_b.css';
import YouTube from 'react-youtube';

export default class BodyBuhiv extends React.Component{
    render() {
        const opts = {
          playerVars: { 
            autoplay: 1
          }
        }; 
        return(
            <div className="wrapper_body_b">
                <h1 className="h1_block" style={{borderBottom:"solid 3px #c782d1"}}>
                    Villa Buhiv
                </h1>
                <div className="text_b">
                    <p>
                        VillaBuhiv - це відпочинок у затишному екологічно чистому дерев’яному будинку, де навкруги лише ліс  та гори, більше нічого. Тільки спокій ,чисте повітря та філіжанка запашного, зігріваючого напою перед вогнищем чекають на Вас у VillaBuhiv.
                        Якщо Вам набридла міська метушня і Ви забули що таке справжній спокій, тоді мерщій до нас , до бальнеологічного курорту Східниця. Із -за будь якої погоди краєвиди Східниці чудові, а прогулянки на свіжому повітрі корисні та оздоровчі. В нас Ви отримаєте готельні номери та обслуговування за ціною приватного сектору ,і головне, Ви отримаєте домашній затишок та насолоду від природи Карпат.
                    </p>        
<YouTube className="player"
                            videoId="YoH1dhuppmg"
                            opts={opts}
                            onReady={this._onReady}
                        />
                </div>
                
            </div>
        );
    }


}
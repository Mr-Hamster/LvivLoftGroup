import React from 'react';
import TopInfoPrison from '../../../src/components/Prison/TopInfoPrison/index.js'
import HeaderLogo from '../../components/Prison/HeaderLogo/index.js';
import ScrollableAnchor from 'react-scrollable-anchor'
import FooterPrison from '../../components/Prison/Footer/index.js';
import ScrollUpButton from'react-scroll-up-button';
import AboutUs from '../../components/Prison/About us/index.js';
import Menu_all from '../Menu_all/index.js';
import Icons from '../../components/Icons/index.js';
import GalleryAll from '../../components/Gallery/index.js';
import '../style.css'

const arr = [
    {
      name: "Безкоштовний Wi-Fi",
      image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/wifi.gif",
    },
    {
        name: "Зручне розташування",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/map.png",
    },
    {
        name: "Шафки під ключ",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/locker.gif",
    },
    {
        name: "Зручні умови",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/bed.gif",
    },
    {
        name: "Безкоштовні чай, цукор, кава",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/tea.gif",
    },
    {
        name: "Працюємо 24/7",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/reception.gif",
    },
    {
        name: "Праска",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/iron.png",
    },
    {
        name: "Оплата картою",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/terminal.gif",
    }, 
    {
        name: "Зона відпочинку",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/tv.gif",
    }, 
    {
        name: "Кухня зі всіма приборами",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/kitchen.gif",
    }, 
    {
        name: "Заїзд з 12:00; Виїзд до 11:00",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/watch.gif",
    }, 
    {
        name: "Гаряча вода 24/7",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/washroom.gif",
    },
    {
        name: "Індивідуальні розетки і лампи",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492259/loftlviv/prison/icons/lamp.gif",
    },    
    ];

const IMAGES =
    [
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison1.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison1.jpg',
            thumbnailWidth: 320,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        }, 
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison2.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison2.jpg',
            thumbnailWidth: 320,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison3.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison3.jpg',
            thumbnailWidth: 320,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        },
       
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550526678/loftlviv/prison/gallery/lviv-loft-prison4.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550526678/loftlviv/prison/gallery/lviv-loft-prison4.jpg',
            thumbnailWidth: 320,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison5.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison5.jpg',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison6.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison6.jpg',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison7.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison7.jpg',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492240/loftlviv/prison/gallery/lviv-loft-prison.jpg',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
    
        ]

export default class PrisonPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div className="wrapperAll">
               <TopInfoPrison />
               <HeaderLogo />
               <Menu_all link="https://www.booking.com/hotel/ua/lviv-loft-prison.ru.html"/>
               <ScrollableAnchor id={'about'}>
                    <AboutUs />
               </ScrollableAnchor>
               <h1 className="h1_block" style={{borderBottom:"solid 3px #000000"}}>
                    Послуги
                </h1>
               <div className="icons_apart">
                    {
                    arr.map(item =>{ 
                    return(
                        <Icons item={item} />
                    )
                    })
                    }
                </div>
                <h1 className="h1_block" style={{borderBottom:"solid 3px #000000"}}>
                    Фотогаларея
                </h1>
                    <GalleryAll IMAGES={IMAGES} />
                    <br />
                    <br />
               <ScrollableAnchor id={'contacts'}>
                    <FooterPrison />
               </ScrollableAnchor>
               <ScrollUpButton />
            </div>
        );
    }
}
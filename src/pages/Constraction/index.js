import React from 'react';
import HeaderContraction from '../../components/Constraction/Header';
import ScrollUpButton from'react-scroll-up-button';
import ScrollableAnchor from 'react-scrollable-anchor'
import FooterConstraction from '../../components/Constraction/Footer';
import Body from '../../components/Constraction/Body';
import Menu_all from '../Menu_all';
import Icons from '../../components/Icons';
import GalleryAll from '../../components/Gallery';

const IMAGES =
[
    {
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction7.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction7.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction6.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction6.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction5.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction5.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction4.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction4.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction3.jpg',
        thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction3.jpg',
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    } ,{
        src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction2.jpg',
        thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction2.jpg',
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction1.jpg',
        thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction1.jpg',
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction.jpg',
        thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550492166/loftlviv/construction/gallery/lviv-loft-construction.jpg',
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    }
    ]

const arr = [
    {
      name: "Безкоштовний Wi-Fi",
      image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/wifi1.png",
    },
    {
        name: "Зручне розташування",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/map1.png",
    },
    {
        name: "Номер під ключ",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/key1.png",
    },
    {
        name: "Зручні умови",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/bed1.png",
    },
    {
        name: "Безкоштовні чай, цукор, кава",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/tea1.png",
    },
    {
        name: "Працюємо 24/7",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/reception1.png",
    },
    {
        name: "Праска",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/iron1.png",
    },
    {
        name: "Оплата картою",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/terminal1.png",
    }, 
    {
        name: "Зона відпочинку",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/xbox1.png",
    }, 
    {
        name: "Кухня зі всіма приборами",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/kitchen1.png",
    }, 
    {
        name: "Заїзд з 12:00; Виїзд до 11:00",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/watch1.png",
    }, 
    {
        name: "Гаряча вода 24/7",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/construction/icons/washroom1.png",
    },    
    ];

export default class ConstractionPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div className="wrapperAll">
                <HeaderContraction />
                <Menu_all link="https://www.booking.com/hotel/ua/lviv-loft-construction.ru.html"/>
                <ScrollableAnchor id={'about'}>
                    <Body />
                </ScrollableAnchor>
                <h1 className="h1_block" style={{borderBottom:"solid 3px #afafaf"}}>
                    Послуги
                </h1>
                <div className="icons_apart" style={{backgroundColor:" #afafaf"}}>
                    {
                    arr.map(item =>{ 
                    return(
                        <Icons item={item} />
                    )
                    })
                    }
                </div> 
                <h1 className="h1_block_a" style={{borderBottom:"solid 3px #afafaf"}}>
                    Фотогаларея
                </h1>
                <GalleryAll IMAGES={IMAGES} />
                <br />
                <br />
                <ScrollableAnchor id={'contacts'}>
                    <FooterConstraction />
                </ScrollableAnchor>
                <ScrollUpButton />
            </div>
        );
    }
}
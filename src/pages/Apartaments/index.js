import React from 'react';
import ScrollUpButton from'react-scroll-up-button';
import ScrollableAnchor from 'react-scrollable-anchor'
import HeaderApart from '../../components/Apartaments/Header_A';
import BodyApart from '../../components/Apartaments/Body_A';
import FooterApart from '../../components/Apartaments/Footer_A';
import Menu_all from '../Menu_all';
import Icons from '../../components/Icons';
import GalleryAll from '../../components/Gallery';

const arr = [
    {
      name: "Безкоштовний Wi-Fi",
      image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/wifi3.png'
    },
    {
        name: "Зручне розташування",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/map3.gif',
    },
    {
        name: "Номер під ключ",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/key3.gif',
    },
    {
        name: "Зручні умови",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/bed3.gif',
    },
    {
        name: "Безкоштовні чай, цукор, кава",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/tea3.gif',
    },
    {
        name: "Працюємо 24/7",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/reception3.gif',
    },
    {
        name: "Праска",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/iron3.gif',
    },
    {
        name: "Оплата картою",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/terminal3.gif',
    }, 
    {
        name: "Зона відпочинку",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/tv3.gif',
    }, 
    {
        name: "Кухня зі всіма приборами",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/kitchen3.gif',
    }, 
    {
        name: "Заїзд з 12:00; Виїзд до 11:00",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/watch3.png',
    }, 
    {
        name: "Гаряча вода 24/7",
        image: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491756/loftlviv/apart/icons/washroom3.gif',
    },    
    ];

const IMAGES =
    [
        {
                src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart5.jpg",
                thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart5.jpg",
                thumbnailWidth: 330,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart6.jpg",
            thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart6.jpg",
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart4.jpg",
            thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart4.jpg",
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },{
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart7.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart7.jpg',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart3.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart3.jpg',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491734/loftlviv/apart/gallery/lviv-loft-apart.jpg',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491733/loftlviv/apart/gallery/lviv-loft-apart2.jpg',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491733/loftlviv/apart/gallery/lviv-loft-apart2.jpg',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491733/loftlviv/apart/gallery/lviv-loft-apart1.JPG',
            thumbnail: 'https://res.cloudinary.com/loftstar777/image/upload/v1550491733/loftlviv/apart/gallery/lviv-loft-apart1.JPG',
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        ]

export default class ApartamentPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div className="wrapperAll"> 
                <HeaderApart />
                <Menu_all link="https://www.booking.com/hotel/ua/lviv-loft-apartments.ru.html"/>
                <ScrollableAnchor id="about">
                    <BodyApart />
                </ScrollableAnchor>
                <h1 className="h1_block" style={{borderBottom:"solid 3px #ec5508"}}>
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
                <h1 className="h1_block" style={{borderBottom:"solid 3px #ec5508"}}>
                    Фотогалерея
                </h1>
                <GalleryAll IMAGES={IMAGES} />
                <br />
                <br />
                <ScrollableAnchor id='contacts'>
                    <FooterApart />
                </ScrollableAnchor>
                <ScrollUpButton />
            </div>
        );
    }
}
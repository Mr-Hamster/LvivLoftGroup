import React from 'react';
import ScrollUpButton from'react-scroll-up-button';
import ScrollableAnchor from 'react-scrollable-anchor'
import HeaderBuhiv from '../../components/Buhiv/header';
import BodyBuhiv from '../../components/Buhiv/body';
import FooterBuhiv from '../../components/Buhiv/footer';
import Menu_all from '../Menu_all';
import Icons from '../../components/Icons';
import GalleryAll from '../../components/Gallery';

const IMAGES =
[
    {
            src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv.jpg",
            thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv.jpg",
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv10.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv10.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv13.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv13.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv11.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv11.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv12.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv12.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv9.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv9.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv8.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv8.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv7.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv7.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv6.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv6.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv5.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv5.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv4.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv4.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv3.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv3.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv2.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv2.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv1.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv1.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv14.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv10.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv15.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550491852/loftlviv/buhiv/gallery/villa-buhiv15.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    }
    ]

const arr = [
    {
      name: "Безкоштовний Wi-Fi",
      image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/wifi.png",
    },
    {
        name: "Місце для кемпінгу",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/camping.png",
    },
    {
        name: "Екскурсії на позашляховиках",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/car.png",
    },
    {
        name: "Купання та риболовля",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/lake.png",
    },
    {
        name: "Безкоштовний паркінг",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/parking.png",
    },
    {
        name: "Працюємо 24/7",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/reception.png",
    },
    {
        name: "Альтанки",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/pavilion.png",
    },
    {
        name: "Баня на дровах",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/sauna.png",
    }, 
    {
        name: "Настільні ігри",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/games.png",
    }, 
    {
        name: "Прокат велосипедів",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/bike.png",
    }, 
    {
        name: "Катання на санях зимою",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/sanky.png",
    }, 
    {
        name: "Мангали",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492041/loftlviv/buhiv/icons/bbq.png",
    },    
    ];

export default class BuhivPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div className="wrapperAll" style={{backgroundColor:"rgb(255, 163, 117)"}}>
                <HeaderBuhiv />
                <Menu_all link="https://www.booking.com/hotel/ua/villa-buhiv.ru.html"/>
                <ScrollableAnchor id="about">
                    <BodyBuhiv />
                </ScrollableAnchor>   
                <h1 className="h1_block" style={{borderBottom:"solid 3px #c782d1"}}>
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
                <h1 className="h1_block" style={{borderBottom:"solid 3px #c782d1"}}>
                    Фотогаларея
                </h1>
                <GalleryAll IMAGES={IMAGES} />
                <br />
                <br />
                <ScrollableAnchor id="contacts">    
                    <FooterBuhiv />
                </ScrollableAnchor>
                <ScrollUpButton />
            </div>
        );
    }
}
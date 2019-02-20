import React from 'react';
import HeaderLoft from '../../components/Loft/headerImg';
import ScrollUpButton from'react-scroll-up-button';
import ScrollableAnchor from 'react-scrollable-anchor'
import FooterLoft from '../../components/Loft/footer';
import BodyLoft from '../../components/Loft/body';
import Menu_all from '../Menu_all';
import Icons from '../../components/Icons';
import GalleryAll from '../../components/Gallery';

const arr = [
    {
      name: "Безкоштовний Wi-Fi",
      image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/wifi2.png",
    },
    {
        name: "Зручне розташування",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/map2.png",
    },
    {
        name: "Приватні шафки",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/key2.png",
    },
    {
        name: "Зручні умови",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/bed2.png",
    },
    {
        name: "Безкоштовні чай, цукор, кава",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/tea2.png",
    },
    {
        name: "Працюємо 24/7",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/reception2.png",
    },
    {
        name: "Праска",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/iron2.png",
    },
    {
        name: "Оплата картою",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/terminal2.png",
    }, 
    {
        name: "Зона відпочинку",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/tv2.png",
    }, 
    {
        name: "Кухня зі всіма приборами",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/kitchen2.png",
    }, 
    {
        name: "Заїзд з 12:00; Виїзд до 11:00",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/watch2.png",
    }, 
    {
        name: "Гаряча вода 24/7",
        image: "https://res.cloudinary.com/loftstar777/image/upload/v1550492390/loftlviv/loft/icons/washroom2.png",
    },    
    ];

const IMAGES =
    [
    {
            src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel5.jpg",
            thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel5.jpg",
            thumbnailWidth: 330,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel4.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel4.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel3.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel3.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/loft-hostel2.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/loft-hostel2.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel1.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel1.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/lviv-hostel.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/loft-hostel6.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550492432/loftlviv/loft/gallery/loft-hostel6.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },{
        src: "https://res.cloudinary.com/loftstar777/image/upload/v1550524074/loftlviv/loft/gallery/loft-hostel7.jpg",
        thumbnail: "https://res.cloudinary.com/loftstar777/image/upload/v1550524074/loftlviv/loft/gallery/loft-hostel7.jpg",
        thumbnailWidth: 330,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    }
    ]

export default class LoftPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div className="wrapperAll">  
                <HeaderLoft />
                <Menu_all link="https://www.booking.com/hotel/ua/lviv-loft-hostel.ru.html"/>
                <ScrollUpButton />
                <ScrollableAnchor id="about">
                    <BodyLoft />
                </ScrollableAnchor>
                <p className="h1_block" style={{borderBottom:"solid 3px #e22234"}}>
                    Послуги
                </p>
                <div className="icons_apart">
                    {
                    arr.map(item =>{ 
                    return(
                        <Icons item={item} />
                    )
                    })
                    }
                </div>
                <p className="h1_block" style={{borderBottom:"solid 3px #e22234"}} >
                    Фотогаларея
                </p>
                <GalleryAll IMAGES={IMAGES} />
                <br />
                <br />
                <ScrollableAnchor id="contacts">
                    <FooterLoft />
                </ScrollableAnchor>
            </div>
        );
    }
}
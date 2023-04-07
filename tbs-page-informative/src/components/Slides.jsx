import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slides = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/50762626_243085336593547_2116748479777734656_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHXXIMkLTe4qf6DzdASlukZ_DUc6Lr2U5j8NRzouvZTmOEckHd1lTuJEEXOODO-Os7ZCCWbSHaPGWXVFF_4W9wE&_nc_ohc=RX_bX6yM-VUAX--XVRH&_nc_ht=scontent.fgye1-2.fna&oh=00_AfBOAZW-adJtMOgLbnoD77f1LczMgeRzUrhC19wb3Qow7w&oe=64385E89"
                alt="First slide"
                height="640px"
                /* max-height="640px"
                max-width="1200px" */
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.lifeder.com/wp-content/uploads/2022/04/TIC.jpg"
                alt="Second slide"
                height="640px"
                /* max-height="720px"
                max-width="1200px" */
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.incotec.es/app/uploads/2020/03/etapas-de-la-transferencia-tecnologica-1-1280x720.jpg"
                alt="Third slide"
                height="640px"
                /* max-height="720px"
                max-width="1200px" */
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slides;
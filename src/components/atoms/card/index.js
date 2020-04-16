import React from 'react';
import { Image } from "components";
import VisibilitySensor from "react-visibility-sensor";


const Card = ({img, animationClass, style, className}) => (
    <VisibilitySensor>
        {({isVisible}) => (
            <section className={`card ${isVisible ? animationClass : ''} ${className}`} style={style}>
                <Image src={img}/>
            </section>
        )}
    </VisibilitySensor>
);

Card.defaultProps = {
    className: '',
    animationClass: '',
    style: {},
};

export default Card;
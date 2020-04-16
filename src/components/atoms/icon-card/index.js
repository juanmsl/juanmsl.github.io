import React from 'react';
import { Image } from "components";
import VisibilitySensor from "react-visibility-sensor";


const IconCard = ({name, img, animationClass, style, className}) => (
    <VisibilitySensor>
        {({isVisible}) => (
            <section className={`icon-card ${isVisible ? animationClass : ''} ${className}`} style={style}>
                <Image src={img}/>
                <h5>{name}</h5>
            </section>
        )}
    </VisibilitySensor>
);

IconCard.defaultProps = {
    className: '',
    animationClass: '',
    style: {},
};

export default IconCard;
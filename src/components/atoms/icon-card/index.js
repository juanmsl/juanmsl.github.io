import React from 'react';
import {Image} from "components";
import VisibilitySensor from "react-visibility-sensor";


const IconCard = ({name, img, animationClass, style}) => (
    <VisibilitySensor>
        {({isVisible}) => (
            <section className={`icon-card ${isVisible ? animationClass : ''}`} style={style}>
                <Image src={img}/>
                <h5>{name}</h5>
            </section>
        )}
    </VisibilitySensor>
);

export default IconCard;
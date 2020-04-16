import React from 'react';
import data from 'data';
import { IconCard } from "components";


class ServicesGallery extends React.Component {
    renderServices = (services) => (
        services.map((service, i) => (
            <IconCard
                key={i}
                name={service.name}
                img={service.image}
                animationClass="animated tada"
            />
        ))
    );

    render() {
        const {services} = data;

        return (
            <section className='services-gallery'>
                {this.renderServices(services)}
            </section>
        );
    }
}

export default ServicesGallery;
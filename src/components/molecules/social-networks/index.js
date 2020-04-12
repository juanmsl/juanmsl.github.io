import React from "react";
import {Image, LinkTo} from "components";
import data from 'data';


const SocialNetworks = ({dark}) => {
    const renderItems = (items) => (
        items.map(({to, icon}, i) => (
            <LinkTo to={to} key={i}>
                <Image src={`icons/${icon}${dark ? '_dark' : ''}.svg`} className='networks__item'/>
            </LinkTo>
        ))
    );

    return (
        <section className={`grid networks ${dark && 'dark'}`}>
            {renderItems(data.contact)}
        </section>
    );
};

export default SocialNetworks;
import React from "react";
import './index.scss';
import {Image} from "shared/components/index";


const SocialNetworks = ({dark}) => (
    <section className={`grid networks ${dark && 'dark'}`}>
        <Image src={`icons/linkedin${dark ? '_dark' : ''}.svg`} className='networks__item' />
        <Image src={`icons/github${dark ? '_dark' : ''}.svg`} className='networks__item' />
        <Image src={`icons/codepen${dark ? '_dark' : ''}.svg`} className='networks__item' />
        <Image src={`icons/email${dark ? '_dark' : ''}.svg`} className='networks__item' />
    </section>
);

export default SocialNetworks;
import React from "react";
import './index.scss';
import {Image, LinkTo} from "shared/components";


const SocialNetworks = ({dark}) => (
    <section className={`grid networks ${dark && 'dark'}`}>
        <LinkTo to='https://www.linkedin.com/in/juanmsl/'><Image src={`icons/linkedin${dark ? '_dark' : ''}.svg`} className='networks__item'/></LinkTo>
        <LinkTo to='https://github.com/juanmsl'><Image src={`icons/github${dark ? '_dark' : ''}.svg`} className='networks__item'/></LinkTo>
        <LinkTo to='https://codepen.io/juanmsl'><Image src={`icons/codepen${dark ? '_dark' : ''}.svg`} className='networks__item'/></LinkTo>
        <LinkTo to='mailto:juanmsl_pk@hotmail.com'><Image src={`icons/email${dark ? '_dark' : ''}.svg`} className='networks__item'/></LinkTo>
    </section>
);

export default SocialNetworks;
import React from "react";
import './index.scss';
import {SocialNetworks, Subtitle} from "shared/components";


class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <section className='footer__box'>
                    <Subtitle center>Contact me</Subtitle>
                    <SocialNetworks dark />
                </section>
                <p className='footer__copyright'>© Copyright 2020 - All Rights Reserved</p>
            </footer>
        );
    }
}

export default Footer
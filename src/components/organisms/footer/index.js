import React from "react";
import { SocialNetworks, Subtitle } from "components";


class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <section className='footer__box'>
                    <Subtitle center line>Contact me</Subtitle>
                    <SocialNetworks dark/>
                </section>
                <p className='footer__copyright'>© Copyright 2020 - All Rights Reserved</p>
            </footer>
        );
    }
}

export default Footer
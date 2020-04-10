import React from "react";
import './index.scss';
import {Image, SocialNetworks} from "shared/components";


class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <Image src='icons/octopus.svg' />
                <section className='grid navbar__pages'>
                    <span className='navbar__pages__item'>Home</span>
                    <span className='navbar__pages__item'>About</span>
                    <span className='navbar__pages__item'>Services</span>
                    <span className='navbar__pages__item'>Portfolio</span>
                    <span className='navbar__pages__item'>Blog</span>
                </section>
                <SocialNetworks />
            </nav>
        );
    }
}

export default Navbar
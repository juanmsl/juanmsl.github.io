import React from "react";
import { Image, SocialNetworks } from "components";
import data from 'data';
import { Link, withRouter } from "react-router-dom";
import { renderClasses } from "shared/common/functions";


class Navbar extends React.Component {
    renderLinks = (pages) => (
        pages.map(({name, to, enabled}, i) => {
            const {pathname} = this.props.location;

            const classes = {
                'navbar__pages__item': true,
                active: pathname === to
            };

            if (enabled === false) {
                return null;
            }

            return (
                <Link
                    to={to}
                    key={i}
                    className={renderClasses(classes)}
                >
                    {name}
                </Link>
            );
        })
    );

    render() {
        return (
            <nav className='navbar'>
                <Image src='icons/octopus.svg' className='navbar__logo'/>
                <section className='grid navbar__pages'>
                    {this.renderLinks(data.pages)}
                </section>
                <SocialNetworks/>
            </nav>
        );
    }
}

export default withRouter(Navbar);
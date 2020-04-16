import React from "react";
import { renderClasses } from "shared/common";
import { Navbar } from "components";


const Section = (props) => {

    const {children, main} = props;

    const classes = {
        'page-header': true,
        'grid': true,
        'main': main !== undefined,
    };

    return (
        <section className={renderClasses(classes)}>
            <section className='grid container'>
                <Navbar/>
                {children}
            </section>
        </section>
    );
};

export default Section;
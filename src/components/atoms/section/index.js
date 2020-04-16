import React from "react";
import { renderClasses } from "shared/common";


const Section = (props) => {

    const {children, blue_full, full} = props;

    const classes = {
        'page-section': true,
        'grid': true,
        'blue-full': !!blue_full,
        'full': !!full,
    };

    return (
        <section className={renderClasses(classes)}>
            <section className='grid container'>
                {children}
            </section>
        </section>
    );
};

export default Section;
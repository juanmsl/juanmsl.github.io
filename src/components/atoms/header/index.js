import React from "react";
import {renderClasses} from "shared/common";
import {Navbar} from "components";


const Section = (props) => {

    const {children, main} = props;

    const classes = {
        'page-header': true,
        'grid row': true,
        'main': main !== undefined,
    };

    return (
        <section className={renderClasses(classes)}>
            <Navbar />
            {children}
        </section>
    );
};

export default Section;
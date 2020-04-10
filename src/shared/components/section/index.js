import React from "react";
import './index.scss';


const Section = (props) => {

    const {children, main, navbar, blue_full, full} = props;

    return (
        <section className={`page-section grid ${!!main && 'main'} ${navbar && 'navbar'} ${blue_full && 'blue-full'} ${full && 'full'}`}>
            {children}
        </section>
    );
};

export default Section;
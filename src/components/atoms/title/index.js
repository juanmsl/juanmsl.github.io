import React from "react";


const Title = ({children, center}) => (
    <h2 className={`title ${center && 'center'}`}>{children}</h2>
);

export default Title;
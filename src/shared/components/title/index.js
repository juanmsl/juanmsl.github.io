import React from "react";
import './index.scss';


const Title = ({children, center}) => (
    <h2 className={`title ${center && 'center'}`}>{children}</h2>
);

export default Title;
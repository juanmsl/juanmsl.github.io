import React from "react";
import './index.scss';


const Subtitle = ({children, center}) => (
    <h3 className={`subtitle ${center && 'center'}`}>{children}</h3>
);

export default Subtitle;
import React from "react";


const Image = ({src, ...otherProps}) => {
    return <img src={`${process.env.PUBLIC_URL}/assets/images/${src}`} alt="react" {...otherProps} />;
};

export default Image;
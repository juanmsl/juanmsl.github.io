import React from 'react';
import { renderClasses } from 'shared/common';


const Button = ({
    children,
    alert,
    warning,
    info,
    active,
}) => {
    const getClassName = () => (
        renderClasses({
            'button': true,
            'alert': alert
        })
    );

    return (
        <button className={getClassName()}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: 'Button',
    alert: false,
    warning: false,
    info: false,
    active: false
};

Button.getClassName = (props) => (
    renderClasses({
        'button': true,
        'alert': props.alert
    })
);
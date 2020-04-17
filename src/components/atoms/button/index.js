import React from 'react';
import { renderClasses } from 'shared/common';


const Button = ({
    children,
    primary,
    secondary,
    alert,
    warning,
    info,
    active,
    onClick,
    to,
    className
}) => {
    const getClassName = () => (
        renderClasses({
            'button': true,
            'primary': primary,
            'secondary': secondary,
            'alert': alert,
            'warning': warning,
            'info': info,
            'active': active,
            [className]: className !== ''
        })
    );

    const getOnClick = () => {
        if (onClick === undefined) {
            if(to !== '') {
                return () => {
                    const link = document.createElement('a');
                    link.href = to;
                    link.target = '_blank';
                    link.click();
                }
            }
        }
        return () => console.error('Missing onClick prop');
    };

    return (
        <button className={getClassName()} onClick={getOnClick()}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: 'Button',
    primary: false,
    secondary: false,
    alert: false,
    warning: false,
    info: false,
    active: false,
    className: '',
    to: '',
    onClick: undefined
};

export default Button;
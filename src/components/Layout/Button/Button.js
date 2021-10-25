import React from 'react';
import "./Button.scss"

const Button = ({
        variant,
        children,
        onClick,
        style,
        className,
    }) => {
    const btnClassName = `button button-${variant || "primary"} ${className}`;

    return (
        <div onClick={(e) => onClick(e)} className={btnClassName} style={style}>
            {children}
        </div>
    );
};

export default Button;
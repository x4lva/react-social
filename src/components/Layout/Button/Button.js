import React from 'react';
import "./Button.scss"

const Button = ({
        variant,
        children,
        onSubmit,
        style,
        className,
    }) => {
    const btnClassName = `button button-${variant || "primary"} ${className}`;

    return (
        <div onSubmit={onSubmit} className={btnClassName} style={style}>
            {children}
        </div>
    );
};

export default Button;
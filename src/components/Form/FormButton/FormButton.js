import React from 'react';
import "./FormButton.scss"

const FormButton = ({
    variant,
    children,
    onSubmit,
    style,
    className
}) => {
    const btnClassName = `button button-${variant || "primary"} ${className}`;

    return (
        <button onSubmit={onSubmit} className={btnClassName} style={style}>
            {children}
        </button>
    );
};

export default FormButton;
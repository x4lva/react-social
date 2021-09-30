import React from 'react';
import "./SectionHeader.css";

const SectionHeader = (props) => {

    const className = `section-header ${props.className}`

    return (
        <div className={className}>
            {props.title}
        </div>
    );
};

export default SectionHeader;
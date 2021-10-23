import React from 'react';
import "./SectionHeader.scss";

const SectionHeader = (props) => {

    const className = `section-header d-flex justify-content-between align-items-center ${props.className}`

    return (
        <div className={className}>
            {props.title}
            {props.content}
        </div>
    );
};

export default SectionHeader;
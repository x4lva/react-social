import React from 'react';
import "./SectionHeader.css";

const SectionHeader = ({title}) => {
    return (
        <div className="section-header">
            {title}
        </div>
    );
};

export default SectionHeader;
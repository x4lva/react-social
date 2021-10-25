import React from 'react';
import "./OrganisationLogo.scss"

const OrganisationLogo = ({size, organisation}) => {
    return (
        <div style={{width: size, height: size}} className={"organisation-logo border"}>
            { organisation.logo === undefined ? (organisation.name.slice(0, 1)) : (organisation.logo) }
        </div>
    );
};

export default OrganisationLogo;
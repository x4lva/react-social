import React from "react";
import "./OragnisationItem.scss"
import {Link} from "react-router-dom";
import OrganisationLogo from "../OrganisationLogo/OrganisationLogo";

const OrganisationItem = ({data}) => {
    return (
        <Link to={`/organisation/${data.id}`}>
            <div className="organisation-item border">
                <div className="organisation-item-logo-container width-22">
                    <OrganisationLogo size={40} organisation={data} />
                </div>
                <div className="organisation-item-content width-88">
                    <div className="organisation-item-name">
                        {data.name}
                    </div>
                    <div className={`organisation-item-status${data.confirmed ? " confirmed" : " not-confirmed"}`}>
                        {data.confirmed ? "Підтверджена" : "Не підтверджена"}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default OrganisationItem;
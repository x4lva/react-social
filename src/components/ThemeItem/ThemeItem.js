import React from 'react';
import "./ThemeItem.scss"
const ThemeItem = ({name}) => {
    return (
        <div className={"theme-item col-4 mb-3"}>
            <a href="">{name}</a>
        </div>
    );
};

export default ThemeItem;
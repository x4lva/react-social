import React, {Fragment} from 'react';
import ThemeItem from "../ThemeItem/ThemeItem";
import SectionHeader from "../SectionHeader/SectionHeader";

const ThemeSection = () => {
    return (
        <Fragment>
            <SectionHeader title={"Теми подій"} className={"mb-3"} />
            <div className="d-flex flex-wrap">
                <ThemeItem name={"Спорт"} />
                <ThemeItem name={"Кино"} />
                <ThemeItem name={"ИТ"} />
                <ThemeItem name={"Наука"} />
                <ThemeItem name={"Бизнес"} />
                <ThemeItem name={"Теарт"} />
                <ThemeItem name={"Хобби"} />
            </div>
        </Fragment>
    );
};

export default ThemeSection;
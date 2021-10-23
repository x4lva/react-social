import React from 'react';
import FormGroup from "../../Form/FormGroup/FormGroup";
import FormInput from "../../Form/FormInput/FormInput";

const OrganisationCreate = () => {
    return (
        <form>
            <FormGroup title={"Назва організації"} >
                <FormInput type={"text"} />
            </FormGroup>
            <button type={"submit"}>Створити Організацію</button>
        </form>
    );
};

export default OrganisationCreate;
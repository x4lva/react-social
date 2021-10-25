import React, {useState} from 'react';
import FormGroup from "../../Form/FormGroup/FormGroup";
import FormInput from "../../Form/FormInput/FormInput";
import FormButton from "../../Form/FormButton/FormButton";
import {formFieldValidate, formValidate} from "../../../util/Form/FormValidator/FormValidator";
import {useDispatch} from "react-redux";
import { createOrganisation } from '../../../redux/actions/UserActions';
import {FormText} from "react-bootstrap";
import FormTextarea from "../../Form/FormTextarea/FormTextarea";

const OrganisationCreate = () => {

    const formParams = {
        organisationName: {
            required: true
        },
        organisationEmail: {
            required: true, email: true
        },
        organisationDescription: {
            required: true, minLength: 10
        }
    }

    const [formData, setFormData] = useState({
        organisationName: '', organisationEmail: '', organisationDescription: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const dispatch = useDispatch()

    const formChangeHandler = (e, params) => {
        console.log(e.target.name)

        setFormErrors(prevFormErrors => (
            { ...prevFormErrors, [e.target.name]: formFieldValidate(e.target.name, e.target.value, params) }
        ));

        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        let hasErrors = false;
        const errors = formValidate(formParams, formData)
        setFormErrors(formValidate(formParams, formData))

        for (const error in errors) if (errors[error].length !== 0) hasErrors = true

        if (!hasErrors) dispatch(createOrganisation(formData))
    }

    return (
        <form onSubmit={(e) => formSubmitHandler(e)}>
            <FormGroup title={"Назва організації"} >
                <FormInput type={"text"}
                           placeholder={"Назва організації"}
                           help={"Назву побачать учасники ваших подій на сторінках реєстрації, квитках і листах"}
                           name={"organisationName"}
                           onChange={formChangeHandler}
                           errors={formErrors.organisationName}
                           params={formParams.organisationName}
                           value={formData.organisationName} />
            </FormGroup>
            <FormGroup title={"Опис організації"} >
                <FormTextarea placeholder={"Опис організації"}
                           help={"Опис організації побачуть користувачі на сторінці організації"}
                           name={"organisationDescription"}
                           onChange={formChangeHandler}
                           row={2}
                           maxRow={10}
                           errors={formErrors.organisationDescription}
                           params={formParams.organisationDescription}
                           value={formData.organisationDescription} />
            </FormGroup>
            <FormGroup title={"E-mail"} >
                <FormInput type={"text"}
                           placeholder={"E-mail"}
                           help={"Повинен бути вказаний контактний адрес e-mail"}
                           name={"organisationEmail"}
                           onChange={formChangeHandler}
                           errors={formErrors.organisationEmail}
                           params={formParams.organisationEmail}
                           value={formData.organisationEmail} />
            </FormGroup>
            <FormButton onSubmit={(e) => formSubmitHandler(e)} variant={"primary"} >
                Створити
            </FormButton>
        </form>
    );
};

export default OrganisationCreate;
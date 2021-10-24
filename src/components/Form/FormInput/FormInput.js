import React, {useState} from 'react';
import "./FormInput.scss"

const FormInput = (props) => {
    const [type, setType] = useState(props.type)

    const {
        name,
        id,
        placeholder,
        value,
        onChange,
        params,
        help,
        errors
    } = props

    const initType = props.type;

    const eyeIconClassName = `form-input-password-show ${type === "text" ? "active" : ""}`;

    return (
        <React.Fragment>
            <div className={`form-input-wrapper ${(errors !== undefined && errors.length !== 0 ) ? ' error' : ''}`}>
                <input onChange={(e) => onChange(e, {...params})} className={"form-input"} type={type} name={name} id={id} placeholder={placeholder} value={value} />

                { initType === "password" && (
                    <div className={eyeIconClassName}>
                        <i className={"far fa-eye"} onClick={() => setType(type === "text" ? "password" : "text")} />
                    </div>
                ) }
            </div>
            { errors !== undefined && errors.length !== 0 ? (
                <div className="form-input-errors">
                    { errors }
                </div>
            ) : "" }
            { help !== undefined &&
                <div className="form-input-help">
                    {help}
                </div>
            }
        </React.Fragment>
    );
};

export default FormInput;
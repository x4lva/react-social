import React, {useState} from 'react';
import "./FormTextarea.scss"

const FormTextarea = ({placeholder, className, errors, help, row, maxRow, name, params, onChange}) => {
    const [value, setValue] = useState()
    const [rows, setRows] = useState(row === undefined ? 1 : row)
    const [minRows, setMinRows] = useState(row === undefined ? 1 : row)
    const [maxRows, setMaxRows] = useState(maxRow === undefined ? 10 : maxRow)

    const onChangeHandler = (e) => {
        onChange(e, {...params})

        const textareaLineHeight = 24;
        const newMinRows = minRows;
        const newMaxRows = maxRows;

        const previousRows = e.target.rows;
        e.target.rows = newMinRows;

        const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            e.target.rows = currentRows;
        }

        if (currentRows >= newMaxRows) {
            e.target.rows = newMaxRows;
            e.target.scrollTop = e.target.scrollHeight;
        }

        setValue(e.target.value)
        setRows(currentRows < newMaxRows
            ? currentRows
            : newMaxRows
        )
    }

    return (
        <div className={`form-input-wrapper ${(errors !== undefined && errors.length !== 0 ) ? ' error' : ''}`}>
             <textarea
                 name={name}
                 value={value}
                 rows={rows}
                 onChange={onChangeHandler}
                 placeholder={placeholder}
                 className={`${className} from-textarea`}
             />
            {errors !== undefined && errors.length !== 0 ? (
                <div className="form-input-errors">
                    {errors}
                </div>
            ) : ""}
            {help !== undefined &&
            <div className="form-input-help">
                {help}
            </div>
            }
        </div>
    );
};

export default FormTextarea;
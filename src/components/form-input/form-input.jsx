import React from 'react';
import './form-input.scss';

const FormInput = ({label, handleChange, id, ...props}) => (
        <div className="group">
            { label ? 
                <label className={`${props.value.length ? 'shrink' : ''} form-input-label`} htmlFor={ id }>{ label }</label> 
                : null }
                <input
                    className="form-input" 
                    id={ id }
                    { ...props }
                    onChange={handleChange} />
        </div>
)

export default FormInput;
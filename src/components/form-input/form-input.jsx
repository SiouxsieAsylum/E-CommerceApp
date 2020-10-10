import React from 'react';
import './form-input.scss';

const FormInput = ({label, handleChange, ...props}) => (
        <div className="group">
            { label ? 
                <label className={`${props.value.length ? 'shrink' : ''} form-input-label`} >{label}</label> 
                : null }
                <input
                    className="form-input" 
                    {...props}
                    onChange={handleChange} />
        </div>
)

export default FormInput;
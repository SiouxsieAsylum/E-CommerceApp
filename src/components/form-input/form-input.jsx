import React from 'react';
import './form-input.scss';

const FormInput = ({label, handleChange, ...passed}) => (
        <div className="group">
            { label ? 
                <label className={`${passed.value.length ? 'shrink' : ''} form-input-label`} >{label}</label> 
                : null }
                <input
                    className="form-input" 
                    {...passed}
                    onChange={handleChange} />
        </div>
)

export default FormInput;
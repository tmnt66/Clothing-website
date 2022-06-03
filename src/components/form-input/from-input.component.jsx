import react from "react";
import './form-input.styles.scss'

const FormInput = ({ HandleChange, label, ...otherProps }) => (
    <div className="group">

        {
        label ?
                (
    < label className={`${otherProps.value.length ? ('shrink') :( '')}`} form-input-label='true'>
{label}
    </label>
                )
:null
}
        <input className="form-input" onChange={HandleChange} {...otherProps} />

    </div>

)

export default FormInput
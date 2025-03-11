import {Controller} from "react-hook-form"


const Input = ({name, label, control, rules, errors, type, textarea}) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={name} className="form-label fs-18 fw-bold">{label}</label>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({field}) =>  textarea ? <textarea  cols="30" rows="5" {...field} id={name} className="form-control"></textarea>  : <input type={type}  className="form-control" {...field} id={name} /> }
            />
            {errors[name] &&  <p className="error text-danger fs-14 mt-1">{errors[name].message}</p> }
        
        </div>
    )
}



export default Input

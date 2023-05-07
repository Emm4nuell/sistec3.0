import Style from '../css/Input.module.css'

export default function Input({type, onchange, cadastrar, text, name, placeholder, value, error}){
    return(
        <div className={Style.form_input}>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type}
            onChange={onchange}
            name={name}
            placeholder={placeholder}
            value={value}
            error={error}/>
            <span>{error}</span>
        </div>
    )
}
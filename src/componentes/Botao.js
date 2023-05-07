import Style from '../css/Botao.module.css'

export default function Botao({type, onclick, text, classname, id}){
    return(
        <div className={Style.botao}>
            <button type={type} onClick={onclick} id={id} className={classname}>{text}</button>
        </div>
    )
}
import Style from '../css/Alertas.module.css'

export default function Alertas({type, message}){
    return(
        <div className={Style.divalerta}>
            <span message={message}>{message}</span>
        </div>
    )
}
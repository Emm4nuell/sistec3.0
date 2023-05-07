import Botao from '../componentes/Botao'
import Input from '../componentes/Input'
import Style from '../css/Login.module.css'
import ImgLogin from '../imagens/react.png'
import Logo from '../imagens/logo.png'


export default function Login(){
    return (
        <section className={Style.login}>
            <div className={Style.divimagem}>
                <img src={ImgLogin}/>
            </div>
            <div className={Style.divlogin}>
                <div className={Style.logo}>
                    <img src={Logo}/>
                    <h1>sistec</h1>
                </div>
                
                <div className={Style.divinput}>
                    <Input type="text" placeholder='Usuario'/>
                    <Input type="password" placeholder='Senha'/>
                </div>
                <div className={Style.exibir}>
                    <label><Input type="checkbox" />Exibir senha</label>
                    <a href='#'>Esqueceu a senha?</a>
                </div>
                <div className={Style.botao}>
                    <Botao id="entrar" classname="btn btn-success" text="Entrar"/>
                </div>
                <div className={Style.cadastrese}>
                    <label>Ainda não possui conta? <a href='/cadastrar'>Cadastre-se</a></label>
                </div>
            </div>
        </section>
    )
}
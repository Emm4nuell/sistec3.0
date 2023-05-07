import React, { useEffect, useState } from "react"
import Style from '../css/CadastrarUsuario.module.css'
import Input from "../componentes/Input"
import Botao from "../componentes/Botao"
import Alertas from "../componentes/Alertas";

export default function CadastrarUsuario(){


    const[errors, setErros] = useState([])


    const[objUsuario, setObjUsuario] = useState({
        nome: ''
    })
    
    const handleOnChange = (key, value) =>{
        setObjUsuario({...objUsuario, [key]:value.target.value})
        console.log(objUsuario)
    }

    const validador = (e) =>{
        e.preventDefault()
        Object.assign(errors, objUsuario)
        console.log("Validador: " + errors.nome)
    }

    return(
        <section className={Style.section}>
            {errors.map((error) => {console.log("map: " + error.nome)})}

            <form className={Style.form} onSubmit={validador}>
                <div className={Style.divform}>

                    <div><Input type="text" onchange={(event) => handleOnChange('nome', event)} value={objUsuario.nome} name="nome" text="Nome" error="Campo nome é obrigatorio!"/></div>

                    <div className={Style.divinput}>
                        <div className={Style.subinput}><Input type="text" onchange={(event) => setObjUsuario({...objUsuario, [event.target.name]:event.target.value})} name="sexo" text={'Sexo'}/></div>
                        <div className={Style.subinput}><Input type="text" onchange={(event) => setObjUsuario({...objUsuario, [event.target.name]:event.target.value})} name="cpf" text="CPF"/></div>
                        <div className={Style.subinput}><Input type="text" onchange={(event) => setObjUsuario({...objUsuario, [event.target.name]:event.target.value})} name="rg" text="RG"/></div>
                        <div className={Style.subinput}><Input type="date" onchange={(event) => setObjUsuario({...objUsuario, [event.target.name]:event.target.value})} name="dataNascimento" text="Data de Nascimento"/></div>
                    </div>

                    <div className={Style.divinput}>
                        <div className={Style.subinput}><Input type="text" name="email" text="Email"/></div>
                        <div className={Style.subinput}><Input type="text" name="telefone" text="Telefone"/></div>
                        <div className={Style.subinput}><Input type="text" name="celular" text="Celular"/></div>
                        <div className={Style.subinput}><Input type="setor" name="sexo" text="Setor"/></div>
                    </div>

                </div>

                <div className={Style.divform}>
                    <div className={Style.divinput}>
                        <div className={Style.subinput}><Input type="password" name="senha" text="Digite a senha"/></div>
                        <div className={Style.subinput}><Input type="passowrd" name="repitasenha" text="Repita a senha"/></div>
                    </div>
                </div>

                <div className={Style.divform}>
                    <div className={Style.divinput}>
                        <Input type="text" name="cep" text="CEP"/>
                    </div>

                    <div className={Style.divinput}>
                        <div className={Style.subinput}><Input type="text" name="endereco" text="Endereco/AV..."/></div>
                        <div className={Style.subinput}><Input type="text" name="numero" text="N°"/></div>
                    </div>

                    <div className={Style.divinput}>
                        <div className={Style.subinput}><Input type="text" name="sexo" text="Estado"/></div>
                        <div className={Style.subinput}><Input type="text" name="cpf" text="Cidade"/></div>
                        <div className={Style.subinput}><Input type="text" name="rg" text="Bairro"/></div>
                    </div>

                </div>

                <div className={Style.divbtn}>
                    <Botao classname="btn btn-success" type="submit" text="Cadastrar" />
                </div>

            </form>
        </section>
    )
}
import React, { useState } from 'react'
import api from '../services/api'
import CadComum from './CadComum'
import CadFisica from './CadFisica'
import CadJuridica from './CadJuridica'

function Cadastro() {
    const [tipocliente, setTipocliente] = useState('')
    const [situacaocliente, setSituacaocliente] = useState('')
    
    const [show, setShow] = useState("")
    console.log(show)


    function loadPage(e) {
        e.preventDefault()
        let valor = document.getElementById('tipo').value
        setShow(valor)
    }

    async function cadastro(e){
        e.preventDefault()

        try {
            await api.post('cliente/cadastro',{
                tipocliente,
                situacaocliente
            } )

            alert('Usuário cadastrado')
        } catch (error) {
            alert('Erro ao cadastro')
        }


    }


    return (
        <>
            <div className="form-cadastro">
                <form>

                    <fieldset className="field">
                        <div className="select">
                            <label>Tipo de Cliente</label>
                            <select name="tipo" id="tipo" onClick={loadPage} onChange={e=>setTipocliente(e.target.value)}>
                                <option value="Pessoa Física">Pessoa Física</option>
                                <option value="Pessoa Juridíca"  >Pessoa Juridíca</option>
                            </select>

                        </div>
                        <div className="input-button" onChange={e=>setSituacaocliente(e.target.value)}>
                            <label>Situação do Cliente:</label><br />
                            <input type="radio" id="Ativo" name="situacao" value="Ativo" />
                            <label for="Ativo">Ativo</label><br />
                            <input type="radio" id="Inativo" name="situacao" value="Inativo" />
                            <label for="Inativo">Inativo</label><br></br>
                        </div>
                            

                        {show === "Pessoa Física" ?
                            <CadFisica/> : <CadJuridica/>
                        }
                        <CadComum />
                          
                        <div className="Buttons">
                            <button className="salvar" onClick={cadastro}>Salvar</button>

                            
                             <button className = "btn-cancelar"><a href="/">Cancelar</a></button>

                        </div>
                        
                    </fieldset>
                </form>
            </div>

        </>
    )
}

export default Cadastro

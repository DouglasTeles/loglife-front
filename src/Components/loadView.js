import React from 'react'

function loadView({
    tipocliente,
    situacaocliente, 
    nomecliente,
    razaosobrenome,
    cnpjcpf,
    email,
    telefone,
    cep,
    rua,
    numero,
    cidade,
    estado,
    diahoraatt,
    veiculoutilizado,}) {
    return (
        <>
            <div className="card-view">
                <div className="resume">
                <label>TIPO DE CLIENTE: </label>
                <label>{tipocliente}</label><br /><hr/><br />
                <label>SITUAÇÃO DO CLIENTE: </label>
                <label>{situacaocliente}</label><br /><hr/><br />
                <label>NOME: </label>
                <label>{nomecliente}</label><br /><hr/><br />
                <label>RAZÃO SOCIAL ou SOBRENOME: </label>
                <label>{razaosobrenome}</label><br /><hr/><br />
                <label>CNPJ ou CPF: </label>
                <label>{cnpjcpf}</label><br /><hr/><br />
                <label>E-MAIL: </label>
                <label>{email}</label><br /><hr/><br />
                <label>TELEFONE: </label>
                <label>{telefone}</label><br /><hr/><br />
                <label>CEP: </label>
                <label>{cep}</label><br /><hr/><br />
                <label>RUA: </label>
                <label>{rua}</label><br /><hr/><br />
                <label>NUMERO: </label>
                <label>{numero}</label><br /><hr/><br />
                <label>CIDADE: </label>
                <label>{cidade}</label><br /><hr/><br />
                <label>ESTADO: </label>
                <label>{estado}</label><br /><hr/><br />
                <label>DATA E HORA ATENDIMENTO: </label>
                <label>{diahoraatt}</label><br /><hr/><br />
                <label>VEÍCULOS UTILIZADOS: </label>
                <label>{veiculoutilizado}</label><br /><hr/><br />
                </div>
                
            </div>
        </>
    )
}

export default loadView

import React, {useEffect, useState} from 'react'
import HeaderNav from '../Components/HeaderNav'
import LoadView from '../Components/loadView'
import api from '../services/api'

function Visualizar() {

    const [allClients, setAllClients ] = useState(null)
    console.log(allClients)

    useEffect(() =>{
        async function getClients(){
            try {
                const loadedClients = await api.get('clientes')
                const {data} = loadedClients

                setAllClients(data)
    
            } catch (error) {
              alert("Não foi possivel buscar os clientes")  
            }
        }
        getClients()
    }, [])

    

    return (
        <>

             <HeaderNav/>
             {allClients === null && <h1>Carregando...</h1>}
             {allClients === undefined && <h1>Não há clientes cadastrados...</h1>}
             {allClients && allClients.map(cliente => (
                
                <LoadView 
                    tipocliente = {cliente.tipocliente}
                    situacaocliente = {cliente.situacaocliente}
                    nomecliente = {cliente.nomecliente}
                    razaosobrenome = {cliente.razaosobrenome}
                    cnpjcpf = {cliente.cnpjcpf}
                    email = {cliente.email}
                    telefone = {cliente.telefone}
                    cep = {cliente.cep}
                    rua = {cliente.rua}
                    numero = {cliente.numero}
                    cidade = {cliente.cidade}
                    estado = {cliente.estado}
                    diahoraatt = {cliente.diahoraatt}
                    veiculoutilizado = {cliente.veiculoutilizado}
                />
             ))}
            
        </>
    )
}

export default Visualizar

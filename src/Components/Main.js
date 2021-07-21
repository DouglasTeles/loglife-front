import React from 'react'
import Cadastro from '../assets/cadastro.png'
import Listar from '../assets/Listar.png'
import Visualizar from '../assets/Visualizar.png'
import Editar from '../assets/Editar.png'

function Main() {
    return (
        <>
            <main>
                <div className="menu">
                    <a href="/cadastro">Cadastrar Clientes  <div className="blocks"> <img className="imgcad" alt="CadastroImg" src={Cadastro}/></div></a>
                    <a href="cliente/listar">Listar Clientes <div className="blocks"> <img className="imgcad" alt="ListarImg" src={Listar}/></div></a>
                    
                    <a href="/visualizar">Visualizar Clientes <div className="blocks"> <img className="imgcad" alt="VisualizaImg" src={Visualizar}/></div></a>
                    <a href="/cliente/:id/editar">Editar Clientes <div className="blocks"><label> <img className="imgcad" alt="EditarImg" src={Editar}/></label></div></a>
                
                    
                    
                </div>
            </main>
        </>
    )
}

export default Main

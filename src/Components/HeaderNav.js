import { Dropdown, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import React from 'react'
import Menu from '../assets/drop.png'
import Logo from '../assets/logo_loglife.png'


function HeaderNav({clearToken}) {

    const history = useHistory()

    function logout(e){
            localStorage.clear()
            clearToken()
    }

    return (
        <header>
            <nav>
                <a href="/menu"><img alt="Logo" src={Logo} /></a>

                <div>
                    <a className="a" href="/menu">Início</a>
                    <a className="a"  href="/cadastro">Cadastro</a>
                    <a className="a"  href="/visualizar">Visualizar Clientes</a>
                    <a className="a"  onClick={logout}>Sair</a>
                </div>
                
            </nav>
           
            <Dropdown className="drop">
                <Dropdown.Toggle variant="" id="">
                <a><img alt="Menu" src={Menu}/></a>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/menu">Início</Dropdown.Item>
                    <Dropdown.Item href="/cadastro">Cadastro</Dropdown.Item>
                    <Dropdown.Item href="/visualizar">Visualizar Clientes</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            

        </header>
    )
}

export default HeaderNav

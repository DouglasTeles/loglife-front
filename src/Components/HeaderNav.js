import { Dropdown, Button } from 'react-bootstrap'
import React from 'react'
import Menu from '../assets/drop.png'
import Logo from '../assets/logo_loglife.png'


function HeaderNav() {
    return (
        <header>
            <nav>
                <a href="/"><img alt="Logo" src={Logo} /></a>

                <div>
                    <a className="a" href="/">Início</a>
                    <a className="a"  href="/cadastro">Cadastro</a>
                    <a className="a"  href="/visualizar">Visualizar Clientes</a>
                </div>
                
            </nav>
           
            <Dropdown className="drop">
                <Dropdown.Toggle variant="" id="">
                <a><img alt="Menu" src={Menu}/></a>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/">Início</Dropdown.Item>
                    <Dropdown.Item href="/cadastro">Cadastro</Dropdown.Item>
                    <Dropdown.Item href="/visualizar">Visualizar Clientes</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            

        </header>
    )
}

export default HeaderNav

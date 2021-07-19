import React from 'react'

import Logo from '../assets/logo_loglife.png'

function HeaderNav() {
    return (
        <header>
            <nav>
                <a href="/"><img alt="Logo" src={Logo}/></a>
                
                <div>
                <a href="/">Início</a>
                <a href="/cadastro">Cadastro</a>
                <a href="/visualizar">Visualizar Clientes</a>
                </div>
            </nav>
        </header>
    )
}

export default HeaderNav

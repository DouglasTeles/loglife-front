import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Menu from '../Pages/Menu'
import Cadastrar from '../Pages/Cadastrar'
import Editar from '../Pages/Editar'
import Listar from '../Pages/Listar'
import Visualizar from '../Pages/Visualizar'
import Login from '../Pages/Login'
import User from '../Pages/User'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'exact>
                    <Login />
                </Route>
                <Route path='/user'>
                    <User />
                </Route>
                <Route path='/menu'>
                    <Menu />
                </Route>
                <Route path='/cadastro'>
                    <Cadastrar />
                </Route>
                <Route path='/:id/editar'>
                    <Editar />
                </Route>
                <Route path='/cliente/listar'>
                    <Listar />
                </Route>
                <Route path='/visualizar'>
                    <Visualizar />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router

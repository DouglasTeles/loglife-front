import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Menu from '../Pages/Menu'
import Cadastrar from '../Pages/Cadastrar'
import Editar from '../Pages/Editar'
import Listar from '../Pages/Listar'
import Visualizar from '../Pages/Visualizar'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'exact>
                    <Menu />
                </Route>
                <Route path='/cadastro' exact>
                    <Cadastrar />
                </Route>
                <Route path='/cliente/:id/update'>
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

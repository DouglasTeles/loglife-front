import React, { useState } from "react";
import Inputs from "./Inputs";
import Logo from "../assets/logo_loglife.png"

function MainSection() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main>
      <div className="form-main">
        <form>
        <div className="image-logo"><img src = {Logo} alt="Logo Sarc" /></div>
          <h1>Acesso restrito</h1>

          <fieldset>
          <Inputs 
            title="Usuário" 
            type="text" 
            state = {login}
            setState = {e =>setLogin(e.target.value) }
          />

          <Inputs 
            title="Senha" 
            type="password"
            state = {password}
            setState = {e =>setPassword(e.target.value) } 
          />  
            
          </fieldset>
          <button>Entrar</button>
          <label>Ainda não possui cadastro? <a href="/user">Clique aqui</a> </label>
        </form>
      </div>
    </main>
  );
}

export default MainSection;

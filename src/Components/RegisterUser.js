import React, { useState } from "react";
import api from '../services/api.js'

import Inputs from "./Inputs";
import {Link} from 'react-router-dom'
import Logo from "../assets/logo_loglife.png"
import LoadingIcon from "../assets/loading.png";

function RegisterUser() {
  const [show, setShow] = useState(1)
  const [username, setUsername] = useState('')
  const [cellphone, setCellphone ] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  
  async function registrationHandler(e){
    e.preventDefault()
    setLoading(true)  
    try{

      await api.post("sarc/user", {
         
          name:username,
          password:password,
          cellphone:cellphone,  
        
        
      })
      alert("Cadastro salvo com sucesso!")
      setLoading(false)
      setUsername  ('')
      setCellphone ('')
      setPassword ('')

    }    
    catch(err){
      alert(err.message)
      setLoading(false)
    }
  } 

  return (
    <main>
      <div className="form-main">
        <form>
        
          <img src = {Logo} alt="Logo Sarc" />
          <h1>Criar Conta</h1>
          <fieldset>

          <Inputs 
            title="E-mail" 
            type="text" 
            state = {cellphone}
            setState = {e =>setCellphone(e.target.value) }
          />
          <p>Este será seu Usuário para Login</p>   
          
            
          <Inputs 
            title="Password" 
            type="password"
            state = {password}
            setState = {e =>setPassword(e.target.value) }
          />

          

          {/* <Inputs 
            title="Confirm Password" 
            type="password" 
            state = {password1}
            setState = {e =>setPassword1(e.target.value) }
          /> */}

          </fieldset>
          {loading ? 
          < img src = {LoadingIcon} alt="Loading" className="loading-register"
           
          />          
          :
          <>
         <button 
            className="saveBtn" onClick={registrationHandler}
            >Save
          </button>
          </>
          }    
          <Link to = '/' className="linkCancel"> 
            <button className="btnCancel" >Cancel</button>
          </Link>          
        </form>
      </div>
    </main>
  );
}

export default RegisterUser;

import { useState,useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Contexto from './Contexto'

function Login() {

  let {token,setToken} = useContext(Contexto)

  let [usuario,setUsuario] = useState("")

  let [password,setPassword] = useState("")


  return token ? <Navigate to="/" /> : <form onSubmit={ evento => {
                     evento.preventDefault()
                     console.log(usuario,password)
                     
                      fetch('https://api-colores-clase-qy68.onrender.com/login',{
                        method : "POST",
                        body : JSON.stringify({usuario,password}),
                        headers : {
                          'Content-Type' : 'application/json'
                        }
                      })
                      .then(respuesta => {
                        if(respuesta.status == 200){
                          return respuesta.json()
                        }
                        throw respuesta.status
                      })
                      .then(({token}) => {
                          console.log(token)
                      })
                      .catch(e => {
                          console.log("informar a usuario error: " + e)
                      })

                      
                }}> 
               <input type="text" value={usuario} onChange={evento => setUsuario(evento.target.value)} placeholder="usuario"/>
               <input type="password" value={password} onChange={evento => setPassword(evento.target.value)}placeholder="contraseña"/>
               <input type="submit" value="log in"/>
         </form>
    
  
}
export default Login
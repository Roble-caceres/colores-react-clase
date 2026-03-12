import { useState,useEffect,useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Contexto from './Contexto'
import Formulario from './Formulario'
import Color from './Color'


function App() {

  let {token} = useContext(Contexto)

  let [colores,setColores] = useState([])

  useEffect(() => {
    fetch('https://api-colores-clase-qy68.onrender.com/colores',{
      headers : {
        'Authorization' : "Bearer " + token
      }
    })
    .then(respuesta => respuesta.json())
    .then(colores => setColores(colores))
      
  },[])

  function crearColor(color){
      setColores([...colores,color])
  }
  function borrarColor(id){
      setColores(colores.filter( color => color._id != id ))
  }
  function actualizarColor(id,objColor){
      setColores(colores.map( color => {
        if(color._id == id){
            objColor._id = id
            return objColor
        }
        return color
      }))
  }

  return !token ? <Navigate to="/login" /> : <>
        <Formulario crearColor={crearColor} />
        <ul>
          {
            colores.map(({_id,r,g,b}) => <Color key={_id} id={_id} r={r} g={g} b={b} borrarColor={borrarColor} actualizarColor={actualizarColor} />)
          }
        </ul>
        </>
}

export default App

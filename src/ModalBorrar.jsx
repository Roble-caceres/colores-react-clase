import { useContext } from "react"
import Contexto from "./Contexto"

function ModalBorrar({id,borrarColor,setBorrando}){

    let {token} = useContext(Contexto)

    return <div className="modal-borrar modal-visible">
                <div className="modal">
                    <button onClick={ () => {

                    fetch("https://api-colores-clase-qy68.onrender.com/borrar/" + id,{
                    method : "DELETE",
                    headers : {
                        'Authorization' : "Bearer " + token
                    }
                  })
                    .then(({status}) => {
                        if(status== 204){
                            return borrarColor(id)
                  
                    }
                    console.log("...error")
     
                    })

                    } }>borrar</button>
                    <button onClick={ () => setBorrando(false) }>cancelar</button>
                </div>
            </div>
}

export default ModalBorrar 
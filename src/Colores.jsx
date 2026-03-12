import { useState } from "react"
import { RouterProvider,createBrowserRouter } from "react-router-dom"
import Contexto from "./Contexto"
import Login from "./Login"
import App from "./App"

const router = createBrowserRouter([

     {   path : "/",
        element : <App/>
    },
    {   path : "/login",
        element : <Login/>
    }
])  

function Colores() {

    let [token, setToken] = useState(null)

    return <Contexto.Provider value={{token, setToken}}>
            <RouterProvider router={router} />
            </Contexto.Provider>
}
export default Colores

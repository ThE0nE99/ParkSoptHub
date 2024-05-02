import appFirebase from "./firebase.config"
import { getAuth,onAuthStateChanged } from "firebase/auth"
import  React,{useState} from 'react'

const auth = getAuth(appFirebase)


import Login from './components/Login'
import Home from './components/Home'


function App() {
  const [usuario,setUsuario]= useState(null)
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
    <div>
      <h1>hola </h1>
      {usuario ? <Home correoUsuario={usuario.email} /> :<Login/>}
    </div>
  )
}

export default App

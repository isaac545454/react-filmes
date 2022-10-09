import { useState } from 'react'
//routas
import RoutesItem from "./routes";
//estilos
import 'react-toastify/dist/ReactToastify.css' ; 
import './App.css'
//components 
import { ToastContainer} from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)
  return(
    <div >
    <ToastContainer autoClase={1500} />
     <RoutesItem />
    </div>
  )
}

export default App

import React, {useEffect, useState} from 'react'
import Styles from "./styled.module.css";
import {Link } from 'react-router-dom'
import {toast} from 'react-toastify'


export default function Favorito() {
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
   fetchFilmes()
  }, [])

  const fetchFilmes = ()=>{
    const minhaLista = localStorage.getItem('@filmes')
    setFilmes(JSON.parse(minhaLista) || [])
  }

  const handleExcluir = (id)=>{
    let filtroFilmes = filmes.filter((item)=>{
      return(item.id !== id)
    })
    setFilmes(filtroFilmes)
    localStorage.setItem('@filmes', JSON.stringify(filtroFilmes))
    toast.success("Filme removido com sucesso")
  }

  if(filmes.length === 0){
    return(
      <div className={Styles.semFilmes}><h1>nenhum filme salvo</h1></div>
    )
  }
  
  console.log(filmes);
  return (
    <div className={Styles.filmesSalvos}>
      <h1>meus filmes</h1>
      
      <ul>
        {filmes.map((item)=>{
          return(
            <li Key={item.id} className={Styles.item}>
              <span>{item.title}</span>

              <div className={Styles.areaBtn}>
                 <Link to={`/filmes/${item.id}`}>ver mais detalhes</Link>
                 <button onClick={()=>handleExcluir(item.id)}>Excluir</button>
                   
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

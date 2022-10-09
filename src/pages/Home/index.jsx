import React, {useEffect, useState} from 'react'
import Styles from './styled.module.css';
const apiKey = import.meta.env.VITE_API_KEY
import api from '../../services/api'
import Card from '../../components/Card'
export default function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    fetchFilmes()
  },[])

  const fetchFilmes = async()=>{
    const response = await api.get('/movie/now_playing',{
      params:{
        api_key: apiKey,
        language: 'pt-BR',
        page: 1,
      }
    })
   
    setFilmes(response.data.results)
    setLoading(true)
  }
  if(loading === false){
    return <h2 className={Styles.loading}>carregando...</h2>
  }

  return (
      
      <div className={Styles.container}>
      {filmes && filmes.map((filme)=>(
        <Card filme={filme} Key={filme.id} />
        ))}
        </div>
        
      
      )
}

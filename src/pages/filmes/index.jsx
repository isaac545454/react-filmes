import {useEffect, useState} from 'react'
import api from '../../services/api';
import {useParams, useNavigate} from 'react-router-dom'
const apiKey = import.meta.env.VITE_API_KEY
const image = import.meta.env.VITE_IMG
import Styles from './styles.module.css';
import {toast} from 'react-toastify'

export default function index() {
  const {id} = useParams()
  const [filme, setFilme] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    fetchFilme()
  }, [id, navigate])

  const fetchFilme = async()=>{
    
    try{
      const response = await api.get(`/movie/${id}`,{
      params:{
      api_key: apiKey,
      language: 'pt-BR',
  
    }})
   
    setFilme(response.data)
    setLoading(true)
    }catch{
      navigate("/", {replace: true})
      return
    }

  }

  const handleClick = ()=>{
    const minhaLista = localStorage.getItem('@filmes')
    let filmesSalvos = JSON.parse(minhaLista) || []
    const filmes = filmesSalvos.some((cine)=>cine.id === filme.id)
    if(filmes){
      toast.warn("esse filme ja esta na lista")
      return
    }
    filmesSalvos.push(filme)
    localStorage.setItem('@filmes', JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso')

  }

  if(loading === false){
    return(
      <h1 className={Styles.loading}>carregando...</h1>
    )
  }

  return (
    <div className={Styles.containerDetalhes}>
      <h2>{filme.title}</h2>
      <img src={`${image}/${filme.poster_path}`} alt={filme.title} />
      <p className={Styles.sinopse}>sinopse:</p>
      <p>{filme.overview}</p>
      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>
      <div className={Styles.containerButton}>
        <button onClick={handleClick}>salvar</button>
        <button>
          <a
          target="black" 
          rel="external"
          href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} 
          >
            trailer
          </a>
        </button>
      </div>
    </div>
  )
}

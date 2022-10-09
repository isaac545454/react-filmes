import React from 'react'
import Styles from './styles.module.css'
import {Link} from 'react-router-dom'

const image = import.meta.env.VITE_IMG
export default function index({filme}) {
  return (
    <div className={Styles.containerFilmes}>
      <h3>{filme.title}</h3>
      <img src={`${image}/${filme.poster_path}`} alt={filme.title} />
      <Link to={`/filmes/${filme.id}`}>Acessar</Link>
    </div>
  )
}

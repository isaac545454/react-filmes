import React from 'react'
import Styles from './styled.module.css';
import {Link} from 'react-router-dom'

export default function index() {
  return (
    <div className={Styles.notfound}> 
      <h1>404</h1>
      <p>pagina não encontrada</p>
      <Link to="/">veja todos os filmes</Link>
    </div> 
  )
}

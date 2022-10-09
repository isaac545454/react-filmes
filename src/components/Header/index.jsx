import React from 'react'
import Styles from './styles.module.css'
import {Link} from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'
export default function header() {
  return (
    <div className={Styles.Header}>    
        <Link className={Styles.logo}  to="/">react filmes</Link>
       <Link className={Styles.favoritos} to="/favoritos"><MdFavorite size={30} />favoritos</Link>
    </div>
  )
}

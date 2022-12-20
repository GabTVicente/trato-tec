import { useState } from 'react'
import styles from './Busca.module.scss'

export default function Busca(){
    const [busca, setBusca] = useState('')

    return(
        <div className={styles.busca}>
            <input 
                value={busca}
                onChange={evento => setBusca(evento.target.value)}
                className={styles.input}
                placeholder="O que você procura?"/>
        </div>
    )
}
import styles from './Busca.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { mudarBusca, resetarBusca } from 'store/reducers/busca';


export default function Busca(){
    const busca = useSelector(state => state.busca);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() =>{
        dispatch(resetarBusca())
    }, [location.pathname, dispatch])

    return(
        <div className={styles.busca}>
            <input 
                value={busca}
                onChange={evento => dispatch(mudarBusca(evento.target.value))}
                className={styles.input}
                placeholder="O que você procura?"/>
        </div>
    )
}
import Footer from 'Components/Footer'
import NavBar from 'Components/NavBar'
import { Outlet } from 'react-router-dom'
import styles from './PaginaPadrao.module.scss'

export default function PaginaPadrao(){
    return(
        <div className={styles.container}>
            <NavBar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}
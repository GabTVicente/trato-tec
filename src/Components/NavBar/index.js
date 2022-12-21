import styles from './NavBar.module.scss'
import Busca from 'Components/Busca'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import classNames from 'classnames'
import {
  RiShoppingCartLine,
  RiShoppingCartFill
} from 'react-icons/ri'
import { useNavigate, useLocation, Link } from 'react-router-dom'


export default function NavBar() {
  const iconeProps = {
    color: 'white',
    size: 24,
  }

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate('/') }/>
      <div className={styles.link}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Pagina inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to='/carrinho'>
          {location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} /> : <RiShoppingCartLine {...iconeProps} />
          }
        </Link>
      </div>
    </nav>
  )
}
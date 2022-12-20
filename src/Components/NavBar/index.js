import styles from './NavBar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import classNames from 'classnames'
import { 
  RiShoppingCartLine, 
  RiShoppingCartFill 
} from 'react-icons/ri'
import Busca from 'Components/Busca'

export default function NavBar() {
  const iconeProps = {
    color: 'white',
    size: 24,
  }

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.link}>
        <div>
          <a href='/' className={classNames(styles.link, {
            [styles.selected]: window.location.pathname === '/'
          })}>
            Pagina inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca/>
      </div>
      <div className={styles.icones}>
        <a href='/carrinho'>
          { window.location.pathname === '/carrinho' 
            ? <RiShoppingCartFill {...iconeProps} /> :<RiShoppingCartLine {...iconeProps} />
        }
        </a>
      </div>
    </nav>
  )
}
import styles from './Header.module.scss'
import TituloSemImagem from './components/TituloSemImagem'
import TituloComImagem from './components/TituloComImagem'

export default function Header({titulo, descricao, className='', imagem}){
    return(
        <header className={styles.header}>
            { titulo && !imagem &&
                <TituloSemImagem 
                    titulo={titulo} 
                    descricao={descricao} />
            }
            { titulo && imagem && 
                <TituloComImagem 
                    titulo={titulo} 
                    descricao={descricao} 
                    imagem={imagem} 
                    className={className}
                />
            }
        </header>
    )
}
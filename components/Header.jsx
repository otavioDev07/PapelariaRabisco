import Link from 'next/link'
import styles from '../styles/Header.module.css' 
export default function Header(){
    return(
        //React fragment não utiliza div para entregar o componente
        <>
            <header className={styles.header}>
                <img src="logo.jpeg"/>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/produtos">Produtos</Link>
                    <Link href="/contato">Contato</Link>
                </nav>
            </header>
        </>
    )
}
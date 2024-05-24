import Link from 'next/link'
import styles from '../styles/Header.module.css' 

export default function Header(){
    return(
        //React fragment não utiliza div para entregar o componente
        <>
            <header className={styles.header}>
                <img src="logo/logoRabisco.png" className={styles.img}/>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.a}>Home</Link>
                    <Link href="/produtos" className={styles.a}>Produtos</Link>
                    <Link href="/contato" className={styles.a}>Contato</Link>
                </nav>
            </header>
        </>
    )
}
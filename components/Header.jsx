import Link from 'next/link'
import styles from '../styles/Header.module.css' 

export default function Header(props){
    let tamanho
    if (props.size == "big"){   
        tamanho = "30pt"
    } else {
        tamanho = "16pt"
    }
    return(
        //React fragment não utiliza div para entregar o componente
        <>
            <header className={styles.header} style={{backgroundColor:props.bgcolor, color:props.color}}>
                <div className={styles.logo}>
                    <img src="logo/logoRabisco.png" className={styles.img}/>
                    <p>PAPELARIA RABISCO</p>
                </div>
                <h1 style={{fontSize:tamanho}}>{props.title} </h1>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.a}>Home</Link>
                    <Link href="/produtos" className={styles.a}>Produtos</Link>
                    <Link href="/contato" className={styles.a}>Contato</Link>
                </nav>
                
            </header>
        </>
    )
}
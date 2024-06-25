import Headerb from '../components/Headerb'
import PageTitle from '../components/PageTitle'
import CardList from '@/components/CardList'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { getProdutos } from '@/services/api'
export default function produtos(){
    const [produtos, setProdutos] = useState([]);
    
    async function buscaProdutos(){
      try {
        const data = await getProdutos()
        setProdutos(data)
      } catch (error) {
        console.error('Erro ao buscar produtos.', error)
      }
    }

    useEffect(() => {
      buscaProdutos()
      const atualiza = setInterval(buscaProdutos, 5000)

      return function () {
        clearInterval(atualiza)
      }
    }, [])
    return(
        <main>
            <Headerb />
            <PageTitle text="Lista de produtos" color="success"/>
            <CardList produtos={produtos}/>
        </main>        
    );
}
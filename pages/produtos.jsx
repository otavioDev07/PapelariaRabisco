import Headerb from '../components/Headerb'
import PageTitle from '../components/PageTitle'
import CardList from '@/components/CardList'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function produtos(){
    const [produtos, setProdutos] = useState([]);
      
        useEffect(() => {
          const fetchProdutos = async () => {
            try {
              const data = axios.get('http://localhost:80/produto').then((response) => {
                setProdutos(response.data);
              })
            } catch (error) {
              console.error("Erro ao buscar produtos:", error);
            }
          };
      
          fetchProdutos();
        }, []);
    
    return(
        <main>
            <Headerb />
            <PageTitle text="Lista de produtos" color="success"/>
            <CardList produtos={produtos}/>
        </main>        
    );
}
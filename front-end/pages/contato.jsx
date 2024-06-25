import Headerb from '../components/Headerb'
import CardListFuncionario from '@/components/CardListFuncionario'
import PageTitle from '../components/PageTitle'
import { useState, useEffect } from 'react'
import { getFuncionarios } from '@/services/apiREQRES'

export default function contato() {
    const [funcionarios, setFuncionarios] = useState([]);
      
    async function buscaFuncionarios(){
      try {
        const data = await getFuncionarios()
        setFuncionarios(data)
      } catch (error) {
        console.error('Erro ao buscar funcionarios', error)
      }
    }

    useEffect(() => {
      buscaFuncionarios()
    }, [])
    return (
        <main>
            <Headerb />
            <PageTitle text="Lista de funcionarios" color="success" />
            <CardListFuncionario funcionarios={funcionarios} />
        </main>
    )
}
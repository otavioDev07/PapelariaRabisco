import Headerb from '@/components/Headerb'
import PageTitle from '@/components/PageTitle'
import CardList from '@/components/CardList'
import React, { useEffect, useState } from 'react'
import { getProdutos } from '@/services/api'
import { getProdutoNome } from '@/services/api'
export default function produtos(){
    const [produtos, setProdutos] = useState([]);
    const [resultado, setResultado] = useState(null)
    
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
    }, [])

    // Função assíncrona para buscar produtos por termo
    async function pegarTermo(termo) {
      // Verifica se o termo de busca é válido
      if (termo && termo.length > 0) {
          try {
              // Chama a função getProdutoNome para obter os dados dos produtos pelo termo
              const data = await getProdutoNome(termo)
              // Atualiza o estado com os dados dos produtos encontrados
              setResultado(data)
          } catch (error) {
              // Em caso de erro, exibe a mensagem no console e define o resultado como null
              console.error('Erro ao fazer a busca por termos:', error)
              setResultado(null)
          }
      } else {
          // Em caso de erro na utilização da busca, exibe a mensagem no console e define o resultado como null
          console.error("Erro ao utilizar a busca.")
          setResultado(null)
      }
  }

    return (
        <>
            {/* Renderiza o componente de cabeçalho com a função de busca por termo */}
            <Headerb funcao={pegarTermo} />
            {/* Renderiza o título da página */}
            <PageTitle texto="Conheça nossos produtos!" />
            {/* Renderiza a lista de cartões de produtos, passando o resultado da busca ou todos os produtos */}
            <CardList produtos={resultado || produtos} />
        </>
    )
}
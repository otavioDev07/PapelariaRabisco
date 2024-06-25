// Esta página é responsável por renderizar cada produto de forma individual. 
import Headerb from '@/components/Headerb' 
import PageTitle from '@/components/PageTitle'    
import { useRouter } from 'next/router'     
import { useEffect, useState } from 'react' 
import { getProdutoId } from '@/services/api' 
import Link from 'next/link'

export default function id() {

    // Cria uma variável do tipo useRouter, que conterá as informações da URL da página
    const router = useRouter()
    // Para pegar o id da URL, usamos o router.query
    const { id } = router.query

    // Estado para armazenar os dados do produto
    const [produto, setProduto] = useState(null)
    // Estado para controlar o carregamento da página
    const [loading, setLoading] = useState(true)

    // Função assíncrona para buscar os dados do produto pelo ID
    async function buscaProduto(produtoId) {
        try {
            // Chama a função getProdutoId para obter os dados do produto
            const data = await getProdutoId(produtoId)
            // Atualiza o estado com os dados do produto
            setProduto(data)
            // Define o estado de carregamento como falso
            setLoading(false)
        } catch (error) {
            // Em caso de erro, exibe a mensagem no console e define o estado de carregamento como falso
            console.error('Erro ao buscar produtos:', error)
            setLoading(false)
        }
    }

    // useEffect que executa a função buscaProduto quando o ID estiver disponível
    useEffect(() => {
        if (id) {
            buscaProduto(id)
        }
    }, [id]) // Dependência do useEffect para executar quando o ID mudar

    // Condicional para exibir "Carregando..." enquanto os dados estão sendo buscados
    if (loading) {
        return <div>Carregando...</div>
    }

    // Condicional para exibir uma mensagem de erro se o produto não for encontrado
    if (!produto) {
        return <div>Produto não encontrado.</div>
    }

    // Correção do tipo do preço, de string para number e formatação para duas casas decimais
    const precoFormatado = Number(produto.valor).toFixed(2)

    return (
        <>
            <Headerb />
            <PageTitle texto={produto.nome} /> 
            <div className="container my-4">
                <div className="row text-center my-2">
                    <div className="col-sm-12 col-lg-4">
                        <img src={`/produtos/${produto.nome}.png`} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-12 col-lg-6 d-flex flex-column align-items-center">
                        <p className="card-text">{produto.desc}</p>
                        <a href="#" className="btn btn-primary">R$ {precoFormatado}</a>
                        <h5 className="card-text text-success text-center">
                            {produto.qtd} unidade (s) em estoque
                        </h5>
                    </div>
                </div>
                <div className="row text-center">
                    <Link href="/produtos"><button type="button" className="btn btn-dark">Voltar</button></Link>
                </div>
            </div>
        </>
    )
}

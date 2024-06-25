import axios from 'axios'
const api = axios.create({baseURL:'http://localhost:80'});

export const getProdutos = async () => {
  try {
    const response = await api.get('/produto');
    if (response.status !== 200) {
      throw new Error('Erro ao buscar produtos');
    }
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

// Definimos uma função assíncrona chamada getProdutoId, que vai buscar um produto específico pelo ID.
export async function getProdutoId(id) {
  try {
      // Fazemos uma requisição GET para o endpoint '/produto/' seguido do ID do produto.
      const response = await api.get('/produto/' + id)
      // Se a requisição for bem-sucedida, retornamos os dados da resposta.
      return response.data
  } catch (error) {
      // Se houver um erro na requisição, capturamos esse erro no bloco catch.
      // Registramos uma mensagem de erro no console.
      console.error(`Erro ao buscar o produto: ${error.message}`)
  }
}

// Definimos uma função assíncrona chamada getProdutoNome, que vai buscar produtos pelo nome ou termo relacionado.
export async function getProdutoNome(termo) {
  try {
      // Fazemos uma requisição GET para o endpoint '/produto/nome/' seguido do termo de busca.
      const response = await api.get(`/produto/nome/${termo}`)
      // Se a requisição for bem-sucedida, retornamos os dados da resposta.
      return response.data
  } catch (error) {
      // Se houver um erro na requisição, capturamos esse erro no bloco catch.
      // Registramos uma mensagem de erro no console e retornamos um array vazio.
      console.error(`Erro ao buscar o termo: ${error.message}`)
      return []
  }
}


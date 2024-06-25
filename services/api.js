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

export const addProduto = async (produto) => {
  try {
    const response = await api.post('/produto', produto); // produto é o corpo da requisição
    if (response.status !== 200) { 
      throw new Error('Erro ao adicionar produto');
    }
    return response.data; 
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
    throw error;
  }
};

import axios from 'axios';
const api = axios.create({ baseURL: 'https://reqres.in' });

export const getFuncionarios = async () => {
  try {
    const response = await api.get('/api/users?per_page=12');
    if (response.status !== 200) {
      throw new Error('Erro ao buscar funcionario');
    }
    return response.data.data; 
  } catch (error) {
    console.error("Erro ao buscar funcionario:", error);
    throw error;
  }
};
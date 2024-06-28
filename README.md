# Descrição Geral
O projeto PapelariaRabisco é um sistema de gestão para uma papelaria, desenvolvido com um back-end em Python e um front-end em React e Next.js. O sistema permite gerenciar produtos, funcionários, vendas, estoque e outras operações comuns em uma papelaria.
# Tecnologias Utilizadas
- Python
- Flask
- mySQL
- Bootstrap
- HTML
- CSS
- NEXT.js
- REACT
- Axios

# Instalação
- Clone o repositório: git clone https://github.com/otavioDev07/PapelariaRabisco.git
- Navegue até o diretório do projeto: cd PapelariaRabisco
### Instale as dependências do front-end e do back-end:
- ********
# Uso
Para iniciar o projeto, execute os seguintes comandos em dois terminais diferentes:
## No terminal do back-end:
- python main.py
## No terminal do front-end:
- npm run dev: A aplicação estará disponível no endereço http://localhost:3000.

# Estrutura de Pastas
## components: Contém os componentes React reutilizáveis.
- CardFuncionario.jsx: Componente para exibir informações dos funcionários.
- CardList.jsx: Componente para exibir a lista de produtos.
- CardListFuncionario.js: Componente para exibir a lista de funcionários.
- CardProdutos.jsx: Componente para exibir informações dos produtos.
- Carrossel.jsx: Componente de carrossel de imagens.
- Headerb.jsx: Componente de cabeçalho com funcionalidade de busca.
- PageTitle.jsx: Componente para exibir o título da página.

### pages: Contém as páginas do Next.js.

### produtos:
- [id].jsx: Página para exibir os detalhes de um produto específico.
- index.jsx: Página inicial dos produtos.
- contato.jsx: Página para exibir a lista de funcionários.
- index.jsx: Página inicial.

### public: Contém os assets, como imagens de produtos, logo, funcionários, carrossel etc.

## services: Contém as funções de API.
- api.jsx: Funções para acessar os dados dos produtos no back-end.
- apiREQRES.jsx: Funções para acessar os dados dos funcionários na API ReqRes.

### styles: Contém os arquivos CSS.

# Funcionalidades
Gerenciamento de Produtos:

- GET /produtos: Retorna a lista de produtos.
- GET /produto/: Retorna os detalhes de um produto específico.
- GET /produto/nome/: Retorna a lista de produtos que correspondem ao termo de busca.
- POST /produto: Adiciona um novo produto.
- PUT /produto/: Atualiza um produto existente.
- DELETE /produto/: Deleta um produto.
Gerenciamento de Funcionários:

- GET /api/users: Retorna a lista de funcionários.
# Contribuição
Para contribuir com o projeto:

- Faça um fork do repositório.
- Crie uma nova branch para suas alterações:
- git checkout -b minha-nova-funcionalidade
- Faça commit das suas alterações: git commit -m "Adiciona nova funcionalidade"
- Envie para o repositório remoto: git push origin minha-nova-funcionalidade
- Abra um Pull Request no GitHub.
# Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
# Contato
- Rafael Ribas: Instrutor de Programação Web Front-End.
- João Paulo: Instrutor de Programação Web Back-End.
- Otávio Neto: Autor

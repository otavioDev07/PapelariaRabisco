from os import close
from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)


DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': 'senai',
    'database': 'papelaria'
}

def conecta_db():
    conexaoDB = mysql.connector.connect(**DB_CONFIG)
    cursorDB = conexaoDB.cursor()
    return conexaoDB, cursorDB

def close_db(conexaoDB, cursorDB):
    cursorDB.close()
    conexaoDB.close()

@app.route('/produto', methods=['POST'])
def cadastro():
   data = request.json
   try:
    nome = data['nome']
    descricao = data['descricao']
    preco = data['preco']
    quantidade = data['quantidade']

    if not all([nome, descricao, preco, quantidade]):
       raise KeyError({'erro':'Dados incompletos'})
   except KeyError:
    return jsonify({'erro': 'Todos os campos são obrigatórios'}), 400
   
   conexaoDB, cursorDB = conecta_db()
   try:
        comando = f"INSERT INTO produto (nome, descricao, preco, quantidade) VALUES (%s, %s, %s, %s)"
        cursorDB.execute(comando, (nome, descricao, preco, quantidade))
        conexaoDB.commit()
        return jsonify({'message':'Sucesso!'}),200
   
   except Error as erro:
        return jsonify({'erro':f'{erro}'}),500
   
   finally:
       close_db(conexaoDB, cursorDB)

@app.route('/produto', methods=['GET'])
def listar_produtos():
    conexaoDB, cursorDB = conecta_db()
    try:
        comando = f'SELECT * FROM produto'
        cursorDB.execute(comando)
        produtos = cursorDB.fetchall()    
        if not produtos:
            return jsonify({"ERROR":"Não há produtos!"}), 200
        produtosjson = []
        for produto in produtos:
            objectProd = {
            'idProduto':produto[0],
            'nome':produto[1],
            'descricao':produto[2],
            'preco':produto[3],
            'quantidade':produto[4]
            }
            produtosjson.append(objectProd)
        return jsonify(produtos),200

    except Error as erro:
        return jsonify({'erro':f'{erro}'}),500
    
    finally:
        close_db(conexaoDB, cursorDB)
    
@app.route('/produto/<int:idProduto>', methods=['GET'])
def get_produto(idProduto):
    conexaoDB, cursorDB = conecta_db()
    try:
        comando = f'SELECT * FROM produto WHERE idProduto = %s'
        cursorDB.execute(comando, (idProduto,))
        produto = cursorDB.fetchone()
        if not produto:
            return jsonify({"ERROR":"O produto requerido não existe!"}), 200
        produtojson = {
            'idProduto':produto[0],
            'nome':produto[1],
            'descricao':produto[2],
            'preco':produto[3],
            'quantidade':produto[4]
        }
        return jsonify(produtojson),200
    except Error as erro:
        return jsonify({'erro':f'{erro}'}),500
    
    finally:
        close_db(conexaoDB, cursorDB)


@app.route('/produto/nome/<string:nome_produto>', methods=['GET'])
def get_produto_por_nome(nome_produto):
    try:
        conexaoDB, cursorDB = conecta_db()
        comandoSQL = 'SELECT * FROM Produto WHERE nome LIKE %s'
        cursorDB.execute(comandoSQL, (f'%{nome_produto}%',))
        produtos = cursorDB.fetchall()

        if not produtos:
            return jsonify({'mensagem': 'Produto não encontrado'}), 200

        produtos_json = []
        for produto in produtos:
            produtojson = {
                "idproduto": produto[0],
                "nome": produto[1],
                "descricao": produto[2],
                "preco": produto[3],
                "quantidade": produto[4]
            }
            produtos_json.append(produtojson)

        return jsonify(produtos_json), 200
    except Error as erro:
        return jsonify({'erro': f'{erro}'}), 500
    finally:
        close_db(conexaoDB, cursorDB)


@app.route('/produto', methods=['PUT'])
def update_produto():
    data = request.json
    idProduto = data['idProduto']
    nome = data['nome']
    descricao = data['descricao']
    preco = data['preco']
    quantidade = data['quantidade']

    if not nome or not descricao or not preco or not quantidade:
        return jsonify({'erro': 'Todos os campos são obrigatórios'}), 400
    
    conexaoDB, cursorDB = conecta_db()
    comando = f'SELECT * FROM produto WHERE idProduto = %s'
    cursorDB.execute(comando, (idProduto,))
    result = cursorDB.fetchall()

    if not result:
        return jsonify({'ERROR':'Id informado não encontrado'})
    
    try:
        comando = f"UPDATE produto SET nome = '%s', descricao = '%s', preco = %s, quantidade = %s WHERE idProduto = %s"
        cursorDB.execute(comando, (nome, descricao, preco, quantidade, idProduto))
        conexaoDB.commit()
        return jsonify({'message':'Sucesso!'}),200
   
    except Error as erro:
        return jsonify({'erro':f'{erro}'}),500
    
    finally:
        close_db(conexaoDB, cursorDB)

@app.route('/produto', methods=['DELETE'])
def delete_produto():
    conexaoDB, cursorDB = conecta_db()
    data = request.json
    id = data['idProduto']
    comando = f'SELECT * FROM produto WHERE idProduto = %s'
    cursorDB.execute(comando, (id,))
    result = cursorDB.fetchall()

    if not result:
        return jsonify({'ERROR':'Id informado não encontrado'})
    
    try:
        comando = f'DELETE FROM produto WHERE idProduto = %s'
        cursorDB.execute(comando, (id,))
        conexaoDB.commit()
        return jsonify({'message':'Sucesso!'}),200
    except Error as erro:
        return jsonify({'erro':f'{erro}'}),500
    
    finally:
        close_db(conexaoDB, cursorDB)

#ERRO 404
@app.errorhandler(404)
def pagina_nao_encontrada(erro):
    return jsonify({'erro':'Página não encontrada!'}),404

#ERRO 405
@app.errorhandler(405)
def metodo_invalido(erro):
    return jsonify({'erro':'Método HTTP inválido'}), 405

#ERRO 500
@app.errorhandler(500)
def erro_servidor(erro):
    return jsonify({'erro':'Erro interno no servidor'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)







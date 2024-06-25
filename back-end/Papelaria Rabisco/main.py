import mysql.connector
from os import system

conexaoDB = mysql.connector.connect(
    host="localhost",
    user="root",
    password="senai",
    database="papelaria"
)
cursorDB = conexaoDB.cursor()

def get_id(id):
    try:
        if id.strip() == "":
            return print("Error: ID cannot be blank.")
        elif not id.isdigit():
            return print("Error: ID must be an integer.")
        else:
            id = int(id)
    except ValueError:
        return print("Error: The provided ID is not valid.")
    
    comando = f'SELECT * FROM produto WHERE idProduto = {id}'
    cursorDB = conexaoDB.cursor()
    cursorDB.execute(comando)
    result = cursorDB.fetchall()

    if not(result):
        return False
    else:
        return True
    
def print_header():
    system('cls')
    print("- " *20)
    print('*** STATIONERY RABISCO ***')
    print('- ' * 20)
    return

def register_prod():
    print_header()
    while True:
        try:
            name = input('Product name: ')
            if name.strip() == "":
                print("Error: Product name cannot be blank.")
            else:
                break
        except ValueError:
            print("Error: Invalid product name.")

    # Product description validation
    while True:
        try:
            desc = input('Product description: ')
            if desc.strip() == "":
                print("Error: Product description cannot be blank.")
            else:
                break
        except ValueError:
            print("Error: Invalid product description.")

    # Product price validation
    while True:
        try:
            price = float(input('Product price: '))
            if price <= 0:
                print("Error: Product price must be greater than 0.")
            else:
                break
        except ValueError:
            print("Error: Invalid product price.")

    # Product quantity validation
    while True:
        try:
            quant = int(input('Product quantity: '))
            if quant <= 0:
                print("Error: Product quantity must be greater than 0.")
            else:
                break
        except ValueError:
            print("Error: Invalid product quantity.")


    try:
        comando = f'INSERT INTO Produto (nome, descricao, preco, quantidade) VALUES ("{name}", "{desc}", {price}, {quant})'
        cursorDB = conexaoDB.cursor()
        cursorDB.execute(comando)
        conexaoDB.commit()
    except mysql.connector.Error as erro:
        return print(f'Something went wrong. {erro}')
    else:
        cursorDB.close()
        return print('Success')

def update_quant():
    print_header()
    id = input("ID to be changed: ")

    if get_id(id) == False:
        return print('id not found')
    else:
        while True:
            try:
                new_quant = int(input('New product quantity: '))
                if new_quant <= 0:
                    print("Error: The new product quantity must be greater than 0.")
                else:
                    break
            except ValueError:
                print("Error: The new product quantity is not valid.")

        try:
            comando = f'UPDATE produto SET quantidade = {new_quant} WHERE idProduto ={id}'
            cursorDB.execute(comando)
            conexaoDB.commit()
        except mysql.connector.Error as erro:
            return print(f'Something went wrong. {erro}')
        else:
            cursorDB.close()
            return print('Success')


def update_price():
    print_header()
    id = input("ID to be changed: ")

    if get_id(id) == False:
        return print('id not found')
    else:
        while True:
            try:
                new_price = float(input('New product price: '))
                if new_price <= 0:
                    print("Error: The new product price must be greater than 0.")
                else:
                    break
            except ValueError:
                print("Error: The new product price is not valid.")

        try:
            comando = f'UPDATE produto SET preco = {new_price} WHERE idProduto ={id}'
            cursorDB.execute(comando)
            conexaoDB.commit()
        except:
            return print('Something went wrong.')
        else:
            cursorDB.close()
            return print('Success')

def show_prod():
    print_header()
    comando = f'SELECT * FROM produto'
    cursorDB = conexaoDB.cursor()
    cursorDB.execute(comando)
    result = cursorDB.fetchall()
    
    if not result:
        print('Não há produtos cadastrados!')
    else:
        for item in result:
            print(f'ID: {item[0]} - Name: {item[1]} - Description: {item[2]} - Price: {item[3]} - Quantity: {item[4]}')
    cursorDB.close()
    return

def delete_prod():
    print_header()
    id = input("ID to be changed: ")
    if get_id(id) == False:
        return print('id not found')
    else:
        choice = input(f"ID: {id}. Are you sure about the exclusion? (Y/N) ").upper()
        cursorDB = conexaoDB.cursor()  
        
        if choice == "Y":
            comando = f"DELETE FROM produto WHERE idProduto = {id}"  
            try:
                cursorDB.execute(comando)
                conexaoDB.commit()
                print("Product deleted successfully")
            except mysql.connector.Error as erro:
                print(f"Something went wrong: {erro}")
        else:
            print("Exclusion canceled.")

    cursorDB.close()

while True:
    print_header()
    print('1 - Register product')
    print('2 - Change quantity')
    print('3 - Change price')
    print('4 - Show all products')
    print('5 - Delete a product')
    print('6 - Exit')

    option = input('Enter your option:')

    match(option):
        case '1':
            register_prod()
        case '2':
            update_quant()
        case '3':
            update_price()
        case '4':
            show_prod()
        case '5':
            delete_prod()
        case '6':
            break
        case _:
            print('Incorrect input!')

    system('pause')

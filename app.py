#from flask import Flask, request, jsonify
#from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Import the CORS extension
from flask import Flask, request, jsonify
#from flask_sqlalchemy import SQLAlchemy

#app = Flask(__name__)
#CORS(app)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blowvape.db'  # Use SQLite for simplicity
#db = SQLAlchemy(app)

# Define the Product model
#class Product(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    name = db.Column(db.String(100))
#    description = db.Column(db.Text)
#    price = db.Column(db.Float)
#    image_url = db.Column(db.String(200))

# Define API endpoints for product data
#@app.route('/app.py', methods=['GET'])
#def get_products():
#    products = Product.query.all()
#    product_list = [{'id': product.id, 'name': product.name, 'description': product.description, 'price': product.price, 'image_url': product.image_url} for product in products]
#    return jsonify(product_list)

#if __name__ == '__main__':
#    with app.app_context():
#        db.create_all()
#    app.run(debug=True)

#from flask import Flask, request, jsonify
#from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

# Configura la conexión a la base de datos MySQL
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'vapes'

# Inicializa la extensión MySQL
mysql = MySQL(app)

# Define API endpoints for product data
@app.route('/products', methods=['GET'])
def get_products():
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM vapes')
    products = cursor.fetchall()
    cursor.close()

    product_list = [{'id': product[0], 'name': product[1], 'description': product[2], 'price': product[3], 'image_url': product[4]} for product in products]
    return jsonify(product_list)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('registerEmail')
    password = data.get('registerPassword')

    cursor = mysql.connection.cursor()
    cursor.execute('INSERT INTO login (first_name, last_name, email, password) VALUES (%s, %s, %s, %s)',
                   (first_name, last_name, email, password))
    mysql.connection.commit()
    cursor.close()

    return jsonify({'message': 'Usuario registrado correctamente'})

# Ruta para el login de usuarios
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('loginEmail')
    password = data.get('loginPassword')

    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM login WHERE email = %s', (email,))
    user = cursor.fetchone()
    cursor.close()

    if user and user[1] == password:  # Suponiendo que el índice 3 es la columna de contraseñas
        return jsonify({'message': 'Inicio de sesión exitoso'})
    else:
        return jsonify({'message': 'Credenciales incorrectas'}), 401

if __name__ == '__main__':
    app.run(debug=True)


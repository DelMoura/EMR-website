from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse
from flask_mongoengine import MongoEngine
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
api = Api(app)

UserModel_ps = reqparse.RequestParser()

UserModel_ps.add_argument('email',
                          type=str,
                          required=True,
                          help="Ocorreu um erro no email"
                          )

UserModel_ps.add_argument('name',
                          type=str,
                          required=True,
                          help="Ocorreu um erro no nome",
                          )

UserModel_ps.add_argument('text',
                          type=str,
                          required=True,
                          help="Ocorreu um erro no texto",
                          )

app.config['MONGODB_SETTINGS'] = {
    "db": os.getenv("DB_NAME"),
    "host": os.getenv("HOST"),
    "port": int(os.getenv("PORT")),
    "username": os.getenv("USERNAME"),
    "password": os.getenv("PASSWORD")
}

db = MongoEngine(app)


class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world!!!!'}

class UserModel(db.Document):
    email = db.EmailField(required=True)
    name = db.StringField(required=True)
    text = db.StringField(required=True)

class User(Resource):
    def get(self):
        return jsonify(UserModel.objects())

class UserPost(Resource):
    def post(self):
        data = UserModel_ps.parse_args()
        UserModel(**data).save()

        

api.add_resource(HelloWorld, '/')
api.add_resource(User, '/user')
api.add_resource(UserPost, '/users')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")

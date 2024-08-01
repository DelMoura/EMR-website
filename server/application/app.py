from flask import jsonify
from flask_restful import Resource, reqparse
from .model import UserModel
from mongoengine import NotUniqueError


ps = reqparse.RequestParser()

ps.add_argument('email',
                          type=str,
                          required=True,
                          help="Ocorreu um erro no email"
                          )

ps.add_argument('name',
                          type=str,
                          required=True,
                          help="Ocorreu um erro no nome",
                          )

ps.add_argument('text',
                          type=str,
                          required=True,
                          help="Ocorreu um erro no texto",
                          )


class User(Resource):
    def get(self):
        return jsonify(UserModel.objects())

class CommentPost(Resource):
    def post(self):        
       try:
            data = ps.parse_args()
            UserModel(**data).save()  
       except NotUniqueError:
           return {"message":"CPF is invalid"}



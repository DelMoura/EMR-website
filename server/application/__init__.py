from flask import Flask, jsonify
from flask_restful import Api
from .db import init_db
from .app import User, CommentPost


def create_app(config):
    app = Flask(__name__)
    api = Api(app)
    app.config.from_object(config)
    init_db(app=app)

    api.add_resource(CommentPost, '/comment')
    api.add_resource(User, '/test')

    return app 

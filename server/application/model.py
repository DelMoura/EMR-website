from .db import db

class UserModel(db.Document):
    email = db.EmailField(required=True)
    name = db.StringField(required=True)
    text = db.StringField(required=True)
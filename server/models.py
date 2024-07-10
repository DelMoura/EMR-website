from config import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    user_name = db.Column(db.String(100), unique=False, nullable=False)
    email = db.Column(db.String(100), unique=False, nullable=False)
    text = db.Column(db.String(320), unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "userName": self.user_name,
            "email": self.email,
            "text": self.text,
        }

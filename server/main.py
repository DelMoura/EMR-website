from flask import request, jsonify
from config import app, db
from models import Contact

@app.route("/contacts", methods=["GET"])
def get_all_contacts():
    cont = Contact.query.all()
    json_alternative = list(map(lambda x: x.to_json(), cont))
    return jsonify({"contacts": json_alternative})

@app.route("/send_con", methods=["POST"])
def send_contact():
    user_name = request.json.get("userName")
    email = request.json.get("email")
    text = request.json.get("text")

    if not user_name or not email or not text:
        return (
            jsonify({"message": "Você deve colocar seu nome, email e utilizar a caixa de texto para enviar algum contato"}), 
            400,
        )
   
    new_cont = Contact(user_name=user_name, email=email, text=text)
    try:
        db.session.add(new_cont)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    return jsonify({"message": "Contato enviado"})


if __name__=="__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)    
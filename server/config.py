import os
from dotenv import load_dotenv

load_dotenv()


class configDev():

    MONGODB_SETTINGS = {
        "db": os.getenv("DB_NAME"),
        "host": os.getenv("HOST"),
        "port": int(os.getenv("PORT")),
        "username": os.getenv("USERNAME"),
        "password": os.getenv("PASSWORD")  
       }


class configProd():
    MONGO_USERNAME= os.getenv('MONGO_USERNAME')
    MONGO_PASSWORD= os.getenv('MONGO_PASSWORD')
    MONGO_PROJECT_NAME = os.getenv('MONGO_PROJECT_NAME')
    MONGODB_SETTINGS = {
        "db": os.getenv("DB_NAME"),
        "host": f'mongodb+srv://{MONGO_USERNAME}:{MONGO_PASSWORD}@clusteremr.fzcljaf.mongodb.net/?retryWrites=true&w=majority&appName={MONGO_PROJECT_NAME}'
        
       }
    



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




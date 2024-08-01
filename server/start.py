from application import create_app
import os

if os.getenv('FLASK_ENV') == 'development':
    app = create_app('config.configDev')
else:
    app = create_app('config.configProd')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
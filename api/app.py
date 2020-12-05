from flask import Flask, url_for, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
#app._static_folder = "C:/Users/Billy Walters/Documents/SIGMusic/live-editing-daw/api/static"
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    socketio.run(app)
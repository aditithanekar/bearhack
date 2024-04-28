from flask import Flask, jsonify # type: ignore
import pandas as pd

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Python!'}
    df = pd.read_csv('latlongdata.csv')

    df.head()

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
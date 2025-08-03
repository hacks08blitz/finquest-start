from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory storage (replace with database in production)
income_data = {
    'income': 3000  # Default value
}

@app.route('/api/set-income', methods=['POST'])
def set_income():
    data = request.json
    if 'income' not in data:
        return jsonify({'error': 'Income value is required'}), 400
    
    income = data['income']
    # Validate income range
    if not isinstance(income, (int, float)) or income < 500 or income > 5000:
        return jsonify({'error': 'Income must be between $500 and $5000'}), 400
    
    income_data['income'] = income
    return jsonify({'success': True, 'income': income})

@app.route('/api/get-income', methods=['GET'])
def get_income():
    return jsonify({'income': income_data['income']})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
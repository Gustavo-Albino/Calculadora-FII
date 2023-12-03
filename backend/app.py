from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from math import ceil

app = Flask(__name__)
CORS(app)

@app.route('/calcular-investimento', methods=['POST'])
def calcular_investimento():
    # Obter dados do formulário
    data = request.json
    valor_da_cota = data['valor_da_cota']
    rendimento_percentual = data['rendimento'] / 100  # Converter de porcentagem para decimal
    capital_inicial = data['capital_inicial']
    tempo = data['tempo']
    investimento_mensal = data['investimento_mensal']

    # Processamento
    montante = capital_inicial
    cotas = 0
    rows = []

    for i in range(1, tempo + 1):
        montante *= (1 + rendimento_percentual)  # Aplicar rendimento como multiplicador
        capital_investido = capital_inicial + investimento_mensal * (i - 1)
        cotas += capital_investido // valor_da_cota

        nova_linha = {
            'mes': ceil(i),
            'capital_investido': round(capital_investido, 2),
            'montante': round(montante, 2),
            'cotas': round(cotas, 2)
        }
        rows.append(nova_linha)
        montante += investimento_mensal

    # Retornar resultados como JSON
    result = {
        'resultado': rows,
        'cotas_final': round(cotas, 2)
    }

    return jsonify(result)

@app.route('/calcular-investimento', methods=['POST'])
def calcular_investimento_route():
    return calcular_investimento()

if __name__ == '__main__':
    app.run(debug=True)
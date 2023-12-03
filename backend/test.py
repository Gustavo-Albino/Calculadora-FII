import requests

# Defina os parâmetros conforme necessário
data = {
    "valor_da_cota": 10,
    "rendimento": 0.10,
    "capital_inicial": 100,
    "tempo": 12,
    "investimento_mensal": 100
}

# Faça a solicitação POST para a API
response = requests.post("http://localhost:5000/calcular-investimento", json=data)

# Exiba a resposta JSON
print(response.json())

import React, { useState } from 'react';
import axios from 'axios';
import { AppContainer, FormContainer, ResultsContainer } from './styles/styles.js'; // Importar estilos

function App() {
  const [formData, setFormData] = useState({
    valor_da_cota: 0,
    rendimento: 0,
    capital_inicial: 0,
    tempo: 0,
    investimento_mensal: 0
  });

  const [resultData, setResultData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) || 0 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/calcular-investimento', formData);
      setResultData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <AppContainer>
      <h1>Calculadora de Investimento</h1>
      <FormContainer onSubmit={handleSubmit}>
        <label>
          Valor da Cota:
          <input type="number" name="valor_da_cota" value={formData.valor_da_cota} onChange={handleChange} placeholder='0'/>
        </label>
        <label>
          Rendimento Mensal (%):
          <input type="number" name="rendimento" value={formData.rendimento} onChange={handleChange} placeholder='0'/>
        </label>
        <label>
          Capital Inicial:
          <input type="number" name="capital_inicial" value={formData.capital_inicial} onChange={handleChange} placeholder='0'/>
        </label>
        <label>
          Tempo (meses):
          <input type="number" name="tempo" value={formData.tempo} onChange={handleChange} placeholder='0'/>
        </label>
        <label>
          Investimento Mensal:
          <input type="number" name="investimento_mensal" value={formData.investimento_mensal} onChange={handleChange} placeholder='0'/>
        </label>
        <button type="submit">Calcular</button>
      </FormContainer>
      {resultData && (
        <ResultsContainer>
          <h2>Resultados:</h2>
          <table>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Capital Investido</th>
                <th>Montante</th>
                <th>Cotas</th>
              </tr>
            </thead>
            <tbody>
              {resultData.resultado.map((row) => (
                <tr key={row.mes}>
                  <td>{row.mes}</td>
                  <td>{row.capital_investido}</td>
                  <td>{row.montante}</td>
                  <td>{row.cotas}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Cotas Final: {resultData.cotas_final}</p>
        </ResultsContainer>
      )}
    </AppContainer>
  );
}

export default App;

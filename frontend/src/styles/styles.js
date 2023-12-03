// styles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #0C44ED, #bfe9ff);

  h1 {
    margin-bottom: 20px;
  }
`;

export const FormContainer = styled.form`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 10px;
    color: #222;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    color: #333;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #ff6e7f;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #e55666;
    }
  }
`;

export const ResultsContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding-bottom: 20px;

  h2 {
    color: #fff;
    margin-bottom: 10px;
  }

  table {
    width: 100%;
    margin-bottom: 10px;
    border-collapse: collapse;

    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      color: #fff;
    }
  }

  p {
    color: #fff;
  }
`;

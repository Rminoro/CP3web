
"use client"


import { useEffect, useState } from "react";

export default function TabelaDados() {
  const [queijos, setQueijos] = useState([]);
  const [inputId, setInputId] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/laticinios/${inputId}`);

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Resposta não contém JSON válido");
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setQueijos(data);
      } else if (typeof data === "object" && data !== null) {
        
        setQueijos([data]);
      } else {
        console.error("Erro: Os dados não estão no formato esperado.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error.message);
    }
  };

  const handleInputChange = (event) => {
    setInputId(event.target.value);
  };

  const handleFetchData = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Lista dos Queijos</h1>
      <div>
        <label htmlFor="inputId">ID do Queijo: </label>
        <input
          type="text"
          id="inputId"
          value={inputId}
          onChange={handleInputChange}
        />
        <button onClick={handleFetchData}>Buscar Queijo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Peso</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {queijos.map((item, indice) => (
            <tr key={indice}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.peso}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">Total de Queijos: {queijos.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

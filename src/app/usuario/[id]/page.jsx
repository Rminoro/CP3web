// use-client/UserTable.js
"use client";
import { useEffect, useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [inputId, setInputId] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/base/users/[id]`);

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Resposta não contém JSON válido");
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setUsers(data);
      } else if (typeof data === "object" && data !== null) {
        setUsers([data]);
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
      <h1>Lista de Usuários</h1>
      <div>
        <label htmlFor="inputId">Usuarios </label>
        <input
          type="text"
          id="inputId"
          value={inputId}
          onChange={handleInputChange}
        />
        <button onClick={handleFetchData}>Buscar Usuários</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            {/* <th>Telefone</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.senha}</td>
              {/* <td>{user.telefone}</td> */}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">Total de Usuários: {users.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

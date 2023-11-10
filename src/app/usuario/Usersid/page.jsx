// // use-client/UserTable.js
// "use client";
// import { useEffect, useState } from "react";

// export default function UserTable() {
//   const [users, setUsers] = useState([]);
//   const [inputId, setInputId] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/dados`);

//       if (!response.ok) {
//         throw new Error(`Erro HTTP! Status: ${response.status}`);
//       }

//       const contentType = response.headers.get("content-type");
//       if (!contentType || !contentType.includes("application/json")) {
//         throw new Error("Resposta não contém JSON válido");
//       }

//       const data = await response.json();

//       if (Array.isArray(data)) {
//         setUsers(data);
//       } else if (typeof data === "object" && data !== null) {
//         setUsers([data]);
//       } else {
//         console.error("Erro: Os dados não estão no formato esperado.");
//       }
//     } catch (error) {
//       console.error("Erro ao buscar dados:", error.message);
//     }
//   };

//   const handleInputChange = (event) => {
//     setInputId(event.target.value);
//   };

//   const handleFetchData = () => {
//     // Reset selectedUser when fetching new data
//     setSelectedUser(null);
//     fetchData();
//   };

//   const handleUserSelection = (userId) => {
//     const selected = users.flat().find((user) => user.id === userId);
//     setSelectedUser(selected);
//   };

//   return (
//     <div>
//       <h1>Lista de Usuários</h1>
//       <div>
//         <label htmlFor="inputId">ID do Usuário: </label>
//         <input
//           type="text"
//           id="inputId"
//           value={inputId}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleFetchData}>Buscar Usuário</button>
//       </div>

//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Nome</th>
//               <th>Email</th>
//               <th>Senha</th>
//               <th>Telefone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((userGroup, groupIndex) =>
//               userGroup.map((user, index) => (
//                 <tr key={index} onClick={() => handleUserSelection(user.id)}>
//                   <td>{user.id}</td>
//                   <td>{user.nome}</td>
//                   <td>{user.email}</td>
//                   <td>{user.senha}</td>
//                   <td>{user.telefone}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="5">Total de Usuários: {users.flat().length}</td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>

//       {selectedUser && (
//         <div>
//           <h2>Detalhes do Usuário Selecionado</h2>
//           <p>Id: {selectedUser.id}</p>
//           <p>Nome: {selectedUser.nome}</p>
//           <p>Email: {selectedUser.email}</p>
//           <p>Senha: {selectedUser.senha}</p>
//           <p>Telefone: {selectedUser.telefone}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// use-client/UserTable.js
"use client";
import { useEffect, useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [inputId, setInputId] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/usuarios/${inputId}`);

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
        <label htmlFor="inputId">ID do Usuário: </label>
        <input
          type="text"
          id="inputId"
          value={inputId}
          onChange={handleInputChange}
        />
        <button onClick={handleFetchData}>Buscar Usuário</button>
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
              <td>{user.nome}</td>
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

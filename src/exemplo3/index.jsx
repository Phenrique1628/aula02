import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState();

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0])
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
          <li>
            {usuario?.gender}
            </li>
          <li>
          {usuario?.name.first}
          </li>
          <li>
          {usuario?.name.title}
          </li>
          <li>
          {usuario?.name.last}
          </li>
      </ul>
    </>
  );
}

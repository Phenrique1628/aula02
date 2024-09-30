import { useEffect, useState } from "react";

export default function App() {
  
  const [fotos, setFotos] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resposta.json();
        setFotos(dados);
    }
    buscarUsuario();
  }, []); 

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {fotos.map(album => (
        <li key={album.id}>
        <h2>{album.title}</h2>
        <p>{album.albumId}</p>
        <img src={album.thumbnailurl} alt={album.title} width={100} />
         </li>
        ))}
      </ul>
    </>
  );
}

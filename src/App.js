import React, { useState } from 'react';
import './App.css';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://via.placeholder.com/150',
    
  ]);

  const adicionarImagem = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagens([...imagens, event.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1}`}
            style={{ margin: '5px' }}
          />
        ))}
      </div>
      <div>
        {imagens.length > 0 ? (
          <p>Imagens carregadas: {imagens.length}</p>
        ) : (
          <p>Nenhuma imagem carregada</p>
        )}
      </div>

      <input
        type="file"
        onChange={adicionarImagem}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
}

export default GaleriaDeImagens;


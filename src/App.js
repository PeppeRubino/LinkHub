import React, { useState } from 'react';
import './index.css'; // Assicurati che Tailwind sia configurato
import Quotes from './components/Quotes';
import SearchFiles from './components/SearchFiles';
import FileCategories from './components/FileCategories';
import PreviewModal from './components/PreviewModal';

function App() {
  const [previewFile, setPreviewFile] = useState(null);

  const handlePreview = (file) => {
    setPreviewFile(file);
  };

  const closePreview = () => {
    setPreviewFile(null);
  };

  return (
    <div className="bg-gray-100 p-4 w-screen">
      {/* Musica di sottofondo */}
      <audio autoPlay loop>
        <source src="/assets/audio/Menu theme KH.m4a" type="audio/m4a" />
        Il tuo browser non supporta l'elemento audio.
      </audio>
      {/* Titolo e Foto */}
      <div className="flex items-center justify-center p-4 bg-white shadow rounded">
        <h1 className="text-2xl font-bold">Link</h1>
        <img
          src="/assets/img/logo.png"
          alt="Logo"
          className="w-20 h-20 bg-gray-300 rounded"
        />
      </div>

      {/* Aforisma che cambia */}
      <div className="text-xl mt-6 h-64 bg-gradient-to-b from-white to-slate-300 shadow rounded flex justify-center items-center relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20  scale-x-[-1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/files/japanvideo quotes.webm" type="video/webm" />
            Il tuo browser non supporta l'elemento video.
          </video>
        </div>

        <div className="p-1 text-center text-slate-800">
          <Quotes />
        </div>
      </div>

      {/* Sezione Cerca */}
      <div className="mt-6 p-4 bg-white shadow rounded">
        <SearchFiles />
      </div>

      {/* Sezione File Categorie */}
      <div className="mt-6 mb-6 h-full">
        <FileCategories onPreview={handlePreview} />
      </div>

      {/* Modale di Anteprima */}
      <div className="z-50">
        <PreviewModal file={previewFile} onClose={closePreview} />
      </div>
      {/* Disclaimer */}
      <div className="footer p-2 bg-white shadow rounded text-center mt-32">
        <p className="text-sm text-gray-600">
          Tutte le informazioni presenti su questo sito sono di dominio pubblico
          e condivise per uso collettivo. Si prega di non modificarle. Per
          suggerimenti o proposte, potete contattarmi tramite la sezione
          <a
            href="mailto:peppe.rubino95@gmail.com"
            className="ml-1 text-blue-500 hover:underline"
          >
            Contatti
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './index.css'; // Assicurati che Tailwind sia configurato
import Calendar from './components/Calendar';
import InteractionTracker from './components/InteractionTracker';
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

  // Stati per contare le visite, i download e i link aperti
  const [visitCount, setVisitCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [linkCount, setLinkCount] = useState(0);

  // Carica i dati dal localStorage al caricamento della pagina
  useEffect(() => {
    const savedVisitCount = localStorage.getItem("visitCount");
    const savedDownloadCount = localStorage.getItem("downloadCount");
    const savedLinkCount = localStorage.getItem("linkCount");

    if (savedVisitCount) {
      setVisitCount(Number(savedVisitCount)); // Carica il valore salvato
    } else {
      setVisitCount(1); // La prima visita
    }

    if (savedDownloadCount) {
      setDownloadCount(Number(savedDownloadCount)); // Carica il valore salvato
    }

    if (savedLinkCount) {
      setLinkCount(Number(savedLinkCount)); // Carica il valore salvato
    }
  }, []);

  // Salva i dati nel localStorage ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem("visitCount", visitCount);
    localStorage.setItem("downloadCount", downloadCount);
    localStorage.setItem("linkCount", linkCount);
  }, [visitCount, downloadCount, linkCount]);

  // Funzione per gestire il download di un file
  const handleDownload = () => {
    setDownloadCount(prevCount => prevCount + 1);
  };

  // Funzione per gestire l'apertura di un link
  const handleLinkClick = (url) => {
    setLinkCount(prevCount => prevCount + 1);
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="bg-gray-100 px-5">
      {/* Header */}
      <div className="flex justify-between items-center p-10 bg-white shadow rounded w-full">
        {/* Calendar */}
        <div className="">
          <Calendar />
        </div>

        {/* Testo e Foto centrati */}
        <div className=" flex items-center justify-center">
          <h1 className="text-2xl font-bold">Link</h1>
          <img
            src="/assets/img/logo.png"
            alt="Logo"
            className="w-20 h-20 bg-gray-300 rounded"
          />
        </div>

             {/* InteractionTracker */}
      <div>
        <InteractionTracker 
          visitCount={visitCount}
          downloadCount={downloadCount}
          linkCount={linkCount} 
        />
      </div>
      </div>

      {/* Aforisma che cambia */}
      <div className="text-xl mt-6 h-64 bg-gradient-to-b from-white to-slate-300 shaunded flex justify-center items-center relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20  scale-x-[-1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/assets/files/japanvideo quotes.webm"
              type="video/webm"
            />
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
        <FileCategories 
          onPreviewFile={handlePreview} 
          onDownloadFile={handleDownload} 
          onLinkClick={handleLinkClick} 
        />
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

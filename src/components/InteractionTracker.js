import React, { useState, useEffect, useRef } from 'react';

const InteractionTracker = ({ visitCount, downloadCount, linkCount }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Riferimento per il div che contiene i dati
  const dataRef = useRef(null);

  // Funzione per gestire il clic fuori dal div (chiude il tracker)
  const handleClickOutside = (event) => {
    if (dataRef.current && !dataRef.current.contains(event.target)) {
      setIsVisible(false); // Nasconde i dati se clicchi fuori
      console.log("Cliccato fuori, chiudo il tracker");
    }
  };

  // Aggiungi il listener quando il componente è montato
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Rimuovi il listener quando il componente viene smontato
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Funzione per il clic sull'icona, che attiva/disattiva la visibilità
  const toggleVisibility = (event) => {
    event.stopPropagation(); // Impedisce la propagazione dell'evento al document
    setIsVisible((prevState) => {
      console.log("Visibilità prima:", prevState); // Log prima del cambiamento
      return !prevState;
    });
  };

  return (
    <div className="hidden sm:block relative opacity-90">
      {/* Icona per aprire i dati */}
      <img
        src="/assets/img/views.svg"  // Usa il percorso relativo alla cartella public
        alt="Visualizza statistiche"
        className="cursor-pointer"
        onClick={toggleVisibility}  // Gestisce il clic sull'icona
      />

      {/* Dati delle interazioni */}
      {isVisible && (
        <div ref={dataRef} className="p-4 bg-gray-100 rounded shadow-md mt-4 absolute right-24 -top-16 w-64 z-10">
          <h2 className="text-md font-semibold mb-2">Tracker delle Interazioni</h2>

          <div className="text-sm">
            <p><strong>Visite: </strong>{visitCount}</p>
            <p><strong>Download dei file: </strong>{downloadCount}</p>
            <p><strong>Link aperti: </strong>{linkCount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractionTracker;

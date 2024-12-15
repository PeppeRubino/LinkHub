import React, { useEffect, useState } from "react";

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Funzione per aggiornare la data ogni giorno
  const updateDate = () => {
    setCurrentDate(new Date());
  };

  // Impostiamo un intervallo per aggiornare la data ogni giorno
  useEffect(() => {
    const interval = setInterval(updateDate, 1000 * 60 * 60 * 24); // Aggiorna ogni 24 ore
    return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
  }, []);

  // Formattiamo la data per separare giorno, mese, anno
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  return (
    <div className="flex space-x-2 select-none ">
      {/* Giorno */}
      <div className="text-center w-8 h-8 bg-gray-300 shadow  opacity-80 flex items-center justify-center text-xl font-bold">
        {day}
      </div>

      {/* Mese */}
      <div className="text-center w-8 h-8 bg-gray-300 shadow opacity-80 flex items-center justify-center text-xl font-bold">
        {month}
      </div>

      {/* Anno */}
      <div className="text-center w-16 h-8 bg-gray-300 shadow opacity-80 flex items-center justify-center text-xl font-bold">
        {year}
      </div>
    </div>
  );
};

export default DateComponent;

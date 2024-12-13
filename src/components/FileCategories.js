import React from 'react';
import categories from './categories'; // Importa i dati

const FileCategories = ({ onPreview }) => {
  return (
    <div className="bg-slate-200 shadow rounded grid grid-cols-4 gap-3">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="px-2 flex flex-col justify-between items-center rounded min-h-full"
        >
          <h2 className="text-lg text-center text-white bg-slate-900 rounded-sm font-semibold mb-2 w-full">
            {category.name}
          </h2>
          <ul className="list-disc px-10 py-4 bg-slate-900 rounded-md w-full flex-grow flex flex-col justify-between">
            {category.files.length > 0 ? (
              category.files.map((file, fileIndex) => (
                <li
                  key={fileIndex}
                  className="text-white mt-5 hover:text-blue-600 hover:underline cursor-pointer"
                  onClick={() => {
                    if (file.name.startsWith("http://") || file.name.startsWith("https://")) {
                      // Apri direttamente il sito in una nuova finestra
                      window.open(file.name, "_blank", "noopener noreferrer");
                    } else {
                      // Altrimenti, passa il file al modale di anteprima
                      onPreview(file);
                    }
                  }}
                >
                  {file.explicitname}
                </li>
              ))
            ) : (
              <li className="text-white mt-5">Nessun file disponibile</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FileCategories;

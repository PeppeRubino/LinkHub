import React from 'react';
import categories from './categories'; // Importa i dati

const FileCategories = ({ onPreviewFile, onDownloadFile, onLinkClick }) => {
  return (
    <div className="bg-slate-200 shadow rounded sm:grid sm:grid-cols-4 sm:gap-3">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="px-2 flex flex-col justify-between items-center mt-5 rounded min-h-full"
        >
          <h2 className="text-lg text-center text-white bg-slate-900 rounded-sm font-semibold mb-2 w-full">
            {category.name}
          </h2>
          <ul className="list-disc px-8 py-4 bg-slate-900 rounded-md w-full flex-grow flex flex-col">
            {category.files.length > 0 ? (
              category.files.map((file, fileIndex) => (
                <li
                  key={fileIndex}
                  className="text-white sm:mt-3 hover:text-blue-600 cursor-pointer"
                  onClick={() => {
                    if (file.name.startsWith("http://") || file.name.startsWith("https://")) {
                      // Chiama la funzione per incrementare il contatore dei link aperti
                      onLinkClick(file.name);
                    } else {
                      // Altrimenti, passa il file al modale di anteprima e incrementa i download
                      onDownloadFile(); // Funzione per incrementare il contatore dei download
                      onPreviewFile(file); // Funzione per la visualizzazione del file
                    }
                  }}
                >
                  {file.explicitname} <span className="select-none text-sm text-gray-400">({file.dateAdded})</span>
                </li>
              ))
            ) : (
              <li className="text-white sm:mt-3">Nessun file disponibile</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FileCategories;

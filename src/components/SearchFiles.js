import React, { useState } from 'react';
import categories from './categories'; // Importa i dati

const SearchFiles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFiles, setFilteredFiles] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    // Se il termine di ricerca è vuoto, resettiamo i file filtrati
    if (query === "") {
      setFilteredFiles([]);
    } else {
      // Filtro dei file in base al termine di ricerca nei campi name ed explicitname
      const allFiles = categories.flatMap(category => category.files);
      const filtered = allFiles.filter(file =>
        file.name.toLowerCase().includes(query.toLowerCase()) ||
        file.explicitname.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFiles(filtered);
    }
  };

  const handleFileSelect = (file) => {
    if (file.name.startsWith("http")) {
      // Gestisci link web
      window.open(file.name, "_blank");
    } else {
      // Gestisci download dei file
      const link = document.createElement('a');
      link.href = `/assets/files/${file.name}`;
      link.download = file.name;
      link.click();
    }
  };

  return (
    <div className="p-4">
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        Cerca file:
      </label>
      <div className="flex justify-between">
        <input
          type="text"
          id="search"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Inserisci il nome del file o un termine correlato"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="mt-4">
        {/* Visualizza i file suggeriti in base al termine di ricerca */}
        {filteredFiles.length > 0 && (
          <ul className="list-disc p-4 bg-slate-100 rounded-md mt-2">
            {filteredFiles.map((file, index) => (
              <li
                key={index}
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                onClick={() => handleFileSelect(file)}
              >
                {file.explicitname}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchFiles;

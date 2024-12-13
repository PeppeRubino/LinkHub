import React from "react";

const PreviewModal = ({ file, onClose }) => {
  if (!file) return null;

  return (
    <div
      className="fixed w-screen h-screen top-0 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded shadow-lg max-w-3xl max-h-screen overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bottone per il download */}
        <a
          href={`/assets/files/${file.name}`}
          download={file.name}
          className="z-60 absolute top-1/2 left-1/2 text-center w-32 shadow-md bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-400 transition transform hover:translate-y-[-2px]"
        >
          Scarica
        </a>

        {/* Contenuto dell'anteprima */}
        {file.name.endsWith(".png") || file.name.endsWith(".jpg") ? (
          <img
            src={`/assets/files/${file.name}`}
            alt={file.explicitname}
            className="max-w-full max-h-full"
          />
        ) : file.name.endsWith(".pdf") ? (
          <iframe
            src={`/assets/files/${file.name}`}
            title={file.explicitname}
            className="h-screen"
          ></iframe>
        ) : file.name.endsWith(".mp4") ? (
          <video
            src={`/assets/files/${file.name}`}
            controls
            className="max-w-full max-h-full"
          ></video>
        ) : (
          <p className="text-center text-black">
            Anteprima non disponibile per questo file
          </p>
        )}
      </div>
    </div>
  );
};

export default PreviewModal;

import React from "react";

const PreviewModal = ({ file, onClose }) => {
  if (!file) return null;

  return (
    <div
      className="fixed w-screen h-screen top-5 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded shadow-lg max-w-3xl max-h-screen overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {file.name.endsWith(".png") || file.name.endsWith(".jpg") ? (
          <img
            src={`/assets/files/${file.name}`}
            alt={file.explicitname}
            className="max-w-full max-h-full z-50"
          />
        ) : file.name.endsWith(".pdf") ? (
          <iframe
            src={`/assets/files/${file.name}`}
            title={file.explicitname}
            className="h-screen z-50"
          ></iframe>
        ) : file.name.endsWith(".mp4") ? (
          <video
            src={`/assets/files/${file.name}`}
            controls
            className="max-w-full max-h-full z-50"
          ></video>
        ) : file.name.startWith(".https://") ? (
            <video
              src={`/assets/files/${file.name}`}
              controls
              className="max-w-full max-h-full"
            ></video>
          ) : 
        
        (
          <p className="text-center text-black z-50">
            Anteprima non disponibile per questo file
          </p>
        )}
      </div>
    </div>
  );
};

export default PreviewModal;

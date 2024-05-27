
import React, { useEffect, useState } from 'react';

const Base64PdfViewer = ({ base64String }) => {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    // Function to convert base64 to a Uint8Array
    const base64ToUint8Array = (base64) => {
      const raw = atob(base64);
      const uint8Array = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) {
        uint8Array[i] = raw.charCodeAt(i);
      }
      return uint8Array;
    };

    // Convert the base64 string to a Uint8Array
    const pdfData = base64ToUint8Array(base64String);

    // Create a Blob from the Uint8Array
    const blob = new Blob([pdfData], { type: 'application/pdf' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Set the URL as the state
    setPdfUrl(url);

    // Cleanup URL object when the component unmounts
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [base64String]);

  return (
    <div>
      <h1>Base64 PDF Viewer</h1>
      {pdfUrl ? (
        <iframe title="PDF Viewer" src={pdfUrl} width="100%" height="600px"></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Base64PdfViewer;
// components/QRCodeGenerator.js
import { useState } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrCodeUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={generateQRCode}
        style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}
      >
        Generate
      </button>
      {qrCodeUrl && (
        <div style={{ marginTop: '20px' }}>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;

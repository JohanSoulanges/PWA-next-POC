import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import adapter from 'webrtc-adapter';
import Modal from 'react-modal';

const GenerateComponent = (props) => {
  const [zoom, setZoom] = useState(1);
  const [videoStream, setVideoStream] = useState(null);

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => prevZoom - 0.1);
  };

  const handleScan = (data) => {
    console.log(data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  const openCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        zoom: { ideal: zoom },
        facingMode: 'environment',
      },
    });
    setVideoStream(stream);
  };

  return (
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <div>
        <button onClick={handleZoomIn} className='link'>
          Zoom +
        </button>
        <button onClick={handleZoomOut} className='link'>
          Zoom -
        </button>
        <button onClick={openCamera} className='link'>
          Ouvrir la caméra
        </button>
      </div>
      <video
        ref={(video) => videoStream && (video.srcObject = videoStream)}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default GenerateComponent;

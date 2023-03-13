import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import adapter from 'webrtc-adapter';
import Modal from 'react-modal';

const GenerateComponent = (props) => {
  const [data, setData] = useState('No result');
  const [isOpen, setIsOpen] = useState(false);
  const [getCode, setGetCode] = useState(false);
  const className = getCode ? 'camera none' : 'camera ';
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

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
        facingMode: 'environment',
        zoom: { ideal: zoom },
      },
    });
    setVideoStream(stream);
  };

  adapter.browserDetails.browser;
  adapter.browserDetails.version;

  return (
    <>
      <div className='container'>
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
        <a href='/' className='link'>
          return Home
        </a>
        <div className='pad'>
          <Modal
            isOpen={isOpen}
            onAfterOpen={() => setGetCode(true)}
            onAfterClose={() => setGetCode(false)}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            ariaHideApp={false}
          >
            <h1>Qr Code Content</h1>
            <p>{data}</p>
            <button className='link' onClick={() => setIsOpen(false)}>
              Close Modal
            </button>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default GenerateComponent;

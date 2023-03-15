import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import adapter from 'webrtc-adapter';
import Modal from 'react-modal';
import CryptoJS from 'crypto-js';

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
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    style: {
      with: '99vw',
      right: 'auto',
    }
  };

  // Decrypt
  function decrypt(string) {
    var bytes = CryptoJS.AES.decrypt(string, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }

  adapter.browserDetails.browser;
  adapter.browserDetails.version;

  return (
    <>
      <div className='container'>
        <QrReader
          className={className}
          constraints={{
            minAspectRatio: 1.333,
            minFrameRate: 30,
            height: 720,
            width: 1280,
            resizeMode: 'crop-and-scale',
            aspectRatio: { min: 1, max: 2 },
            facingMode: 'environment',
          }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              setIsOpen(true);
              console.log(result);
            }

            // if (!!error) {
            //   console.info(error);
            // }
          }}
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
            <p>Decrypt:{decrypt(data)}</p>
            <p>noDecrypt:{data}</p>
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

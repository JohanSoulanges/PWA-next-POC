import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import adapter from 'webrtc-adapter';
import Modal from 'react-modal';

const GenerateComponent = (props) => {
  const [data, setData] = useState('No result');
  const [isOpen, setIsOpen] = useState(false);
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

  adapter.browserDetails.browser;
  adapter.browserDetails.version;

  return (
    <>
      <div className='container'>
        <QrReader
          className='camera'
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
          //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will
          // open the front camera
          constraints={{
            minAspectRatio: 1.333,
            minFrameRate: 30,
            facingMode: 'environment',
          }}
        />
        <a href='/' className='link'>
          return Home
        </a>
        <div className='pad'>
          <Modal
            isOpen={isOpen}
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

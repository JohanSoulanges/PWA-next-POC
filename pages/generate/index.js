import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import CryptoJS from 'crypto-js';

const GenComponent = (props) => {
  const [value, setValue] = useState('No result');

    // Encrypt
    let ciphertext = CryptoJS.AES.encrypt(
      value,
      'secret key 123'
    ).toString();

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    console.log(originalText); // 'my message'

  return (
    <>
      <div
        style={{
          height: '50vh',
          margin: '0 auto',
          maxWidth: '100%',
          width: '100%',
        }}
      >
        <QRCode
          size={256}
          style={{ height: '50vh', maxWidth: '100%', width: '100%' }}
          value={ciphertext}
          viewBox={`0 0 256 256`}
        />
      </div>
      <form>
        <label for='value'>Value:</label>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id='value'
          name='value'
        />
      </form>
      <a href='/' className='link'>
        return Home
      </a>
    </>
  );
};

export default GenComponent;

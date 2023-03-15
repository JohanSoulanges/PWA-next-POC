import React, { useState } from 'react';
// import BarcodeScannerComponent from 'react-qr-barcode-scanner';

const GenerateComponent = (props) => {
  const [data, setData] = useState('Not Found');

  React.useLayoutEffect(() => {
    BarcodeScannerComponent.preload();
  }, []);

  return (
    <>
      {/* <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData('Not Found');
        }}
      /> */}
      <p>{data}</p>
      <a href='/' className='link'>
        return Home
      </a>
    </>
  );
};

export default GenerateComponent;

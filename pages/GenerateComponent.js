import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import adapter from "webrtc-adapter";
import styles from "@/styles/Home.module.css";

const GenerateComponent = (props) => {
  const [data, setData] = useState("No result");

  adapter.browserDetails.browser;
  adapter.browserDetails.version;

  return (
    <>
          <QrReader
            className={styles.QrCodeReader}
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
                console.log(result);
              }

              if (!!error) {
                // console.info(error);
              }
            }}
            //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will
            // open the front camera
            constraints={{
              minAspectRatio: 1.333,
              minFrameRate: 30,
              width: 1280,
              height: 720,
              facingMode: "environment",
            }}
          />
          <p className={styles.QrCodeResult}>{data}</p>
    </>
  );
};

export default GenerateComponent;

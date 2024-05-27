import React, { useState, useEffect } from 'react';
import { post } from "aws-amplify/api";

const CvInfo = () => {

  const [cvurl, setCvUrl] = useState("");

  const loadCvInfo = async (username, password) => {

    const { body } = await post({
      apiName: "kinetecocv6p1",
      path: "/cvinfo",
      options: {
        body: { "cvid": username, "password": password }, // Optional, JSON object or FormData
      }
    }).response;
    const data = await body.json();
    setCvUrl(data.signedUrl);
  }

  useEffect(() => {
    loadCvInfo("tharindu", "psw21");
  }, []);

  return (
    <div id="cvInfo">
      {cvurl ? (
        <iframe
          title='cv-viewer'
          src={cvurl}
          style={{ width: '100%', height: '100vh', border: 'none' }}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        // <p>{cvurl}</p>
          <div className={styles.authCodeDiv}>
            <h1 style={{ 'paddingBottom': '20px' }}>Authorization Code</h1>
            <form onSubmit={handleSubmit} style={{ 'paddingBottom': '10px' }}>
              <CodeInputBoxes length={4} onChange={handleCodeChange} onComplete={handleCodeComplete} />
            </form>
            <p className={styles.authCodePara}>A message with a authorization code has been sent to you. Enter the code to viewing {name}'s resume.</p>
            <a className={styles.underlineLink} href="" rel="test">Didn't get a authorization code?</a>
          </div>
      )}
    </div>
  );
}

export default CvInfo;
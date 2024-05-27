import React, { useState, useEffect } from 'react';
import { get, post } from "aws-amplify/api";

const CvInfo = () => {

  const [cvurl, setCvUrl] = useState("");

  const loadCvInfo = async () => {
    
    const { body } = await get({
      apiName:"kinetecocv6p1",
      path:"/cvinfo",
    }).response;
    const blob = await body.blob();
    const url = URL.createObjectURL(blob);
    console.log(blob);
    setCvUrl(url);
  }

  useEffect(() => {
    loadCvInfo();
  }, []);

  return (
    <div id="cvInfo">
        <p>{cvurl}</p>
        {cvurl ? (
          <iframe
            src={cvurl}
            style={{ width: '100%', height: '100vh', border: 'none' }}
            frameBorder="0"
            allowFullScreen
          />
        ) : (
            <p>{cvurl}</p>
        //   <div className={styles.authCodeDiv}>
        //     <h1 style={{ 'paddingBottom': '20px' }}>Authorization Code</h1>
        //     <form onSubmit={handleSubmit} style={{ 'paddingBottom': '10px' }}>
        //       <CodeInputBoxes length={4} onChange={handleCodeChange} onComplete={handleCodeComplete} />
        //     </form>
        //     <p className={styles.authCodePara}>A message with a authorization code has been sent to you. Enter the code to viewing {name}'s resume.</p>
        //     <a className={styles.underlineLink} href="" rel="test">Didn't get a authorization code?</a>
        //   </div>
        )}
    </div>
  );
}

export default CvInfo;
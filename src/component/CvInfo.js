import React, { useState } from 'react';
import { post } from "aws-amplify/api";
import CodeInputBoxes from './CodeInputBoxes';

const CvInfo = () => {

  const [cvurl, setCvUrl] = useState("");
  const [code, setCode] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  const name = "tharindu";

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleCodeComplete = (completeCode) => {
    setIsComplete(true);
    handleSubmit(completeCode);
  };

  const handleSubmit = async (event) => {
    try {
      const { body } = await post({
        apiName: "kinetecocv6p1",
        path: "/cvinfo",
        options: {
          body: { "cvid": name, "password": code },
        }
      }).response;
      const data = await body.json();
      setCvUrl(data.signedUrl);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

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
          <div className="authCodeDiv">
            <h1 style={{ 'paddingBottom': '20px' }}>Authorization Code</h1>
            <form onSubmit={handleSubmit} style={{ 'paddingBottom': '10px' }}>
              <CodeInputBoxes length={4} onChange={handleCodeChange} onComplete={handleCodeComplete} />
            </form>
            <p className="authCodePara">A message with a authorization code has been sent to you. Enter the code to viewing {name}'s resume.</p>
            <a className="underlineLink" href="" rel="test">Didn't get a authorization code?</a>
          </div>
      )}
    </div>
  );
}

export default CvInfo;
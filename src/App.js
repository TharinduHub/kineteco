import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Footer from './component/Footer';
import Guarantee from './component/Guarantee';
import Header from './component/Header';
import History from './component/History';
import People from './component/People';
import Products from './component/Products';
// import CvInfo from './component/CvInfo';
import CvInfoPSUrl from './component/CvInfoPSUrl';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <CvInfoPSUrl />
        {/* <CvInfo /> */}
        <History />
        <Products />
        <Guarantee />
        <People />
        <Footer />
      </div>
    );
  }
}

export default withAuthenticator(App);

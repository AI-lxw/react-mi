import React from 'react';
import './common/css/index.css'
import Head from './components/index-top'
import Banner from './components/banner'
import Catalogue from  './components/catalogue';
import New from './components/new';
import Activities from './components/activities';
import Everday from './components/everday';
import Goods from './components/goods';
import Navbar from './components/navbar';
import My from './components/my'

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Banner></Banner>
      <Catalogue></Catalogue>
      <New></New>
      <Activities></Activities>
      <Everday></Everday>
      <Goods></Goods>
      <Navbar></Navbar>
      <My></My>
    </div>
  );
}

export default App;

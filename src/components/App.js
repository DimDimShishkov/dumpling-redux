import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Menu from './Menu/Menu';
import NoPage from './NoPage';
import Slider from './Slider/Slider';

function App() {
  const [pageBlock, setPageBlock] = useState(false);

  const handlePageState = () => {
    setPageBlock(!pageBlock)
  }

  return (
    <div className={`page ${pageBlock && 'page_active'}`}>
      <Header pageState={handlePageState}/>
      <Routes>
        <Route exact path="/dumpling-redux" element={<><Main /> <Footer /></>}></Route>
        <Route path="/dumpling-redux/about-us" element={<><NoPage /></>}></Route>
        <Route path="/dumpling-redux/menu" element={<><Menu /></>}></Route>
        <Route path="/dumpling-redux/gallery" element={<><Slider /></>}></Route>
        <Route path="/dumpling-redux/contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Contacts from './Contacts';
import Menu from './Menu';
import { BrowserRouter, Redirect, Route, Routes, useHistory, useLocation } from 'react-router-dom';
import NoPage from './NoPage';

function App() {
  const [pageBlock, setPageBlock] = useState(false);


  return (
    <div className={`page ${pageBlock && 'page_active'}`}>
      <Header />
      <Routes>
        <Route exact path="/" element={<><Main /> <Footer /></>}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/menu" element={<><Menu /> <Footer /></>}></Route>
        <Route path="/about-us" element={<><NoPage /></>}></Route>
        <Route path="/our-team" element={<><NoPage /></>}></Route>
        <Route path="/gallery" element={<><NoPage /></>}></Route>
      </Routes>

    </div>
  );
}

export default App;

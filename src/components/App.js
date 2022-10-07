import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Contacts from './Contacts';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import NoPage from './NoPage';

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
        <Route path="/dumpling-redux/contacts" element={<Contacts />}></Route>
        <Route path="/dumpling-redux/menu" element={<><Menu /></>}></Route>
        <Route path="/dumpling-redux/about-us" element={<><NoPage /></>}></Route>
        <Route path="/dumpling-redux/gallery" element={<><NoPage /></>}></Route>
      </Routes>

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body';
import { Context } from './contexts/modal';

function App() {
  const [showIcon, setShowIcon] = useState(false)
  const changeStatus = () => {
    setShowIcon(!showIcon)
  }
  return (
    <Context.Provider
      value={{
        showIcon:showIcon,
        changeStatus:changeStatus
      }}
    >
      <div className="App">
        <Header />
        <Body checkStatus={showIcon} />
      </div>
    </Context.Provider>
  );
}

export default App;

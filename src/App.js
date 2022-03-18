import React from 'react';
import './App.css';
import { MainScreen } from './MainScreen';
import { Route, Routes } from 'react-router-dom';
import { DataDetail } from './DetailScreen';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<MainScreen />} >
        <Route path="detail/:id" element={<DataDetail />} />
      </Route>
    </Routes>
  );
}

export default App;

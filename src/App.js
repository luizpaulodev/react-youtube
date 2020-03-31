import React from 'react';
import './App.css';

import SearchBar from './Componentes/SearchBar';
import VideoList from './Componentes/VideoList';
import VideoPlayer from './Componentes/VideoPlayer';

function App() {
  return (
    <div className="container">
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </div>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';

import SearchBar from './Componentes/SearchBar';
import VideoList from './Componentes/VideoList';
import VideoPlayer from './Componentes/VideoPlayer';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar/>
        <VideoList />
        <VideoPlayer />
      </div>
    </Provider>
  );
}

export default App;

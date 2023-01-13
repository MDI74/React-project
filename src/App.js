import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Navigation />
        <main className='main'>
          <Routes>
            <Route path='dialogs' element ={<Dialogs />}/>
            <Route path='profile' element ={<Profile />}/>
            <Route path='news' element ={<News />}/>
            <Route path='music' element ={<Music />}/>
            <Route path='settings' element ={<Settings />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;

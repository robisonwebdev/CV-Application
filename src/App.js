import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './styles/App.css';

const App = () => {
  return (
    <div id='App'>
      <Header />
      <Main />
      <Footer
        address='https://github.com/robisonwebdev'
        name='David Robison'
        text='Developed by '
      />
    </div>
  );
};

export default App;
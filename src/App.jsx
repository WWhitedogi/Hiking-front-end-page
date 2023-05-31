import './App.css';
import Footer from './components/Footer'
import Header from './components/Header';
import Main from './components/Main'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  const goHome = (event) => {
    event.preventDefault();
    setPage('home');
  }

  return (
    <div className="app">
      <a href="" className="skip-to-main-content-link" onClick={e => goHome(e)}>Skip to main content</a>
      <Header setPage={setPage}></Header>
      <Main page={page}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

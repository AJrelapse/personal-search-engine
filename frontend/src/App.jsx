import { useState } from 'react';
import './App.css';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App-Header'>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
};

export default App;

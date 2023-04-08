import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import data from './data/stays.json';
import { useState } from 'react';

function App() {
  const [selectedStays, setSelectedStays] = useState(data);

  const handleSelectStays = (stays) => {
    setSelectedStays(stays)
    console.log(stays)
    console.log('updated')
    console.log(selectedStays)
  }

  return (
    <div className="App">
      <Navbar 
        selectedStays={selectedStays} handleSelectStays={handleSelectStays} 
      />
      <Home 
        selectedStays={selectedStays} handleSelectStays={handleSelectStays}
      />
      <Footer />
    </div>
  );
}

export default App;

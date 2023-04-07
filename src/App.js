import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import data from './data/stays.json';
import { useState } from 'react';

function App() {
  const [stays, setStays] = useState(data);
  const [selectedStay, setSelectedStay] = useState(null);
  const [searchOption, setSearchOption] = useState(null);
  
  return (
    <div className="App">
      <Navbar 
        selectedStay={selectedStay} setSelectedStay={setSelectedStay} 
        searchOption={searchOption} setSearchOption={setSearchOption}
      />
      <Home 
        stays={stays} 
        selectedStay={selectedStay} setSelectedStay={setSelectedStay}
      />
      <Footer />
    </div>
  );
}

export default App;

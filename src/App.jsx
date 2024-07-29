import React, { useState } from 'react';
import Home from './assets/componens/Homes';
import Details from './assets/componens/Details';
import './App.css';

function App() {
  const [currentPage, setPage] = useState('home');
  const [selectedProductId, setProduct] = useState(null);

  const navigateToDetails = (id) => {
    setProduct(id);
    setPage('details');
  };

  const navigateToHome = () => {
    setPage('home');
  };

  return (
    <div>
      {currentPage === 'home' && <Home navigateToDetails={navigateToDetails} />}
      {currentPage === 'details' && <Details productId={selectedProductId} navigateToHome={navigateToHome} />}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Holidays from './Holidays';
import Forex from './Forex';
import Hotels from './Hotels';
import Flights from './Flights';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('holiday');

  const renderPage = () => {
    switch (currentPage) {
      case 'holiday':
        return <div><Holidays/></div>;
      case 'forex':
        return <div><Forex/></div>;
      case 'hotels':
        return <div><Hotels/></div>;
      case 'flights':
        return <div><Flights/></div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://www.thomascook.in/images/logo.jpg" alt="Logo" style={{ width: '81%', height: '70px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${currentPage === 'holiday' && 'active'}`}>
                <button className="nav-link" onClick={() => setCurrentPage('holiday')}>
                  Holiday
                </button>
              </li>
              <li className={`nav-item ${currentPage === 'forex' && 'active'}`}>
                <button className="nav-link" onClick={() => setCurrentPage('forex')}>
                  Forex
                </button>
              </li>
              <li className={`nav-item ${currentPage === 'hotels' && 'active'}`}>
                <button className="nav-link" onClick={() => setCurrentPage('hotels')}>
                  Hotels
                </button>
              </li>
              <li className={`nav-item ${currentPage === 'flights' && 'active'}`}>
                <button className="nav-link" onClick={() => setCurrentPage('flights')} >
                  Flights
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Offers And Other services" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div>{renderPage()}</div>
    </div>
  );
};

export default Navbar;

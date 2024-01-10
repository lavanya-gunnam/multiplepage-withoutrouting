import React from "react";
import Footer from './Footer';
import Endpage from './Endpage';

function Hotels() {
  return (
    <div className="App">
      <div className="card bg-dark text-white">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww"
          style={{ maxWidth: '100%', height: '300px' }}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay text-center">
          <h5 className="card-title"><strong>Booking Hotels</strong></h5>
          <p className="card-text text-primary">Online Hotel Bookings made simpler than ever with Thomas Cook.</p>
        </div>
      </div>

      <div class="container mt-4 d-flex justify-content-center align-items-center">
  <form style={{ width: '50%' }}>
    <div className="form-group col-md-6">
      <label htmlFor="name">Name:</label>
      <input type="text" className="form-control" id="name" placeholder="Enter your name" />
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="check-in">Check-in date:</label>
        <input type="date" className="form-control" id="check-in" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="check-out">Check-out date:</label>
        <input type="date" className="form-control" id="check-out" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary mt-2">Submit</button>
  </form>
</div>


      <Footer />
      <Endpage />
    </div>
  );
}

export default Hotels;

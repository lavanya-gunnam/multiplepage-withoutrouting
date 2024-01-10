import React from "react";
import Paper from "./Paper";
import Endpage from './Endpage';
function Flights() {
  
    const headingStyle = {
        color: "#336699", // Replace "blue" with your desired color
        textAlign: "center",
      };
    return (
      <div className="App"> 
      
      <div class="card text-bg-dark">
  <img src="https://w7.pngwing.com/pngs/823/324/png-transparent-package-tour-travel-agent-flight-tour-operator-travel-city-computer-wallpaper-world.png"style={{ maxWidth: '100%', height: '300px' }} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    
    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
<div class="container">
<form style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black' }}>
 
<h2>Flight Booking</h2>
     
    
      <input type="text" id="departure" placeholder="Departure" name="departure" required/>

    
      <input type="text" id="destination" placeholder="Destination" name="destination" required/>

    
      <input type="date" id="departureDate" placeholder="Date" name="departureDate" required/>

      <button type="button" class="btn btn-primary ms-2">Submit</button>
    </form>
</div>
  </div>
</div>
     
   <div class="container mt-3">
   <h3>Offers</h3>
    <div class ="row">
        <div class ="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center ">
        <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Special Offer for  Axis Bank Customers</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
    <p class="card-text">These offers are valid for Axis Bank Customers booking any of the above listed products on www.thomascook.in<br />
Discount would be processed on entering valid promo code.<br /> The amount of discount would be automatically calculated based on the promo code used.</p>
    <a href="#" class="card-link">Know more</a>
   
  </div>
</div>
        </div>
        <div class ="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
        <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Special Offer for HDFC Bank Customer</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
    <p class="card-text">These offers are valid for HDFC Bank Customers booking any of the above listed products on www.thomascook.in<br />
Discount would be processed on entering valid promo code.<br /> The amount of discount would be automatically calculated based on the promo code used.</p>
    <a href="#" class="card-link">Know more</a>
   
  </div>
</div>
        </div>
        <div class ="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
        <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Special offer forCanara Bank Customer</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
    <p class="card-text">These offers are valid for Canra Bank Customers booking any of the above listed products on www.thomascook.in<br />
Discount would be processed on entering valid promo code.<br /> The amount of discount would be automatically calculated based on the promo code used.</p>
    <a href="#" class="card-link">Know more</a>

  </div>
  
</div>
        </div>
        
    </div>
    </div>   
       
    <div>
        </div>  
        <div class="container mt-3">
        <h2 style={headingStyle}>Book International and Domestic Flight Tickets from the Comfort of your home</h2>
    
    <div class="text-center mt-2">
            "There has been a significant spike in the number of Indian flyers. Owing to the reach of the internet, people are becoming aware of the various global tourist locations, and the internet has also made flight ticket booking child’s play. Forget the hassle of going to your travel dealer; you can"
            <span class="read-more">
                "...."
                <a href="#"class="more-link">read more</a>
            </span>
        </div>
</div>
<Paper/>
      <Endpage/>
       </div>
    );
  }
  
  export default Flights ;
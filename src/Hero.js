import React from "react";


function Hero() {
  return (
    <div className="App">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.thomascook.in/images/home-page-banners/2023/nov/Australia-banner-1920-545-Rev.jpg" class="d-block w-100" style={{ width: '1920px', height: '300px' }} />
    </div>
    <div class="carousel-item">
      <img src="https://www.thomascook.in/images/home-page-banners/2023/dec/spiritual-Wb-banner-1920-545.jpg" class="d-block w-100"style={{ width: '1920px', height: '300px' }}/>
    </div>
    <div class="carousel-item">
      <img src="https://www.thomascook.in/images/home-page-banners/2023/dec/northern-lights-1920x545.jpg" class="d-block w-100"style={{ width: '1920px', height: '300px' }} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="holiday-search">
  <div class="container">
    <h2 class="iwantholiday text-center">I want to Holiday in and around..</h2>
    <div class="col-md-12 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
    <form class="row g-3 d-flex align-items-center justify-content-center">
  
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Enter your Destination"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary ">Submit</button>
  </div>
</form>
</div>
    {/* <div className="container mt-4">
    <div class="row justify-content-center ms-4">
      <div class="col-md-4">
        <div class="holiday-search-form">
          <form class="row g-3">
            <div class="col-auto">
            <input class="form-control wide-input" type="text" placeholder=" Enter Destination " aria-label="Disabled input example" disabled/>
             </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary ms-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> */}
</div>
    </div>
    </div>
  );
}

export default Hero ;

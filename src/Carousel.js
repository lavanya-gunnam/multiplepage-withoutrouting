import React from "react";

function Carousel() {
  return (
    <div className="App">
     <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner mt-2">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="https://www.thomascook.in/images/home-page-banners/2023/dec/rio-1920x600.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://www.thomascook.in/images/home-page-banners/2023/dec/Jungle-Safari-Big-Banner1.jpg" class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  );
}

export default Carousel;

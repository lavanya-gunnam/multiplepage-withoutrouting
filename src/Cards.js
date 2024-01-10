import React from "react";

function Cards() {
  return (
    <div className="App">
      <div className="text-center mt-2">
        <p>
          "Holiday is the first thing that comes to mind when we think of
          taking a break from the monotony of life. A list of packages is shown
          below....&"
        </p>
        <span className="read-more">
          "...."
          <a href="#" className="more-link">
            read more
          </a>
        </span>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-10">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Honeymoon-Tile-Banner1.jpg"
                className="img-fluid"
                alt="Honeymoon"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-10">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Thailand-Tile-Banner.jpg"
                className="img-fluid"
                alt="Thailand"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-10">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Singapore-Tile-Banner.jpg"
                className="img-fluid"
                alt="Singapore"
              />
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-20">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Turkey-Tile-Banner.jpg"
                className="img-fluid"
                alt="Turkey"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-20">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Hong-Kong-Tile-Banner.jpg"
                className="img-fluid"
                alt="Hong Kong"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-20">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Hong-Kong-Tile-Banner.jpg"
                className="img-fluid"
                alt="Hong Kong"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

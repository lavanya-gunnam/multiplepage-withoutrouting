import React from "react";
import { FaFacebook, FaYoutubeSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

function Endpage() {
  const iconStyle = { marginRight: '10px' };
  return (
    <div class =" box ">
    <div className="footer text-center mt-3">
      <div className="footer-body" style={{ backgroundColor: '#808080', color: '#fff' }}>
        <div className="footer-header">
          {/* <div className="row">
            <div className="col-md-2 col-sm-6 mb-2">
              +9145378992
              <br />
              <span style={{ fontSize: '0.8em' }}>(Tool-free)</span>
            </div>
            <div className="col-md-8 col-sm-12"></div>
            <div className="col-md-2 col-sm-6">
              Email:
              <br />
              <span style={{ fontSize: '0.8em' }}>Thomas Cook India@gmail.com</span>
            </div>
          </div> */}
        </div>
        <div className="container mt-2">
          {/* <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div
                className="border text-center p-2"
                style={{ backgroundColor: '#fff', color: '#000' }}
              >
                ABOUT THOMAS COOK INDIA
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div
                className="border text-center p-2"
                style={{ backgroundColor: '#fff', color: '#000' }}
              >
                INTERNATIONAL HOLIDAYS
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div
                className="border text-center p-2"
                style={{ backgroundColor: '#fff', color: '#000' }}
              >
                INDIAN HOLIDAYS
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div
                className="border text-center p-2"
                style={{ backgroundColor: '#fff', color: '#000' }}
              >
                TRAVEL BLOGS
              </div>
            </div>
          </div> */}
        </div>
        <h5 className="footer-title mt-2">Follow Us</h5>
        <p className="footer-text">
          <FaFacebook className="icon" style={iconStyle}  />
          <FaYoutubeSquare className="icon" style={iconStyle}  />
          <FaInstagram className="icon" style={iconStyle}  />
          <FaLinkedin className="icon" style={iconStyle}  />
        </p>
        <a href="#" className="btn btn-primary mb-2">
          Thomas Cook
        </a>
      </div>
      <div className="footer-footer" style={{ backgroundColor: '#333', color: '#808080' }}>
        Copyright © 2021-22 Thomascook.in. All Rights Reserved.
      </div>
    </div>
    </div>
  );
}

export default Endpage;

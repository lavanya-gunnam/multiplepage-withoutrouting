import React from "react";
function Footer() {
    const headingStyle = {
        color: "#336699", // Replace "blue" with your desired color
        textAlign: "center",
      };
    return (
      <div className="App"> 
    <div class="container">
    <h2 style={headingStyle}>Tours and Travel Agency-Thomas Cook India</h2>
    </div>
    <div class="text-center mt-2">
            "Holiday is the first thing that comes to mind when we think of taking a break from the monotony of life.A lsit of packages is shown below....&"
            <span class="read-more">
                "...."
                <a href="#"class="more-link">read more</a>
            </span>
        </div>
       </div>
    );
  }
  
  export default Footer ;
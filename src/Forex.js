import React from "react";

import Cards from './Cards';
import Footer from './Footer';
import Endpage from './Endpage';
function Forex() {
  

    return (
      <div className="App"> 
      <div class="card text-bg-dark">
  <img src="https://static.vecteezy.com/system/resources/previews/011/301/101/original/global-currency-exchange-foreign-currency-on-globe-with-network-connecting-digital-finance-and-banking-trading-with-secure-innovation-technology-in-space-futuristic-background-vector.jpg"style={{ maxWidth: '100%', height: '300px' }} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
   
  </div>
</div>
 
      <Cards/>
      
      <Footer/>
      <Endpage/> 
      


       </div>
    );
  }
  
  export default Forex ;
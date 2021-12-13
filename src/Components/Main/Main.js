import React, { Component } from 'react'
import "./Main.css";
import Popular from '../Popular/Popular';
import Home from '../Home/Home';
import Offers from '../Offers/Offers';
import OnLine from '../OnLine/OnLine';
import Footer from '../Footer/Footer';
import Pricing from '../Pricing/Pricing';
export class Main extends Component {
    render() {
        return (
            <div>
                

  

      <main id="Main">
        <Home/>
        <Popular/>
        <Offers/>
        <OnLine/>
        <Pricing/>

      
      


      
          </main>{/* <!-- End #main --> */}
<Footer/>
  {/* <Footer/> */}

           {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}

  

            </div>
        )
    }
}

export default Main

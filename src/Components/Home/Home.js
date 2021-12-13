import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                {/* <!-- ======= Hero Section ======= --> */}
                <section id="hero" className="d-flex align-items-center">

                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                <div className="row">
                    <div className="col-md-5">
                    <h1>Bettter digital experience with ECoding</h1>
                    <h2>Build skills with ECoding, certificates, and degrees online from world-class universities and companies.</h2>
                    <a href="#hero" class="btn-get-started scrollto">Get Started</a>                  
                     </div>
                </div>
                </div>

                </section>{/* <!-- End Hero --> */}
            </div>
        )
    }
}

export default Home

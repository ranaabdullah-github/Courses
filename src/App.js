import React, { Component } from 'react'
import ReactDOM from 'react-dom';  
import { BrowserRouter, Route,Switch,Link, BrowserRouter as Router } from 'react-router-dom'  
import Main from './Components/Main/Main';
import AllCourses from './Components/AllCourses/AllCourses';
import Det from './Components/Det/Det';
import Test from './Components/Test/Test';





export class App extends Component {
//   constructor(props) {
//     super(props);
 
//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//      collapsed: true
//     };
//    }
 
//   toggleNavbar() {
//    this.setState({
//     collapsed: !this.state.collapsed
//    });
//  }

  render() {
    
    return (
    
      
      <BrowserRouter>
         {/* <!-- ======= Header ======= --> */}

        
         <header id="header" class="fixed-top d-flex align-items-center  header-scrolled">
          <div class="container d-flex align-items-center">
            <h1 class="logo me-auto"><a href="#hero">ECoding<span>.</span></a></h1>
              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><Link class="nav-link scrollto active" to="/">Home</Link></li>
                  <li><a class="nav-link scrollto" href="#Popular">Popular</a></li>
                  <li><a class="nav-link scrollto" href="#Offers">Offers</a></li>
                  <li><a class="nav-link scrollto" href="#OnLine">OnLine</a></li>
                  <li><Link to="/AllCourses">Courses</Link></li>
                  {/* <li><Link to="/test">Test</Link></li> */}
                  {/* <li><Link to="/Details">Details</Link></li> */}

                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav>
              <Link to="#about" class="get-started-btn scrollto">Get Started</Link>
            </div>
          </header>
          
            <Switch>
              <Route path="/" component="Main" exact>
                <Main/>
              </Route>
              <Route path="/AllCourses" component="AllCourses" exact>
                <AllCourses/>
              </Route>
              {/* <Route path="/details/:id" exact component={Details} /> */}
              <Route path="/AllCourses/:details" component={Det} exact>
              {/* <Route path="/AllCourses" component={Det} exact>  */}
                 {/* <AllCourses idCource={id}/> */}
              </Route>
              {/* <Route path="/Det" component={Det} exact>
                <Det/>
              </Route> */}
              {/* <Route path="/Details/:catId" component={Details} exact>
                <Details/>
              </Route> */}
              {/* <Route name="ideas" path="/:testvalue" handler={Details} >
              {/* <Route path="/:id" component={Details} exact> 
                <Details/>
              </Route> */}
          </Switch> 
        
      </BrowserRouter>
    )
  }
}

export default App

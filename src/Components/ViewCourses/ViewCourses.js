import React, { Component } from 'react'
import axios from 'axios';
import "./ViewCourses.css";
import Main from '../Main/Main';
import CourseDetails from '../CourseDetails/CourseDetails';
import Footer from '../Footer/Footer';
import { Link  } from 'react-router-dom'   
import Test from '../Test/Test';
// import { useHistory } from "react-router-dom";
export class ViewCourses extends Component {
    
    state={
        courses:[]
    }
    componentDidMount(){
        /////get json file for menu
        axios.get("Data/CourcesInfo.json")
        .then(resp=>{
            this.setState({courses: resp.data.courses});
        })
    }
    viewDet(){
        <CourseDetails/>
    }
    btnClick= function () {
        this.router.navigateByUrl('/Main');
        };
    render() {
    
        const {courses}=this.state;
        const coursesList=courses.map((course)=>{
            return(
                <div class="col-md-3 entries">

                            <article class="entry" key={course.id}>

                                <div class="entry-img">
                                    <img src={course.image} alt="" class="img-fluid"/>
                                </div>

                                <h6 class="entry-title">
                                    <a href="#">{course.name}</a>
                                </h6>

                                <div class="entry-meta">
                                    <ul>
                                    <li class="d-flex align-items-center"><i class="bi bi-cash-coin"></i><a href="blog-single.html">{course.price}</a></li>
                                    <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">{course.comments}</a></li>
                                    <li class="d-flex align-items-center"><i class="bi bi-eye"></i> <a href="blog-single.html">{course.views}</a></li>
                                    </ul>
                                </div>

                                <div class="entry-content">
                                    <div class="read-more">
                                    <Link to={'/AllCourses/'+course.id}>Details</Link>
                                   {/* <a href={'/Det'}>Details</a> */}
                                       {/* <Link to={newTo}> </Link> */}
                                        {/* Link to="ideas" params={{ testvalue: "hello" }}>Create Idea</Link> */}
                                    {/* <a href="#" onClick='/Details'>Read More</a> */}
                                    {/* <Link  to={`/Details/${variable1}`}>Read More</Link >  */}
                                    {/* <Link  to={`/Details`}>Read More</Link > */}
                                    </div>
                                </div>

                            </article>
                        </div>
               
               )
            });///end map 

        return (
            <div>
                <main>
                {/* <!-- ======= course Section ======= --> */}
                    <section id="course" className="course">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            {coursesList}
                        </div>
                    </div>
                    </section>

                </main>
                <Footer/>
            </div>
        )
    }
}

export default ViewCourses

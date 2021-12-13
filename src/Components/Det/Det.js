import React, { Component } from 'react'
import "./Det.css";
import { getById } from '../Task/Task';
import { useParams } from "react-router-dom";
import Footer from '../Footer/Footer';

function Det () {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       course: {}
         
    //     };
         
    //     };

    //   componentDidMount() {
    //     const id = this.props.match.params.id;
    
    
    //     getById(parseInt(id))
    //       .then(course => {
    //         this.setState({
    //             course
    //         });
    //       })
    
    //   }
    // render() {
       // const course=this.state.course;
       
        const { details } = useParams();
        console.log(details);

        return (
            <div>
              
            <main>
          <section id="course" class="course mt-5">
              <div class="container" data-aos="fade-up">
                 <div className="section-title">
                    <h2>The Ultimate Django Series</h2>
                </div>
                
                  <div class="row">
                    <div class="col-lg-7 entries">
                      <article>
                      <h1 style={{color:"Red"}}>{details}</h1>
                        <h2 class="course-Det-title">
                          <a href="blog-single.html">Build APIs with Django: Zero to Hero!</a>
                        </h2>

                        {/* <div class="entry-meta">
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                            <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                          </ul>
                        </div> */}

                        <div class="entry-content">
                            <p>
                            Do you want to take your Django skills to the next level and become
                            that professional back-end developer that companies love to hire? This
                            is exactly the course you need.
                            </p>
                            <p>
                            This is a comprehensive, in-depth, step-by-step course that teaches
                            you the whats, whys, and hows of Django. It covers everything you need
                            to build APIs using a real e-commerce project.
                            </p>
                            <p>
                            By the end of this course, you'll have gained a deep understanding of
                            the concepts and tools needed to build RESTful API with Python.
                            </p>
                          <div class="read-more">
                            <a href="blog-single.html"><i class="bi bi-cart-dash-fill"></i>Enroll Now</a>
                          </div>
                        </div>

                      </article>
                      </div>
                  
                      <div class="col-lg-5">

                        <div class="sidebar">


                        <h3 class="sidebar-title">Syllabus</h3>
                        <div class="sidebar-item categories ">
                            <ul>
                                <li><a href="#"><i class="bi bi-gear-wide"></i> BEGINNER <span>(25 h)</span></a></li>
                                <li><a href="#"><i class="bi bi-clock"></i>5 HOURS OF VIDEO <span>(12 h)</span></a></li>
                                <li><a href="#"><i class="bi bi-bar-chart-fill"></i>LIFETIME ACCESS <span>(5 h)</span></a></li>
                                <li><a href="#"><i class="bi bi-bell-fill"></i>EXERCISES <span>(22 h)</span></a></li>
                                <li><a href="#"><i class="bi bi-camera-video"></i> 100 LESSONS <span>(8 h)</span></a></li>
                                <li><a href="#"><i class="bi bi-collection"></i>DOWNLOADABLE <span>(14 h)</span></a></li>
                                <li><a href="#"><i class="bi bi-globe2"></i> SUBTITLES <span>(14 h)</span></a></li>
                                <li><a href="#"><i class="bi bi-file-post-fill"></i> ACCESS ON MOBILE/TV <span>(14 h)</span></a></li>
                            </ul>
                        </div>                   
                        </div>
                        </div>
                        

                  </div>
                  <div>
                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8">
                            <div class="video-cource">
                                <video src="https://mdbootstrap.com/img/video/Sail-Away.mp4" height="300px" controls></video>
                            </div>
                        </div>
                        
                        <div class="col-md-2">
                        </div>
                    </div>
                  
                  </div>
              </div>
            </section>
          </main>
          <Footer/>
            </div>
        )
    // }
}

export default Det





// import React, { Component } from 'react'
// import "./Det.css";
// import { useParams } from "react-router-dom";
// import  { useState, useEffect } from 'react';
// import axios from 'axios';




// function Det () {
//     const [ detCourse, setDetCourse ] = useState(null); // 'video', not 'videos'
//     const { catId } = useParams();
//     let filterCourse=[];
 
//     const path = 'Data/CourcesInfo.json';

//     const[courseDetail,setCourseDetail] = useState("");

//   const [courses, setCourse] = useState([]);
//     const [data,setData] = useState([]);

//     useEffect(() => {
//       axios.get(path).then(res=>{
//         setCourse(res.data)
//       })
//   })

//     // useEffect(() => {      
//     //     axios.get('Data/CourcesInfo.json',{ params: { catId } })
//     //     .then(response => response.data)
//     //     .then(responseData => {
//     //         setData(responseData)
//     //         console.log(data);
//     //       })
//     //     .catch(err => {
//     //       console.log(err);
//     //     });
//     //   }, []);
   
//         return (
//             <div>
//     return(
      
//         <div>
        //   <main>
        //   <section id="blog" class="blog mt-5">
        //       <div class="container" data-aos="fade-up">
        //          <div className="section-title">
        //             <h2>Online Courses</h2>
        //         </div>
        //           <div class="row">
        //           <div class="col-lg-7 entries">
        //               <article>

                       

        //                 <h2 class="course-title">
        //                   <a href="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a>
        //                 </h2>

        //                 <div class="entry-meta">
        //                   <ul>
        //                     <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
        //                     <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
        //                     <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
        //                   </ul>
        //                 </div>

        //                 <div class="entry-content">
        //                   <p>
        //                     Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
        //                     Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
        //                   </p>
        //                   <div class="read-more">
        //                     <a href="blog-single.html"><i class="bi bi-cart-dash-fill"></i>Enroll Now</a>
        //                   </div>
        //                 </div>

        //               </article>

                      

        //               {/* <div class="blog-pagination">
        //                 <ul class="justify-content-center">
        //                   <li><a href="#">1</a></li>
        //                   <li class="active"><a href="#">2</a></li>
        //                   <li><a href="#">3</a></li>
        //                 </ul>
        //               </div> */}

        //               </div>
                  
        //               <div class="col-lg-5">

        //                 <div class="sidebar">


        //                 <h3 class="sidebar-title">Syllabus</h3>
        //                 <div class="sidebar-item categories">
        //                     <ul>
        //                     <li><a href="#">General <span>(25)</span></a></li>
        //                     <li><a href="#">Lifestyle <span>(12)</span></a></li>
        //                     <li><a href="#">Travel <span>(5)</span></a></li>
        //                     <li><a href="#">Design <span>(22)</span></a></li>
        //                     <li><a href="#">Creative <span>(8)</span></a></li>
        //                     <li><a href="#">Educaion <span>(14)</span></a></li>
        //                     </ul>
        //                 </div>                   
        //                 </div>
        //                 </div>
                        

        //           </div>
        //       </div>
        //     </section>
        //   </main>
//         </div>
//             </div>
//         )
    
// }

  
// export default Det

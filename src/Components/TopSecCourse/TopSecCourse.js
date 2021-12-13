import React, { Component, useState,useRef } from 'react'
import "./TopSecCourse.css"
import Fuse from 'fuse.js'
import mydata from '../../Data/cources.json'

export class TopSecCourse extends Component {
   
   
    render() {
        // useRef For Input Search
        // const inputSearchValue= useRef();
        
        // const [search, setsearch] = useState('');
        // Key for search field
        const options={
            inculdeSource:true,
            isCaseSensitive:true,
            key:[
                'comp'
                ]
        }
        // const resuls=fuse.search(search)
        // const dataReasult=search ? resuls.map(result=> result.item): mydata;
        // // mydata is json file
        // const fuse=new Fuse(mydata,options)
        // //call setsearch to update search value from input 
        // const SearchCourse = () =>{
        //     setsearch(inputSearchValue.current.value)
        // };
        
        return (
            <div>
                  {/* <!-- ======= Breadcrumbs ======= --> */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div class="container-fluid">
                            <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
                                <div class="col-md-2">
                                <ol>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Courses</li>
                                </ol> 
                                </div>
                                {/* <div class="col-md-8">
                                    <div class="d-flex form-inputs"> <input ref={inputSearchValue} class="form-control" type="text" placeholder="Search any product..." onChange="SearchCourse"/> <a href="#"><i class="bi bi-search"></i></a> </div>
                                </div> */}
                                
                            </div>
                        </div>
                        <h2>Courses</h2>
                    </div>
                </section>{/*<!-- End Breadcrumbs --> */}
            </div>
        )
    }
}

export default TopSecCourse

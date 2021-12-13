import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import  { useState, useEffect } from 'react';
import axios from 'axios';



function  Details () {
    const [ detCourse, setDetCourse ] = useState(null); // 'video', not 'videos'
    const { catId } = useParams();
    let filterCourse=[];
 

    const [data,setData] = useState([]);

useEffect(() => {      
        axios.get('Data/CourcesInfo.json',{ params: { catId } })
        .then(response => response.data)
        .then(responseData => {
            setData(responseData)
            console.log(data);
          })
        .catch(err => {
          console.log(err);
        });
      }, []);
// console.log(data);

    // useEffect(() => {
    //     axios.get("Data/CourcesInfo.json")
    //     .then(resp=>(course) => course.filter((courseid)=>{
    //         if (courseid.id === catId)
    //         console.log(courseid.id)
    //         // filterCourse.push(course);
    //         console.log(catId)
    //     }))
    //     return console.log(filterCourse);//(filterCourse);
    // });
    // axios.get("assets/Data/menudata.json").then(res => (

    // )
    //     res.data.menu.filter(function(food) {
    //         if(food.filter === name)


    // });
            return (
            <div>
                

                <h1>Hello  </h1>
                <h1>Hello  </h1>
                <h1>Hello  </h1>
                <h1>Hello  </h1>
                <h1>Hello  </h1>
                <h1>Hello  </h1>
                <div>hi there {catId}</div>
               
                <h1>Hello  </h1>
                <h1>Hello  </h1>
            </div>
        )
    
}
export default Details
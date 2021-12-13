import React, { Component } from 'react'
import TopSecCourse from '../TopSecCourse/TopSecCourse';
import ViewCourses from '../ViewCourses/ViewCourses';

// const AllCourses = ({idCource}) => {
//     return (
//         <div>
//             console.console.log((idCource));
//         </div>
//     )
// }

// export default AllCourses


export class AllCourses extends Component {
    render() {
        return (
            <div class="container-fluid p-0">
                 <main id="Main">
                    <TopSecCourse/>
                    <ViewCourses/>
                   
                </main>
            </div>
        )
    }
}

export default AllCourses

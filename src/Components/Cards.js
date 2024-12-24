// //-------------------------------------------------By-sir---------------------------------------------

import React from "react";
import Card from "./Card";

const Cards=({courses})=>
{

    //all courses data is stored in a single array

    // Object-->----(key,value)---{Development: Array(5), Business: Array(5), Design: Array(4), Lifestyle: Array(3)}
    // Object.values(courses)------->[Array1,Array2,Array3,Array4]

    const getcourses=()=>
    {
        let allCourses = [];
       
        Object.values(courses).forEach((coursecategory) => {
            coursecategory.forEach((course) => {
                allCourses.push(course);
            });
        });
        return allCourses;
    }

    {/* getcourses() is an array only */}
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {!courses ? (<div> <p>No data found</p> </div> ) : (getcourses().map((course)=>
            {
                console.log(course);
                <Card  key={course.id} course={course}/>
            }
            )
           )
        }
        
        </div> 
    )
}

export default Cards;



//----------------------------------------------by git
// import Card from "./Card";
// import React, { useState } from 'react'

// const Cards = (props) => {
//     console.log(props.category);
//     console.log(props.courses);

//     let category = props.category;
//     const [likedCourses, setLikedCourses] = useState([]);
//     //   let allCourse = [];

//     // It Returns list of all courses received from the api Response

//     // const getCourses = () => {
//     //     Object.values(props.courses).forEach((courseCategory) => {
//     //         courseCategory.forEach((course) => {
//     //             allCourse.push(course);
//     //         });
//     //     });
//     //     return allCourse;
//     // };

//     function getCourses() {
//         if (category === "All") {
//             let allCourses = [];
//             Object.values(props.courses).forEach((array) => {
//                 array.forEach((courseData) => {
//                     allCourses.push(courseData);
//                 });
//             });
//             return allCourses;
//         }
//         else
//         {
//             return props.courses[category];
//         }
//     }

//       console.log(getCourses());
//     return (
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//             {
//                 getCourses().map((course) => {
//                     return <Card course={course} key={props.courses.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
//                 })
//             }
//         </div>
//     );
// };

// export default Cards;
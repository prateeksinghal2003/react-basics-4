//----------------------------------------by sir-----------------------------------


import React from "react";
import { FcLike ,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from "react-toastify";

const Card= (props)=>
{
    let course=props.course;
    let likedCourses = props.likedCourses; //vo saare courses jo like huain hain
    let setLikedCourses = props.setLikedCourses;

    function clickHandler()
    {
        if (likedCourses.includes(course.id)) 
        {
            // pahle se liked 


// setLikedCourses((prev) => prev.filter((cid) => cid !== course.id)); updates the state (likedCourses) by removing the course.id from the array.
// prev refers to the current likedCourses state.
//The .filter() method excludes the course.id from the array.

            setLikedCourses((prev) => prev.filter((cid) => cid !==course.id));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev,course.id]); //purane vali state + current course jo like hua usko "liked courses" array main daalo 
            }
            toast.success("Liked Successfully");
        }
    }
    return(
        
        <div className='bg-blue-900 bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
        
        <div className='relative '>
    
            <img src={course.image.url}></img>

             <div className="w-[40px] h-[40-px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
                <button onClick={clickHandler()}>
                {
                !likedCourses.includes(course.id) ?( <FcLikePlaceholder fontSize="1.75rem" />) :( <FcLike fontSize="1.75rem" />)
                }
                </button>
             </div>
        </div>
            
           

            <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                course.description.length > 100 ? (course.description.substring(0, 100) + "...") : (course.description)
                }
            </p>
            </div>
        </div>
               
        
    )
}

export default Card


//----------------------------------------by-git-------------------------------------------------------

// import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
// import { toast } from 'react-toastify';

// const Card = (props) => {
//     let likedCourses = props.likedCourses;
//     let setLikedCourses = props.setLikedCourses;

//     function clickHandler() {
//         // Logic
//         if (likedCourses.includes(props.course.id)) {
//             // pahle se liked 
//             setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
//             toast.warning("Liked Removed");
//         }
//         else {
//             // pahle se like nahi hai course 
//             // insert karne h y course like course me 
//             if (likedCourses.length === 0) {
//                 setLikedCourses([props.course.id]);
//             }
//             else {
//                 setLikedCourses((prev) => [...prev, props.course.id]);
//             }
//             toast.success("Liked Successfully");
//         }
//     }

//     return (
//         <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
//             <div className='relative '>
//                 <img src={props.course.image.url} alt="Course Image" className='' />

//                 <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
//                     <button onClick={clickHandler}>
//                         {
//                             !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
//                         }
//                     </button>
//                 </div>
//             </div>



//             <div className='p-4'>
//                 <p className='text-white text-lg font-semibold leading-6'>{props.course.title}</p>
//                 <p className='mt-2 text-white'>
//                     {
//                         props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
//                     }

//                 </p>
//             </div>

//         </div>
//     )
// }

// export default Card
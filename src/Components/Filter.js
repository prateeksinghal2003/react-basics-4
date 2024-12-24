// import React from "react";


// // ---by git---------------------------

// const Filter = (props) => {
//    console.log(props);
//   let category = props.category;
//   let setCategory = props.setCategory;

//   function filterHandler(title) {
//     setCategory(title);
//   }

//   return (
//     <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
//       {props.filterData.map((data) => {
//         return (
//           <button
//             className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
//               ${
//                 category === data.title
//                   ? "bg-opacity-60 border-white"
//                   : "bg-opacity-40 border-transparent"
//               }
//             `}
//             key={data.id}
//             onClick={() => filterHandler(data.title)}
//           >
//             {data.title}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

//  export default Filter;


//-----------------------------------------------------by sir

// filterData.map((data) => { ... }):

// .map() is a JavaScript array method used to iterate over each item in the filterData array.
// For each item (represented as data), you are trying to render a <button>.
// <button>{data.title}</button>:

// A button element is created for each data object.
// {data.title}: Assumes that filterData contains an array of objects, where each object has a title property.
// When you write JSX (the syntax used in React), everything outside of the curly braces is treated as plain HTML-like code. 
// If you want to include dynamic data, 
// run JavaScript logic, or use expressions, you need to enclose them in curly braces {}.
// The outer curly braces {} tell React to interpret filterData.map() as a JavaScript expression.
// The inner {data.title} renders the title dynamically from the data object.
// If you omit the curly braces, React won't execute the JavaScript and will throw an error.


//for map function we have to pass key
//so creating button key

const Filter =({filterData})=>
{
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
            {
                filterData.map((data)=>
                {
                  return (
                    <button  className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
             
            `} key={data.id}>
                        {data.title}
                    </button>
                  )
                })
            }
        </div>
    )
    
}
export default Filter;





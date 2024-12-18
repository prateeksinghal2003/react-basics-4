//import { useEffect, useState } from "react";
import "./App.css";

import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
//import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
//import navbar from "./Components/navbar";
//import Navbar from "./Components/Navbar";
import Navbar from "./Components/Navbar";

 function App() {


  //--------------------------------lect -62--react-basics-4---Part-A ---start
  //mount a component-->component is rendered


  //use state re-render the updated value
  //use-state handles the state of a variable 
  // const[text,setText]=useState('');

  //use effect-->jis bhi component(app)ke ander app use effect likh te hain uss component ke render hone ke baad use effect vala code chalega
  //it is used when we want to do an action(side effect) after rendering a component
  //after each rendering if i want to do a particular action then use useEffect

  //variation 1
  // useEffect(()=>
  // {
  //     console.log('UI rendering done');
  // })


  //variation 2
  //when i want to run use effect code only after first time rendering 
  //although in console it is showing two times so hide react strict mode
  // useEffect(()=>
  // {
  //      console.log('UI done');
  // },[])


  //variation 3
  //[]-->denotes dependency list
  //array elements ki jab value change hooo tabh use effect vala code chalega
  //[text]-->whenver text changes run use effect code
  //it runs during first time rendering and when text changes 

  // useEffect(()=>
  // {
  //     console.log('Change observed');
  // },[text])


  //variation 4
  //first return vala code is executed
  //used when ,we want to add a new listener to an element but before adding remove the existing ones
  // useEffect(()=>
  // {
     
  //   console.log('listener is added');
  //   return ()=>
  //   {
  //     console.log('listener is removed');
  //   }
  // },[text])

  // function changehandler(event)
  // {
  //   setText(event.target.value);
  //   console.log(text);
    
  // }

  //event contains the information where the event (on change) has occured
  //event.target-->gives the name of HTML element where the event has occured-->input field
  //event.target.value---->gives the value of input field
  
  // return (
    
   
  //  <input type="text" style={{ border: '1px solid black' }}  onChange={changehandler}/> //whenever text changes handler is called
  
  // );

  //             --------------------lect-62-react-basics---4----->Part-A----->End
 
  //--------------------lect-62-react-basics---4----->Part-B----->Start

  return (
    <div>
      <Navbar/>
      <Filter  filterData={filterData}/>
      

  {/* This is a custom React component named Filter.
It is being used inside another component, like App or a parent component.
filterData={filterData}:

filterData: This is a prop name. Props (short for properties) are used to pass data from a parent component to a child component.
{filterData}: The value being passed as a prop.  */}
//       <Cards/>
//     </div>
   );
 }

 export default App;


// import React from "react";

// const Filter = (props) => {
//   // console.log(props);
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

// export default Filter;

//import { useEffect, useState } from "react";
import "./App.css";

import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";

  const App=()=>
    {

     
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

  

//   The fetchData Function:

// It’s an asynchronous function defined inside useEffect.
// This function is responsible for fetching data from the apiUrl.
// Fetching Data:

// fetch(apiUrl): Sends a GET request to the API URL defined by apiUrl.
// await res.json(): Converts the response (res) from JSON format to a JavaScript object.
// console.log(data): Prints the data received from the API to the console (for debugging or verification).

// const fetchData = async () => { ... }
// This declares an asynchronous function fetchData using the async keyword.
// An asynchronous function allows you to work with await inside its body, enabling asynchronous operations
//  (e.g., fetching data from an API) to execute as if they were synchronous.
// This makes the code easier to read and write, especially when dealing with asynchronous actions like network requests.
// 2. const res = await fetch(apiUrl);
// fetch(apiUrl) initiates a network request to the URL stored in apiUrl.
// When we say "initiates a network request", it means that the JavaScript code sends a message (HTTP request) over the internet to a server specified by the URL stored in apiUrl. Here's a more detailed explanation:

// What Happens During a Network Request?
// Identify the Server:

// The fetch(apiUrl) function uses the apiUrl string to identify the server's address (e.g., https://example.com/api/data).
// This URL tells your browser where to send the request.
// The fetch function returns a Promise that resolves to a Response object once the data is fetched.
// Using await ensures that the code waits for the Promise to resolve before moving to the next line. This avoids dealing with .then() chains and makes the code cleaner.
// 3. const output = await res.json();
// res.json() parses the Response object into a usable JavaScript object. This also returns a Promise because the conversion is asynchronous.
// Using await here ensures that the JSON parsing is completed before storing the result in output.

// Flow:
// Component renders.
// useEffect is triggered.
// fetchData runs:
// Sends a request to the API.
// Handles the response or any error.
// If successful:
// Logs the data in the console.
// If there’s an error:
// Shows a toast notification with the error message.

const [courses, setCourses] = useState([]);
const [loading, setLoading] = useState(true); //starting main loading =true 
//const [category, setCategory] = useState([]);

    async function  fetchData()
    {
      setLoading(true);
      try{
      const res = await fetch(apiUrl);
      const output = await res.json(); 

      //why data--->all content lies inside key "data"
      setCourses(output.data);
      //console.log(output);

      }

      catch(error)
      {
            toast.error("Something went wrong");
      }
      setLoading(false); //spinner not visible after data is fetched
    }

    useEffect(()=>
      {fetchData()},[])
        
  
  
  return (
    <div  className="min-h-screen flex-col flex bg-bgDark2" >
    

      <div>
        <Navbar />
      </div>

       <div className='bg-blue-900'>
       <div>
          <Filter
            filterData={filterData}
            //category={category}
            //setCategory={setCategory}
          />
        </div>
      

   {/* This is a custom React component named Filter.
// It is being used inside another component, like App or a parent component.
// filterData={filterData}:

// filterData: This is a prop name. Props (short for properties) are used to pass data from a parent component to a child component.
// {filterData}: The value being passed as a prop.  */}

{/*  (<Cards courses={courses} category={category} />)  */}

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            loading ? (<Spinner /> ) :(<Cards courses={courses} />)
             
             
          }
        </div>
     </div>
     </div>
   );
  }

 export default App;




// import React from "react";
// import Navbar from "./Components/Navbar";
// import Filter from "./Components/Filter";
// import Cards from "./Components/Cards";
// //import Spinner from "./Components/Spinner";
// import { apiUrl, filterData } from "./data.js";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";

// const App = () => {
//   // const [courses, setCourses] = useState(null);
//   const [courses, setCourses] = useState([]);
//   //const [laoding, setLoading] = useState(true);
//   const [category, setCategory] = useState([]);

//   const fetchData = async () => {
//     //setLoading(true);
//     try {
//       const res = await fetch(apiUrl);
//       const output = await res.json();

//       // Save data
//       setCourses(output.data);
//       // setCourses(output);
//     } catch (err) {
//       toast.error("Something Went Wrong");
//     }
//     //setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen flex-col flex bg-bgDark2">
//       <div>
//         <Navbar />
//       </div>

//       <div className="bg-bgDark2">
//         <div>
//           <Filter
//             filterData={filterData}
//             category={category}
//             setCategory={setCategory}
//           />
//         </div>

//         <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
//           {/* {
//             laoding ? (
//               <Spinner />
//             ) : (
//               <Cards courses={courses} category={category} />
//             )
//           } */}

//           {
//             <Cards courses={courses} category={category} />
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
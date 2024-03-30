import { useState } from "react";


const Home = () => {
  function writeMessage() {
    console.log("Find and book your ideal tour!");
 }
 
 writeMessage(); // Find and book your ideal tour!

 function multiply (a,b){
  return a * b;

 }
 console.log(multiply(3,2));
 
 let sayName = (name) => {
  return console.log('hello and welcome '+ name );
 }
 sayName('AMIN');

 const handleClick = (e) => e.target.textContent= 'OUCH😩';

 
 const [counti , setCount] = useState(0);

 const Add = () =>{
  setCount(counti+1);

 }
 const reduce = () =>{
  setCount(counti-1);

 }
 const reset = () =>{
  setCount(0);
 }


 const [name , setname] = useState('GUEST');
const handleChange = (e) => {
  setname(e.target.value);
}

const handleClick4 = (e) => e.target.textContent = 'THANK YOU 🤩';
  return (
    <>
    <h1>{counti}</h1>

    <button onClick={Add}>ADD</button>
    <button onClick={reduce}>MINUS </button>
    <button onClick={reset}>RESET </button>

      <h1>home page </h1>
     
      <button onClick={(e) =>handleClick(e)} className="p-2 rounded-lg bg-red-100 text-center text-lg ">CLICK ME PLZ 🤩</button>
<button onClick={(e) => handleClick4(e)}>NO CLICK ME 😡 </button>
<input onChange={handleChange} className="p-2 bg-red-300 absolute top-[50%] left-[0%] " type="text" value={name } />
<h1>Name :{name}</h1>
    </>
  )
}

export default Home

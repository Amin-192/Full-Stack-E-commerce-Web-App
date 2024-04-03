import { useState } from "react"


const ColorPicker = () => {
    const [color, setColor]= useState('');
const handleColorChange = (e) =>{
setColor(e.target.value);
}
const [text,setText] = useState('');
const handleText = (e) =>{
setText(e.target.value);
}

const [foods,setFoods] = useState(['banana', 'watermelon'])

const [input , setInput] = useState('');
const handleInputChange = (e) =>{
setInput(e.target.value);
}
const handleSave = () => {
    // Add the input value to the foods array
    setFoods([...foods, input]);
    // Clear the input field
    setInput("");
  };
  const removeFood = (index) => {
    // Remove the input value from the foods array
    setFoods(foods.filter((_, i) => i !== index));
  };
  return (
    <>
<h1 className="text-2xl font-serif font-bold text-center mt-4 mb-4 ">SELECT A COLOR</h1>
    <div style={{backgroundColor:color}} className="w-[400px] h-[400px] bg-green-200 relative left-[35%] bottom-[80%]"></div>
      
      <h1 className=" text-lg text-center mt-3">SELECT COLOR HERE :</h1>
      <input  className="p-2 w-[70px] h-[70px] relative left-[50%] mt-7 " type="color" value={color} onChange={handleColorChange} />


      <input className="bg-red-200" type="text" value={text} onChange={handleText} />
      <h1>{text}</h1>

      <div className="h-[600px]">
      <h2>list of foods</h2>
<ul>

  <li>
{foods.map((foods, index)=>{
  return <><li key={index}>{foods}</li> 
  <button onClick={() => removeFood(index)}>🚮 Remove</button> </> 
})}
  </li>
</ul>
    
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSave}>add any food you like</button>
</div>
       
    </>
  )
}

export default ColorPicker

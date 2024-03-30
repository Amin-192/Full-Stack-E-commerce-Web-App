
import { useState } from "react";
const CV = () => {
    const [inputValue, setInputValue] = useState(''); // To hold the current input value
    const [items, setItems] = useState([]); // To hold all saved items
  
    // Handles input changes
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    // Handles saving the current input value
    const handleSave = () => {
      // Add the current input value to the items array
      if (inputValue.trim()) { // Prevents saving empty strings
        setItems((prevItems) => [...prevItems, inputValue]);
        setInputValue(''); // Reset input field after saving
      }
    };
  
    // Handles deleting an item
    const handleDelete = (indexToDelete) => {
      setItems((prevItems) => prevItems.filter((_, index) => index !== indexToDelete));
    };
  return (
    <>
       <h1>home page </h1>
       
       <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSave}>Save</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
       
    </>
  )
}

export default CV

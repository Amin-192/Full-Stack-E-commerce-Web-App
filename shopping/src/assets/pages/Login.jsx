import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = () => {
    const [name, setName] = useState()
    
    const [password, setPassword] = useState()
    const navigate = useNavigate()


   
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submitting form...");
        
        axios.post('http://localhost:3001/Login', {
    name,
    password
})
.then(result => {
    console.log(result.data);
    if (result.data === 'success') {
        navigate('/');
    }
})
.catch(err => console.error(err));

    }
  return (
    <div className="h-[1200px]">
    <div className="w-[600px] h-[600px] rounded-2xl shadow-2xl relative left-[15%] bg-gray-100 top-[5%]">
<div className="text-center ">
  <h1 className="shadow-2xl text-2xl bg-white  border p-2 w-[330px]  relative left-[23%] top-[10%] rounded-xl ">
      
      Log In Page</h1>

      <form action="" id="login" onSubmit={handleSubmit}>

          <div className=" mt-12 grid grid-rows-3 gap-8 relative left-[10%]">
              <input required type="text" placeholder="Name" className="shadow-2xl text-2xl  p-2 w-[330px]  rounded-xl" onChange={(e) =>{setName(e.target.value)}}/>
             
              <input required type="password" placeholder="Password" className="shadow-2xl text-2xl  p-2 w-[330px]  rounded-xl" onChange={(e) =>{setPassword(e.target.value)}}/>
              <button type="submit" className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center ' style={{ width: '100px' }}>Log In</button>
          </div>
      </form>
      <div className="mt-9 ">

<h1 className="mt-4">If you do not have an account</h1>
<li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center relative left-[40%] w-[90px] ' style={{ width: '140px' }}>
          <Link to="/Signup">Sign Up</Link>
        </li>
</div>
</div>
    </div>
  </div>
  )
}

export default Login

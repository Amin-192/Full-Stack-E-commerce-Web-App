import './Nav.css';
import { Link , useNavigate} from "react-router-dom"
import axios from "axios"; 
import logo from '../images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState , useEffect } from "react";
const Nav2 = () => {
  const [div, setDiv] = useState('none');

  const handleDiv = () => {
      setDiv(div === 'none' ? 'block' : 'none');
      
  };
  const [currentUser, setCurrentUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch current user's name when component mounts
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('http://localhost:3001/GetCurrentUser')
        .then(response => {
          setCurrentUser(response.data.name);
          console.log(response.data.name);
        })
        .catch(err => console.error(err));
    }
  }, []);



  const handleLogout = () => {
    console.log("Logging out...");
    axios.post('http://localhost:3001/Logout')
      .then(result => {
        console.log(result.data);
        if (result.data.success) {
        
          setIsLoggedIn(prevLoggedIn => {
            if (prevLoggedIn) {
              localStorage.removeItem('token'); // Remove the token from local storage
              return false; // Update the isLoggedIn state to false
            }
            return prevLoggedIn;
          });
          navigate('/Login'); // Redirect to login page after successful logout
        }
      })
      .catch(err => console.error(err));
  };
  
  

  
  
  return (
    <div>
      <div className="navbar bg-base-100  ">
  <div className="flex-1">
  <img src={logo} alt="" className="h-[50px] w-[70px] mt-4" />
  
  </div>
  <div className="flex-none gap-2">
    <div className="form-control w-[650px]">
      
    <ul className=" gap-6 p-4 justify-center col-span-2 relative right-[30%] hidden md:flex">
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/">Home</Link>
        </li>
       
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/about">About</Link>
        </li>
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/CV">CV</Link>
        </li>
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/ColorPicker">Colors</Link>
        </li>
        <div className="flex gap-5 relative left-[5%]">
        
       
    
        <li className='hover:bg-orange-300 bg-red-400  shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
            <button onClick={handleLogout}>Logout</button>
        </li>
    <li>
      
        {isLoggedIn && <p className="text-lg font-serif text-black bg-red-200">{currentUser}</p>}
        <p>{currentUser}</p>

        </li>
        <li className='hover:bg-orange-300 bg-red-400  shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
            <Link to="/Login">Login</Link>
        </li>
    


        
      
        </div>
      </ul>
        
      
        
      

     
      <button className="w-[90px]" onClick={handleDiv}>
  {div === 'block' ? 'X' : <GiHamburgerMenu className="relative w-[90px] left-[10%] text-2xl top-[13%] md:hidden" />}
</button>




     <div className="w-[300px]  h-[500px] bg-gray-100 absolute top-[] left-[30%] rounded-2xl shadow-2xl hidden " style={{display:div}}>
     <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>


     <div className="navbar bg-base-100 w-[500px] h-[500px] ">
  <div className="">
  
  </div>
  <div className=" gap-2 second nav">
    <div className="form-control ">

    <ul className="grid gap-6 p-4 justify-center col-span-2 relative left-[30%] ">
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/about">About</Link>
        </li>
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/CV">CV</Link>
        </li>
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/ColorPicker">Colors</Link>
        </li>
        <div className="flex gap-5 relative left-[5%]">
        
        <li className='hover:bg-orange-300 bg-red-400  shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/Login">Login</Link>
        </li>
        
      
        
      

     
     
      </div>
      </ul>
      
    </div>
    
  </div>
</div>
      
      
      
      
      
       </div>
     
    </div>
    <div className="dropdown dropdown-end hidden md:flex">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Nav2

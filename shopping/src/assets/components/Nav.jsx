import { Link } from "react-router-dom";
import logo from '../images/logo.png';

function Nav() {
  return (
    <nav className="grid grid-cols-3 grid-rows-0">
      <div className="flex">
        <img src={logo} alt="" className="h-[50px] w-[70px] mt-9" />
        <h1 className="mt-11 text-xl">NIKE</h1>
      </div>
      <ul className="flex gap-6 p-4 justify-center col-span-2 relative right-[30%]">
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
        <div className="flex gap-5 relative left-[20%]">
        
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/Login">Login</Link>
        </li>
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/Signup">Sign up</Link>
        </li>
        
        </div>
      </ul>
      
    </nav>
  );
}

export default Nav;

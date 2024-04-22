
import { Link } from "react-router-dom"
import logo from '../images/logo.png';
const Nav2 = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
  <img src={logo} alt="" className="h-[50px] w-[70px] mt-4" />
  </div>
  <div className="flex-none gap-2">
    <div className="form-control w-[650px]">

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
        <div className="flex gap-5 relative left-[5%]">
        
        <li className='hover:bg-orange-300 bg-red-400  shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/Login">Login</Link>
        </li>
        <li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center' style={{ width: '100px' }}>
          <Link to="/Signup">Sign up</Link>
        </li>
        
      

      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto relative left-[10%]" />
      </div>
      </ul>
    </div>
    <div className="dropdown dropdown-end">
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

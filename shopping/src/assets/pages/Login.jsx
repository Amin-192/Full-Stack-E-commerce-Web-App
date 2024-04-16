import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[1200px]">
      <div className="w-[600px] h-[600px] rounded-2xl shadow-2xl relative left-[15%] bg-gray-100 top-[5%]">
<div className="text-center ">
    <h1 className="shadow-2xl text-2xl bg-white  border p-2 w-[330px]  relative left-[23%] top-[10%] rounded-xl ">
        
        Login Page</h1>

        <form action="">

            <div className=" mt-12 grid grid-rows-3 gap-8 relative left-[10%]">
                <input type="text" placeholder="Name" className="shadow-2xl text-2xl  p-2 w-[330px]  rounded-xl"/>
                <input type="text" placeholder="Email" className="shadow-2xl text-2xl  p-2 w-[330px]  rounded-xl"/>
                <input type="text" placeholder="Password" className="shadow-2xl text-2xl  p-2 w-[330px]  rounded-xl"/>
            </div>
        </form>
        <div className="mt-9 ">
<button className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center ' style={{ width: '100px' }}>LOG IN</button>
<h1 className="mt-4">If you do not have an account please sign up</h1>
<li className='hover:bg-orange-300 shadow-2xl p-4 text-lg font-serif rounded-xl hover:scale-110 transition-all duration-300 text-center relative left-[40%] w-[90px] ' style={{ width: '140px' }}>
          <Link to="/Signup">Sign up</Link>
        </li>
</div>
</div>
      </div>
    </div>
  )
}

export default Login

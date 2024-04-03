import { useState } from "react";

const Header = () => {
    const [div, setDiv] = useState('none');

    const handleDiv = () => {
        setDiv(div === 'none' ? 'block' : 'none');
    };

   const  scrollToBottom = () => {
    const customPosition = 500; // Example: scroll to 500 pixels from the top

    window.scrollTo({
      top: customPosition,
      behavior: 'smooth' 
        });
    };
    
    return (
        <div className="ml-4">
            <div className='grid grid-cols-2 grid-rows-0 h-[500px] mt-8'>
                <div className='descDiv'>
                    <h1 className='text-6xl text-black font-serif font-bold mt-[50px]'>
                        The<span className="text-orange-400"> New</span>Arrival of <span className="text-orange-400"> Nike Shoes</span>
                    </h1>
                    <p className="mt-9 font-extralight">
                        Discover stylish Nike arrivals quality, comfort and innovation for your active life.
                    </p>
                    <button  onClick={scrollToBottom} className="shadow-2xl mt-14 p-2 rounded-xl hover:scale-110 transition-all duration-300 bg-orange-300  text-white ">
                        shop now  <span className="text-md bg-white p-1 rounded-md text-black">➡️</span>
                    </button>
                </div>

                <div className='displayDiv'>
                    <div className="h-[400px] bg-gray-100 w-[500px] top-[30%] absolute" style={{ display: div }}>
                        <h1>cart</h1>
                    </div>
                    <button onClick={handleDiv} className="relative left-[70%]  text-xl hover:bg-orange-300  shadow-2xl p-4 rounded-xl hover:scale-110 transition-all duration-300 w-[100px] ">
                        Cart 🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;

import shoe1 from '../images/airmax.png';
import shoe2 from '../images/airforce.png';
import shoe3 from '../images/airmax97.png';
import shoe4 from '../images/shoe4.png';
import shoe5 from '../images/airofce1.png';
import { useState } from 'react';


const Hero = () => {
    const products = [
        {
            name: 'Airmax 270',
            image : shoe1,
            price : 4500
        },
        {
name: 'Airforce',
image : shoe2,
price : 4100
        },

        {
            name: 'Airmax 97',
            image : shoe3,
            price : 5100
         },
         {
            name: ' Nike Running shoes',
            image : shoe4,
            price : 5100
         },
         {
            name: 'Airforce 1s',
            image : shoe5,
            price : 5100
         },

    ]
   
        const [div, setDiv] = useState('none');
    
        const handleDiv = () => {
            setDiv(div === 'none' ? 'block' : 'none');
        };

        const [addCart , setCart] = useState([]);

        const handleCart = () =>{
            setCart([...addCart, products[0]]);  
            

            }
  return (
    <div className='h-[700px]'>
     
            <ul className='grid grid-cols-3 gap-10  '>
                {products.map((product, index) => (
                    
                    <div className='p-2 rounded-2xl shadow-2xl bg-gray-100 h-[380px]' key={index}>
                        
                        <img className='relative left-[20%] w-[200px] h-[200px]' src={product.image} alt={product.name}  />
                        <h2 className='text-center text-2xl font-serif font-bold '>{product.name}</h2>
                        <p className='text-xl text-center p-1 mt-4'><span className='text-orange-300 '>Price:</span>  ksh{product.price}</p>
                        <button onClick={handleCart} className='shadow-2xl p-4 hover:bg-orange-300 relative left-[40%] mt-3 font-serif  rounded-xl hover:scale-110 transition-all duration-300'>BUY</button>
                    </div>
                ))}
            </ul>

            <div className='displayDiv'>
                    <div className="h-[500px] bg-gray-600 w-[500px] top-[30%] absolute" style={{ display: div }}>
                        <h1>cart</h1>
                    </div>
                    </div>
            <button onClick={handleDiv} className="relative left-[70%]  text-xl hover:bg-orange-300  shadow-2xl p-4 rounded-xl hover:scale-110 transition-all duration-300 w-[100px] ">
                        Cart 🛒
                    </button>
                    
    </div>
  )
}

export default Hero

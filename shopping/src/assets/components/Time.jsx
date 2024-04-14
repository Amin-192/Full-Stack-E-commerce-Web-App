import { useEffect, useState } from "react"


const Time = () => {
    const [time ,  setTime] = useState(new Date());

useEffect(()=> {
 const interval = setInterval(() => {
     setTime(new Date());
 }, 1000);
 return () => clearInterval(interval);
},[]);

function formatTime(){
    let hours = time.getHours();
    let minuets = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiam = hours >= 12 ? 'PM' : 'AM';
    
    return `${padZero(hours)}:${padZero(minuets)}: ${padZero(seconds)}: ${meridiam}`  
}
function padZero(number){
return (number < 10 ? '0' : '') + number;
}
  return (
    <div className="mt-[160px] h-[400px] ">
      <h1>NEW DEALS ARE RUNNING OUT</h1>



      <div className="clock-container">

<div className="clock text-center p-3 shadow-2xl rounded-2xl ml-[70px] mr-[70px] mt-5">

    <span className="text-8xl p-3 ">{formatTime()}</span>
    <h1></h1>
</div>
      </div>
    </div>
  )
}

export default Time

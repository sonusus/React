import React,{useState,useEffect} from "react";
import '../App.css';

function Onclickhidden(){
    const [showCount,setshowCount]=useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString());
  
    

 
 
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        },1000);
        return () => clearInterval(interval);
    },[]);

    return (
        <div>Onclickhidden
  <button style={{backgroundColor:'rgb(120,30,165)',                                                                                          
                  color:'white',
                  padding:'12px 16px',
                  borderRadius:'10px',border:'none'}}
                  onClick={() => setshowCount(!showCount)}>{showCount? 'HIDE':'SHOW'}
                  </button>
                  {showCount ?(
                    <>
                    {/* <h2 className='one-one'>hello</h2> */}
                    <h1>Hello,world!</h1>
                   <h2>It is {time}.</h2>
                    </>
                  ):null}


        </div>
    )
}
export default Onclickhidden
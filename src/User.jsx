import React from 'react'
import axios from 'axios'
import { useEffect,useState,useRef } from 'react'

const User = () => {

    const [hero, setHero] = useState([])

    const disable  = useRef()

const handleButton = () =>{

  disable.current.style.display ="none"

}


    const handleSubmit = (e)=>{
      
        axios.get('https://coupitbackend.onrender.com/user',)
        .then(result =>{ console.log("This is your result",result.data);
        setHero(result.data)
    })

      

    }
        
        
        
     
   
    

  return (
    <div className=' h-[100vh] bg-[#ecdfcc45] '>

      <div className=" flex justify-center h-[50vh] items-center">

        <div className="y">
      <button onClick={()=>{handleSubmit();handleButton()}}  ref={disable} className='bg-purple-700 text-white rounded-md w-[50vw] h-12 p-1 mt-1 'style={{display:""}}>Claim</button>

      {hero?.coupon ?
      <div className='items  lg:w-[35vw]  w-[80vw] bg-yellow-400 text-black p-2 rounded-md'>
       <p className=' bg-red-800 text-white text-center rounded-md'>Coupon Code: {hero.coupon}</p>
       <p className='text-center bg-gradient-to-l from bg-orange-600 via-orange-400 mb-1 mt-1 rounded-md font-bold text-gray-700'>Coupon-type: {hero.type}</p>
       <p className='text-center  bg-purple-500 mb-1 text-white rounded-md'>Coupon-type: {hero.expiry}</p>
       <p className='text-center bg-fuchsia-300 p-1 rounded-md'>Coupon-reward:{hero.reward}</p>

<p className='text-center text-2xl text-red-400 mt-6'>Congrats!You have been lucky.</p>
      
      
       </div>

       
      
      
      : <p className='text-center text-xl font-serif mt-6'>No coupon claimed yet</p>}


</div>
</div>

    </div>
  )
}

export default User
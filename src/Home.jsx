import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const [couponId, setCouponId] = useState('')
  const [coupon, setCoupon] = useState('')
  const [type, setType] = useState('')
  const [expiry, setExpiry] = useState('')
  const [reward, setReward] = useState('')
  const [storedCoupons, setStoredCoupons] = useState([])

  const [disableButton, setDisableButton] = useState(false)
  const navigate = useNavigate()
  // const element = useRef()

  // const changeView = ()=>{
  //   element.current.style.display = "block"
  // }


  

const handleSubmit = () =>{
  // e.preventDefault();

  axios.post('http://localhost:5000/home',{couponId,coupon,type,expiry,reward})
  .then((result)=> console.log("this is your result",result))



  setCouponId('')
  setCoupon('')
  setType('')
  setExpiry('')
  setReward('')

}

useEffect(() => {
  axios.get('http://localhost:5000/home')
    .then((result) => {
      console.log("this is your result", result.data);
      // console.log('This is id',result.data._id)
      setStoredCoupons(result.data); 
      
    })
    
}, []);

const  handleEdit = (id)=>{
  
  axios.get(`http://localhost:5000/home/${id}`)
  .then((res)=>{console.log('This is edit ',res)


    const details = JSON.stringify(res)
   sessionStorage.setItem('a',details)

navigate('/edit')
   
  }
)
}



const  handleDelete = (id)=>{
  
  axios.delete(`http://localhost:5000/home/${id}`)
  .then((res)=>{console.log('This is edit ',res)

    axios.get('http://localhost:5000/home')
    .then((result) => {
      console.log("this is your result", result.data);
      // console.log('This is id',result.data._id)
      setStoredCoupons(result.data); 
      
    })


    
  }
)
}




  




  return (
    <div className=' bg-[#ecdfcc45] h-[100vh]'>
      
<div className="x flex  h-[30vh] lg:h-[40vh] items-center justify-center">
      <form onSubmit={handleSubmit} className=' border-4 p-2 border-[#697565] lg:w-[30vw] lg:h-[35vh] flex justify-center items-center shadow-2xl'>
        <div className="n">

        <div className="couponID">
          <input className='border-1 text-center rounded-md mb-1' placeholder='CouponId' value={couponId} onChange={(e)=> setCouponId(e.target.value)}/>
        </div>

         <div className="coupon-code">
        <input className='border-1 text-center rounded-md mb-1' placeholder='Coupon Code' value={coupon} onChange={(e)=> setCoupon(e.target.value)}/>
        </div>

        <div className="discount-type">

          <input className='border-1 text-center rounded-md mb-1' placeholder='Discount-type' value={type} onChange={(e)=> setType(e.target.value)}/>
        </div>

        <div className="Expiry Date">
        <input className='border-1 text-center rounded-md mb-1' placeholder='Expiry date' value={expiry} onChange={(e)=> setExpiry(e.target.value)} />
        </div>

        <div className="reward ">
          <input className='border-1 text-center rounded-md mb-2' placeholder='Reward' value={reward} onChange={(e)=> setReward(e.target.value)}/>
        </div>

     <button className='bg-red-700 text-white p-1 w-44  rounded-lg'>Submit</button>

     </div>
      </form>

      </div>


<div className="coupons flex flex-wrap gap-2 justify-center">

      {storedCoupons.map((item,index)=>(
  <div key={index} className="items    w-40 bg-yellow-400 text-black p-2 rounded-md">
 <p className=' bg-red-800 text-white text-center rounded-md'>{item.coupon}</p>
 <p className='text-center bg-gradient-to-l from bg-orange-600 via-orange-400 mb-1 mt-1 rounded-md font-bold text-gray-700'>{item.type}</p>
 <p className='text-center  bg-purple-500 mb-1 text-white rounded-md'>{item.expiry}</p>
 <p className='text-center bg-fuchsia-300 p-1 rounded-md'  style={{display:""}}>{item.reward}</p>


 <div className="button flex justify-around mt-4">
   <button className='bg-green-800 text-white p-1 text-center rounded-md w-16' onClick={()=> handleEdit(item._id)} >Edit</button>
 <button className='bg-red-800 text-white p-1 text-center rounded-md w-16' onClick={()=> handleDelete(item._id)} >Delete</button>


</div>

 </div>
))}

</div>
      
    </div>
  )
}

export default Home
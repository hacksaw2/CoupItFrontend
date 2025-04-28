import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Edit = () => {


  const [couponId, setCouponId] = useState('')
  const [coupon, setCoupon] = useState('')
  const [type, setType] = useState('')
  const [expiry, setExpiry] = useState('')
  const [reward, setReward] = useState('')

  const navigate = useNavigate()


  const [id, setId] = useState('')

  useEffect(() => {

  

    
const b = sessionStorage.getItem('a')
const m = JSON.parse(b)
console.log('this is m',m)
console.log(m.data._id)

setCouponId(m.data.couponId)
setCoupon(m.data.coupon)
setType(m.data.type)
setExpiry(m.data.expiry)
setReward(m.data.reward)
setId(m.data._id)


    
  }, [])


  const handleEdit = (e)=>{
    e.preventDefault()


    axios.put(`http://localhost:5000/edit/${id}`,{couponId,coupon,type,expiry,reward})

    setCouponId('')
    setCoupon('')
    setType('')
    setExpiry('')
    setReward('')

    navigate('/home')

   
  }
  


  return (
    <div className='bg-[#ecdfcc45] h-[100vh]' >

      <div className="x flex justify-center items-center h-[50vh]">
        
        <form onSubmit={handleEdit}>

          <div className="couponId">
            <input className='ml-1 w-[50vw] border-2 text-center border-[#3C3D37] mb-2 rounded-md '  value={couponId} onChange={(e)=> setCouponId(e.target.value)}/>
          </div>

          <div className="coupon">
            <input className='ml-1 w-[50vw] border-2 text-center border-[#3C3D37] mb-2 rounded-md' value={coupon} onChange={(e)=> setCoupon(e.target.value)}/>
          </div>

          <div className="type">
            <input className='ml-1 w-[50vw] border-2 text-center border-[#3C3D37] mb-2 rounded-md' value={type} onChange={(e)=> setType(e.target.value)}/>
          </div>

          <div className="expiry">
            <input className='ml-1 w-[50vw] border-2 text-center border-[#3C3D37] mb-2 rounded-md' value={expiry} onChange={(e)=> setExpiry(e.target.value)}/>
          </div>



          <div className="reward">
            <input className='ml-1 w-[50vw]  border-2 text-center border-[#3C3D37] mb-2 rounded-md' value={reward} onChange={(e)=> setReward(e.target.value)}/>
          </div>


    <button className='bg-orange-700 text-white p-1 w-[20vw] rounded-md border-black border-2'  >
      Submit
    </button>
        </form>
        </div>
    </div>
  )
}

export default Edit

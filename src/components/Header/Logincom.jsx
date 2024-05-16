import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Logincom() {
    const [openlogin, setOpenlogin] = useState("")
    const navigate = useNavigate()
  return (
  <div className=" text-[#392d29] border-t  border-gray-300 ">
    <div className="flex  flex-col pt-4 text-sm gap-3 font-['Maison Neue']">
    <Link >Log In</Link>
    <Link>Sign Up</Link>
    <Link>Redeem Gift Card</Link>
    <Link>Help Center</Link>
    </div>
  </div>
  )
}

export default Logincom
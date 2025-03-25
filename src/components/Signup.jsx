import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {
  return (
    <div className="flex h-screen ml-64">
      <div className="w-1/2 flex items-center justify-center">
        <img src="/logo.png" alt="Signup" className="w-5/6" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center space-y-6">
         <h1 className='text-2xl text-gray-100 font-bold'>AI Speech Generator</h1>
        <button className="flex items-center space-x-3 px-6 py-3 border rounded-lg shadow-md text-gray-100 hover:bg-gray-900 font-semibold">
          <FcGoogle size={24} />
          <span>Signup with Google</span>
        </button>
        <button className="flex items-center space-x-3 px-6 py-3 border rounded-lg shadow-md text-gray-100 hover:bg-gray-900 font-semibold">
          <FcGoogle size={24} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  )
}

export default Signup

import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [text, setText] = useState('')

  const handleInputChange = (e) => {
    setText(e.target.value.slice(0, 500)) // Limit text to 500 characters
  }

  return (
    <div className="p-4 sm:ml-64 lg:flex justify-center items-center min-h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center m-3 w-2/3">

        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Best{' '}
          <span className="text-blue-500">
            Text <span className="text-white">to</span>{' '}
            <span className="text-red-500">Speech</span>
          </span>{' '}
          AI Speech Generator
        </h2>

        <textarea
          id="textInput"
          maxLength={500}
          placeholder="Enter text..."
          className="border border-gray-400 p-4 w-96 sm:w-[400px] bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-white resize-none"
          rows={Math.min(5, text.split('\n').length)} 
          value={text}
          onChange={handleInputChange}
        ></textarea>

        <p className="text-gray-500 text-sm mt-1">{text.length} / 500</p>

        <button className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-600 transition">
          Convert
        </button>
      </div>

      <div className="mt-4">
        <img src="/bg-logo.png" alt="Text Image" className="w-full" />
      </div>
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    console.log('Logged out')
    setShowModal(false)
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 bg-gray-700 text-white px-3 py-2 rounded z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src="./logo.png" className="h-16" alt="Logo" />
                <span className="ms-3">AI Speech Generator</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3 text-left">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/audio"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3 text-left">Audio History</span>
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3 text-left">Sign Up</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowModal(true)}
                className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3 text-left">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80 max-w-full">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar

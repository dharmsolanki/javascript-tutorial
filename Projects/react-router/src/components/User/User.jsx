import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { name } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">👤 User Profile</h1>
        <p className="text-lg text-gray-600">
          <span className="font-semibold text-gray-800">User Name:</span> {name}
        </p>
      </div>
    </div>
  )
}

export default User;

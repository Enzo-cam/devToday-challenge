'use client'
import React from 'react'

const ButtonBack = () => {
  return (
    <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => window.history.back()}
        >
          Go back
        </button>
      </div>
  )
}

export default ButtonBack   
import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          assignment 14
        </h1>

        <div className="space-y-6">
          <Link href="/fetchAllRecords">
            <h2 className="text-2xl text-indigo-600 hover:text-indigo-500 font-semibold cursor-pointer transition duration-150 ease-in-out">
              Fetch All Records
            </h2>
          </Link>
          
          <Link href="/fetchDynamicData">
            <h2 className="text-2xl text-indigo-600 hover:text-indigo-500 font-semibold cursor-pointer transition duration-150 ease-in-out">
              Fetch Dynamic Data
            </h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
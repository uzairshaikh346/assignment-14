"use client"

import React from 'react'

function UserData( {users = []}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Body</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            users.map(user => {
              const { id, title, body } = user
              return (
                <tr key={id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserData
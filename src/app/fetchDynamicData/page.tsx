"use client"
import{ useEffect, useState } from 'react'
import UserData from '@/app/components/useData';

function page() {

  const API = 'https://jsonplaceholder.typicode.com/posts';

  const [users, setUsers] = useState([])

  const fetchUSer = async (url: any) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }

    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchUSer(API)
  }, []); 

  return (
    <div className="container mx-auto p-4">
      
          <UserData users={users} />
      
    </div>
  )
}

export default page
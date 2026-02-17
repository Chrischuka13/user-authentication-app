import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import api from '../api/axios'

const Profile = () => {
  const navigate = useNavigate()
  const {user, logout, getAuthHeaders} = useContext(AuthContext)
  const [data, setData] = useState("null")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const handleLogout = () => {
    logout()
    setTimeout(()=> navigate('/login'), 1000) 
  };

  useEffect(()=>{
    const fetchProfile = async () => {
      try {
        const response = await api.get("profile", 
          {headers: getAuthHeaders()}
        )
        setData(response.data.user);
      } catch (err) {
        console.error(err)
        console.log(err.response);
        setError(err.response?.data?.message || "Failed to load profile")
      }finally{
        setLoading(false)
      }
    }
    

    if (user?.token) {
      fetchProfile()
    }
  }, [user])

  console.log(user);
  

  if (loading) return <p>Loading profile...</p>
  if (error) return <p style={{ color: "red" }}>{error}</p>


  return (
    <main>
        <section className='w-11/12 container mx-auto'>
          <div className='flex flex-col justify-center items-center h-screen'>
            <h2 className='text-3xl'>Profile</h2>
              <div className='flex flex-col items-center justify-center p-16 text-2xl bg-white rounded-2xl'>
                <h2 className='p-2 rounded bg-green-400 mb-4'>{data?.username}</h2>
                <h2 className='p-2 rounded bg-green-400'>{data?.email}</h2>
                <button onClick={handleLogout} className='mt-4 p-2 bg-purple-600 rounded-lg mb-4 text-white hover:cursor-pointer hover:bg-purple-700'>Logout</button>
              </div>
          
          </div>
        </section>
    </main>
  )
}

export default Profile
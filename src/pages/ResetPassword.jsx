import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';

const ResetPassword = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const {token} = useParams()

    const resetPassword = async(e) => {
        e.preventDefault()
        if (!password) {
            setError("input a new password")
            return
        }
        try {
            setLoading(true)
            const response = await api.post(`resetpassword/${token}`, {password})
            setSuccess(response.data.message)
            setPassword("")
            setTimeout(()=> navigate("/login"), 2000)
        } catch (err) {
            setError(err.response?.data?.message || 'RESET failed');
        }finally{
            setLoading(false)
        }
    }

  return (
    <main className='bg-[url(/images/bg-intro-desktop.png)] bg-cover bg-center bg-red-400'>
        <section className='w-11/12 container mx-auto py-12 flex justify-center items-center h-screen'>
            <form onSubmit={resetPassword} className='w-125 bg-white p-8 rounded-lg'>
                <div className='relative'>
                    <label htmlFor="">Enter your New Password</label>
                    <input name='password' type="password" placeholder='New Password' value={password} onChange={(event)=> {setPassword(event.target.value); setError("")}} className='p-2 mb-4 mt-4 w-full'/>
                    {error && <img src="/images/icon-error.svg" alt="" className='absolute top-14 right-3'/>}

                    {success && <p className='py-2 ' style={{color: "green"}}>{success}</p>}
                    {error && <p className='py-2' style={{color: "red"}}>{error}</p>}

                    <button type='submit' className='mb-2'>{loading? "RESETTING..." : "CHANGE PASSWORD"}</button>
                </div>
                
            </form>
        </section>
    </main>
  )
}

export default ResetPassword
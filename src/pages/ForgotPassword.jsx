import axios from 'axios';
import React, { useState } from 'react'

const ForgotPassword = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const sendResetLink = async(e) => {
        e.preventDefault()

        if (!email) {
            setError("please input your email")
            setSuccess("")
            return
        }

        try {
            setIsLoading(true)
            const response = await axios.post(`${API_URL}/forgotpassword`, {email}) 
            setEmail("")
            setSuccess(response.data.message || "Reset link sent to your email.");
            
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Something went wrong, try again.");

        } finally{
        setIsLoading(false)
        }
    }
  return (
    <main className='bg-[url(/images/bg-intro-desktop.png)] bg-cover bg-center bg-red-400'>
        <section className='w-11/12 container mx-auto py-12 flex justify-center items-center h-screen'>
            <form onSubmit={sendResetLink} className='w-125 bg-white p-8 rounded-lg'>
                <div className='relative'>
                    <label htmlFor="">Enter your Email Address</label>
                    <input name='email' type="email" placeholder='Email Address' value={email} onChange={(event)=> {setEmail(event.target.value); setError(""); setSuccess("")}} className='p-2 mb-4 mt-4 w-full'/>
                    
                    {success && <p className='py-2 ' style={{color: "green"}}>{success}</p>}
                    {error && <p className='py-2' style={{color: "red"}}>{error}</p>}

                    <button type='submit' className='mb-2'>{isLoading? "sending reset link..." : "SEND LINK"}</button>
                </div>
                
            </form>
        </section>
    </main>
  )
}

export default ForgotPassword
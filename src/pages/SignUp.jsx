import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios';

const SignUp = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()
    const [username, setuserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onSignUp = async(e) => {
        e.preventDefault()
        if (!username || !email || !password) {
            setError("Please fill all necessary input")
            return
        }
        
        try {
            setIsLoading(true)
            setError("")
            const response = await api.post(`${API_URL}/signup`, {username, email, password})
            console.log(response.data);      
            setSuccess("Verification mail sent")
            setTimeout(()=> navigate("/login"), 2000)
 
        } catch (err) {
            console.error(err)
            const message = err.response?.data?.message || err.message || "Signup failed"
            setError(message)
        }finally{
            setIsLoading(false)
        }
    }

  return (
    <main className='bg-[url(/images/bg-intro-desktop.png)] bg-cover bg-center bg-red-400'>
        <section className='w-11/12 container mx-auto py-12 flex justify-center items-center lg:py-0'>
            <div className='lg:flex justify-center items-center gap-10 lg:h-screen'>
                <div className='text-center lg:max-w-130  md:text-start mb-8'>
                    <h2 className='text-3xl md:text-5xl mb-6 text-white font-bold'>Learn to code by watching others</h2>
                    <p className='text-white '>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </div>

                <div className='lg:max-w-130 '>
                    <div className='bg-purple-700 p-4 text-white text-center rounded-lg mb-4'>Try it free 7 days then $20/mo. thereafter</div>

                    <form onSubmit={onSignUp} className='bg-white p-8 rounded-lg'>
                        <div className='relative'>   
                            <input name='name' type="text" placeholder='Username' value={username} onChange={(event) => setuserName(event.target.value)} className='p-2 mb-4 '/>
                            {error && <img src="/images/icon-error.svg" alt="" className='absolute top-3 right-3'/>}

                            <input name='email' type="email" placeholder='Email Address' value={email} onChange={(event)=> setEmail(event.target.value)} className='p-2 mb-4'/>
                            {error && <img src="/images/icon-error.svg" alt="" className='absolute top-20 right-3'/>}

                            <input name='password' type="password" placeholder='Password' value={password} onChange={(event)=> setPassword(event.target.value)} className='p-2 mb-4'/>
                            {error && <img src="/images/icon-error.svg" alt="" className='absolute top-37 right-3'/>}
                        </div>

                        {success && <p className='py-2 ' style={{color: "green"}}>{success}</p>}
                        {error && <p className='py-2' style={{color: "red"}}>{error}</p>}

                        <button type='submit' className='w-full bg-green-600 text-white p-4 mb-2 hover:bg-green-700 hover:cursor-pointer'>{isLoading? "creating account..." : "SIGN UP"}</button>
                        <p>Already have an account? <Link to="/login" className='text-purple-400 hover:text-purple-800'>Log in instead</Link></p>
                    </form>
                </div>
            </div>
        </section>
    </main>
  )
}

export default SignUp
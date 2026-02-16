import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='bg-[url(/images/bg-intro-desktop.png)] bg-cover bg-center bg-red-400'>
        <section className='w-11/12 container mx-auto py-12 flex justify-center items-center lg:py-0 h-screen'>
            <div className='lg:flex justify-center items-center gap-10 lg:h-screen'>
                <div className='text-center lg:max-w-130  md:text-start mb-8'>
                    <h2 className='text-3xl md:text-5xl mb-6 text-white font-bold'>Chuka's User Authentication App </h2>
                    <p className='text-white'>This Application includes a real-life user authentication flow from signup, to email Verification, to user login and access to user profile data. Also a forgot-password and reset-password email can be sent to users email incase user forgets password. <br /> <span className='font-bold italic'>P.S your informations are safe!</span></p>
                </div>

                <div className='lg:max-w-130 '>
                    <div className='bg-purple-700 p-4 text-white text-center rounded-lg mb-4'>Keep it real and be yourself</div>

                    <div className='bg-white p-4 rounded-md'>
                        <button className='w-full bg-green-600 text-white p-4 mb-2 hover:bg-green-700 hover:cursor-pointer'><Link to='/signup'>CREAT AN ACCOUNT</Link></button>
                        <button className='w-full bg-green-600 text-white p-4 mb-2 hover:bg-green-700 hover:cursor-pointer'><Link to='/login'>LOGIN ACCOUNT</Link></button>
                        <div className='flex items-center justify-center'>
                            <img src="/images/user auth app.png" alt="" className='w-10 rounded-full'/>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    </main>
  )
}

export default Home
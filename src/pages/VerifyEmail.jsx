import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const VerifyEmail = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [isVerified, setIsVerified] = useState(false)
    const [error, setError] = useState("")
    const {token} = useParams()


    useEffect(() =>{
        if (!token) {
            setError("Invalid verification link");
            return;
        }
        const verify = async () => {
            try {
                await axios.get(`${API_URL}/verifymail/${token}`)
                setIsVerified(true)
            } catch (err) {
                setError(err.response?.data?.message || 'Verification failed');
                console.log(err.message);               
            }
        }
        verify()
    }, [token, API_URL])

  return (
    <main>
        <section className='w-11/12 container mx-auto'>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className="text-3xl mb-6">Email Verification</h1>
                    {isVerified && (
                        <div>
                            <h2 className="text-2xl mb-8">Email verified</h2><Link href="/login" className="p-2 bg-green-600 rounded-lg text-white">Login</Link>
                        </div>
                    )}

                    {/* {error && (
                        <h2 className="text-2xl bg-red-700 text-white p-2 mt-10">{error}</h2>
                    )} */}
            </div>
        </section>
    </main>
  )
}

export default VerifyEmail
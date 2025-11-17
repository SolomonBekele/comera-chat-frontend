import React, { useState } from 'react'
import { EMAIL as mockEmail, PASSWORD as mockPassword } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email === mockEmail && password === mockPassword) {
      toast.success("Logged in successfully!");

      // Save login
      localStorage.setItem("login", "true");

      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      toast.error("Email or Password is incorrect!");
    }
  }

  return (
    <div className="form-container bg-white p-8 rounded-2xl w-[28rem] flex flex-col items-center">
      <div className="title-container mb-8 text-center">
        <div className="message-icon h-14 w-14 bg-teal-500 flex justify-center items-center rounded-full m-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle w-8 h-8 text-white"
            aria-hidden="true"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
          </svg>
        </div>
        <p className="text-[oklch(.511_.096_186.391)] text-xl font-semibold">ChatApp Web</p>
        <h1 className="text-gray-700 text-lg">Sign in to continue</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
        <label htmlFor="email" className="text-sm mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-3 focus:ring-[oklch(.511_.096_186.391)]"
        />

        <label htmlFor="password" className="text-sm mb-2">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-3 focus:ring-[oklch(.511_.096_186.391)]"
        />

        <button
          type="submit"
          className="bg-[oklch(.704_.14_182.503)] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SigninForm

import React from 'react'
import Link from 'next/link'
import SignUpForm from '@/components/forms/SignUpForm'
const signup = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-100">
      <SignUpForm/>
    </section>
  )
}

export default signup
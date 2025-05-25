import React from 'react'

const AboutPage = () => {
  return (
    <main className="flex flex-col h-full w-full sticky overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Welcome to our application! We are dedicated to providing helpful resources for learning JavaScript algorithms.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Our goal is to make learning and practicing algorithms an engaging and accessible experience for everyone.
      </p>
    </main>
  )
}

export default AboutPage

import React from 'react'

const ContactPage = () => {
  return (
    <main className=" h-full w-full sticky bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Have questions or feedback? Get in touch with us!
      </p>
      <div className="mt-8">
        <p className="text-gray-600 dark:text-gray-400">Email: support@example.com</p>
        <p className="text-gray-600 dark:text-gray-400">Phone: (123) 456-7890</p>
        <p className="text-gray-600 dark:text-gray-400">Address: 123 Main Street, Anytown, USA</p>
      </div>
    </main>
  )
}

export default ContactPage

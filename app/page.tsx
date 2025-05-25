'use client'

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full sticky overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
      <div className="flex flex-col items-center justify-center h-full w-full flex-1 overflow-auto p-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Welcome to the JavaScript Algorithms Playground
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
          Explore various JavaScript algorithms and their solutions.
        </p>
        {/* You can add more content or links here */}
      </div>
    </main>
  );
}

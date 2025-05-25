'use client'

import { useState } from 'react';
import { Sidebar } from '@/components/ui/sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store'; 
import { SidebarItem } from '@/lib/features/sidebarSlice'; 

interface Method extends SidebarItem {
  details: string; 
}

export default function NotesPage() {
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null);

  const methods = useSelector((state: RootState) => state.sidebar.items as Method[]);

  return (
    <>
      <Sidebar className="bg-gray-200 dark:hover:bg-gray-700 h-full overflow-y-auto ">
        <h2 className="text-xl font-bold mb-4">Problem Solutions</h2>
        <ul className='dark:bg-gray-900'>
          {methods.map((method) => (
            <li key={method.url} className="cursor-pointer py-1 hover:bg-gray-300 dark:hover:bg-gray-700" onClick={(e) => {
              e.preventDefault();
              setSelectedMethod(method);
            }}>
              {method.icon} {method.title}
            </li>
          ))}
        </ul>
      </Sidebar>

      {/* Main Content Area */}
      <div className="flex flex-col h-full w-full overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      {selectedMethod ? (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedMethod.title}</h2>
            {/* Display details here */}
            <p>{selectedMethod.details}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full p-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
              Select a Method from the Sidebar
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center ">
               Click on a method in the sidebar to view its details.
            </p>
          </div>
        )}
      </div>
    </>
  );
} 
import React from 'react'
import Sidebar from '@/components/Sidebar'

const App = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='rounded-lg p-4 bg-white w-full flex gap-4 items-center'>
            <Sidebar />
        </div>  
    </div>
  )
}

export default App
import React from 'react'

const BeforeDashboard: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Clear Cache</h2>
      <div className="w-full mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div>See this works</div>
        <div>See this works</div>

        <div>See this works</div>

        <div>See this works</div>

        <div>See this works</div>

        <div className="text-red-400">See this works</div>
      </div>
    </div>
  )
}

export default BeforeDashboard

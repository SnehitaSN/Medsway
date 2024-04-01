import React from 'react'
import DashboardNavbar from '../dashboardnavbar/DashboardNavbar'
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar'


function DashboardLayout({children}) {
  return (
    <div className="flex h-screen">
  <DashboardSidebar/>
    <div className="flex flex-col flex-1">
      <DashboardNavbar />
      <div className="p-4">
        {children}
      </div>
    </div>
  </div>
  )
}

export default DashboardLayout
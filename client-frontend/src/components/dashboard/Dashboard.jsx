import React from 'react'
import './dashboard.css'
import List from '../dashboardList/List'
import DeshboardHeader from '../dashboardHeader/DeshboardHeader'

function Dashboard() {
  return (
    <div>
      <DeshboardHeader/>
      <List/>
    </div>
  )
}

export default Dashboard

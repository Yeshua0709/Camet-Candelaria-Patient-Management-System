import React from 'react'
import OverView from './Overview'
import Sidebar from './Sidebar'
export default function Dashboard(props){
    return (
     
      <div>
          <Sidebar />
          <OverView />
      </div>
     
    )
}
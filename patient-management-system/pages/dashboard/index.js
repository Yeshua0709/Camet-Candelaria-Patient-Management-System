import React from 'react'
import Sidebar from './Sidebar'
import Overview from './Overview'
import {activeComponent} from './Sidebar'

export default function Dashboard(props){


    return (
   
      <div>
          <Sidebar/>
          {activeComponent}

          
      </div>
     
    )
}
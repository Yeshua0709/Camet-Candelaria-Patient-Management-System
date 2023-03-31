import React, { Component, useState } from 'react'
import Overview from './Overview'
import { Actor } from 'next/font/google';
import Patients from './Patients';

export default function Sidebar(){

  let [activeComponent, setActiveComponent] = useState(<Overview />);

    
    return (

        <nav>
            <ul>
                <button onClick={() => setActiveComponent(<Overview/>)}>Overview</button>
                <button onClick={() => setActiveComponent(<Patients />)}> Patients</button>
            </ul>

            {activeComponent}
        </nav>
    
    )
}


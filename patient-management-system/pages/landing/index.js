import React from 'react'
import Logo from './landingimgs/logo2.png'
import Image from 'next/image'




export default function LandingPage(){
    return(

         <div> 
            
            <div className='landgrp1'>
                <div className='landcontainer1'>
                    <div className='landnav'>
                        <div className='navwindow1'>
                            <Image className='navlogo'
                            src={Logo}
                            alt="Picture of the author"
                            width="auto"
                            height="auto"
                            />

                            <p>Camet Candelaria</p>
                        </div>

                        <div className="navwindow2">
                            <a href='' className='navlabel'>Home</a>
                            <a href='' className='navlabel'>Services</a>
                            <a href='' className='navlabel'>About</a>
                            <a href='' className='navlabelbut'><p>Book Now</p></a>
                        </div>
                    </div>

                    <div className='landwindow3'>
                            <div className='landleft1'>
                                <p className='landlefttext1'>Smile with confidence, with our dental care excellence.</p>
                                <p className='landlefttext2'>Achieve your perfect smile with our expert dental care. From routine cleanings to cosmetic dentistry, our experienced team provides high-quality care in a comfortable environment. Book your appointment today!</p>
                                <div className='landbutt'>
                                <a className='landbutton1' href=''>Book an Appointment</a>
                                </div>
                            </div>
                            
                            <div className='landright1'>
                                <Image className='rightlogo'
                                src={Logo}
                                alt="Picture of the author"
                                width="auto"
                                height="auto"
                                />
                            </div>
                    </div>
                </div>
            </div>


           


         </div>
        
    )
}
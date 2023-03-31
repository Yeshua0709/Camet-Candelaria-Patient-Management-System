import React from 'react'
import Logo from './landingimgs/logo2.png'
import Image from 'next/image'
import Girl from './landingimgs/girl.png'



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


            <div className='landgrp2'>
                <div className='landcontainer2'>
                    <div className='landheader2'>
                        <p> Services</p>
                    </div>
                    <div className='landflexbox2'>
                        <div className='landbox1'>
                            <div className='header2_1'>
                                <p>Preventive Care</p>
                            </div>
                            <ul>
                                <li>&bull; Checkups</li>
                                <li>&bull; Cleanings</li>
                                <li>&bull; X-Ray</li>
                                <li>&bull; Dental Sealant</li>
                                <li>&bull; Fluoride Treatment</li>
                            </ul>
                        </div>

                        <div className='landbox1'>
                            <div className='header2_1'>
                                <p>Restorative Care</p>
                            </div>
                            <ul>
                                <li>&bull; Fillings</li>
                                <li>&bull; Crowns</li>
                                <li>&bull; Bridges</li>
                                <li>&bull; Root Canal Therapy</li>
                            </ul>
                        </div>

                        <div className='landbox1'> 
                            <div className='header2_1'>
                                <p>Cosmetic Dentistry</p>
                            </div>
                            <ul>
                                <li>&bull; Teeth Whitening</li>
                                <li>&bull; Veneers</li>
                                <li>&bull; Braces</li>
                                <li>&bull; Aligners</li>
                            </ul>
                        </div>
        
                    </div>
                </div>
            </div>

            <div className='landgrp3'>
                <div className='landcontainer3'>
                    <div className='landflexbox3'>
                        <div className='header3'>
                            <p>About Us</p>
                        </div>
                        <div className='text3'>
                            <p>The dental clinic is a team of friendly and compassionate dental professionals dedicated to providing high-quality dental care services to their patients. They offer a wide range of dental services, including preventive care, complex restorative treatments, and cosmetic dentistry services. The clinic is equipped with state-of-the-art facilities and accepts most insurance plans, providing flexible payment options to fit patients' budgets and schedules.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='landgrp4'>
                <div className='landcontainer4'>
                             
                    <div className='landflexbox4'>
                       
                        <div className='landwindow4_1'>
                            <div className='landh4'>
                                <p>BOOK YOUR APPOINTMENT</p>
                            </div>

                            <div className='landform'>
                                <label for='landfname'>First Name</label>
                                <br></br>
                                <input type='text' id='landfname' name='fname'></input>

                                <br></br>

                                <label for='landlname'>Last Name</label>
                                <br></br>
                                <input type='text' id='landlname' name='lname'></input>

                                <br></br>

                                <label for='landlname'>Gender</label>
                                <br></br>
                                <select id="cars" name="cars">
                                    <option value="volvo">Male</option>
                                    <option value="saab">Female</option>
                                    <option value="saab">Others</option>
                                </select>

                                
                                <br></br>

                                <label for='landemail'>Email</label>
                                <br></br>
                                <input type='text' id='landemail' name='email'></input>

                                <br></br>

                                <label for='landnnum'>Number</label>
                                <br></br>
                                <input type='text' id='landnum' name='num'></input>

                                <br></br>
                                <br></br>
                                <input type="submit" value="Submit"></input>
                            </div>
                        </div>
                        <div className='landwindow4_2'>
                                <Image className='rightlogo'
                                src={Girl}
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
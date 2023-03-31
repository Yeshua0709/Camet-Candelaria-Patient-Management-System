import React, { useState } from 'react'

export default function Login(){

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn,setIsLoggingIn] = useState(true)

    const { login, signup, currentUser } = useAuth()
    console.log(currentUser)
    
    function submitHandler () {
        if (!email || !password){
           setError('Input Error')
        }
    }
    return (

        <div>


            <div className='logInContainer'>

              <div className='logInFlexBox'>

                <div className='logo'>
                    <h1>Camet-Candelaria Dental Clinic</h1>
                </div>


                <div className='form'>
                        
                <h1>{isLoggingIn ? 'LOGIN' : 'REGISTER'}</h1>
            {error &&<div>{error}</div>}
            <input type="text" 
            value ={email || ''} 
            onChange={(e) => setEmail(e.target.value)} 
            className='' 
            placeholder="Enter Username" />

            <input type="password" 
            value ={password || ''}
            onChange={(e) => setPassword(e.target.value)}
            className='' 
            placeholder="Enter password" />
            <button onClick={submitHandler}>Login</button>
            <h2 onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Register'}</h2>
                


                </div>


              </div>



            </div>
        


          
            


        </div>
    )
}
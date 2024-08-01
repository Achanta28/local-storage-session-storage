import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let emailInputRef= useRef();
    let passwordInputRef = useRef();
    let emailResultRef = useRef();
    let passwordResultRef = useRef();
    let messageInputRef = useRef();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let navigate = useNavigate();




     //emailvalidation

   let validateEmail = (emailStr,resultRef)=>{
    let result = emailRegex.test(emailStr)

    if(result){
        resultRef.current.innerHTML = "valid"
        resultRef.current.style.backgroundColor="green"


    }else{
         resultRef.current.innerHTML = "invalid"
        resultRef.current.style.backgroundColor="red"

    }
   }

   //password validation

   let validatePassword = (passwordStr,resultRef)=>{
    let result = passwordRegex.test(passwordStr)

    if(result){
        resultRef.current.innerHTML = "valid"
        resultRef.current.style.backgroundColor="green"


    }else{
         resultRef.current.innerHTML = "invalid"
        resultRef.current.style.backgroundColor="red"

    }
   }

  
   //onFocus
   let inputOnFocus = (inputRef,bgColor="orange",color="black") =>{
    inputRef.current.style.backgroundColor=bgColor;
    inputRef.current.style.color=color;
   }


    //onBlur
    let inputOnBlur = (inputRef,color="black") => {
        inputRef.current.style.backgroundColor="";
        inputRef.current.style.color=color;
    }
  
    useEffect(()=>{
        emailInputRef.current.value = localStorage.getItem("Email")
        passwordInputRef.current.value = localStorage.getItem("Password")
        onLogicClick();
    },[])


    let onLogicClick = ()=>{
        let typedEmail = emailInputRef.current.value;
        let typedPassword = passwordInputRef.current.value;
        if(typedEmail=="veeresh@gmail.com" &&
            typedPassword == "S@i*1364"
        ){
           sessionStorage.setItem("Email",emailInputRef.current.value)
           sessionStorage.setItem("Password",passwordInputRef.current.value)
          
             navigate("/dashboard");
    
         }else{
            alert("usename/and password wrong")
         }

    }

   
   


  return (
    <div>
    
        <form className='form'>
            <h2 style={{backgroundColor:"black",color:"white",
                fontSize:"2rem",borderRadius:"50px",
                boxShadow:"10px 10px 10px grey"}}>Login</h2>
            <div className='formDiv'>
            <label className='formLabel'>Email</label>
            <input type='email' ref={emailInputRef}
             onFocus={()=>{
                inputOnFocus(emailInputRef,"violet","white");
                
            }}
            onChange={()=>{
                validateEmail(emailInputRef.current.value,emailResultRef)
            }}

            onBlur={()=>{
                inputOnBlur(emailInputRef);
            }}></input>
            <span ref={emailResultRef}></span>
            </div>
            
            <div className='formDiv'>
            <label className='formLabel'>Password</label>
            <input  ref={passwordInputRef}
             onFocus={()=>{
                inputOnFocus(passwordInputRef,"violet","white");
                
            }}
            onChange={()=>{
                validatePassword(passwordInputRef.current.value,passwordResultRef)
            }}

            onBlur={()=>{
                inputOnBlur(passwordInputRef);
            }}></input>
            <span ref={passwordResultRef}></span>
            </div>
            {/* <div  className='formDiv'>  
                <label className='formLabel'>Message</label>
                <input  ref={messageInputRef}
                 onFocus={()=>{
                    inputOnFocus(messageInputRef);
                    
                }}
                onBlur={()=>{
                    inputOnBlur(messageInputRef);
                }}
                
                ></input>
                <span></span>
            </div> */}
            
            <button type='button' onClick={()=>{
                onLogicClick();
            }}>Login</button>
           
        </form>
        <br></br>
        <br></br>
        <Link to="/signup">Signup</Link>
        
       
        
    </div>

  )
}

export default Login

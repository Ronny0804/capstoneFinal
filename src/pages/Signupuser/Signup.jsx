import React,{useEffect, useState} from "react";
import "./signup.css"
import {signUp} from '../../action'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signup = () => {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [Business,setBusiness] = useState("")
const[username,setUsername] = useState("")
const [loading,setLoading]=useState(false)
  const dispatch =useDispatch()
  const navigate= useNavigate()
  const user = useSelector(state=>state.user.user)

  const handleOnSubmit=(e)=>{
      e.preventDefault()
      dispatch(signUp(email,password,Business,username,setLoading))

  }

  useEffect(()=>{
    if(user) navigate("/")
  },[user])


  return (
    <>
      <div id="signupuser" className="container mt-5">
      <div>
        <div className="background ">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form onSubmit={handleOnSubmit}>
          <h3>Signup User</h3>
          <label htmlFor="username">Full Name</label>
          <input type="text" placeholder="Enter Your Name" id="username"  value={username} onChange={(e)=>setUsername(e.target.value)}  />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="business">Business Type</label>
          <input type="text" placeholder="Ex : Panshop,Hotel,NGO" id="business" value={Business} onChange={(e)=>setBusiness(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          
          <button>{loading?"loading..":"Signup"}</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Signup;
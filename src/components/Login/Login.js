import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [jwt, setJwt] = useState({});
    const nameRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        const user = {
            userName: nameRef.current.value,
            password: passRef.current.value
        }

        fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setJwt(data);
            JSON.stringify(localStorage.setItem("token", data.token));
        });
        navigate('/');
        e.preventDefault();
    }
    return (
        <div>
          <form onSubmit={handleLogin}>
             <div>   
               <label>Username : </label>   
               <input type="text" placeholder="Enter Username" ref={nameRef} name="username" required/> 
               <br /> 
               <label>Password : </label>   
               <input type="password" placeholder="Enter Password" ref={passRef} name="password" required/>
               <br />
               <input type="submit" value="Login" />         
             </div>   
          </form>
        </div>
    );
};

export default Login;
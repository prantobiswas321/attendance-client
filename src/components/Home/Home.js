import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import Search from './Search';

const Home = () => {
    const [data, setData] = useState([]);
    const [employees, setEmployee] = useState([]);
    const idRef = useRef();

    useEffect(()=>{
        fetch(`http://localhost:5000/employees`)
        // .then(res=>res.json())
        .then(res=> res.json())
        .then(data=>setData(data))
    },[]);

    const handleSearch = e =>{
        const id = idRef.current.value;
        data.forEach(d=>{
            if(d._id === id){
                fetch(`http://localhost:5000/employees/${id}`)
                .then(res=> res.json())
                .then(data=>setEmployee(data))
            }
            // else if(d._id !== id){
            //     alert('Wrong password');
            // }
            else{
                return;
            }
        })
        // fetch(`http://localhost:5000/employees/${id}`)
        // .then(res=> res.json())
        // .then(data=>setEmployee(data))
        // console.log(id);
        e.preventDefault();
        idRef.current.value = "";
    }
    
    

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" ref={idRef} placeholder="Search Id" id="" />
                <input type="submit" value="Search" />
            </form>
            {
                <Search employees={employees}></Search>
            }
        </div>
    );
};
export default Home;
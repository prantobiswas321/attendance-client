import React, { useRef, useState } from 'react';
import Axios from 'axios';
import Search from './Search';

const Home = () => {
    
    const [employees, setEmployee] = useState([]);
    const idRef = useRef();

    const handleSearch = e =>{
        const id = idRef.current.value;
        fetch(`http://localhost:5000/employees/${id}`)
        // .then(res=>res.json())
        .then(res=> res.json())
        .then(data=>setEmployee(data));
        // console.log(id);
        e.preventDefault();
    }
    
    

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" ref={idRef} id="" />
                <input type="submit" value="Search" />
            </form>
            {
                <Search employees={employees}></Search>
            }
        </div>
    );
};
export default Home;
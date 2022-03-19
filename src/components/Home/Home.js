import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import Axios from 'axios';
import Search from './Search';
import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [employees, setEmployee] = useState([]);
    const [date, setDate] = useState(new Date());
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
                setEmployee("");
            }
        })
        // fetch(`http://localhost:5000/employees/${id}`)
        // .then(res=> res.json())
        // .then(data=>setEmployee(data))
        // console.log(id);
        e.preventDefault();
        idRef.current.value = "";
    }

    const onChange = date =>{
        setDate(date);
        const attendencedate = date.toLocaleDateString();
        const Attendencedtlid = employees._id;

        console.log(employees._id);
    }
    
    

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" ref={idRef} placeholder="Search Id" id="" />
                <input type="submit" value="Search" />
            </form>
            {
                employees ?
                <Search employees={employees}></Search>
                :
                <p>Id not found</p>
            }
            <div className='center'>
                <Calendar onChange={onChange} value={date} />
                {console.log(date.toLocaleDateString())}
            </div>
        </div>
    );
};
export default Home;
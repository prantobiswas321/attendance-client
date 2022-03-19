import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import Axios from 'axios';
import Search from './Search';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const jwt = localStorage.getItem("token");
    // console.log(jwt);
    // const [jwt,setJwt] = useState(localStorage.getItem("token"));
    const [data, setData] = useState([]);
    const [employees, setEmployee] = useState([]);
    const [date, setDate] = useState(new Date());
    const idRef = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://peaceful-fortress-55120.herokuapp.com/employees')
        // .then(res=>res.json())
        .then(res=> res.json())
        .then(data=>setData(data))
    },[]);

    const handleSearch = e =>{
        const id = idRef.current.value;
        data.forEach(d=>{
            if(d._id === id){
                fetch(`https://peaceful-fortress-55120.herokuapp.com/employees/${id}`)
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

    const onChange = date => {
        setDate(date);
        const attendencedate = date.toLocaleDateString();
        const Attendencedtlid = employees._id;

        const attendance = {
            Attendencedtlid,
            attendencedate
        };

        if(employees.status === 1){
            fetch('https://peaceful-fortress-55120.herokuapp.com/employees/attendance', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(attendance)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Attendance added successfully');
            }
        });
        }
        else{
            alert('Not a active employee');
        }
    };

    const logOut = () =>{
        window.localStorage.removeItem("token");
        navigate("/login");
    }
    
    

    return (
        <div className="top-margin">
            <button onClick={logOut}>Log out</button>
            <form onSubmit={handleSearch}>
                {
                    jwt && <div>
                        <input type="text" ref={idRef} placeholder="Search Employee by Id" id="" />
                        <input type="submit" value="Search" />
                    </div>
                }
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
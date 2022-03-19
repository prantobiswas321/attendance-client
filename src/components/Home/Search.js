import React from 'react';

const Search = (props) => {
    const {_id, employeeName, status, totalAbsent, totalDays, totalPresent} = props.employees;
    // console.log('This is :',props);
    return (
        <div>
            <p>Id: {_id}</p>
            <p>Employee Name: {employeeName}</p>
            <p>Status : {status}</p>
            <p>Total Working days :  {totalDays}</p>    
            <p>Total Present Days : {totalPresent}</p>    
            <p>Total Absent Days : {totalAbsent}</p>    
        </div>
    );
};

export default Search;
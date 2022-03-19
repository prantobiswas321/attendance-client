import React from 'react';

const Search = (props) => {
    const {_id, employeeName, status, totalAbsent, totalDays, totalPresent} = props.employees;
    // console.log('This is :',props);
    return (
        <div>
            <p>Id: {_id}</p>
            <p>Name: {employeeName}</p>
            <p>Status : {status}</p>
            <p>Total Days : {totalDays}</p>    
            <p>Total Present : {totalPresent}</p>    
            <p>Total Absent : {totalAbsent}</p>    
        </div>
    );
};

export default Search;
import React from "react";

function JobCard({jobData}) {
    const title = jobData['title'];
    const salary = jobData['salary']
    const equity = jobData['equity']
    return (
    <div>
        <h1>Title: {title}</h1>
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>
    </div>
    )
}

export default JobCard;
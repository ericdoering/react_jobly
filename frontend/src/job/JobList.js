import React, { useEffect, useState } from "react";

import JobCard from './JobCard';


function JobList({jobs, isLoading}) {
    if(isLoading) {
        return <div>Loading placeholder..... </div>
    }
    return (
    <div>
        {Object.keys(jobs).map((key) => <JobCard key={jobs[key]['id']} jobData={jobs[key]}/>)}
    </div>
    );
  }
  
  export default JobList;
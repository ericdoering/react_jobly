import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import JoblyApi from "../api/api";
import JobCard from "./JobCard"

function JobList() {
  console.debug("JobList");

  const [jobs, setJobs] = useState([]);

  useEffect(function getAllJobsOnMount() {
    console.debug("JobList useEffect getAllJobsOnMount");
    search();
  }, []);

  
  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
      <div className="JobList col-md-8 offset-md-2">
        <SearchBar searchFor={search} />
        {jobs?.length
            ? <JobCard jobs={jobs} />
            : <p className="lead">Sorry, no results were found!</p>
        }
      </div>
  );
}

export default JobList;
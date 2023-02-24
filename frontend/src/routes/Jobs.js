import React, { useEffect, useState } from "react";
import JobList from "../job/JobList";
import JoblyApi from "../api/api";


function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function fetchJobs() {
        let jobData = await JoblyApi.getJobs();
        setJobs(jobData)
        setIsLoading(false)
      }
      fetchJobs()
    }, [])

  return (
    <div>
      <JobList jobs={jobs} isLoading={isLoading} />
    </div>
  );
}

export default Jobs;
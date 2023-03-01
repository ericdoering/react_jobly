import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import JoblyApi from "../api/api";
import JobCard from "./JobCard"

/** Show page with list of jobs.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * JobList -> JobCardList -> JobCard
 *
 * This is routed to at /jobs
 */

function JobList() {
  console.debug("JobList");

  const [jobs, setJobs] = useState([]);

  useEffect(function getAllJobsOnMount() {
    console.debug("JobList useEffect getAllJobsOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    console.log("JOBS SHOULD BE HERE", jobs)
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
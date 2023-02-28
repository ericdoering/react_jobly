import React from "react";
import JobDetail from "./JobDetail"

/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function JobCard({ jobs, apply }) {
  console.debug("JobCardList", "jobs=", jobs);

  return (
      <div className="JobCardList">
        {jobs.map(job => (
            <JobDetail
                key={job.id}
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
            />
        ))}
      </div>
  );
}

export default JobCard;
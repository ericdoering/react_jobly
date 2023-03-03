import React from "react";
import JobDetail from "./JobDetail"


function JobCard({ jobs, apply }) {
  console.debug("JobCardList", "jobs=", jobs);

  return (
      <div className="JobCardList">
        {jobs?.map(job => (
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
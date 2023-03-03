import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCard from "../job/JobCard";

import "./CompanyDetail";


function CompanyDetail() {
  const { handle } = useParams();
  console.debug("CompanyDetail", "handle=", handle);

  const [company, setCompany] = useState([]);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  return (
      <div className="CompanyDetail col-md-8 offset-md-2">
        <h4 className="company-title">{company.name}</h4>
        <p>{company.description}</p>
        <JobCard jobs={company.jobs} />
      </div>
  );
}

export default CompanyDetail;
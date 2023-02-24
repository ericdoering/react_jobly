import React, { useEffect, useState } from "react";
import CompanyList from "../company/CompanyList";
import JoblyApi from "../api/api";


function Companies() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function fetchCompanies() {
        let companyData = await JoblyApi.getCompanies();

        setCompanies(companyData)
        setIsLoading(false)
      }
      fetchCompanies()
    }, [])

  return (
    <div>
      <CompanyList companies={companies} isLoading={isLoading} />
    </div>
  );
}

export default Companies;
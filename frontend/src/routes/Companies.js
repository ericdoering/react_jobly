import React, { useEffect, useState } from "react";
import CompanyList from "../company/CompanyList";
import JoblyApi from "../api/api";
import SearchBar from "../SearchBar";
import { sendSearch } from "../SearchBar"


function Companies() {
 
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function fetchCompanies() {
          let companyData = await JoblyApi.getCompanies();
          setCompanies(companyData)
      
        // setCompanies(companyData)
        setIsLoading(false)
      }
      fetchCompanies()
    }, [])

  return (
    <div>
      <SearchBar />
      <CompanyList companies={companies} isLoading={isLoading} />
    </div>
  );
}

export default Companies;
import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import JoblyApi from "../api/api";
import CompanyCard from "../company/CompanyCard"


function CompanyList() {

  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesOnMount() {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);



  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
      <div className="CompanyList col-md-8 offset-md-2">
        <SearchBar searchFor={search} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
  );
}

export default CompanyList;
import React, { useEffect, useState } from "react";

import CompanyCard from './CompanyCard';


function CompanyList({companies, isLoading}) {
    if(isLoading) {
        return <div>Loading placeholder..... </div>
    }
    return (
    <div>
        {Object.keys(companies).map((key) => <CompanyCard key={key} companyData={companies[key]}/>)}
    </div>
    );
  }
  
  export default CompanyList;
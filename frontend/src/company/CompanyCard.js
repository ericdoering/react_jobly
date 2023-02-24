import React from "react";

function CompanyCard({companyData}) {
    const name = companyData['name'];
    const description = companyData['description']
    return (
    <div>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
    )
}

export default CompanyCard;
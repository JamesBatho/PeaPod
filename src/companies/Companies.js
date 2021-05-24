import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

function Companies() {
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function loadCompanies() {
      const companyList = await JoblyApi.getCompanies();
      setCompanies(companyList);
    }
    loadCompanies();
    console.log(companies);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function loadCompanies() {
      const companyList = await JoblyApi.getCompanies(search);
      setCompanies(companyList);
    }
    loadCompanies();
    setSearch("");
  };

  return (
    <div className="Companies container">
      <h2 className="mt-3 ml-2"> Jobly Company Database </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group m-2">
          <label htmlFor="search"> Search for a Company:</label>
          <input
            className="form-control"
            value={search}
            type="text"
            placeholder="Search"
            id="search"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn btn-info m-2"> Search</button>
      </form>
      <p className="ml-2"> or click on one below!</p>
      <div className="CompanyCards">
        {companies.map(
          ({ name, logoUrl, numEmployees, description, handle }) => {
            return (
              <CompanyCard
                name={name}
                logoUrl={logoUrl}
                numEmployees={numEmployees}
                description={description}
                handle={handle}
                key={handle}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Companies;

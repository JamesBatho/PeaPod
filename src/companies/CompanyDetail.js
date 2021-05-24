import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "../jobs/JobCard";

function CompanyDetail() {
  const [company, setCompany] = useState([]);
  let params = useParams();

  useEffect(() => {
    async function loadCompany() {
      const company = await JoblyApi.getCompany(params.handle);
      setCompany(company);
    }
    loadCompany();
  }, [params]);
  const { name, description, numEmployees, jobs } = company;

  if (!company.jobs) return <h2> Your page is loading...</h2>;

  return (
    <div className="CompanyDetail container">
      <h2 className="mt-2"> {name} </h2>
      <p> {description} </p>
      <p>
        We currently have <b>{numEmployees} </b>employees! If you would like to
        increment this number please apply below.
      </p>
      <h3> Jobs </h3>
      <div className="Jobs">
        {jobs.map((j) => (
          <JobCard
            id={j.id}
            companyName={j.company}
            salary={j.salary}
            title={j.title}
            equity={j.equity}
            key={j.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyDetail;

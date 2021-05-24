import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";

function Jobs() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function loadJobs() {
      const jobList = await JoblyApi.getJobs();
      setJobs(jobList);
    }
    loadJobs();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function loadJobs() {
      const jobList = await JoblyApi.getJobs(search);
      setJobs(jobList);
    }
    loadJobs();
    setSearch("");
  };

  return (
    <div className="jobs container">
      <h2 className="mt-3"> Jobly Job Database </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search"> Search for a Job:</label>
          <input
            className="form-control"
            value={search}
            type="text"
            placeholder="Search"
            id="search"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn btn-info"> Search</button>
      </form>
      <div className="JobCards">
        {jobs.map(({ id, companyName, salary, title, equity }) => {
          return (
            <JobCard
              id={id}
              companyName={companyName}
              salary={salary}
              title={title}
              key={id}
              equity={equity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;

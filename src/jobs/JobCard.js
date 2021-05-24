import React, { useState, useEffect, useContext } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

function JobCard({ id, companyName, salary, title, equity }) {
  const [applied, setApplied] = useState();
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);

  useEffect(() => {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  // apply to a job
  async function handleApply(e) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  let hasEquity = "Nope";
  if (equity) {
    hasEquity = "Yup";
  }
  return (
    <div className="JobCard card card-body">
      <h3 className="card-title"> {title} </h3>
      <h5 className="card-subtitle text-muted"> {companyName} </h5>
      <br></br>
      <p> Salary: {salary}</p>
      <p> Equity: {hasEquity}</p>
      <button
        className="btn btn-success"
        onClick={handleApply}
        disabled={applied}
      >
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
}

export default JobCard;

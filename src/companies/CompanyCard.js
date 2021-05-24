import React from "react";
import { useHistory } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ name, logoUrl, numEmployees, description, handle }) {
  let history = useHistory();

  const redirect = (handle) => {
    history.push(`/companies/${handle}`);
  };

  let logo = undefined;
  if (logoUrl) {
    const alt = `logo for ${name}`;
    logo = <img className="float-right" src={logoUrl} alt={alt} />;
  }
  return (
    <div
      onClick={() => redirect(handle)}
      className="CompanyCard card card-body"
    >
      <h3 className="card-title"> {name} </h3>
      {logo}
      <p className=""> {description}</p>
    </div>
  );
}

export default CompanyCard;

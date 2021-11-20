import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
import { useCandidates } from "./context/CandidateProvider";

export default function Home() {
  const { candidates, searchResult } = useCandidates();

  const display = searchResult ? searchResult : candidates;

  return (
    <div className="cards">
      <div className="card-grid">
        {display &&
          display.map((candidate) => (
            <div
              className={`${
                candidate.shortlisted === true
                  ? "cardSelected"
                  : candidate.shortlisted === false
                  ? "cardRejected"
                  : "card"
              }`}
              key={candidate.id}
            >
              <Link to={`/${candidate.id}`} className="linkC">
                <div className="image">
                  <img src={candidate.Image} alt="Avatar" />
                </div>
                <div className="container">
                  <h4>
                    <b>{candidate.name}</b>
                  </h4>
                  <p>{candidate.id}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useCandidates } from "./context/CandidateProvider";
import "./css/Candidate.css";

export default function Candidate(props) {
  const { candidates, shortlistCandidate, rejectCandidate } = useCandidates();
  const currentCandidateID = props.match.params.id;
  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <div className="candidate">
      {candidates
        ? candidates.map((candidate) => {
            if (candidate.id === currentCandidateID) {
              return (
                <div
                  className={`${
                    candidate.shortlisted === true
                      ? "ccardSelected"
                      : candidate.shortlisted === false
                      ? "ccardRejected"
                      : "ccard"
                  }`}
                  key={candidate.id}
                >
                  <Link to={`/${candidate.id}`} className="LinkC">
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
              );
            }
          })
        : null}
      <div className="button">
        <button
          className="shortlistB"
          onClick={() => {
            shortlistCandidate(currentCandidateID);
            redirect();
          }}
        >
          Shortlist
        </button>
        <button
          className="rejectB"
          onClick={() => {
            rejectCandidate(currentCandidateID);
            redirect();
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

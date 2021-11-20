import React, { useState, useContext } from "react";

const CandidateContext = React.createContext();

export function useCandidates() {
  return useContext(CandidateContext);
}

export default function CandidateProvider({ children }) {
  const [candidates, setCandidates] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  function searchCandidates(search) {
    if (!search) {
      setSearchResult(null);
      return;
    } else {
      setSearchResult(candidates.filter((c) => c.name === search));
    }
  }

  async function getCandidates() {
    try {
      const response = await fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      );
      const responseJson = await response.json();
      setCandidates(responseJson.map((r) => ({ ...r, shortlisted: null })));
    } catch (err) {
      console.log(err);
    }
  }

  function shortlistCandidate(candidateId) {
    setCandidates((prevCandidates) =>
      prevCandidates.map((c) => {
        if (c.id === candidateId) {
          return { ...c, shortlisted: true };
        }
        return c;
      })
    );
  }

  function rejectCandidate(candidateId) {
    setCandidates((prevCandidates) =>
      prevCandidates.map((c) => {
        if (c.id === candidateId) {
          return { ...c, shortlisted: false };
        }
        return c;
      })
    );
  }

  return (
    <CandidateContext.Provider
      value={{
        candidates,
        searchResult,
        getCandidates,
        shortlistCandidate,
        rejectCandidate,
        searchCandidates,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

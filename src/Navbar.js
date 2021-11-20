import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCandidates } from "./context/CandidateProvider";
import "./css/Navbar.css";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const { searchCandidates } = useCandidates();

  useEffect(() => {
    searchCandidates(search);
  }, [search]);
  return (
    <div className="navbar">
      <div className="nav-left">JOB PORTAL</div>
      <ul className="nav-right">
        <li>
          <div className="search">
            <input
              type="text"
              placeholder="...Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </li>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shortlisted" className="link">
            Shortlisted
          </Link>
        </li>
        <li>
          <Link to="/rejected" className="link">
            Rejected
          </Link>
        </li>
      </ul>
    </div>
  );
}

import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Rejected from "./Rejected";
import Shortlisted from "./Shortlisted";
import Home from "./Home";
import Candidate from "./Candidate";
import "./css/App.css";
import { useCandidates } from "./context/CandidateProvider";

function App() {
  const { getCandidates } = useCandidates();
  useEffect(() => {
    getCandidates();
  }, []);
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shortlisted" exact component={Shortlisted} />
          <Route path="/rejected" exact component={Rejected} />
          <Route path="/:id" exact component={Candidate} />
          {/* <Route path="/:search" exact component={Search} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

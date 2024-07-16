import React from "react";
import "../styles/proposal-page.css";

function ProposalPage() {
  return (
    <div className="proposal-page">
      <header>
        <div className="header-text">
          <h1>Apply for Access to Sandbox</h1>
        </div>
      </header>
      <main>
        <div className="access">
          <h2>Access to Sandbox</h2>
          <div className="partial">
            <h3>Partial Access</h3>
            <ul className="access-details">
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            </ul>
          </div>
          <div className="full">
            <h3>Full Access</h3>
            <ul className="access-details">
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            </ul>
          </div>
        </div>
        <div className="one-req access">
          <h3>One-Off Requests</h3>
          <ul className="access-details">
            <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ProposalPage;

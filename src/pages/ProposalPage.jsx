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
              <li>Projects cannot have WorkSessions inside Sandbox Lab.</li>
              <li>
                Projects can borrow parts from sandbox but must return after
                use.
              </li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            </ul>
          </div>
          <div className="full">
            <h3>Full Access</h3>
            <ul className="access-details">
              <li>WorkSessions for the project must be held in Sandbox Lab.</li>
              <li>Sandbox parts must not be taken outside Sandbox Lab.</li>
              <li>
                Projects will be alloted Worksession slots to work in the Lab.
              </li>
              <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            </ul>
          </div>
          <div className="access-btns">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSelN1pYBmSamhTbTcxNO4ngrP2ZRfxZm4K_6hdCKE1kLvUBaA/viewform">
              <button className="apply-btn">Apply</button>
            </a>
          </div>
        </div>
        <div className="one-req access">
          <h2>One-Off Requests</h2>
          <ul className="access-details">
            <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consec tetur adipisicing.</li>
          </ul>
          <div className="access-btns">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc7nQaLoM3pGOl6SoSVX5hYQ4kfIaqnyj9LJfNTq4YivqpEdw/viewform">
              <button className="apply-btn">Apply</button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProposalPage;

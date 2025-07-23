import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a Ticket, select a relevant topic</h1>

        <div className="col-4 p-5 mt-2 mb-2 ">
          <h4>
            <i className="fa-solid fa-square-plus"></i> Account Opening
          </h4>
          <div className="d-flex flex-column gap-3 mt-4">
            <a href="" style={{ textDecoration: "none" }}>Online Account Opening</a>
            <a href="" style={{ textDecoration: "none" }}>Offline Account Opening</a>
            <a href="" style={{ textDecoration: "none" }}>Company, Partnership and HUF Account Opening</a>
            <a href="" style={{ textDecoration: "none" }}>NRI Account Opening</a>
            <a href="" style={{ textDecoration: "none" }}>Charges at Stoxpro</a>
            <a href="" style={{ textDecoration: "none" }}>Stoxpro IDFC FIRST Bank 3-in-1 Account</a>
            <a href="" style={{ textDecoration: "none" }}>Getting Started</a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-user-plus"></i> Your Stoxpro Account
          </h4>
          <div className="d-flex flex-column gap-3 mt-4">
            <a href="" style={{ textDecoration: "none" }}>Login Credentials</a>
            <a href="" style={{ textDecoration: "none" }}>Account Modification and Segment Addition</a>
            <a href="" style={{ textDecoration: "none" }}>DP ID and bank details</a>
            <a href="" style={{ textDecoration: "none" }}>Your Profile</a>
            <a href="" style={{ textDecoration: "none" }}>Transfer and conversion of shares</a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-chart-bar"></i> Your Stoxpro Account
          </h4>
          <div className="d-flex flex-column gap-3 mt-4">
            <a href="" style={{ textDecoration: "none" }}>Margin/leverage, Product and Order types</a>
            <a href="" style={{ textDecoration: "none" }}>Kite Web and Mobile</a>
            <a href="" style={{ textDecoration: "none" }}>Trading FAQs</a>
            <a href="" style={{ textDecoration: "none" }}>Corporate Actions</a>
            <a href="" style={{ textDecoration: "none" }}>Sentinel</a>
            <a href="" style={{ textDecoration: "none" }}>Kite API</a>
            <a href="" style={{ textDecoration: "none" }}>Pi and other platform</a>
            <a href="" style={{ textDecoration: "none" }}>Stockreports+</a>
            <a href="" style={{ textDecoration: "none" }}>GTT</a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-money-check-dollar"></i> Funds
          </h4>
          <div className="d-flex flex-column gap-3 mt-4">
            <a href="" style={{ textDecoration: "none" }}>Adding Funds</a>
            <a href="" style={{ textDecoration: "none" }}>Fund Withdrawal</a>
            <a href="" style={{ textDecoration: "none" }}>eMandates</a>
            <a href="" style={{ textDecoration: "none" }}>Adding Bank Accounts</a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-chart-line"></i> Console
          </h4>
          <div className="d-flex flex-column gap-3 mt-4">
            <a href="" style={{ textDecoration: "none" }}>Reports</a>
            <a href="" style={{ textDecoration: "none" }}>Ledger</a>
            <a href="" style={{ textDecoration: "none" }}>Portfolio</a>
            <a href="" style={{ textDecoration: "none" }}>60 Day Challenge</a>
            <a href="" style={{ textDecoration: "none" }}>IPO</a>
            <a href="" style={{ textDecoration: "none" }}>Referral Program</a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-coins"></i> Coin
          </h4>
          <div className="d-flex flex-column gap-3 mt-4">
            <a href="" style={{ textDecoration: "none" }}>Understanding Mutual Funds</a>
            <a href="" style={{ textDecoration: "none" }}>About Coin</a>
            <a href="" style={{ textDecoration: "none" }}>Buying and Selling through Coin</a>
            <a href="" style={{ textDecoration: "none" }}>Starting an SIP</a>
            <a href="" style={{ textDecoration: "none" }}>Managing your Portfolio</a>
            <a href="" style={{ textDecoration: "none" }}>Coin App</a>
            <a href="" style={{ textDecoration: "none" }}>Moving to Coin</a>
            <a href="" style={{ textDecoration: "none" }}>Government Securities</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

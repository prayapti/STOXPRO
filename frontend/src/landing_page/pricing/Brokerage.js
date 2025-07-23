import React from 'react';

function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row mt-5 text-center justify-content-center align-items-start gx-5">
        <div className="col-md-6 px-md-4">
          <h2 className="fw-semibold text-primary mb-4">Brokerage calculator</h2>
          <ul className="text-muted" style={{ textAlign: "left", lineHeight: "2.2rem" }}>
            <li className="mb-2">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li className="mb-2">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-2">
              For NRI account (non-PIS): 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-2">
              For NRI account (PIS): 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-2">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-md-6 px-md-4">
          <h2 className="fw-semibold text-primary mb-4">List of charges</h2>
          <div className="text-muted " style={{  lineHeight: "2.2rem" }}>
            
             <p> Online account: <span className="badge bg-success-subtle text-success">Free</span> </p>
          
           
              <p>Offline account: <span className="badge bg-success-subtle text-success">Free</span></p>
           
           
             <p> NRI account (offline only): <span className="fw-bold">₹500</span></p>
         
             <p> Partnership, LLP, HUF, or Corporate accounts (offline only): <span className="fw-bold">₹500</span></p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

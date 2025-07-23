import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>The Stoxpro Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 p-3">
          <img
            src="media/smallcaselogo.png"
            className="img-fluid mb-2"
            style={{ maxHeight: "50px" }}
            alt="smallcase"
          />
          <p className="text-muted small">Thematic investment platform</p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/streakLogo.png"
            className="img-fluid mb-2"
            style={{ maxHeight: "50px" }}
            alt="Streak"
          />
          <p className="text-muted small">Algo & strategy platform</p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/sensibullLogo.svg"
            className="img-fluid mb-2"
            style={{ maxHeight: "50px" }}
            alt="Sensibull"
          />
          <p className="text-muted small">Options trading platform</p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/zerodhaFundhouse.png"
            className="img-fluid mb-2"
            style={{ maxHeight: "50px" }}
            alt="Zerodha Fund House"
          />
          <p className="text-muted small">Asset management</p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/goldenpiLogo.png"
            className="img-fluid mb-2"
            style={{ maxHeight: "50px" }}
            alt="GoldenPi"
          />
          <p className="text-muted small">Bonds trading platform</p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/dittoLogo.png"
            className="img-fluid mb-2"
            style={{ maxHeight: "50px" }}
            alt="Ditto"
          />
          <p className="text-muted small">Insurance</p>
        </div>
         <button className='p-2 btn btn-primary fs-5 mb-5'style={{width:"20%", margin:"0 auto  "}}> Signup Now </button>
      </div>
    </div>
  );
}

export default Universe;

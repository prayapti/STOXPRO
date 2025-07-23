import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>

      <div className="row px-5 pb-5" style={{ margin: "0 150px" }}>
        {/* Left Column */}
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected."
          />
          <br /><br />
          <div className="d-flex flex-column gap-2">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol className="mt-3">
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mt-2">
              <a href="#">Latest Intraday Leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

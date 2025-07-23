import React from "react";

function LeftSection({
  ImageURL,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6  ">
          <img src={ImageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>

          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px " }}>
              Learn More
            </a>
          </div>
          <div className="mt-3 ">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" />{" "}
            </a>
            <a href={appStore}>
              <img
                src="media/appStoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="Download on App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

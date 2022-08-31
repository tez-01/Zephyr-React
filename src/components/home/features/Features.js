import React from "react";

const Features = () => {
  return (
    <>
      <section className="features">
        <div className="container flex1">
          <div className="left">
            <div className="feature-text">
              <h1>
                Wonderful Digital Things <br /> Require A Good Mix Of <br />{" "}
                Combined Skills
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus autem incidunt assumenda blanditiis? Illo, ab.
                Aliquid ipsam dignissimos, quibusdam quae perferendis
                architecto. Minus, placeat. Quidem impedit quae fugit et facere.
              </p>
              <div className="btn-box">
                <button className="btn-one"> VIEW FEATURES </button>
                <button className="btn-one btn-f"> LEARN MORE </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img">
              <img
                src="./images/feature-1.png"
                alt=""
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

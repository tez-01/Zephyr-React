import React from "react";

const Count = () => {
  const data = [
    {
      num: "72+",
      text: "Button Combinations",
    },
    {
      num: "250",
      text: "Portfolio Combinations",
    },
    {
      num: "657",
      text: "Google Fonts",
    },
    {
      num: "80+",
      text: "IconBox Combinations",
    },
  ];
  return (
    <>
      <section
        className="count"
        style={{
          backgroundImage: "url(./images/count-img1.jpg )",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(90%)"
        }}
      >
        <div className="c-text">
          <h1>
            <span>ZEPHYR.</span> New Edge Of The Theme Experience!
          </h1>

          <div className="container flex">
            <div className="container grid2">
              {data.map((val) => {
                return (
                  <div className="box">
                    <h2>{val.num}</h2>
                    <p>{val.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Count;

import React from "react";

const Home = () => {
  return (
    <>
      <section className=" Home " style={{backgroundImage: "url(./images/Header.jpg",  backgroundPosition: "center"}}>
        <div className="container flex">
          <div className="content">
            <div className="content-text">
              <h2>Quality Is The Best <br/> Business Plan</h2>
              <div className="btn-box">
                <button className="btn-one"> VIEW FEATURES </button>
                <button className="btn-two"> VIEW PORTFOLIO </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

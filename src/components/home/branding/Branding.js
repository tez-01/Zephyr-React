import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";

const Branding = () => {
  const data = [
    {
      icon: <FavoriteBorderOutlinedIcon className="b-icon" />,
      heading: "Passion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      icon: <ComputerOutlinedIcon className="b-icon" />,
      heading: "Passion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      icon: <NaturePeopleOutlinedIcon className="b-icon" />,
      heading: "Passion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <div>
      <section className="branding">
        <h1>Zephyr Is A Healthy Mixture Of</h1>
        <div className="container grid">
          {data.map((val, index) => {
            return (
              <>
                <div className="box flex" key={index}>
                  <div className="b-text">
                    <div>{val.icon}</div>
                    <h1> {val.heading} </h1>
                    <p> {val.desc} </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Branding;

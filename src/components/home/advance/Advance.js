import React from "react";
import StarIcon from "@mui/icons-material/Star";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SettingsIcon from "@mui/icons-material/Settings";
import ColorLensIcon from "@mui/icons-material/ColorLens";

const Advance = () => {
  const adv = [
    {
      icon: <StarIcon className="a-icon" />,
      text: "Modern Design & Trendy Look",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: <SpellcheckIcon className="a-icon" />,
      text: "Advanced Typography Options",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: <SmartphoneIcon className="a-icon" />,
      text: "Ultra Responsive & Retina Ready",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: <ThumbUpIcon className="a-icon" />,
      text: "Focus On Usability & User Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore"
    },
    {
      icon: <SettingsIcon className="a-icon" />,
      text: "Big Quality Of Flexible Elements",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: <ColorLensIcon className="a-icon"/>,
      text: "Extensive Style Option & Unlimited Colors",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
  ];
  return (
    <>
      <section className="Advance">
        <div className="container">
          <div className="container grid">
            {adv.map((val) => {
              return (
                <div className="box flex">
                  <div className="b-text1">
                    <div className="icon icon-bg">{val.icon}</div>
                    <h1 className="text">{val.text}</h1>
                    <h4 className="desc">{val.desc}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Advance;

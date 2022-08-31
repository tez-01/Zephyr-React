import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ImageIcon from "@mui/icons-material/Image";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Details = () => {
  return (
    <>
      <section className="Details">
        <div className="details-hd">
          <h1>Details Done Right</h1> <br />
          <p className="sm-text">
            Limitless options beautyfully packed in a brand-new premium
            wordpress theme.
          </p>
        </div>
        <div className="container flex1">
          <div className="left">
            <div className="img">
              <img
                src="./images/detail-1.png"
                alt=""
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="right">
            <div className="b-text">
              <CameraAltIcon className="detail-icon" />
              <h3> Retina Ready & Fully Responsive </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className="b-text">
              <ImageIcon className="detail-icon" />
              <h3> Four Awesome Header Layouts </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className="b-text">
              <QuestionAnswerIcon className="detail-icon" />
              <h3> Quick-To-Install And Easy-To-Use</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;

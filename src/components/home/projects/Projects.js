import React from "react";
import ProjectData1 from "./ProjectIMG";

const Projects = () => {
  return (
    <>
     <section className="projects">
      <h1>Latest Projects</h1>
        <div className="container grid1">
          {ProjectData1.map((val) => {
            return (
              <>
                <div className="box flex">
                    <div className="img-box">
                        <img src={val.cover} alt=""  />
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;

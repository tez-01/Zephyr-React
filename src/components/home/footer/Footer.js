import React from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid3">
          <div className="box">
            <h3>Some Text</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos maxime ea error iste praesentium, accusantium
              architecto rem commodi ipsam consequuntur temporibus totam nobis
              placeat consectetur fugiat illum cupiditate modi voluptatibus.
            </p>
            <div className="socialIcon">
              <i className="fab fa-facebook facebook"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-google google"></i>
              <i className="fab fa-behance behance"></i>
              <i className="fab fa-instagram instagram"></i>
            </div>
          </div>
          <div className="box center">
            <h3>Recent Posts</h3>
            <p>This is a Single Interesting Post</p>
            <span>April 19, 2018</span>

            <p>Photography is the Science</p>
            <span>February 27, 2016</span>

            <p>
              This Post Looks Beautiful even with Long <br /> Interesting Title
            </p>
            <span>September 12, 2015</span>

            <p>This is a Sticky post</p>
            <span>September 15, 2014</span>
          </div>
          <div className="box">
            <h3>Search Something</h3>
            <div className="searchBox">
              <form action="" className="Inp-form">
                <input className="" type="text" placeholder="Search..." />
                <SearchOutlinedIcon className="search" />
              </form>
            </div>
            <div className="search-ico">
              <i className="fa fa-home"></i>
              <label htmlFor="/">Mountain View CA 94043, US</label>
            </div>
            <div className="search-ico">
              <i className="fa fa-envelope"></i>
              <label htmlFor="/">Info@Example.Com</label>
            </div>
            <div className="search-ico">
              <i className="fa fa-phone"></i>
              <label htmlFor="/">+321 123 4567</label>
            </div>
          </div>
        </div>
        
      </footer>
      <section className="legal">
      <div className="legal container">
          <p className="l-left">
            @2021 All rights reserved.{" "}
            <span className="legal-text">ZEPHYR</span> theme by UpSolution
          </p>
          <ul>
            <li>
              {" "}
              <Link to="/">HOME </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">PAGES </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">PORTFOLIO </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">BLOGS </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">ELEMENTS </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">SHOP </Link>{" "}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;

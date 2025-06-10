import React, { useEffect, useRef } from "react";
import "../styles/multirow.css";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function multirow() {
  const [val, setVal] = useState({ color: "red" });
  const skillsLeftRef = useRef(null);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <div className="multirow">
        <div className="multirow-content">
          <h1 className="main-header">Services</h1>
          <h1 className="child-header">Services</h1>
          <div className="row row1">
            <div
              className="row-cont-left black"
              ref={skillsLeftRef}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h1 className="row1-title"></h1>
              <p className="row-text"></p>
            </div>
            <div
              className="row-cont-right grey"
              ref={skillsLeftRef}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              <h1 className="row1-title">Website Maintenance</h1>
              <p className="row-text">
                I offer ongoing website maintenance to ensure your site remains
                secure, up-to-date, and fully functional. From regular updates
                and performance checks to fixing bugs and enhancing security, I
                help keep your website running smoothly so you can focus on your
                business.
              </p>
            </div>
          </div>
          <div className="row row2">
            <div
              className="row-cont-left grey"
              ref={skillsLeftRef}
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              <h1 className="row1-title">Wordpress Development</h1>
              <p className="row-text">
                With deep expertise in WordPress, I build custom themes and
                plugins tailored to your needs. Whether you're looking to create
                a unique blog, a business site, or an eCommerce platform, I
                deliver responsive, SEO-friendly, and scalable WordPress
                solutions.
              </p>
            </div>
            <div
              className="row-cont-right black"
              ref={skillsLeftRef}
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h1 className="row1-title"></h1>
              <p className="row-text"></p>
            </div>
          </div>
          <div className="row row3 ">
            <div
              className="row-cont-left black"
              ref={skillsLeftRef}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h1 className="row1-title"></h1>
              <p className="row-text"></p>
            </div>
            <div
              className="row-cont-right grey"
              ref={skillsLeftRef}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              <h1 className="row1-title">Website buildings</h1>
              <p className="row-text">
                I design and develop websites from the ground up — starting with
                strategy and layout, all the way to launch. My focus is on
                creating modern, user-friendly, and fast-loading websites that
                align with your goals and make a lasting impression on your
                visitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default multirow;

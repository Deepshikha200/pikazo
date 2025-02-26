import React from "react";
import light_logo from "../../../../assets/images/light_logo.png";
import banner_dark from "../../../../assets/images/banner_dark.png";
import { ButtonArrow } from "../../../../assets/images/Icons/SvgIcons";
import "./DegreeBanner.scss";

const BannerTwo = () => {
  return (
    <section className="degree_banner_row-two">
      <div className=" degree_banner_col">
        <div className="dark_text">
          <div className="img_con">
            <img src={light_logo} alt="" />
          </div>
          <h2 className="mb-0 ">
            Build Your Future with Our <p> Degree Programs! </p>
          </h2>
          <span>
            Earn a degree in Animation, VFX, Game Design, or Film Making and
            build a successful creative career.
          </span>
          <div className="enroll_btn">
            <button>Enroll Now</button>
            <span>
              <ButtonArrow />
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default BannerTwo;

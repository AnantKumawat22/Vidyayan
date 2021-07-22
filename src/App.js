import React from "react";
import './index.css';
import CoursesArray from "./CoursesArray";
import WhyCoding from "./WhyCoding";
import Coding from "./Images/coding1_1.svg";
import Logic from "./Images/logic_1.svg";
import Evaluation from "./Images/evaluation_1.svg";
import Algorithms from "./Images/algorithms_1.svg";
import Abstraction from "./Images/abstraction_1.svg";
import Pattern from "./Images/pattern_1.svg";
import Decomposition from "./Images/decomposition_1.svg";
import Coding2 from "./Images/coding_2.svg";
import CoursesList from "./CoursesList";
import CPlusPlus1 from './Images/c-plus-plus_1.png';
import Python2 from './Images/python_2.png';
import WebDevelopment2 from './Images/web-development_2.png';
import Android1 from './Images/android_1.png';
import Ellipse1 from "./Images/Ellipse_1.png";
import Ellipse2 from "./Images/Ellipse_2.png";
import Banner from "./Images/banner_1.svg";
import Timeline from "./Images/timeline_1.svg";
import Coding3 from "./Images/coding_3.svg";
import Banner2 from "./Images/banner_2.svg";
import HowItWorks from "./HowItWorks";


const App = () => {
  return (
    <>
      <div className="big_div_1">

        <nav className="navbar">
          <a href="#" className="navbar_text">Vidyayan</a>
        </nav>

        <div className="div_1">
          <div className="div_1_one">
            <p className="para_1">Creating Future <span style={{ color: "black" }}>Tech Leaders</span></p>
            <p className="para_2">Live coding classes for age 6 -15 to help your child learn to code</p>
            <button class="join_btn">Join Now</button>
          </div>

          <div className="div_1_two">
            <img src={Coding} className="coding1_1" />
          </div>

        </div>

        <div className="div_2">
          <p className="para_3">Cutting edge courses to make your child future ready</p>
          <div className="div_courses">
            {CoursesArray.map((val) => {
              return (
                <>
                  <div className="courses_item">
                    <img src={val.name} className="python_1" />
                    <p className="course_name">{val.title}</p>
                  </div>
                </>
              );
            })}

          </div>
        </div>

      </div>

      <div className="big_div_2">

        <p className="para_4">Why Coding?</p>
        <p className="para_5">Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make children</p>

        <div className="big_div_2_1">
          <div className="big_div_2_2">
            <WhyCoding src={Logic} title="Logic" desc="for predicting & analysis" />
            <WhyCoding src={Evaluation} title="Evaluation" desc="Involves making judgement" />
            <WhyCoding src={Algorithms} title="Algorithms" desc="To make steps & rules" />
          </div>

          <img src={Coding2} className="coding_2" />

          <div className="big_div_2_2">
            <WhyCoding src={Abstraction} title="Abstraction" desc="To remove unneccessary data" />
            <WhyCoding src={Pattern} title="Patterns" desc="To make use of similarities" />
            <WhyCoding src={Decomposition} title="Decomposition" desc="Break down a problem" />
          </div>

        </div>

        <button class="book_free_class">Book a free class</button>

      </div>

      <div className="big_div_3">
        <div className="courses_list">
          <CoursesList src={CPlusPlus1} title="Introduction to Coding" />
          <CoursesList src={Python2} title="Advance Coding" />
          <CoursesList src={WebDevelopment2} title="Web App Development " />
          <CoursesList src={Android1} title="Android App Development" />
        </div>

        <div className="ellipse_div">
          <img src={Ellipse1} className="ellipse_1" />
          <img src={Ellipse2} className="ellipse_2" />
          <img src={Ellipse2} className="ellipse_2" />
        </div>

        <img src={Banner} className="banner_1" />

        <div className="timline_div">
          <p className="learning_path_para">Learning Path</p>
          <img src={Timeline} className="timeline_img" />
        </div>

        <p className="how_it_work_para">How it Works</p>

        <div className="how_it_work_div">

          <div className="how_it_work_img_div">
            <img src={Coding3} className="coding_3" />
          </div>

          <div className="how_it_work_desc_div">
            <HowItWorks sno="1" />
            <HowItWorks sno="2" />
            <HowItWorks sno="3" />
            <HowItWorks sno="4" />
            <HowItWorks sno="5" />
          </div>

        </div>

        <img src={Banner2} className="banner_2" />

      </div>
    </>
  );
}

export default App;
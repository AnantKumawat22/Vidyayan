import React from "react";
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


const Reactangle3 = () => {
    return (
        <>
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

export default Reactangle3;
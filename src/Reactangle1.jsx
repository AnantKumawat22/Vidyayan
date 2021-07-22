import React from "react";
import CoursesArray from "./CoursesArray";
import Coding from "./Images/coding1_1.svg";


const Reactangle1 = () => {
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
        </>
    );
}

export default Reactangle1;
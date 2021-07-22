import React from "react";

const CoursesList = (props) => {
    return (
        <>
            <div className="courses_list_item">
                <img src={props.src} className="courses_list_img" />
                <p className="courses_list_title">{props.title}</p>
                <p className="know_more">KNOW MORE</p>
            </div>
        </>
    );
}

export default CoursesList;
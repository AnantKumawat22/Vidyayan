import React from "react";

const WhyCoding = (props) => {
    return (
        <>
            <div className="big_div_2_2_item">
              <img src={props.src} className="whycoding_img" />
              <div className="whycoding_div">
                <span className="span_1">{props.title}</span>
                <span className="span_2">{props.desc}</span>
              </div>
            </div>
        </>
    );
}

export default WhyCoding;
import React from "react";

const HowItWorks = (props) => {
    return (
        <>
            <div className="how_it_work_desc_div_item">
                <span className="s_no">{props.sno}</span>
                <div className="book_desc_div">
                    <span className="span_title">Book</span>
                    <span className="span_desc">Book a free coding classes with us. You just need a laptop with good internet connectivity</span>
                </div>
            </div>
        </>
    );
}

export default HowItWorks;
import React from "react";
import WhyCoding from "./WhyCoding";
import Logic from "./Images/logic_1.svg";
import Evaluation from "./Images/evaluation_1.svg";
import Algorithms from "./Images/algorithms_1.svg";
import Abstraction from "./Images/abstraction_1.svg";
import Pattern from "./Images/pattern_1.svg";
import Decomposition from "./Images/decomposition_1.svg";
import Coding2 from "./Images/coding_2.svg";


const Reactangle2 = () => {
    return (
        <>
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
        </>
    );
}

export default Reactangle2;
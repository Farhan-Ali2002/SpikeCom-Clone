import React from "react";
import { useState, useEffect } from "react";
import questionsImage from "../../images/Questions.png";

function SectionE(params) {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const toggleContainer = (i) => {
    if (i === 1) {
      setExpanded1(!expanded1);
    } else if (i === 2) {
      setExpanded2(!expanded2);
    } else if (i === 3) {
      setExpanded3(!expanded3);
    } else if (i === 4) {
      setExpanded4(!expanded4);
    }
  };
  return (
    <div className="section-E" id="section-E">
      <div className="container-E wrapper">
        <div className="E-top-section d-flex justify-center">
          <div className="text-center">
            <p className="fs-20">Quickly find the help you need</p>
            <p className="fs-32 text-center">
              {" "}
              <span className="orange">Our Frequently Ask Question</span> <br />
              support center
            </p>
            <p className="fs-20">
              We'd love to hear from you. Let us know if we can help you with
              anything
            </p>
          </div>
        </div>
        <div className="E-bottom-section d-flex justify-center ">
          <div className="E-bottom-left-section w-50 pt-4">
            <button className="ques-expand-btn">{expanded1 ? "−" : "+"}</button>
            <div className="questions">
              <div className="question " onClick={() => toggleContainer(1)}>
                <div className="q-title ml-3">
                  <h5>Question 01 Random Text</h5>
                </div>
                {expanded1 && (
                  <div className="content">
                    {/* Content to display */}
                    <p>
                      Vulputate lobortis tincidunt porttitor massa morbi
                      suscipit mollis luctus ullamcorper phasellus ante finibus
                      facilisis .
                    </p>
                  </div>
                )}
              </div>
              <button className="ques-expand-btn">
                {expanded2 ? "−" : "+"}
              </button>
              <div className="question " onClick={() => toggleContainer(2)}>
                <div className="q-title">
                  <h5>Question 02 Random Text</h5>
                </div>
                {expanded2 && (
                  <div className="content">
                    {/* Content to display */}
                    <p>
                      Quisque tincidunt the malesuada aliquet ullamcorper
                      Suspendisse lectus congue iaculis vitae purus Nullam.
                    </p>
                  </div>
                )}
              </div>
              <button className="ques-expand-btn">
                {expanded3 ? "−" : "+"}
              </button>
              <div className="question" onClick={() => toggleContainer(3)}>
                <div className="q-title">
                  <h5>Question 03 Random Text</h5>
                </div>
                {expanded3 && (
                  <div className="content">
                    {/* Content to display */}
                    <p>
                      Pellentesque tincidunt imperdiet metus interdum ligula
                      tristique aenean facilisis congue congue libero interdum
                      venenatis scelerisque sed massa elit pulvinar gravida.
                    </p>
                  </div>
                )}
              </div>
              <button className="ques-expand-btn">
                {expanded4 ? "−" : "+"}
              </button>
              <div className="question" onClick={() => toggleContainer(4)}>
                <div className="q-title">
                  <h5>Question 04 Random Text</h5>
                </div>
                {expanded4 && (
                  <div className="content">
                    {/* Content to display */}
                    <p>
                      Vestibulum sodales turpis vestibulum praesent consectetur
                      magna tortor interdum neque.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="E-bottom-right-section w-50 d-flex justify-center">
            <div>
              <img width="100%" src={questionsImage}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionE;

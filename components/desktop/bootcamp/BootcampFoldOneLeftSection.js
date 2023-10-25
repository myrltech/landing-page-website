import React from "react";
import { Fragment } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { resetNextUuid } from "react-accessible-accordion";

/*========================================================
                listArray
=======================================================*/
const listArray = [
  {
    imgPath: "/imgs/desktop/bootcamp/course-play-icon.png",
    imgClass: "bootcamp-course-play-icon-icon",
    text: "10 courses",
  },
  {
    imgPath: "/imgs/desktop/bootcamp/clock.png",
    imgClass: "bootcamp-clock-icon",
    text: "16 hours",
  },
  {
    imgPath: "/imgs/desktop/bootcamp/map.png",
    imgClass: "bootcamp-map-icon",
    text: "Skill IQ",
  },
];

/*========================================================
                listArray2
=======================================================*/
const listArray2 = [
  {
    title: "JavaScript: Getting Started",
    auther: "Mark Zamoyta",
    duration: "3h 58m",
    count: 1801,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star-half-o yellow-star",
    ],
  },
  {
    title: "JavaScript Syntax and Operators",
    auther: "Paul D. Sheriff",
    duration: "1h 41m",
    count: 224,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star-half-o yellow-star",
    ],
  },
  {
    title: "JavaScript Variables and Types",
    auther: "Barry Luijbregts",
    duration: "43m",
    count: 219,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star-half-o yellow-star",
      "fa fa-star gray-star",
    ],
  },
  {
    title: "JavaScript Objects, Prototypes, and Classes",
    auther: "Jim Cooper",
    duration: "1h 48m",
    count: 318,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
    ],
  },
  {
    title: "JavaScript: Functions",
    auther: "Prateek Parekh",
    duration: "48 m",
    count: 248,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star gray-star",
    ],
  },

  {
    title: "JavaScript Arrays and Collections",
    auther: "Jeff Batt",
    duration: "1h 57m",
    count: 227,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star-half-o yellow-star",
      "fa fa-star gray-star",
    ],
  },
  {
    title: "Javascript Generators and Iterators",
    auther: "Marques Woodson",
    duration: "1hh 25m",
    count: 220,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star gray-star",
      "fa fa-star gray-star",
    ],
  },
  {
    title: "Working with JavaScript Modules",
    auther: "by Jonathan Mills",
    duration: "45 m",
    count: 233,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star-half-o yellow-star",
    ],
  },

  {
    title: "JavaScript Promises and Async Programming",
    auther: "Nate Taylor",
    duration: "1h 21m",
    count: 668,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
    ],
  },
  {
    title: "JavaScript Security: Best Practices",
    auther: "Marcin Hoppe",
    duration: "1h 31m",
    count: 109,
    countArr: [
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star yellow-star",
      "fa fa-star-half-o yellow-star",
    ],
  },
];

const BootcampFoldOneLeftSection = () => {
  /*========================================================
                renderAccordian
=======================================================*/
  const renderAccordian = () => {
    // Reset uuid
    resetNextUuid();
    return (
      <div className="bootcamp-accordian">
        <Accordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          preExpanded={[1]}
        >
          <AccordionItem uuid={1}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="mobile-font-18-proxima-700 font-20-proxima-600">
                  JavaScript Core Language{" "}
                </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="font-18-NunitoSans-600 mobile-font-18-Nunito-600  mb-27">
                Dive into JavaScript while learning the basics of arrays,
                collections, and functions as well as advanced topics such as
                promises and asynchronous programming.{" "}
              </p>
              <div className="bootcamp-accordian-panel-card-outer-section">
                {listArray2.map((data, key) => (
                  <Fragment key={key}>
                    <div className="bootcamp-accordian-panel-card">
                      <h2 className="font-24-proxima-700 mobile-font-20-proxima-700">
                        {data.title}
                      </h2>
                      <div className="d-flex align-items-center bootcamp-accordian-panel-card--row2 pt-10 mv-pt-10">
                        <h5 className="font-16-NunitoSans-600 mobile-font-14-Nunito-600 mr-30">
                          by {data.auther}
                        </h5>{" "}
                        <h4 className="font-16-NunitoSans-600 mobile-font-14-Nunito-600 mv-pt-10 mr-30">
                          {data.duration} &nbsp;
                          <img
                            src={"/imgs/desktop/bootcamp/clock.png"}
                            alt="clock"
                            className="bootcamp-clock-icon"
                          />
                        </h4>{" "}
                        <h3 className="font-16-NunitoSans-600 mobile-font-14-Nunito-600 mv-pt-10 d-flex align-items-center">
                          {data.countArr?.map((data, key) => (
                            <Fragment key={key}>
                              <div className="d-flex align-items-center">
                                <i className={data} aria-hidden="true" />
                              </div>
                            </Fragment>
                          ))}
                          &nbsp; ({data.count})
                        </h3>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };
  /*========================================================
                renderLeftBlock
=======================================================*/
  const renderLeftBlock = () => {
    return (
      <div>
        {/* breadcrum */}
        <h4 className="font-14-proxima-700 font-16-proxima-700 green-purple-gradient-text green-purple-gradient-text--bootcamp">
          LEARNING PATHS
        </h4>
        <h2 className="font-34-proxima-700 mobile-font-34-proxima-700 pt-10 mv-pt-10">
          JavaScript Core Language
        </h2>
        <div className="d-flex flex-nowrap align-items-start pt-20 mv-pt-20">
          {listArray.map((data, key) => (
            <Fragment key={key}>
              <div className="d-flex align-items-center flex-nowrap bootcamp-tags">
                <img
                  src={data.imgPath}
                  alt={data.text}
                  className={data.imgClass}
                />
                <h5 className="font-16-NunitoSans-600 mobile-font-14-Nunito-600">
                  {data.text}
                  {key === 2 && (
                    <span className="font-14-poppins-500 bootcamp-tags-span-text">
                      Measure your skill to
                      <br /> find out where to start
                      <div className="bootcamp-tags-span-arrow"></div>
                    </span>
                  )}
                </h5>
              </div>
            </Fragment>
          ))}
        </div>
        <p className="font-18-NunitoSans-600 mobile-font-14-Nunito-600">
          JavaScript is an interpreted programming language that conforms to the
          ECMAScript specification. JavaScript is high-level, often just-in-time
          compiled, and multi-paradigm. It has curly-bracket syntax, dynamic
          typing, prototype-based object-orientation, and first-class functions.
          In this path you will learn the basics of JavaScript as well as more
          advanced topics such as promises, asynchronous programming, proxies
          and reflection.
        </p>
        <h2 className="font-30-proxima-700 mobile-font-30-proxima-700 mv-pt-32 pt-50">
          Courses in this path
        </h2>
        {renderAccordian()}
      </div>
    );
  };

  /*========================================================
                return
=======================================================*/
  return <>{renderLeftBlock()}</>;
};

export default BootcampFoldOneLeftSection;

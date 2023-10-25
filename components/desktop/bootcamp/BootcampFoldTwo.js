import React, { useState } from "react";
//array
const learnWithBestArray = [
  {
    imgPath: "./imgs/desktop/bootcamp/mark.png",
    name: "Mark Zamoyta",
    para: "Mark started in the developer world over 25 years ago. He began his career with a Bachelor of Science in Computer Science from St. Johns University. After spending 10 years on Wall Street working for Goldman Sachs, Lehman Brothers and other major investment banks, Mark became interested in animation and video game software. He has written numerous mobile apps and games for clients including Electronic Arts and Yahoo! Games. Some of his popular mobile titles include Yahtzee, Yahoo! Chess, and Yahoo! Poker. Currently, Mark is the founder of Curious Inventions in Portland, Oregon. This company develops a wide range of entertainment and educational software titles for the web and mobile devices.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/paul.png",
    name: "Paul D. Sheriff",
    para: "Paul has over thirty years of experience architecting information systems and his expertise is in much demand from Fortune 500 companies. Paul is a Pluralsight author, has published 400+ articles, and authored over 14 books on topics ranging from JavaScript, Angular, C#, SQL Server and many .NET technologies. Paul is a frequent speaker at conferences and user groups.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/barry.png",
    name: "Barry Luijbregts",
    para: "Barry is an independent software architect and developer with a passion for the cloud. He is also a Pluralsight author and a podcast host. He has worked for lots of companies throughout the last decades and is keen to share his knowledge with the community. He has a broad and deep knowledge of the Microsoft stack with a special interest on web technology and the cloud. He currently teaches people about the benefits of the cloud. You can reach Barry on Twitter @AzureBarry and through his website at https://www.azurebarry.com/ and check out his podcast “Developer Weekly” in your favorite podcast app or at https://www.developerweeklypodcast.com/.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/jim.png",
    name: "Jim Cooper",
    para: "Jim Cooper is a software developer at Pluralsight, with more than 20 years of software development experience. He has a passion for Agile processes, especially lean software development. Jim has been developing production Angular apps since before Angular version 1.0, including Pluralsight's first Html5-based video player. Jim has over 10 years of TDD and pair programming experience which has contributed significantly to his professional development. He has successfully mentored other developers in the use of TDD and agile practices and still enjoys learning from talented developers everywhere.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/prateek.png",
    name: "Prateek Parekh",
    para: "Prateek is a software engineer that has been working on designing, developing, and testing enterprise as well as customer facing applications for companies like Zoom, Sun Microsystems, Oracle, and eBay. His interests include architecture, distributed systems, and security. He is passionate about technology and how it can help make learning fun, engaging, and widely accessible.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/jeff.png",
    name: "Jeff Batt",
    para: "Jeff has 10+ years experience in the digital learning and media industry. Currently he is Founder and Head Trainer/Sensei at Learning Dojo, a company dedicated to training you to become a software ninja in a variety of eLearning, web, and mobile related software applications. Jeff is also the Digital Learning Development Manager for The Church of Jesus Christ of Latter-day Saints, producing online training for the Church world wide. Jeff has also been the Product Development Manager for eLearning Brothers with responsibility for the design, development, and management over their world-class digital learning templates library building templates in Storyline, Studio '13, Captivate, Adobe Edge Animate, Lectora, HTML5, Flash, and more. Prior to his work at eLearning Brothers, Jeff was the Design & Professional Services Manager for CallidusCloud's online eLearning authoring tool Litmos Author. Jeff is a regular conference speaker and industry leader regarding digital learning technologies such as TinCan API (xAPI), AppceleratorStudio, Articulate Storyline, Adobe Edge Animate, Tumult Hype, jQuery Mobile, iBooks Author, HTML 5, and More.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/marques.png",
    name: "Marques Woodson",
    para: "Marques has been involved with software development for years, specializing in Javascript application architecture, hybrid mobile application development, and Node.js applications. As a family man living in Chicago, he's had the chance to work with large enterprises doing legacy code optimization and refactoring, and startups building from the ground up. I'm passionate about experimenting with Javascript frameworks and libraries and figuring out what would work best for my current team/project. He also really enjoys teaching and mentoring new developers.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/jonathan.png",
    name: "Jonathan Mills",
    para: "Jonathan is a Pluralsight Author, Technology Advisor, and Business Leader. As a member of the Chief Digital Advisory team at World Wide Technology, Jonathan is able to leverage his unique experiences and skills to drive digital transformation for his clients. As a dedicated developer community leader, Jonathan serves on the board of directors for the Kansas City Developers Conference, is a Microsoft MVP, and is a regular speaker and keynote presenter at conferences around the globe.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/nate.png",
    name: "Nate Taylor",
    para: "Nate's first program was written in QBasic on an 8086 clone his dad built. Since then he's written applications in C++, .NET, and Node.js. He spent the first 12 years of his career writing Windows applications before transitioning to write applications for the web. Regardless of the language or type of application he's written, he strives for writing clean, testable, and maintainable code. In addition to his day job as a developer, Nate also enjoys speaking at various conferences. He will typically be found talking about topics such as TDD, clean code, or professionalism.",
  },
  {
    imgPath: "./imgs/desktop/bootcamp/marcin.png",
    name: "Marcin Hoppe",
    para: "Marcin Hoppe is a principal engineer on the Auth0 Platform Security team at Okta. He is passionate about building secure applications and promoting security best practices in the software development community. Marcin’s experience covers software engineering and various areas of information security, such as identity and access management, application and cloud infrastructure security, zero-trust architectures, cryptography, and privacy.",
  },
];

/*===============================================================================================
                                                BootCampFoldTwo
===============================================================================================*/
const BootcampFoldTwo = () => {
  const [showInput, setShowInput] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)}` : string;

  const handleOnClickShowInput = (key) => {
    setActiveIndex(key);
    setShowInput(true);
  };

  return (
    <div className="bootcamp-fold-one-section bootcamp-fold-two-section">
      <h4 className="font-30-proxima-700 mobile-font-30-proxima-700">
        Learn with the best
      </h4>
      <div className="d-flex flex-wrap ">
        {learnWithBestArray.map((data, key) => (
          <div
            key={key}
            className="col-md-6 col-lg-4 bootcamp-fold-two-section-card"
          >
            <div className="d-flex align-items-center">
              <img
                src={data.imgPath}
                alt={data.name}
                className="bootcamp-fold-two-section-card__img"
              />
              <h4 className="font-20-NunitoSans-600 mobile-font-18-Nunito-600">
                {data.name}
              </h4>
            </div>
            {showInput && activeIndex === key ? (
              <h5
                // onClick={() => setShowInput(false)}
                className="font-16-NunitoSans-600 mobile-font-11-Nunito-600 pt-15 mv-pt-10"
              >
                {data.para}
              </h5>
            ) : (
              <h5
                className="font-16-NunitoSans-600 mobile-font-11-Nunito-600 pt-15 mv-pt-10"
                onClick={() => handleOnClickShowInput(key)}
              >
                {truncate(data.para, 450)}&nbsp; &nbsp;
                <span className="green-purple-gradient-text cursor-pointer">
                  <strong>{data.para?.length > 450 && "more"}</strong>
                </span>
              </h5>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampFoldTwo;

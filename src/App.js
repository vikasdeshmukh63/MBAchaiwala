import "./styles/App.scss";
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Misc from "./components/Misc";

import freshTopicImg from "./assets/academy.png";
import freshTopicImg2 from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import frenchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";
import data from "./data/data.json";

import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";
import { useEffect } from "react";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f"

function App() {

  const { freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor")

    cursor.style.top = `${e.pageY - 14}px`
    cursor.style.left = `${e.pageX - 14}px`

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover")
    }
    else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    }
    else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor)
    return () => {
      window.removeEventListener("mousemove", dotCursor)
    }
  }, []);

  return (
    <div className="App">
      <IntroVideo />
      {/* FreshTopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink} />
      {/* FreshTopic2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgSrc={freshTopicImg2}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink} />
      {/* TedTalks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={tedTalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow} />
      {/* Frenchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={frenchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow} />
      {/* Map */}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        hasBtn={false}
      />
      {/* Courses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSrc={coursesImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow} />
      {/* Album */}
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow} />
      {/* Barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink} />
      {/* Chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgSrc={chaiWalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow} />

      <Footer />

      <Misc />
    </div>
  );
}

export default App;

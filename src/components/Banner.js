import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "ReactJS Developer", "Mern-Stack DEV"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <div data-aos="fade-left">
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {`Hi! I'm Vinh Nguyen`}{" "}
                  <div
                    className="txt-rotate"
                    dataperiod="500"
                    data-rotate='[ "Web Developer", "FE Developer", "MERN-STACK DEV" ]'
                  >
                    <span className="wrap">{text}</span>
                  </div>
                </h1>
                <p>
                  I'm currently working at S3 Corp company with ReactJS
                  Developer role. I work on E-commerce project with Singapore
                  client. I want to build a big system, scalable system. I want
                  to use my experience to bring the most profit to my company.
                  In the next 5 years, I want to become a team leader or higher
                  title. If I have a chance I will go abroad to work to approach
                  the new world's technology.
                </p>
                <button onClick={() => console.log("connect")}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div>
                <img src={headerImg} alt="Header Img" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

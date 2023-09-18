import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  const formInitialDetails = {
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzH1DUWaRWpP8_LU-XyeqZ2K5VFi4FJm8uipB8MG7t96LO4TnGXzrUsEsDOXs1IAufA/exec";
    const formDataToSend = new FormData();
    formDataToSend.append("Name", formDetails.Name);
    formDataToSend.append("Email", formDetails.Email);
    formDataToSend.append("Phone", formDetails.Phone);
    formDataToSend.append("Message", formDetails.Message);

    fetch(scriptURL, { method: "POST", body: formDataToSend })
      .then((response) => {
        setButtonText("Send");
        if (response.ok) {
          console.log("Success!", response);
          toast.success("Message sent successfully", {
            icon: "🚀",
          });
          // Add any success handling logic here
        } else {
          console.error("Error!", response);
          toast.error("Something went wrong, please try again later.", {
            icon: false,
          });
          // Add any error handling logic here
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
        toast.configure();
        toast.error("Something went wrong, please try again later.", {
          icon: false,
        });
        // Add any error handling logic here
      });
  };

  return (
    <section className="contact" id="connect" data-aos="fade-up">
      <Container>
        <Row className="">
          <Col size={12} md={6}>
            <h2>Contact Me</h2>
            <div className="contact-info">
              <div>Phone: (+84) 931296151</div>
              <div>
                Email:{" "}
                <a
                  href="mailto:vinh.nguyen24.la@gmail.com"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  vinh.nguyen24.la@gmail.com
                </a>
              </div>
            </div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/vinhnguyen24it/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.facebook.com/vinh.nguyen1st"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              {/* <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a> */}
            </div>
            <div>
              <button className="cv-btn">
                <span>Download CV</span>
              </button>
            </div>
          </Col>
          <Col size={12} md={6}>
            <div>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={12} className="px-1">
                    <input
                      type="text"
                      name="Name"
                      value={formDetails.Name}
                      placeholder="Name"
                      onChange={(e) => onFormUpdate("Name", e.target.value)}
                    />
                  </Col>

                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="Email"
                      value={formDetails.Email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("Email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      name="Phone"
                      value={formDetails.Phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("Phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      name="Message"
                      value={formDetails.Message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("Message", e.target.value)}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {/* {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )} */}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import { contactConfig } from "./content_option";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // send form data to server
    fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      });
  };

  return (
    <Container>
      <div className="big--mac">
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="email">
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <div className="social-media-icon">
              <a href="https://github.com/joshuaedo">
                <i className="fab fa-github icons"></i>
              </a>
              <a href="https://www.linkedin.com/in/joshuaedo">
                <i className="fab fa-linkedin icons"></i>
              </a>
              <a href="https://twitter.com/Thegr8joshua">
                <i className="fab fa-twitter icons"></i>
              </a>
              <a href="https://www.instagram.com/edo_joshua">
                <i className="fab fa-instagram icons"></i>
              </a>
            </div>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100" onSubmit={handleSubmit}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="button" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
              {/* {status === "success" && (
                <div className="alert alert-success">
                  Message sent successfully
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-danger">Error sending message</div>
              )} */}
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

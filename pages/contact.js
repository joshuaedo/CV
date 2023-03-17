import { Form, Row, Col } from "react-bootstrap";
import Head from "next/head";
import { contactConfig } from "@/lib/content_option";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { sendContactForm } from "@/lib/mail";

// Initial values of the form and final values after succesful submission.
const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { values: initValues };

export default function Contact() {
  const [state, setState] = useState(initState);
  const toast = useToast();
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleSubmit = async () => {
    try {
      await sendContactForm(values);
      setState(initState);
      toast({
        title: "Message sent",
        status: "success",
        duration: 2000,
        position: top,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  function handleRefresh(e) {
    e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Joshua Edo - Contact</title>
        <meta name="description" content="Contact Joshua Edo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
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
            <Form className="contact__form w-100 mb-5" onSubmit={handleRefresh}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                    value={values.name}
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
                value={values.message}
                onChange={handleChange}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

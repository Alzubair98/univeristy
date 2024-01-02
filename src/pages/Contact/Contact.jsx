import "./contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import London from "../../utils/images/London-location.jpg";
import Liverbol from "../../utils/images/Liverpool-location.jpg";
import manchester from "../../utils/images/Manchester-location.jpg";

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="height-75 ">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Get In Touch</h1>
          <p className="text center w-75 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
            ultricies mi eget mauris pharetra. Faucibus ornare suspendisse sed
            nisi lacus sed viverra tellus in. Dignissim enim sit amet venenatis
            urna cursus. Non tellus orci ac auctor. Est ante in nibh mauris
            cursus mattis molestie a iaculis. Cras sed felis eget velit aliquet
            sagittis id consectetur.
          </p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center">
        <Form id="contact-form">
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>

            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone elese.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Addre</Form.Label>
            <Form.Control placeholder="Your address" />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Location</Form.Label>
              <Form.Select defaultValue="Baghdad">
                <option>Baghdad</option>
                <option>arbil</option>
                <option>mousel</option>
                <option>karkuk</option>
                <option>Baghdad</option>
                <option>Baghdad</option>
                <option>Baghdad</option>
                <option>Baghdad</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control placholder="Postcode" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="danger btn-lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Location</h2>
          <div className="row g-4">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={London} className="img-fluid" alt="location" />
              <h3 className="text-center mt-3">London</h3>
            </div>

            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={Liverbol} className="img-fluid" alt="location" />
              <h3 className="text-center mt-3">Liverbol</h3>
            </div>

            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={manchester} className="img-fluid" alt="location" />
              <h3 className="text-center mt-3">Manchester</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

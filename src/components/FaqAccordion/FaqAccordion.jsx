import "./faaccordion.css";
import Accordion from "react-bootstrap/Accordion";

const FaqAccordion = () => {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently asked questions
        </h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
          ultricies mi eget mauris pharetra. Faucibus ornare suspendisse sed
          nisi lacus sed viverra tellus in. Dignissim enim sit amet venenatis
          urna cursus. Non tellus orci ac auctor. Est ante in nibh mauris cursus
          mattis molestie a iaculis. Cras sed felis eget velit aliquet sagittis
          id consectetur. Iaculis at erat pellentesque adipiscing. Volutpat diam
          ut venenatis tellus. Id consectetur purus ut faucibus pulvinar
          elementum. Auctor neque vitae tempus quam pellentesque. Tristique
          senectus et netus et. Convallis tellus id interdum velit laoreet
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>First Question ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Maecenas ultricies mi eget mauris pharetra. Faucibus ornare
              suspendisse sed nisi lacus sed viverra tellus in. Dignissim enim
              sit amet venenatis urna cursus. Non tellus orci ac auctor. Est
              ante in nibh mauris cursus mattis molestie a iaculis. Cras sed
              felis eget velit aliquet sagittis id consectetur.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Second Question ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Maecenas ultricies mi eget mauris pharetra. Faucibus ornare
              suspendisse sed nisi lacus sed viverra tellus in. Dignissim enim
              sit amet venenatis urna cursus. Non tellus orci ac auctor. Est
              ante in nibh mauris cursus mattis molestie a iaculis. Cras sed
              felis eget velit aliquet sagittis id consectetur.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>third Question ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Maecenas ultricies mi eget mauris pharetra. Faucibus ornare
              suspendisse sed nisi lacus sed viverra tellus in. Dignissim enim
              sit amet venenatis urna cursus. Non tellus orci ac auctor. Est
              ante in nibh mauris cursus mattis molestie a iaculis. Cras sed
              felis eget velit aliquet sagittis id consectetur.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Fourth Question ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Maecenas ultricies mi eget mauris pharetra. Faucibus ornare
              suspendisse sed nisi lacus sed viverra tellus in. Dignissim enim
              sit amet venenatis urna cursus. Non tellus orci ac auctor. Est
              ante in nibh mauris cursus mattis molestie a iaculis. Cras sed
              felis eget velit aliquet sagittis id consectetur.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqAccordion;

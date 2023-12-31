import "./faaccordion.css";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

const FaqAccordion = ({ answer1, answer2, answer3, answer4, answer5 }) => {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently asked questions
        </h2>
        <p className="text-center mb-5">{answer1}</p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>First Question ?</Accordion.Header>
            <Accordion.Body>{answer2}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Second Question ?</Accordion.Header>
            <Accordion.Body>{answer3}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>third Question ?</Accordion.Header>
            <Accordion.Body>{answer4}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Fourth Question ?</Accordion.Header>
            <Accordion.Body>{answer5}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

FaqAccordion.propTypes = {
  answer1: PropTypes.string.isRequired,
  answer2: PropTypes.string.isRequired,
  answer3: PropTypes.string.isRequired,
  answer4: PropTypes.string.isRequired,
  answer5: PropTypes.string.isRequired,
};

export default FaqAccordion;

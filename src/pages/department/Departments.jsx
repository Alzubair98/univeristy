import "./departments.css";
import { Card } from "react-bootstrap";
import ArtCourseImg from "../../utils/images/art-course.jpg";
import BusinessCourseImg from "../../utils/images/business-course.jpg";
import ComputerScienceCourseImg from "../../utils/images/computer-science-course.jpg";
import EducationCourseImg from "../../utils/images/education-course.jpg";
import HealthecareCourseImg from "../../utils/images/healthcare-course.jpg";
import LawCourseImg from "../../utils/images/law-course.jpg";
import MusicCourseImg from "../../utils/images/music-course.jpg";
import SportCourseImg from "../../utils/images/sport-course.jpg";
import FaAccordion from "../../components/FaqAccordion/FaqAccordion";

const departments = [
  {
    id: 1,
    img: [ArtCourseImg],
    title: "Art Department",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra. Faucibus ornare suspendisse sed nisi lacus sed
        viverra tellus in. Dignissim enim sit amet venenatis urna cursus.
      </p>
    ),
  },
  {
    id: 2,
    img: [BusinessCourseImg],
    title: "Business Department",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra. Faucibus ornare suspendisse sed nisi lacus sed
        viverra tellus in. Dignissim enim sit amet venenatis urna cursus.
      </p>
    ),
  },
  {
    id: 3,
    img: [ComputerScienceCourseImg],
    title: "Computer Department",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra. Faucibus ornare suspendisse sed nisi lacus sed
        viverra tellus in. Dignissim enim sit amet venenatis urna cursus.
      </p>
    ),
  },
  {
    id: 4,
    img: [EducationCourseImg],
    title: "Education Department",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra. Faucibus ornare suspendisse sed nisi lacus sed
        viverra tellus in. Dignissim enim sit amet venenatis urna cursus.
      </p>
    ),
  },
  {
    id: 5,
    img: [HealthecareCourseImg],
    title: "Healthecare Department",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra. Faucibus ornare suspendisse sed nisi lacus sed
        viverra tellus in. Dignissim enim sit amet venenatis urna cursus.
      </p>
    ),
  },
  {
    id: 6,
    img: [LawCourseImg],
    title: "Law Department",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra. Faucibus ornare suspendisse sed nisi lacus sed
        viverra tellus in. Dignissim enim sit amet venenatis urna cursus.
      </p>
    ),
  },
  {
    id: 7,
    img: [MusicCourseImg],
    title: "Music Department",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra. Faucibus ornare suspendisse sed nisi lacus sed
        viverra tellus in. Dignissim enim sit amet venenatis urna cursus.
      </p>
    ),
  },
  {
    id: 8,
    img: [SportCourseImg],
    title: "Sport Department",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra. Faucibus ornare suspendisse sed nisi lacus sed
        viverra tellus in. Dignissim enim sit amet venenatis urna cursus.
      </p>
    ),
  },
];

const Departments = () => {
  return (
    <div className="departments-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Our Courses</h1>
          <p className="text-center w75 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
            ultricies mi eget mauris pharetra. Faucibus ornare suspendisse sed
            nisi lacus sed viverra tellus in. Dignissim enim sit amet venenatis
            urna cursus.
          </p>
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-4">
          {departments.map((department) => (
            <div key={department.id} className="col-lg-6">
              <Card className="text-white shadow scale-hover-effect">
                <Card.Img src={department.img} />
                <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5">
                  <Card.Title className="fs-1 text-danger">
                    {department.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {department.description}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <FaAccordion />
      </div>
    </div>
  );
};

export default Departments;

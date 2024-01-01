import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import "./home.css";
import StartCousesImg from "../../utils/images/start-courses-img.jpg";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.jpg";
import Blog3Img from "../../utils/images/blog3-img.jpg";

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "Blog 1",
    description:
      "here is my first blog image suuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },

  {
    id: 2,
    img: [Blog2Img],
    title: "Blog 2",
    description:
      "here is my first blog image suuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },

  {
    id: 3,
    img: [Blog3Img],
    title: "Blog 3",
    description:
      "here is my first blog image suuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },
];

const answer1 = "hello baby this is me ";
const answer2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra. Faucibus ornaresuspendisse sed nisi lacus sed viverra tellus in. Dignissim enim sit amet venenatis urna cursus. Non tellus orci ac auctor. Est ante in nibh mauris cursus mattis molestie a iaculis. Cras sed felis eget velit aliquet sagittis id consectetur.";

const Home = () => {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcom To</h2>
          <h1 className="text-center fw-semibold">my University</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
            ultricies mi eget mauris pharetra. Faucibus ornare suspendisse sed
            nisi lacus sed viverra tellus in. Dignissim enim sit amet venenatis
            urna cursus. Non tellus orci ac auctor. Est ante in nibh mauris
            cursus mattis molestie a iaculis. Cras sed felis eget velit aliquet
            sagittis id consectetur. Iaculis at erat pellentesque adipiscing.
            Volutpat diam ut venenatis tellus. Id consectetur purus ut faucibus
            pulvinar elementum. Auctor neque vitae tempus quam pellentesque.
            Tristique senectus et netus et. Convallis tellus id interdum velit
            laoreet. Enim tortor at auctor urna nunc id. Faucibus in ornare quam
            viverra orci sagittis. Elementum nibh tellus molestie nunc.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="departments">
              {" "}
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Our Departments
              </button>
            </Link>
            <Link to="contact">
              {" "}
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        {" "}
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">2024 start courses</h2>
              <p>
                Lore ipsum door sit amet consecteture adipisicing elit.
                Delectus, placeat.
              </p>
              <Link to="/departments">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  leanr more
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={StartCousesImg} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <FaqAccordion
          answer1={answer2}
          answer2={answer2}
          answer3={answer2}
          answer4={answer1}
          answer5={answer1}
        />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Latest on the blog
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              Read More Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

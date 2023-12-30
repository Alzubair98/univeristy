import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import "./home.css";
import StartCousesImg from "../../utils/images/start-courses-img.jpg";

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
    </div>
  );
};

export default Home;

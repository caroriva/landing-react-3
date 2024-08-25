// import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import { FaShieldAlt, FaBolt, FaWallet } from "react-icons/fa";

function About() {
  return (
    <>
      {/* <Navbar /> */}
      <section className="about">
        <div className="about__container">
          <h1 className="about__header">About Us</h1>
          <div className="about__section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to simplify cryptocurrency transactions for
              everyone. We believe that everyone should have access to fast,
              secure, and affordable financial solutions, and we are committed
              to making that a reality.
            </p>
          </div>

          <div className="about__cards">
            <h2>Why Choose Us?</h2>
            <div className="cards__container">
              <div className="card">
                <FaShieldAlt className="card__icon" />
                <h3 className="card__title">Security</h3>
                <p className="card__description">
                  Our platform employs state-of-the-art security measures to
                  protect your assets and personal information. Your peace of
                  mind is our top priority.
                </p>
              </div>
              <div className="card">
                <FaBolt className="card__icon" />
                <h3 className="card__title">Speed</h3>
                <p className="card__description">
                  Transactions on our platform are processed quickly, ensuring
                  that you can send and receive funds without unnecessary
                  delays.
                </p>
              </div>
              <div className="card">
                <FaWallet className="card__icon" />
                <h3 className="card__title">Affordability</h3>
                <p className="card__description">
                  We offer competitive rates and minimal fees, making
                  cryptocurrency accessible to everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="about__section">
            <h2>Our Vision</h2>
            <p>
              We envision a world where cryptocurrency is seamlessly integrated
              into everyday life, providing a viable alternative to traditional
              banking. Our goal is to empower individuals with the tools they
              need to take control of their financial future.
            </p>
          </div>

          <a href="#" className="btn">
            JOIN US
          </a>
        </div>
      </section>
    </>
  );
}
export default About;

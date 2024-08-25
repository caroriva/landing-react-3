import "./Hero.css";
import Mob from "../../assets/Mob.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__left">
          <img src={Mob} alt="hero" />
        </div>
        <div className="hero__right">
          <h1>Make easier your crypto transactions.</h1>
          <p>
            Our cryptocurrency offers a fast, secure, and affordable alternative
            for all of your financial needs. Join the cryptocurrency revolution
            today and take control of your financial future. Sign up now to
            start using our platform for yourself.
          </p>
          <a href="#" className="btn">
            TRY FOR FREE
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

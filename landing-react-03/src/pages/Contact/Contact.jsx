import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <form class="contact__form">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Name" className="form__input" />
        <input type="text" placeholder="Lastname" className="form__input" />
        <input type="email" placeholder="Email" className="form__input" />
        <input type="text" placeholder="Subject" className="form__input" />
        <Link to="/" className="btn">
          SEND
        </Link>
      </form>
    </div>
  );
}

export default Contact;

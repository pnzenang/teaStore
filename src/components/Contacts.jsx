import { FaEnvelope, FaLocationArrow, FaMobile, FaPhone } from "react-icons/fa";
import { styled } from "styled-components";

const Contacts = () => {
  return (
    <Wrapper>
      <section className="contact">
        <article className="contact-info">
          <div className="contact-item">
            <h4 className="contact-title">
              <span className="contact-icon">
                <FaLocationArrow />
              </span>{" "}
              address
            </h4>
            <h4 className="contact-text">
              523 N Fairfax Ave <br />
              Lost Angeles, VA 90048
            </h4>
          </div>
          <div className="contact-item">
            <h4 className="contact-title">
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              email
            </h4>
            <h4 className="contact-text">email@email.com</h4>
          </div>
          <div className="contact-item">
            <h4 className="contact-title">
              <span className="contact-icon">
                <FaPhone />
              </span>
              telephone
            </h4>
            <h4 className="contact-text">123-456-7890</h4>
          </div>
        </article>
        <article className="contact-form">
          <h3>contact us</h3>
          <form action="https://formspree.io/f/xnqkzard" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name"
                required
              />
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
                required
              />
              <textarea
                name="message"
                placeholder="message"
                rows="5"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact {
    background: var(--clr-grey-10);
    padding: 2rem;
  }
  .contact-form,
  .contact-info {
    margin: 0 auto;
  }
  .contact-item {
    margin-bottom: 1.75rem;
  }
  .contact-title {
    color: var(--clr-primary);
  }
  .contact-icon {
    margin: 0 1rem;
  }
  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    width: 100%;
    max-width: 35rem;
    margin-bottom: 2rem;
  }
  .contact-info {
    background: var(--clr-white);
    border-radius: var(--radius);
    /* text-align: center; */
    width: 100%;
    max-width: 35rem;
    margin-bottom: 2rem;
    padding: 2rem;
  }
  .contact-form:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }
  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  @media screen and (min-width: 992px) {
    .contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      width: 1170px;
      margin: 0 auto;
    }

    .contact-info,
    .contact-form {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;
export default Contacts;

import { styled } from "styled-components";
import main from "../assets/images/about-bcg.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper>
      <section>
        <div className="section-center">
          <article className="about-img">
            <div className="about-picture-container">
              <img src={main} alt="" className="about-picture" />
            </div>
          </article>
          <article className="about-info">
            <div className="section-title">
              <h3>about our</h3>
              <h2>tea station</h2>
            </div>
            <p className="about-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate libero a similique odit omnis. Error, amet accusantium.
              Cum, ab nihil?
            </p>
            <p className="about-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate libero a similique odit omnis. Error, amet accusantium.
              Cum, ab nihil?
            </p>
            <Link to="about" className="btn">
              learn more
            </Link>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-center {
    display: grid;
    place-items: center;
    padding: 5rem 1rem;
  }
  .about-img,
  .about-info {
    padding: 3rem auto;
  }
  .about-text {
    padding: 1rem 0;
  }
  .about-picture-container {
    background: var(--clr-primary);
    border: 0.5rem solid var(--clr-primary);
    max-width: 30rem;
    overflow: hidden;
  }
  .about-picture {
    transition: var(--transition);
  }
  .about-picture-container:hover .about-picture {
    opacity: 0.5;
    transform: scale(1.2);
  }
  .about-text {
    max-width: 30rem;
    color: var(--clr-grey-1);
  }
  @media screen and (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
`;

export default About;

import { styled } from "styled-components";
import {
  FaMugHot,
  FaGlassCheers,
  FaBomb,
  FaMortarPestle,
} from "react-icons/fa";
const Skills = () => {
  return (
    <Wrapper>
      <section className="skills clearfix">
        <article className="skill">
          <span className="skill-icon">
            <FaMugHot />
          </span>
          <h4 className="skill-title">made in US</h4>
          <p className="skill-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim rerum
            laboriosam fuga quaerat aspernatur animi?
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <FaGlassCheers />
          </span>
          <h4 className="skill-title">relaxation</h4>
          <p className="skill-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim rerum
            laboriosam fuga quaerat aspernatur animi?
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <FaBomb />
          </span>
          <h4 className="skill-title">energy</h4>
          <p className="skill-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim rerum
            laboriosam fuga quaerat aspernatur animi?
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <FaMortarPestle />
          </span>
          <h4 className="skill-title">well done</h4>
          <p className="skill-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim rerum
            laboriosam fuga quaerat aspernatur animi?
          </p>
        </article>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .skills {
    background: var(--clr-grey-10);
  }

  .skill {
    padding: 2.5rem 0;
    text-align: center;
    transition: var(--transition);
  }
  .skill-icon {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
    display: inline-block;
    color: var(--clr-primary);
  }
  .skill-text {
    color: var(--clr-grey-5);
    max-width: 17rem;
    margin: 0 auto;
  }
  .skill:hover {
    background: var(--clr-white);
    box-shadow: 0 2px var(--clr-primary);
  }
  .skill:hover .skill-icon {
    transform: translateY(-10px);
  }

  @media screen and (min-width: 576px) {
    .skills {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px) {
    .skills {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1170px) {
    .skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default Skills;

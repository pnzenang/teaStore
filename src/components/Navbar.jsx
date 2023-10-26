import { Link } from "react-router-dom";
import { styled } from "styled-components";
import main from "../assets/images/main-bcg.jpeg";

const Navbar = () => {
  return (
    <Wrapper>
      <header className="header">
        <div className="banner">
          <h2>Over one hundred flavors of</h2>
          <h1>
            specially <br />
            crafted tea
          </h1>
          <Link to="skills" className="btn banner-btn">
            explore
          </Link>
        </div>
      </header>
      <div className="content-divider"></div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .header {
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${main}) center/cover no-repeat fixed;
    position: relative;
    /* animation */
    overflow-x: hidden;
  }
  .banner {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banner h2 {
    font-family: var(--ff-secondary);
    color: var(--clr-primary);
    /* animation */
    animation: slideFromRight 5s ease-in-out 1;
  }
  .banner h1 {
    text-transform: uppercase;
    color: var(--clr-white);
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    animation: slideFromLeft 5s ease-in-out 1;
  }
  .banner-btn {
    outline: 0.125rem solid var(--clr-primary);
    outline-offset: 0.4rem;
    letter-spacing: var(--spacing);
    font-size: 1.25rem;
    padding: 1rem 1.75rem;
    animation: show 5s linear 1;
  }
  .content-divider {
    height: 0.5rem;
    background: linear-gradient(
      to left,
      var(--clr-primary),
      #e9b949,
      var(--clr-primary)
    );
  }
`;
export default Navbar;

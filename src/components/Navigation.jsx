import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useHomeContext } from "../pages/HomeLayout";

const Navigation = () => {
  const { showNavbar, toggleNavbar } = useHomeContext();
  return (
    <Wrapper>
      <span className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </span>

      <nav className={showNavbar ? "navbar" : "show-navbar"}>
        {/* <nav className="navbar"> */}
        <div className="navbar-header">
          <span className="nav-close" onClick={toggleNavbar}>
            <FaTimes />
          </span>
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/" className="nav-link" onClick={toggleNavbar}>
              home
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link" onClick={toggleNavbar}>
              skills
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={toggleNavbar}>
              about
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link" onClick={toggleNavbar}>
              products
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="nav-link" onClick={toggleNavbar}>
              contacts
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .nav-btn {
    position: fixed;
    top: 5%;
    left: 5%;
    font-size: 2.5rem;
    color: var(--clr-primary);
    z-index: 1;
    background: transparent;
    cursor: pointer;
    animation: bounce 2s ease infinite;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--clr-grey-10);
    z-index: 3;
    /* transform: translateX(-100%); */
  }
  .show-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--clr-grey-10);
    z-index: 3;

    transform: translateX(-100%);
  }

  .navbar-header {
    text-align: right;
    padding-top: 1rem;
    padding-right: 1rem;
  }
  .nav-close {
    font-size: 2.5rem;
    cursor: pointer;
    color: #f29c9c;
    transition: var(--transition);
  }
  .nav-close:hover {
    color: #bb2525;
  }
  .nav-items {
    list-style-type: none;
    display: block;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  .nav-link {
    display: block;
    color: var(--clr-grey-5);
    margin-bottom: 1rem;
  }
  .nav-link:hover {
    background: var(--clr-primary-light);
    color: var(--clr-primary);
    padding-left: 1.5rem;
    border-left: 0.25rem solid var(--clr-primary);
    transition: var(--transition);
  }
  @media screen and (min-width: 768px) {
    .navbar {
      width: 30vw;
      max-width: 20%;
    }
  }
`;
export default Navigation;

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="section-center">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
          </div>
          <h4 className="footer-text">
            &copy; <span>{new Date().getFullYear()}</span>
            <span>2023 </span>
            <span className="company">tea station </span>all rights reserved
          </h4>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .footer {
    background: #222;
    text-align: center;
  }
  .social-icon {
    color: var(--clr-white);
    font-size: 1.5rem;
    margin: 1rem;
    transition: var(--transition);
  }
  .social-icon:hover {
    color: var(--clr-primary);
  }
  .footer-text {
    margin-top: 1.25rem;
    text-transform: uppercase;
    color: var(--clr-white);
  }
  .company {
    color: var(--clr-primary);
  }
`;
export default Footer;

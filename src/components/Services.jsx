import { styled } from "styled-components";
import product1 from "../assets/images/product-1.jpeg";
import product2 from "../assets/images/product-2.jpeg";
import product3 from "../assets/images/product-3.jpeg";
import { FaMortarPestle, FaHome, FaMugHot } from "react-icons/fa";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <Wrapper>
      <section className="services">
        <div className="section-title services-title">
          <h3>explore</h3>
          <h2>our services</h2>
        </div>
        <div className="section-center">
          <article className="service-card">
            <div className="service-img-container">
              <img src={product1} alt="" className="service-img" />
              <span className="service-icon">
                <FaMortarPestle />
              </span>
            </div>
            <div className="service-info">
              <h4>custom recipes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                ipsa non, delectus similique cumque modi iusto dolore quis
                laboriosam tenetur enim voluptates doloremque. Doloribus
                officiis consequatur, amet iste qui deleniti?
              </p>
              <Link to="/products" className="btn service-btn">
                read more
              </Link>
            </div>
          </article>
          <article className="service-card">
            <div className="service-img-container">
              <img src={product2} alt="" className="service-img" />
              <span className="service-icon">
                <FaHome />
              </span>
            </div>
            <div className="service-info">
              <h4>home delivery</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                ipsa non, delectus similique cumque modi iusto dolore quis
                laboriosam tenetur enim voluptates doloremque. Doloribus
                officiis consequatur, amet iste qui deleniti?
              </p>
              <Link to="/products" className="btn service-btn">
                read more
              </Link>
            </div>
          </article>
          <article className="service-card">
            <div className="service-img-container">
              <img src={product3} alt="" className="service-img" />
              <span className="service-icon">
                <FaMugHot />
              </span>
            </div>
            <div className="service-info">
              <h4>tea aging</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                ipsa non, delectus similique cumque modi iusto dolore quis
              </p>
              <Link to="/products" className="btn service-btn">
                read more
              </Link>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .services-title {
    margin-top: 4rem;
    margin-bottom: -4rem;
    text-align: center;
  }
  .service-card {
    margin: 2rem 2rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
  }
  .service-card:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .service-img {
    height: 17rem;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .service-info {
    text-align: center;
    padding: 3rem 1rem 2.5rem 1rem;
  }
  .service-info p {
    max-width: 20rem;
    color: var(--clr-grey-5);
    margin: 0 auto;
    min-height: 20vh;
  }
  .service-btn {
    font-size: 0.75rem;
    text-transform: capitalize;
    padding: 0.375rem 0.5rem;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    margin-top: 1.25rem;
  }
  @media screen and (min-width: 768px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .service-img-container {
    position: relative;
  }
  .service-icon {
    position: absolute;
    left: 50%;
    bottom: 0;
    font-size: 2rem;
    color: var(--clr-primary);
    background: var(--clr-primary-light);
    padding: 0.3rem 0.8rem;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    border: 0.375rem solid var(--clr-grey-10);
  }
`;
export default Services;

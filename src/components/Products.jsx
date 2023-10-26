import { Link } from "react-router-dom";
import { styled } from "styled-components";
import product1 from "../assets/images/product-1.jpeg";
import product2 from "../assets/images/product-2.jpeg";
import product3 from "../assets/images/product-3.jpeg";

const Products = () => {
  return (
    <Wrapper>
      <section className="products-center">
        <article className="products-info">
          <div className="section-title">
            <h3>check out</h3>
            <h2>our products</h2>
          </div>
          <p className="product-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            soluta et ipsum deleniti quis blanditiis temporibus suscipit
            explicabo non ea cupiditate laudantium rerum mollitia aperiam
            reprehenderit ipsam, fugiat necessitatibus quia ex? Fugiat natus non
            sapiente aperiam porro omnis sit labore?
          </p>
          <Link to="products" className="btn">
            inventory
          </Link>
        </article>
        <article className="products">
          <div className="product">
            <img src={product1} alt="" className="product-img" />
            <h4 className="product-title">ginger peach tea</h4>
            <h4 className="product-price">$6.99</h4>
          </div>
          <div className="product">
            <img src={product2} alt="" className="product-img" />
            <h4 className="product-title">apple peach tea</h4>
            <h4 className="product-price">$7.99</h4>
          </div>
          <div className="product">
            <img src={product3} alt="" className="product-img" />
            <h4 className="product-title">ginger apple tea</h4>
            <h4 className="product-price">$8.99</h4>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .products-center {
    margin: 2rem;
  }
  .products article {
    padding: 2rem 0;
  }
  .product-text {
    color: var(--grey-5);
    max-width: 30rem;
  }
  .product-img {
    border-radius: var(--radius);
    margin-bottom: 2rem;
    height: 17rem;
    object-fit: cover;
  }
  .product-price {
    color: var(--clr-primary);
  }
  .product {
    margin: 2rem 0;
  }
  @media screen and (min-width: 768px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .products-center {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      /* place-items: center; */
    }
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
  @media screen and (min-width: 1300px) {
    .products-center {
      display: grid;
      grid-template-columns: 30rem 1fr;
      gap: 2rem;
      /* place-items: center; */
    }
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Products;

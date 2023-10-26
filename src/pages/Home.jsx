import { styled } from "styled-components";
import { Skills, About, Products, Services, Contacts } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Skills />
      <About />
      <Products />
      <Services />
      <Contacts />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--clr-grey-10);
`;

export default Home;

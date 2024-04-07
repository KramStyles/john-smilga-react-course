import styled from "styled-components";

const Index = () => {
  return (
    <Wrapper className="p-3 position-fixed w-100">
      Copyright <span>&copy; {new Date().getFullYear()}</span> <br /> All Rights
      Reserved.
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #c6c6c6;
  font-family: Raleway, Poppins, sans-serif;
  text-align: center;
  bottom: 0;
  span {
    color: #814990;
    font-weight: bold;
  }
`;

export default Index;

// styles
import styled from "styled-components";

const Feature = ({ title, subtitle, image, flip }) => {
  return (
    <Wrapper flip={flip}>
      <Section>
        <Container>
          <Header>{title}</Header>
          <Text>{subtitle}</Text>
        </Container>
      </Section>
      <Section img={image}></Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display flex;
height: 600px;
flex-direction: ${(p) => p.flip && "row-reverse"};
box-sizing: border-box;
@media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: ${(p) => p.img && `url(${p.img})`};
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  box-shadow: ${(p) => p.img && "rgba(0, 0, 0, 0.60) 0px 0px 0px 2000px inset"};
`;

const Header = styled.h1`
  text-align: center;
`;

const Text = styled.h3`
  text-align: center;
`;

export default Feature;

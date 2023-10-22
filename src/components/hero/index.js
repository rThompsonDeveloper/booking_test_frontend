// styles
import styled from "styled-components";
import { black } from "../../globals";

// Images
import hero from "../../images/Brand/lake_Erie_Large.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <Title>Your business name here</Title>
      <SubTitle>
        Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
        Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
        Lorum ipsem condo re vondo me ashmond
      </SubTitle>
      <Row>
        <Features href="/#features">View Features</Features>
        <BookNow href="/#book-now">Book Appointment</BookNow>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 540px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-image: url(${hero});
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 0px 2000px inset;
  background-position: bottom;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const SubTitle = styled.h3`
  text-align: center;
  margin-bottom: 40px;
  color: white;
`;

const BookNow = styled.a`
  color: ${black};
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 20px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
    background-color: transparent;
  }
`;

const Features = styled.a`
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 20px;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid white;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${black};
    background-color: white;
    border: 1px solid white;
  }
`;

export default Hero;

// styles
import styled from "styled-components";
import { black } from "../../globals";

// Images
import logo from "../../images/Brand/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Wrapper id="about">
        <Col>
          <Image
            src={logo}
            alt="Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond"
          />
        </Col>
        <Col>
          <Title>YOUR BUSINESS NAME HERE</Title>
          <Text>
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          </Text>
        </Col>
        <Col>
          <Title>The future</Title>
          <Text>
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          </Text>
        </Col>
        <Col>
          <Title>Rewards</Title>
          <Text>
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          </Text>
        </Col>
      </Wrapper>
      <CopyrightWrapper>
        <Copyright>
          Copyright © {year} Your Company Name here!
        </Copyright>
      </CopyrightWrapper>
    </>
  );
};

const CopyrightWrapper = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  background-color: ${black};
`;

const Image = styled.img`
  height: 300px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 40px 10px;
  background-color: white;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Copyright = styled.p`
  color: white;
`;

const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.h3`
  color: ${black};
  font-weight: bold;
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const Text = styled.p`
  color: ${black};
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export default Footer;

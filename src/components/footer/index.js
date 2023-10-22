// styles
import styled from "styled-components";
import { black } from "../../globals";

// Images
import logo from "../../images/Brand/logo.jpg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Wrapper id="about">
        <Col>
          <Image
            src={logo}
            alt="Christopher Mathers Owner of personal private pleasure adventure cruise llc"
          />
        </Col>
        <Col>
          <Title>Personal Private Pleasure Adventure Cruise LLC</Title>
          <Text>
            A cruise that you can enjoy with the friends and/or family! Lunch
            cruise include Famous Locally made Smith’s Hot Dogs grilled on the
            vessel with no MSG, with buns, condiments (ketchup, mustard, relish,
            onions and sauerkraut) a pickle spear, a variety of small bags of
            munchies to choose from and a variety of healthy yogurt to choose
            from. Dinner cruise includes grilled chicken breasts (condiments
            included BBQ sauce and Honey mustard) with a side of macaroni salad
            or potato salad and delicious Granny Smith apple wedges with
            cinnamon sprinkled on top! I provide a cooler full of ice to keep
            your drinks and/or food cold!
          </Text>
        </Col>
        <Col>
          <Title>The future</Title>
          <Text>
            I'm working on getting the money together for the 40 foot Sea Ray
            Express Cruiser upgrade so I can accommodate 8 people comfortably
            and a maximum of 10! Then I'll be able to add two kayaks to the bow
            of the boat and a three seat jet ski as well as a railing system
            that I'll use to take my guests out for some tubing & wake boarding.
            I'm getting a high end drone that I'll use to get video footage of
            the guests having a great time that I'll edit later and put together
            a videography documentation of the highlights of their experience
            called a PERSONAL PRIVATE PLEASURE ADVENTURE CRUISE Memory package.
          </Text>
        </Col>
        <Col>
          <Title>Rewards</Title>
          <Text>
            With every client that they send to me that books a cruise and pays
            a deposit I'll give them a $100 credit towards their next cruise and
            if they send me up to 4 clients I'll give them a free cruise and
            I'll allow them to give those rewards to whoever they want as a
            gift!
          </Text>
        </Col>
      </Wrapper>
      <CopyrightWrapper>
        <Copyright>
          Copyright © {year} Personal Private Pleasure Cruises LLC.
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

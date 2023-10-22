// Styles
import styled from "styled-components";

// Images
import smoking from "../../images/Features/smoking.png";
import food from "../../images/Features/food.png";
import rewards from "../../images/Features/rewards.png";
import ammenities from "../../images/Features/ammenities.png";
import { black, orange } from "../../globals";

const Extras = () => {
  return (
    <Wrapper>
      <Col>
        <Icon
          src={smoking}
          alt="Smoking at personal private adventure cruise llc"
        />
        <Title>Smoking</Title>
        <Text>
          Smoking / Vaping is allowed, Medical marijuanna is allowed with the
          producing of a medical liscence.
        </Text>
      </Col>
      <Col>
        <Icon
          src={food}
          alt="Eating at personal private adventure cruise llc"
        />
        <Title>Food</Title>
        <Text>
          You can bring your own food! Fresh grilled Smiths hotdogs, pickle
          spears and your choice of munchies will be provided!
        </Text>
      </Col>
      <Col>
        <Icon
          src={ammenities}
          alt="Ammenities at personal private adventure cruise llc"
        />
        <Title>Ammenities</Title>
        <Text>
          Freshly laundered beach towels, Varying SPF sun screen lotions &
          bluetooth surround system is all complimentary!
        </Text>
      </Col>
      <Col last>
        <Icon
          src={rewards}
          alt="Rewards at personal private adventure cruise llc"
        />
        <Title>Rewards</Title>
        <Text>
          For every refered guest who schedules & pays the deposit, You'll earn
          a 100$ credit that never expires!
        </Text>
      </Col>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: ${orange};
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${black};
  border-top: 1px solid ${black};
  border-bottom: 1px solid ${black};
  border-right: ${(p) => p.last && "1px solid black"};
`;

const Icon = styled.img`
  height: 200px;
  width: 200px;
`;

const Title = styled.h3`
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

export default Extras;

import { useState, useContext } from "react";

// Styles
import styled from "styled-components";

// Components
import AddReview from "../addReview";

// Globals
import { black, orange, pale } from "../../globals";

// Context
import { ReviewContext } from "../../contexts/ReviewContext";
import Alert from "../alert";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);

  const { reviews } = useContext(ReviewContext);

  const [show, setShow] = useState(false);

  const handleChange = (key) => {
    setSelected(key);
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Wrapper id="testimonials">
      <Title>Happy Customers</Title>
      <Row>
        {reviews.reviews.map(
          (review, i) =>
            review.accepted && (
              <Section
                key={review._id}
                selected={selected === i}
                onMouseOver={() => handleChange(i)}
              >
                <Image src={review.image} />
                <Name>{review.name}</Name>
                <Message>{review.message}</Message>
              </Section>
            )
        )}
      </Row>
      <Add onClick={handleClick}>{show ? "Cancel Review" : "Add Review"}</Add>
      <Alert />
      {show && <AddReview handleClick={handleClick} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  align-items: center;
  background-color: ${pale};
`;

const Image = styled.img`
  max-height: 220px;
`;

const Title = styled.h2`
  text-align: center;
  color: /${black};
  margin: 20px 0px;
`;

const Name = styled.h4`
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #7266ff;
  cursor: pointer;
  box-shadow: black 4px 4px 10px;
  opacity: ${(p) => (p.selected ? "1" : "0.3")};
  transition: opacity 0.3s ease-in-out;
  height: 400px;
`;

const Message = styled.p`
  padding: 0px 10px 40px 10px;
  text-align: center;
`;

const Add = styled.button`
  border: none;
  font-size: 1.2em;
  background: none;
  margin: 20px 0px;
  cursor: pointer;
  color: ${black};
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  padding: 10px 20px;
  &:hover {
    background-color: ${orange};
    color: white;
  }
`;

export default Testimonials;

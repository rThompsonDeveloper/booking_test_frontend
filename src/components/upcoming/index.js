import { useContext } from "react";

// Contexts
import { BookingContext } from "../../contexts/BookingContext";

// Styles
import styled from "styled-components";

const Upcoming = () => {
  const { booking } = useContext(BookingContext);
   return (<Wrapper>
    <Title>Upcoming cruises</Title>
    {booking.booked.map(
      (req) =>
        req.reviewed &&
        req.accepted && (
          <Request key={req._id}>
            <Row>
              <Date>{req.dateOf.slice(0, 10)}</Date>
              <Text>{req.time}</Text>
            </Row>
            <Row>
              <Text>{req.name}</Text>
              <Link href={`tel:${req.phone}`}>{req.phone}</Link>
              <Link href={`mailto:${req.email}`}>{req.email}</Link>
            </Row>
          </Request>
        )
    )}
  </Wrapper>
   )
};

const Wrapper = styled.div``;

const Title = styled.h4``;

const Row = styled.div`
  display: flex;
`;

const Link = styled.a`
  margin-left: 4px;
  padding: 4px;
  border-right: 1px solid rgb(221, 221, 221);
`;

const Request = styled.div`
  padding: 4px;
  margin: 2px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
`;

const Date = styled.p`
  color: blue;
  padding: 4px;
  border-right: 1px solid rgb(221, 221, 221);
  padding-right: 10px;
`;

const Text = styled.p`
  margin-left: 4px;
  padding: 4px;
  border-right: 1px solid rgb(221, 221, 221);
`;

export default Upcoming;

import { useContext } from "react";

// Contexts
import { BookingContext } from "../../contexts/BookingContext";

// Styles
import styled from "styled-components";

const Requests = () => {
  const { booking, accept, deny } = useContext(BookingContext);

  const handleApproval = (id) => {
    accept(id);
  };

  const handleDenial = (id) => {
    deny(id);
  };

  return booking.loading ? (
    <p>loading...</p>
  ) : (
    <Wrapper>
      <Title>Cruise Requests</Title>
      {booking.booked.map(
        (req) =>
          !req.reviewed && (
            <Request key={req._id}>
              <Row>
                <Date>{req.dateOf.slice(0, 10)}</Date>
                <Text>{req.time}</Text>
                <Approve onClick={() => handleApproval(req._id)}>
                  Approve
                </Approve>
                <Deny onClick={() => handleDenial(req._id)}>Deny</Deny>
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
  );
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

const Approve = styled.button`
  background-color: #0ddf0d;
  color: white;
  border-radius: 4px;
  border: none;
  font-size: 1em;
  padding: 4px 10px;
  margin-left: 6px;
`;

const Deny = styled.button`
  background-color: #ff3131;
  color: white;
  border-radius: 4px;
  border: none;
  font-size: 1em;
  padding: 4px 10px;
  margin-left: 6px;
`;

const Text = styled.p`
  margin-left: 4px;
  padding: 4px;
  border-right: 1px solid rgb(221, 221, 221);
`;

export default Requests;

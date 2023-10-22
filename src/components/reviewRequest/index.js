import { useContext } from "react";

// styles
import styled from "styled-components";

// Context
import { ReviewContext } from "../../contexts/ReviewContext";

const ReviewRequest = () => {
  const { reviews, accept, deny } = useContext(ReviewContext);

  const handleApproval = (id) => {
    accept(id);
  };

  const handleDenial = (id) => {
    deny(id);
  };

  return reviews.loading ? (
    <p>loading...</p>
  ) : (
    <Wrapper>
      <Title>Review Requests</Title>
      {reviews.reviews.map(
        (req) =>
          !req.reviewed && (
            <Request key={req._id}>
              <Image src={req.image} />
              <Text>{req.name}</Text>
              <Text>{req.message}</Text>
              <Approve onClick={() => handleApproval(req._id)}>Approve</Approve>
              <Deny onClick={() => handleDenial(req._id)}>Deny</Deny>
            </Request>
          )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4``;

const Image = styled.img`
  height: 200px;
`;

const Request = styled.div`
  padding: 4px;
  margin: 2px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
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

export default ReviewRequest;

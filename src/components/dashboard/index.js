// Styles
import styled from "styled-components";

// Components
import Requests from "../requests";
import ReviewRequest from "../reviewRequest";
import Upcoming from "../upcoming";

const Dashboard = () => {
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <Upcoming />
      <Requests />
      <ReviewRequest />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4px;
`;

const Title = styled.h2`
  text-align: center;
  width: 100%;
  margin: 10px;
`;

export default Dashboard;

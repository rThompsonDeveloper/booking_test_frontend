import { useContext } from "react";

// Contexts
import { AlertContext } from "../../contexts/AlertContext";

// Styles
import styled from "styled-components";

const Alert = () => {
  const { alerts } = useContext(AlertContext);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Wrapper key={alert.id}>
        <Message type={alert.type}>{alert.msg}</Message>
      </Wrapper>
    ))
  );
};

const setColor = (type) => {
  switch (type) {
    case "error":
      return "red";
    default:
      return "green";
  }
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0px;
`;


const Message = styled.p`
  font-size: 1em;
  color: ${(p) => setColor(p.type)};
`;

export default Alert;
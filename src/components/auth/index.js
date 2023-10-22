import { useRef, useContext } from "react";

// styles
import styled from "styled-components";

// contexts
import { UserContext } from "../../contexts/UserContext";

const Auth = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useContext(UserContext);

  const loginUser = (e) => {
    e.preventDefault();
    login(usernameRef.current.value.toLowerCase(), passwordRef.current.value);
  };

  return (
    <Wrapper>
      <Title>Admin Authentication</Title>
      <Container onSubmit={loginUser}>
        <Input
          type="text"
          name="username"
          placeholder="username"
          id="username"
          ref={usernameRef}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          id="password"
          ref={passwordRef}
        />
        <Button type="submit">login</Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Input = styled.input`
  font-size: 1em;
  padding: 2px;
  margin-bottom: 4px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Button = styled.button`
  background: blue;
  color: white;
  font-size: 1em;
  padding: 4px;
  width: 100%;
  border-radius: 4px;
`;

const Title = styled.h2`
  color: blue;
`;

export default Auth;

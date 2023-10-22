import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// styles
import styled from "styled-components";

// Images
import logo from "../../images/Brand/logo.png";
import hamburger from "../../images/icons/Hamburger_icon.svg.png";

// Colors
import { blue } from "../../globals";

const Header = () => {
  const [small, setSmall] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 100)
      );
    }
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Container>
      <TopBar small={small}>
        <Name href="/dashboard">Your Business Name Here</Name>
        <Row>
          <Text left href="tel:999-999-9999">
            999-999-9999
          </Text>
          <Text href="mailto:bookingtestex@gmail.com">bookingtestex@gmail.com</Text>
        </Row>
      </TopBar>
      <Wrapper small={small}>
        <Link to="/">
          <Logo small={small} src={logo} />
        </Link>
        <Menu onClick={handleShow} src={hamburger} alt="hamburger icon pppac" />
        <Nav show={show} small={small}>
          <ScrollLink href="/#features">Features</ScrollLink>
          <ScrollLink href="/#testimonials">Reviews</ScrollLink>
          <ScrollLink href="/#gallery">Gallery</ScrollLink>
          <ScrollLink href="/#about">About</ScrollLink>
          <BookNow href="/#book-now">Book Now</BookNow>
        </Nav>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100000;
`;

const Wrapper = styled.div`
  transition: all 0.3s ease-in-out;
  height: ${(p) => (p.small ? "60px" : "80px")};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.38) 0px 0px 3px;
  background-color: white;
`;

const Name = styled.a`
  color: white;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Text = styled.a`
  color: white;
  text-decoration: none;
  padding-right: ${(p) => (p.left ? "10px" : "0px")};
  margin-right: ${(p) => (p.left ? "10px" : "0px")};
  border-right: ${(p) => (p.left ? "1px solid white" : "none")};
  &:hover {
    font-weight: bold;
  }
`;

const TopBar = styled.div`
  background-color: ${blue};
  display: flex;
  margin-bottom: ${(p) => (p.small ? "0px" : "-30px")};
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
  padding: 4px 30px;
  @media (max-width: 700px) {
    justify-content: flex-end;
    padding: 4px 10px;
  }
`;

const Logo = styled.img`
  transition: all 0.3s ease-in-out;
  height: ${(p) => (p.small ? "56px" : "76px")};
  margin-bottom: -4px;
`;

const Nav = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    display: ${(p) => (p.show ? "flex" : "none")};
    position: absolute;
    background-color: white;
    right: 0px;
    top: ${(p) => (p.small ? "89px" : "80px")};
    box-shadow: rgba(0, 0, 0, 0.38) -1px 1px 3px;
  }
`;

const ScrollLink = styled.a`
  color: #6c6c6c;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 4px 10px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 1200px) {
    text-align: center;
    margin-top: 0px;
  }
  &:hover {
    color: ${blue};
  }
`;

const BookNow = styled.a`
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 4px 20px;
  background-color: ${blue};
  border-radius: 6px;
  border: 1px solid ${blue};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: white;
    color: ${blue};
  }
  @media (max-width: 1200px) {
    border-radius: 0px;
  }
`;

const Menu = styled.img`
  display: none;
  height: 40px;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: inline;
  }
`;

const Row = styled.div`
  display: flex;
`;

export default Header;

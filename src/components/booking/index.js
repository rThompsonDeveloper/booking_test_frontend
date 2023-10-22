import { useContext, useRef } from "react";
import Calender from "react-calendar";
import { differenceInCalendarDays } from "date-fns";

// Styles
import styled from "styled-components";
import { black, blue } from "../../globals";

// Components
import Alert from "../alert";

// Contexts
import { BookingContext } from "../../contexts/BookingContext";

// Images
import lake_erie from "../../images/Booking/lake_Erie.jpg";

const Booking = () => {
  // Contexts
  const { bookCruise, booking } = useContext(BookingContext);

  // Refs
  const calenderRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const timeRef = useRef(null);
  const guestRef = useRef(null);

  const handleChange = (value, e) => {
    console.log(`user has selected ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking appointment");

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      dateOf: calenderRef.current.value,
      message: messageRef.current.value,
      phone: phoneRef.current.value,
      time: timeRef.current.value,
      guests: guestRef.current.value,
    };

    // Book Cruise
    bookCruise(data);
  };

  const disableTiles = ({ date, view }) => {
    function isSameDay(a, b) {
      return differenceInCalendarDays(a, b) === 0;
    }

    const accepted = [];

    // get list of dates to disable
    booking.booked.forEach((day) => {
      if (day.accepted) accepted.push(new Date(day.dateOf));
    });

    if (view === "month") {
      return accepted.find((dDate) => isSameDay(dDate, date));
    }
  };

  return (
    <Wrapper id="book-now">
      <Header>
        <Title>Book Your Appointment</Title>
        <Disclaimer>
        Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
        Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
        Lorum ipsem condo re vondo me ashmond
        </Disclaimer>
        <Row>
          <Col>
            <Pricing style={{ fontWeight: "bold" }}>Pricing</Pricing>
            Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          </Col>
          <Col>
            <Pricing style={{ fontWeight: "bold" }}>
              pricing 2
            </Pricing>
            Lorum ipsem condo re vondo me ashmond Lorum ipsem condo re vondo me ashmond
          </Col>
        </Row>
      </Header>
      <Row>
        <Calender
          onChange={handleChange}
          ref={calenderRef}
          prev2Label={null}
          prevLabel={null}
          next2Label={null}
          tileDisabled={disableTiles}
          minDate={new Date(Date.now())}
        />
        <Form onSubmit={handleSubmit}>
          <Alert />
          <Row>
            <Col>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                placeholder="John Doe"
                id="name"
                ref={nameRef}
              />
            </Col>
            <Col>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="someone@someplace.com"
                ref={emailRef}
              ></Input>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="phone"
                id="phone"
                placeholder="(xxx)xxx-xxxx"
                ref={phoneRef}
              ></Input>
            </Col>
            <Col>
              <Label htmlFor="guests">Guests</Label>
              <Select id="guests" ref={guestRef}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
              </Select>
            </Col>
            <Col>
              <Label htmlFor="time">Time</Label>
              <Select id="time" ref={timeRef}>
                <Option value="5-hour">5 hour</Option>
                <Option value="full-day">Full day</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label htmlFor="message">Message</Label>
              <TextArea
                ref={messageRef}
                id="message"
                placeholder="Hey chris...."
              ></TextArea>
            </Col>
          </Row>
          <Book type="submit">Book Now</Book>
        </Form>
      </Row>
    </Wrapper>
  );
};

const Form = styled.form`
  background-color: white;
  padding: 10px;
  margin-left: 10px;
  border-radius: 6px;
  @media (max-width: 1200px) {
    margin-left: 0px;
    margin-top: 10px;
  }
`;

const Col = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 2px;
  padding: 2px;
`;

const Select = styled.select`
  cursor: pointer;
  background-color: white;
  padding: 2px;
`;

const Option = styled.option`
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 1em;
  border-radius: 4px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  resize: none;
  height: 180px;
`;

const Label = styled.label`
  margin-right: 10px;
  color: ${black};
`;

const Book = styled.button`
  cursor: pointer;
  float: right;
  background-color: ${blue};
  font-size: 1.2em;
  border-radius: 6px;
  padding: 4px 10px;
  color: white;
`;

const Row = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Pricing = styled.p`
  color: white;
`;

const Wrapper = styled.div`
  padding: 60px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(113, 73, 198, 0.9) 0px 0px 0px 2000px inset;
  background-image: url(${lake_erie});
  background-size: cover;
  padding-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 10px;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const Disclaimer = styled.p`
  text-align: center;
  color: #373737;
  font-size: 0.8em;
  color: white;
  margin-bottom: 20px;
  margin-top: -20px;
`;

export default Booking;

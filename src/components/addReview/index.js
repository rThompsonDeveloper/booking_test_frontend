import { useState, useRef, useContext } from "react";

// styles
import styled from "styled-components";
import { blue } from "../../globals";

// Icons
import CameraAltIcon from "../../images/icons/CameraAltIcon.png";

// Context
import { ReviewContext } from "../../contexts/ReviewContext";

const AddReview = ({ handleClick }) => {
  const { addReview } = useContext(ReviewContext);
  const [tempPhoto, setTempPhoto] = useState(CameraAltIcon);
  const [photo, setPhoto] = useState(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    setTempPhoto(URL.createObjectURL(e.target.files[0]));
    setPhoto(e.target.files[0]);
  };

  const sendReview = (e) => {
    e.preventDefault();
    const data = {
      photo: photo,
      name: nameRef.current.value,
      message: messageRef.current.value,
    };
    console.log("Sending review for approval");
    addReview(data);
    handleClick();
  };

  return (
    <Section onSubmit={sendReview}>
      <Image image={tempPhoto}>
        <Upload
          id="uploadBtn"
          type="file"
          accept="image/*"
          multiple={false}
          name="userImage"
          onChange={handleChange}
          hidden
        />
        <Label htmlFor="uploadBtn">Upload</Label>
      </Image>
      <Name
        type="text"
        placeholder="first & last"
        ref={nameRef}
        maxLength="24"
      />
      <Message
        placeholder="This is the best cruise...."
        ref={messageRef}
        maxLength="160"
      />
      <SendReview type="submit">Send Review</SendReview>
    </Section>
  );
};

const SendReview = styled.button`
  color: white;
  font-weight: bold;
  background-color: ${blue};
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 1em;
  border: none;
`;

const Name = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  margin: 10px 0px;
  color: #363636;
  border: none;
  outline: none;
}
`;

const Message = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  border: none;
  outline: none;
`;

const Section = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #7266ff;
  cursor: pointer;
  box-shadow: black 4px 4px 10px;
  height: 400px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  color: white;
  font-weight: 600;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: #000000b0;
`;

const Image = styled.div`
  background-size: cover;
  background-image: ${(p) => `url(${p.image})`};
  height: 220px;
  &:hover {
    ${Label} {
      opacity: 1;
    }
  }
`;

const Upload = styled.input``;

export default AddReview;

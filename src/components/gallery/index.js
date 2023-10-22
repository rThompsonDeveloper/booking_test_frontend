import { useEffect, useState } from "react";

// Styles
import styled from "styled-components";

const Gallery = () => {
  const [images, setImages] = useState({ loading: true, data: {} });
  useEffect(() => {
    function importAll(r) {
      return r.keys().map(r);
    }

    const images = importAll(
      require.context(
        "../../../public/images/featured/",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    setImages({ loading: false, data: images });
  }, []);

  return (
    <Wrapper id="gallery">
      <Title>Gallery</Title>
      <Subtitle>
        Capturing moments you'll want to relive. Upgrade your cruise with
        professional photos and videos of your epic night!
      </Subtitle>
      <Row>
        {images.loading ? (
          <p>loading...</p>
        ) : (
          images.data.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Personal private pleasure adventure cruise gallery photos`}
            />
          ))
        )}
      </Row>
      <Browse>View Full Gallery</Browse>
    </Wrapper>
  );
};

const Title = styled.h2`
  text-align: center;
`;

const Subtitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  margin-top: -30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 60px;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 200px;
  margin: 10px;
  @media (max-width: 1200px) {
    max-width: 360px;
  }
`;

const Browse = styled.button`
  border: none;
  font-size: 1.2em;
  margin: 20px 0px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  padding: 10px 20px;
  background-color: white;
  color: #5a7bff;
  width: fit-content;
  &:hover {
    background-color: #5a7bff;
    color: white;
  }
`;

export default Gallery;

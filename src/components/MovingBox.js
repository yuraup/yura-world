import styled from 'styled-components';

const MovingBox = () => {
  return (
    <MovingBoxWrapper>
      <ScrollBox></ScrollBox>
      <PageBox />
    </MovingBoxWrapper>
  );
};

const MovingBoxWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;
const ScrollBox = styled.div`
  width: 30%;
  height: 100%;

  background-color: aqua;
`;

const PageBox = styled.div`
  width: 70%;
  height: 100%;

  background-color: yellow;
`;

export default MovingBox;

import styled from 'styled-components';
import MovingBox from './MovingBox';

const Main = () => {
  return (
    <>
      <MainWrapper>
        <InfoBox>
          <IntroBox>
            <Title>LEE YURA</Title>
            <IntroText>
              안녕하세요. 개발 공부 중인 이유라입니다. 설명설명설명
            </IntroText>
          </IntroBox>
          <MovingBox />
        </InfoBox>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  width: 80%;
  height: 100vh;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  margin-left: 10%;
  margin-bottom: 5%;
  background-color: ${({ theme }) => theme.colors.coolPink};
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  width: 95%;
  height: 90%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  opacity: 0.8;
`;

const IntroBox = styled.div`
  width: 90%;
  height: 324px;
`;

const Title = styled.p`
  font-size: 40px;
  user-select: none;
`;

const IntroText = styled.p`
  font-size: 25px;
  user-select: none;
`;
export default Main;

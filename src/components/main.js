import styled from 'styled-components';
const Main = () => {
  const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: pink;
  `;
  const Title = styled.p`
    font-size: 20px;
  `;
  return (
    <>
      <MainWrapper>
        <Title>야옹</Title>
      </MainWrapper>
    </>
  );
};

export default Main;

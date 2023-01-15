import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';
const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <TitleBox>
          <Title>Yurasia</Title>
          <Icon />
        </TitleBox>
        <LinkBox>
          <Button>Blog</Button>
          <a
            target='_blank'
            href='https://github.com/yuraup'
            rel='noopener noreferrer'
          >
            <Button>GitHub</Button>
          </a>
          <Button>LinkedIn</Button>
        </LinkBox>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
`;

//Title
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.warmPink};
`;

const Icon = styled(Logo)`
  margin-left: 13px;
  animation-name: colorChange;
  animation-duration: 15s;
  animation-delay: 2s;

  @keyframes colorChange {
    /* 0% {
      outline-color: aqua;
      border: 10px;
      left: 0px;
      top: 0px;
    }
    25% {
      border: 10px;
      fill: yellow;
      left: 200px;
      top: 0px;
    }
    50% {
      background-color: blue;
      left: 200px;
      top: 200px;
    }
    75% {
      background-color: green;
      left: 0px;
      top: 200px;
    }
    100% {
      background-color: red;
      left: 0px;
      top: 0px;
    } */
  }
`;

//Button
const LinkBox = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  margin-right: 45px;
`;

export default Header;

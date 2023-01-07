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
          <Button>GitHub</Button>
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

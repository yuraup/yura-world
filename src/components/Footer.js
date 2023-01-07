import styled from 'styled-components';

function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterEmail>o721@naver.com</FooterEmail>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled.div`
  width: 90%;
  height: 84px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.coolPink};
  opacity: 0.8;
  border-radius: 20px;
  margin: 0 5% 0 5%;
`;

const FooterEmail = styled.p`
  letter-spacing: 1px;
`;

export default Footer;

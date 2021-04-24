import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="img" />
          <SignUp>GET ALL THREE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 80px 40px;
  min-height: 100vh;
  box-sizing: border-box;
  margin-bottom: 10vw;
`;

const BgImage = styled.div`
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
`;

const CTALogoOne = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 12px;
`;

const SignUp = styled.a`
  cursor: pointer;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

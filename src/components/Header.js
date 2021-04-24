import styled from "styled-components";

function Header() {
  return (
    <Container>
      <p>header</p>
    </Container>
  );
}
//46
export default Header;

const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

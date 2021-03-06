import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  background-color: #ffffff;
  border-bottom: 1px solid #e9e8e8;
  z-index: 1;
  width: 100%;
`;

const HeaderContent = styled.nav`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;

const HeaderLogo = styled.img`
  width: 120px;
  height: 38px;
`;

export { HeaderContainer, HeaderContent, HeaderWrapper, HeaderLogo };

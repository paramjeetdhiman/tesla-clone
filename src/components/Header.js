/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src="images/logo.svg" alt="" />
      </a>
      <MenuGroup>
        <div>Model S</div>
        <div>Model X</div>
        <div>Model Y</div>
      </MenuGroup>

      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">Tesla Account</a>
        <MenuIconContainer>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </MenuIconContainer>
      </RightMenu>
    </Container>
  );
};

const Container = styled.div`
  background-color: #e2e2e2;
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const MenuGroup = styled.div`
  display: flex;
  text-transform: uppercase;

  & div {
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  & a {
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    padding-right: 10px;
  }
`;
const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & svg {
    width: 25px;
    height: 25px;
  }
`;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
        <MenuIconContainer onClick={() => setToggleMenu(true)}>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </MenuIconContainer>
      </RightMenu>
      <BurgerNav status={toggleMenu} onClick={() => setToggleMenu(false)}>
        <CloseIcon>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </CloseIcon>

        <li>
          <a href="#"> Model S</a>
        </li>
        <li>
          <a href="#"> Model X</a>
        </li>
        <li>
          <a href="#"> Model Y</a>
        </li>
        <li>
          <a href="#"> Model 3</a>
        </li>
        <li>
          <a href="#"> Exisitng Inventory</a>
        </li>
        <li>
          <a href="#"> Used Inventory</a>
        </li>
        <li>
          <a href="#"> Trade-in</a>
        </li>
        <li>
          <a href="#"> Cybertruck</a>
        </li>
        <li>
          <a href="#"> Roadster</a>
        </li>
        <li>
          <a href="#"> Semi</a>
        </li>
        <li>
          <a href="#"> Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
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

const BurgerNav = styled.div`
  position: fixed;
  width: 300px;
  background: white;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  padding: 20px;
  list-style: none;
  transform: ${(props) =>
    props.status ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseIcon = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: end;
  svg {
    width: 25px;
    height: 25px;
  }
`;

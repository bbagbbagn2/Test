import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';


export default function Desktop() {
    const [togglebar, setTogglebar] = useState();
    const showMenu = () => setTogglebar(!togglebar);

    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <MenuConatainer>
                    <MenuItems>HEADPHONES</MenuItems>
                    <MenuItems>EARPHONES</MenuItems>
                    <MenuItems>SPEAKERS</MenuItems>
                    <MenuItems>EXPLORE</MenuItems>
                </MenuConatainer>
                <AboutContainer>
                    <AiOutlineSearch size="25" cursor="pointer" />
                    <AiOutlineUser size="25" cursor="pointer" />
                    <AiOutlineShoppingCart size="25" cursor="pointer" />
                </AboutContainer>
                <HambergerContainer>
                    <AiOutlineMenu size="30" cursor="pointer" onClick={showMenu}/>
                </HambergerContainer>
                <nav className={togglebar ? "nav-menu active" : "nav-menu"}>
                    <ToggleList>
                        <li><MenuItems>HEADPHONES</MenuItems></li>
                        <li><MenuItems>EARPHONES</MenuItems></li>
                        <li><MenuItems>SPEAKERS</MenuItems></li>
                        <li><MenuItems>EXPLORE</MenuItems></li>
                    </ToggleList>
                </nav>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 78px;
    display: grid;
    align-items: center;
    background: rgba(25, 23, 32, 0.46756417);
    z-index: 999;
    
    .nav-menu {
        position: fixed;
        top: 78px;
        right: -100vw;
        width: 100vw;
        height: 100vh;
        display: flex;
        background: #FFFFFF;
        transition-duration: 0.35s;

        @media (min-width: 768px) {
            display: none;
        }

        &.active{
            right: 0;
        }
    }
`;

const Wrapper = styled.div`
    margin-left: 6.5%;
    margin-right: 6.5%;
    display: grid;
    grid-template-columns: 60px 1fr 10%;
    align-items: center;
    justify-items: stretch;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const LogoContainer = styled.div`
    margin-right: 2%;
`;

const MenuConatainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    opacity: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;

const MenuItems = styled.h2`
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: medium;
    letter-spacing: 1.909091px;
    cursor: pointer;
    
    @media (max-width: 768px) {
        color: rgb(25, 23, 32);
    }
`;

const AboutContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    color: #FFFFFF;

    @media (max-width: 768px) {
        display: none;
    }
`;

const HambergerContainer = styled.div`
    display: none;
    color: #FFFFFF;

    @media (max-width: 768px) {
        display: grid;
        justify-items: end;
    }
`;

const ToggleList = styled.ul`
    list-style:none;
    display: grid;
    gap: 10%;
    place-content: center;

    @media (min-width: 768px) {
        display: none;
    }
`;
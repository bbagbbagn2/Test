import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

import CategoryNav from '../../literal-sauce-drip/CategoryNav/CategoryNav';
import UserNav from '../../literal-sauce-drip/UserNav/UserNav';

export default function Desktop() {
    const [togglebar, setTogglebar] = useState();
    const showMenu = () => setTogglebar(!togglebar);

    return (
        <Header>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <CategoryNav />
            <UserNav />
        </Header>
    );
}

const Header = styled.header`
    position: fixed;
    width: 100%;
    height: 4.85rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(25, 23, 32, 0.46756417);
    z-index: 1000;
`;

const LogoContainer = styled.div`
    position: relative;
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
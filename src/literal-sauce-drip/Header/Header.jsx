import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../../components/Logo';

import CategoryNav from '../CategoryNav/CategoryNav';
import UserNav from '../UserNav/UserNav';

import theme from '../theme';

export default function HeaderProps() {

    return (
        <Header>
            <Logo />
            <CategoryNav />
            <UserNav />
        </Header>
    );
}

const Header = styled.header`
    /* Dimensions */
    width: 100%;
    height: ${theme.header.height};

    /* Layout */
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Styling */
    background: rgba(25, 23, 32, 0.46756417);

    overflow: hidden;
    /* Z-index */
    z-index: 1000;

    @media screen and (max-width: 900px) {    
        position: absolute;
        padding-left: 7.3vw;
        padding-right: 7.3vw;
    }

    @media screen and (min-width: 901px) {    
        position: fixed;  
        padding-left: ${theme.header.padding};
        padding-right: ${theme.header.padding};
    }
`;
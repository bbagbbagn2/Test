import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import FollowLogo from '../../components/FollowLogo';

import CategoryNav from './CategoryNav/CategoryNav';

export default function Footer() {
    return (
        <FooterSection>
            <FooterBox>
                <Logo />
                <HelpList>
                    <CategoryNav />
                </HelpList>
                <FollowLogo />
            </FooterBox>
        </FooterSection>
    );
}

const FooterSection = styled.footer`
    margin-top: 4em;
    padding: 0 9.375%;
    width: 100%;
    height: 21.5em;
    display: grid;
    align-items: center;
    background-color: #2b2835;
`;

const FooterBox = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: start;
    }
`;

const HelpList = styled.ul`
    padding: 0 8%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
`;
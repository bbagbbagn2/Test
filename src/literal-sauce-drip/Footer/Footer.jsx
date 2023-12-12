import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import FollowLogo from '../../components/FollowLogo';

import CategoryNav from './CategoryNav/CategoryNav';
import theme from '../theme';
import NavItem from './NavItem/NavItem';

export default function Footer() {

    return (
        <FooterSection>
        <FooterBox>
            <LogoBox>
                <Logo />
            </LogoBox>
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

const LogoBox = styled.div`
`;

const HelpTitle = styled.p`
    margin: 2px;
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    line-height: 31px;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 20px;
    }
`;
const HelpList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const CompanyList = styled(HelpList)`
    @media (max-width: 768px) {
        display: none;
    }
`;
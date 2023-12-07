import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import FollowLogo from '../../components/FollowLogo';

export default function Main() {

    return (
        <HelpContainer>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <HelpWrapper>
                <HelpTitle>Products</HelpTitle>
                <HelpList>HEADPHONES</HelpList>
                <HelpList>EARPHONES</HelpList>
                <HelpList>SPEAKERS</HelpList>
                <HelpList>ACCESSORIES</HelpList>
                <HelpList>COLLABORATIONS</HelpList>
                <HelpList>BEATSAUDIO</HelpList>
                <HelpList>SPECIAL OFFERS</HelpList>
            </HelpWrapper>
            <HelpWrapper>
                <HelpTitle>Support</HelpTitle>
                <CompanyList>PRODUCT HELP</CompanyList>
                <CompanyList>SERVICE & WARRANTY</CompanyList>
                <CompanyList>REGISTER YOUR BEATS</CompanyList>
                <CompanyList>UPDATE YOUR BEATS</CompanyList>
                <CompanyList>AUTHORIZED SERVICE PROVIDERS</CompanyList>
                <CompanyList>CONTACT SUPPORT</CompanyList>
                <CompanyList>INTERNATIONAL NUMBERS</CompanyList>
            </HelpWrapper>
            <HelpWrapper>
                <HelpTitle>Company</HelpTitle>
                <CompanyList>PRODUCT HELP</CompanyList>
                <CompanyList>NEWS AND EVENTS</CompanyList>
                <CompanyList>PROMOTION TERMS</CompanyList>
                <CompanyList>PRIVACY POLICY</CompanyList>
                <CompanyList>TRADEMARK</CompanyList>
                <CompanyList>TERMS OF USE</CompanyList>
                <CompanyList>COOKIES</CompanyList>
            </HelpWrapper>
            <HelpWrapper>
                <HelpTitle>Follow Us</HelpTitle>
                <FollowLogo />
            </HelpWrapper>
        </HelpContainer>
    );
}
const HelpContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: start;
    justify-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: start;
    }
`;

const HelpWrapper = styled.div`
    width: 100%;
    display: grid;
`;

const LogoWrapper = styled(HelpWrapper)`
    place-items: center;
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
const HelpList = styled.p`
    margin: 2px;
    color: #B8B8B8;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;

    @media (max-width: 768px) {
        margin: 0;
    }
`;

const CompanyList = styled(HelpList)`
    @media (max-width: 768px) {
        display: none;
    }
`;
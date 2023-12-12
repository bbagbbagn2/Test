import React from 'react';
import styled from 'styled-components';

import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';

const social = [
    <BsInstagram />,
    <FaFacebookF />,
    <BsTwitter />,
    <BsTelephoneFill />,
];

export default function FollowLogo() {
    return (
        <div>
            <Heading>Follow Us</Heading>
            <FollowList>

                {social.map((icon, index) => (
                    <Background key={index}>{icon}</Background>
                ))}
            </FollowList>
        </div>
    );
}
const Heading = styled.h1`
    color: #fff;
    font-size: 24px;
    font-family: Montserrat-medium;
    font-weight: 600;
    line-height: 31px;
`;
const FollowList = styled.ul`
    margin-top: 33px;
    width: 165px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 796px) {
        margin-top: -6px;
    }
`;

const Background = styled.div`
    width: 33px;
    height: 33px;
    display: grid;
    place-items: center;
    border:none;
    border-radius: 17px;
    background: #FFFFFF;
    cursor: pointer;
`;